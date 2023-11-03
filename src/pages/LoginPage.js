const LoginPage = () =>{
    return(
        <>
            <>
            <form>
                <label>
                    Email:
                </label>
                <input type="email" name="email" />
                
                <label>
                    Senha:
                </label>
                <input type="password" name="senha" maxLength={15}/>

                <input type="submit" value="Enviar" />
            </form>
          
        </>
        </>
    )
}


export default LoginPage