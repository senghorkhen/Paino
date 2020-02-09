const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    // div muy muy del yg ban click
   key.addEventListener('click', () => {
        console.log(key)
   });
});