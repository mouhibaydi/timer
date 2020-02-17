import React from "react"


function Navbar(props) {
    return (
        <li className={props.details.submenu ? 'dropdown':' none'}>
            <a href={props.details.link}>
            {props.details.name}
                {props.details.submenu && <ul className="dropdown-content">
                {props.details.submenu.map(el => <li> {el} </li> ) } </ul> }
             </a>

           
    
    </li>)} 
    
export default Navbar
