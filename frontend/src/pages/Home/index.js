import React from 'react';

import 'rc-slider/assets/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Filters from '../../components/Filters';
import Products from '../../components/Products';

import { Container, Main } from './styles';

export default function Home() {
  return (
    <Container>
      <Main>
        <Filters />
        <Products />
      </Main>
    </Container>
  );
}
