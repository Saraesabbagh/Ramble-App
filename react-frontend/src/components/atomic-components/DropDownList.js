
export const DropDownList = (props) => {
    console.log(props.items)
    return (
        <div>
            <label>{props.label}</label>
            <select>
                {props.items.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}