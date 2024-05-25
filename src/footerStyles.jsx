import styled from "styled-components";
 
export const Box = styled.div`
    padding:  2.5% 2.5%;
    background: #DA2E17;   //can adjust red color
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    box-sizing: border-box;
 
    @media (max-width: 1000px) {
        padding: 70px 30px;
    }
`;

export const DividerLine = styled.hr`
    width: 48%; 
    border: none; 
    border-top: 3px solid black; 
    margin: 10px 0; 
    object-fit: cover;
`;
 

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    max-width: 2500px;
    margin-left: 6vh;
    margin-top: 8vh;
    padding-top: 2vh;
    //background: red; 
`;
 
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 1vh;
    object-fit: cover;
`;
 
export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(
        auto-fill,
        minmax(400px, 1fr)
    );
    grid-gap: 1vh;
    object-fit: cover;
 
    @media (max-width: 1000px) {
        grid-template-columns: repeat(
            auto-fill,
            minmax(200px, 1fr)
        );
    }
`;
 
export const FooterLink = styled.a`
    color: #fff;
    margin-bottom: 2.5vh;
    font-size: 15px;
    text-decoration: none;
    object-fit: cover;
 
    &:hover {
        color: black;
        transition: 200ms ease-in;
    }
`;
 