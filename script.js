console.log('HELLO');

window.addEventListener('keydown', event => {
    console.log(event);
    if (event.isComposing || event.code === 'ArrowRight') {
        console.log('Right️');
    }

    if (event.isComposing || event.code === 'ArrowLeft') {
        console.log('Left');
    }
});
