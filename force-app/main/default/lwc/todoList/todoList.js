import { LightningElement, track } from 'lwc';

export default class Todo extends LightningElement {

    @track todoTasks = [];

    newTask = '';
    
    disableBtn = true;

    updateNewTask(event) {
        this.newTask = event.target.value;
        if(!this.newTask == null || !this.newTask == ''){
            this.disableBtn = false;
        }else{
            this.disableBtn = true;
        }
    }
    
    
    addTaskToList(){
        this.todoTasks.push({
            id: this.todoTasks.length + 1,
            name: this.newTask
        });
        this.newTask = '';
    }

    deleteTaskFromList(event) {
        let idToDelete = event.target.name;
        let todoTasks = this.todoTasks;
        // let todoIndex;
        // for(let i=0; i<todoTasks.length; i++) {
        //     if(idToDelete === todoTasks[i].id) {
        //         todoIndex = i;
        //     }
        // }

        todoTasks.splice(todoTasks.findIndex(todoTask => todoTask.id === idToDelete), 1);
    }
}