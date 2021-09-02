 
import './App.css';
import Header from './components/Header.js'
import Items from './components/Items'
import firstpage from './assests/rolls.jpg'
import services from './assests/services.jpg'
import aboutus from './assests/aboutus.jpg'
import contactus from './assests/countactus.jpg'

function App() {
  return (
    <div className="App">
      <Header />
      
      <div className="app__itemsContainer">
      <Items
        title = ""
        desc = ""
        desclink = ''
        backgroundImg = {firstpage}
        leftbtnTxt = 'About Us'
        leftbtnLink = ''
        rightbtnTxt ='Learn More'
        rightbtnLink = ''
        twoButtons = 'true'
        first
      />
      <Items
        title = ""
        desc = ""
        desclink = ''
        backgroundImg = {services}
        leftbtnTxt = 'About Us'
        leftbtnLink = ''
        rightbtnTxt ='Learn More'
        rightbtnLink = ''
        twoButtons = 'false'
       
      />
      <Items
        title = ""
        desc = ""
        desclink = ''
        backgroundImg = {aboutus}
        leftbtnTxt = 'About Us'
        leftbtnLink = ''
        rightbtnTxt ='Learn More'
        rightbtnLink = ''
        twoButtons = 'false'
       
      />
      <Items
        title = ""
        desc = ""
        desclink = ''
        backgroundImg = {contactus}
        leftbtnTxt = 'About Us'
        leftbtnLink = ''
        rightbtnTxt ='Learn More'
        rightbtnLink = ''
        twoButtons = 'false'
      
      />
      </div>
    </div>
    
  );
}

export default App;
