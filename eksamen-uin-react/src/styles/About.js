import styled from "styled-components";
export const AboutContent = styled.section`
    display:flex;
    justify-content: center;
    justify-content: space-around;
    padding-bottom:30px;
    flex-wrap: wrap;
    & > .hoved {
        display: flex;
        flex-direction: column;
        max-width:250px;
        padding:10px;
    }
`;

export const BossContent = styled.section`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    padding-top:30px;
`;