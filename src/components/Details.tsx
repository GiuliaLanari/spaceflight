import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { ArticleInterface } from "../interfaces/ArticleInterface";

import { useEffect } from "react";
import DetailCard from "./DetailCard";

const Details = function () {
  const params = useParams();

  const [arrArticles, setArrArticles] = useState<ArticleInterface[]>([]);

  const fetchArticles = function () {
    fetch("https://api.spaceflightnewsapi.net/v4/articles/" + params)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Ci sono problemi nel caricamento!");
        }
      })
      .then((arrArticles: ArticleInterface[]) => {
        setArrArticles(arrArticles);
      })
      .catch((error) => console.log("errore", error));
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <Container>
      <Row className="justify-content-center">
        <h1 className="text-center my-5 display-4">Details of -nome dell'articolo-</h1>

        {arrArticles.map((a) => (
          <Col xs={12} md={8}>
            <DetailCard articleDetails={a} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Details;
