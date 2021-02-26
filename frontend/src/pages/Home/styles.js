import styled from 'styled-components';
import px2vw from '../../utils/px2vw';

export const Section = styled.body`
  display: flex;
  flex-flow: column;
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Filters = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 20%;

  width: ${px2vw(238, 320)};
  min-height: ${px2vw(520, 320)};
  margin: ${px2vw(10, 320)};
  padding: ${px2vw(10, 320)};

  /* position: fixed;
  left: ${px2vw(20, 320)}; */

  background-color: var(--white);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;

  @media (min-width: 768px) {
    width: ${px2vw(238, 768)};
    min-height: ${px2vw(520, 768)};
    margin: ${px2vw(10, 768)};

    padding: ${px2vw(10, 768)};
    left: ${px2vw(20, 768)};
  }

  @media (min-width: 1024px) {
    width: ${px2vw(238)};
    /* min-height: ${px2vw(520)}; */
    margin: ${px2vw(10)};

    /* padding: ${px2vw(10)};
    left: ${px2vw(20)}; */
  }
`;

export const PriceRange = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 200px;
  height: 28vh;

  strong {
    width: 200px;
    text-align: left;
  }

  .group-input {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 13vh;
    margin-top: 10px;
  }

  .form-field {
    display: block;
    width: 100%;
    padding: 8px 16px;
    line-height: 25px;
    font-size: 14px;
    font-weight: 600;
    border-radius: 6px;
    -webkit-appearance: none;
    color: #99a3ba;
    border: 1px solid var(--green);
    background: #fff;
    transition: border 0.3s ease;

    &::placeholder {
      color: var(--black);
    }

    &:focus {
      outline: none;
      border-color: var(--green);
    }
  }

  .form-group {
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 0;
    margin-bottom: 0;
    width: 100%;

    & > span,
    .form-field {
      white-space: nowrap;
      display: block;

      &:not(:first-child):not(:last-child) {
        border-radius: 0;
      }

      &:first-child {
        border-radius: 6px 0 0 6px;
      }

      &:last-child {
        border-radius: 0 6px 6px 0;
      }

      &:not(:first-child) {
        margin-left: -1px;
      }
    }

    .form-field {
      position: relative;
      z-index: 1;
      flex: 1 1 auto;
      width: 1%;
      margin-top: 0;
      margin-bottom: 0;
    }

    & > span {
      text-align: center;
      padding: 8px 12px;
      font-size: 14px;
      font-weight: 600;
      line-height: 25px;
      color: var(--white);
      background: var(--green);
      transition: background 0.3s ease, border 0.3s ease, color 0.3s ease;
    }

    &:focus-within {
      & > span {
        color: #fff;
        background: #678efe;
        border-color: var(--green);
      }
    }
  }

  .sliderArea {
    width: 160px;
    margin-top: 45px;
  }

  .rc-slider-rail {
    height: 5px;
  }

  .rc-slider-track {
    background-color: var(--green);
    height: 5px;
  }

  .rc-slider-dot {
    background-color: var(--green);
  }

  .rc-slider-handle {
    background-color: var(--green);
  }

  .rc-slider-mark-text-active {
    color: var(--green);
  }

  .rc-slider-tooltip-inner {
    min-width: ${px2vw(70)};
    height: ${px2vw(26)};

    background: var(--medium-gray);
    color: var(--green);
    font-size: ${px2vw(15)};
    font-style: normal;
    font-weight: 700;
    line-height: ${px2vw(15)};
    letter-spacing: 0px;
    text-align: center;
  }
`;

export const CheckBox = styled.div`
  display: flex;
  align-items: center;

  width: 220px;

  label {
    float: left;
    margin: 10px 10px;
  }

  > input {
    margin: 5px 0px;
    width: auto;
  }
