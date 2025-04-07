const todoBlocks = document.querySelectorAll("div.list");

todoBlocks.forEach(el => {
    const todoList = document.createElement("ul");

    for (let i = 0;i<3;i++) {
        let todo = document.createElement("li");
        todo.innerHTML = "Todo " + i;
        todoList.appendChild(todo);
    }

    el.appendChild(todoList);
});

// Add todo to a list
