import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Aside from '../Aside/Aside';
import Footer from '../Footer/Footer';
import containers from '../../../containers'
import {Container} from 'reactstrap';
import {Switch, Route, Redirect} from 'react-router-dom';
import { preload } from "../../../service/preload";

class Full extends React.Component {

  static initialAction() {
    return preload()
  }
  
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Container fluid>
              <Switch>
                <Route path="/homepage" name="homepage" component={containers.HomepageContainer}/>
                <Route path="/search" name="search" component={containers.SearchPageContainer}/>
                <Redirect from="/" to="/homepage"/>
              </Switch>
            </Container>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Full;
