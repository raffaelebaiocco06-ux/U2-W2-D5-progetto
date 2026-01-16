const row = document.getElementById("movieRow");
function Destra() {
  row.scrollBy({
    left: 500,
    behavior: "smooth",
  });
}
function Sinistra() {
  row.scrollBy({
    left: -500,
    behavior: "smooth",
  });
}
