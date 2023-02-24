import { useState } from "react";
import { Form, Col, Row, Container } from "react-bootstrap";
import axios, { formToJSON } from "axios";
const randomId = () =>
  Math.floor(Math.random() * 100) * Math.floor(Math.random() * 100);

export const CampForm = () => {
  const [campsite, setCampsite] = useState(null);

  const handleOnSubmit = e => {
    e.preventDefault();

    const targetObject = {
      id: randomId(),
      title: e.target.title.value,
      location: e.target.location.value,
      price: e.target.price.value,
      description: e.target.description.value,
    };
    setCampsite(targetObject);
    axios.post("/campsites", targetObject);
    e.target.reset();
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Form className="col-12" onSubmit={handleOnSubmit}>
              <div className="col-6">
                <label>Title</label>
                <br />
                <input type={"text"} id="title" name="title" />
                <br />
              </div>
              <div className="col-6">
                <label>Location</label>
                <br />
                <input type={"text"} id="location" name="location" />
                <br />
              </div>
              <div className="col-6">
                <label>Price</label>
                <br />
                <input type={"number"} id="price" name="price" />
                <br />
              </div>
              <div className="col-6">
                <label>Description</label>
                <br />
                <input type={"text"} id="description" name="description" />
                <br />
              </div>

              <br />
              <button>submit</button>
            </Form>
          </Col>
          <Col>
            <pre>{campsite && JSON.stringify(campsite, null, 4)} </pre>
          </Col>
        </Row>
      </Container>
    </>
  );
};
