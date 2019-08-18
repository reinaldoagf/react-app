import React, { Component } from 'react';
import './styles/Card.css'
export default class Card extends Component {
  constructor(props){
      super(props);
      this.state={
        img:'https://images.vexels.com/media/users/3/130267/isolated/preview/1bd72ea2a81cf0d78f0e9640a71b9ae5-silueta-de-mujer-atleta-by-vexels.png',
      }
    };
  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        img:'https://images.vexels.com/media/users/3/130572/isolated/preview/7632200b583a7e75ff0cf8cf01b11145-ni--a-jugar-al-tenis-silueta-by-vexels.png',
      })
    },5000)
  }
  render() {
    const {title,description,bgImg}=this.props;    
    return (
      <div className="card Fitness-Card mx-auto" style={{
        backgroundImage:`url(${bgImg}), linear-gradient(to right, #A74CF2, #617BFB)`
      }}>
        <div className="card-body">
          <div className="row center">
            <div className="col-6">
              <img className="float-right w-100" src={this.state.img} alt="description"/>
            </div>
            <div className="col-6 Fitness-Card-Info" >
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
