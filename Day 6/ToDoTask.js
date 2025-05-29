let ToDo = [];
let Completed = [];
let currentId = 1;

function add(title) {
  if (!title.trim()) return -1;
  const newTask = { id: currentId++, task: title };
  ToDo.push(newTask);
  return newTask.id;
}

function remove(id) {
  const index = ToDo.findIndex(task => task.id === id);
  if (index !== -1) {
    ToDo.splice(index, 1);
    return true;
  }
  return false;
}

function update(id, title) {
  const task = ToDo.find(task => task.id === id);
  if (task) {
    task.task = title;
    return true;
  }
  return false;
}

function markAsCompleted(id) {
  const index = ToDo.findIndex(task => task.id === id);
  if (index !== -1) {
    const [task] = ToDo.splice(index, 1);
    Completed.push(task);
    return true;
  }
  return false;
}

console.log("ToDo List");
console.log("Added ID:", add("Learn JavaScript"));
console.log("Added ID:", add("Build Project"));
console.log("ToDo:", ToDo);

console.log("Updated:", update(1, "Master JavaScript"));
console.log("ToDo:", ToDo);

console.log("Completed Task 1:", markAsCompleted(1));
console.log("ToDo:", ToDo);
console.log("Completed:", Completed);

console.log("Removed Task 2:", remove(2));
console.log("ToDo:", ToDo);
