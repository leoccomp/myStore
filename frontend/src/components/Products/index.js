import React, { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  MdAddShoppingCart,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight
} from 'react-icons/md';
import { GrFormClose } from 'react-icons/gr';
import Skeleton from 'react-loading-skeleton';
import { formatPrice } from '../../utils/format';

import * as CartActions from '../../store/modules/cart/actions';

import api from '../../services/api';

import {
  Container,
  Overlay,
  Modal,
  ImageDetail,
  DescriptionDetail,
  ButtonLeft,
  MainArea,
  Product,
  ButtonRight,
  CardItem,
  DetailButton,
  DescAndPrice,
  Name,
  Description,
  Price,
  Button,
  ImageContainer
} from './styles';
import { UserContext } from '../../context/user';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [productDetail, setProductDetail] = useState([]);
  const [productImages, setProductImages] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);
  const [isModalDetailOpen, setIsModalDetailOpen] = useState(false);

  const { section } = useContext(UserContext);

  const dispatch = useDispatch();

  async function loadProducts(filter) {
    const response = await api.get('products');

    const data = response.data.products.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price)
    }));

    if (filter !== '') {
      const dataFiltered = data.filter(item => item.category === filter);
      setProducts(dataFiltered);
    } else {
      setProducts(data);
    }
  }

  useEffect(() => {
    loadProducts('');
  }, []);

  useEffect(() => {
    loadProducts(section);
  }, [section]);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  async function handleDetails(product) {
    const response = await api.get(`images/${product.id}`);

    setProductImages([
      response.data[0].image_1,
      response.data[0].image_2,
      response.data[0].image_3
    ]);

    setProductDetail(product);
    setIsModalDetailOpen(true);
  }

  function closeDetailModal() {
    setProductDetail([]);
    setIsModalDetailOpen(false);
  }

  function handleImageRight() {
    if (imageIndex !== 2) {
      setImageIndex(imageIndex + 1);
    }
  }

  function handleImageLeft() {
    if (imageIndex !== 0) {
      setImageIndex(imageIndex - 1);
    }
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
            <span>{productDetail.short_description || <Skeleton />}</span>
            <a href={productDetail.manufacturer_link} target="_blanck">
              {productDetail.manufacturer}
            </a>
            <ImageDetail>
              <ButtonLeft onClick={handleImageLeft}>
                <MdKeyboardArrowLeft size={40} />
              </ButtonLeft>
              <img
                src={`${productImages[imageIndex]}`}
                alt={productDetail.title}
              />
              <ButtonRight onClick={handleImageRight}>
                <MdKeyboardArrowRight size={40} />
              </ButtonRight>
            </ImageDetail>
            <DescriptionDetail>
              {productDetail.long_description || <Skeleton />}
            </DescriptionDetail>

            <button type="button" onClick={closeDetailModal}>
              <GrFormClose size={20} color="#000000" />
            </button>
          </Modal>
        </Overlay>
      ) : (
        <MainArea>
          <span>Filtro: {section === '' ? 'Sem filtro' : section}</span>
          <Product>
            {products.map(product => (
              <CardItem key={product.id}>
                <ImageContainer>
                  <img src={`/products/${product.image}`} alt={product.title} />
                </ImageContainer>
                <DetailButton onClick={() => handleDetails(product)}>
                  <span>detalhes</span>
                </DetailButton>
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
        </MainArea>
      )}
      {/* <ButtonRight>
        <MdKeyboardArrowRight size={40} />
      </ButtonRight> */}
    </Container>
  );
}
