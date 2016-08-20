// ==UserScript==
// @name         WaniKani Lesson Overlearning
// @namespace    normful
// @version      0.2.0
// @description  Always automatically click the 'Need more time' button after lessons to enable overlearning.
// @author       Norman Sue
// @include      http://www.wanikani.com/lesson/session
// @include      https://www.wanikani.com/lesson/session
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var bindHandlers = function() {
        var needMoreTimeButton = $('#quiz-ready-read-lessons');

        var clickNeedMoreTimeButton = function() {
            if (needMoreTimeButton.is(':visible')) {
                needMoreTimeButton.click();
            }
        };

        var keyHandler = function(event) {
            var isRightArrow = event.which === 39;
            var isEnter      = event.which === 13;
            var isD          = event.which === 68;

            if (isRightArrow || isEnter || isD) {
                clickNeedMoreTimeButton();
            }
        };

        $('#next-btn').on('click', clickNeedMoreTimeButton);

        $(document).on('keyup', keyHandler);
    };

    setTimeout(bindHandlers, 5000);

})();
