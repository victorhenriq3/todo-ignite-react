import styles from './TodoList.module.css'

export function TodoList(){
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

            </div>
        </div>
    )
}