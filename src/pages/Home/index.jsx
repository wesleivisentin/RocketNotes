import { FiPlus, FiSearch } from 'react-icons/fi'
import { ButtonText } from "../../components/ButonText";
import { Header } from "../../components/Header";
import { Container, Brand, Menu, Search, Content, NewNote, } from "./styles";
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { Note } from '../../components/Note';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';


export function Home() {
    const [tags, setTags] = useState([])
    const [tagsSelected, setTagsSelected] = useState([])

    function handleTagSelected(tagName) {
        const alreadySelected = tagsSelected.includes(tagName);

        if(alreadySelected){
            const filteredTags = tagsSelected.filter(tag => tag !== tagName);
            setTagsSelected(filteredTags);

        }else {
            setTagsSelected(prevState => [...prevState, tagName])
        }

        
    }


    useEffect(() => {
        async function fetchTags() {
            const response = await api.get("/tags")
            setTags(response.data)
        }

        fetchTags();
    }, [])
    return (

        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header />


            <Menu>
                <li>
                    <ButtonText 
                    title="Todos" 
                    isActive = {tagsSelected.length === 0}
                    onClick={() => handleTagSelected("all")}
                    />
                </li>
                {
                    tags && tags.map(tag => (

                        <li key={String(tag.id)}>
                            <ButtonText 
                            title={tag.name} 
                            onClick={() => handleTagSelected(tag.name)}
                            isActive = {tagsSelected.includes(tag.name)}
                            />
                        </li>
                    ))
                }
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

            <NewNote to="/New">
                <FiPlus />
                Criar nota
            </NewNote>

        </Container>

    )
}