import React,{Component} from 'react';
// import Navbar from './navbar'
import Header from './header'
import Footer from './footer'
import Pricing from './pricing'
import Bar from './bar';
import Steps from './steps'
import {BrowserRouter as Router,Route} from 'react-router-dom'

class Smart extends Component{
    render(){   
        return(
            <Router>
                <Route>
                    <React.Fragment>
                        <Header/>
                        <Steps/>
                        <Bar/>
                        <Pricing/>
                        <Footer/>
                    </React.Fragment>
                </Route>
            </Router>
        ) 
    }
}

export default Smart;
