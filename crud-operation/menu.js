function openNav() {
    console.log("open");
    document.getElementById("side-bar").style.width = "100vw";
    document.getElementById("menu-button").onclick = closeNav;
    document.getElementById("menu-button").classList.add("close")
    document.getElementById("menu-button").classList.remove("open")

    document.getElementById("toggle-menu").onclick = closeNav;
    document.getElementById("toggle-menu").style.transform = 'rotate(0deg)'
}

function closeNav() {
    console.log("close");
    document.getElementById("side-bar").style.width = "0";
    document.getElementById("menu-button").onclick = openNav;
    document.getElementById("menu-button").classList.remove("close");
    document.getElementById("menu-button").classList.add("open");

    document.getElementById("toggle-menu").onclick = openNav;
    document.getElementById("toggle-menu").style.transform = 'rotate(180deg)'
    document.getElementById("main-page").style = 'flex:1';
}

function pageHighlight() {
  console.log("Highlighting..."); 

  const currentPage = window.location.href;

  const pages = [
    { name: "Dashboard", className: "page-options dashboard" },
    { name: "Payment", className: "page-options payment" },
    { name: "Student", className: "page-options student" },
  ]; 

  let isMatchFound = false; 
  pages.forEach((page) => {
    if (currentPage.includes(page.name)) {
      document.getElementById(page.className).style.backgroundColor = "#feaf00";
      isMatchFound = true; // Exit after finding a match for efficiency
    }
  });

  if (!isMatchFound) {
    console.log("No matching page found."); // Informative message for debugging
  }
}
pageHighlight()