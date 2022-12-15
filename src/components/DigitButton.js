import { ACTIONS } from "./app"

export default function digitButton(props){
    const {className , dispatch, digit} = props
    return <button className={className} onClick={() => dispatch({type: ACTIONS.ADD_DIGIT, payload: {digit}})}>{digit}</button>
}
