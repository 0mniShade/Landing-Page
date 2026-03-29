// Dark Mode Load
if(localStorage.getItem("darkMode") === "enabled"){
  document.body.classList.add("dark");
}

// Toggle Dark Mode
function toggleDarkMode(){
  document.body.classList.toggle("dark");

  if(document.body.classList.contains("dark")){
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
}
