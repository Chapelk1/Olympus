import {
  Stat,
  Title,
  Wrap,
  SubWrap,
  Item,
  SubTitle,
  Descr,
  Line,
  Img,
} from "./stats.styled";
import cone from "../../img/IMAGE01.png";
import square from "../../img/IMAGE02.png";
const Stats = () => {
  return (
    <Stat>
      <Line />
      <Img src={cone} top={"199"} left={"-115"} />
      <Img src={square} top={"393"} left={"905"} />
      <Title>Protocol Stats</Title>
      <Wrap>
        <SubWrap>
          <Item>
            <SubTitle>Treasury Balance</SubTitle>
            <Descr> $ 100,027,422</Descr>
          </Item>
          <Item>
            <SubTitle>Protocol-Owned Liquidity</SubTitle>
            <Descr> $ 28,829,462</Descr>
          </Item>
        </SubWrap>
        <SubWrap>
          <Item>
            <SubTitle>Number of Holders</SubTitle>
            <Descr>66,000 +</Descr>
          </Item>
          <Item>
            <SubTitle>Unique Tokens in Treasury</SubTitle>
            <Descr>50 +</Descr>
          </Item>
        </SubWrap>
      </Wrap>
    </Stat>
  );
};

export default Stats;
