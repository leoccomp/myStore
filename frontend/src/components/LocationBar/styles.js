import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 4%;
`;

export const Section = styled.nav`
  display: flex;
  align-items: center;

  background-color: #f8f8ff;
  width: 100%;
`;

export const ItemSections = styled.div`
  display: flex;
  align-items: center;

  color: var(--dark-gray);
  margin-left: 60px;
  font-size: 12px;

  svg {
    margin: 5px;
  }
`;

export const Item = styled.a`
  cursor: pointer;
  color: var(--dark-gray);
  font-size: 12px;

  transition: color 0.2s;

  :hover {
    color: var(--green);
    text-decoration: inherit;
  }
`;
