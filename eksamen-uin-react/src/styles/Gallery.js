import styled from "styled-components";
export const galleryContent = styled.section`
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