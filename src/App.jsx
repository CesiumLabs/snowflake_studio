import React from 'react';
import { Container } from 'react-bootstrap';
import Loader from './Loader';
import Twemoji from 'react-twemoji';
import { BrowserRouter as Router } from 'react-router-dom';
import RouteBuilder from './RouteBuilder';

export default class App extends React.Component {
  constructor(props){
      super(props)
      this.state = {
         isLoading: true
      };
      
   }
   
   componentDidMount() {
      this.setState({
         isLoading: false
      });
   }

   render(){
      return(
         <Router>
            <Container fluid="true">
               {
                  this.state.isLoading ? (<Loader />) : (
                     <Twemoji options={{ className: "twemoji" }}>
                        <RouteBuilder />
                     </Twemoji>
                  )
               }
            </Container>
         </Router>
      )
   }
};