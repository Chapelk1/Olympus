import {
  Foot,
  WrapIcon,
  Icon,
  List,
  Item,
  SubTitle,
  Link,
  Container,
  Btn,
} from "./footer.styled";
import sprite from "../../img/olympus.svg";

const Footer = () => {
  return (
    <Foot>
      <Container>
        <WrapIcon>
          <Btn>
            <Icon>
              <use href={sprite + "#icon-twit"}></use>
            </Icon>
          </Btn>
          <Btn className="icon-2">
            <Icon>
              <use href={sprite + "#icon-youtube"}></use>
            </Icon>
          </Btn>
        </WrapIcon>
        <List>
          <Item>
            <SubTitle>Products</SubTitle>
            <Link href="./">Olympus Pro</Link>
            <Link href="./">STAKING</Link>
            <Link href="./">BONDS</Link>
          </Item>
          <Item>
            <SubTitle>Learn</SubTitle>
            <Link href="./">
              DOCUMENTATION
            </Link>
            <Link href="./">BLOG</Link>
            <Link href="./">MEDIUM</Link>
          </Item>
          <Item>
            <SubTitle>Contact us</SubTitle>
            <Link href="./">JOIN OLYMPUS DISCORD</Link>
            <Link href="./">Media inquiries</Link>
          </Item>
        </List>
      </Container>
    </Foot>
  );
};

export default Footer;
