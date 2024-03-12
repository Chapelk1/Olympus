import styled from "@emotion/styled";

export const Section = styled.section`
  padding: 111px 0 0 0;
`;
export const Container = styled.div`
  width: 1120px;
  padding: 0 15px;
  margin: 0 auto;
  //   display: flex;
  //   justify-content: flex-end;
  //   gap: 42px;
`;
export const Title = styled.h2`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 42px;
  line-height: 1.27;
  text-align: center;
  color: var(--primary-color);
  margin-bottom: 54px;
`;
export const Wrap = styled.div`
  display: flex;
`;
export const Half = styled.div`
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
  background-color: ${(prop) => {
    if (prop.bg) {
      return `var(${prop.bg})`;
    } else {
      return `var(--tertiary-bg-color)`;
    }
  }};
`;
export const SubWrap = styled.div`
  text-align: start;
`;
export const SubTitle = styled.h3`
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
`;
export const Descr = styled.p`
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
`;
export const Img = styled.img`
  margin-bottom: 26px;
`;
export const Span = styled.p`
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
`;
