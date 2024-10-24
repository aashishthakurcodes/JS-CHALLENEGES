// Tasks/Activities

// Activity 1: Selecting and Manipulating Elements

// Task 1: Select an HTML element by its ID and change its text content.

let text=document.querySelector("#heading").textContent="Dom Manipulation"

// Task 2: Select an HTML element by its class and change its background color.
let bgChanger=document.querySelector(".changeBG").style.backgroundColor="red";

// Activity 2: Creating and Appending Elements

// Task 3: Create a new div with text and append it to the body.

const newDiv=document.createElement('div');
const appendInto=document.querySelector("#task3")
newDiv.textContent="Hello Wolrd";
appendInto.appendChild(newDiv)

// Task 4: Create a new li element and add it to an existing ul.

const appendUl=document.querySelector(".task4");
const newLI=document.createElement("li");
newLI.textContent="About Us";
appendUl.appendChild(newLI)

// //Activity 3: Removing Elements

// Task 5: Remove an HTML element from the DOM.

const removeElem=document.querySelector("#task5");
removeElem.remove()

// Task 6: Remove the last child of a specific HTML element.

const removeLast=document.querySelector("#task6");
removeLast.removeChild(removeLast.lastElementChild)

// // Activity 4: Modifying Attributes and Classes

// Task 7: Change an attribute (e.g., src of an img).

const setAttr=document.querySelector("#task7");
setAttr.setAttribute('src',"https://img.freepik.com/premium-photo/realistic-suv-car-isolated-background-3d-rendering-illustration_494250-8704.jpg?w=650");
setAttr.setAttribute("alt","new Image")

// Task 8: Add and remove a CSS class to/from an element.

const newClass=document.querySelector(".oldClass");
newClass.classList.add('newClass');
newClass.classList.remove('newClass')

// Activity 5: Event Handling

// Task 9: Add a click event listener to a button to change paragraph text.

const changePara=document.querySelector("#changeText");
const Paragraph=document.querySelector("#para");

changePara.addEventListener("click",()=>{
    Paragraph.textContent="Text Changed Successfully"
})

// Task 10: Add a mouseover event listener to change an element's border color.

const borderColor=document.querySelector(".task10");
borderColor.addEventListener('mouseover',()=>{
    borderColor.style.border="3px solid blue"
})
borderColor.addEventListener('mouseout', () => {
    borderColor.style.border = ""; 
});