import { useNavigate } from "react-router-dom";
import Modal from 'react-modal';
import { Container } from "./styles"

interface ProfileModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function Profile({ isOpen, onRequestClose }: ProfileModalProps) {
    const navigate = useNavigate();
    
    function onRequestCloseGoToHomePage() {
        navigate(-1);
        onRequestClose();      
    }

    return (
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestCloseGoToHomePage}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

            <Container>
                <h1>Profile</h1>
            </Container>
        </Modal>
    )
}