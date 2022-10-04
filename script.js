//creare variabila pt a retine to do-urile
let toDoList = [
    {
        id: 1,
        name: "Citesc 25 de pagini",
        isDone: true,
    },
    {
        id: 2,
        name: "Sport 30 minute",
        isDone: true,
    },
    {
        id: 3,
        name: "Beau 3 litri de apa",
        isDone: false,
    }
]
let todo = $("<h1>Titlu</h1>")
$("body").append(todo);

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
    //cream un div in care punem numele todo-ului si unul pt butoane
    //am creat un element div pt numele todo-ului si l-am asgnat unei variabile
    let nameDiv = $("<div></div>").text(todo.name)
    //am creat un element div pt butoane si l-am asignat unei variabile
    let buttonDiv = $("<div></div>")
    //cream 2 butoane, unul pt Done si unul pt Delete
    let doneButton = $("<button>Done</button>")
    if (todo.isDone) {
        //buttonul trebuie sa fie undone si scrisul sa fie taiat
        doneButton.text("Undone")
        nameDiv.addClass("text-decoration-line-through text-dark")
        doneButton.click(markDoneTodo)
    }
    doneButton.addClass("btn btn-success")

    let deleteButton = $("<button>Delete</button>")
    deleteButton.addClass("btn btn-danger mx-1")
    deleteButton.click(deleteTodo)

    //append lui buttonDiv cele 2 butoane
    buttonDiv.append(doneButton)
    buttonDiv.append(deleteButton)
    //cream un li care contine div-urile
    let liTodo = $("<li></li>")
    liTodo.addClass("list-group-item my-3 border border-2 rounded border-primary d-flex justify-content-between")
    liTodo.append(nameDiv)
    liTodo.append(buttonDiv)
    //selectam ul dupa id si ii apenduim liTodo
    $("#list-group-id").append(liTodo)
}

displayToDoList();


//adaugare event listener pe butonul add

//creare functie care sa adauge valoarea din input in lista
function addToDoInList() {
    let todo = {};
    todo.name = $("#add-input").val();

    toDoList[toDoList.length] = todo;
    insertToDoInList(todo);
}
//$("#add-button").click(addToDoInList)

//adaugare event listener pe butonul done daca e facut


// creare functie care marcheaza done/undone (linie taiata peste scris)
function markDoneTodo(buttonElm) {
    let li = buttonElm.parentNode.parentNode;
    let div = li.children(" :first") //div-ul care contine cnumele todo-ului
    //extragi numele todo-ului din div div.text();
    div.text(getTodoByNAme())
    let todoIndex = getTodoIndexByNAme()
    //cauti tod-uo dupa nume
    // il markezi ca done/undone
    toDoList[todoIndex].isDone = !toDoList[todoIndex].isDone
}

function getTodoByNAme(todoName) {
    for (let i = 0; i < toDoList.length; i++) {
        if (toDoList[i].name === todoName) {
            return toDoList[i];
        }
    }
}

function getTodoIndexByNAme(todoName) {
    for (let i = 0; i < toDoList.length; i++) {
        if(toDoList[i].name === todoName) {
            return i;
        }
    }
}

//adaugare event listener pe butonul delete

//creare functie care sterge to do ul
function deleteTodo(buttonElm) {
    let li = buttonElm.parentNode.parentNode;
    $("#list-group-id").empty(li);
    let div = li.children(" :first").val()
  //  div.text(getTodoByNAme())
    let todoIndex = getTodoIndexByNAme(div)
    removeTodo(todoIndex)
}

function removeTodo(index) {
    for (let i = index; i < toDoList.length - 1; i++) {
        toDoList[i] = toDoList[i + 1]
    }
    toDoList.length--;
}
