// importing bootstrap elements------->
import {
  Container,
  Card,
  Row
} from 'react-bootstrap';

// importing components and router components------------>
import { Route, Switch } from 'react-router-dom';
import FormSDR from './components/SDR.generator.form';
import ParseSDR from './components/ParseSDR';

// importing css files----------------->
import './App.css';


// rendering view------------------------>
export default function App() {

  return (
    <div className="App">
      <Container>
        <Row className="justify-content-center">
          <Card className="theCard">
            <Card.Body>
              <main>
                <Switch>
                  <Route path='/' component={ParseSDR} exact />
                  <Route path='/parse_sdr' component={FormSDR} />
                </Switch>
              </main>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

