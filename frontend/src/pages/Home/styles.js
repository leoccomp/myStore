import styled from 'styled-components';
import px2vw from '../../utils/px2vw';

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  height: 100vh;

  background-color: #f8f8ff;
`;

export const Main = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 80%;
`;

export const CheckBox = styled.div`
  display: flex;
  align-items: center;

  width: 220px;

  label {
    float: left;
    margin: 10px 10px;
  }

  > input {
    margin: 5px 0px;
    width: auto;
  }
`;
