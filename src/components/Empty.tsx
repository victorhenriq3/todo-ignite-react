import styles from "./Empty.module.css"
import ClipBoard from "../assets/Clipboard.svg"

export function Empty(){
    return (
        <div className={styles.empty}>
            <img src={ClipBoard} alt="" />

            <p>Você ainda não tem tarefas cadastradas </p>
            <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
    )
}