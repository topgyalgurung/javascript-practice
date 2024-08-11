// wait for DOM to load then load script tag to execute JS
document.addEventListener("DOMContentLoaded", function () {
  solveTask1();
  solveTask2();
  solveTask3();
  solveTask4();
  solveTask5();
  solveTask6();
  solveTask7();
  solveTask8();
  solveTask9();
});

/*
// to have it fully loaded
window.addEventListener(‘load’, function(){
		console.log(‘FULLY LOADED’);
	});

*/

function solveTask1() {
  let task1 = document.getElementById("task1");
  task1.innerText = "Changed using 'innerText'.";
}

function solveTask2() {
  let task2 = document.getElementById("task2");
  task2.innerHTML = "<button> Submit </button>";
}

function solveTask3() {
  document.body.style.backgroundColor = "#232323";
}

function solveTask4() {
  document.querySelectorAll(".item").forEach((item) => {
    item.style.border = "5px solid orange";
  });
}

function solveTask5() {
  document.getElementById("task5").href = "https://www.springboard.com/";
}

function solveTask6() {
  document.getElementById("task6").value = "DOM Master";
}

function solveTask7() {
  document.getElementById("task7").classList.add("new-class");
}

function solveTask8() {
  let newBtn = document.createElement("button");
  newBtn.innerText = "NEW BUTTON";
  document.getElementById("task8").appendChild(newBtn);
  //   document.getElementById("task8").innerHTML = "<button> hi </button>";
}

function solveTask9() {
  let element = document.getElementById("task9");
  element.parentNode.removeChild(element);
}
