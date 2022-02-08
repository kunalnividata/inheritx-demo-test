import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BASE_URL, getSearchedTextResult } from './apis';
import ListItem from './components/ListItems';

import SearchBox from './components/SearchBox';

const delayFor = 600;

const App = () => {
  const timeout = useRef();
  // const [searchedText, setSearchedText] = useState('');
  const [searchedResult, setSearchedResult] = useState({});
 
  const getData = async (value) => {        
    const url = `${BASE_URL}${value}`
    const data = await getSearchedTextResult(url);
    const { query: { search }} = data;
    setSearchedResult(search);
  }
  
  const inputChangeHandler = (event) => {
    const { target: { value }} = event;

    clearTimeout(timeout.current);

    if (!value) return;
    // setSearchedText(value);    

    timeout.current = setTimeout(() => {
      getData(value);
    }, delayFor);
    
  }

  return (
    <Container>
      <Row>
        <Col>
          <SearchBox inputChangeHandler={inputChangeHandler} /> 
          <ListItem data={searchedResult} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
