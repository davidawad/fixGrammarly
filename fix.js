
// Padolsey's regex selector for jquery
// https://j11y.io/snippets/regex-selector-for-jquery/
jQuery.expr[':'].regex = function(elem, index, match) {
    var matchParams = match[3].split(','),
        validLabels = /^(data|css):/,
        attr = {
            method: matchParams[0].match(validLabels) ?
                        matchParams[0].split(':')[0] : 'attr',
            property: matchParams.shift().replace(validLabels,'')
        },
        regexFlags = 'ig',
        regex = new RegExp(matchParams.join('').replace(/^\s+|\s+$/g,''), regexFlags);
    return regex.test(jQuery(elem)[attr.method](attr.property));
}


var LINE_SELECTOR = "div:regex(class, (_.{5} ?){3})";
var MENU_SELECTOR = "grammarly-card div div div div div div div div";

// click the button so david doesn't have to
function grammarCorrection(elem) {
    console.log("clicking on button in dropdown");
    clickLine();
    clickMenu();
}

function clickLine() {
    console.log("clicking on line to reveal popup.");
    simulateHover($(LINE_SELECTOR)[0])
}


function clickMenu() {
    console.log("clicking on menu to correct grammar.");
    simulateClick($(MENU_SELECTOR)[1]);
}


function simulateClick(elem) {

  if (typeof undefined === typeof elem) {
     return;
  }

  // find the grammarly div and click within the menu to correct
  var evt = new MouseEvent("click");
  elem.dispatchEvent(evt);
}


function simulateHover(elem) {

  if (typeof undefined === typeof elem) {
     return;
  }

  // find the grammarly div and click within the menu to correct
  var evt = new MouseEvent("mouseenter");
  elem.dispatchEvent(evt);
}




// TL;DR fuck pseudo elements
// look for these damn line elements
function detectGrammarLines() {
    return ($(LINE_SELECTOR).length >= 2);
}


function checkErrors(){
  // look for the red lines
  if (!detectGrammarLines()){
    console.log("no lines found.");
    return;
  }

  // click the damn thing
  grammarCorrection();
}


// window.setInterval(checkErrors, 1000);
