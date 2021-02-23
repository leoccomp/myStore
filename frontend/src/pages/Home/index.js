import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import Skeleton from 'react-loading-skeleton';
import Slider from 'rc-slider';
import api from '../../services/api';
import { formatPrice } from '../../utils/format';
import * as CartActions from '../../store/modules/cart/actions';

import 'rc-slider/assets/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import {
  Section,
  Container,
  Filters,
  CheckBox,
  PriceRange,
  Product,
  DescAndPrice,
  Name,
  Description,
  Price,
  Button,
  ImageContainer
} from './styles';

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

export default function Home() {
  const [products, setProducts] = useState([]);
  const [min, setMin] = useState(100);
  const [max, setMax] = useState(2000);
  const step = 10;
  const values = [100, 1000];

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

  function handleChangeSlider() {}

  return (
    <Section>
      <Header />
      <Container>
        <Filters>
          <input type="text" placeholder="Categoria produto..." />
          <input type="text" placeholder="Código produto..." />
          <CheckBox>
            <input type="checkbox" id="scales" name="scales" />
            <label htmlFor="scales">Em Estoque</label>
          </CheckBox>
          <PriceRange>
            <strong>Faixa de preço</strong>
            <Range
              marks={{
                100: `R$ ${min}`,
                2000: `R$ ${max}`
              }}
              min={min}
              max={max}
              step={50}
              defaultValue={[100, 1000]}
              tipFormatter={value => `R$${value}`}
              tipProps={{
                placement: 'top',
                visible: true
              }}
              className="sliderArea"
            />
          </PriceRange>
        </Filters>
        {products.map(product => (
          <Product key={product.id}>
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
