import React from 'react'

import Pizza from '../Pizza/Pizza'
import Order from '../Order/Order';
import PizzaDB from '../../pizza-db.json'

const PizzaPage = () => {
  console.log(PizzaDB)
  return (
    <section>
      <button className="order-btn">Make Order</button>
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