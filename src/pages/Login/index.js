import { Overlay, Container, Buttons } from "./styles";
import { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { api } from "../../services/api";

import Logo from "../../assets/techman.png";

function Login() {
  const inputRef = useRef();

  const history = useHistory();

  const [password, setPassword] = useState("");

  const handleInput = (e) => {
    // alert(e.target.value);

    if (e.target.value != "c") {
      if (password.length < 6) {
        setPassword(password + e.target.value);
      }
    } else setPassword("");
  };
  console.log(password);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      inputRef.current.style.borderBottom = "solid 2px red";
      setPassword("");
      // inputRef.current.style.border-radius = "25px";
      return;
    }
    try {
      const response = await api.post("/login", { password });

      console.log(response);

      history.push("/home");
    } catch (error) {
      console.error(error);
      alert("Senha inválida");
    }
  };

  return (
    <Overlay>
      <img src={Logo} alt="Logo" />
      <Container onSubmit={handleSubmit}>
        <input
          type="password"
          disabled
          value={password}
          required
          ref={inputRef}
        />
        <Buttons>
          <div>
            <button type="button" value="1" onClick={handleInput}>
              1
            </button>
            <button type="button" value="2" onClick={handleInput}>
              2
            </button>
            <button type="button" value="3" onClick={handleInput}>
              3
            </button>
          </div>
          <div>
            <button type="button" value="4" onClick={handleInput}>
              4
            </button>
            <button type="button" value="5" onClick={handleInput}>
              5
            </button>
            <button type="button" value="6" onClick={handleInput}>
              6
            </button>
          </div>
          <div>
            <button type="button" value="7" onClick={handleInput}>
              7
            </button>
            <button type="button" value="8" onClick={handleInput}>
              8
            </button>
            <button type="button" value="9" onClick={handleInput}>
              9
            </button>
          </div>
          <div>
            <button type="button" value="c" onClick={handleInput}>
              C
            </button>
            <button type="button" value="0" onClick={handleInput}>
              0
            </button>
            <button type="submit" value="e">
              e
            </button>
          </div>
        </Buttons>
      </Container>
    </Overlay>
  );
}

export default Login;
