import React from 'react'
import CartItem from './CartItem'
import { clearCart } from "../control/cartSlice"
import { useSelector, useDispatch } from "react-redux"

function CartList() {

    const dispatch = useDispatch()
    const { cartItems, quantity, total } = useSelector((store) => store.cart)

    return (
        <>
            {quantity < 1 ? (
                <section className='d-flex justify-content-center align-items-center'>
                    <header>
                        <h2 className='text-center'>Sepetim</h2>
                        <h4 className='text-center'>Sepetiniz boş</h4>
                    </header>
                </section>
            ) : (
                <section>
                    <header>
                        <h2>Sepetim</h2>
                    </header>

                    <div>
                        {cartItems.map((item) => {
                            return <CartItem key={item.id} {...item} />
                        })}
                    </div>

                    <footer className='d-flex justify-content-center mt-3'>
                        <div style={{marginRight:20}}>
                            <h4>Toplam tutar: <span> {total} ₺ </span> </h4>
                        </div>
                        <button onClick={() => dispatch(clearCart())} type='button' className='btn btn-danger'>Sepeti Boşalt</button>
                    </footer>
                </section>
            )}
        </>
    )
}

export default CartList