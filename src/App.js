
import './App.css';
// import Card from "./Card"
import image1 from './images/landing.png';

function App() {


  return (
    <div className="App">
    
      <header className="header">
        <img src={image1} alt="" className="card-img" />
        <div className="title-section">
          <h1 className="heading-text1">Imagine if </h1>
          <h1 className="heading-text2">Snapchat</h1>
          <h1 className="heading-text1">had events.</h1>
          <p className="title-subtxt">Easily host and share events with your friends across any social media.</p>
          <img src={image1} alt="" className="card-img2" />
          <div className="create-button">🎉 Create my event</div>
        </div>
        
      </header>
      
      
    </div>
  );
}

export default App;
