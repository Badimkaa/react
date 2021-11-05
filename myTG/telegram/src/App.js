import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Profile from './components/Profile/Profile';
import { Route } from 'react-router';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';

const App = (props) => {
  return (
    <div className='appWrapper'>
      <Header />
      <SideBar />
      <div className='appContent'>
        <Route path='/profile' render={() => <Profile  />} />
        <Route path='/dialogs' render={() => <Dialogs dialogsPage={props.state.dialogsPage}/>} />
        <Route path='/news' render={() => <News />} />
      </div>
    </div>

  )
}

export default App;
