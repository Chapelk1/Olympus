import {
  Section,
  Container,
  Title,
  Wrap,
  SubWrap,
  SubTitle,
  Half,
  Descr,
  Img,
  Span,
} from "./participation.styled";

import img6 from "../../img/IMAGE06.png";
import img7 from "../../img/IMAGE07.png";
const Participation = (prop) => {
  return (
    <Section>
      <Container>
        <Title>How to Participate</Title>
        <Wrap>
          <Half bg={"--secondary-bg-color"} side={"l"}>
            <Img src={img6} alt="circle with a pattern" />
            <SubWrap>
              <SubTitle color={"--color-accent"}>Staking</SubTitle>
              <Descr color={"--color-accent"}>
                Stakers play an important role in the Olympus ecosystem. Stakers
                deposit their OHM into the protocol, which contributes to OHM’s
                long-term price stability. In exchange, stakers receive their
                pro rata share of rebases and governance rights.
              </Descr>
              <Span color={"--color-accent"}>
                Stake
                <span>Stake</span>
              </Span>
            </SubWrap>
          </Half>
          <Half side={"r"}>
            <Img src={img7} alt="circle with a pattern" />
            <SubWrap>
              <SubTitle>Bonding</SubTitle>
              <Descr>
                Bonding allows you to trade various tokens for OHM at a
                discounted price. In exchange, bond sales provide additional
                liquidity and reserve assets to the Olympus treasury,
                contributing to the stability of the protocol. As a result, 99%
                of all liquidity is owned by Olympus.
              </Descr>
              <Span>
                Bond
                <span>Bond</span>
              </Span>
            </SubWrap>
          </Half>
        </Wrap>
      </Container>
    </Section>
  );
};

export default Participation;
