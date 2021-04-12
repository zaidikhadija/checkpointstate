import React from 'react';

class Myprofile extends React.Component {
  constructor(props) {
    console.log('1. constructor()');
    super(props);
    this.state = {
        fullName:"Hi! My name is Zaidi Khadija",
          
    Biographie:"My name is zaidi khadija i graduated in industrial computer science in 2015",
    
    profession:"I am a student in GOMYCODE",
    imag :"/khadija.jpg",
    intervall: null,
    timer: 0,
    
     
    };
}
componentDidMount() {
  console.log('3. componentDidMount()');
  this.setState({
    intervall: setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000),
  });
}
render(){
        
        return (
<div>
  <h1 style={{color:'blue'}}>{this.state.fullName}</h1>
      <p style={{color:'brown'}}>{this.state.Biographie}</p>
      <h4>{this.state.profession}</h4>
     
<img  style={{borderRadius: "50%",
  border:"solid 5px pink",
  width: "250px",
  height: "250px"}} src={this.state.imag} alt="khadija"></img>
  <h2>{this.state.timer}</h2>
</div>
  );
}
}
  
export default Myprofile;