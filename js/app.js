const $ = document;
// Getting basic elements
const input = $.querySelector("#taskInput");
const addBtn = $.querySelector("#taskBtn");
const list = $.querySelector(".list");

addBtn.addEventListener("click" , ()=>{
    if(input.value != ""){
        createTask(input.value)
    }
})

input.addEventListener("keypress" , (e)=>{
   if(e.keyCode == 13){
    createTask(input.value)
   }
})

list.addEventListener("click" , (e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("completed") 
    }
 })


// Task Generator Function
function createTask(taskName){
  list.insertAdjacentHTML("beforeend" , `<li class="task">
  <label >${taskName}</label>
  <img class="close" src="/images/close.png" width="20" height="20" alt="">
</li>`)
  const closeBtn = $.querySelectorAll(".close")
  closeBtn.forEach((btn)=>{
    btn.addEventListener("click" , (e)=>{
        e.target.parentElement.remove()
      })
  })
  input.value = ""
}


