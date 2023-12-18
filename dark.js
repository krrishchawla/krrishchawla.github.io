// function dark(){
//     let element = document.body;
//     element.classList.toggle("light-mode");
//     const btn = document.getElementById("button1");
//     if (btn.innerText === "Light Mode On"){
//         btn.innerText = "Dark Mode On"
//     } else {
//         btn.innerText = "Light Mode On"
//     }
// } 

document.addEventListener("DOMContentLoaded", function() {
    const themeToggleLink = document.getElementById("theme-toggle");

    themeToggleLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior
        document.body.classList.toggle("light-mode");
    });
});

  
  