// First function
function openFirstPopup() {
    var popup = window.open('https://bit.ly/euphorfunright', '_blank');

    function attemptOpen() {
        if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
            setTimeout(function() {
                popup = window.open('https://bit.ly/euphorfunright', '_blank');
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
    var popup = window.open('https://bit.ly/boowbscombid', '_blank');

    function attemptOpen() {
        if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
            setTimeout(function() {
                popup = window.open('https://bit.ly/boowbscombid', '_blank');
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
    var popup = window.open('https://bit.ly/clickboowbs?utm_source=dilla', '_blank');

    function attemptOpen() {
        if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
            setTimeout(function() {
                popup = window.open('https://bit.ly/clickboowbs?utm_source=dilla', '_blank');
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
