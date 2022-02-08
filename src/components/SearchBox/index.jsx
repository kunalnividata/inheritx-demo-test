import Form from 'react-bootstrap/Form'
import './index.css';

const SearchBox = ({ inputChangeHandler }) => {

    return (
        <Form class="search-form">
          <Form.Group className="mb-3 mt-3 search-box" controlId="formBasicEmail">            
            <Form.Control type="text" placeholder="Search Here..." onChange={inputChangeHandler} />
          </Form.Group>
        </Form>
    )
}

export default SearchBox;