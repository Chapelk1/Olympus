import {
  Head,
  Nav,
  List,
  Item,
  Link,
  Btn,
  Container,
  IconBurger,
  BtnOpenMenu,
  BtnCloseMenu,
  IconClose,
} from "./header.styled";
import sprite from '../../img/olympus.svg';
import MobileMenu from '../MobileMenu/MobileMenu'
import { useState } from "react";

const Header = () => {
  const [viewWidth, setViewWidth] = useState(window.innerWidth);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const render = viewWidth >= 768 ? true : false;

  const toggleOpenMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  }
  const resizeWidthWindow = () => {
    setViewWidth(window.innerWidth);
  }
  window.addEventListener("resize", resizeWidthWindow); 



  return (
    <Head>
      <Container>
        {render && (
          <>
            <Nav>
              <List>
                <Item>
                  <Link href="./">STAKE</Link>
                </Item>
                <Item>
                  <Link href="./">BOND</Link>
                </Item>
                <Item>
                  <Link href="./">Flex loans</Link>
                </Item>
                <Item>
                  <Link href="./">Olympus Pro</Link>
                </Item>
                <Item>
                  <Link href="./">Blog</Link>
                </Item>
                <Item>
                  <Link href="./">Transparency</Link>
                </Item>
                <Item>
                  <Link href="./">GOVERNANCE</Link>
                </Item>
              </List>
            </Nav>
            <Btn>Enter App</Btn>
          </>
        )}
        {!render && (
          <>
            <BtnOpenMenu onClick={toggleOpenMenu}>
              <IconBurger>
                <use href={sprite + "#icon-burger"}></use>
              </IconBurger>
            </BtnOpenMenu>

            <MobileMenu isOpen={menuIsOpen}>
              <BtnCloseMenu onClick={toggleOpenMenu}>
                <IconClose>
                  <use href={sprite + "#icon-close"}></use>
                </IconClose>
              </BtnCloseMenu>
              <Nav>
                <List>
                  <Item>
                    <Link href="./">STAKE</Link>
                  </Item>
                  <Item>
                    <Link href="./">BOND</Link>
                  </Item>
                  <Item>
                    <Link href="./">Flex loans</Link>
                  </Item>
                  <Item>
                    <Link href="./">Olympus Pro</Link>
                  </Item>
                  <Item>
                    <Link href="./">Blog</Link>
                  </Item>
                  <Item>
                    <Link href="./">Transparency</Link>
                  </Item>
                  <Item>
                    <Link href="./">GOVERNANCE</Link>
                  </Item>
                </List>
              </Nav>
              <Btn>Enter App</Btn>
            </MobileMenu>
          </>
        )}
      </Container>
    </Head>
  );
};

export default Header;
