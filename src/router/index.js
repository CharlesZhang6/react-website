import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import HomePage from '../views/index/Index'
import SecondPage from '../views/second/Second'
import NoMatch from '../views/404/404'

const Routes = () => {
	return (
		<Router>
			<div>
                <Header />
                <Switch>
                	<Route exact path="/" component={HomePage}/>
                	<Route exact path="/second" exact component={SecondPage}/>
                	<Route component={NoMatch}/>
                </Switch>
                <Footer />
            </div>
		</Router>
	)
}

export default Routes;