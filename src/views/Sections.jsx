import React from "react";
import ScrollNavbar from "components/Navbars/ScrollNavbar.jsx";
import DemoFooter from "components/Footers/DemoFooter.jsx";
import Features from "./SectionsSections/Features.jsx";
import Pricing from "./SectionsSections/Pricing.jsx";

class Sections extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.wrapper.scrollTop = 0;
    var href = window.location.href.substring(
      window.location.href.lastIndexOf("#") + 1
    );
    if (
      window.location.href.lastIndexOf("#") > 0 &&
      document.getElementById(href) !== null
    ) {
      document.getElementById(href).scrollIntoView();
    }
    document.body.classList.add("sections-page");
  }
  componentWillUnmount() {
    document.body.classList.remove("sections-page");
  }
  render() {
    return (
      <>
        {/* Navbar START */}
        <ScrollNavbar />
        {/* Navbar END */}
        <div className="wrapper" ref="wrapper">
          <div className="section-space" />
          <Features />
          <Pricing />
          <DemoFooter />
        </div>
      </>
    );
  }
}

export default Sections;
