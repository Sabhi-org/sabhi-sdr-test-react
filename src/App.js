// importing bootstrap elements------->
import {
  Container,
  Card,
  Row
} from 'react-bootstrap';

// importing components and router components------------>
import { Route, Switch } from 'react-router-dom';
// import FormSDR from './components/SDR.generator.form';
import SplashScreen from './components/SplashScreen';
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
    <div className="App" style={{
      'background': 'rgb(95, 130, 189)',
      'background': 'linear - gradient(180deg, rgba(95, 130, 189, 1) 0 %, rgba(47, 77, 125, 1) 100 %)',

    }} >
      <Switch>
        <Route path='/' component={SplashScreen} exact />
        <Route path='/parse_sdr' component={fileUploader} />
        <Route path='/form_sdr' component={antsdrform} />
        <Route path='/user_profile' component={UserProfile} />
      </Switch>
    </div>
  );
}

