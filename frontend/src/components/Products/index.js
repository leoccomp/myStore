import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { MdAddShoppingCart, MdKeyboardArrowLeft } from 'react-icons/md';
import { GrFormClose } from 'react-icons/gr';
import Skeleton from 'react-loading-skeleton';
import { formatPrice } from '../../utils/format';

import * as CartActions from '../../store/modules/cart/actions';

import api from '../../services/api';

import {
  Container,
  Overlay,
  Modal,
  ButtonLeft,
  Product,
  ButtonRight,
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
  const [productDetail, setProductDetail] = useState([]);
  const [isModalDetailOpen, setIsModalDetailOpen] = useState(false);

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

  function handleDetails(product) {
    setProductDetail(product);
    setIsModalDetailOpen(true);
  }

  function closeDetailModal() {
    setProductDetail([]);
    setIsModalDetailOpen(false);
  }

  return (
    <Container>
      {/* <ButtonLeft>
        <MdKeyboardArrowLeft size={40} />
      </ButtonLeft> */}
      {isModalDetailOpen ? (
        <Overlay>
          <Modal>
            <header>{productDetail.name}</header>
            <ButtonLeft>
              <MdKeyboardArrowLeft size={20} />
            </ButtonLeft>
            <ImageContainer>
              <img
                src={`/products/${productDetail.image}`}
                alt={productDetail.title}
              />
            </ImageContainer>
            <Description>
              {productDetail.short_description || <Skeleton />}
            </Description>

            <button type="button" onClick={closeDetailModal}>
              <GrFormClose size={20} color="#000000" />
            </button>
          </Modal>
        </Overlay>
      ) : (
        <Product>
          {products.map(product => (
            <CardItem key={product.id} onClick={() => handleDetails(product)}>
              <ImageContainer>
                <img src={`/products/${product.image}`} alt={product.title} />
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
              <Button
                type="button"
                onClick={() => handleAddProduct(product.id)}
              >
                <MdAddShoppingCart size={16} color="#000000" />
                <span>Comprar</span>
              </Button>
            </CardItem>
          ))}
        </Product>
      )}
      {/* <ButtonRight>
        <MdKeyboardArrowRight size={40} />
      </ButtonRight> */}
    </Container>
  );
}
