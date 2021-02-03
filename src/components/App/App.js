import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';

import Navigation from '../Navigation';
import Schedule from '../Navigation/Schedule';
import Events from '../Navigation/Events';
import Messages from '../Navigation/Messages';
import Deadlines from '../Navigation/Deadlines';
import Settings from '../Navigation/Settings';
import Tasks from '../Navigation/Tasks';

import './App.scss';


const App= () => {
    
    return (
        <BrowserRouter>

            <header>
                <Navigation />
            </header>
            

            <main style={{paddingLeft: '260px', width: '100%'}}>
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