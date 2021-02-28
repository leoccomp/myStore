import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 4%;
`;

export const Section = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;

  font-size: 14px;
  background-color: var(--light-gray);
  width: 100%;
  height: 100%;
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
    margin-right: 5px;
  }
`;
