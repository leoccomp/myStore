import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdClose, MdAddShoppingCart, MdShoppingBasket } from 'react-icons/md';
import { FaUserAlt, FaShoppingCart } from 'react-icons/fa';

import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  LeftSide,
  RightSide,
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
  ButtonDecrement,
  ButtonIncrement,
  ButtonRemove,
  ButtonFinish,
  Profile,
  LinkProfile,
  Login
} from './styles';

export default function Header() {
  const cartSize = useSelector(state => state.cart.length);
  const [toggleMenuIsOpened, setToggleMenuIsOpened] = useState(false);

  const [usuario, setUsuario] = useState('Olá, seja bem vindo!');
  const [logged, setLogged] = useState(false);

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
      <LeftSide>
        <LinkLogo href="/">
          <strong>my_</strong>
          <span>store</span>
        </LinkLogo>
        <form action="">
          <input type="search" placeholder="Busca rápida..." />
          <i className="fa fa-search" />
        </form>
      </LeftSide>
      <RightSide>
        <Profile>
          <Login to={!logged ? '/login' : '/profile'}>
            <div>
              <strong>{usuario}</strong>
              <div>
                {logged ? (
                  <LinkProfile nohref>Meu Perfil</LinkProfile>
                ) : (
                  <LinkProfile nohref>Entre ou cadastre-se</LinkProfile>
                )}
              </div>
            </div>
            <FaUserAlt size={28} color="#000000" />
          </Login>
        </Profile>
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
                      color="#7fff00"
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
            <FaShoppingCart size={28} color="#000000" />
            <span>{cartSize}</span>
          </Cart>
        )}
      </RightSide>
    </Container>
  );
}
