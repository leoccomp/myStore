import React, { useState } from 'react';

import { FiArrowRight, FiArrowDown } from 'react-icons/fi';

import { Container, Section, Item, ItemSections } from './styles';

export default function LocationBar() {
  const [allSections, setAllSections] = useState(false);

  function expandAllSelections() {
    setAllSections(!allSections);
  }

  return (
    <Container>
      <Section>
        <ItemSections nohref onClick={expandAllSelections}>
          Home
          <FiArrowRight />
        </ItemSections>
        <Item>Destaques</Item>
      </Section>
    </Container>
  );
}
