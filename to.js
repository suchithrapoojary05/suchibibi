document.addEventListener('DOMContentLoaded', function() {
    const todoList = document.getElementById('todo-list');
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');

    let todos = [];

    // Function to render todos
    function renderTodos() {
        todoList.innerHTML = '';
        todos.forEach(todo => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${todo.text}</span>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            `;
            li.dataset.id = todo.id;
            todoList.appendChild(li);

            // Add event listener for edit button
            li.querySelector('.edit-btn').addEventListener('click', function() {
                editTodo(todo.id);
            });

            // Add event listener for delete button
            li.querySelector('.delete-btn').addEventListener('click', function() {
                deleteTodo(todo.id);
            });
        });
    }

    // Function to add a new todo
    function addTodo() {
        const text = todoInput.value.trim();
        if (text !== '') {
            const newTodo = {
                id: Date.now(),
                text: text
            };
            todos.push(newTodo);
            renderTodos();
            todoInput.value = '';
        }
    }

    // Function to edit a todo
    function editTodo(id) {
        const index = todos.findIndex(todo => todo.id == id);
        if (index !== -1) {
            const newText = prompt('Enter new todo text:', todos[index].text);
            if (newText !== null) {
                todos[index].text = newText.trim();
                renderTodos();
            }
        }
    }

    // Function to delete a todo
    function deleteTodo(id) {
        todos = todos.filter(todo => todo.id != id);
        renderTodos();
    }

    // Event listener for Add button
    addBtn.addEventListener('click', addTodo);

});
