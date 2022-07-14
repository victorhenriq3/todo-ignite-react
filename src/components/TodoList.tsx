import { Empty } from './Empty'
import { Trash } from "phosphor-react"
import styles from './TodoList.module.css'
import { Todo } from '../App'

interface TodoListProps {
    todos: Todo[]
    checkTodo: (todo: Todo) => void
    removeTodo: (todo: Todo) => void
}

export function TodoList({todos, checkTodo, removeTodo}:TodoListProps){

    return (
        <div className={styles.todo_container}>
            <div className={styles.todo_header}>
                <div className={styles.todo_create}>
                    Tarefas Criadas 
                    <span>{todos.length}</span>
                </div>
        
                <div className={styles.todo_finishes}>
                    Concluídas
                    {todos.length > 0 
                        ? <span>{todos.filter(td => td.check === true).length} de {todos.length}</span>
                        : <span>{todos.filter(td => td.check === true).length}</span>
                    }
                    
                </div>
            </div>

            <div className={styles.todo_content}>
                {todos.length > 0 ? (
                    todos.map(todo => (
                        <div className={!todo.check ? styles.todo_list : styles.todo_list_check} key={todo.content}>
                            
                            <div className={styles.input_check}>
                                <input type="checkbox" checked={todo.check} onChange={() => checkTodo(todo)} id="checkbox"/>
                                <label htmlFor="checkbox"></label>
                            </div>

                            <span>{todo.content}</span>

                            <div className={styles.todo_trash}>
                                <Trash size={20}  onClick={() => removeTodo(todo)}/>
                            </div>
                        </div>
                    ))
                ) : (
                    <Empty />
                )}
            </div>
        </div>
    )
}