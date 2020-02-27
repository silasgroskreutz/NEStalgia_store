import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns.js';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../context';

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.fragment>
                  <Title name='your' title='cart' />
                  <CartColumns />
                </React.fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
