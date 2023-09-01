import logo from "../assets/logo-imperial-blanco.png";

export default function Logo(){
    return(
        <>
            <img className="logo" src={logo} alt=""/>
            <h5 className="text-center">Bienvenido a Adquisiciones</h5>
        </>
    )
}