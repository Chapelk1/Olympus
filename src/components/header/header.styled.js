import styled from "@emotion/styled";

export const Head = styled.header`
  padding: 38px 0;
`;

export const Container = styled.div`
  width: 1120px;
  padding: 0 15px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  gap: 42px;
`;

export const Nav = styled.nav`
  align-items: center;
  display: flex;
`;

export const List = styled.ul`
  display: flex;
  gap: 34px;
`;

export const Item = styled.li`
  //   overflow: hidden;
`;

export const Link = styled.a`
  position: relative;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 14px;
  line-height: 1.18;
  text-transform: uppercase;
  color: var(--primary-color);
  transition: color 150ms linear;

  //   &:hover {
  //     color: var(--secondary-bg-color);
  //   }

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
`;

export const Btn = styled.button`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 14px;
  line-height: 0.98;
  text-transform: uppercase;
  text-align: center;
  color: var(--color-accent);
  box-shadow: 0 0 0 0 #141722;
  background: var(--primary-color);
  border-radius: 1200px;
  padding: 12px 22px;
  border: none;
  overflow: none;
  cursor: pointer;
  transition: background 250ms linear;
  &:hover {
    background: var(--secondary-bg-color);
  }
`;
