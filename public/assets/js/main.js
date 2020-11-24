// Toggle Navbar Hide onclick of Close Button
var navbar = document.getElementById("navbarNavDropdown");
function closeBtn() {
  navbar.classList.remove("show");
}

// Filter Toggle Functions
// Filter Menu Show onclick of Filter Button
var shopCategory = document.getElementById("shopCategory");
function filterBy() {
  shopCategory.classList.remove("d-none");
}
// Filter Menu Hide onclick of Filter Button
function hideFilter() {
  shopCategory.classList.add("d-none");
}
