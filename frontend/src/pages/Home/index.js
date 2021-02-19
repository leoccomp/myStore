import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import Skeleton from 'react-loading-skeleton';
import api from '../../services/api';
import { formatPrice } from '../../utils/format';
import * as CartActions from '../../store/modules/cart/actions';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import {
  Section,
  Container,
  Product,
  DescAndPrice,
  Name,
  Description,
  Price,
  Button,
  ImageContainer
} from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const data = response.data.products.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price)
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <Section>
      <Header />
      <Container>
        <nav>
          <input type="checkbox" id="menuToggle" />
          <label htmlFor="menuToggle">
            <span>&times;</span>
            <span>Filters</span>
            {/* <span>&#9776;</span> */}
          </label>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="https://maxpelic.com" target="_blanck">
                Developer
              </a>
            </li>
          </ul>
        </nav>
        {products.map(product => (
          <Product key={product.id} bgColor="#ffffff">
            <ImageContainer>
              <img src={product.image} alt={product.title} />
            </ImageContainer>
            <DescAndPrice>
              <Name>{product.name || <Skeleton />}</Name>
              <Price>
                <span>{`R$${product.price}` || <Skeleton />}</span>
              </Price>
            </DescAndPrice>
            <Description>
              {product.short_description || <Skeleton />}
            </Description>
            <Button type="button" onClick={() => handleAddProduct(product.id)}>
              <MdAddShoppingCart size={16} color="#000000" />
              <span>Comprar</span>
            </Button>
          </Product>
        ))}
      </Container>
      <Footer />
    </Section>
  );
}
