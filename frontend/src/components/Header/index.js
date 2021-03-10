import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { MdClose, MdSearch } from 'react-icons/md';
import { FaShoppingCart } from 'react-icons/fa';

import * as CartActions from '../../store/modules/cart/actions';

import { UserContext } from '../../context/user';

import {
  Container,
  LeftSide,
  RightSide,
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

  const [textSearch, setTextSearch] = useState('');
  const { name, setName, logged, setLogged, setSearch } = useContext(
    UserContext
  );

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
    toast.success('Logout efetuado com sucesso!');
    setName('Olá, seja bem vindo!');
    setLogged(false);
    history.push('/');
  };

  function handleSearch() {
    setSearch(textSearch);
  }

  function handleClear() {
    setSearch('');
    setTextSearch('');
  }

  return (
    <Container>
      <LeftSide>
        <LinkLogo href="/">
          <strong>my_</strong>
          <span>store</span>
        </LinkLogo>
        <Search>
          <input
            id="search"
            type="search"
            placeholder="Busca rápida..."
            value={textSearch}
            onChange={e => setTextSearch(e.target.value)}
          />
          <button type="button" onClick={handleSearch}>
            <MdSearch size={18} />
          </button>
          <button type="button" onClick={handleClear}>
            <MdClose size={18} />
          </button>
        </Search>
        {/* <form onSubmit={e => e.preventDefault()} role="search">
          <label htmlFor="search">Search for stuff</label>
          <input
            id="search"
            type="search"
            placeholder="Busca rápida..."
            value={textSearch}
            onChange={e => setTextSearch(e.target.value)}
          />
          <button type="submit" onClick={handleSearch}>
            <MdSearch size={18} />
          </button>
        </form> */}
      </LeftSide>
      <RightSide>
        <Profile>
          <Login to={!logged ? '/login' : '/profile'}>
            <div>
              <strong>{name}</strong>
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
