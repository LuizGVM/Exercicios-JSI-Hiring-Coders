const listContainer = document.querySelector('[data-list]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')

let lists = [];

function creatList(name){
    return {id: Date.now().toString(), name: name}
}

function clearElement(element){
    while(element.firstChild){
        element.removeChild(element.firstChild)
    }
}

function render(){
    clearElement(listContainer);
    lists.forEach(function(list){
        const item = document.createElement('li');
        item.classList.add('item');
        item.innerText = list.name;
        listContainer.appendChild(item);
    })
}

render()

newListForm.addEventListener('submit', function(e){
    e.preventDefault()
    const listName = newListInput.value
    if (listName === null || listName === '') {return}
    const list = creatList (listName)
    newListInput.value = null
    lists.push(list)
    render()
})