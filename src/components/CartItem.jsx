import React from 'react'
import { useDispatch } from 'react-redux'
import { removeItem, increase, decrease } from '../control/cartSlice'


function CartItem({ id, title, description, url, price, quantity }) {

  const dispatch = useDispatch()
  const handleRemoveItem = (id) => {
    if (quantity === 1) {
      dispatch(removeItem(id))
    }
  }


  return (

      
    <div className='card mt-5 col-sm-1 col-md-3 m' style={{ display: 'inline-block',marginLeft:50 ,marginRight:60}}>
    <div className='card-header h-50'>
      <div style={{ height: 40 }} className='row'>
        <button
          onClick={() => dispatch(removeItem(id))}
          style={{ width: 45, marginRight: 10 }}
          className='ms-auto btn btn-danger mb-3'
        >
          Sil
        </button>
      </div>
      <div className='row'>
        <img src={url} alt="" className='card-img-top w-100' style={{maxHeight:150}} />
      </div>
    </div>
    <div className='card-body'>
      <h2 className='text-center'> {title} </h2>
      <p className='text-center'> {description} </p>
      <p className='text-center'> {price} ₺ </p>
    </div>
    <div className='card-footer d-flex justify-content-center align-items-center'>
      <button
        onClick={() => {
          dispatch(decrease(id));
          handleRemoveItem(id);
        }}
        className='btn btn-danger'
      >
        -
      </button>
      <p className='text-center mx-3'> {quantity} </p>
      <button onClick={() => dispatch(increase(id))} className='btn btn-success'>+</button>
    </div>
  </div>

  

  )
}

export default CartItem