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

  form {
    left: 50%;
    transform: translate(-5%, -5%);
    transition: all 1s;
    width: 50px;
    height: 50px;
    box-sizing: border-box;
    border-radius: 25px;
    padding: ${px2vw(5, 320)};

    @media (min-width: 768px) {
      padding: ${px2vw(5, 768)};
    }

    @media (min-width: 1024px) {
      padding: ${px2vw(5)};
    }
  }

  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 42.5px;
    line-height: 30px;
    outline: 0;
    border: 0;
    display: none;
    font-size: 1em;
    border-radius: 20px;
    padding: 0 20px;
  }

  .fa {
    box-sizing: border-box;
    padding: 10px;
    width: ${px2vw(30, 320)};
    height: ${px2vw(30, 320)};
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 50%;
    background-color: #000000;
    color: #7fff00;
    text-align: center;
    font-size: 1.2em;
    transition: all 1s;

    @media (min-width: 768px) {
      width: ${px2vw(42.5, 768)};
      height: ${px2vw(42.5, 768)};
    }

    @media (min-width: 1024px) {
      width: ${px2vw(42.5)};
      height: ${px2vw(42.5)};
    }
  }

  .fa-search {
    font-size: ${px2vw(12, 320)};

    @media (min-width: 768px) {
      font-size: ${px2vw(20, 768)};
    }

    @media (min-width: 1024px) {
      font-size: ${px2vw(22)};
    }
  }

  form:hover {
    width: ${px2vw(100, 320)};
    cursor: pointer;

    @media (min-width: 768px) {
      width: ${px2vw(280, 768)};
    }

    @media (min-width: 1024px) {
      width: ${px2vw(400)};
    }
  }

  form:hover input {
    display: block;
  }

  form:hover .fa {
    background: #7fff00;
    color: black;
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
  }
`;

export const LinkLogo = styled.a`
  text-decoration: none;
  margin-left: ${px2vw(10, 320)};

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

export const Search = styled.input`
  float: right;
  padding: 6px;
  border: none;
  margin-top: 8px;
  margin-right: 16px;
  font-size: 17px;
`;

export const Cart = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;
  background-color: #000000;
  margin-right: ${px2vw(10, 320)};
  border-radius: 8px;
  border: none;

  width: ${px2vw(60, 320)};
  height: ${px2vw(30, 320)};

  &:hover {
    opacity: 0.7;
  }

  span {
    font-style: normal;
    font-weight: bold;
    font-size: ${px2vw(10, 320)};
    line-height: 22px;
    color: #7fff00;

    @media (min-width: 768px) {
      font-size: ${px2vw(18, 768)};
    }

    @media (min-width: 1024px) {
      font-size: ${px2vw(18)};
    }
  }

  svg {
    font-size: ${px2vw(10, 320)};

    @media (min-width: 768px) {
      font-size: ${px2vw(18, 768)};
    }

    @media (min-width: 1024px) {
      font-size: ${px2vw(18)};
    }
  }

  @media (min-width: 768px) {
    margin-right: ${px2vw(88, 768)};

    width: ${px2vw(90, 768)};
    height: ${px2vw(45, 768)};
  }

  @media (min-width: 1024px) {
    margin-right: ${px2vw(88)};

    width: ${px2vw(90)};
    height: ${px2vw(45)};
  }
`;

export const CartMenu = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  top: 0;
  width: ${px2vw(180, 320)};
  height: calc(100vh - 34px);
  margin-left: ${px2vw(140, 320)};

  background: #7fff00;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);

  position: absolute;
  z-index: 2;

  animation: ${animate} 0.5s;

  @media (min-width: 768px) {
    width: ${px2vw(300, 768)};
    margin-left: ${px2vw(468, 768)};
  }

  @media (min-width: 1024px) {
    width: ${px2vw(486)};
    margin-left: ${px2vw(953)};
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
  height: ${px2vw(15, 320)};

  > small {
    font-size: ${px2vw(4, 320)};
  }

  > div {
    display: flex;

    .number-value {
      width: ${px2vw(10, 320)};
      height: ${px2vw(9, 320)};
      border: 1px solid #ddd;
      color: #666;
      text-align: center;
      font-size: ${px2vw(4, 320)};

      @media (min-width: 768px) {
        width: ${px2vw(20, 768)};
        height: ${px2vw(19, 768)};
        font-size: ${px2vw(8, 768)};
      }

      @media (min-width: 1024px) {
        width: ${px2vw(30)};
        height: ${px2vw(29)};
        font-size: ${px2vw(11)};
      }
    }
  }

  @media (min-width: 768px) {
    height: ${px2vw(30, 768)};

    > small {
      font-size: ${px2vw(8, 768)};
    }
  }

  @media (min-width: 1024px) {
    height: ${px2vw(45)};

    > small {
      font-size: ${px2vw(11)};
    }
  }
`;

export const ButtonDecrement = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${px2vw(10, 320)};
  height: ${px2vw(9, 320)};
  font-size: ${px2vw(6, 320)};
  border-radius: 4px 0 0 4px;
  background: none;
  border: 1px solid #ddd;
  border-right: 0;

  @media (min-width: 768px) {
    width: ${px2vw(20, 768)};
    height: ${px2vw(19, 768)};
    font-size: ${px2vw(8, 768)};
  }

  @media (min-width: 1024px) {
    width: ${px2vw(30)};
    height: ${px2vw(29)};
    font-size: ${px2vw(18)};
  }
`;

export const ButtonIncrement = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${px2vw(10, 320)};
  height: ${px2vw(9, 320)};
  font-size: ${px2vw(6, 320)};
  border-radius: 0 4px 4px 0;
  background: none;
  border: 1px solid #ddd;
  border-left: 0;

  @media (min-width: 768px) {
    width: ${px2vw(20, 768)};
    height: ${px2vw(19, 768)};
    font-size: ${px2vw(8, 768)};
  }

  @media (min-width: 1024px) {
    width: ${px2vw(30)};
    height: ${px2vw(29)};
    font-size: ${px2vw(18)};
  }
`;

export const TotalBuy = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  font-size: ${px2vw(15, 320)};
  font-style: normal;
  font-weight: 700;
  line-height: ${px2vw(15, 320)};
  letter-spacing: 0px;
  text-align: left;

  @media (min-width: 768px) {
    font-size: ${px2vw(20, 768)};
    line-height: ${px2vw(15, 768)};
  }

  @media (min-width: 1024px) {
    font-size: ${px2vw(28)};
    line-height: ${px2vw(15)};
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

  width: ${px2vw(8, 320)};
  height: ${px2vw(8, 320)};
  border-radius: 50px;
  background-color: #000000;

  @media (min-width: 768px) {
    width: ${px2vw(15, 768)};
    height: ${px2vw(15, 768)};
  }

  @media (min-width: 1024px) {
    width: ${px2vw(23)};
    height: ${px2vw(23)};
  }
`;

export const ButtonFinish = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 12vh;
  color: #7fff00;
  border: none;
  background-color: #000000;

  &:hover {
    opacity: 0.7;
  }

  > span {
    font-size: ${px2vw(12, 320)};
    font-style: normal;
    font-weight: 700;
    line-height: ${px2vw(15, 320)};
    letter-spacing: 0px;
    text-align: left;

    @media (min-width: 768px) {
      font-size: ${px2vw(20, 768)};
      line-height: ${px2vw(15, 768)};
    }

    @media (min-width: 1024px) {
      font-size: ${px2vw(28)};
      line-height: ${px2vw(15)};
    }
  }
`;
