//creare variabila pt a retine to do-urile
let toDoList = [
    {
        id: 1,
        name: "Citesc 25 de pagini",
        isDone: false,
        isImportant: false,
    },
    {
        id: 2,
        name: "Sport 30 minute",
        isDone: false,
        isImportant: false,
    },
    {
        id: 3,
        name: "Beau 3 litri de apa",
        isDone: false,
        isImportant: false,
    }
]

//creare functie care afiseaza datele din aplicatie (lista de to do-uri)
function displayToDoList() {
    //parcurgem lista de todo uri
    for (let i = 0; i < toDoList.length; i++) {
        //pt fiecare obiect todo din lista cream un li cu div care contine numele todo ului si un div cu butoanele done si delete
        //pt fiecare element html creat il appenduim parintelui din html (li)
        insertToDoInList(toDoList[i])
    }
}

function insertToDoInList(todo) {
    let nameDiv = $("<div></div>").text(todo.name)
    let buttonDiv = $("<div></div>")
    let doneButton = $(`<button onclick="markDoneTodo(this, ${todo.id})">Done</button>`)
    // if (todo.isDone) {
    //         doneButton.text("Done")
    //       nameDiv.addClass("text-decoration-line-through text-dark")
    // }
    doneButton.addClass("btn btn-success")

    // let deleteButton = $('<button onclick="deleteTodo(this, todo.id)">Delete</button>')
    let deleteButton = $(`<button onclick="deleteTodo(this, ${todo.id})">Delete</button>`)
    deleteButton.addClass("btn btn-danger mx-1")

    let importantButton = $(`<button onclick="markImportantTodo(this, ${todo.id}" class='btn btn-link bookmark'><i class='fa fa-bookmark-o'></i></button>`);

    buttonDiv.append(importantButton)
    buttonDiv.append(doneButton)
    buttonDiv.append(deleteButton)

    let liTodo = $("<li></li>")
    liTodo.addClass("list-group-item my-3 border border-2 rounded border-primary d-flex justify-content-between")

    liTodo.append(nameDiv)
    liTodo.append(buttonDiv)
    $("#list-group-id").append(liTodo)
}

displayToDoList();


function addToDoInList() {
    let todo = {};
    todo.name = $("#add-input").val();

    toDoList[toDoList.length] = todo;
    insertToDoInList(todo);
}

// creare functie care marcheaza done/undone (linie taiata peste scris)
function markDoneTodo(buttonElm, todoId) {
    // $("#list-group-id").empty()
    // $("#list-group-id").html("")
    let li = $(buttonElm).parent().parent();
    let div = $(":first", li)
    let todoIndex = getTodoIndexById(todoId);
    if (toDoList[todoIndex].isDone) {
        //div.removeClass("text-decoration-line-through");
        $(":first", li).removeClass("text-decoration-line-through");
        toDoList[todoIndex].isDone = false;
        buttonElm.innerText = "Done"
        $("#list-group2-id").remove(li);
        $("#list-group-id").append(li);
    } else {
        div.addClass("text-decoration-line-through");
        toDoList[todoIndex].isDone = true;
        buttonElm.innerText = "Undone";
        $("#list-group-id").remove(li);
        $("#list-group2-id").append(li);
    }
    // toDoList[todoIndex].isDone = !toDoList[todoIndex].isDone;
}

// function markImportantTodo(buttonElm, todoId) {
//     let li = $(buttonElm).parent().parent();
//     let div = $(":first", li)
//     let todoIndex = getTodoIndexById(todoId);
//     if (toDoList[todoIndex].isImportant) {
//         toDoList[todoIndex].isImportant = false;
//         buttonElm.addClass("fa fa-bookmark-o")
//     } else {
//         toDoList[todoIndex].isImportant = true;
//         buttonElm.addClass("fa fa-bookmark")
//       //  $("#list-group1-id").remove(li);
//         $("#list-group2-id").append(li);
//     }
// }


function deleteTodo(buttonElm, todoId) {
    let li = buttonElm.parentNode.parentNode;
    // let div = li.children(" :first").val()
    li.remove();
    // let todoIndex = getTodoIndexByNAme(div)
    let todoIndex = getTodoIndexById(todoId)
    removeTodoByIndex(todoIndex)
}

function getTodoIndexById(id) {
    for (let i = 0; i < toDoList.length; i++) {
        if (toDoList[i].id === id) {
            return i;
        }
    }
}

function removeTodoByIndex(index) {
    for (let i = index; i < toDoList.length - 1; i++) {
        toDoList[i] = toDoList[i + 1]
    }
    toDoList.length--;
}

// function addTodoInDoneItems() {
//     let array = $("#list-group2-id");
//     for (let i = 0; i < toDoList.length; i++) {
//         if (toDoList[i].isDone === true && !array.includes(toDoList[i].isDone)) {
//             array.push(toDoList[i])
//         }
//     }
//     return array;
// }
