import styled from "styled-components";

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 5vh;
    object-fit: cover;
    max-width: 300px;
`;

export const EXCOmembers = styled.div`
    font-size: 1.5em;
    line-height: 1.5;
    font-weight: 600;
    display: flex,
    justify-content: left;
    align-items: center;
    text-align: left;
    padding-left: 7rem;
    height: 10vh;
    @media (max-width: 768px) {
        font-size: 1.5em;
        line-height: 1.5;
        font-weight: 600;
        display: flex,
        justify-content: left;
        align-items: left;
        text-align: left;
        height: 10vh;
        padding-left: 1rem;
    }`
    

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(
        auto-fill,
        minmax(350px, 1fr)
    );
    grid-gap: 1vh;
    object-fit: cover;
    width: 100%;
    margin-left: 6%;
    margin-bottom: 5%;

    @media (max-width: 768px) {
        grid-template-columns: repeat(
            auto-fill,
            minmax(200px, 1fr)
        );
        grid-gap: 0.75vh;
        margin-left: 0%;
    }
`;

export const CircularImage = styled.img`
    width: 200px; /* Adjust size as necessary */
    height: 200px; /* Ensure height matches width for a perfect circle */
    border-radius: 50%; /* This makes the image circular */
    object-fit: cover; /* Ensures the image covers the container */
`;
