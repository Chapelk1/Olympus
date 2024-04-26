import styled from "@emotion/styled";

export const Stat = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  background-color: var(--color-accent);
  padding: 44px 23px;
  border-radius: 28px;

 

  @media screen and (min-width: 768px) {
    display: flex;
    padding: 88px 46px;
    flex-direction: row;
  }
`;

export const Title = styled.h2`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 28px;
  line-height: 1.22;
  color: var(--primary-color);
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    max-width: 124px;
    font-size: 33px;
    margin-right: 80px;
    margin-bottom: 0;
  }

  
  @media screen and (min-width: 1440px) {
    max-width: 124px;
    font-size: 33px;
    margin-right: 198px;
    margin-bottom: 0;
  }
`;
export const Wrap = styled.div`
  @media screen and (min-width: 470px) {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  
`;
export const SubWrap = styled.div`
  :nth-child(1) {
    margin-bottom: 30px;
    text-align: start;
  }
  

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 80px;
    :nth-child(1) {
      margin-bottom: 0;
    }
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    gap: 136px;
  }
`;
export const Item = styled.div`
  :nth-child(1) {
    margin-bottom: 30px;
  }

  @media screen and (min-width: 768px) {
    :nth-child(1) {
      margin-bottom: 0;
    }
  }

`;
export const SubTitle = styled.h3`
  font-family: var(--font-family);
  color: var(--primary-color);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.15;
  
`;
export const Descr = styled.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 32px;
  line-height: 1.27;
  color: var(--primary-color);
  text-align: end;
  @media screen and (min-width: 470px) {
    text-align: start;
  }
  @media screen and (min-width: 1440px) {
    font-weight: 400;
    font-size: 52px;
  }
`;
export const ImgCone = styled.img`
  
  @media screen and (min-width: 768px) {
    position: absolute;
    top: 199px;
    left: -115px;
  }

`;
export const ImgSquare = styled.img`
  
  @media screen and (min-width: 768px) {
    position: absolute;
    top: 250px;
    right: -150px;
  }

  @media screen and (min-width: 1024px) {
    left: 700px;
  }

  @media screen and (min-width: 1440px) {
    top: 393px;
    left: 905px;
  }
`;