import React, { useEffect, useState } from 'react';
import './App.css';
import langContext,{langs} from './langContext.ts'
function App() {

  const [lang,setLang]=useState(langs.az)
  const [selectedLanguage,setSelectedLanguage]=useState(localStorage.getItem('selectedLang') ?? 'az')

  useEffect(()=>{
    const selectedLang=localStorage.getItem('selectedLang')
        setSelectedLanguage(selectedLang)
        selectedLanguage==='az' ? setLang(langs.az) : setLang(langs.en)
  },[selectedLanguage])
  const switchLang=(lang)=>{
    setSelectedLanguage(lang);
    localStorage.setItem('selectedLang',lang)
    
  }

  return (
    <>
    
    <header>
        <div className='container'>
          <div className='all-header'>
              <div className='left-header'>
                  <ul>
                    <li>{lang.home}</li>
                    <li>{lang.about}</li>
                    <li>{lang.shop}</li>
                  </ul>
              </div>

              <div className='right-header'>
                <ul>
                  <li>
                    <button onClick={() =>switchLang('az')}> az</button>
                  </li>
                  <li>
                  <button onClick={() =>switchLang('en')}>en</button>
                  </li>
                  
                </ul>
              </div>
          </div>
        </div>
    </header>


    <p>{lang.text}</p>


    
    
    </>
  );
}

export default App;
