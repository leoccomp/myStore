import styled from 'styled-components';
import px2vw from '../../utils/px2vw';

export const Section = styled.body`
  display: flex;
  flex-flow: column;
  height: 100vh;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${px2vw(20, 320)};
  padding-top: ${px2vw(15, 320)};
  padding-right: ${px2vw(25, 320)};
  padding-left: ${px2vw(25, 320)};
  max-width: 100%;
  max-height: 100vh;

  flex: 1;

  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  ::-webkit-scrollbar {
    display: none;
  }

  nav input {
    display: none;
  }

  nav input:checked ~ label span:last-child {
    display: none;
  }

  nav input:not(:checked) ~ label span:first-child {
    display: none;
    width: 100px;
  }

  nav {
    position: fixed;
    top: 120px;
    left: 20px;
    min-width: 80px;
    min-height: 80px;
    overflow: hidden;
  }

  nav ul {
    overflow: hidden;
    width: 0;
    height: 0;
    padding: 0;
    margin: 0;
    transition: width 0.5s, height 0.5s;
    list-style: none;
  }

  nav input:checked ~ ul {
    width: 400px;
    height: 90px;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${px2vw(20, 768)};
    padding-top: ${px2vw(30, 768)};
    padding-right: ${px2vw(110, 768)};
    padding-left: ${px2vw(110, 768)};
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: ${px2vw(10)};
    padding-top: ${px2vw(20)};
    padding-right: ${px2vw(180)};
    padding-left: ${px2vw(180)};
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

  background-color: ${props => props.bgColor};

  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  border-bottom: 0;

  @media (min-width: 768px) {
    width: ${px2vw(208, 768)};
    min-height: ${px2vw(285, 768)};
    margin: ${px2vw(10, 768)};
  }

  @media (min-width: 1024px) {
    width: ${px2vw(238)};
    min-height: ${px2vw(300)};
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

  color: #2c2c2c;

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

  background: #373737;
  border-radius: 5px;

  > span {
    color: #7fff00;
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

  background: #7fff00;
  color: #000000;
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
