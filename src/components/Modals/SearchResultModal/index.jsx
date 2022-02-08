import Modal from 'react-bootstrap/Modal';

const SearchResultModal = ({ show, handleClose, modalData: { title, snippet } }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div dangerouslySetInnerHTML={{ __html: snippet }}></div>
            </Modal.Body>
        </Modal>
    )
}

export default SearchResultModal;