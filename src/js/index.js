const dropBtn = document.querySelectorAll(".dropdown-btn")
const dropDownElement = document.querySelectorAll(".dropdown")

dropBtn.forEach(button => button.addEventListener('click', onDropDownMenu))

function onDropDownMenu (e) {
    const dropdown = e.currentTarget.closest('.dropdown');
    const dropdownContent = dropdown.querySelector('.dropdown-content');
    const dropBtnCurrent = dropdown.querySelector('.dropdown-btn');
    dropBtn.forEach(btn => {
        if (btn !== dropBtnCurrent) {
            const otherDropdown = btn.closest('.dropdown');
            const otherDropdownContent = otherDropdown.querySelector('.dropdown-content');
            otherDropdownContent.classList.remove('shown');
            btn.classList.remove('opened');
        }
    })
    dropdownContent.classList.toggle("shown");
    dropBtnCurrent.classList.toggle("opened");
}

window.onclick = function(e) {

    if (!e.target.matches('.dropdown-btn')) {
        
        dropBtn.forEach(btn => {
            const dropdown = btn.closest('.dropdown');
            const dropdownContent = dropdown.querySelector('.dropdown-content');
            dropdownContent.classList.remove('shown');
            btn.classList.remove('opened');

    })
  }}
