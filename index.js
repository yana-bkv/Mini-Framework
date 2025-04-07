const todos = [
    { id: 1, text: "Buy veggies", done: true },
    { id: 2, text: "Drink water", done: false },
    { id: 3, text: "Watch a movie", done: false }
];
localStorage.setItem("todos", JSON.stringify(todos));

// Add todo to a list
document.getElementById("createTodo").addEventListener("click", function(el) {
    el.preventDefault();

    let newId = todos.length + 1;
    let todoText = document.getElementById("myTextarea").value;

    const todo = {id: newId, text: todoText, done: false};

    console.log(todo);

    todos.push(todo);
    renderTodos();
});

// Show todos
function renderTodos() {
    const list = document.getElementById('todoList');
    list.innerHTML = "";

    todos.forEach(todo => {
        const li = document.createElement("li");
        const checkbox = document.createElement("input")
        const btn = document.createElement("button");


        checkbox.type = "checkbox";
        checkbox.className = "checkbox"
        btn.textContent = "Delete"
        btn.className = "btnDelete"

        const textNode = document.createTextNode(todo.text);

        li.appendChild(checkbox);
        li.appendChild(textNode)
        li.appendChild(btn)

        list.appendChild(li);
    });

    // Delete todo from a list
    const btns = document.getElementsByClassName("btnDelete");

    for (let btn of btns) {
        btn.addEventListener("click", function(el) {
            el.preventDefault();
            console.log("remove")
    })}

    // Check if task is done
    const checkboxes = document.getElementsByClassName('checkbox');

    for (let checkbox of checkboxes) {
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
            console.log("Checked ✅");
            // todos[i].done = true;
            } else {
            console.log("Unchecked ❌");
            // todos[i].done = false;
            }
        });   
    }
} 

window.onload = renderTodos;