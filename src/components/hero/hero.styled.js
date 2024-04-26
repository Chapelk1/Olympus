import styled from "@emotion/styled";

export const Section = styled.section`
  overflow: hidden;
  padding: 20px 0 0 0;
  position: relative;
  @media screen and (min-width: 768px) {
    padding: 20px 0 200px 0;
  }
  @media screen and (min-width: 1440px) {
    padding: 20px 0 0 0;
    overflow: unset;
  }
`;
export const Line = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 1px;
  background-color: #798399;
  z-index: -1;
  @media screen and (min-width: 320px) {
    top: 460px;
  }
  @media screen and (min-width: 420px) {
    top: 430px;
  }
  @media screen and (min-width: 768px) {
    top:470px;
  }

  @media screen and (min-width: 1440px) {
    top: 414px;
  }
`;
export const Container = styled.div`
  
  width: 100%;
  padding: 0 10px;
  margin: 0 auto;

 

  @media screen and (min-width: 1024px) {
    width: 1024px;
    padding: 0 15px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1440px) {
    width: 1120px;
    padding: 0 15px;
  }
`;
export const Title = styled.h1`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 34px;
  line-height: 1.24;
  color: var(--primary-color);
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    font-size: 43px;
  }

`;
export const Descr = styled.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.02em;
  color: var(--primary-color);
  max-width: 275px;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    font-size: 12px;
    margin-bottom: 40px;
    font-size: 18px;
    max-width: 375px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 275px;
    font-size: 14px;
  }
`;
export const Btn = styled.button`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 14px;
  line-height: 0.98;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 80px;
  color: var(--color-accent);
  box-shadow: 0 0 0 0 #141722;
  background: var(--primary-color);
  border-radius: 1200px;
  padding: 12px 22px;
  border: none;
  overflow: none;

  @media screen and (min-width: 768px) {
    margin-bottom: 140px;
    margin-bottom: 60px;
  }

 
  @media screen and (min-width: 1440px) {
    margin-bottom: 80px;
    cursor: pointer;
    transition: background 250ms linear;
    &:hover {
      background: var(--secondary-bg-color);
    }
  }
`;
