(function () {
  "use strict";

  // ---------------------------------------------------------------------------
  // Constants
  // ---------------------------------------------------------------------------
  var STORAGE_KEY = "olympic-puzzle-results";
  var EPOCH_DATE  = "2026-05-27";
  var MAX_STRIKES = 5;
  var MAX_FOUND   = 3;
  var MAX_RESULTS = 8;
  var BLUR_DELAY  = 150; // ms before hiding search results on blur

  // ---------------------------------------------------------------------------
  // Internal state
  // ---------------------------------------------------------------------------
  var state = null;

  // ---------------------------------------------------------------------------
  // Utility helpers
  // ---------------------------------------------------------------------------

  function todayString() {
    var d = new Date();
    var yyyy = d.getFullYear();
    var mm   = String(d.getMonth() + 1).padStart(2, "0");
    var dd   = String(d.getDate()).padStart(2, "0");
    return yyyy + "-" + mm + "-" + dd;
  }

  function dateToIndex(dateStr) {
    var epoch   = new Date(EPOCH_DATE).getTime();
    var target  = new Date(dateStr).getTime();
    var diff    = target - epoch;
    var days    = Math.floor(diff / 86400000);
    return ((days % window.PUZZLES.length) + window.PUZZLES.length) % window.PUZZLES.length;
  }

  function getPuzzleForDate(dateStr) {
    var idx    = dateToIndex(dateStr);
    var puzzle = window.PUZZLES[idx];
    return Object.assign({}, puzzle, { id: idx });
  }

  function countryByIso3(iso3) {
    if (!window.COUNTRIES) return null;
    for (var i = 0; i < window.COUNTRIES.length; i++) {
      if (window.COUNTRIES[i].iso3 === iso3) return window.COUNTRIES[i];
    }
    return null;
  }

  function countryName(iso3) {
    var c = countryByIso3(iso3);
    return c ? c.name : iso3;
  }

  function medalCount(iso3, puzzle) {
    // Puzzles may carry medal counts keyed by iso3; fall back gracefully.
    if (puzzle && puzzle.medalCounts && puzzle.medalCounts[iso3] !== undefined) {
      return puzzle.medalCounts[iso3];
    }
    var c = countryByIso3(iso3);
    if (c && c.medals !== undefined) return c.medals;
    return null;
  }

  function elapsedSeconds(startTime, endTime) {
    var end = endTime || new Date();
    return Math.round((end.getTime() - startTime.getTime()) / 1000);
  }

  // ---------------------------------------------------------------------------
  // localStorage helpers
  // ---------------------------------------------------------------------------

  function loadStorage() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return {};
      var parsed = JSON.parse(raw);
      if (typeof parsed !== "object" || Array.isArray(parsed)) return {};
      return parsed;
    } catch (e) {
      // Corrupted — reset silently.
      try { localStorage.removeItem(STORAGE_KEY); } catch (_) {}
      return {};
    }
  }

  function saveStorage(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      // Silently swallow quota errors, etc.
    }
  }

  function saveResult() {
    if (!state || state.status === "playing") return;
    var data   = loadStorage();
    var today  = todayString();
    data[today] = {
      puzzleId    : state.puzzle.id,
      event       : state.puzzle.event,
      won         : state.status === "won",
      strikes     : state.strikes,
      timeSeconds : state.timeSeconds,
      guesses     : state.guesses.slice()
    };
    saveStorage(data);
  }

  // ---------------------------------------------------------------------------
  // State initialization / restoration
  // ---------------------------------------------------------------------------

  function buildFreshState(puzzle) {
    return {
      puzzle     : puzzle,
      found      : [],
      guesses    : [],
      strikes    : 0,
      status     : "playing",
      startTime  : null,
      endTime    : null,
      timeSeconds: null
    };
  }

  function restoreStateFromStorage(puzzle, today) {
    var data   = loadStorage();
    var record = data[today];
    if (!record) return null;
    if (record.puzzleId !== puzzle.id) return null; // puzzle changed mid-cycle? ignore

    // Reconstruct found list from guesses against top3.
    var top3     = puzzle.top3 || [];
    var top3Iso3 = top3.map(function (e) { return e ? e.iso3 : null; });
    var found    = [];
    var guesses  = record.guesses || [];
    for (var i = 0; i < guesses.length; i++) {
      if (top3Iso3.indexOf(guesses[i]) !== -1 && found.indexOf(guesses[i]) === -1) {
        found.push(guesses[i]);
      }
    }

    return {
      puzzle     : puzzle,
      found      : found,
      guesses    : guesses.slice(),
      strikes    : record.strikes,
      status     : record.won ? "won" : "lost",
      startTime  : null, // not persisted; only matters during live play
      endTime    : null,
      timeSeconds: record.timeSeconds
    };
  }

  // ---------------------------------------------------------------------------
  // DOM helpers
  // ---------------------------------------------------------------------------

  function el(id) {
    return document.getElementById(id);
  }

  function show(elem) {
    if (elem) elem.removeAttribute("hidden");
  }

  function hide(elem) {
    if (elem) elem.setAttribute("hidden", "");
  }

  // ---------------------------------------------------------------------------
  // Rendering
  // ---------------------------------------------------------------------------

  function renderPuzzleHeader() {
    var eventEl  = el("puzzle-event");
    var genderEl = el("puzzle-gender");
    var seasonEl = el("puzzle-season");
    if (eventEl)  eventEl.textContent  = state.puzzle.event  || "";
    if (genderEl) genderEl.textContent = state.puzzle.gender || "";
    if (seasonEl) {
      var season = state.puzzle.season || "Summer";
      seasonEl.textContent = season + " Olympics";
      seasonEl.className = "event-season event-season--" + season.toLowerCase();
    }
  }

  function renderFoundList() {
    var container = el("found-list");
    if (!container) return;

    var top3 = state.puzzle.top3 || [];
    var slots = container.querySelectorAll(".found-slot");

    for (var rank = 0; rank < MAX_FOUND; rank++) {
      var slot = slots[rank];
      if (!slot) continue;

      // top3 entries are objects: { iso3, country, medals }
      var entry = top3[rank];
      var iso3 = entry ? entry.iso3 : null;
      var isFound = iso3 && state.found.indexOf(iso3) !== -1;
      var isGameOver = state.status !== "playing";

      var rankSpan  = slot.querySelector(".found-slot__rank");
      var nameSpan  = slot.querySelector(".found-slot__country");
      var medalSpan = slot.querySelector(".found-slot__medals");

      if (isFound || (isGameOver && iso3)) {
        slot.classList.add("found");
        if (nameSpan) nameSpan.textContent = entry ? entry.country : (iso3 ? countryName(iso3) : "?");
        if (medalSpan) medalSpan.textContent = entry && entry.medals != null ? entry.medals + " medals" : "";
      } else {
        slot.classList.remove("found");
        if (nameSpan) nameSpan.textContent = "?";
        if (medalSpan) medalSpan.textContent = "";
      }
    }
  }

  function renderStrikes() {
    var container = el("strikes-display");
    if (!container) return;

    var dots = container.querySelectorAll(".strike-dot");
    for (var i = 0; i < dots.length; i++) {
      if (i < state.strikes) {
        dots[i].classList.add("used");
        dots[i].setAttribute("aria-label", "Strike used");
      } else {
        dots[i].classList.remove("used");
        dots[i].setAttribute("aria-label", "Strike remaining");
      }
    }

    // Update the container's aria-label for screen readers.
    container.setAttribute("aria-label", state.strikes + " of " + MAX_STRIKES + " strikes used");
  }

  function renderBanner() {
    var banner = el("message-banner");
    if (!banner) return;

    var textEl = banner.querySelector(".message-banner__text") || banner;

    if (state.status === "playing") {
      textEl.textContent = "";
      banner.classList.remove("win", "loss");
      hide(banner);
      return;
    }

    show(banner);
    if (state.status === "won") {
      var time = state.timeSeconds !== null
        ? " in " + formatTime(state.timeSeconds)
        : "";
      textEl.textContent = "You got it" + time + "! Come back tomorrow for a new puzzle.";
      banner.classList.remove("loss");
      banner.classList.add("win");
    } else {
      var answerNames = (state.puzzle.top3 || []).map(function (entry) {
        return entry && entry.country ? entry.country : countryName(entry);
      }).join(", ");
      textEl.textContent = "Better luck tomorrow! The answers were: " + answerNames + ".";
      banner.classList.remove("win");
      banner.classList.add("loss");
    }
  }

  function renderPlayAgain() {
    var area = el("play-again-area");
    if (!area) return;
    if (state.status !== "playing") {
      show(area);
    } else {
      hide(area);
    }
  }

  function renderSearchResults(results) {
    var container = el("search-results");
    if (!container) return;

    container.innerHTML = "";
    if (!results || results.length === 0) {
      hide(container);
      return;
    }

    show(container);
    for (var i = 0; i < results.length; i++) {
      var item = document.createElement("li");
      item.setAttribute("role", "option");
      item.setAttribute("data-iso3", results[i].iso3);
      item.textContent = results[i].name + " (" + results[i].iso3 + ")";

      (function (iso3) {
        item.addEventListener("mousedown", function (e) {
          // Use mousedown so it fires before the input's blur event.
          e.preventDefault();
          Game.guess(iso3);
          clearSearchUI();
        });
      })(results[i].iso3);

      container.appendChild(item);
    }
  }

  function clearSearchUI() {
    var input     = el("search-input");
    var container = el("search-results");
    if (input)     input.value    = "";
    if (container) {
      container.innerHTML = "";
      hide(container);
    }
  }

  function renderHistory() {
    var tbody   = el("history-rows");
    var emptyEl = el("history-empty");
    if (!tbody) return;

    var data  = loadStorage();
    var dates = Object.keys(data).sort().reverse(); // most recent first

    tbody.innerHTML = "";

    if (dates.length === 0) {
      if (emptyEl) show(emptyEl);
      return;
    }

    if (emptyEl) hide(emptyEl);

    for (var i = 0; i < dates.length; i++) {
      var d   = dates[i];
      var rec = data[d];

      var tr = document.createElement("tr");

      var tdDate = document.createElement("td");
      tdDate.textContent = d;

      var tdEvent = document.createElement("td");
      tdEvent.textContent = rec.event || "";

      var tdResult = document.createElement("td");
      tdResult.textContent = rec.won ? "Won" : "Lost";
      tdResult.className   = rec.won ? "result-win" : "result-loss";

      var tdStrikes = document.createElement("td");
      tdStrikes.textContent = rec.strikes + "/" + MAX_STRIKES;

      var tdTime = document.createElement("td");
      tdTime.textContent = rec.timeSeconds !== null && rec.timeSeconds !== undefined
        ? formatTime(rec.timeSeconds)
        : "--";

      tr.appendChild(tdDate);
      tr.appendChild(tdEvent);
      tr.appendChild(tdResult);
      tr.appendChild(tdStrikes);
      tr.appendChild(tdTime);
      tbody.appendChild(tr);
    }
  }

  function formatTime(seconds) {
    if (seconds === null || seconds === undefined) return "--";
    var m = Math.floor(seconds / 60);
    var s = seconds % 60;
    return m + ":" + String(s).padStart(2, "0");
  }

  function renderAll() {
    renderPuzzleHeader();
    renderFoundList();
    renderStrikes();
    renderBanner();
    renderPlayAgain();
  }

  // ---------------------------------------------------------------------------
  // Public API
  // ---------------------------------------------------------------------------

  var Game = {

    // ------------------------------------------------------------------
    // init() — call on DOMContentLoaded
    // ------------------------------------------------------------------
    init: function () {
      if (!window.PUZZLES || !window.PUZZLES.length) {
        console.error("Game.init: window.PUZZLES is not loaded.");
        return;
      }
      if (!window.COUNTRIES || !window.COUNTRIES.length) {
        console.error("Game.init: window.COUNTRIES is not loaded.");
        return;
      }

      var today  = todayString();
      var puzzle = getPuzzleForDate(today);

      // Try to restore from localStorage first.
      var restored = restoreStateFromStorage(puzzle, today);
      state = restored || buildFreshState(puzzle);

      renderAll();
      attachInputListeners();
      attachHistoryListener();

      // Hide play-again-area if still playing.
      if (state.status === "playing") {
        hide(el("play-again-area"));
      }

      // Hide search results initially.
      hide(el("search-results"));
    },

    // ------------------------------------------------------------------
    // search(query) — filter COUNTRIES; return max 8 matches
    // ------------------------------------------------------------------
    search: function (query) {
      if (!query || query.length < 1) return [];
      if (!window.COUNTRIES) return [];

      var q       = query.trim().toLowerCase();
      var results = [];
      var already = state ? state.guesses : [];

      for (var i = 0; i < window.COUNTRIES.length; i++) {
        if (results.length >= MAX_RESULTS) break;

        var c = window.COUNTRIES[i];

        // Skip already-guessed countries.
        if (already.indexOf(c.iso3) !== -1) continue;

        // Match against name, iso3, and aliases array.
        var match = false;

        if (c.name && c.name.toLowerCase().indexOf(q) !== -1) {
          match = true;
        }
        if (!match && c.iso3 && c.iso3.toLowerCase().indexOf(q) !== -1) {
          match = true;
        }
        if (!match && Array.isArray(c.aliases)) {
          for (var j = 0; j < c.aliases.length; j++) {
            if (c.aliases[j].toLowerCase().indexOf(q) !== -1) {
              match = true;
              break;
            }
          }
        }

        if (match) results.push(c);
      }

      return results;
    },

    // ------------------------------------------------------------------
    // guess(iso3) — submit a guess
    // ------------------------------------------------------------------
    guess: function (iso3) {
      if (!state) return;
      if (state.status !== "playing") return;
      if (!iso3) return;

      iso3 = iso3.toUpperCase();

      // Ignore duplicate guesses (shouldn't reach here, but safety net).
      if (state.guesses.indexOf(iso3) !== -1) return;

      // Record start time on first guess.
      if (state.guesses.length === 0) {
        state.startTime = new Date();
      }

      state.guesses.push(iso3);

      var top3     = state.puzzle.top3 || [];
      var top3Iso3 = top3.map(function (e) { return e ? e.iso3 : null; });

      if (top3Iso3.indexOf(iso3) !== -1 && state.found.indexOf(iso3) === -1) {
        // Correct guess.
        state.found.push(iso3);

        if (state.found.length >= MAX_FOUND) {
          // Player found all 3 — win!
          state.status     = "won";
          state.endTime    = new Date();
          state.timeSeconds = state.startTime
            ? elapsedSeconds(state.startTime, state.endTime)
            : null;
          saveResult();
        }
      } else {
        // Wrong guess.
        state.strikes++;

        if (state.strikes >= MAX_STRIKES) {
          // Too many strikes — loss.
          state.status     = "lost";
          state.endTime    = new Date();
          state.timeSeconds = state.startTime
            ? elapsedSeconds(state.startTime, state.endTime)
            : null;
          saveResult();
        }
      }

      renderAll();

      // Disable input if game is over.
      if (state.status !== "playing") {
        var input = el("search-input");
        if (input) input.disabled = true;
        clearSearchUI();
      }
    },

    // ------------------------------------------------------------------
    // getState() — return a shallow copy of current state
    // ------------------------------------------------------------------
    getState: function () {
      if (!state) return null;
      return {
        puzzle     : state.puzzle,
        found      : state.found.slice(),
        guesses    : state.guesses.slice(),
        strikes    : state.strikes,
        status     : state.status,
        startTime  : state.startTime,
        endTime    : state.endTime,
        timeSeconds: state.timeSeconds
      };
    },

    // ------------------------------------------------------------------
    // openHistory() — open history panel
    // ------------------------------------------------------------------
    openHistory: function () {
      var panel    = el("history-panel");
      var backdrop = el("history-backdrop");
      if (!panel) return;

      renderHistory();
      panel.classList.add("open");
      panel.setAttribute("aria-hidden", "false");
      if (backdrop) backdrop.classList.add("open");
    },

    // ------------------------------------------------------------------
    // closeHistory() — close history panel
    // ------------------------------------------------------------------
    closeHistory: function () {
      var panel    = el("history-panel");
      var backdrop = el("history-backdrop");
      if (panel) {
        panel.classList.remove("open");
        panel.setAttribute("aria-hidden", "true");
      }
      if (backdrop) backdrop.classList.remove("open");
    }
  };

  // ---------------------------------------------------------------------------
  // Event listener setup
  // ---------------------------------------------------------------------------

  function attachInputListeners() {
    var input     = el("search-input");
    var container = el("search-results");
    if (!input) return;

    // Disable input if game is already over (restored from storage).
    if (state && state.status !== "playing") {
      input.disabled = true;
    }

    input.addEventListener("input", function () {
      if (!state || state.status !== "playing") return;
      var query   = input.value;
      var results = Game.search(query);
      renderSearchResults(results);
    });

    input.addEventListener("blur", function () {
      // Delay so mousedown on result items fires first.
      setTimeout(function () {
        if (container) {
          container.innerHTML = "";
          hide(container);
        }
      }, BLUR_DELAY);
    });

    input.addEventListener("focus", function () {
      if (!state || state.status !== "playing") return;
      var query = input.value;
      if (query.length >= 1) {
        renderSearchResults(Game.search(query));
      }
    });

    // Keyboard navigation: Enter selects the first result.
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        var firstItem = container && container.querySelector("li[data-iso3]");
        if (firstItem) {
          var iso3 = firstItem.getAttribute("data-iso3");
          if (iso3) {
            Game.guess(iso3);
            clearSearchUI();
          }
        }
      }
    });
  }

  function attachHistoryListener() {
    var btn      = el("history-btn");
    var closeBtn = el("history-close-btn");
    var backdrop = el("history-backdrop");

    if (btn) {
      btn.addEventListener("click", function () {
        Game.openHistory();
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener("click", function () {
        Game.closeHistory();
      });
    }

    if (backdrop) {
      backdrop.addEventListener("click", function () {
        Game.closeHistory();
      });
    }
  }

  // ---------------------------------------------------------------------------
  // Expose public API
  // ---------------------------------------------------------------------------
  window.Game = Game;

})();
