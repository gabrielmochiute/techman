import styled from "styled-components";

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--primaryLight);

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  gap: 15px;
  padding-top: 25px;

  > img {
    width: 20vw;
    height: 10vh;
  }
`;

export const Container = styled.form`
  width: 30vw;
  height: 65vh;

  background-color: var(--white);

  box-shadow: 0px 2px 5px #00000030;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  /* padding-bottom: 50px; */

  gap: 5px;
  > input {
    border: none;
    outline: none;
    background-color: none;
    background: none;

    border-bottom: solid 2px var(--primary);
    color: var(--primary);

    transition: 0.6s;

    width: 60%;
    text-align: center;
    padding: 5px;
    font-size: 24px;
  }
`;

export const Buttons = styled.div`
  width: 60%;
  height: 70%;

  /* background-color: var(--primaryDark); */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 25%;
    width: 100%;

    > input {
    }

    > button {
      width: 28%;
      height: 85%;
      border-radius: 100%;

      border: solid 0.1vw var(--primary);
      background: none;

      color: var(--primary);
      font-size: 2vw;

      transition: background-color 0.3s, color 0.3s;
      cursor: pointer;

      font-weight: 500;

      text-transform: uppercase;

      :hover {
        background-color: var(--primary);
        color: var(--white);
      }

      :active {
        background-color: var(--white);
      }
    }
  }
`;
