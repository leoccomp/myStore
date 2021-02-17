import styled, { keyframes } from 'styled-components';
import px2vw from '../../utils/px2vw';

const animate = keyframes`
  0% {
    transform: translateX(100px);
    opacity: 0;
  }
  50% {
    opacity: .3;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
`;

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #7fff00;

  width: 100%;
  height: ${px2vw(91, 320)};

  @media (min-width: 768px) {
    height: ${px2vw(91, 768)};
  }

  @media (min-width: 1024px) {
    height: ${px2vw(91)};
  }
`;

export const LinkLogo = styled.a`
  text-decoration: none;
  margin-left: 67px;

  > span {
    margin-left: 5px;
    color: black;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0px;
    text-align: left;
  }

  > strong {
    font-size: 30px;
    color: black;
    font-style: normal;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: 0px;
  }

  @media (max-width: 420px) {
    margin-left: 20px;
    margin-top: 20px;
  }
`;

export const Cart = styled.button`
  border: none;

  display: flex;
  justify-content: space-around;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;
  background-color: #000000;
  margin-right: 88px;
  border-radius: 8px;

  width: 90px;
  height: 45px;
  left: 1262px;
  top: 29px;

  &:hover {
    opacity: 0.7;
  }

  span {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    color: #7fff00;
  }

  @media (max-width: 420px) {
    margin-right: 20px;
  }
`;

export const CartMenu = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  top: 0;
  bottom: 0;
  width: 486px;
  height: 100%;
  margin-left: 954px;

  background: #7fff00;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);

  position: absolute;
  z-index: 2;

  animation: ${animate} 0.5s;

  @media (max-width: 420px) {
    width: 18%;
    height: 50%;
    margin-left: 30vw;
  }
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 36px;

  @media (max-width: 420px) {
    width: 100%;
    left: 0;
  }
`;

export const CartHeaderDesc = styled.strong`
  width: 180px;
  height: 56px;

  font-size: 27px;
  font-style: normal;
  font-weight: 700;
  line-height: 33px;
  letter-spacing: 0em;
  text-align: left;
`;

export const ButtonClose = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 38px;
  height: 38px;
  border-radius: 50px;
  background-color: #000000;
`;

export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  height: 70%;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  ::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 420px) {
    width: 220px;
  }
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  position: relative;

  width: 379px;
  min-height: 95px;
  margin-top: 36px;

  background: #ffffff;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;

  > img {
    height: 57px;
    width: 46px;
    margin-left: 23px;
    border-radius: 0px;
  }

  > span {
    height: 33px;
    width: 113px;
    left: 90px;
    top: 37px;
  }

  > strong {
    height: 17px;
    width: 62px;

    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 0px;
    text-align: left;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 46px;
  height: 57px;

  > img {
    max-width: 46px;
    max-height: 57px;
  }
`;

export const TotalBuy = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 0px;
  text-align: left;
`;

export const ButtonQuantity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 35px;

  > div {
    display: flex;

    > small {
      font-size: 10px;
    }

    .number-btn-left {
      cursor: pointer;
      width: 20px;
      height: 19px;
      border-radius: 4px 0 0 4px;
      background: none;
      border: 1px solid #ddd;
      border-right: 0;
    }

    .number-btn-right {
      cursor: pointer;
      width: 20px;
      height: 19px;
      border-radius: 0 4px 4px 0;
      background: none;
      border: 1px solid #ddd;
      border-left: 0;
    }

    .number-value {
      width: 30px;
      height: 19px;
      border: 1px solid #ddd;
      color: #666;
      text-align: center;
      font-size: 12px;
    }
  }
`;

export const ButtonRemove = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  right: 0;

  cursor: pointer;

  width: 18px;
  height: 18px;
  border-radius: 50px;
  background-color: #000000;
`;

export const ButtonFinish = styled.button`
  width: 100%;
  height: 97px;
  color: #7fff00;
  border: none;
  background-color: #000000;

  &:hover {
    opacity: 0.7;
  }

  > span {
    width: 249px;
    height: 15px;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: 0px;
    text-align: left;
  }
`;
