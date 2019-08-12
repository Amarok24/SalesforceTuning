// ==UserScript==
// @name         Salesforce Lightning Tuning
// @namespace    http://tampermonkey.net/
// @version      0.15
// @description  Small improvements to Salesforce.
// @author       Amarok24
// @include      https://monster.lightning.force.com/*
// @run-at       document-idle
// @grant        none
// Author: https://github.com/Amarok24
// ==/UserScript==

(function () {
    "use strict";

    function selectCases() {
        var casesSelection = document.getElementById("input-7-2-7");

        if (casesSelection) {
            casesSelection.click(); // select "Cases" from drop-down menu
            console.info('SF Lightning Tuning says: "Cases" should be selected now');
        } else {
         // drop-down list does not exist yet (gets dynamically created when first clicking at menu)
            console.info('SF Lightning Tuning says: drop-down menu does not exist, clicking to create it...');
            document.getElementById("dropdown-element-7").click();
            window.setTimeout(myFocus, 300);
        }
    }

    function focusSearch() {
        document.getElementsByClassName("uiInputTextForAutocomplete")[0].focus(); // focus and click on search field
        document.getElementsByClassName("uiInputTextForAutocomplete")[0].click();
    }

    function myFocus(ev) {
        console.info('SF Lightning Tuning says: window got focus, selecting Cases and focusing search field...');
        //window.setTimeout(selectCases, 200);
        selectCases();
        window.setTimeout(focusSearch, 50);
    }

    console.log("SF Lightning Tuning userscript started");
    window.addEventListener("focus", myFocus);
    myFocus();

})();
