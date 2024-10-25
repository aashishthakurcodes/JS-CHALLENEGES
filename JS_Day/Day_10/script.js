// Day 10: Event Handling
// Tasks/Activities:

// Activity 1: Basic Event Handling

// Task 1: Add a click event listener to a button that changes the text content of a paragraph.

let textChange = document.querySelector("#task1");
let btn = document.querySelector("#submit");

let originalText = textChange.textContent;
let contenchange = false;
btn.addEventListener('click', () => {
    if (contenchange === true) {
        textChange.textContent = "Text Change Successfully";

    } else {
        textChange.textContent = originalText
    }
    contenchange = !contenchange

})
// Task 2: Add a double-click event listener to an image that toggles its visibility.

let selImg = document.querySelector("#imgToggle");
let selBtn = document.querySelector("#imgBtn");
selBtn.addEventListener('click', () => {
    if (selImg.style.display === "none") {
        selImg.style.display = "block"
    }
    else {
        selImg.style.display = "none"
    }
})

// Activity 2: Mouse Events

// Task 3: Add a mouseover event listener to an element that changes its background color.

let divSel = document.querySelector("#taks3")
divSel.addEventListener("mouseover", () => {
    divSel.style.backgroundColor = "red"
}
)
// Task 4: Add a mouseout event listener to an element that resets its background color.

divSel.addEventListener("mouseout", () => {
    divSel.style.backgroundColor = "white"
})

// Activity 3: Keyboard Events

// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.

let inpHold = document.querySelector("#inptHolder")
inpHold.addEventListener('keydown', (e) => {
    console.log(e.key)
})

// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.

let paraVal = document.querySelector("#inputPara");
inpHold.addEventListener("keyup", () => {
    paraVal.textContent = inpHold.value;
})
// Activity 4: Form Events

// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.

let form=document.querySelector("#myForm");
form.addEventListener('submit',(e)=>{
    e.preventDefault()

    let formData=new FormData(form);
    for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }
})

// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.

let optionSelect=document.querySelector("#selectOpt")
let valueSelect=document.querySelector("#valueSelect")

optionSelect.addEventListener("change",()=>{
    valueSelect.textContent=`Selected Value: ${optionSelect.value}`;
})

// Activity 5: Event Delegation

// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.

let list = document.querySelector("#myList");

list.addEventListener("click", (e) => {
    
    if (e.target.tagName === "LI") {
        console.log(`Clicked Item: ${e.target.textContent}`);
    }
});

// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.

let parentDiv = document.querySelector("#parentDiv");
let output = document.querySelector("#output");

parentDiv.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON" && e.target !== parentDiv.querySelector("button")) {
        output.textContent = `Clicked: ${e.target.textContent}`;
    }
});

parentDiv.querySelector("button").addEventListener("click", () => {
    let newButton = document.createElement("button");
    newButton.textContent = `New Button ${parentDiv.children.length}`; 
    parentDiv.appendChild(newButton); 
});