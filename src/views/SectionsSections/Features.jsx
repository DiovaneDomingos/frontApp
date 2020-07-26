import React from "react";
import { Badge, Button, Container, Row, Col } from "reactstrap";

class Features extends React.Component {
  render() {
    return (
      <>
        <div className="cd-section" id="features">
          {/* ********* FEATURES 1 ********* */}
          <div className="features-1">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="8">
                  <Badge color="primary" pill>
                    Insight
                  </Badge>
                  <h1 className="title">
                    Beneficios para todos os relacionamentos de Open Banking
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <div className="info info-hover">
                    <div className="icon icon-primary">
                      <img
                        width="100px"
                        height="100px"
                        alt="..."
                        src={require("assets/img/api-tr.png")}
                      />
                    </div>
                    <h4 className="info-title">Integração de API</h4>
                    <p className="description">
                      Todas as informações de maneira padronizada em um único
                      lugar.
                    </p>
                  </div>
                </Col>
                <Col md="4">
                  <div className="info info-hover">
                    <div className="icon icon-success">
                      <img
                        alt="..."
                        width="100px"
                        height="100px"
                        src={require("assets/img/data.png")}
                      />
                    </div>
                    <h4 className="info-title"> Sincronização e Performance</h4>
                    <p className="description">
                      Todas as informações sincronizadas e resposta de alta
                      performance
                    </p>
                  </div>
                </Col>
                <Col md="4">
                  <div className="info info-hover">
                    <div className="icon icon-warning">
                      <img
                        alt="..."
                        width="100px"
                        height="100px"
                        src={require("assets/img/shield.png")}
                      />
                    </div>
                    <h4 className="info-title">Informações Seguras </h4>
                    <p className="description">
                      Todos os dados e informações de forma segura.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          {/* ********* END FEATURES 1 ********* */}
          {/* ********* FEATURES 2 ********* */}
          {/* ********* FEATURES 4 ********* */}
          <div className="features-4">
            <Container>
              <Row className="align-items-center">
                <Col className="mr-auto text-left" lg="3">
                  <h1 className="title">Porque usar?</h1>
                  <p className="description">
                    De maneira simples proporcionamos integração com as
                    informções das instituições financeiras, Essa integração
                    soluciona a divergência das respostas das API's, cada
                    instituição financeira tem um API com uma estrutura
                    diferente, o Easy Bank API integra e padroniza estas
                    informações facilitando o uso do Open Banking.
                  </p>
                </Col>
                <Col className="p-sm-0" lg="8">
                  <Row>
                    <Col md="6">
                      <div className="info info-primary">
                        <div className="icon icon-white">
                          <i className="tim-icons icon-satisfied" />
                        </div>
                        <h4 className="info-title">Fácil e intuitivo</h4>
                        <p className="description">
                          Ganhos de performance e no desenvolvimento
                        </p>
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="info info-primary">
                        <div className="icon icon-white">
                          <i className="tim-icons icon-palette" />
                        </div>
                        <h4 className="info-title">Moderno</h4>
                        <p className="description">
                          Usamos somente tecnologias novas e seguimos os
                          melhores padrões
                        </p>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <div className="info info-primary">
                        <div className="icon icon-white">
                          <i className="tim-icons icon-user-run" />
                        </div>
                        <h4 className="info-title">
                          Não perca tempo desenvolvendo
                        </h4>
                        <p className="description">
                          Nós fazemos todo o trabalho duro para você
                        </p>
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="info info-primary">
                        <div className="icon icon-white">
                          <i className="tim-icons icon-bulb-63" />
                        </div>
                        <h4 className="info-title">Uma boa idéia</h4>
                        <p className="description">
                          Economize tempo para fazer requisições de diferentes
                          lugares
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
          {/* ********* END FEATURES 4 ********* */}
          {/* ********* FEATURES 5 ********* */}
          <div className="features features-5">
            <Container>
              <Row className="align-items-center">
                <Col lg="6">
                  <div className="featured-image">
                    <img
                      alt="..."
                      height="600"
                      src={require("assets/img/future.jpg")}
                      width="500"
                    />
                  </div>
                </Col>
                <Col className="mt-md-5" lg="6">
                  <h6 className="category">Você precisa saber disto!</h6>
                  <h1 className="title">Nosso Propósito</h1>
                  <Row>
                    <Col lg="6" md="6">
                      <div className="info">
                        <h4 className="info-title">
                          Facilidade de Implantação
                        </h4>
                        <p className="description">
                          De forma rápida você obtem os dados sem grande
                          esforços para obter uma resposta.
                        </p>
                      </div>
                      <div className="info">
                        <h4 className="info-title">Eficiência</h4>
                        <p className="description">
                          Eficiência na resposta das informações de maneira
                          correta e segura.
                        </p>
                      </div>
                    </Col>
                    <Col lg="6" md="6">
                      <div className="info">
                        <h4 className="info-title">Suporte</h4>
                        <p className="description">
                          Em caso de dúvida ou desespero podemos te ajudar.
                          Ficamos disponível 24 horas
                        </p>
                      </div>
                      <div className="info">
                        <h4 className="info-title">Qualidade</h4>
                        <p className="description">
                          A qualidade que vai do desenvolvimento ao cliente
                          final. Código simples e eiew otimizadas.
                        </p>
                      </div>
                    </Col>
                    <Button
                      className="btn-link ml-4"
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      O nosso diferencial{" "}
                      <i className="tim-icons icon-double-right" />
                    </Button>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
        </div>{" "}
      </>
    );
  }
}

export default Features;
