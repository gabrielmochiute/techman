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
  height: 500px;
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
    color: var(--primaryDark);

    > h1 {
      font-size: 24px;
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
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    gap: 15px;

    width: 100%;

    > input {
      width: 100%;
      border: none;
      border-bottom: solid 2px var(--primaryDark);
      font-size: 20px;
      padding: 5px 0px;
      color: var(--primaryDark);
    }

    > textarea {
      width: 100%;
      border: none;
      font-size: 20px;
      padding-bottom: 50px;
      border-bottom: solid 2px var(--primaryDark);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }

    > div {
      display: flex;
      gap: 5px;
      color: var(--darkGray);

      font-size: large;
      font-weight: 50;
      font-style: italic;
    }
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
