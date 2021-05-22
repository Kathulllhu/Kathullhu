

 const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const listt = document.getElementsByClassName(".listt")
const deleteAllBtn = document.querySelector(".clear ")



 
// onkeyup event
inputBox.onkeyup = ()=>{
  let userEnteredValue = inputBox.value; //getting user entered value
  if(userEnteredValue.trim() != 0){ //if the user value isn't only spaces
    addBtn.classList.add("active"); //active the add button
  }else{
    addBtn.classList.remove("active"); //unactive the add button 
  }
}
 
showTasks(); 
 
addBtn.onclick = ()=>{ //when user click on plus icon button
  let userEnteredValue = inputBox.value; //getting input field value
  let getLocalStorageData = localStorage.getItem("New Todo"); //getting localstorage
  if(getLocalStorageData == null){ //if localstorage has no data
    listArray = []; //create a blank array
  }else{
    listArray = JSON.parse(getLocalStorageData);  //transforming json string into a js object
  }
  listArray.push(userEnteredValue); //pushing or adding new value in array
  localStorage.setItem("New Todo", JSON.stringify(listArray)); //transforming js object into a json string
  showTasks(); //calling showTask function
  addBtn.classList.remove("active"); //unactive the add button once the task added
}
 

function showTasks(){
  let getLocalStorageData = localStorage.getItem("New Todo");
  if(getLocalStorageData == null){
    listArray = [];
  }else{
    listArray = JSON.parse(getLocalStorageData); 
  }
  const pendingTasksNumb = document.querySelector(".pendingTasks");
  pendingTasksNumb.textContent = listArray.length; //passing the array length in pendingtask
  if(listArray.length > 0){ //if array length is greater than 0
    deleteAllBtn.classList.add("active"); //active the delete button
  }else{
    deleteAllBtn.classList.remove("active"); //unactive the delete button
  };

  let newLiTag = "";
  listArray.forEach((element, index) => {
    newLiTag += `<li class = "listt"><label class = "label">${element}</label>
    <span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span>
    <span class = "edit" onclick = "editTask(${index})"> <i class = "fas fa-edit"></i></button> onDragOver={this.DragOver}>{allitems.map(createItem,this)} </li>`;
  });
  todoList.innerHTML = newLiTag; //adding new li tag inside ul tag
  inputBox.value = ""; //once task added leave the input field blank
}
 
// delete task function
function deleteTask(index){
  let getLocalStorageData = localStorage.getItem("New Todo");
  listArray = JSON.parse(getLocalStorageData);
  listArray.splice(index, 1); //delete or remove the li
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks(); //call the showTasks function
}
 
// delete all tasks function
deleteAllBtn.onclick = ()=>{
  listArray = []; //empty the array
  localStorage.setItem("New Todo", JSON.stringify(listArray)); //set the item in localstorage
  showTasks(); //call the showTasks function
}

var editInput=document.createElement("input");//text
  //button.edit
  var editButton=document.createElement("button");//edit button

editInput.type="text";

editButton.innerText="Edit";//innerText encodes special characters, HTML does not.
  editButton.className="edit";


//Edit an existing task.

function editTask(index){
console.log("Edit Task...");


var editInput=document.querySelector('input[type=text]');
var label=document.querySelectorAll('label')[index]
var containsClass=document.listt.
contains("editMode");
    //If class of the parent is .editmode
    if(containsClass){

    //switch to .editmode
    //label becomes the inputs value.
      label.innerText=editInput.value;
    }else{
      editInput.value=label.innerText;
    }

    //toggle .editmode on the parent.
    listItem.classList.toggle("editMode");
}



