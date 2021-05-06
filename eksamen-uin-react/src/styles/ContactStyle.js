import styled from "styled-components";
export const KontaktossSide = styled.section`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(4, 1fr) 0.5fr;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
`;
export const KontaktossWrapper = styled.section`
    { grid-area: 1 / 1 / 2 / 6; }
    display: flex;
    justify-content: center;
    justify-content:space-around;
    padding-top:30px;
    }
`;
export const Kontaktinfocontent = styled.section`
    display: flex;
    color: white;
    justify-content: center;
    align-items:center;
    justify-content:space-around;
    flex-direction: column;
    border: 2px solid #FFFFFF	;
    width: 30%;
    & > li {
        display:flex;
        
        color: #FFFFFF
    }
    & > h1 {
        font-size: 1vw;
        color: #FFFFFF
    }
`;
export const KontaktRingoss = styled.section`
    display: flex;
    justify-content: center;
    justify-content:space-around;
    border: 2px solid #FFFFFF	;
    width 50%;
    & > img {
        width: 45%;
        height: 80%;
        padding-top: 3%;
        
        
       
    }
`;


export const KontaktossSkjemaWrapper = styled.section`
    { grid-area: 2 / 1 / 5 / 6; }
    display:flex;
    justify-content: center;
    }
`;
export const KontaktossSkjema = styled.section`
    display: flex;
    color: white;
    flex-direction: column;
    align-items:center;
    width 80%; 
    border: 2px solid #FFFFFF	;
    & > h1 {
        font-size: 1vw;
        color: #FFFFFF
    }
    & > button {
        display: flex;
        justify-content:center;
        width: 10%;
    }
    & > textarea {
        height: 30%;
        width:50%;
    }
    }
`;
export const KontaktossNyhetsbrevWrapper = styled.section`
    { grid-area: 5 / 1 / 6 / 6; }
    display:flex;
    justify-content: center;
    padding-bottom:30px;
    }
}
`;
export const KontaktossNyhetsbrev = styled.section`
    display:flex;
    color: white;
    justify-content: center;
    justify-content: space-between;
    align-items:center;
    width: 80%;
    border: 2px solid #FFFFFF	;
    }
    & > h1 {
        font-size: 1vw;
        color: #FFFFFF
    }
    & > input{
        height: 30%;
        width:20%;
    }
`;
export const TipsSkjema = styled.section`
display:flex;
flex-direction: column;
justify-content: center;
`;
export const Abonner = styled.section`
display:flex;
color:white;
width: 100%;
flex-direction: row;
justify-content: space-around;
& > .subform {
    display:flex;
    
}

`;
