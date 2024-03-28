import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import { ArticleInterface } from "../interfaces/ArticleInterface";

interface ArticleProps {
  articleDetails: ArticleInterface;
}

const DetailCard = function ({ articleDetails }: ArticleProps) {
  return (
    <Card>
      <Card.Img variant="top" src={articleDetails.image_url} />
      <Card.Body>
        <Card.Title>{articleDetails.title}</Card.Title>
        <Card.Text>{articleDetails.summary}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{articleDetails.news_site}</ListGroup.Item>
        <ListGroup.Item>{articleDetails.updated_at}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Link to={articleDetails.url}>Web site!</Link>
      </Card.Body>
    </Card>
  );
};

export default DetailCard;
