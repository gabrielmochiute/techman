import { Overlay, Container } from "./styles";

function Delete({ handleClose }) {
  return (
    <Overlay>
      <Container>
        <div>
          <h1>Exclusão de equipamento</h1>
          <span onClick={handleClose}>x</span>
        </div>
        <p>
          Atenção! Tem certeza de que deseja excluir o equipamento? Essa ação
          não poderá ser desfeita.
        </p>
        <button>Excluir</button>
      </Container>
    </Overlay>
  );
}

export default Delete;
