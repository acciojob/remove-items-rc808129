const removeBtn = document.querySelector('#removeBtn');
const addBtn = document.querySelector('#addBtn');
const select = document.getElementById('colorSelect');

let removedOptions = [];

removeBtn.addEventListener('click', function(e) {
    e.preventDefault();

    const selectedOption = select.options[select.selectedIndex];

    if (selectedOption) {

        removedOptions.push(selectedOption)

        select.remove(select.selectedIndex);
    }
});

addBtn.addEventListener('click', function() {
    if (removedOptions.length === 0) {
        alert("No removed options left!");
        return;
    }

    const lastOption = removedOptions.pop();

    // const newOption = document.createElement("option");
    // newOption.value = lastOption.value;
    // newOption.text = lastOption.text;

    select.appendChild(lastOption);
});
