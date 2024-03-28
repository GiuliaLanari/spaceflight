import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { ArticleInterface } from "../interfaces/ArticleInterface";
import { Link } from "react-router-dom";

interface ArticleProps {
  articleDetails: ArticleInterface;
}

const Article = function ({ articleDetails }: ArticleProps) {
  return (
    <Card style={{ height: "100%" }}>
      <Card.Img variant="top" src={articleDetails.image_url} style={{ height: "10rem", objectFit: "cover" }} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{articleDetails.title}</Card.Title>
        <Card.Text style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {articleDetails.summary}
        </Card.Text>
        <Link to={"/details/" + articleDetails.id} className="mt-auto">
          <Button variant="info">Show Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Article;
