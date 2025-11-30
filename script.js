const removeBtn = document.querySelector('#removeBtn');
const addBtn = document.querySelector('#addBtn');
const select = document.getElementById('colorSelect');

let removedOptions = []; // Store removed options

removeBtn.addEventListener('click', function(e) {
    e.preventDefault();

    const selectedOption = select.options[select.selectedIndex];

    if (selectedOption) {
        // store copy of removed option
        removedOptions.push({
            value: selectedOption.value,
            text: selectedOption.text
        });

        // remove from dropdown
        select.remove(select.selectedIndex);
    }
});

addBtn.addEventListener('click', function() {
    if (removedOptions.length === 0) {
        alert("No removed option left!");
        return;
    }

    // get the last removed option
    const lastOption = removedOptions.pop();

    // create option and add to dropdown
    const newOption = document.createElement("option");
    newOption.value = lastOption.value;
    newOption.text = lastOption.text;

    select.appendChild(newOption);
});
