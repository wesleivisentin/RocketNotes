import { FiPlus, FiSearch } from 'react-icons/fi'
import { ButtonText } from "../../components/ButonText";
import { Header } from "../../components/Header";
import { Container, Brand, Menu, Search, Content, NewNote, } from "./styles";
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { Note } from '../../components/Note';


export function Home() {
    return (

        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header />


            <Menu>
                <li> <ButtonText title="Todos" /></li>
                <li>  <ButtonText title="React" /></li>
                <li> <ButtonText title="Node" /></li>
            </Menu>

            <Search>
                <Input icon={FiSearch} placeholder="Pesquisar pelo título" />
            </Search>

            <Content>
                <Section title="Minhas notas">
                    <Note data={{ 
                        title: 'React',
                        tags: [
                            { id: '1', name: 'react' },
                            { id: '2', name: 'rocketseat' }
                        ]
                        }}
                        />
                </Section>

            </Content>

            <NewNote>
                <FiPlus />
                Criar nota
            </NewNote>

        </Container>

    )
}