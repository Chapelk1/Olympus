import styled from "@emotion/styled";

export const Section = styled.section`
  padding: 110px 0 0 0;
  
  @media screen and (min-width: 768px) {
    overflow: hidden;
  }


  @media screen and (min-width: 1440px) {
    overflow: unset;
  }
`;
export const Container = styled.div`
  width: 100%;
  position: relative;
  padding: 0 10px;
  margin: 0 auto;
  
  @media screen and (min-width: 540px) {
    width: 540px;
    padding: 0 10px;
    margin: 0 auto;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 14px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  @media screen and (min-width: 1024px) {
    width: 900px;
    padding: 0 15px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1440px) {
    width: 1120px;
    padding: 0 15px;
    margin: 0 auto;
  }
`;

export const Title = styled.h2`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 42px;
  line-height: 1.27;
  color: var(--primary-color);
  margin-bottom: 21px;

`;
export const Accent = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 11px;
  line-height: 0.98;
  text-transform: uppercase;
  color: var(--color-accent);
  padding-left: 22px;
  margin-bottom: 60px;
  & span {
    color: var(--primary-color);
    display: block;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1024px) {
    margin-bottom: 0;
  }

`;
export const List = styled.ul`
  

  @media screen and (min-width: 1440px) {
    width: 700px;
  }
`;
export const Item = styled.li`
  position: relative;
  padding: 26px 26px 26px 34px;
  background-color: var(--color-accent);
  border-radius: 28px;

  &:not(:last-child) {
    margin-bottom: 16px;
  }

  @media screen and (min-width: 768px) {
    padding: 36px 36px 36px 44px;
  }

  
`;
export const ItemTitle = styled.h3`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 22px;
  line-height: 1.26;
  color: var(--primary-color);
  margin-bottom: 30px;
  max-width: 200px;

  @media screen and (min-width: 768px) {
    max-width: 300px;
  }


  @media screen and (min-width: 1440px) {
    font-size: 32px;
    margin-bottom: 60px;
    max-width: 399px;
  }
`;
export const WrapText = styled.div`
  

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: flex-end;
  }

`;
export const Date = styled.span`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 10px;
  line-height: 1.3;
  text-transform: uppercase;
  color: var(--text-color-tertiary);
  margin-bottom: 20px;
  display: block;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    display: inline-block;
    margin-right: 36px;
  }


  @media screen and (min-width: 1440px) {
    margin-right: 236px;
  }
`;
export const Descr = styled.p`
  font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
    line-height: 1.43;
    letter-spacing: 0.02em;
    color: var(--primary-color);
    max-width: 302px;}

  
`;
export const Btn = styled.button`
  position: absolute;
  top: 26px;
  right: 26px;
  cursor: pointer;
  background: transparent;
  overflow: hidden;
  border: none;

  @media screen and (min-width: 768px) {
    top: 36px;
    right: 36px;
  }

`;
export const Icon = styled.svg`
  width: 26px;
  height: 10px;

`;
export const ImgCircle = styled.img`
  
  @media screen and (min-width: 768px) {
    position: absolute;
    pointer-events: none;
    z-index: 1;
    top: 122px;
    right: -110px;
  }

  @media screen and (min-width: 1440px) {
    top: 122px;
    left: 1011px;
  }
`;
export const ImgSquare = styled.img`
  
  @media screen and (min-width: 768px) {
    position: absolute;
    pointer-events: none;
    z-index: 1;
    top: 310px;
    left: -110px;
  }

  @media screen and (min-width: 1440px) {
    top: 412px;
    left: -172px;
  }
`;