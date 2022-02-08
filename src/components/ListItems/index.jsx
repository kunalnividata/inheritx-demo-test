import { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import SearchResultModal from '../Modals/SearchResultModal';

const ListItem = ({ data }) => {
    const [show, setShow] = useState(false);
    const [modalData, setModalData] = useState({ title: '', snippet: '' });

    const handleClose = () => {
        setShow(false);
    }
    const itemClickHandler = (title, snippet) => {
        setShow(true);
        setModalData({
            title,
            snippet
        });
    }

    return (
        <>
            <ListGroup as="ol" numbered>
                {data.length && data.map(({ title, snippet }) => (
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                        role="presentation"
                        onClick={() => itemClickHandler(title, snippet)}
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">{title} </div>
                            <div dangerouslySetInnerHTML={{ __html: snippet }}></div>
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <SearchResultModal show={show} handleClose={handleClose} modalData={modalData} />
        </>
    )
}

export default ListItem;