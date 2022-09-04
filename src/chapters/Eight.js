import { useState } from 'react';

const STYLE = `
  .ch08 {
    font-family: Raleway, sans-serif;
    color: #171717;
    font-variant-numeric: lining-nums;
    background: #fbffff;
  }

  h1, h2 {
    color: #2c6c69;
  }

  section {
    background: white;
    border-radius: 4px;
    box-shadow: 2px 2px 7px #aeb7b7;
  }

  button,
  .button,
  input {
    background: none;
    border-radius: 4px;
    padding: 1ex 1ch;
    border: solid 1px #ddd;
    text-decoration: none;
    display: inline-block;
  }

  input[type='number'] {
    text-align: right;
  }

  button:hover,
  .button:hover {
    outline: dotted 1px #2c6c69;
    outline-offset: 2px;
  }

  button:focus,
  .button:focus {
    outline: solid 1px #2c6c69;
    outline-offset: 2px;
  }

  button.primary,
  .button.primary {
    border-color: #2c6c69;
    background: #2c6c69;
    color: white;
  }

  button.secondary,
  .button.secondary {
    border-color: #2c6c69;
    color: #2c6c69;
  }

  button.destructive {
    border-color: #9d1616;
    color: #9d1616;
    border-radius: 50%;
    height: 26px;
    width: 26px;
    padding: 0;
  }

  button.destructive:hover,
  button.destructive:focus {
    outline-color: #9d1616;
  }

  input:invalid {
    border-left: solid 5px #9d1616;
    border-color: #9d1616;
  }

  .error {
    color: #9d1616;
    font-size: 0.875em;
    font-weight: bold;
    display: none;
  }

  .error::before {
    content: url(./ch08/img/icons/error.svg);
    width: 1em;
    float: left;
    margin-right: 0.25rem;
  }

  input:invalid + .error {
    display: block;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th, dt, td[data-name]::before {
    color: #3a3a3a;
    font-weight: normal;
    font-size: 0.875em;
  }

  tbody td:nth-of-type(2),
  tfoot td {
    font-weight: bold;
  }

  tbody tr:nth-of-type(even) {
    background: #f2fcfc;
  }

  tr {
    border-top: solid 1px #aeb7b7;
  }

  dt::after {
    content: ': ';
  }

  /* Layout */
  .ch08 {
    padding: 1rem;
    max-width: 1280px;
    margin: 0 auto;
  }

  section {
    margin: 1rem 0;
  }

  section h2 {
    padding: 1rem;
    margin: 0;
  }

  dl {
    display: grid;
    gap: 0.5rem;
    grid-template-columns: auto max-content;
    padding: 0 1rem;
  }

  dd {
    text-align: right;
  }

  .actions {
    padding: 1rem;
    text-align: center;
  }

  .actions a {
    margin-botton: 0.5rem;
  }

  /* Mobile view table */
  @media(max-width: 549px) {
    thead {
      position: absolute;
      left: -9999rem;
    }

    td {
      display: block;
      text-align: right;
      padding: 0.25rem 0;
    }

    table img {
      float: left;
      margin-right: 1rem;
    }

    td[data-name]::before {
      content: attr(data-name) ':';
      float: left;
    }

    tr {
      display: block;
      padding: 1rem;
    }

    tfoot tr {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    }
  }

  /* Handling medium screens */
  @media(min-width: 550px) {
    table {
      table-layout: fixed;
    }

    th, td {
      padding: 0.5rem;
      text-align: left;
    }

    table img {
      width: auto;
      max-width: 100%;
    }

    th:nth-of-type(n + 3),
    td:nth-of-type(n + 3) {
      text-align: right;
    }

    tfoot th, tfoot td {
      text-align: right;
    }

    /* Handling with screens */
    @media(min-width: 995px) {
      .section-container {
        display: flex;
        gap: 1rem;
      }

      .summary {
        min-width: 250px;
      }

      section {
        margin: 0;
      }
    }
  }
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
                          // loading='lazy'
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
                  href='.' 
                  type='button'
                  className='button primary'
                >
                  Proceed to Checkout
                </a>
                <a
                  href='.'
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