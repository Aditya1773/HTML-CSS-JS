const arry = [12, 1, 43, 564, 322, 9, 0, 69];
function fetchAllElements() {
  let len = arry.length;
  document.getElementById("allelements").innerHTML =
    "<br><strong>" + arry + "<br><strong>";
  document.getElementById("arraylength").innerHTML = "Arrays length= " + len;
}
function iterateArray() {
  arry.forEach((e) => console.log(e));
}
function sortArray(sort) {
  let temp = [];
  if (sort == "ASC") temp = arry.sort((a, b) => a - b);
  else temp = arry.sort((a, b) => b - a);
  document.getElementById("allelements").innerHTML =
    "<br><strong>" + temp + "<br><strong>";
}
