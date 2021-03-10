import React, { useContext, useState } from 'react';

import Slider from 'rc-slider';

import { GiSmartphone, GiSpeaker, GiHeadphones } from 'react-icons/gi';
import { CgAppleWatch } from 'react-icons/cg';
import { MdLaptopWindows } from 'react-icons/md';
import { RiFilterOffLine } from 'react-icons/ri';

import { Container, PriceRange } from './styles';
import { UserContext } from '../../context/user';

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

export default function Filters() {
  const { setSection } = useContext(UserContext);

  async function handleFilter(type) {
    setSection(type);
  }

  return (
    <Container>
      <input type="checkbox" id="menu" />
      <label htmlFor="menu" className="icon">
        <div className="menu" />
      </label>
      <nav>
        <ul>
          <li onClick={() => handleFilter('')}>
            <i className="material-icons">
              <RiFilterOffLine size={25} />
            </i>
            Sem filtro
          </li>
          <li onClick={() => handleFilter('Smartphone')}>
            <i className="material-icons">
              <GiSmartphone size={25} />
            </i>
            Smartphones
          </li>
          <li onClick={() => handleFilter('Smartwatch')}>
            <i className="material-icons">
              <CgAppleWatch size={25} />
            </i>
            Smartwatchs
          </li>
          <li onClick={() => handleFilter('Audio')}>
            <i className="material-icons">
              <GiSpeaker size={25} />
            </i>
            Audio
          </li>
          <li onClick={() => handleFilter('Notebook')}>
            <i className="material-icons">
              <MdLaptopWindows size={25} />
            </i>
            Notebooks
          </li>
          <li onClick={() => handleFilter('Headphone')}>
            <i className="material-icons">
              <GiHeadphones size={25} />
            </i>
            Headphones
          </li>
        </ul>
      </nav>

      {/* const [min, setMin] = useState(100);
      const [max, setMax] = useState(2000);
      const [values, setValues] = useState([min, max]); */}
      {/* <PriceRange>
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
      </PriceRange> */}
    </Container>
  );
}
