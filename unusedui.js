// ==UserScript==
// @name         UnUsedUI
// @version      0.1
// @description  UnusedUI Helper
// @author       Apple502j and Kenny2scratch
// @match        https://en.scratch-wiki.info/wiki/*
// @match        https://en.scratch-wiki.info/w/*
// ==/UserScript==

// (C) 2018 Apple502j,Kenny2github All rights reserved

function getQueryVariable(variable) {
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

function done(settings) {
    var summs = settings.split(';;');
    var lab = document.getElementById('mw-editpage-watch');
    lab.innerHTML = '';

    var label = document.createElement('label');
    label.innerHTML = 'Watch Summary:';
    label.for = 'wpSummary';
    lab.appendChild(label);

    summs.filter(function(i){
        return i.trim() !== '';
    }).forEach(function(i){
        var summ = document.createElement('code');
        summ.style.margin = '0.5em';
        summ.style.borderRadius = '2px';
        summ.style.border = '1px solid #d9dbe0';
        summ.style.backgroundColor = 'f8f9fa';
        summ.style.padding = '1px 4px';
        summ.title = 'UUUI:';
        summ.onclick = function(){
            document.getElementById('wpTextbox1').value += "{{unusedui|year={{subst:REVISIONYEAR}}|month={{subst:REVISIONMONTH1}}|day={{subst:REVISIONDAY}}}}";
            document.getElementById('wpSummary').value = this.innerHTML;
            document.getElementById('wpSave').click();
        };
        summ.innerHTML = i;
        lab.appendChild(summ);
    });
}

if (['edit', 'submit'].includes(getQueryVariable('action')) && getQueryVariable('section') != 'new') {
    summaries = "Unused User Image:put {{unusedui}}";
    done(summaries);
}
