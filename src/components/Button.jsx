import "../App.css"
import {SquarePen, Trash} from "lucide-react"

export function Button({icon, onAction}){

    return(
        <button
            onClick={() => onAction()}
            className="btn"
        >
            {icon === 'Editar' ? <SquarePen /> : <Trash />}
        </button>
    )
}