import styled from 'styled-components';
import px2vw from '../../utils/px2vw';

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 16%;
  height: 95%;

  margin: ${px2vw(5, 320)};

  background-color: var(--white);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  @media (min-width: 768px) {
    margin: ${px2vw(7, 768)};
  }

  @media (min-width: 1024px) {
    margin: ${px2vw(10)};
  }
`;

export const PriceRange = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 200px;
  height: 28vh;

  margin-top: 10px;

  strong {
    width: ${px2vw(45, 320)};
    text-align: left;
  }

  @media (min-width: 768px) {
    margin: ${px2vw(7, 768)};

    strong {
      width: ${px2vw(100, 768)};
    }
  }

  @media (min-width: 1024px) {
    margin: ${px2vw(10)};

    strong {
      width: ${px2vw(200)};
    }
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
