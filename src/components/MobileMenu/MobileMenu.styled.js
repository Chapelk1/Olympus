import styled from "@emotion/styled/macro";

export const Menu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 180px;
  background: var(--primary-color);
  padding: 20px;
  transition: transform 250ms linear;
  transform: ${prop => {
  if (prop.isOpen) {
      return "translateX(0%)";
  } else {
      return "translateX(200%)";
    }
  }};
  display: flex;
  flex-direction: column;
`;