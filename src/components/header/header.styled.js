import styled from "@emotion/styled";

export const Head = styled.header`
  position: relative;
  padding: 20px 20px 10px 0;
  display: flex;
  justify-content: flex-end;
  @media screen and (min-width: 768px) {
    padding: 38px 0;
  }
`;

export const Container = styled.div`
  @media screen and (min-width: 320px) {
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1024px) {
  }

  @media screen and (min-width: 1440px) {
    width: 1120px;
    gap: 42px;
    padding: 0 15px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
  }
`;

export const Nav = styled.nav`
  @media screen and (min-width: 320px) {
    margin-bottom: 30px;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    margin-bottom: 0;
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
    gap: 34px;
  }
`;

export const Item = styled.li`
  @media screen and (min-width: 320px) {
    :not(:last-child) {
      margin-bottom: 30px;
    }
  }

  @media screen and (min-width: 768px) {
    :not(:last-child) {
      margin-bottom: 0;
    }
  }

  @media screen and (min-width: 1024px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const Link = styled.a`
  @media screen and (min-width: 320px) {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 14px;
    line-height: 1.18;
    text-transform: uppercase;
    color: var(--color-accent);
    transition: color 150ms linear;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1024px) {
  }

  @media screen and (min-width: 1440px) {
    position: relative;
    color: var(--primary-color);
    ::after {
      content: "";
      position: absolute;
      width: 0%;
      height: 2px;
      bottom: -4px;
      left: 50%;
      background-color: var(--primary-color);
      // transform: translateX(-100%);
      transition: all 150ms linear;
    }

    :hover::after {
      // transform: translateX(0%);
      width: 100%;
      left: 0;
    }
  }
`;

export const Btn = styled.button`
  @media screen and (min-width: 320px) {
    display: inline-block;
    align-self: flex-start;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 14px;
    line-height: 0.98;
    text-transform: uppercase;
    color: var(--primary-color);
    box-shadow: 0 0 0 0 #141722;
    background: var(--color-accent);
    border-radius: 1200px;
    padding: 12px 22px;
    border: none;
    overflow: none;
  }
  @media screen and (min-width: 768px) {
    cursor: pointer;
    text-align: center;
    background: var(--primary-color);
    color: var(--color-accent);
    transition: background 250ms linear;
    &:hover {
      background: var(--secondary-bg-color);
    }
  }

  @media screen and (min-width: 1024px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;


export const BtnOpenMenu = styled.button`
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border: none;
  overflow: hidden;
  background: transparent;
`;
export const BtnCloseMenu = styled.button`
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border: none;
  overflow: hidden;
  background: transparent;
  margin-bottom: 40px;
  align-self: end;
`;
export const IconBurger = styled.svg`
  stroke: black;
  width: 40px;
  height: 40px;
  
`;
export const IconClose = styled.svg`
  stroke: var(--color-accent);
  width: 40px;
  height: 40px;
`;