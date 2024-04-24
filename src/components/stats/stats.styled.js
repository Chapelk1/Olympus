import styled from "@emotion/styled";

export const Stat = styled.div`
  @media screen and (min-width: 320px) {
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1024px) {
  }

  @media screen and (min-width: 1440px) {
    position: relative;
    width: 100%;
    height: auto;
    background-color: var(--color-accent);
    display: flex;
    padding: 88px 46px;
    border-radius: 28px;
  }
`;
export const Line = styled.div`
  @media screen and (min-width: 320px) {
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1024px) {
  }

  @media screen and (min-width: 1440px) {
    position: absolute;
    top: 53px;
    left: -100vw;
    width: 200vw;
    height: 1px;
    background-color: #798399;
    z-index: -1;
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
    font-size: 33px;
    line-height: 1.22;
    color: var(--primary-color);
    max-width: 124px;
    margin-right: 198px;
  }
`;
export const Wrap = styled.div`
  @media screen and (min-width: 320px) {
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1024px) {
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`;
export const SubWrap = styled.div`
  @media screen and (min-width: 320px) {
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1024px) {
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    gap: 136px;
  }
`;
export const Item = styled.div``;
export const SubTitle = styled.h3`
  @media screen and (min-width: 320px) {
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1024px) {
  }

  @media screen and (min-width: 1440px) {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 1.15;
    color: var(--primary-color);
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
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 52px;
    line-height: 1.27;
    color: var(--primary-color);
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
    top: ${(props) => props.top}px;
    left: ${(props) => props.left}px;
  }
`;
