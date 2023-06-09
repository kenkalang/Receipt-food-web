import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface IModalFoodProps {
    show: boolean;
    close: () => void;
}

interface IModalFoodState {
    show: boolean;
}

class ModalFood extends React.Component<IModalFoodProps, IModalFoodState> {
    constructor(props: IModalFoodProps) {
        super(props);
        this.state = {
            show: false,
        };
    }

    componentDidUpdate(prevProps: IModalFoodProps) {
        if (prevProps.show !== this.props.show) {
            this.setState({ show: this.props.show });
        }
    }

    render() {
        return (
            <Modal show={this.state.show} onHide={this.props.close} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Browse Receipt</Modal.Title>
                </Modal.Header>
                <Modal.Body>Food Receipt</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.close}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default ModalFood;
