const row = document.getElementById("movieRow");
const row2 = document.getElementById("movieRow2");
const row3 = document.getElementById("movieRow3");
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
function Destra2() {
  row2.scrollBy({
    left: 500,
    behavior: "smooth",
  });
}
function Sinistra2() {
  row2.scrollBy({
    left: -500,
    behavior: "smooth",
  });
}
function Destra3() {
  row3.scrollBy({
    left: 500,
    behavior: "smooth",
  });
}
function Sinistra3() {
  row3.scrollBy({
    left: -500,
    behavior: "smooth",
  });
}
