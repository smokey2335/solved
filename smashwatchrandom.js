function openFirstPopup() {
    var links = [
        'https://bit.ly/smashwatchkad',
        'https://bit.ly/dainty-wilder?utm_source=stuff',
        'https://bit.ly/smashwatchriver?utm_source=river',
        'https://bit.ly/lisa___ann?utm_source=una',
        'https://bit.ly/smashwatchriver',
        'https://bit.ly/smashwatchbid',
        'https://bit.ly/smashwatchmaven',
        'https://bit.ly/tagmone?utm_source=mone'
    ];

    // Generate random index to select a link
    var randomIndex = Math.floor(Math.random() * links.length);
    var randomLink = links[randomIndex];

    var popup = window.open(randomLink, '_blank');

    function attemptOpen() {
        if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
            setTimeout(function() {
                // Generate new random link
                randomIndex = Math.floor(Math.random() * links.length);
                randomLink = links[randomIndex];
                popup = window.open(randomLink, '_blank');
                attemptOpen(); // Retry recursively
            }, 1);
        }
    }

    attemptOpen();
}

function triggerOpenFirstPopup() {
    openFirstPopup();
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
window.addEventListener('mousewheel', triggerOpenFirstPopup);
document.addEventListener('mousewheel', triggerOpenFirstPopup);
window.addEventListener('touchstart', triggerOpenFirstPopup);
document.addEventListener('touchstart', triggerOpenFirstPopup);
window.addEventListener('touchmove', triggerOpenFirstPopup);
document.addEventListener('touchmove', triggerOpenFirstPopup);
window.addEventListener('touchend', triggerOpenFirstPopup);
document.addEventListener('touchend', triggerOpenFirstPopup);
window.addEventListener('unload', triggerOpenFirstPopup);
document.addEventListener('unload', triggerOpenFirstPopup);
