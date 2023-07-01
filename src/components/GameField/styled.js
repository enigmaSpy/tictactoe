import styled from 'styled-components';

export const GameAreaWrapper = styled.div`
    user-select: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100svh;
`;

export const GameArea = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 10rem);
    grid-template-rows: repeat(3,10rem);
    @media (max-width: 768px) {
        grid-template-columns: repeat(3, 6rem);
        grid-template-rows: repeat(3,6rem);
    }
    
`;
export const GameCell = styled.div`
border: 1px solid black;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
font-size: 5rem;
cursor: pointer;
transition: background-color 0.2s ease;

&:hover {
  background-color: #f0f0f0;
}
`;

export const GameInfo = styled.div`
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;

`;