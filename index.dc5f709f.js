!function(){var o=document.querySelectorAll(".dropdown-btn");document.querySelectorAll(".dropdown");function e(e){var n=e.currentTarget.closest(".dropdown"),t=n.querySelector(".dropdown-content"),r=n.querySelector(".dropdown-btn");o.forEach((function(o){o!==r&&(o.closest(".dropdown").querySelector(".dropdown-content").classList.remove("shown"),o.classList.remove("opened"))})),t.classList.toggle("shown"),r.classList.toggle("opened")}o.forEach((function(o){return o.addEventListener("click",e)})),window.onclick=function(e){e.target.matches(".dropdown-btn")||o.forEach((function(o){o.closest(".dropdown").querySelector(".dropdown-content").classList.remove("shown"),o.classList.remove("opened")}))}}();
//# sourceMappingURL=index.dc5f709f.js.map
