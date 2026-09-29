/* quiz.js — shared quiz widget for course lessons.
 *
 * Markup contract:
 *   <div class="quiz" data-quiz>
 *     <p class="quiz-q"><strong>Q1.</strong> …question…</p>
 *     <div class="quiz-opts">
 *       <button class="quiz-opt" data-correct="true" data-expl="…why right…">Option A</button>
 *       <button class="quiz-opt" data-expl="…why wrong…">Option B</button>
 *       …
 *     </div>
 *     <p class="quiz-fb" hidden></p>
 *   </div>
 *
 * Behaviour: options shuffle on load (no positional hints), first click grades,
 * the chosen option is marked, the correct one is revealed if missed, and the
 * explanation for the clicked option is shown. A floating score counter
 * tallies hits across all quizzes on the page.
 */
(function () {
  var quizzes = Array.prototype.slice.call(document.querySelectorAll("[data-quiz]"));
  if (!quizzes.length) return;

  var score = document.createElement("div");
  score.className = "score";
  score.textContent = "Score 0 / " + quizzes.length;
  document.body.prepend(score);

  var hits = 0;

  function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = arr[i]; arr[i] = arr[j]; arr[j] = t;
    }
    return arr;
  }

  quizzes.forEach(function (quiz) {
    var optsEl = quiz.querySelector(".quiz-opts");
    if (!optsEl) return;
    var opts = Array.prototype.slice.call(optsEl.children);
    shuffle(opts).forEach(function (o) { optsEl.appendChild(o); });

    var fb = quiz.querySelector(".quiz-fb");

    opts.forEach(function (opt) {
      opt.addEventListener("click", function () {
        if (quiz.dataset.done) return;
        quiz.dataset.done = "1";

        var ok = opt.dataset.correct === "true";
        if (ok) hits += 1;

        opt.classList.add(ok ? "opt-correct" : "opt-wrong");
        if (!ok) {
          var right = quiz.querySelector('[data-correct="true"]');
          if (right) right.classList.add("opt-reveal");
        }
        opts.forEach(function (o) { o.disabled = true; });

        if (fb) {
          fb.textContent = opt.dataset.expl || "";
          fb.hidden = false;
        }
        score.textContent = "Score " + hits + " / " + quizzes.length;
        quiz.classList.add("quiz-done");
      });
    });
  });
})();
