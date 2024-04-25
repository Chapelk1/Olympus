import {
  Section,
  Container,
  Title,
  List,
  
  Img,
} from "./faq.styled";
import Item from "../ItemFaQ/Item";
import img6 from "../../img/IMAGE06.png";
import img7 from "../../img/IMAGE07.png";
import faQ from '../../data/FaQ.json'
const Faq = ({render}) => {
  return (
    <Section>
      <Container>
        {render && (
          <>
            <Img src={img6} top={"316"} left={"-244"} />
            <Img src={img7} top={"610"} left={"1012"} />
          </>
        )}

        <Title>FAQ</Title>
        <List>
          {faQ.map((itm) => (
            <Item key={itm.title} title={itm.title} descr={itm.description} />
          ))}
        </List>
      </Container>
    </Section>
  );
};

export default Faq;
