import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
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
        <Card.Text>
          {articleDetails.summary} | {articleDetails.news_site} | {}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default DetailCard;
