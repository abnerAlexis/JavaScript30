const checkboxes = document.querySelectorAll('.inbox input[type="checkbox');

let lastChecked;

function handleCheck(e) {
    // Check if they had the shift key down
    //And check that they are checking it

    let inBetween = false;
    if (e.shiftKey && this.checked) {
        // loop through the checkboxes
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log('Starting to check them in between!');
            }
            if (inBetween) {
                checkbox.checked = true;
            }
        });
    }
    lastChecked = this;
}
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));