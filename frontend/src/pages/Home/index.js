import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import api from '../../services/api';
import { formatPrice } from '../../utils/format';
import * as CartActions from '../../store/modules/cart/actions';

import 'rc-slider/assets/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Sections from '../../components/Sections';
import Filters from '../../components/Filters';
import Products from '../../components/Products';

import { Container, Main, CheckBox } from './styles';
import LocationBar from '../../components/LocationBar';

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
    <Container>
      {/* <Header /> */}
      <Sections />
      {/* <LocationBar /> */}
      <Main>
        {/* <Filters /> */}
        <Products />
      </Main>
      {/* <Footer /> */}
    </Container>
  );
}
