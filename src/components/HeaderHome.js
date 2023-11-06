
// import { FaSearch } from "react-icons/fa";
const HeaderHome = () =>{
    return(
        <>
            <div className="container-nav">
            <div className="title">BestBrowserGames</div>
                <div className="itens-nav">
                    <nav>
                        <ul>
                            {/* <li><FaSearch />  </li> */}
                            <li><input type="text" placeholder="Busque seu game favorito" maxLength={25}/></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}


export default HeaderHome