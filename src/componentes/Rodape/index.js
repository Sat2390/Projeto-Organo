import './Rodape.css'

const Rodape = () => {
    return(
        <footer className='Rodape'>
            <div className='Conteiner-icons'>
                <a href='#'><div><img src='/imagens/tw.png'></img></div></a>
                <a href='#'><div><img src='/imagens/ig.png'></img></div></a>
                <a href='#'><div><img src='/imagens/fb.png'></img></div></a>
            </div>
            <img src='/imagens/logo.png' className='logo'></img>
        </footer>
    )
}

export default Rodape