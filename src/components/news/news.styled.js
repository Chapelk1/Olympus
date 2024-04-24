import styled from "@emotion/styled";

export const Section = styled.section`
  padding: 110px 0 0 0;
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
    font-size: 42px;
    line-height: 1.27;
    color: var(--primary-color);
    margin-bottom: 21px;
  }
`;
export const Accent = styled.p`
  @media screen and (min-width: 320px) {
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1024px) {
  }

  @media screen and (min-width: 1440px) {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 11px;
    line-height: 0.98;
    text-transform: uppercase;
    color: var(--color-accent);
    padding-left: 22px;
    & span {
      color: var(--primary-color);
      display: block;
    }
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
    width: 700px;
  }
`;
export const Item = styled.li`
  @media screen and (min-width: 320px) {
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1024px) {
  }

  @media screen and (min-width: 1440px) {
    position: relative;
    padding: 36px 36px 36px 44px;
    background-color: var(--color-accent);
    border-radius: 28px;

    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;
export const ItemTitle = styled.h3`
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
    color: var(--primary-color);
    margin-bottom: 60px;
    max-width: 399px;
  }
`;
export const WrapText = styled.div`
  @media screen and (min-width: 320px) {
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1024px) {
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: flex-end;
  }
`;
export const Date = styled.span`
  @media screen and (min-width: 320px) {
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1024px) {
  }

  @media screen and (min-width: 1440px) {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 10px;
    line-height: 1.3;
    text-transform: uppercase;
    color: var(--text-color-tertiary);
    margin-right: 236px;
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
    font-size: 12px;
    line-height: 1.43;
    letter-spacing: 0.02em;
    color: var(--primary-color);
    max-width: 302px;
  }
`;
export const Btn = styled.button`
  @media screen and (min-width: 320px) {
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1024px) {
  }

  @media screen and (min-width: 1440px) {
    position: absolute;
    top: 36px;
    right: 36px;
    cursor: pointer;
    background: transparent;
    overflow: hidden;
    border: none;
  }
`;
export const Icon = styled.svg`
  @media screen and (min-width: 320px) {
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1024px) {
  }

  @media screen and (min-width: 1440px) {
    width: 26px;
    height: 10px;
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
    pointer-events: none;
    z-index: 1;
    top: ${(props) => props.top}px;
    left: ${(props) => props.left}px;
  }
`;
