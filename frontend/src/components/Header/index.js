import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MdClose, MdAddShoppingCart } from 'react-icons/md';

import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  LinkLogo,
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
  ButtonRemove,
  ButtonFinish
} from './styles';
import logo from '../../assets/images/logo.svg';
import cartImg from '../../assets/images/cart.svg';

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
        {/* <img src={logo} alt="soled_" /> */}
        <strong>my_</strong>
        <span>store</span>
      </LinkLogo>
      {toggleMenuIsOpened ? (
        <CartMenu>
          <CartHeader>
            <CartHeaderDesc>Carrinho de compras</CartHeaderDesc>
            <ButtonClose>
              <MdClose size={20} color="#39ff14" onClick={handleToggleMenu} />
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
                    <input
                      className="number-btn-left"
                      value="-"
                      type="button"
                      onClick={() => decrement(item)}
                    />
                    <span className="number-value">{item.amount}</span>
                    <input
                      className="number-btn-right"
                      value="+"
                      type="button"
                      onClick={() => increment(item)}
                    />
                  </div>
                </ButtonQuantity>
                <strong>{`R$${item.subtotal}`}</strong>
                <ButtonRemove>
                  <MdClose
                    size={10}
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
          {/* <img src={cartImg} alt="cart" /> */}
          <MdAddShoppingCart size={20} color="#39ff14" />
          <span>{cartSize}</span>
        </Cart>
      )}
    </Container>
  );
}
