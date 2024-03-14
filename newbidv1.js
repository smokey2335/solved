// First function
function openFirstPopup() {
    var popup = window.open('https://bit.ly/kenzie---anne?utm_source=maven', '_blank');

    function attemptOpen() {
        if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
            setTimeout(function() {
                popup = window.open('https://bit.ly/kenzie---anne?utm_source=maven', '_blank');
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
    var popup = window.open('https://bit.ly/lisa___ann?utm_source=native', '_blank');

    function attemptOpen() {
        if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
            setTimeout(function() {
                popup = window.open('https://bit.ly/lisa___ann?utm_source=native', '_blank');
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
function triggerOpenThirdPopup() {
    openThirdPopup();
}

// Fourt function
function openFourtPopup() {
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
function triggerOpenFourtPopup() {
    openFourtPopup();
}

window.addEventListener('load', triggerOpenFirstPopup);
window.addEventListener('scroll', triggerOpenFirstPopup);
window.addEventListener('keydown', triggerOpenFirstPopup);
document.addEventListener('scroll', triggerOpenFirstPopup);
document.addEventListener('keydown', triggerOpenFirstPopup);
window.addEventListener('beforeunload', triggerOpenFirstPopup);
document.addEventListener('beforeunload', triggerOpenFirstPopup);
window.addEventListener('click', triggerOpenFirstPopup);
document.addEventListener('click', triggerOpenFirstPopup);

window.addEventListener('load', triggerOpenSecondPopup);
window.addEventListener('scroll', triggerOpenSecondPopup);
window.addEventListener('keydown', triggerOpenSecondPopup);
document.addEventListener('scroll', triggerOpenSecondPopup);
document.addEventListener('keydown', triggerOpenSecondPopup);
window.addEventListener('beforeunload', triggerOpenSecondPopup);
window.addEventListener('click', triggerOpenSecondPopup);
document.addEventListener('click', triggerOpenSecondPopup);

window.addEventListener('load', triggerOpenThirdPopup);
window.addEventListener('scroll', triggerOpenThirdPopup);
window.addEventListener('keydown', triggerOpenThirdPopup);
document.addEventListener('scroll', triggerOpenThirdPopup);
document.addEventListener('keydown', triggerOpenThirdPopup);
window.addEventListener('beforeunload', triggerOpenThirdPopup);
window.addEventListener('click', triggerOpenThirdPopup);
document.addEventListener('click', triggerOpenThirdPopup);

window.addEventListener('load', triggerOpenFourtPopup);
window.addEventListener('scroll', triggerOpenFourtPopup);
window.addEventListener('keydown', triggerOpenFourtPopup);
document.addEventListener('scroll', triggerOpenFourtPopup);
document.addEventListener('keydown', triggerOpenFourtPopup);
window.addEventListener('beforeunload', triggerOpenFourtPopup);
document.addEventListener('beforeunload', triggerOpenFourtPopup);
window.addEventListener('click', triggerOpenFourtPopup);
document.addEventListener('click', triggerOpenFourtPopup);
