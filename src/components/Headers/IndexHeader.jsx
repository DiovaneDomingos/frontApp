import React from "react";
import { Container } from "reactstrap";
class Index extends React.Component {
  componentDidMount() {
    document.body.classList.add("index-page");
  }
  componentWillUnmount() {
    document.body.classList.remove("index-page");
  }
  render() {
    return (
      <>
        <div className="page-header">
          <div className="squares square1" />
          <div className="squares square2" />
          <div className="squares square3" />
          <div className="squares square4" />
          <div className="squares square5" />
          <div className="squares square6" />
          <div className="squares square7" />
          <Container>
            <div className="content-center brand">
              <h1 className="h1-seo">Easy Open</h1>
              <h3>Uma maneira facil de integrar o Open Bank</h3>
            </div>
          </Container>
        </div>
      </>
    );
  }
}
export default Index;
