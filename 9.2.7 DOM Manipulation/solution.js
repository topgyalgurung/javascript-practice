function solveTask1() {
  let task1 = document.getElementById("task1");
  task1.innerText = "Changed using 'innerText'.";
}
solveTask1();

function solveTask2() {
  let task2 = document.getElementById("task2");
  task2.innerHTML = "<button> Submit </button>";
}
solveTask2();

function solveTask3() {
  document.body.style.backgroundColor = "#232323";
}
solveTask3();

function solveTask4() {
  document.querySelectorAll(".item").forEach((item) => {
    item.style.border = "5px solid orange";
  });
}
solveTask4();

function solveTask5() {
  document.getElementById("task5").href = "https://www.springboard.com/";
}
solveTask5();

function solveTask6() {
  document.getElementById("task6").value = "DOM Master";
}
solveTask6();

function solveTask7() {
  document.getElementById("task7").classList.add("new-class");
}
solveTask7();

function solveTask8() {
  let newBtn = document.createElement("button");
  newBtn.innerText = "NEW BUTTON";
  document.getElementById("task8").appendChild(newBtn);
  //   document.getElementById("task8").innerHTML = "<button> hi </button>";
}
solveTask8();

function solveTask9() {
  let element = document.getElementById("task9");
  element.parentNode.removeChild(element);
}
solveTask9();
