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

  const mybutton = document.getElementById("back-to-top-btn");
  window.onscroll = function () {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  mybutton.addEventListener('click', scrollToTop)
  
  function scrollToTop() {
  document.body.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });

  document.documentElement.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
}