// ==UserScript==
// @name         Salesforce Tuning
// @namespace    http://tampermonkey.net/
// @version      0.13
// @description  Small improvements to Salesforce.
// @author       Amarok24
// @include      https://*.my.salesforce.com/*
// @run-at       document-idle
// @grant        none
// Author: https://github.com/Amarok24
// ==/UserScript==

(function () {
    "use strict";


    function letsDoIt() {
        //var i;

        var fileList = document.querySelector(".eWidgetBody");
        fileList.style.height = "auto";

        var lowerMainSection = document.querySelector(".entityFeedLayout .lowerMainSection");
        lowerMainSection.style.width = "1000px";

        var rightContent = document.querySelector(".entityFeedLayout .rightContent");
        rightContent.style.width = "280px";
        rightContent.style.border = "1px solid orange";
        rightContent.style.padding = "15px 5px 5px 5px";

        var centerContent = document.querySelector(".entityFeedLayout .centerContent");
        centerContent.style.width = "680px";

        var feedcontainer = document.querySelector(".feedcontainer");
        feedcontainer.style.maxWidth = "700px";

        var showAllButton = document.querySelectorAll(".eFilesWidgetContainer .optionLabel");
        if (showAllButton.length) {
            showAllButton[0].style.backgroundColor = "orange"; // Show Recent - bgrcolor
            showAllButton[0].style.padding = "5px 10px";
            showAllButton[1].click(); // Show All - click
        }
        /*
            for (i = 0; i < showAllButton.length; i++) {
                showAllButton[i].style.backgroundColor = "orange";
                showAllButton[i].style.padding = "5px";
            }
        */

    }

    function checkIfFileListExists() {
        if (document.querySelector(".eWidgetBody")) {
            console.info("SalesforceTuning INFO:  .eWidgetBody (fileList) exists! Making changes now and clearing intervalID...");
            letsDoIt();
        } else {
            console.info("SalesforceTuning WARNING:  .eWidgetBody (fileList) currently not available");
        }
    }

    function myFocus(ev) {
        console.info('SalesforceTuning says: window got focus, focusing search box now');
        document.getElementById("phSearchInput").focus();
    }

    window.addEventListener("focus", myFocus);
    myFocus();

    console.log("SalesforceTuning userscript started");

    checkIfFileListExists();

})();
