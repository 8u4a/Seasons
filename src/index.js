import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


/* const App = () => {
window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (err) => console.log(err)
);

    return <div>Latitude: </div>
}; */

class App extends React.Component {
    //contructor must be called before anythingelse
             
    state = {lat:null, errorMessage: ''};

        componentDidMount() {
            window.navigator.geolocation.getCurrentPosition(
                position => this.setState({lat: position.coords.latitude}),                    
                err => this.setState({errorMessage: err.message})                  
            );            
        }

        renderContent(){
            if (this.state.errorMessage && !this.state.lat) {
                return <div>Error: {this.state.errorMessage}</div>;
            }

            if (!this.state.errorMessage && this.state.lat) {
                return <SeasonDisplay lat={this.state.lat} />;
            }

            return <Spinner message="Please accept location request" />;
        
        }
       //always do data loading inside the compomonentDidMount not  in the constructor
       // lifecycling methods componentDidMount/componentDidUpdate/componentWillUnmount

        render() {
            return <div className="border red">{this.renderContent()}</div>
            
            
        }
    }


ReactDOM.render(
    <App />,
    document.querySelector('#root')
);