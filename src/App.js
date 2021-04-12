
import './App.css';
import React from 'react';

import Myprofile from './component/profile';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }


  toggleVisibility = () => {
    this.setState({ isVisible: !this.state.isVisible });
    console.log(this.state.isVisible);
  }
  render(){
  return (
<div className="App">

<button className="visibility-btn" onClick={this.toggleVisibility}>
          {this.state.isVisible ? 'Hide profile' : 'Show profile'}
        </button>
        {this.state.isVisible && <Myprofile/>}
</div>
  );
}

}
export default App;
