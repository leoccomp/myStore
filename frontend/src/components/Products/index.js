import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { MdAddShoppingCart } from 'react-icons/md';
import Skeleton from 'react-loading-skeleton';
import { formatPrice } from '../../utils/format';

import * as CartActions from '../../store/modules/cart/actions';

import api from '../../services/api';

import {
  Container,
  Product,
  CardItem,
  DescAndPrice,
  Name,
  Description,
  Price,
  Button,
  ImageContainer
} from './styles';

export default function Products() {
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
      <Product>
        {products.map(product => (
          <CardItem key={product.id}>
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
          </CardItem>
        ))}
      </Product>
    </Container>
  );
}
