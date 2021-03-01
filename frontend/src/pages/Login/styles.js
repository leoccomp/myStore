import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 115px;
`;

export const Form = styled.div`
  display: grid;
  grid-template-columns: 400px 5px 500px;
  grid-template-areas: 'side1 vl side2';

  box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  .side1 {
    grid-area: side1;
    padding: 50px;

    h3 {
      margin-bottom: 10%;
    }

    label {
      font-size: 16px;
      color: #999;
    }

    input {
      height: 16px;
    }

    .email,
    .senha {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
    }

    .senha {
      margin-top: 10%;
    }
  }

  .vl {
    grid-area: vl;
    margin-top: 45px;
    border-left: 2px solid #999;
    height: 380px;
  }

  .side2 {
    grid-area: side2;
    padding: 50px;

    h3 {
      margin-bottom: 7%;
    }

    label {
      font-size: 16px;
      color: #999;
    }

    input {
      height: 16px;
    }

    .nome,
    .email {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
    }

    .email {
      margin-top: 5%;
    }

    .group-1 {
      display: flex;
      justify-content: space-between;

      .senha,
      .confirme {
        display: flex;
        flex-direction: column;
        margin-top: 5%;
        flex-wrap: wrap;

        span {
          font-size: 10px;
          margin-left: 1%;
        }
      }
    }
  }
`;

export const Links = styled(Link)`
  margin-top: 5%;
  margin-left: 62%;
  font-size: 10px;
  color: var(--black);
`;
