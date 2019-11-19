import React from 'react';

import './App.css';

// function App() {
//   return (
//     <div className="App">
//       Hello World by me...^_^
//     </div>
//   );
// }

class App extends React.Component {
  render () {
    return (
      <div>
        Hello, {this.props.name}
      </div>
    )
  }
}

export default App;
