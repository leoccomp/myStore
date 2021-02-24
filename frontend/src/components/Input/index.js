import React from 'react';

import { Container } from './styles';

export default function Input({ text }) {
  return (
    <Container>
      <label>
        <input type="text" placeholder="" />
        <p>{text}</p>
      </label>
    </Container>
  );
}
