import styled from "@emotion/styled";

export const Section = styled.section`
  padding: 110px 0 55px 0;
`;
export const Container = styled.div`
  @media screen and (min-width: 320px) {
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1024px) {
  }

  @media screen and (min-width: 1440px) {
    position: relative;
    width: 1120px;
    padding: 0 15px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
`;
export const Title = styled.h2`
  @media screen and (min-width: 320px) {
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1024px) {
  }

  @media screen and (min-width: 1440px) {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 44px;
    line-height: 1.21;
    color: var(--primary-color);
  }
`;
export const List = styled.ul`
  @media screen and (min-width: 320px) {
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1024px) {
  }

  @media screen and (min-width: 1440px) {
    width: 750px;
  }
`;

export const TitleItem = styled.h3`
  @media screen and (min-width: 320px) {
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1024px) {
  }

  @media screen and (min-width: 1440px) {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 32px;
    line-height: 1.26;
    color: var(--text-color-secondary);
  }
`;
export const Descr = styled.p`
  @media screen and (min-width: 320px) {
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1024px) {
  }

  @media screen and (min-width: 1440px) {
    position: absolute;
    top: 160px;
    left: 45px;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 16px;
    line-height: 1.43;
    letter-spacing: 0.02em;
    color: var(--primary-color);
    max-width: 500px;
  }
`;

export const Img = styled.img`
  @media screen and (min-width: 320px) {
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1024px) {
  }

  @media screen and (min-width: 1440px) {
    position: absolute;
    z-index: 1;
    pointer-events: none;
    top: ${(props) => props.top}px;
    left: ${(props) => props.left}px;
  }
`;
