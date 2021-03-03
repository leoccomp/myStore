import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { MdClose, MdSearch } from 'react-icons/md';
import { FaShoppingCart } from 'react-icons/fa';

import Cookies from 'js-cookie';

import * as CartActions from '../../store/modules/cart/actions';
import * as UserActions from '../../store/modules/user/actions';

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
  Login,
  Exit
} from './styles';

export default function Header() {
  const cartSize = useSelector(state => state.cart.length);
  const [toggleMenuIsOpened, setToggleMenuIsOpened] = useState(false);
  const history = useHistory();

  const userName = Cookies.get('name');
  const logCookie = Cookies.get('logged');

  const [usuario, setUsuario] = useState('Olá, seja bem vindo!');
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    if (logCookie === 'true') {
      setLogged(true);
      setUsuario(`Olá, ${userName}`);
    }
  }, []);

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

  const handleExit = () => {
    Cookies.set('logged', 'false');

    toast.success('Logout efetuado com sucesso!');
    history.push('/');
  };

  return (
    <Container>
      <LeftSide>
        <LinkLogo href="/">
          <strong>my_</strong>
          <span>store</span>
        </LinkLogo>
        <form onSubmit="event.preventDefault();" role="search">
          <label htmlFor="search">Search for stuff</label>
          <input id="search" type="search" placeholder="Busca rápida..." />
          <button type="submit">
            <MdSearch size={18} />
          </button>
        </form>
      </LeftSide>
      <RightSide>
        <Profile>
          <Login to={!logged ? '/login' : '/profile'}>
            <div>
              <strong>{usuario}</strong>
              <>
                {logged ? (
                  <LinkProfile nohref>Meu Perfil</LinkProfile>
                ) : (
                  <LinkProfile nohref>Entre ou cadastre-se</LinkProfile>
                )}
              </>
            </div>
          </Login>
          <Exit onClick={handleExit}>Sair</Exit>
        </Profile>
        {toggleMenuIsOpened ? (
          <CartMenu>
            <CartHeader>
              <CartHeaderDesc>Meu carrinho</CartHeaderDesc>
              <ButtonClose>
                <MdClose color="#0d730d" onClick={handleToggleMenu} />
              </ButtonClose>
            </CartHeader>
            <CartItems>
              {cartItems.map(item => (
                <CartItem>
                  <ImageContainer>
                    <img src={`/products/${item.image}`} alt="imagem produto" />
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
                      color="#0d730d"
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
            <FaShoppingCart color="#000000" />
            <span>{cartSize}</span>
          </Cart>
        )}
      </RightSide>
    </Container>
  );
}
