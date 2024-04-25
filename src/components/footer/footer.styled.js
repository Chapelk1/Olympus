import styled from "@emotion/styled";

export const Foot = styled.footer`
  @media screen and (min-width: 320px) {
    position: relative;
    z-index: 1;
    padding: 40px 0 40px 0;
    background-color: var(--primary-color);
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1024px) {
  }

  @media screen and (min-width: 1440px) {
    padding: 108px 0 203px 0;
  }
`;
export const Container = styled.div`
  @media screen and (min-width: 320px) {
    width: 320px;
    padding: 0 10px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1024px) {
  }

  @media screen and (min-width: 1440px) {
    width: 1120px;
    padding: 0 15px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
`;
export const WrapIcon = styled.div`
  @media screen and (min-width: 320px) {
    width: 102px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  @media screen and (min-width: 768px) {
    flex-direction: column;
  }

  @media screen and (min-width: 1024px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;
export const Icon = styled.svg`
  @media screen and (min-width: 320px) {
    display: block;
    width: 35px;
    height: 35px;
    fill: inherit;
    transition: fill 250ms linear;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1024px) {
  }

  @media screen and (min-width: 1440px) {
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
    display: flex;
  }
`;
export const Item = styled.li`
  @media screen and (min-width: 320px) {
    :not(:last-child) {
      margin-bottom: 80px;
    }
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1024px) {
  }

  @media screen and (min-width: 1440px) {
    max-width: 126px;
    :not(:last-child) {
      margin-right: 150px;
      margin-bottom: 0;
    }
  }
`;
export const SubTitle = styled.h2`
  @media screen and (min-width: 320px) {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 20px;
    line-height: 1.15;
    color: var(--color-accent);
    margin-bottom: 22px;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1024px) {
  }

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`;
export const Link = styled.a`
  @media screen and (min-width: 320px) {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 11px;
    line-height: 0.8;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--color-accent);
    display: block;
    transition: all 250ms linear;
    :not(:last-child) {
      margin-bottom: 26px;
    }
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1024px) {
  }

  @media screen and (min-width: 1440px) {
    line-height: 1.18;
    :hover {
      color: var(--text-color-tertiary);
    }
  }
`;
export const Btn = styled.a`
  @media screen and (min-width: 320px) {
    border: none;
    background: transparent;
    width: 35px;
    height: 35px;
    cursor: pointer;
    fill: var(--color-accent);
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1024px) {
  }

  @media screen and (min-width: 1440px) {
    :hover {
      fill: var(--text-color-tertiary);
    }
  }
`;
