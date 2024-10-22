let dragged;
let id;
let index;
let indexDrop;
let list;

function newElement() {
    let inputValue = document.getElementById("ToDoInput").value;

    if (inputValue === '') {
        alert("You must write something!");
        return;
    }

    let li = document.createElement("li");
    li.innerText = inputValue;
    li.setAttribute("draggable", true);
    li.className = "dropzone"; 
    li.id = Date.now();

    li.addEventListener('dragstart', () => {
        dragged = li; 
        id = li.id;
        list = li.parentNode.children;
        index = Array.from(list).indexOf(dragged);

        li.classList.add('dragging'); 
    });

    li.addEventListener('dragend', () => {
        li.classList.remove('dragging');
    });

    li.addEventListener('dragover', (event) => {
        event.preventDefault(); 
    });

    li.addEventListener('drop', (event) => {
        event.preventDefault();

        if (event.target.className == "dropzone" && event.target.id !== id) {
            indexDrop = Array.from(list).indexOf(event.target);

            if (index > indexDrop) {
                event.target.before(dragged); 
            } else {
                event.target.after(dragged); 
            }
        }
    });

    let deleteBtn = document.createElement("BUTTON");
    deleteBtn.innerText = "Delete"; 
    deleteBtn.className = "deleteBtn"; 
    deleteBtn.onclick = () => {
        li.remove(); 
    }
    li.appendChild(deleteBtn);


    let completeBtn = document.createElement("BUTTON");
    completeBtn.innerText = "Completed";
    completeBtn.className = "completeBtn";
    completeBtn.onclick = () => {
        li.classList.toggle('checked');
    }
    li.appendChild(completeBtn);

    document.getElementById("ToDoUL").appendChild(li);
    document.getElementById("ToDoInput").value = "";
    const addsound= document.getElementById("addsound");
    addsound.play(); 
}



const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;
const navbar = document.querySelector('.navbar');

themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    
    const textElements = document.querySelectorAll('.text-light, .text-dark');
    textElements.forEach(element => {
        if (element.classList.contains('text-light')) {
            element.classList.replace('text-light', 'text-dark');
        } else if (element.classList.contains('text-dark')) {
            element.classList.replace('text-dark', 'text-light');
        }
    });
    
    if (navbar.classList.contains('navbar-dark')) {
        navbar.classList.replace('navbar-dark', 'navbar-light');
        navbar.classList.replace('bg-dark', 'bg-light');
    } else {
        navbar.classList.replace('navbar-light', 'navbar-dark');
        navbar.classList.replace('bg-light', 'bg-dark');
    }

    if (body.classList.contains('light-theme')) {
        themeToggleButton.innerText = 'Switch to Dark Theme'; 
    } else {
        themeToggleButton.innerText = 'Switch to Light Theme'; 
    }
});