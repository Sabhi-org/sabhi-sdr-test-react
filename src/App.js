

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
import SabhiONlineIdentity from './components/Sabhi_onlineidentity_screen01';
import SecureOnlineIdentity from './components/Secure_onlineidentity_screen02';
import Termsandconditions from './components/Terms_and_conditions_screen03';
import Fewmoresteps from './components/Few_more_steps_screen04';
import Verifyyourphone from './components/Verify_your_phone_screen05';
import Phonev from './components/Phone_verification_screen06';
import Smsverify from './components/SMS_verification_screen07';
import Idready from './components/ID_ready_for_scan_screen08';
import frontpic from './components/Take_front_picture_screen09';
import backpic from './components/Take_back_picture_screen10';





// importing css files----------------->
import './App.css';



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
        <Route path='/verifyyourphone' component={Verifyyourphone} />
        <Route path='/phonev' component={Phonev} />
        <Route path='/smsverify' component={Smsverify} />
        <Route path='/idready' component={Idready} />
        <Route path='/ocr_front' component={IdentityCardFrontScan} />
        <Route path='/ocr_back' component={IdentityCardBackScan} />
        <Route path='/form_sdr' component={antsdrform} />
        <Route path='/user_profile' component={UserProfile} />
        <Route path='/frontpic' component={frontpic} />
        <Route path='/backpic' component={backpic} />
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

