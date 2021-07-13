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
  height: 600px;
  background-color: var(--white);
  border: solid 1px var(--darkGray);

  padding: 15px;

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--primaryDark);
    > h1 {
      font-weight: 500;
      font-size: x-large;
    }
    span {
      font-size: x-large;
      transition: 0.3s;
      cursor: pointer;
      :hover {
        color: var(--primaryLight);
      }
    }
  }

  > button {
    background-color: var(--primaryDark);
    padding: 0px 10px;
    width: fit-content;
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

export const CommentsContainer = styled.div`
  height: 70%;
  width: 100%;
  /* background-color: #00000020; */

  overflow-y: scroll;

  display: flex;
  align-items: center;
  justify-content: baseline;
  flex-direction: column;
  gap: 15px;
  /* flex-wrap: wrap; */
`;

export const Comment = styled.div`
  width: 100%;
  min-height: 150px;
  overflow: hidden;
  /* background-color: aquamarine; */
  border-bottom: dashed 2px var(--primaryDark);
  color: #5e5e5e;

  > h1 {
    font-size: 18px;
    margin-bottom: 5px;
  }
  > p {
    margin-bottom: 15px;
  }
`;
