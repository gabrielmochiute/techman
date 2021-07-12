import { Overlay, Container } from "./styles";

function Delete() {
  return (
    <Overlay>
      <Container>
        <div>
          <h1>Exclusão de equipamento</h1>
          <span>X</span>
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
