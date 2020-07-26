import React from "react";
import ColorNavbar from "components/Navbars/ColorNavbar.jsx";

class Presentation extends React.Component {
  componentDidMount() {
    document.body.classList.add("presentation-page");
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.wrapper.scrollTop = 0;
  }
  componentWillUnmount() {
    document.body.classList.remove("presentation-page");
  }
  render() {
    return (
      <>
        <ColorNavbar />
        <div className="wrapper" ref="wrapper"></div>
      </>
    );
  }
}

export default Presentation;
