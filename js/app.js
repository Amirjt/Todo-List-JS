const $ = document;
// Getting basic elements
const input = $.querySelector("#taskInput");
const addBtn = $.querySelector("#taskBtn");
const list = $.querySelector(".list");

addBtn.addEventListener("click" , ()=>{
    if(input.value != ""){
        createTask(input.value)
    }
    saveData()
})

input.addEventListener("keypress" , (e)=>{
   if(e.keyCode == 13){
    createTask(input.value)
   }
   saveData()
})

list.addEventListener("click" , (e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("completed") 
    }else if (e.target.tagName === "IMG"){
        e.target.parentElement.remove() 
    }
    saveData()
 })


// Task Generator Function
function createTask(taskName){
  list.insertAdjacentHTML("beforeend" , `<li class="task">
  <label >${taskName}</label>
  <img class="close" src="/images/close.png" width="20" height="20" alt="">
</li>`)
  saveData()
  input.value = ""
}


function saveData(){
    localStorage.setItem("data" , list.innerHTML)
}

function getData(){
   list.innerHTML = localStorage.getItem("data")
}

window.addEventListener("load" , getData)