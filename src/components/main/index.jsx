import { Controller } from "react-hook-form"
import { Box, ContainerMain, ContentMain, Formulario,  Preenchimento, Row } from "./styles"
import { Button } from "../button"
import Name from '../../assets/img/icons/default.svg'
import Email from '../../assets/img/icons/email.svg'
import Password from '../../assets/img/icons/password.svg'

export const Main = () => {

  return(
    <ContainerMain>
      <ContentMain>
        <h2>
        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais 
        desejadas.
        </h2>
      </ContentMain>
      <ContentMain>
        <Box>
          <h2>
            Comece sua conta grátis
          </h2>
          <p>
            Crie sua conta e make the change._
          </p>
          <Formulario>
            <Preenchimento>
            <Row>
              <img src={Name}/>
              <input type="text" placeholder="Nome Completo"/>
            </Row>
            </Preenchimento>
            <Preenchimento>
            <Row>
              <img src={Email}/>
              <input type="email" placeholder="Email"/>
            </Row>
            </Preenchimento>
            <Preenchimento>
            <Row>
              <img src={Password}/>
              <input type="password" placeholder="Senha"/>
            </Row>
            </Preenchimento>
          </Formulario>
          <Button/> 
          <p>
            Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de 
            Privacidade e os Termos de Uso da DIO.
          </p>
          <h6>
            já tenho conta. <a href="#">Fazer login</a>
          </h6>
        </Box>
        
      </ContentMain>
    </ContainerMain>
  )
}
