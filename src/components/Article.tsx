import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { ArticleInterface } from "../interfaces/ArticleInterface";
import { Link } from "react-router-dom";

interface ArticleProps {
  articleDetails: ArticleInterface;
}

const Article = function ({ articleDetails }: ArticleProps) {
  return (
    <Card>
      <Card.Img variant="top" src={articleDetails.image_url} />
      <Card.Body>
        <Card.Title>{articleDetails.title}</Card.Title>
        <Card.Text>{articleDetails.summary}</Card.Text>
        <Link to={"/details/" + articleDetails.id}>
          <Button variant="info">Show Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Article;
