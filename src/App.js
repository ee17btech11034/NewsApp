import './App.css';
import React, {useState} from 'react'
import { 
  BrowserRouter,
  Routes,
  Route, 
} from "react-router-dom";

import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'


const App = ()=> {
  const [progressValue, setProgressValue] = useState(0)

  const pageSize = 6
  const newsAPI = process.env.REACT_APP_NEWS_API 
  // newsAPI = '16cb9a78436c4088acb733624a47d369'
  
  return (
      <div>
          <BrowserRouter>   
              <NavBar />
              <LoadingBar
                color='#f11946'
                progress={progressValue}
              />

              <Routes>
                <Route exact path="/" element={<News setProgress={setProgressValue} newsAPI={newsAPI} key='general' pageSize={pageSize} country='in' category='general'/>} />                
                <Route exact path="/business" element={<News setProgress={setProgressValue} newsAPI={newsAPI} key='business' pageSize={pageSize} country='in' category='business'/>} />                
                <Route exact path="/entertainment" element={<News setProgress={setProgressValue} newsAPI={newsAPI} key='entertainment' pageSize={pageSize} country='in' category='entertainment'/>} />                
                <Route exact path="/health" element={<News setProgress={setProgressValue} newsAPI={newsAPI} key='health' pageSize={pageSize} country='in' category='health'/>} />                
                <Route exact path="/science" element={<News setProgress={setProgressValue} newsAPI={newsAPI} key='science' pageSize={pageSize} country='in' category='science'/>} />                
                <Route exact path="/sports" element={<News setProgress={setProgressValue} newsAPI={newsAPI} key='sports' pageSize={pageSize} country='in' category='sports'/>} />                
                <Route exact path="/technology" element={<News setProgress={setProgressValue} newsAPI={newsAPI} key='technology' pageSize={pageSize} country='in' category='technology'/>} />                
              </Routes>
          </BrowserRouter>
      </div>
    )
}

export default App