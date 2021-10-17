import React, { useState } from 'react';

const availableItems = [
  {
    name: 'Cinnamon Doughnuts',
    price: 100
  },{
    name: 'Cupcakes',
    price: 99
  },{
    name: 'Bananas',
    price: 0.1
  },{
    name: 'Chocolate',
    price: 10
  },{
    name: 'Kombucha',
    price: 5
  },{
    name: 'Muffin',
    price: 98
  },
]

function App() {
  const [ inventory, updateInventory ] = useState(availableItems)
  const [ cart, updateCart] = useState([])

  const addToCart = (item) => {
    let isInTheCart = false;
    
    // If the item is in the cart, increase the quantity by 1
    cart.forEach((cartItem) => {
      if(cartItem.name == item.name) {
        // Increase the amount
        cartItem.quantity += 1
        isInTheCart = true
      }
    })

    if(isInTheCart) {
      updateCart([...cart])
    } else {
      updateCart([...cart, {
        ...item,
        quantity: 1,
      }])
    }
  }

  return (
    <div>
      <h1>Lachlan's Shnacks</h1>
      <h4>Roll up, Roll up, Get ya shnacks</h4>

      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div style={{ width: "45%" }}>
          <h4>Menu</h4>
          {inventory.map((item) => {
            return (
              <div style={{display: 'flex', justifyContent: 'space-between' }}>
                <p style={{ width: "50%" }}>{item.name}</p>
                <p>Price: {item.price}</p>
                <button onClick={() => addToCart(item)}>Add</button>
              </div>
            )
          })}
        </div>
        <div style={{ width: "45%" }}>
          <h4>Current Cart</h4>
          {cart.map((item) => {
            return (
              <div style={{display: 'flex', justifyContent: 'space-between' }}>
                <p>{item.name}</p>
                <p>Quantity: {item.quantity}</p>
                <button>Remove</button>
              </div>
            )
          })}
        </div>
      </div>


    </div>
  );
}

export default App;
