import "./App.css";
import "./commonResource/css/bootstrap.css";
import "./commonResource/css/styles.css";
import SectionOne from "./commonResource/SectionOne/SectionOne";
import SectionTwo from "./commonResource/SectionTwo/SectionTwo";
import SectionThree from "./commonResource/SectionThree/SectionThree";
import SectionFour from "./commonResource/SectionFour/SectionFour";
import SectionFive from "./commonResource/SectionFive/SectionFive";
import SectionSix from "./commonResource/SectionSix/SectionSix";

import Mac from "./Pages/Mac/Mac";
import Iphone from "./Pages/Iphone/Iphone";
import ProductPage from "./Pages/Productpage/Productpage";
import Four04 from "./Pages/Four04/Four04";
import { Route, Routes } from "react-router-dom";

// import Youtube from "./commonResource/Youtube/Youtube";

import SharedLayout from "./Pages/SharedLayout";
// import SlideShow from "./commonResource/CarouselSlides/CarouselSlides";

function App() {
  return (
    <>
      {/* <AlertSection /> */}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            path="/"
            element={[
              <SectionOne />,
              <SectionTwo />,
              <SectionThree />,
              <SectionFour />,
              <SectionFive />,
              <SectionSix />,
              // <SlideShow />,
              // <Youtube />,
            ]}
          />
          <Route path="mac" element={<Mac />} />
          <Route path="Iphone" element={<Iphone />} />
          <Route path="/iphone/:pid" element={<ProductPage />} />
          <Route path="*" element={<Four04 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
