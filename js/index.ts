anime({
    targets: '.diamond',
    translateX: 20,
    rotate: '+=360',
    duration: 2000,
    easing: 'easeInOutSine',
    loop: true,
    direction: 'alternate'
});

anime({
    targets: '.quarter-circle',
    scale: [
        { value: 1.2, duration: 500 },
        { value: 1, duration: 500 }
    ],
    loop: true,
    easing: 'easeInOutQuad'
});
