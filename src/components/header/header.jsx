import { Head, Nav, List, Item, Link, Btn, Container } from "./header.styled";

const Header = () => {
  return (
    <Head>
      <Container>
        <Nav>
          <List>
            <Item>
              <Link href="/">STAKE</Link>
            </Item>
            <Item>
              <Link href="/">BOND</Link>
            </Item>
            <Item>
              <Link href="/">Flex loans</Link>
            </Item>
            <Item>
              <Link href="/">Olympus Pro</Link>
            </Item>
            <Item>
              <Link href="/">Blog</Link>
            </Item>
            <Item>
              <Link href="/">Transparency</Link>
            </Item>
            <Item>
              <Link href="/">GOVERNANCE</Link>
            </Item>
          </List>
        </Nav>
        <Btn>Enter App</Btn>
        
      </Container>
    </Head>
  );
};

export default Header;
