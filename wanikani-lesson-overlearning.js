// ==UserScript==
// @name         WaniKani Lesson Overlearning
// @namespace    http://tampermonkey.net/
// @version      0.1.0
// @description  Always click the not ready button at the end of lessons
// @author       Norman Sue
// @match        https://www.wanikani.com/lesson/session
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var bindHandler = function() {
        $('#next-btn').on("click", function() {
            var notReadyButton = $("#quiz-ready-read-lessons");
            if (notReadyButton.is(":visible")) {
                notReadyButton.click();
            }
        });
    };
    setTimeout(bindHandler, 5000);
})();
