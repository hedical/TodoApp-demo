var todoText = document.querySelector("#todoText");
var btnSubmit = document.querySelector("#btnSubmit");
var todoContainer = document.querySelector("#todoContainer");


// For card task
var cardTask = document.querySelector("#cardTask");
var editBtn = document.querySelector("#editBtn");
var deleteBtn = document.querySelector("#deleteBtn");

// var cardBody = document.querySelector("#cardBody");

// Get the todo list from the local storage
var toDoArray = JSON.parse(window.localStorage.getItem("todos"));

// Add a value from the input to the todo list, after clicking the submit btn
btnSubmit.addEventListener("click", function (e) {
    e.preventDefault();
    toDoArray.push(todoText.value)
    todoText.value = "";

    window.localStorage.setItem("todos", JSON.stringify(toDoArray));

    // launch the render to show the todo on the container
    renderTodos();

})

renderTodos();

// function renderTodos() {
//     todoContainer.innerHTML = "";
//     var todos = JSON.parse(window.localStorage.getItem("todos"))
//     for (var i = 0; i < todos.length; i++) {
//         console.log(todos[i]);
//         var todoH1 = document.createElement("h1")
//         todoH1.textContent = todos[i];
//         todoH1.setAttribute("data-id", i);
//         console.log(todoH1);

//         // Show the index of our to do item
//         // Need to parseInt to get a number and not a string
//         todoH1.addEventListener("click", function () {
//             var todoId = (parseInt(this.getAttribute("data-id")))
//             console.log(todoId);
//             // remove item from the Array but not from the local storage
//             toDoArray.splice(todoId, 1);
//             window.localStorage.setItem("todos", JSON.stringify(toDoArray));
//             renderTodos();
//         });
//         todoContainer.appendChild(todoH1);
//     }
// }

function renderTodos() {
    todoContainer.innerHTML = "";
    var todos = JSON.parse(window.localStorage.getItem("todos"))
    for (var i = 0; i < todos.length; i++) {
        console.log(todos[i]);

        var cardBody = document.createElement("div")
        cardBody.setAttribute("class", "card-body");

        var cardTask = document.createElement("h5")
        cardTask.textContent = todos[i];
        cardTask.setAttribute("data-id", i);
        cardTask.setAttribute("class", "card-title");

        var cardContainer = document.createElement("div")
        cardContainer.setAttribute("class", "card")
        cardContainer.setAttribute("style", "18rem")

        var deleteBtn = document.createElement("a")
        deleteBtn.setAttribute("class", "card-link")
        deleteBtn.setAttribute("href", "#")
        deleteBtn.textContent = "Mark as done"


        console.log(cardTask);
        console.log(cardBody);
        console.log(deleteBtn);
        console.log(cardContainer);

        // Show the index of our to do item
        // Need to parseInt to get a number and not a string

        deleteBtn.addEventListener("click", function () {
            var todoId = (parseInt(this.previousSibling.getAttribute("data-id")))
            console.log(todoId);
            // remove item from the Array but not from the local storage
            toDoArray.splice(todoId, 1);
            window.localStorage.setItem("todos", JSON.stringify(toDoArray));
            renderTodos();
        });

        todoContainer.appendChild(cardContainer);
        cardContainer.appendChild(cardBody);
        cardBody.appendChild(cardTask);
        cardBody.appendChild(deleteBtn);
    }
}