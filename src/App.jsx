import { useState, useEffect } from 'react'
import { Header } from './components/Header'
import { Task } from './components/Task'

import { Plus } from "lucide-react"

import './App.css'

function App() {

  const [tasks, setTasks] = useState(() => {
    const taskSalvas = localStorage.getItem("@minhas-tarefas")

    if(taskSalvas){
      return JSON.parse(taskSalvas)
    }

    return []
  })

  const [texto, setTexto] = useState("")

  function toggleTask(id){
    const taskAtualizada = tasks.map((task) => {
      if(task.id === id){
        return {...task, concluida: !task.concluida}
      }
      return task
    })
    setTasks(taskAtualizada)
  }

  function handleEditar(id, novoTexto){
    const tasksAtualizadas = tasks.map((task) => {
      if(task.id === id){
        return {...task, texto: novoTexto}
      }

      return task
    })

    setTasks(tasksAtualizadas)
  }

  function handleDeletar(id){
    const tasksAtualizadas = tasks.filter((task) => task.id !== id)
    setTasks(tasksAtualizadas)
  }

  function handleAdicionar() {
    if(texto.trim() === "") return

    const novaTask = {
      id: Date.now(),
      texto: texto,
      concluida: false
    }

    setTasks([novaTask, ...tasks])
    setTexto("")

  }

  useEffect(() => {
    localStorage.setItem("@minhas-tarefas", JSON.stringify(tasks))
  }, [tasks])

  const taskTotalizada = tasks.length
  const taskConcluida = tasks.filter((task) => task.concluida === true).length

  return (
    <main className="app-container">
      <Header totalTask={taskTotalizada} completa={taskConcluida}/>

      <div className="container-input">

        <input 
          id="input" 
          type="text" 
          placeholder="Digite sua tarefa" 
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          />

        <button className="btn-adicionar" onClick={handleAdicionar}>
          <Plus size={24} />
        </button>
      </div>

      {
        tasks.length === 0 ? (
          <div className="empty-state">
          <img 
            src={"./src/assets/empty.png"} 
            alt="Nenhuma tarefa" 
          />
          <p>Nenhuma task cadastrada</p>
        </div>
        ):(
          tasks.map((task) => (

          <Task 
            key={task.id} 
            task={task} 
            onToggle={toggleTask}
            onDelete={handleDeletar}
            onEdit={handleEditar}
            />
        )))
      }


    </main>
  )
}

export default App