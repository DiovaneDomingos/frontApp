import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

class Pricing extends React.Component {
  state = {
    firstTabs: "1",
    secondTabs: "2",
    thirdTabs: "1",
  };
  toggle = (tabName, tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        [tabName]: tab,
      });
    }
  };
  render() {
    return (
      <>
        <div className="cd-section" id="pricing">
          <div className="pricing-3" id="pricing-3">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="6">
                  <h2 className="title">Escolha o melhor preço para você</h2>
                </Col>
              </Row>
              <div className="space-50" />
              <Row>
                <Container>
                  <Card>
                    <Row>
                      <Col className="pr-0" md="4">
                        <Card className="card-pricing card-plain">
                          <CardHeader>
                            <h4 className="title">Básico</h4>
                            <p className="description">Para Devs</p>
                            <CardTitle tag="h1">$299</CardTitle>
                            <h5 className="mt-2">Anualmente</h5>
                          </CardHeader>
                          <CardBody>
                            <ul>
                              <li>
                                <i className="tim-icons icon-check-2" />{" "}
                                Requisoções limitadas
                              </li>
                              <li>
                                <i className="tim-icons icon-email-85" />{" "}
                                Respostas em tempo real
                              </li>
                              <li>
                                <i className="tim-icons icon-alert-circle-exc" />{" "}
                                Sem suporte
                              </li>
                            </ul>
                            <Button
                              className="mt-4"
                              color="primary"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Compre agora
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col className="p-0" md="4">
                        <Card className="card-pricing card-plain">
                          <CardHeader>
                            <h4 className="title">Intermediário</h4>
                            <p className="description">Para devs e fin-techs</p>
                            <CardTitle tag="h1">$499</CardTitle>
                            <h5 className="mt-2">Anualmente</h5>
                          </CardHeader>
                          <CardBody>
                            <ul>
                              <li>
                                <i className="tim-icons icon-check-2" />{" "}
                                Requisoções ilimitadas
                              </li>
                              <li>
                                <i className="tim-icons icon-email-85" />{" "}
                                Respostas em tempo real
                              </li>
                              <li>
                                <i className="tim-icons icon-alert-circle-exc" />{" "}
                                Suporte 12 horas
                              </li>
                            </ul>
                            <Button
                              className="mt-4"
                              color="primary"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Compre agora
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col className="pl-0" md="4">
                        <Card className="card-pricing card-plain">
                          <CardHeader>
                            <h4 className="title">Pro</h4>
                            <p className="description">
                              Para dev, fintechs e instuições financeiras
                            </p>
                            <CardTitle tag="h1">$599</CardTitle>
                            <h5 className="mt-2">Anualmente</h5>
                          </CardHeader>
                          <CardBody>
                            <ul>
                              <li>
                                <i className="tim-icons icon-check-2" />{" "}
                                Requisoções ilimitadas
                              </li>
                              <li>
                                <i className="tim-icons icon-email-85" />{" "}
                                Respostas em tempo real
                              </li>
                              <li>
                                <i className="tim-icons icon-alert-circle-exc" />{" "}
                                Suporte 24 horas
                              </li>
                            </ul>
                            <Button
                              className="mt-4"
                              color="primary"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Compre agora
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Card>
                </Container>
              </Row>
            </Container>
          </div>
        </div>
      </>
    );
  }
}

export default Pricing;
