import HeaderHome from "../components/HeaderHome";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import authServices from "../services/authServices";
import Swal from "sweetalert2";

const EditUserPage = () => {
  const navigate = useNavigate();
  const { userId } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthDate: "",
    state: "",
    country: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isEmptyField = Object.values(formData).some(
      (value) => value.trim() === ""
    );

    if (isEmptyField) {
      Swal.fire({
        icon: "warning",
        title: "Atenção!",
        text: "Preencha todos os campos!",
      });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Erro!",
        text: "As senhas informadas não coincidem.",
      });
      return;
    }

    try {
      const response = await authServices.updateUserData(userId, formData);

      if (response.status === 200) {
        console.log("Usuário atualizado com sucesso");
        navigate("/home");
      }
    } catch (error) {
      console.error("Erro ao atualizar o usuário", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="container-edit-user">
      <HeaderHome title="BestBrowserGames" />
      <div className="card-edit">
        <form onSubmit={handleSubmit}>
          <label>Nome:</label>
          <input
            type="text"
            name="name"
            maxLength={40}
            value={formData.name}
            onChange={handleInputChange}
            required
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          <label>Nova Senha:</label>
          <input
            type="password"
            name="password"
            maxLength={15}
            value={formData.password}
            onChange={handleInputChange}
            required
          />

          <label>Confirme a Nova Senha:</label>
          <input
            type="password"
            name="confirmPassword"
            maxLength={15}
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />

          <label>Data de Nascimento:</label>
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleInputChange}
          />

          <label>Estado:</label>
          <select
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>Selecione</option>
            <option value="SP">São Paulo</option>
            <option value="MG">Minas Gerais</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="ES">Espirito Santo</option>  
          </select>

          <label>País:</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>Selecione</option>
            <option value="BR">Brasil</option>
          </select>

          <input type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  );
};

export default EditUserPage;
