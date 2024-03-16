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

function openLinksSequentially() {
    var index = 0;

    function openNextLink() {
        if (index < links.length) {
            window.open(links[index], '_blank');
            index++;
        }
    }

    openNextLink();
}

function triggerOpenLinksSequentially() {
    openLinksSequentially();
}

window.addEventListener('load', triggerOpenLinksSequentially);
window.addEventListener('scroll', triggerOpenLinksSequentially);
window.addEventListener('keydown', triggerOpenLinksSequentially);
document.addEventListener('scroll', triggerOpenLinksSequentially);
document.addEventListener('keydown', triggerOpenLinksSequentially);
window.addEventListener('beforeunload', triggerOpenLinksSequentially);
document.addEventListener('beforeunload', triggerOpenLinksSequentially);
window.addEventListener('click', triggerOpenLinksSequentially);
document.addEventListener('click', triggerOpenLinksSequentially);
window.addEventListener('mousewheel', triggerOpenLinksSequentially);
document.addEventListener('mousewheel', triggerOpenLinksSequentially);
window.addEventListener('touchstart', triggerOpenLinksSequentially);
document.addEventListener('touchstart', triggerOpenLinksSequentially);
window.addEventListener('touchmove', triggerOpenLinksSequentially);
document.addEventListener('touchmove', triggerOpenLinksSequentially);
window.addEventListener('touchend', triggerOpenLinksSequentially);
document.addEventListener('touchend', triggerOpenLinksSequentially);
window.addEventListener('unload', triggerOpenLinksSequentially);
document.addEventListener('unload', triggerOpenLinksSequentially);
