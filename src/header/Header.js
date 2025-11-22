import React from "react";
import Logo from '../IMG/Logo.png';

class Header extends React.Component{

render(){

return(

<div className="bg-dark text-center text-white p-3">
  <img src={Logo} alt="Descripcion de la imagen" width="100px"></img>
<h3>

Bienvenido a mi proyecto en react, aqui dejo los datos de contacto

</h3>
</div>

  );
 }

}


export default Header;