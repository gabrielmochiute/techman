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
    }
  }
`;
