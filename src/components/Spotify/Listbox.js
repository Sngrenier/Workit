const ListBox = props => {


    const clicked = e => {
        e.preventDefault()
    }

    return (
        <div>Listbox

            {props.items.map((item, index)=> 
                <button key={index} 
                        onClick={clicked}
                        id={item.track.id}>
                        {item.track.name}
               </button>
            )}
        </div>
    )

}

export default ListBox