const input = document.querySelector('input');
input.addEventListener('click', function(e) {
    e.preventDefault();
    const select = document.getElementById('colorSelect');
    const selectedOption = select.options[select.selectedIndex];

    if (selectedOption) {
        select.remove(select.selectedIndex);
    }
});