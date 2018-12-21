import React from 'react';
import { Button, Form, FormGroup, Input, Container, Col ,Label, Jumbotron  } from 'reactstrap';

const Home = (props) => {
  return (
    <Jumbotron>
      <Form inline>
        <FormGroup>
          <Label for="exampleEmail" hidden>Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
        </FormGroup>
        {' '}
        <FormGroup>
          <Label for="examplePassword" hidden>Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Password" />
        </FormGroup>
        {' '}
        <Button>Submit</Button>
      </Form>
    </Jumbotron>
  );
}

export default Home;
