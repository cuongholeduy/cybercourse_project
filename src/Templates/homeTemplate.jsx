import React from "react";
import Header from "../Components/Header/header";
import Footer from "../Components/Footer/footer";

const HomeTemplate = (Component) => {
  return (props) => {
    return (
      <div>
        <Header />
        <Component {...props} />
        <Footer />
      </div>
    );
  };
};

export default HomeTemplate;
