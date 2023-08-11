const tagH4 = document.getElementById("tagH4"),
    todoInp = document.getElementById("todoInp"),
    btnAdd = document.getElementById("btnAdd"),
    todoList = document.getElementById("todoList");


let todoData = []

todoInp.addEventListener("input", function (e) {
    const value = e.target.value
    if (value.length < 5) {
        tagH4.classList.add('h4-type2')
        return
    }
    tagH4.classList.remove('h4-type2')
    console.log(value);
});


btnAdd.addEventListener("click", function () {
    createLi()
});

todoInp.addEventListener('keydown', function (e) {
    if (e.key === "Enter") {
        createLi()
    }
});

function createLi() {
    let valueBtn = todoInp.value
    if (valueBtn.length < 5) {
        alert('Error')
        return
    }
    todoData.push(valueBtn)
    todoInp.value = ""
    renderTodoList(todoData)
};

function removeTodo(e,todoIndex) {
    btnAdd.removeEventListener("click",createLi);
    const newTodoData= todoData.filter((item,index)=> index !==todoIndex)
    todoData=newTodoData;
    renderTodoList(todoData)
}

function renderTodoList(arr) {
    const newContent = arr
        .map(function (todo, index) {
            return `<li class="">
        <span>${index + 1
                }. ${todo}</span> <button type="button" class="btn btn-danger" onclick="removeTodo(this,${index})">DEL</button>
      </li>`;
        })
        .join("");

    todoList.innerHTML = newContent;
}

