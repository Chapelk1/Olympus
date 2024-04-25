import styled from "@emotion/styled";

export const Stat = styled.div`
  @media screen and (min-width: 320px) {
    position: relative;
    width: 100%;
    height: auto;
    background-color: var(--color-accent);
    padding: 44px 23px;
    border-radius: 28px;
    // display: flex;
    // flex-direction: column;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    padding: 88px 46px;
    flex-direction: row;
  }

  @media screen and (min-width: 1024px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;
export const Line = styled.div`
  @media screen and (min-width: 320px) {
    // position: absolute;
    // top: 53px;
    // left: -100vw;
    // width: 200vw;
    // height: 1px;
    // background-color: #798399;
    // z-index: -1;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1024px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;
export const Title = styled.h2`
  @media screen and (min-width: 320px) {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 28px;
    line-height: 1.22;
    color: var(--primary-color);
    margin-bottom: 30px;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1024px) {
  }

  @media screen and (min-width: 1440px) {
    max-width: 124px;
    font-size: 33px;
    margin-right: 198px;
    margin-bottom: 0;
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
    :nth-child(1) {
      margin-bottom: 30px;
    }
  }

  @media screen and (min-width: 768px) {
    :nth-child(1) {
      margin-bottom: 0;
    }
  }

  @media screen and (min-width: 1024px) {
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    gap: 136px;
  }
`;
export const Item = styled.div`
  @media screen and (min-width: 320px) {
    :nth-child(1) {
      margin-bottom: 30px;
    }
  }

  @media screen and (min-width: 768px) {
    :nth-child(1) {
      margin-bottom: 0;
    }
  }

  @media screen and (min-width: 1024px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;
export const SubTitle = styled.h3`
  @media screen and (min-width: 320px) {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 1.15;
    color: var(--primary-color);
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1024px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;
export const Descr = styled.p`
  @media screen and (min-width: 320px) {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 32px;
    line-height: 1.27;
    color: var(--primary-color);
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1024px) {
  }

  @media screen and (min-width: 1440px) {
    font-weight: 400;
    font-size: 52px;
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
