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
import antsdrform from './components/Antd-form';
import UserProfile from './components/UserProfile';
import OnBoardScreen from './components/OnBoardScreen';
import IdentityCardFrontScan from './components/IdentityCardFrontScan';
import IdentityCardBackScan from './components/IdentityCardBackScan';
import welcomenewuser from './components/welcomeNewUser';
import SabhiONlineIdentity from './components/Sabhionlineidentity';
import SecureOnlineIdentity from './components/Secureonlineidentity';
import Termsandconditions from './components/TermsandCOnditions';
import Fewmoresteps from './components/fewmoresteps';
// importing css files----------------->
import './App.css';

// importing image files---------------->
import sabhilogo from './images/dark.svg';


// rendering view------------------------>
export default function App() {

  return (
    <div className="App">
      <Switch>
        <Route path='/' component={SabhiONlineIdentity} exact />
        <Route path='/Secureonlineidentity' component={SecureOnlineIdentity} />
        <Route path='/Termsandcond' component={Termsandconditions} />
        <Route path='/welcome' component={welcomenewuser} />
        <Route path='/fewmoresteps' component={Fewmoresteps} />
        {/* <Route path='/' component={SplashScreen} exact />
        <Route path='/onboard' component={OnBoardScreen} />
        <Route path='/ocr_front' component={IdentityCardFrontScan} />
        <Route path='/ocr_back' component={IdentityCardBackScan} />
        <Route path='/form_sdr' component={antsdrform} />
        <Route path='/user_profile' component={UserProfile} /> */}



      </Switch>
    </div>
  );
}

