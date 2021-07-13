import styled from "styled-components";

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;

  position: absolute;
  z-index: 19;
  background-color: #eeedeb90;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 800px;
  height: 400px;
  background-color: var(--white);

  border: solid 1px var(--darkGray);
  padding: 15px;

  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  flex-direction: column;

  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--primary);

    > h1 {
      font-size: 20px;
      font-weight: 500;
    }
    span {
      font-size: 24px;
      transition: 0.3s;
      cursor: pointer;
      :hover {
        color: var(--primaryLight);
      }
    }
  }
  > p {
    font-size: 20px;
  }

  > label {
    color: var(--darkGray);
    font-style: italic;
  }

  > input {
    border: none;
    border-bottom: solid 2px var(--primaryDark);
    font-size: 28px;
    padding: 5px 0px;
    color: var(--primaryDark);
  }

  > button {
    background-color: var(--primaryDark);
    /* padding: 25px 10px; */
    width: 150px;
    height: 50px;
    border: none;
    outline: none;
    border-radius: 15px;
    color: var(--white);
    font-size: large;
    transition: 0.5s;
    cursor: pointer;
    :hover {
      background-color: var(--primary);
    }
  }
`;
