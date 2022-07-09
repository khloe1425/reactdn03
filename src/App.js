import logo from './logo.svg';
import './App.css';
import NavbarRCC from './Components/NavbarRCC';
import CardRFC from './Components/CardRFC';
import HomeComponent from './BTComponent/HomeComponent';
import DataBinding from './DataBinding/DataBinding';
import HandleEvent from './HandleEvent/HandleEvent';
import StyledComponent from './StyledComponent/StyledComponent';

//App là component chính sẽ chứa tất cả các component chức năng của dự án
function App() {
  return (
    <div className="App">
      <StyledComponent/>
      <h1 className='heading1'>AppComponent</h1>
      {/* <HandleEvent/> */}
      {/* <DataBinding/> */}
      {/* <HomeComponent/> */}
        {/* <NavbarRCC></NavbarRCC> */}
        {/* <NavbarRCC/>
        <CardRFC/> */}
    </div>
  );
}

export default App;
