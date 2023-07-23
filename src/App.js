import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyComponets from './components/MyComponets'
import React from 'react';


class App extends React.Component {

  render() {
    return(
      <div className="App">
      <MyComponets/>
    </div>
    )
  }
}
// const App = () => {
//   const count = useSelector(state => state.counter.count);
//   const dispatch = useDispatch();

//   return (
    
//   );
// }

export default App;
