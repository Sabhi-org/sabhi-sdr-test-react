// importing bootstrap elements------->
import {
  Container,
  Card,
  Row
} from 'react-bootstrap';

// importing components and router components------------>
import { Route, Switch } from 'react-router-dom';
// import FormSDR from './components/SDR.generator.form';
import ParseSDR from './components/ParseSDR';
import fileUploader from './components/ImageUploader';
import antsdrform from './components/Antd-form';
import UserProfile from './components/UserProfile';

// importing css files----------------->
import './App.css';

// importing image files---------------->
import sabhilogo from './images/dark.svg';


// rendering view------------------------>
export default function App() {

  return (
    <div className="App">
      <Container className="containsCard">
        <Row className="justify-content-center centered">
          <Card className="theCard">
            <div className="circle">
              <img src={sabhilogo} />
            </div>
            <Card.Body>
              <main>
                <Switch>
                  <Route path='/' component={ParseSDR} exact />
                  <Route path='/parse_sdr' component={fileUploader} />
                  <Route path='/form_sdr' component={antsdrform} />
                  <Route path='/user_profile' component={UserProfile} />
                </Switch>
              </main>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

