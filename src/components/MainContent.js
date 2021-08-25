import React from 'react';
import { Container } from 'semantic-ui-react';
import '../components/MainContent.css';

const MainContent = () => {
  return (
    <Container className="main-content">
      <h1>Smitty's DJ</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
        cumque adipisci dolor maxime assumenda, cupiditate doloribus temporibus
        tempora nobis illo voluptatibus neque esse. Iusto quia assumenda error
        minima unde veritatis?
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel nisi
        deleniti iusto voluptatum dolor minus asperiores odio! Nesciunt
        consectetur perferendis vero optio quibusdam reiciendis quo eaque quos
        voluptate dignissimos. Optio.
      </p>
    </Container>
  );
};

export default MainContent;
