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
  height: 101px;
`;

export const LinkLogo = styled.a`
  text-decoration: none;
  margin-left: ${px2vw(37, 320)};

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

  @media (min-width: 768px) {
    margin-left: ${px2vw(67, 768)};
  }

  @media (min-width: 1024px) {
    margin-left: ${px2vw(67)};
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
  width: ${px2vw(180, 320)};
  height: 100vh;
  margin-left: ${px2vw(134, 320)};

  background: #7fff00;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);

  position: absolute;
  z-index: 2;

  animation: ${animate} 0.5s;

  @media (min-width: 768px) {
    width: ${px2vw(300, 768)};
    margin-left: ${px2vw(458, 768)};
  }

  @media (min-width: 1024px) {
    width: ${px2vw(486)};
    margin-left: ${px2vw(940)};
  }
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: ${px2vw(180, 320)};
  margin-top: 36px;

  @media (min-width: 768px) {
    width: ${px2vw(300, 768)};
  }

  @media (min-width: 1024px) {
    width: ${px2vw(486)};
  }
`;

export const CartHeaderDesc = styled.strong`
  width: ${px2vw(100, 320)};

  font-size: ${px2vw(12, 320)};
  font-style: normal;
  font-weight: 700;
  line-height: ${px2vw(13, 320)};
  letter-spacing: 0em;
  text-align: left;

  @media (min-width: 768px) {
    width: ${px2vw(180, 768)};
    font-size: ${px2vw(20, 768)};
    line-height: ${px2vw(23, 768)};
  }

  @media (min-width: 1024px) {
    width: ${px2vw(190)};
    font-size: ${px2vw(27)};
    line-height: ${px2vw(33)};
  }
`;

export const ButtonClose = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${px2vw(20, 320)};
  height: ${px2vw(20, 320)};
  border-radius: 50px;
  background-color: #000000;

  svg {
    font-size: ${px2vw(10, 320)};
  }

  @media (min-width: 768px) {
    width: ${px2vw(30, 768)};
    height: ${px2vw(30, 768)};

    svg {
      font-size: ${px2vw(15, 768)};
    }
  }

  @media (min-width: 1024px) {
    width: ${px2vw(38)};
    height: ${px2vw(38)};

    svg {
      font-size: ${px2vw(20)};
    }
  }
`;

export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  height: 60%;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1014px) {
  }
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  position: relative;

  width: ${px2vw(150, 320)};
  min-height: ${px2vw(30, 320)};

  background: #ffffff;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;

  :nth-child(1) {
    margin-top: ${px2vw(7, 320)};
  }

  :nth-child(n + 2) {
    margin-top: ${px2vw(10, 320)};
  }

  > img {
    width: ${px2vw(40, 320)};
    height: ${px2vw(50, 320)};
    margin-left: ${px2vw(23, 320)};
  }

  span {
    width: ${px2vw(53, 320)};
  }

  > strong {
    width: ${px2vw(24, 320)};

    font-size: ${px2vw(6, 320)};
    font-style: normal;
    font-weight: 700;
    text-align: left;
  }

  @media (min-width: 768px) {
    width: ${px2vw(260, 768)};
    min-height: ${px2vw(55, 768)};

    > img {
      width: ${px2vw(40, 768)};
      height: ${px2vw(40, 768)};
      margin-left: ${px2vw(23, 768)};
    }

    span {
      width: ${px2vw(73, 768)};
    }

    > strong {
      width: ${px2vw(50, 768)};

      font-size: ${px2vw(12, 768)};
      font-style: normal;
      font-weight: 700;
      text-align: left;
    }

    :nth-child(1) {
      margin-top: ${px2vw(20, 768)};
    }

    :nth-child(n + 2) {
      margin-top: ${px2vw(15, 768)};
    }
  }

  @media (min-width: 1014px) {
    width: ${px2vw(379)};
    min-height: ${px2vw(95)};

    > img {
      width: ${px2vw(60)};
      height: ${px2vw(60)};
      margin-left: ${px2vw(23)};
    }

    span {
      width: ${px2vw(113)};
    }

    > strong {
      width: ${px2vw(70)};

      font-size: ${px2vw(18)};
      font-style: normal;
      font-weight: 700;
      text-align: left;
    }

    :nth-child(1) {
      margin-top: ${px2vw(36)};
    }

    :nth-child(n + 2) {
      margin-top: ${px2vw(28)};
    }
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${px2vw(20, 320)};
  height: ${px2vw(31, 320)};

  > img {
    max-width: ${px2vw(20, 320)};
    max-height: ${px2vw(31, 320)};
  }

  @media (min-width: 768px) {
    width: ${px2vw(36, 768)};
    height: ${px2vw(47, 768)};

    > img {
      max-width: ${px2vw(36, 768)};
      max-height: ${px2vw(47, 768)};
    }
  }

  @media (min-width: 1024px) {
    width: ${px2vw(46)};
    height: ${px2vw(57)};

    > img {
      max-width: ${px2vw(46)};
      max-height: ${px2vw(57)};
    }
  }
`;

export const ButtonQuantity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: ${px2vw(35, 320)};

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

  @media (min-width: 768px) {
    height: ${px2vw(35, 768)};
  }

  @media (min-width: 1024px) {
    height: ${px2vw(35)};
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
