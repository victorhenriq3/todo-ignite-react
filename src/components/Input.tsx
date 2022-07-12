import styles from './Input.module.css'
import {PlusCircle} from "phosphor-react"
import React from 'react'

interface InputProps{
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onAddTodo: () => void
    newTodo: string
}

export function Input({handleChange, onAddTodo, newTodo}: InputProps){
    return (
        <div className={styles.input}>
            <input type="text" placeholder='Adicione uma nova tarefa' onChange={handleChange} value={newTodo}/>

            <button onClick={onAddTodo}>
                Criar 
                <PlusCircle size={24}/>    
            </button>
        </div>
    )
}