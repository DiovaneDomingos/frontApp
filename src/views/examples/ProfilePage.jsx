import React from "react";
import classnames from "classnames";
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";
import ColorNavbar from "components/Navbars/ColorNavbar.jsx";
import DemoFooter from "components/Footers/DemoFooter.jsx";
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";

class ProfilePage extends React.Component {
  state = {
    tabs: 1,
    activeIndex: 0,
  };
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.wrapper.scrollTop = 0;
    document.body.classList.add("profile-page");
  }
  componentWillUnmount() {
    document.body.classList.remove("profile-page");
  }
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index,
    });
  };
  onExiting = () => {
    this.animating = true;
  };

  onExited = () => {
    this.animating = false;
  };

  goToIndex = (newIndex) => {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  };

  data = {
    labels: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
    ],
    datasets: [
      {
        label: "Quantidade requisições mensal",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [32, 65, 59, 80, 81, 56, 55],
      },
    ],
  };
  dataLine = {
    labels: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
    ],
    datasets: [
      {
        label: "Número de requisições",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [36, 40, 55, 67, 80, 24, 68],
      },
    ],
  };

  render() {
    return (
      <>
        <ColorNavbar />
        <div className="wrapper" ref="wrapper">
          <div className="page-header">
            <img
              alt="..."
              className="dots"
              src={require("assets/img/dots.png")}
            />
            <img
              alt="..."
              className="path"
              src={require("assets/img/path4.png")}
            />

            <Container className="align-items-center">
              <Row>
                <Col lg="6" md="6">
                  <h1 className="profile-title text-left">Maria Alice</h1>
                  <h5 className="text-on-back">01</h5>
                  <p className="profile-description">
                    Olá, Maria, aqui você encontrará todos os aspectos de sua
                    conta relacionadas as suas Apis.
                  </p>
                </Col>
                <Col className="ml-auto mr-auto" lg="4" md="6">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid rounded-circle"
                        src={require("assets/img/mike.jpg")}
                      />
                      <h4 className="title">Transações</h4>
                    </CardHeader>
                    <CardBody>
                      <Nav
                        className="nav-tabs-primary justify-content-center"
                        tabs
                      >
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.tabs === 1,
                            })}
                            onClick={(e) => this.toggleTabs(e, "tabs", 1)}
                            href="#pablo"
                          >
                            Carteira
                          </NavLink>
                        </NavItem>
                      </Nav>
                      <TabContent
                        className="tab-subcategories"
                        activeTab={"tab" + this.state.tabs}
                      >
                        <TabPane tabId="tab1">
                          <Table className="tablesorter" responsive>
                            <thead className="text-primary">
                              <tr>
                                <th className="header">BANCO</th>
                                <th className="header">
                                  VALOR TOTAL NAS CONTAS
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>BRADESCO</td>
                                <td>R$ 100,00</td>
                              </tr>
                              <tr>
                                <td>NUBANK</td>

                                <td>R$ 1.500,53</td>
                              </tr>
                              <tr>
                                <td>INTER</td>

                                <td>R$ 50,26</td>
                              </tr>
                            </tbody>
                          </Table>
                        </TabPane>
                      </TabContent>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
          <Container>
            <Row className="justify-content-between">
              <Col md="6">
                <Row className="justify-content-between align-items-center">
                  <div>
                    <Line
                      data={this.dataLine}
                      height="500px"
                      width="650px"
                      options={{}}
                    />
                  </div>
                </Row>
              </Col>
              <Col md="5">
                <h2 className="profile-title text-left">
                  Requisições por pessoas jurídicas
                </h2>
                <h5 className="text-on-back">02</h5>
                <p className="profile-description text-left"></p>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row className="justify-content-between">
              <Col md="6">
                <h2 className="profile-title text-left">
                  Quantidades de requisições mensal
                </h2>
                <h5 className="text-on-back">03</h5>
                <p className="profile-description text-left"></p>
              </Col>
              <Col md="5">
                <Row className="justify-content-between align-items-center">
                  <div>
                    <Bar
                      data={this.data}
                      height="500px"
                      width="650px"
                      options={{}}
                    />
                  </div>
                </Row>
              </Col>
            </Row>
          </Container>

          <DemoFooter />
        </div>
      </>
    );
  }
}

export default ProfilePage;
