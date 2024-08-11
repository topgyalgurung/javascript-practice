document.addEventListener("DOMContentLoaded", function () {
  const colorInput = document.getElementById("color-input");
  const form = document.querySelector("color-form");
  const newBtn = document.getElementById("new-box-button");
  const boxContainer = document.getElementById("box-container");

  let boxColor = null;
  let boxCounterId = 0;

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const newColor = colorInput.value.trim();

    const boxes = document.querySelector(".box");
    for (const box of boxes) {
      box.style.backgroundColor = newColor;
    }
    colorInput.value = " "; // reset color input element
    boxColor = newColor; // store the color in boxcolor
  });

  /*
  Create a function that adds a new box. In this function, set the box ID as content, the class name, 
  and the background color from the box color variable we created in Step 3. Besides, set the box ID to
   a data attribute. You'll need this attribute to set the display text back to ID when the mouse leaves. 
   Since we used this counter ID, increment it using the counter variable we created in Step 3 to keep its 
   uniqueness
  */

  function addNewBox() {
    const box = document.createElement("div");
    // store the box id to its data attributes
    box.setAttribute("data-box-d", boxCounterId.toString());
    // Set box id as text
    box.textContent = `Box ${boxCounterId}`;
    box.className = "box";
    box.backgroundColor = boxColor;
    boxContainer.appendChild(box);
    boxCounterId++;
  }
  // When the new box button is clicked, call the function that we created above that adds a new box.
  newBtn.addEventListener("click", function () {
    addNewBox();
  });

  // To remove a box, listen to the double-click events in the document. If the event's target's class list
  // contains the value box, remove the element.
  document.addEventListener('dblclick',function(evebt){
	event.target.classList.contains('box'){
		event.target.remove();
	}
  });


  //To display a box's page coordinates, listen to the mouse over events in the document. If the event's target's 
  // class list contains the value box, display the coordinates.
  document.addEventListener('mouseover', function(event){
	if(event.target.classList.contains('box')){
		event.target.textContent = `x: ${event.pageX} , y: ${event.pageY}`;
	}
  });

  /*
  To display a box's ID back when the mouse leaves after displaying the box's page coordinates, listen to the mouse out 
  events in the document. If the event's target's class list contains the value box, get the ID from the box's data 
  attributes and display it.
  */
  document.addEventListener('mouseout', function(event){
	if(event.target.classList.contains('box')){
		const boxId = event.target.getAttribute("data-box-id");
		event.target.textContent = `Box ${boxId}`;
	}
  });

  /*
  To create a new box when the N key is pressed, listen to the key-down events in the document. If the key is N (check both
   upper and lower cases), call the function that adds a new box. Remember to ignore the event if it is triggered from the color input element.
  */

   window.addEventListener('keydown', function(event){
	if(event.target.id === 'color-input') return;
	if(event.key === 'n' || event.key === 'N'){
		addNewBox();
	}
   });


});
