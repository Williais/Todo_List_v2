import '../App.css'

export function Header({totalTask, completa}){

    return(
        <div id='container-header'>
            <h1 className='titulo'>ToDo List</h1>
            <div id='contagem_task'>
                <span className="destaque-numero">{completa}</span> / {totalTask}
            </div>
        </div>
    )
}