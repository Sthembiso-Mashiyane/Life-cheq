import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {Home} from './components/Home'
import LifeInsurance from './components/lifeInsurance'

// The Main component renders one of the  provided
// Routes (provided that one matches). The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/lifeInsurance' component={LifeInsurance}/>
            {/*<Route path='/schedule' component={Schedule}/>*/}
        </Switch>
    </main>
)

export default Main
