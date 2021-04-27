import styled from "styled-components";
export const GalleryContent = styled.section`
    display:flex;
    justify-content: space-between;
    padding-bottom:3%;
    padding-top: 3%;
    flex-wrap: wrap;
    .hoved {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    img {
        width: 30%;
        height: 30%;
        padding-bottom:2%
    }
`;