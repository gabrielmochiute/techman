import { Overlay, Container } from "./styles";

function NewComment({ handleClose }) {
  return (
    <Overlay>
      <Container>
        <div>
          <h1>Cadastro de comentário</h1>
          <span onClick={handleClose}>x</span>
        </div>
        <label>Comentário</label>
        <input />
        <button>Cadastrar</button>
      </Container>
    </Overlay>
  );
}

export default NewComment;
