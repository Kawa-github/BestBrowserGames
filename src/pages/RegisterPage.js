import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const RegisterPage = () => {


  return (
    <div className="container-register">
      <div className="card">
        <form action="" method="">
          <label>
            Nome:
          </label>
          <input
            type="text"
            name="nome"
            maxLength={40}
            required
          />

          <label>
            Email:
          </label>
          <input
            type="email"
            name="email"
          />

          <label>
            Senha:
          </label>
          <input
            type="password"
            name="senha"
            maxLength={15}
          />

          <label>
            Data de Nascimento:
          </label>
          <input
            type="date"
            name="dataNascimento"
          />

          <label>
            Estado:
          </label>
          <select
            name="estado"
          >
            <option value="SP">São Paulo</option>
            <option value="MG">Minas Gerais</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="ES">Espirito Santo</option>  
          </select>

          <label>
            País:
          </label>
          <select
            name="pais"
          >
            <option value="BR">Brasil</option>
            <option value="ARG">Argentina</option>
          </select>

          <input type="submit" value="Enviar" />
          <div className="card-footer">
            <p>
              Já possui uma conta?
              <Link to="/login">Entre aqui</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
