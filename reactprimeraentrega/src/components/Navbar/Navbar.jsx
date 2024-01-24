import React from "react"
import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"


const NavBar = () => {

    return(

        <>

           
            <h1>Cafe&Aroma</h1>

            <ul>
                <li>
                    <a>Inicio</a>
                </li>
                <li>
                <a>Cafeteria</a>
                </li>
                <li><a>Contacto</a></li>
                <li>
                <a>Nosotros</a>
                </li>
                
                
            </ul>

            
            <CartWidget/>
        </>

    )
}

export default NavBar