import styled from "styled-components";
export const AboutContent = styled.section`
    display:flex;
    justify-content: space-between;
    padding-bottom:30px;
    flex-wrap: wrap;
    & > .hoved {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`;

export const BossContent = styled.section`
    display:flex;
    justify-content: center;
    padding-bottom:30px;
    flex-wrap: wrap;
    & > .hoved {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`;