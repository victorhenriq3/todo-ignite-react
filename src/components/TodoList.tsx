import { useState } from 'react'
import { Empty } from './Empty'
import { Trash } from "phosphor-react"
import styles from './TodoList.module.css'

export function TodoList(){
    const [todos, setTodos] = useState(['a'])
    return (
        <div className={styles.todo_container}>
            <div className={styles.todo_header}>
                <div className={styles.todo_create}>
                    Tarefas Criadas 
                    <span>0</span>
                </div>
        
                <div className={styles.todo_finishes}>
                    Concluídas
                    <span>0</span>
                </div>
            </div>

            <div className={styles.todo_content}>
                {todos.length > 0 ? (
                    <div className={styles.todo_list}>
                       <input type="checkbox" />

                       <span>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames </span>

                       <Trash size={24}/>
                    </div>
                ) : (
                    <Empty />
                )}
            </div>
        </div>
    )
}