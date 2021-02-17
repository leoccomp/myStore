import styled from 'styled-components';
import px2vw from '../../utils/px2vw';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${px2vw(32)};
  max-width: 100%;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }

  /* position: absolute;
  width: 938px;
  height: 601px;
  left: 247px;
  top: 217px;

  @media (max-width: 420px) {
    width: 100%;
    height: 100%;
    left: 20vw;
    top: 217px;
  } */
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: ${px2vw(218, 320)};
  min-height: ${px2vw(285, 320)};
  padding: ${px2vw(20)};
  margin: ${px2vw(20)};
  height: 100%;

  background-color: ${props => props.bgColor};

  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  border-bottom: 0;

  @media (min-width: 768px) {
    width: ${px2vw(218, 768)};
    min-height: ${px2vw(285, 768)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: ${px2vw(800)};
    min-height: ${px2vw(300)};
    height: 100%;
  }
`;

// export const ProductList = styled.ul`
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   grid-gap: 20px;
//   list-style: none;

//   @media (max-width: 400px) {
//     display: flex;
//     flex-direction: column;
//   }
// `;

// export const Product = styled.li`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;

//   width: 218px;
//   height: 285px;

//   background-color: #ffffff;
//   box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
//   border-radius: 8px;
//   border-bottom: 0;

//   @media (max-width: 400px) {
//     margin-bottom: 20px;
//   }
// `;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 111px;
  height: 138px;

  > img {
    max-width: 111px;
    max-height: 138px;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 32px;

  background: #ffff00;
  color: #000000;
  border-radius: 0px 0px 8px 8px;
  border: none;

  > svg {
    margin-right: 15px;
  }

  &:hover {
    opacity: 0.7;
  }
`;

export const DescAndPrice = styled.div`
  display: flex;
  align-items: center;
`;

export const Name = styled.span`
  width: 118px;
  height: 38px;

  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;

  color: #2c2c2c;
`;

export const Price = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 78px;
  height: 26px;

  background: #373737;
  border-radius: 5px;

  > span {
    color: #ffff00;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: 0px;
    text-align: left;
  }
`;

export const Description = styled.span`
  width: 192px;
  height: 25px;

  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: 12px;
  letter-spacing: 0px;
  text-align: left;
`;
