import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Container";

const Footer = function () {
  return (
    <Container fluid className="mt-5 mb-0 py-2 text-center bg-black text-white">
      <Row className="d-flex">
        <Col xs={12} md={2} className="mt-4">
          <p className="text-decoration-none text-white ">Work white us</p>
        </Col>
        <Col xs={12} md={2} className="mt-4">
          <p className="text-decoration-none text-white ">Hepl center</p>
        </Col>
        <Col xs={12} md={2} className="mt-4">
          <p className="text-decoration-none text-white ">Privacy</p>
        </Col>
        <Col xs={12} md={2} className="mt-4">
          <p className="text-decoration-none text-white ">Contact us</p>
        </Col>
        <Col xs={12} md={2} className="mt-4">
          <p className="text-decoration-none text-white ">Cookie Preferences</p>
        </Col>
        <Col xs={12} md={2} className="mt-4">
          <p className="text-decoration-none text-white ">Legal Notices</p>
        </Col>
      </Row>
      <Row>
        <Col className="mt-4 border-top pt-2">
          <p className="mt-2"> &copy; SpaceFlight </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
