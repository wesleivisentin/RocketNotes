
import { Button } from "../../components/Button/index.jsx";
import { Header } from "../../components/Header/index.jsx";
import { Section } from "../../components/Section/index.jsx";
import { Links } from "../../components/Section/styles.js";
import { Tag } from "../../components/Tag/index.jsx";
import { Container } from "./styles.js";
    
 
 export function Details() {
  return(
  <Container>
  <Header/>
  <Section title="Links úteis">
    <Links>
      <li><a href="#">www.google.com</a> </li>
      <li><a href="#">www.google.com</a> </li>
    </Links>
  </Section>

  <Section title="Marcadores">
    <Tag title="Express"/>
    <Tag title="Node"/>

  </Section>
  <Button title="Voltar"/>
  </Container>
  
  )
}