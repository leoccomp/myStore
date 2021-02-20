import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdClose, MdAddShoppingCart } from 'react-icons/md';

import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  LinkLogo,
  Search,
  Cart,
  CartMenu,
  CartHeader,
  CartHeaderDesc,
  ButtonClose,
  CartItems,
  CartItem,
  ImageContainer,
  TotalBuy,
  ButtonQuantity,
  ButtonDecrement,
  ButtonIncrement,
  ButtonRemove,
  ButtonFinish
} from './styles';

export default function Header() {
  const cartSize = useSelector(state => state.cart.length);
  const [toggleMenuIsOpened, setToggleMenuIsOpened] = useState(false);

  const total = useSelector(state =>
    state.cart.reduce((totalSum, product) => {
      return totalSum + product.price * product.amount;
    }, 0)
  );

  const cartItems = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: product.price * product.amount
    }))
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  const handleToggleMenu = () => {
    setToggleMenuIsOpened(!toggleMenuIsOpened);
  };

  return (
    <Container>
      <LinkLogo href="/">
        <strong>my_</strong>
        <span>store</span>
      </LinkLogo>
      <form action="">
        <input type="search" placeholder="Busca rápida..." />
        <i className="fa fa-search" />
      </form>
      {toggleMenuIsOpened ? (
        <CartMenu>
          <CartHeader>
            <CartHeaderDesc>Meu carrinho</CartHeaderDesc>
            <ButtonClose>
              <MdClose color="#39ff14" onClick={handleToggleMenu} />
            </ButtonClose>
          </CartHeader>
          <CartItems>
            {cartItems.map(item => (
              <CartItem>
                <ImageContainer>
                  <img src={item.image} alt="imagem produto" />
                </ImageContainer>
                <span>{item.name}</span>
                <ButtonQuantity>
                  <small>Qtd:</small>
                  <div>
                    <ButtonDecrement onClick={() => decrement(item)}>
                      -
                    </ButtonDecrement>
                    <input
                      type="text"
                      className="number-value"
                      value={item.amount}
                    />
                    <ButtonIncrement onClick={() => increment(item)}>
                      +
                    </ButtonIncrement>
                  </div>
                </ButtonQuantity>
                <strong>{`R$${item.subtotal}`}</strong>
                <ButtonRemove>
                  <MdClose
                    color="#39ff14"
                    onClick={() =>
                      dispatch(CartActions.removeFromCart(item.id))
                    }
                  />
                </ButtonRemove>
              </CartItem>
            ))}
          </CartItems>
          <TotalBuy>
            <strong>Total:</strong>
            <strong>{`R$${total}`}</strong>
          </TotalBuy>
          <ButtonFinish>
            <span>Finalizar compra</span>
          </ButtonFinish>
        </CartMenu>
      ) : (
        <Cart onClick={handleToggleMenu}>
          <MdAddShoppingCart color="#39ff14" />
          <span>{cartSize}</span>
        </Cart>
      )}
    </Container>
  );
}
