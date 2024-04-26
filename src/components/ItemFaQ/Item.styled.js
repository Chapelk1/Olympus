import styled from "@emotion/styled";

export const Card = styled.li`
  position: relative;
  padding: 30px 56px 20px 20px;
  border-bottom: 2px solid var(--text-color-tertiary);
  overflow: hidden;
  transition: all 250ms linear;
  height: ${(prop) => {
    if (prop.isOpen === true) {
      return "auto";
    } else {
      return "130px";
    }
  }};
  
  @media screen and (min-width: 1440px) {
    padding: 75px 56px 20px 45px;
    height: ${(prop) => {
      if (prop.isOpen === true) {
        return "auto";
      } else {
        return "160px";
      }
    }};
  }
`;
export const TitleItem = styled.h3`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 18px;
  line-height: 1.26;
  color: var(--text-color-secondary);
  margin-bottom: 40px;
  max-width: 200px;

  @media screen and (min-width: 1440px) {
    font-size: 32px;
    max-width: 100%;
  }
`;
export const Descr = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 1.43;
  letter-spacing: 0.02em;
  color: var(--primary-color);
  max-width: 500px;
  transition: transform 250ms linear;
  transform: ${(prop) => {
    if (prop.isOpen === true) {
      return "translateY(0%)";
    } else {
      return "translateY(200%)";
    }
  }};
`;
export const Icon = styled.svg`
  fill: inherit;
  width: inherit;
  height: inherit;
`;
export const Btn = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  width: 18px;
  height: 18px;
  cursor: pointer;
  border: none;
  background: transparent;
  fill: var(--primary-color);
  transition: all 250ms linear;
  transform: ${(prop) => {
    if (prop.isOpen) {
      return "rotate(-45deg)";
    }
    return "rotate(0deg)";
  }};

  
  @media screen and (min-width: 1440px) {
    top: 30px;
    right: 55px;
    :hover {
      transform: ${(prop) => {
        if (prop.isOpen) {
          return "rotate(-45deg) scale(1.2)";
        }
        return "rotate(0deg) scale(1.2)";
      }};
    }
  }
`;
