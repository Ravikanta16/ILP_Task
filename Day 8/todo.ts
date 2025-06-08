interface Todo {
  name: string;
  description: string;
  done: boolean;
}

let todos: Todo[] = [];

function add(name: string, description: string): number {
  return todos.push({
    name: name,
    description: description,
    done: false,
  });
}

function remove(index: number): Todo[] {
  return todos.splice(index, 1);
}

function list(): void {
  todos.forEach(function (todo: Todo, index: number): void {
    console.log("index "+index + " - " + "Todo name "+todo.name);
  });
}

function update(index: number, name: string, description: string): Todo {
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
