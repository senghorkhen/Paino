const keys = document.querySelectorAll('.key');
keys.forEach(key => {
   key.addEventListener('click', () => {
        console.log(key)
   });
});

document.addEventListener('keydown', event => { // When click key all keyboard that we want to click it
    const keyboard = event.key;
    document.querySelector('button').innerHTML = keyboard;
});
