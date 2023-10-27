import HeaderComponent from "./components/HeaderComponent";
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import HomeComponent from "./components/HomeComponent";
import AboutUsComponent from "./components/AboutUsComponent";
import LawFirmComponent from "./components/LawFirmComponent";
import SpeciallationComponent from "./components/SpeciallationComponent";
import CustomerOpinionComponent from "./components/CustomerOpinionComponent";
import BlogComponent from "./components/BlogComponent";
import { FooterComponent } from "./components/FooterComponent";

function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <HomeComponent/>
      <AboutUsComponent/>
      <LawFirmComponent/>
      <SpeciallationComponent/>
      <CustomerOpinionComponent/>
      <BlogComponent/>
      <FooterComponent/>
    </div>
  );
}

export default App;
