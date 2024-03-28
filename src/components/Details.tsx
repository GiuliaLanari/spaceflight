import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { ArticleInterface } from "../interfaces/ArticleInterface";

import { useEffect } from "react";
import DetailCard from "./DetailCard";

const Details = function () {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const [objArticles, setObjArticles] = useState<ArticleInterface | null>(null);

  const fetchArticles = function () {
    fetch("https://api.spaceflightnewsapi.net/v4/articles/" + params.id)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Ci sono problemi nel caricamento!");
        }
      })
      .then((objArticles: ArticleInterface) => {
        setObjArticles(objArticles);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("errore", error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchArticles();
  }, [params.id]);

  return (
    <>
      {isLoading ? (
        <div className="d-flex justify-content-cente">
          <Spinner animation="border" variant="info" />
        </div>
      ) : (
        <Container className="mb-5">
          <Row className="justify-content-center">
            <h1 className="text-center my-5 display-4 text-white">Details of -nome dell'articolo-</h1>

            {objArticles && (
              <Col xs={12} md={8}>
                <DetailCard articleDetails={objArticles} />
              </Col>
            )}
          </Row>
        </Container>
      )}
    </>
  );
};

export default Details;
