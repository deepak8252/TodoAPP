
import './App.css';
import { Provider } from 'react-redux';
import store from './Appstore/store';
import Header from './component/Header';
import Body from './component/Body';
function App() {
  return (
  <div className='w-9/12 mx-auto'>
   <Provider store={store}>
    <Header/>
    <Body/>
   
   </Provider>
  </div>
  );
}

export default App;
