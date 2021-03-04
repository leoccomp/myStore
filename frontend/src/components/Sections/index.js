import React, { useState } from 'react';

import { FiArrowRight, FiArrowDown } from 'react-icons/fi';

import { Container, Section, Item, ItemSections } from './styles';

export default function Sections() {
  const [allSections, setAllSections] = useState(false);

  function expandAllSelections() {
    setAllSections(!allSections);
  }

  return (
    <Container>
      <Section>
        <ItemSections nohref onClick={expandAllSelections}>
          {allSections ? <FiArrowDown /> : <FiArrowRight />}
          Todos os departamentos
        </ItemSections>
        <Item>Notebooks</Item>
        <Item>Smartphones</Item>
        <Item>Smartwatchs</Item>
        <Item>Audio</Item>
        <Item>Tablets</Item>
        <Item>Headphones</Item>
      </Section>
    </Container>
  );
}
