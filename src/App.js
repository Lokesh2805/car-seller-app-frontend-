import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import CarsList from './components/CarListTemplate';
import { carData } from './components/Data';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { searchReducer } from './components/Redux/Action_and_Reducer';
import { BrowserRouter , Routes, Route  } from 'react-router-dom';


function App() {
  const store = createStore(searchReducer);
  return (
   <>
   <BrowserRouter>
   <Provider store={store}>
   <Header />
   </Provider>
   <div>
   <CarsList cars={carData} itemsPerPage={6} />
   

 </div>

      <Routes>
        <Route path="/page/:pageNumber" component={Footer} />
        <Route path="/" component={Footer} />
        
      </Routes>
      
   <Footer />
   </BrowserRouter>
   </>
 )
}

export default App;
