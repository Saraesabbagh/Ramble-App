import './DropDownList.css'
export const DropDownList = (props) => {
    console.log(props.items)
    return (
        <div className='dropdown'>
            <label>{props.label}</label>
            <select>
                {props.items.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}