`;

export const Products = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${px2vw(20, 320)};
  /* padding-top: ${px2vw(15, 320)};
  padding-right: ${px2vw(25, 320)};
  padding-left: ${px2vw(25, 320)}; */
  width: 80%;

  margin-top: 8px;
  margin-bottom: 20px;

  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${px2vw(20, 768)};
    /* padding-top: ${px2vw(10, 768)};
    padding-right: ${px2vw(110, 768)};
    padding-left: ${px2vw(110, 768)}; */
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: ${px2vw(20)};
    /* padding-top: ${px2vw(10)};
    padding-right: ${px2vw(180)};
    padding-left: ${px2vw(290)}; */
  }
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: ${px2vw(238, 320)};
  min-height: ${px2vw(285, 320)};
  margin: ${px2vw(10, 320)};

  background-color: var(--white);

  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  border-bottom: 0;

  @media (min-width: 768px) {
    width: ${px2vw(208, 768)};
    min-height: ${px2vw(285, 768)};
    margin: ${px2vw(10, 768)};
  }

  @media (min-width: 1024px) {
    width: ${px2vw(238)};
    min-height: ${px2vw(285)};
    margin: ${px2vw(10)};
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: ${px2vw(120, 320)};
  height: ${px2vw(120, 320)};

  > img {
    max-width: ${px2vw(81, 320)};
    max-height: ${px2vw(108, 320)};
  }

  @media (min-width: 768px) {
    width: ${px2vw(144, 768)};
    height: ${px2vw(144, 768)};

    > img {
      max-width: ${px2vw(81, 768)};
      max-height: ${px2vw(108, 768)};
    }
  }

  @media (min-width: 1024px) {
    width: ${px2vw(160)};
    height: ${px2vw(160)};

    > img {
      max-width: ${px2vw(111)};
      max-height: ${px2vw(138)};
    }
  }
`;

export const DescAndPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: ${px2vw(190, 320)};
  height: ${px2vw(38, 320)};

  @media (min-width: 768px) {
    width: ${px2vw(190, 768)};
    height: ${px2vw(50, 768)};
  }

  @media (min-width: 1024px) {
    width: ${px2vw(190)};
    height: ${px2vw(70)};
  }
`;

export const Name = styled.span`
  width: ${px2vw(110, 320)};

  font-style: normal;
  font-weight: normal;
  font-size: ${px2vw(14, 320)};
  line-height: ${px2vw(19, 320)};
  text-align: left;

  color: var(--dark-gray);

  @media (min-width: 768px) {
    width: ${px2vw(110, 768)};
    font-size: ${px2vw(16, 768)};
    line-height: ${px2vw(19, 768)};
  }

  @media (min-width: 1024px) {
    width: ${px2vw(110)};
    font-size: ${px2vw(16)};
    line-height: ${px2vw(19)};
  }
`;

export const Price = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: ${px2vw(68, 320)};
  height: ${px2vw(26, 320)};

  background: var(--medium-gray);
  border-radius: 5px;

  > span {
    color: var(--green);
    font-size: ${px2vw(15, 320)};
    font-style: normal;
    font-weight: 700;
    line-height: ${px2vw(15, 320)};
    letter-spacing: 0px;
    text-align: left;
  }

  @media (min-width: 768px) {
    min-width: ${px2vw(68, 768)};
    height: ${px2vw(26, 768)};

    > span {
      font-size: ${px2vw(15, 768)};
      line-height: ${px2vw(15, 768)};
    }
  }

  @media (min-width: 1024px) {
    min-width: ${px2vw(68)};
    height: ${px2vw(26)};

    > span {
      font-size: ${px2vw(15)};
      line-height: ${px2vw(15)};
    }
  }
`;

export const Description = styled.span`
  width: ${px2vw(200, 320)};
  height: ${px2vw(40, 320)};

  font-size: ${px2vw(10, 320)};
  font-style: normal;
  font-weight: 400;
  line-height: ${px2vw(12, 320)};
  letter-spacing: 0;
  text-align: left;

  @media (min-width: 768px) {
    width: ${px2vw(192, 768)};
    height: ${px2vw(40, 768)};

    font-size: ${px2vw(10, 768)};
    line-height: ${px2vw(12, 768)};
  }

  @media (min-width: 1024px) {
    width: ${px2vw(192)};
    height: ${px2vw(40)};

    font-size: ${px2vw(10)};
    line-height: ${px2vw(12)};
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${px2vw(238, 320)};
  height: ${px2vw(32, 320)};

  background: var(--green);
  color: var(--black);
  border-radius: 0px 0px 8px 8px;
  border: none;

  > svg {
    margin-right: ${px2vw(15, 320)};
  }

  &:hover {
    opacity: 0.7;
  }

  @media (min-width: 768px) {
    width: ${px2vw(208, 768)};
    height: ${px2vw(32, 768)};

    > svg {
      margin-right: ${px2vw(15, 768)};
    }
  }

  @media (min-width: 1024px) {
    width: ${px2vw(238)};
    height: ${px2vw(32)};

    > svg {
      margin-right: ${px2vw(15)};
    }
  }
`;
