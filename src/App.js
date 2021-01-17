import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, withRouter } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className="App">
        <HeaderContainer />
        <main>
          <Navbar />
          <section className="content">
            <Route
              path="/profile/:userId?"
              render={() => {
                return <React.Suspense fallback={<div>Loading...</div>}>
                  <ProfileContainer />
                </React.Suspense>
                }}/>

            <Route path="/dialogs" render={() => {
                return <React.Suspense fallback={<div>Loading...</div>}>
                  <DialogsContainer /> 
                </React.Suspense> }}/>

            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/login" render={() => <LoginPage />} />

            <Route path="/news" render={() => <News />} />
            <Route path="/music" render={() => <Music />} />
            <Route path="/settings" render={() => <Settings />} />
          </section>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default compose(withRouter, connect(mapStateToProps, {initializeApp}))(App);
