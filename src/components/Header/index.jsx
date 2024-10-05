import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";

export function Header(){
    return (
    <Container>
        <Profile to="/profile">
            <img 
            src="https://github.com/wesleivisentin.png"
            alt="Foto do usuário"
            />

            <div>
                <span>Bem-Vindo,</span>
                <strong>Weslei Visentin</strong>
            </div>

        </Profile>

        <Logout>
            <RiShutDownLine/>
        </Logout>

    </Container>
)
}