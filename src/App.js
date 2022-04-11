import 'bootstrap/dist/css/bootstrap.min.css';
import SectionOne from './components/MintPage/SectionOne';
import SectionTwo from './components/MintPage/SectionTwo';
import LoginPage from './components/LoginPage/LoginPage.js';
window.Buffer = window.Buffer || require("buffer").Buffer;


function App() {
  if (!window.walletConnection.isSignedIn()) { return (<LoginPage />) }
  return (
    <main className="container-xxl bg-dark" style={{display: "grid", height: "100vh", overflow: "hidden"}}>
      <SectionOne />
      <SectionTwo />          
    </main>
  );
}

export default App;
