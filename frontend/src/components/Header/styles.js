import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
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
  background-color: var(--green);

  width: 100%;
  height: 8vh;

  position: fixed;
  top: 0;

  form {
    position: relative;
    width: ${px2vw(90, 320)};
    background: var(--white);
    border-radius: 16px;
    margin-right: ${px2vw(10, 320)};

    input,
    button {
      height: ${px2vw(10, 320)};
      border: 0;
      color: var(--black);
      font-size: ${px2vw(5, 320)};
    }

    input[type='search'] {
      outline: 0; // <-- shold probably remove this for better accessibility, adding for demo aesthetics for now.
      width: 100%;
      background: var(--white);
      padding: 0 1rem;
      border-radius: 16px;
      appearance: none; //for iOS input[type="search"] roundedness issue. border-radius alone doesn't work
      transition: all 0.3s cubic-bezier(0, 0, 0.43, 1.49);
      transition-property: width, border-radius;
      z-index: 1;
      position: relative;
    }

    button {
      display: none; // prevent being able to tab to it
      position: absolute;
      top: 0;
      right: 0;
      width: ${px2vw(20, 320)};
      font-weight: bold;
      background: #57bd84;
      border-radius: 0 16px 16px 0;
    }

    input:not(:placeholder-shown) {
      border-radius: 16px 0 0 16px;
      width: calc(100% - 4rem);
      + button {
        display: block;
      }
    }

    label {
      position: absolute;
      clip: rect(1px, 1px, 1px, 1px);
      padding: 0;
      border: 0;
      height: 1px;
      width: 1px;
      overflow: hidden;
    }

    @media (min-width: 768px) {
      width: ${px2vw(250, 768)};
      margin-right: ${px2vw(10, 768)};

      input,
      button {
        height: ${px2vw(22, 768)};
        font-size: ${px2vw(10, 768)};
      }

      button {
        width: ${px2vw(40, 768)};
      }
    }

    @media (min-width: 1024px) {
      width: ${px2vw(400)};
      margin-right: ${px2vw(10)};

      input,
      button {
        height: ${px2vw(27)};
        font-size: ${px2vw(12)};
      }

      button {
        width: ${px2vw(50)};
      }
    }
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
  }
`;

export const LeftSide = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 65%;
`;

export const RightSide = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: ${px2vw(130, 320)};
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

  :hover {
    color: inherit;
    text-decoration: inherit;
  }

  @media (min-width: 768px) {
    margin-left: ${px2vw(67, 768)};
  }

  @media (min-width: 1024px) {
    margin-left: ${px2vw(67)};
  }
`;

export const Cart = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;

  text-decoration: none;
  transition: opacity 0.2s;
  background-color: var(--green);
  border: none;

  width: ${px2vw(40, 320)};
  height: ${px2vw(20, 320)};
  margin-right: ${px2vw(10, 320)};

  &:hover {
    opacity: 0.7;
  }

  span {
    font-style: normal;
    font-weight: bold;
    font-size: ${px2vw(6, 320)};
    line-height: ${px2vw(22, 320)};
    color: var(--black);
  }

  svg {
    font-size: ${px2vw(10, 320)};
  }

  @media (min-width: 768px) {
    width: ${px2vw(45, 768)};
    height: ${px2vw(30, 768)};

    span {
      font-size: ${px2vw(14, 768)};
    }

    svg {
      font-size: ${px2vw(16, 768)};
    }
  }

  @media (min-width: 1024px) {
    width: ${px2vw(90)};
    height: ${px2vw(45)};

    span {
      font-size: ${px2vw(18)};
    }

    svg {
      font-size: ${px2vw(28)};
    }
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

  background: var(--green);
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
  background-color: var(--black);

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

  background: var(--white);
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
      border: 1px solid var(--light-gray);
      color: var(--gray);
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
  border: 1px solid var(--light-gray);
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
  border: 1px solid var(--light-gray);
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
  background-color: var(--black);

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
  color: var(--green);
  border: none;
  background-color: var(--black);

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

export const Login = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;
  border-right: 1px solid var(--black);

  &:hover {
    opacity: 0.7;
    color: inherit;
    text-decoration: inherit;
  }

  div {
    text-align: right;
    margin-right: ${px2vw(10, 320)};
    color: var(--dark-gray);
    width: ${px2vw(55, 320)};
  }

  svg {
    font-size: ${px2vw(10, 320)};
  }

  strong {
    display: block;
    color: var(--black);
    font-size: ${px2vw(5, 320)};
  }

  @media (min-width: 768px) {
    div {
      margin-right: ${px2vw(10, 768)};
      width: ${px2vw(100, 768)};
    }

    svg {
      font-size: ${px2vw(16, 768)};
    }

    strong {
      font-size: ${px2vw(9, 768)};
    }
  }

  @media (min-width: 1024px) {
    div {
      margin-right: ${px2vw(10)};
      width: ${px2vw(100, 768)};
    }

    svg {
      font-size: ${px2vw(28)};
    }

    strong {
      font-size: ${px2vw(16)};
    }
  }
`;

export const Profile = styled.div`
  display: flex;

  margin-right: 10px;

  strong {
    display: block;
    color: var(--black);
  }

  svg {
    margin-right: 20px;
  }
`;

export const LinkProfile = styled.a`
  font-size: ${px2vw(5, 320)};
  text-decoration: none;
  color: var(--dark-gray);

  :hover {
    color: inherit;
    text-decoration: inherit;
  }

  @media (min-width: 768px) {
    font-size: ${px2vw(8, 768)};
  }

  @media (min-width: 1024px) {
    font-size: ${px2vw(12)};
  }
`;
