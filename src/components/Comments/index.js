import { Comment, CommentsContainer, Container, Overlay } from "./styles";

function Comments({ handleClose, handleNewComment }) {
  return (
    <Overlay>
      <Container>
        <div>
          <h1>Comentários</h1>
          <span onClick={handleClose}>x</span>
        </div>
        <CommentsContainer>
          <Comment>
            <h1>Administrador - 20/10/2011</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              interdum facilisis molestie. Praesent lacus augue, vulputate vitae
              lacus quis, volutpat venenatis lacus. Nulla placerat tincidunt
              erat, et dignissim quam commodo a. In ac augue sit amet sem
              scelerisque maximus. Ut efficitur auctor neque. Phasellus at
              mattis magna, eu hendrerit massa.
            </p>
          </Comment>

          <Comment>
            <h1>Administrador - 20/10/2011</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              interdum facilisis molestie.
            </p>
          </Comment>
          <Comment>
            <h1>Administrador - 20/10/2011</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              interdum facilisis molestie. Praesent lacus augue, vulputate vitae
              lacus quis, volutpat venenatis lacus.
            </p>
          </Comment>
          <Comment>
            <h1>Administrador - 20/10/2011</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              interdum facilisis molestie.
            </p>
          </Comment>
          <Comment>
            <h1>Administrador - 20/10/2011</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              interdum facilisis molestie. Praesent lacus augue, vulputate vitae
              lacus quis, volutpat venenatis lacus.
            </p>
          </Comment>
          <Comment>
            <h1>Administrador - 20/10/2011</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              interdum facilisis molestie.
            </p>
          </Comment>
          <Comment>
            <h1>Administrador - 20/10/2011</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              interdum facilisis molestie. Praesent lacus augue, vulputate vitae
              lacus quis, volutpat venenatis lacus.
            </p>
          </Comment>
        </CommentsContainer>
        <button onClick={handleNewComment}>Adicionar comentário</button>
      </Container>
    </Overlay>
  );
}

export default Comments;
