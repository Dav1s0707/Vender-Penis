import '../App.css'
import img1 from "../assets/img/logo.png"
function Header(){
    return(
    <div className='linha'>
        <img src={img1} alt="" className='logo' />
        <div className='linha'>
            <h2>Home</h2>
            <h2 className='espaco'>Sobre</h2>
            <h2>Contato</h2>
        </div>
    </div>
    )
}

export default Header