import styled from "@emotion/styled";

export const Card = styled.li`
  position: relative;

  padding: 75px 56px 20px 45px;
  border-bottom: 2px solid var(--text-color-tertiary);
  overflow: hidden;
  transition: all 250ms linear;
  height: ${(prop) => {
    if (prop.isOpen) {
      return "300px";
    }
    return "140px";
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
  right: 55px;
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

  :hover {
    transform: ${(prop) => {
      if (prop.isOpen) {
        return "rotate(-45deg) scale(1.2)";
      }
      return "rotate(0deg) scale(1.2)";
    }};
  }
`;
