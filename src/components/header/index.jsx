import { ButtonsHeader, ContainerHeader } from "./styles"
import Dio from '../../assets/img/logo/dio.svg'
import { ContentHeader } from "./styles"

export const Header = () => {
  return(
    <ContainerHeader>
      <ContentHeader>
        <img src={Dio} />
        <ButtonsHeader>
          <a href="#">Home</a>
          <button>entrar</button>
          <button>cadastrar</button>
        </ButtonsHeader>
      </ContentHeader>
    </ContainerHeader>
  )
}
