import styled from 'styled-components';
import px2vw from '../../utils/px2vw';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 4vh;

  position: fixed;
  margin-top: ${px2vw(22, 320)};

  @media (min-width: 768px) {
    margin-top: ${px2vw(39, 768)};
  }

  @media (min-width: 1024px) {
    margin-top: ${px2vw(56)};
  }
`;

export const Section = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;

  font-size: ${px2vw(5.5, 320)};
  background-color: var(--light-gray);
  width: 100%;
  height: 100%;

  @media (min-width: 768px) {
    font-size: ${px2vw(10, 768)};
  }

  @media (min-width: 1024px) {
    font-size: ${px2vw(14)};
  }
`;

export const Item = styled.a`
  cursor: pointer;
  color: var(--dark-gray);

  transition: color 0.2s;

  :hover {
    color: var(--green);
    text-decoration: inherit;
  }
`;

export const ItemSections = styled.a`
  display: flex;
  align-items: center;

  cursor: pointer;
  color: var(--dark-gray);

  transition: color 0.2s;

  :hover {
    color: var(--green);
    text-decoration: inherit;
  }

  svg {
    margin-right: ${px2vw(5, 320)};
  }
`;
