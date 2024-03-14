import {
  Section,
  Container,
  Title,
  List,
  TitleItem,
  Descr,
  Img,
} from "./faq.styled";
import Item from "../ItemFaQ/Item";
import img6 from "../../img/IMAGE06.png";
import img7 from "../../img/IMAGE07.png";

const Faq = () => {
  return (
    <Section>
      <Container>
        <Img src={img6} top={"316"} left={"-244"} />
        <Img src={img7} top={"610"} left={"1012"} />
        <Title>FAQ</Title>
        <List>
          <Item>
            <TitleItem>What is Olympus?</TitleItem>
            <Descr>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut,
              officiis eaque. Voluptatum, officiis?
            </Descr>
          </Item>
          <Item>
            <TitleItem>What is the goal of Olympus?</TitleItem>
            <Descr>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis?
            </Descr>
          </Item>
          <Item>
            <TitleItem>Why do we need Olympus in the first place?</TitleItem>
            <Descr>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              architecto deserunt ut sint alias assumenda nulla quas voluptatum
              illo, ipsam magnam quos temporibus.
            </Descr>
          </Item>
          <Item>
            <TitleItem>Is OHM a stable coin?</TitleItem>
            <Descr>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor id
              velit suscipit? Maiores recusandae nam sapiente accusantium?
            </Descr>
          </Item>
          <Item>
            <TitleItem>Is OHM pegged?</TitleItem>
            <Descr>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
              autem facere, est voluptas natus, totam placeat eveniet pariatur
              quam molestiae dicta veniam impedit praesentium dolorem obcaecati
              quae tempore id odio?
            </Descr>
          </Item>
        </List>
      </Container>
    </Section>
  );
};

export default Faq;
