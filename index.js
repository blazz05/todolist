const inputBox =document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function Add(){
    if(inputBox.value === ''){
      alert("Your must write something!");  
    }

    else{
        let li =document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveDate();
    }
        else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            saveDate();
        }
}, false);

function saveDate(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showList(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showList();

