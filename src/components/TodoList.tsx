import { useState } from 'react'
import { Empty } from './Empty'
import { Trash } from "phosphor-react"
import styles from './TodoList.module.css'
import { Todo } from '../App'

interface TodoListProps {
    todos: Todo[]
    checkTodo: (todo: Todo) => void
}

export function TodoList({todos, checkTodo}:TodoListProps){

    return (
        <div className={styles.todo_container}>
            <div className={styles.todo_header}>
                <div className={styles.todo_create}>
                    Tarefas Criadas 
                    <span>{todos.length}</span>
                </div>
        
                <div className={styles.todo_finishes}>
                    Concluídas
                    <span>0</span>
                </div>
            </div>

            <div className={styles.todo_content}>
                {todos.length > 0 ? (
                    todos.map(todo => (
                        <div className={!todo.check ? styles.todo_list : styles.todo_list_check} key={todo.content}>
                            <input type="checkbox" checked={todo.check} onChange={() => checkTodo(todo)}/>

                            <span>{todo.content}</span>
                            <Trash size={24}/>
                        </div>
                    ))
                ) : (
                    <Empty />
                )}
            </div>
        </div>
    )
}