import styled from 'styled-components';
import px2vw from '../../utils/px2vw';

export const Container = styled.label`
  label {
    position: relative;
  }

  label input {
    font-size: 10px;
    color: #f9f9f9;
    background: transparent;

    padding: 1rem 3.2rem 1rem 1.2rem;

    border-radius: 8px;
    border: 1px solid var(--gray);

    transition: border-color 0.2s;
  }

  label input:focus {
    border-color: var(--green);
  }

  label p {
    color: #f9f9f9;
    font-size: 1.2rem;
    user-select: none;

    position: absolute;
    top: 35%;
    transform: translateY(-50%);

    margin-left: 0.4rem;
    padding: 0 0.4rem;

    background: #fff;

    transition: top 0.2s, font-size 0.2s, color 0.2s;
  }

  label input:focus + p,
  label input:not(:placeholder-shown) + p {
    top: 0;
    font-size: 1rem;
    color: var(--green);
  }

  label input:not(:focus) + p {
    color: var(--gray);
  }
`;
