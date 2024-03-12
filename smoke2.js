// First function
function openFirstPopup() {
    var popup = window.open('https://bit.ly/amber--more?utm_source=right', '_blank');

    function attemptOpen() {
        if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
            setTimeout(function() {
                popup = window.open('https://bit.ly/amber--more?utm_source=right', '_blank');
                attemptOpen(); // Retry recursively
            }, 1);
        }
    }

    attemptOpen();
}

function triggerOpenFirstPopup() {
    openFirstPopup();
}

// Second function
function openSecondPopup() {
    var popup = window.open('https://bit.ly/kate---kurray?utm_source=bid', '_blank');

    function attemptOpen() {
        if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
            setTimeout(function() {
                popup = window.open('https://bit.ly/kate---kurray?utm_source=bid', '_blank');
                attemptOpen(); // Retry recursively
            }, 1);
        }
    }

    attemptOpen();
}
function triggerOpenSecondPopup() {
    openSecondPopup();
}

// Third function
function openThirdPopup() {
    var popup = window.open('https://bit.ly/lisa___ann?utm_source=una', '_blank');

    function attemptOpen() {
        if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
            setTimeout(function() {
                popup = window.open('https://bit.ly/lisa___ann?utm_source=una', '_blank');
                attemptOpen(); // Retry recursively
            }, 1);
        }
    }

    attemptOpen();
}
function triggerOpenThirdPopup() {
    openThirdPopup();
}

// Fourth function
function openFourthPopup() {
    var popup = window.open('https://bit.ly/kayla___cola?utm_source=kad', '_blank');

    function attemptOpen() {
        if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
            setTimeout(function() {
                popup = window.open('https://bit.ly/kayla___cola?utm_source=kad', '_blank');
                attemptOpen(); // Retry recursively
            }, 1);
        }
    }

    attemptOpen();
}
function triggerOpenFourthPopup() {
    openFourthPopup();
}

// Fifth function
function openFifthPopup() {
    var popup = window.open('https://bit.ly/melody---marks?utm_source=river', '_blank');

    function attemptOpen() {
        if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
            setTimeout(function() {
                popup = window.open('https://bit.ly/melody---marks?utm_source=river', '_blank');
                attemptOpen(); // Retry recursively
            }, 1);
        }
    }

    attemptOpen();
}
function triggerOpenFifthPopup() {
    openFifthPopup();
}

// sixth function
function openSixthPopup() {
    var popup = window.open('https://bit.ly/kenzie---anne?utm_source=amave', '_blank');

    function attemptOpen() {
        if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
            setTimeout(function() {
                popup = window.open('https://bit.ly/kenzie---anne?utm_source=amave', '_blank');
                attemptOpen(); // Retry recursively
            }, 1);
        }
    }

    attemptOpen();
}
function triggerOpenSixthPopup() {
    openSixthPopup();
}

// seventh function
function openSeventhPopup() {
    var popup = window.open('https://bit.ly/anny-_walker?utm_source=monetag', '_blank');

    function attemptOpen() {
        if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
            setTimeout(function() {
                popup = window.open('hhttps://bit.ly/anny-_walker?utm_source=monetag', '_blank');
                attemptOpen(); // Retry recursively
            }, 1);
        }
    }

  // eight function
function openEightPopup() {
    var popup = window.open('https://bit.ly/dainty-wilder?utm_source=stuff', '_blank');

    function attemptOpen() {
        if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
            setTimeout(function() {
                popup = window.open('https://bit.ly/dainty-wilder?utm_source=stuff', '_blank');
                attemptOpen(); // Retry recursively
            }, 1);
        }
    }

    attemptOpen();
}
function triggerOpenEightPopup() {
    openEightPopup();
}

  window.addEventListener('load', triggerOpenFirstPopup);
window.addEventListener('scroll', triggerOpenFirstPopup);
window.addEventListener('keydown', triggerOpenFirstPopup);
document.addEventListener('scroll', triggerOpenFirstPopup);
document.addEventListener('keydown', triggerOpenFirstPopup);
window.addEventListener('beforeunload', triggerOpenFirstPopup);
document.addEventListener('beforeunload', triggerOpenFirstPopup);

window.addEventListener('load', triggerOpenSecondPopup);
window.addEventListener('scroll', triggerOpenSecondPopup);
window.addEventListener('keydown', triggerOpenSecondPopup);
document.addEventListener('scroll', triggerOpenSecondPopup);
document.addEventListener('keydown', triggerOpenSecondPopup);
window.addEventListener('beforeunload', triggerOpenSecondPopup);
document.addEventListener('beforeunload', triggerOpenSecondPopup);

window.addEventListener('load', triggerOpenThirdPopup);
window.addEventListener('scroll', triggerOpenThirdPopup);
window.addEventListener('keydown', triggerOpenThirdPopup);
document.addEventListener('scroll', triggerOpenThirdPopup);
document.addEventListener('keydown', triggerOpenThirdPopup);
window.addEventListener('beforeunload', triggerOpenThirdPopup);
document.addEventListener('beforeunload', triggerOpenThirdPopup);

window.addEventListener('load', triggerOpenFourthPopup);
window.addEventListener('scroll', triggerOpenFourthPopup);
window.addEventListener('keydown', triggerOpenFourthPopup);
document.addEventListener('scroll', triggerOpenFourthPopup);
document.addEventListener('keydown', triggerOpenFourthPopup);
window.addEventListener('beforeunload', triggerOpenFourthPopup);
document.addEventListener('beforeunload', triggerOpenFourthPopup);

window.addEventListener('load', triggerOpenFifthPopup);
window.addEventListener('scroll', triggerOpenFifthPopup);
window.addEventListener('keydown', triggerOpenFifthPopup);
document.addEventListener('scroll', triggerOpenFifthPopup);
document.addEventListener('keydown', triggerOpenFifthPopup);
window.addEventListener('beforeunload', triggerOpenFifthPopup);
document.addEventListener('beforeunload', triggerOpenFifthPopup);

window.addEventListener('load', triggerOpenSixthPopup);
window.addEventListener('scroll', triggerOpenSixthPopup);
window.addEventListener('keydown', triggerOpenSixthPopup);
document.addEventListener('scroll', triggerOpenSixthPopup);
document.addEventListener('keydown', triggerOpenSixthPopup);
window.addEventListener('beforeunload', triggerOpenSixthPopup);
document.addEventListener('beforeunload', triggerOpenSixthPopup);

window.addEventListener('load', triggerOpenSeventhPopup);
window.addEventListener('scroll', triggerOpenSeventhPopup);
window.addEventListener('keydown', triggerOpenSeventhPopup);
document.addEventListener('scroll', triggerOpenSeventhPopup);
document.addEventListener('keydown', triggerOpenSeventhPopup);
window.addEventListener('beforeunload', triggerOpenSeventhPopup);
document.addEventListener('beforeunload', triggerOpenSeventhPopup);

window.addEventListener('load', triggerOpenEightPopup);
window.addEventListener('scroll', triggerOpenEightPopup);
window.addEventListener('keydown', triggerOpenEightPopup);
document.addEventListener('scroll', triggerOpenEightPopup);
document.addEventListener('keydown', triggerOpenEightPopup);
window.addEventListener('beforeunload', triggerOpenEightPopup);
document.addEventListener('beforeunload', triggerOpenEightPopup);
