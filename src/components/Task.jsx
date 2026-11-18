import '../App.css'
import { Button } from './Button'

export function Task({task, onToggle, onDelete, onEdit}){

    function solicitarEdicao(){
        const novoTexto = window.prompt("Edite sua Tarefinha", task.texto)
        if(novoTexto !== null && novoTexto.trim() !== ""){
            onEdit(task.id, novoTexto)
        }
    }

    return(
        <div className="container-task" key={task.id}>
            <input type="checkbox" checked={task.concluida} onChange={() => onToggle(task.id)}/>
            <p className={`texto-tarefa ${task.concluida ? "riscado" : ''}`}>{task.texto}</p>
            <div className="container-btn">
              <Button icon={"Editar"} onAction={solicitarEdicao}/>
              <Button onAction={() => onDelete(task.id)}/>
            </div>
          </div>
    )
}