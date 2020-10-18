import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';


const App = (props) => {
  return (
      <div className="App">
        <HeaderContainer />
        <main>
          <Navbar />
          <section className="content">
            <Route path='/profile/:userId?'
                   render={ () => <ProfileContainer /> } />
            <Route path='/dialogs'
                   render={ () => <DialogsContainer />} />
            <Route path='/users'
                    render={ () => <UsersContainer />} />
            <Route path='/login'
                    render={ () => <LoginPage />} />

            <Route path='/news' render={ () => <News /> } />
            <Route path='/music' render={ () => <Music /> } />
            <Route path='/settings' render={ () => <Settings /> } />
          </section>
        </main>
      </div>
  );
}

export default App;
