
import { ButtonText } from "../../components/ButonText/index.jsx";
import { Button } from "../../components/Button/index.jsx";
import { Header } from "../../components/Header/index.jsx";
import { Section } from "../../components/Section/index.jsx";
import { Tag } from "../../components/Tag/index.jsx";
import { Container, Links, Content } from "./styles.js";


export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />
         

          <h1>Introdução ao React</h1>
          <p> Officia ipsum aute aliquip mollit consectetur nostrud. Laboris excepteur nostrud est officia eu mollit. Amet veniam ut velit anim duis Lorem aute sunt quis non. Veniam ut eu exercitation commodo duis aute esse adipisicing. Dolor cillum ipsum dolore fugiat excepteur mollit ex anim adipisicing ullamco. </p>
          <Section title="Links úteis">
            <Links>
              <li><a href="#">www.google.com</a> </li>
              <li><a href="#">www.google.com</a> </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="Express" />
            <Tag title="Node" />

          </Section>
          <Button title="Voltar" />

        </Content>
      </main>

    </Container>

  )
}