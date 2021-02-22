import React from 'react';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';


export default class About extends React.Component {
    render(){
        return(
           <div>
               <NavigationBar />
               <h1>About Cibus</h1>
               <p1>Cibus is a website to post and share recipes with eachother. This was done in the course TDDD27 at Linköping University</p1>
           </div>
        )
    }
}
