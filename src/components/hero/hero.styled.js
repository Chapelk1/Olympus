import styled from "@emotion/styled";

export const Section = styled.section`
  padding: 20px 0 0 0;
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
    width: 1120px;
    padding: 0 15px;
  }
`;
export const Title = styled.h1`
  @media screen and (min-width: 320px) {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 34px;
    line-height: 1.24;
    color: var(--primary-color);
    margin-bottom: 28px;
  }

  @media screen and (min-width: 768px) {
    font-size: 43px;
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
    font-size: 14px;
    line-height: 1.43;
    letter-spacing: 0.02em;
    color: var(--primary-color);
    max-width: 275px;
    margin-bottom: 30px;
  }

  @media screen and (min-width: 768px) {
    font-size: 12px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1024px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;
export const Btn = styled.button`
  @media screen and (min-width: 320px) {
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
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 140px;
  }

  @media screen and (min-width: 1024px) {
  }

  @media screen and (min-width: 1440px) {
    cursor: pointer;
    transition: background 250ms linear;
    &:hover {
      background: var(--secondary-bg-color);
    }
  }
`;
