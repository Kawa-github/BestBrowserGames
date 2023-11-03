const Register = () =>{
    return (
        <>
            <form>
                <label>
                    Nome:
                </label>
                <input type="text" name="nome" maxLength={50} required/>
                
                <label>
                    Email:
                </label>
                <input type="email" name="email" />
                
                <label>
                    Senha:
                </label>
                <input type="password" name="senha" />
                
                <label>
                    Data de Nascimento:
                </label>
                <input type="date" name="data-nascimento" />
                
                <label>
                    Estado:
                </label>
                <select>
                    <option value="SP" selected>São Paulo</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="ES">Espirito Santo</option>
                </select>
                
                <label>
                    País:
                </label>
                <select>
                    <option value="BR">Brasil</option>
                    <option value="ARG">Argentina</option>
                </select>

                <input type="submit" value="Enviar" />
            </form>
        </>

    );
}


export default Register