import React from 'react';
import {
  Container,
  Segment,
  Grid,
  List,
  Header,
  Divider,
  Image,
} from 'semantic-ui-react';

const Footer = () => {
  return (
    <div>
      <Segment
        inverted
        vertical
        style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
      >
        <Container textAlign="center">
          <Grid divided inverted stackable>
            <Grid.Column width={5}>
              <Header inverted as="h4" content="Contact Me" />
              <List link inverted>
                <List.Item as="a">
                  <a href="tel:+17049098461">704.909.8461</a>
                </List.Item>
                <List.Item as="b">
                  <a href="mailto:smittysdj@gmail.com">smittysdj@gmail.com</a>
                </List.Item>
              </List>
            </Grid.Column>

            <Grid.Column width={10}>
              <Header inverted as="h4" content="Social Media" />
              <p>icon</p>
              <p>icon</p>
            </Grid.Column>
          </Grid>

          <Divider inverted section />
          <Image centered size="mini" src="/logo.png" />
          <List horizontal inverted divided link size="small">
            <List.Item as="a" href="#">
              Site Map
            </List.Item>
            <List.Item as="a" href="#">
              Contact Us
            </List.Item>
            <List.Item as="a" href="#">
              Terms and Conditions
            </List.Item>
            <List.Item as="a" href="#">
              Privacy Policy
            </List.Item>
          </List>
        </Container>
      </Segment>
    </div>
  );
};

export default Footer;
