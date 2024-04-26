import styled from "@emotion/styled";

export const Section = styled.section`
  padding: 110px 0 55px 0;
  
  @media screen and (min-width: 768px) {
    overflow: hidden;
  }

  @media screen and (min-width: 1440px) {
    overflow: unset;
  }
`;
export const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 0 10px;
  margin: 0 auto;
  
  @media screen and (min-width: 540px) {
    width: 540px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    display: flex;
    justify-content: space-between;
  }

  @media screen and (min-width: 1024px) {
    width: 1024px;
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
  font-size: 44px;
  line-height: 1.21;
  color: var(--primary-color);
`;
export const List = styled.ul`
  
  @media screen and (min-width: 1440px) {
    width: 750px;
  }
`;




export const ImgRing = styled.img`
  
  @media screen and (min-width: 768px) {
    position: absolute;
    z-index: 1;
    pointer-events: none;
    top: 210px;
    left: -244px;
  }

  
  @media screen and (min-width: 1440px) {
    top: 316px;
    left: -244px;
  }
`;
export const ImgCircle = styled.img`
  
  @media screen and (min-width: 768px) {
    position: absolute;
    z-index: 1;
    pointer-events: none;
    bottom: -220px;
    left: 640px;
  }

  @media screen and (min-width: 1024px) {
    left: 880px;
  }

  @media screen and (min-width: 1440px) {
    top: 610px;
    left: 1012px;
  }
`;