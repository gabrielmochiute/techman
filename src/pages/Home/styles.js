import styled from "styled-components";

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const NavBar = styled.nav`
  width: 100vw;
  height: 100px;
  background-color: var(--primaryLight);

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: var(--primaryDark);

  padding: 0px 15px;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 25px;

    position: relative;

    > h1 {
      transition: 0.5s;
      cursor: pointer;
      :hover {
        color: var(--primary);
      }
    }
  }
`;

export const Feed = styled.section`
  width: 100vw;
  min-height: 500px;
  overflow-x: hidden;

  padding: 0px 2%;
`;

export const CardsProducts = styled.div`
  width: 100%;
  /* background-color: var(--primary); */
  border-bottom: dashed 2px var(--primary);

  display: flex;
  gap: 15px;

  padding: 25px 0px;

  > img {
    border: solid 1px var(--primary);
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 15px;
    font-style: italic;
    color: #5e5e5e;
    position: relative;

    > h1 {
      font-weight: bolder;
    }

    > p {
      width: 80%;
      font-size: 18px;
    }

    > div {
      position: absolute;
      bottom: 0px;
      left: 0px;
      > img {
        margin-right: 15px;
      }
    }
  }
`;
