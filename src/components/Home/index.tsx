import { Link } from "react-router-dom";
import { Container } from "./styles";

interface HomeProps {
    onOpenProfileModal: () => void;
}

export function Home({ onOpenProfileModal }: HomeProps) {
    return (
        <Container>
            <h1>Home</h1>
            <Link to="/profile" onClick={onOpenProfileModal}>
                Profile
            </Link>
        </Container>
    );
}