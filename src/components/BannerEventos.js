import './Components.css';
export default function BannerEventos(props){
    /* props dealer: */
    let bannerStyle={
        backgroundColor: props.backgroundColor ,
        flexDirection: props.flex
    }
    let textoStyle={
        color: props.textColor
    }
    return (

        <divBannerEventos className="divBannerEventos" style={bannerStyle}>
            <img className="imagem" src={props.src}></img>
            <texto className="divTexto" style={textoStyle}>
                <titutlo className="titulo">{props.titulo}</titutlo>
                <descricao className="descricao">{props.descricao}</descricao>
            </texto>
        </divBannerEventos>
        
    )
}