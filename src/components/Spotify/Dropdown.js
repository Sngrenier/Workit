


const Dropdown = props => {



const dropdownChanged = e => {
    props.changed(e.target.value)
}


    return (
        <div>

            <select value={props.selectedValue} onChange={dropdownChanged}>
                
                {props.options.map((elem, index)=> <option key={index} value={elem.id}>{elem.name}</option>)}
            
            </select>
            
           


        </div>
    )

}

export default Dropdown


//Stateless component 