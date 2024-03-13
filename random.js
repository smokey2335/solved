function openFirstPopup() {
    var links = [
        'https://bit.ly/smashkad',
        'https://bit.ly/dainty-wilder?utm_source=stuff',
        'https://bit.ly/amber--more?utm_source=right',
        'https://bit.ly/briana___banks?utm_source=infinity',
        'https://bit.ly/melody---marks?utm_source=river',
        'https://bit.ly/kate---kurray?utm_source=bid',
        'https://bit.ly/smashkad?utm_source=kad',
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
