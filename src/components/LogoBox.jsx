
import { LogoStyled } from '../StyledComponent/Logo'
import Logotipo from '../logo.png'
const LogoBox = () => {
  return (
    <LogoStyled>
       <img src={Logotipo} alt="" /> 
       <h1>TheShop</h1>
    </LogoStyled>
  )
}

export default LogoBox