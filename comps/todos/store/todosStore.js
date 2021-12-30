import { configure, makeAutoObservable } from "mobx";
configure({
    enforceActions: "never",
  });
class TodosStore {
    todosList =[] ;
    todo = this.resetTodoData();

    resetTodoData(){
        return {
            id: Math.max(0, Math.max(...this.todosList.map(({ id }) => id))) +1,
            text: "",
            done: false
        }
    }
    constructor(){
        makeAutoObservable(this);
    }
    addTodo(){
        console.log(`myTodo ${this.todo.text}`)
        this.todosList.push(this.todo);
        console.log(this.todosList)
        this.todo = this.resetTodoData();
    }
}


const todosStore = new TodosStore();
export default todosStore;