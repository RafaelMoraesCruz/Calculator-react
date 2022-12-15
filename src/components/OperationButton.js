import { ACTIONS } from "./app"

export default function OperationButton(props){
    const {className , dispatch, operation} = props
    return <button className={className} onClick={() => dispatch({type: ACTIONS.CHOOSE_OPERATION, payload: {operation}})}>{operation}</button>
}
