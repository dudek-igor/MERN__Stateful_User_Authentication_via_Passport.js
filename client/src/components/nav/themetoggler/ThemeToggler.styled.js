import styled from 'styled-components';

export const StyledToggleButton = styled.button`
  align-self: center;
  justify-self: end;
  width: 5vw;
  height: 1vh;
  min-height: 20px;
  background-color: transparent;
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.oppositeColor};
  transition: ${({ theme }) => theme.themeTransition};
  border-radius: 20px;
  // Wrong for accessibility
  /* outline: none; */
  padding: 3px;
  @media (max-width: 800px) {
    width: 20vw;
    max-width: 50px;
  } ;
`;
export const Indicator = styled.div`
  height: calc(1vh - 10px);
  min-height: calc(20px - 10px);
  // if you change width, change transform too
  width: 25%;
  transition: ${({ theme }) => theme.themeTransition};
  background-color: ${({ theme }) => theme.oppositeColor};
  border-radius: 20px;
  transform: ${({ isLight }) =>
    isLight ? 'translateX(300%)' : 'translateX(0%)'};
`;
