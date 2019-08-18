import React, {Component} from 'react'
import Card from '../components/Card';
import Welcome from '../components/Welcome';

class Exercices extends Component {
    render(){
        return (
        <div>
            <Welcome
            username="reinaldoagf"
            />
            <Card 
            title="Card1"
            description="Test1"
            bgImg="https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-903ea3cb.jpg"
            />
        </div>
        );
    }
}

export default Exercices;
