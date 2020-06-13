import React, { useState } from 'react';
import './App.css';
import Alert from './AlertMsg.js';
import Alert1 from './AlertMsg1.js';

function App() {  
  let [donate, setDonate] = useState(1);
  let [display, setDisplay] = useState(false);
  return (
    <div className = 'App'
        className = {`App-header ${display ? 'App-header1' : ''}`}> 
      <h1>COVID-19</h1>
      <p>
        A coronavirus is a kind of common virus that causes an infection in your nose, sinuses, or upper throat. Most coronaviruses aren't dangerous.
        In early 2020, after a December 2019 outbreak in China, the World Health Organization identified SARS-CoV-2 as a new type of coronavirus. The outbreak quickly spread around the world.
        COVID-19 is a disease caused by SARS-CoV-2 that can trigger what doctors call a respiratory tract infection. It can affect your upper respiratory tract (sinuses, nose, and throat) or lower respiratory tract (windpipe and lungs).
        It spreads the same way other coronaviruses do, mainly through person-to-person contact. Infections range from mild to deadly.
      </p>

      <h1>How long will the coronavirus last?</h1>

      <p>
        It’s too soon to tell how long the pandemic will continue. It depends on many things, including researchers’ work to learn more about the virus, their search for a treatment and a vaccine, and the public’s efforts to slow the spread.
        More than 100 vaccine candidates are in various stages of development and testing. This process usually takes years. Researchers are speeding it up as much as they can, but it still might take 12 to 18 months to find a vaccine that works and is safe.
      </p>

      <h1>Donations for COVID-19 Patients</h1>
      <p>
      The COVID-19 pandemic marks an unprecedented time in modern history that will require the best of humanity to overcome. Your donation to this fund will help stop COVID-19's spread and protect us all.
      </p>
      <button className='App-button'
            onClick={()=>{setDonate(donate+1);Alert()}}>
        Donate Rs.1
      </button>
      <h3>Total Donations: Rs.{donate}</h3>
      <footer>
      <p><button className='App-button'
       onClick={()=> {setDisplay(!display);Alert1()}}>
          Click Here To Wear A Mask!
      </button>
      </p>
    </footer>
    </div>
  )
}

export default App;
