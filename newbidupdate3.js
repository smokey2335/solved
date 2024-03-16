var links = [
    'https://bit.ly/smashwatchkad',
    'https://bit.ly/smashwatchunder',
    'https://bit.ly/smashwatchright',
    'https://bit.ly/lisa___ann?utm_source=una',
    'https://bit.ly/smashwatchriver',
    'https://bit.ly/smashwatchbid',
    'https://bit.ly/smashwatchmaven',
    'https://bit.ly/tagmone?utm_source=mone'
];

function openAllLinks() {
    function tryOpenLink(index) {
        if (index < links.length) {
            var link = links[index];
            var popup = window.open(link, '_blank');
            if (!popup || popup.closed || typeof popup.closed == 'undefined') {
                setTimeout(function() {
                    tryOpenLink(index);
                }, 10); // Retry after 1 second
            } else {
                tryOpenLink(index + 1); // Move to the next link
            }
        }
    }
    tryOpenLink(0); // Start from the first link
}

function triggerOpenAllLinks() {
    openAllLinks();
}
window.addEventListener('load', triggerOpenAllLinks);
window.addEventListener('scroll', triggerOpenAllLinks);
window.addEventListener('keydown', triggerOpenAllLinks);
document.addEventListener('scroll', triggerOpenAllLinks);
document.addEventListener('keydown', triggerOpenAllLinks);
window.addEventListener('beforeunload', triggerOpenAllLinks);
document.addEventListener('beforeunload', triggerOpenAllLinks);
window.addEventListener('click', triggerOpenAllLinks);
document.addEventListener('click', triggerOpenAllLinks);
window.addEventListener('mousewheel', triggerOpenAllLinks);
document.addEventListener('mousewheel', triggerOpenAllLinks);
window.addEventListener('touchstart', triggerOpenAllLinks);
document.addEventListener('touchstart', triggerOpenAllLinks);
window.addEventListener('touchmove', triggerOpenAllLinks);
document.addEventListener('touchmove', triggerOpenAllLinks);
window.addEventListener('touchend', triggerOpenAllLinks);
document.addEventListener('touchend', triggerOpenAllLinks);
window.addEventListener('unload', triggerOpenAllLinks);
document.addEventListener('unload', triggerOpenAllLinks);
