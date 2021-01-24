import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';

import Nav from '../nav';
import Schedule from '../nav/Schedule';
import Events from '../nav/Events';
import Messages from '../nav/Messages';
import Deadlines from '../nav/Deadlines';
import Settings from '../nav/Settings';
import Tasks from '../nav/Tasks';

import './App.scss';


const App= () => {
    
    return (
        <BrowserRouter>

            <header>
                <Nav />
            </header>
            

            <main>
                <Switch>
                    <Route path="/"  activeClassName='active' render={() => <Schedule/>} exact/>
                    <Route path="/Schedule"  activeClassName='active' render={ () => <Schedule />} />
                    <Route path="/Events"  activeClassName='active' render={ () => <Events />} />
                    <Route path="/Messages"  activeClassName='active' render={ () => <Messages />} />
                    <Route path="/Deadlines"  activeClassName='active' render={ () => <Deadlines />} />
                    <Route path="/Settings"  activeClassName='active' render={ () => <Settings />} />
                    <Route path="/Tasks"  activeClassName='active' render={ () => <Tasks />} />
                </Switch>
                
            </main>

        </BrowserRouter>
    )
}

export default App;