import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Container, Form, Avatar } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";


export function Profile() {
    return (

        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft />
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img src="https://github.com/wesleivisentin.png" alt="Imagem de perfil" />
                    <label htmlFor="avatar">
                        <FiCamera/>
                        <input
                        id="avatar"
                        type="file"
                        />
                    </label>
                </Avatar>
                <Input
                    placeholder="nome"
                    type="text"
                    icon={FiUser}
                />

                <Input
                    placeholder="E-mail"
                    type="email"
                    icon={FiMail}
                />

                <Input
                    placeholder="Senha atual"
                    type="password"
                    icon={FiLock}
                />

                <Input
                    placeholder="Nova atual"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Salvar"/>


            </Form>
        </Container>

    )


}