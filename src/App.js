import './App.css';
import { useEffect } from 'react';
import PortalAR from './components/portalAR/portalAR';

function App() {
  useEffect(() => {
    <PortalAR/>
  })
  return(
    <>
    <h2>Words on App js</h2>
    <PortalAR/>
    </>
  )
}

export default App;
