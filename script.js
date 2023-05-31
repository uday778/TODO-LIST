
const listbox = document.querySelector("#list-container");
const input = document.querySelector("#input-box");
// function for  (add) button

function addTask() {
    if (input.value == "") {
        alert("Please write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listbox.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = "";
    saveData();
}


listbox.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
    
});

// to save data in local Storage
function saveData(){
    localStorage.setItem('data',listbox.innerHTML)
    PreventDefault();

}
//to get data from local Storage
function showtask(){
    listbox.innerHTML = localStorage.getItem('data');
}

showtask();