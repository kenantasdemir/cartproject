import React from 'react'
import { useSelector } from "react-redux"

function Navbar() {

    const { quantity } = useSelector((store) => store.cart)

    return (
        <div className='navbar bg-dark d-flex justify-content-around'>
            <a className='nav-link text-light'>Sepetim uygulaması</a>
            <a href='/' className='nav-link text-light'>
                <p className='text-center text-light text-decoration-none mb-1 mr-1'>
                    {quantity}
                    <i className="bi bi-cart"></i>
                </p>
            </a>
        </div>
    )
}

export default Navbar