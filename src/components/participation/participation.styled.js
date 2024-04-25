import styled from "@emotion/styled";

export const Section = styled.section`
  padding: 111px 0 0 0;
`;
export const Container = styled.div`
  @media screen and (min-width: 320px) {
    width: 100%;
    padding: 0 10px;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1024px) {
  }

  @media screen and (min-width: 1440px) {
    position: relative;
    width: 1120px;
    padding: 0 15px;
    //   display: flex;
    //   justify-content: flex-end;
    //   gap: 42px;
  }
`;
export const Title = styled.h2`
  @media screen and (min-width: 320px) {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 32px;
    line-height: 1.27;
    text-align: center;
    color: var(--primary-color);
    margin-bottom: 54px;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1024px) {
  }

  @media screen and (min-width: 1440px) {
    font-size: 42px;
  }
`;
export const Wrap = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1024px) {
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;
export const Half = styled.div`
  @media screen and (min-width: 320px) {
    background-color: ${(prop) => {
      if (prop.bg) {
        return `var(${prop.bg})`;
      } else {
        return `var(--tertiary-bg-color)`;
      }
    }};
    padding: 16px 24px 28px 24px;
    text-align: end;
    border-radius: ${(prop) => {
      switch (prop.side) {
        case "l":
          return "28px 28px 0 0";

        case "r":
          return "0 0 28px 28px";

        default:
          return "0 0 0 0";
      }
    }};
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1024px) {
  }

  @media screen and (min-width: 1440px) {
    padding: 36px 44px 48px 44px;
    width: 50%;
    text-align: end;
    border-radius: ${(prop) => {
      switch (prop.side) {
        case "l":
          return "28px 0 0 28px";

        case "r":
          return "0 28px 28px 0";

        default:
          return "0 0 0 0";
      }
    }};
  }
`;
export const SubWrap = styled.div`
  @media screen and (min-width: 320px) {
    text-align: start;
  }

  @media screen and (min-width: 768px) {
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
    font-size: 32px;
    line-height: 1.26;
    margin-bottom: 28px;
    color: ${(prop) => {
      if (prop.color) {
        return `var(${prop.color})`;
      } else {
        return `var(--primary-color)`;
      }
    }};
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
    font-weight: 400;
    font-size: 12px;
    line-height: 1.43;
    letter-spacing: 0.02em;
    margin-bottom: 38px;
    max-width: 306px;
    color: ${(prop) => {
      if (prop.color) {
        return `var(${prop.color})`;
      } else {
        return `var(--primary-color)`;
      }
    }};
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1024px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;
export const Img = styled.img`
  margin-bottom: 26px;
`;
export const Span = styled.p`
  @media screen and (min-width: 320px) {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 11px;
    line-height: 0.98;
    text-transform: uppercase;
    color: ${(prop) => {
      if (prop.color) {
        return `var(${prop.color})`;
      } else {
        return `var(--primary-color)`;
      }
    }};
    & > span {
      display: block;
    }
  }
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1024px) {
  }

  @media screen and (min-width: 1440px) {
    
`;
export const ImgAbs = styled.img`
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