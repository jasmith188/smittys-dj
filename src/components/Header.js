import React from 'react';
import { Menu, Container, Dropdown } from 'semantic-ui-react';

const Header = () => {
  return (
    <div>
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item>
            {/* <Image
              size="mini"
              src="/logo.png"
              style={{ marginRight: '1.5em' }}
            /> */}
            Smitty's DJ
          </Menu.Item>
          <Menu.Item>Home</Menu.Item>
          <Menu.Item>About</Menu.Item>
          <Dropdown item simple text="Dropdown">
            <Dropdown.Menu>
              <Dropdown.Item>List Item</Dropdown.Item>
              <Dropdown.Item>List Item</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>Header Item</Dropdown.Header>
              <Dropdown.Item>
                <i className="dropdown icon" />
                <span className="text">Submenu</span>
                <Dropdown.Menu>
                  <Dropdown.Item>List Item</Dropdown.Item>
                  <Dropdown.Item>List Item</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Item>
              <Dropdown.Item>List Item</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Menu>
    </div>
  );
};

export default Header;
