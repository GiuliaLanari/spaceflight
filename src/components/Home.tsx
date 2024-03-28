import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import Article from "./Article";

import { useEffect, useState } from "react";
import { ArticleInterface, Data } from "../interfaces/ArticleInterface";

const Home = function () {
  const [isLoading, setIsLoading] = useState(true);
  const [objArticles, setObjArticles] = useState<ArticleInterface[]>([]);

  const fetchArticles = function () {
    fetch("https://api.spaceflightnewsapi.net/v4/articles")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Ci sono problemi nel caricamento!");
        }
      })
      .then((objArticles: Data) => {
        setObjArticles(objArticles.results);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("errore", error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="d-flex justify-content-cente">
          <Spinner animation="border" variant="info" />
        </div>
      ) : (
        <Container>
          <Row className="justify-content-center row-gap-4">
            <h1 className="text-center my-2 display-4 text-white"> News: Space-flight</h1>
            {objArticles.map((a) => (
              <Col xs={12} md={4} lg={3} key={a.id}>
                <Article articleDetails={a} />
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </>
  );
};

export default Home;
