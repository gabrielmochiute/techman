import { useState } from "react";

import { Overlay, NavBar, Feed, CardsProducts } from "./styles";

import Logo from "../../assets/techman.png";
import Sair from "../../assets/logout_sair.png";
import Torno from "../../assets/Torno_Mecanico.png";

import Deletar from "../../assets/deletar.png";
import Comentario from "../../assets/comentario.png";

import Delete from "../../components/Delete";
import Comments from "../../components/Comments";
import NewComment from "../../components/NewComment";
import NewEquipment from "../../components/NewEquipment";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showCommentsModal, setShowCommentsModal] = useState(false);
  const [showNewCommentModal, setShowNewCommentModal] = useState(false);
  const [showNewEquipmentModal, setShowNewEquipmentModal] = useState(false);

  return (
    <>
      <Overlay>
        {showCommentsModal && (
          <Comments
            handleClose={() => setShowCommentsModal(false)}
            handleNewComment={() => {
              setShowCommentsModal(false);
              setShowNewCommentModal(true);
            }}
          />
        )}
        {showDeleteModal && (
          <Delete handleClose={() => setShowDeleteModal(false)} />
        )}
        {showNewCommentModal && (
          <NewComment handleClose={() => setShowNewCommentModal(false)} />
        )}
        {showNewEquipmentModal && (
          <NewEquipment handleClose={() => setShowNewEquipmentModal(false)} />
        )}

        <NavBar>
          <img src={Logo} alt="logo" />

          <div>
            <h1 onClick={() => setShowNewEquipmentModal(true)}>
              Novo equipamento
            </h1>
            <img
              src={Sair}
              alt="Botão sair"
              onClick={() => history.push("/")}
            />
          </div>
        </NavBar>
        <Feed>
          <CardsProducts>
            <img src={Torno} alt="Foto do produto" />
            <div>
              <h1>Equipamento de automação industrial</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                cursus suscipit arcu, et suscipit elit. Quisque erat lacus,
                maximus et interdum quis, hendrerit in turpis. Proin ac velit a
                felis ultrices tristique et quis diam. Donec sed orci lorem. Sed
                fringilla quam a sem sollicitudin efficitur. Nulla non metus ac
                orci interdum lacinia sit amet sit amet nisl. Integer
                scelerisque, tortor ut vulputate condimentum, mauris risus
                ultricies libero, euismod commodo sem eros et nibh. Etiam sit
                amet aliquet tellus.
              </p>
              <div>
                <img
                  src={Comentario}
                  alt="Imagem de comentário"
                  onClick={() => setShowCommentsModal(true)}
                />
                <img
                  src={Deletar}
                  alt="Imagem de deletar"
                  onClick={() => setShowDeleteModal(true)}
                />
              </div>
            </div>
          </CardsProducts>
        </Feed>
      </Overlay>
    </>
  );
}

export default Home;
