import { Overlay, Container } from "./styles";

function NewEquipment({ handleClose }) {
  return (
    <Overlay>
      <Container>
        <div>
          <h1>Cadastro de equipamento</h1>
          <span onClick={handleClose}>x</span>
        </div>
        <label>
          <input placeholder="Nome" />
          <input placeholder="Endereço da imagem" />
          <textarea placeholder="Descrição"></textarea>
          <div>
            <input type="checkbox" name="Teste" />
            <h6>Ativo</h6>
          </div>
        </label>
        <button>Cadastrar</button>
      </Container>
    </Overlay>
  );
}

export default NewEquipment;
