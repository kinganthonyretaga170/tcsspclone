import { useState } from 'react';

const STYLE = `

`;

const FRUITS = [
  {
    fruit: 'grapes',
    unitPrice: 3.23,
    quantity: -1,
    label: 'Red Grapes, 1lb',
    image: './ch08/img/grapes.jpg'
  },
  {
    fruit: 'pineapple',
    unitPrice: 2.29,
    quantity: 2,
    label: 'Pineapple',
    image: './ch08/img/pineapple.jpg'
  },
  {
    fruit: 'strawberries',
    unitPrice: 4.62,
    quantity: 3,
    label: 'Strawberries, 1lb',
    image: './ch08/img/strawberry.jpg'
  },
];

function updateQuantity(items, fruit, quantity) {
  return items.map(
    item => item.fruit === fruit 
      ? { ...item, quantity: quantity }
      : item
  );
}

export default function Eight() {
  const [items, setItems] = useState(FRUITS);

  const orders = items.map(item => ({
    ...item,
    totalPrice: item.unitPrice * item.quantity 
  }));

  const itemTotal = orders.reduce(
    (total, { quantity }) => total + quantity,
    0
  );

  const orderTotal = orders.reduce(
    (total, { totalPrice }) => total + totalPrice,
    0
  );

  const grandTotal = orderTotal + 5;

  const onChange = evt => setItems(
    v => updateQuantity(v, evt.target.name, Number(evt.target.value))
  );

  return (
    <>
      <style>{STYLE}</style>
      <div className='ch08'>
        <main>
          <h1>Checkout</h1>
          <div className='section-container'>
            <section>
              <h2>My Cart</h2>
              <table>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Item</th>
                    <th>Unit Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map(({ 
                    fruit, 
                    unitPrice, 
                    quantity, 
                    label, 
                    image, 
                    totalPrice 
                  }) => (
                    <tr key={fruit}>
                      <td>
                        <img
                          src={image}
                          width='75'
                          loading='lazy'
                          alt={label}
                        />
                      </td>
                      <td data-name='Item'>
                        {label}
                      </td>
                      <td data-name='Unit Price'>
                        $ {unitPrice}
                      </td>
                      <td data-name='quantity'>
                        <input
                          name={fruit}
                          type='number'
                          aria-label={label}
                          min='0'
                          max='99'
                          id={fruit}
                          value={quantity}
                          aria-errormessage={`${fruit}Error`}
                          onChange={onChange}
                        />
                        <p
                          className='error'
                          id={`${fruit}Error`}
                          role='alert'
                          aria-live='polite'
                        >
                          Must be a whole number between 0 and 99
                        </p>
                      </td>
                      <td data-name='Total'>
                        $ {totalPrice.toFixed(2)}
                      </td>
                      <td>
                        <button
                          type='button'
                          className='destructive'
                        >
                          <img
                            width='24'
                            src='./ch08/img/icons/remove.svg'
                            alt={`remove ${fruit}`}
                          />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th colSpan='4' scope='row'>
                      Total:
                    </th>
                    <td id='total'>
                      {orderTotal.toFixed(2)}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </section>

            <section className='summary'>
              <h2>Summary</h2>
              <dl>
                <dt>Number of Items</dt>
                <dd id='itemQty'>
                  {itemTotal}
                </dd>

                <dt>Order Total</dt>
                <dd id='orderTotal'>
                  $ {orderTotal.toFixed(2)}
                </dd>

                <dt>Shipping</dt>
                <dd>$ 5.00</dd>

                <dt>Total</dt>
                <dd ud='grandTotal'>
                  $ {grandTotal.toFixed(2)}
                </dd>
              </dl>

              <div className='actions'>
                <a 
                  href='' 
                  type='button'
                  className='button primary'
                >
                  Proceed to Checkout
                </a>
                <a
                  href=''
                  type='button'
                  className='button secondary'
                >
                  Continue Shopping
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}