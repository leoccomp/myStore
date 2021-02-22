import styled from 'styled-components';
import px2vw from '../../utils/px2vw';

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--green);

  height: 34px;
  margin-top: 30px;
`;

export const Span = styled.span`
  font-size: ${px2vw(8, 320)};
  font-style: normal;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  color: var(--black);

  @media (min-width: 768px) {
    font-size: ${px2vw(12, 768)};
  }

  @media (min-width: 1024px) {
    font-size: ${px2vw(12)};
  }
`;
