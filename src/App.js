import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Landling from "./Components/Landling/Landling";
import SignUp from "./Components/Signup/Signup";
import Signin from "./Components/Signin/Signin";
import Movies from "./Components/Movies/Movies";
import Faq from "./Components/FAQ/Faq";
import Podcast from "./Components/Movies/Podcast";
import EBook from "./Components/Movies/E-Book";
import Subscription from "./Components/Subscription/Subscription";
import AccInfo from "./Components/Account Info/Acc-Info";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landling />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<Signin/>}/>
          <Route path="/movies" element={<Movies/>}/>
          <Route path="/faq" element={<Faq/>}/>
          <Route path="/podcast" element={<Podcast/>}/>
          <Route path="/e-books" element={<EBook/>}/>
          <Route path="/subscription" element={<Subscription/>}/>
          <Route path="/account-information" element={<AccInfo/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
