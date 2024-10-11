import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import avatarPlaceholder from "../../assets/placeholder_avatar.png"
import { useNavigate } from 'react-router-dom';

export function Header(){

    const { signOut, user } = useAuth()
    const navigate = useNavigate()

    function handleSignOut() {
        signOut()
        navigate("/")
    }

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    return (
    <Container>
        <Profile to="/profile">
            <img 
            src={avatarUrl}
            alt={`foto do usuário ${user.name}` }
            />

            <div>
                <span>Bem-Vindo,</span>
                <strong>{user.name}</strong>
            </div>

        </Profile>

        <Logout onClick={handleSignOut}>
            <RiShutDownLine/>
        </Logout>

    </Container>
)
}