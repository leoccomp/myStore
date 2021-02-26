import React, { useState } from 'react';

import Slider from 'rc-slider';

import { Container, PriceRange } from './styles';

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

export default function Filters() {
  const [min, setMin] = useState(100);
  const [max, setMax] = useState(2000);
  const [values, setValues] = useState([min, max]);

  return (
    <Container>
      <PriceRange>
        <strong>Faixa de preço</strong>
        <div className="group-input">
          <div className="form-group">
            <span>De&nbsp;</span>
            <input
              className="form-field"
              type="text"
              placeholder={values[0].toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              })}
              disabled
            />
          </div>
          <div className="form-group">
            <span>Até</span>
            <input
              className="form-field"
              type="text"
              placeholder={values[1].toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              })}
              disabled
            />
          </div>
        </div>
        <Range
          min={100}
          max={2000}
          step={50}
          defaultValue={values}
          className="sliderArea"
          onChange={value => setValues(value)}
        />
      </PriceRange>
    </Container>
  );
}
