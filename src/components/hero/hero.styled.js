import styled from "@emotion/styled";

export const Section = styled.section`
  padding: 20px 0 0 0;
`;
export const Container = styled.div`
  width: 1120px;
  padding: 0 15px;
  margin: 0 auto;
  //   display: flex;
  //   justify-content: flex-end;
  //   gap: 42px;
`;
export const Title = styled.h1`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 43px;
  line-height: 1.24;
  color: var(--primary-color);
  margin-bottom: 28px;
`;
export const Descr = styled.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 12px;
  line-height: 1.43;
  letter-spacing: 0.02em;
  color: var(--primary-color);
  max-width: 275px;
  margin-bottom: 40px;
`;
export const Btn = styled.button`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 14px;
  line-height: 0.98;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 140px;
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
