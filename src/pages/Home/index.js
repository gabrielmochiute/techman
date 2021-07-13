import { useState, useEffect } from "react";

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
import { api } from "../../services/api";

function Home() {
  const history = useHistory();

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showCommentsModal, setShowCommentsModal] = useState(false);
  const [showNewCommentModal, setShowNewCommentModal] = useState(false);
  const [showNewEquipmentModal, setShowNewEquipmentModal] = useState(false);

  const [equipments, setEquipments] = useState([]);
  useEffect(() => {
    getEquipments();
  }, []);

  const getEquipments = async () => {
    try {
      const response = await api.get("/feed");

      setEquipments(response.data);
    } catch (error) {
      console.log(error);
    }
  };

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
          {equipments.map((e) => (
            <CardsProducts>
              <div>
                <img
                  src={e.image}
                  alt="Foto do produto"
                  width="300px"
                  height="300px"
                />
              </div>
              <div>
                <h1>{e.name}</h1>
                <p>{e.description}</p>
                <div>
                  <img src={Comentario} alt="Imagem de comentário" />
                  <img src={Deletar} alt="Imagem de deletar" />
                </div>
              </div>
            </CardsProducts>
          ))}
        </Feed>
      </Overlay>
    </>
  );
}

export default Home;
