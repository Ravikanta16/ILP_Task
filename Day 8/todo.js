var todos = [];
function add(name, description) {
    return todos.push({
        name: name,
        description: description,
        done: false,
    });
}
function remove(index) {
    return todos.splice(index, 1);
}
function list() {
    todos.forEach(function (todo, index) {
        console.log("index " + index + " - " + "Todo name " + todo.name);
    });
}
function update(index, name, description) {
    todos[index].name = name;
    todos[index].description = description;
    return todos[index];
}
add("Task 1", "Complete the project");
add("Task 2", "Review code");
console.log("Initial Todo List:");
list();
update(0, "Task 1 Updated", "Finish and submit the project");
remove(1);
console.log("Updated Todo List:");
list();
