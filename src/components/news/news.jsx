import {
  Section,
  Container,
  Title,
  Accent,
  List,
  Item,
  ItemTitle,
  WrapText,
  Date,
  Descr,
  Btn,
  Icon,
  Img,
} from "./news.styled";
import sprite from "../../img/olympus.svg";
import circle from "../../img/IMAGE04.png";
import square from "../../img/IMAGE05.png";
const News = ({render}) => {
  return (
    <Section>
      <Container>
        {render && (
          <>
            <Img src={circle} top={"122"} left={"1011"} />
            <Img src={square} top={"412"} left={"-172"} />
          </>
        )}

        <div>
          <Title>In The News</Title>
          <Accent>
            VIEW ALL ARTICLES
            <span>VIEW ALL ARTICLES</span>
          </Accent>
        </div>
        <List>
          <Item>
            <ItemTitle>Olympus H1 2022 Report</ItemTitle>
            <WrapText>
              <Date>Aug 4, 2022</Date>
              <Descr>
                Over the last year, Olympus DAO has implemented a number of
                initiatives to improve understanding of how the DAO is executing
                on community authorized and mandated initiatives.
              </Descr>
            </WrapText>
            <Btn>
              <Icon>
                <use href={sprite + "#icon-d-arrow-right"}></use>
              </Icon>
            </Btn>
          </Item>
          <Item>
            <ItemTitle>Mint & Sync</ItemTitle>
            <WrapText>
              <Date>Jul 30, 2022</Date>
              <Descr>
                One of the primary objectives outlined in the Olympus12 Action
                Plan is to bootstrap deep OHM liquidity.
              </Descr>
            </WrapText>
            <Btn>
              <Icon>
                <use href={sprite + "#icon-d-arrow-right"}></use>
              </Icon>
            </Btn>
          </Item>
          <Item>
            <ItemTitle>
              Fundamentals: Encouraging Usability Through The Utility Pillar
            </ItemTitle>
            <WrapText>
              <Date>Mar 31, 2022</Date>
              <Descr>
                Welcome back to the final part of the Olympus Fundamental
                Series. If you’re new or need a refresher, read the first
                Olympus Foundations article!
              </Descr>
            </WrapText>
            <Btn>
              <Icon>
                <use href={sprite + "#icon-d-arrow-right"}></use>
              </Icon>
            </Btn>
          </Item>
        </List>
      </Container>
    </Section>
  );
};

export default News;
