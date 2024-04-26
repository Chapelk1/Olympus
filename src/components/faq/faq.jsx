import {
  Section,
  Container,
  Title,
  List,
  ImgRing,
  ImgCircle,
} from "./faq.styled";
import Item from "../ItemFaQ/Item";
import ring from "../../img/IMAGE06.png";
import circle from "../../img/IMAGE07.png";
import faQ from '../../data/FaQ.json'
const Faq = ({ render }) => {
  return (
    <Section>
      <Container>
        {render && (
          <>
            <ImgRing src={ring} />
            <ImgCircle src={circle} />
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
