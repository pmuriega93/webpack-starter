
export class Todo {

    static fromJson( {id, tarea, completed, creado} ) {

        const tempTodo = new Todo( tarea );

        tempTodo.id = id;
        tempTodo.completed = completed;
        tempTodo.creado = creado;

        return tempTodo;
    }

    constructor( tarea ) {

        this.tarea = tarea;

        this.id    = new Date().getTime();
        this.completed = false;
        this.creado = new Date();
    }
}



