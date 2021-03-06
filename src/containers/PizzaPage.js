import React from 'react'

import Pizza from './Pizza'
import Order from './Order';
import PizzaDB from '../pizza-db.json'

const PizzaPage = () => {

  const showOrder = () => {
    document.querySelector('.order').classList.remove('hide')
  }

  return (
    <section className="card-5">
      <button className="order-btn make-order title" onClick={showOrder}>Make Order</button>
      <Order />
      <div className="pizza-plate">
        {PizzaDB.map(item => <Pizza 
          key={item.id}
          title={item.name}
          img={item.img} 
          time={item.time}
          contains={item.contains}
          price={item.price}
        /> )}
      </div>
    </section>
  );
}
 
export default PizzaPage;