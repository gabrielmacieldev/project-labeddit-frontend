import styled from "styled-components";

export const ContainerPost = styled.div`
display: flex;
justify-content: center;
align-items: center;
align-content: center;
flex-direction: column;

textarea {
width: 20.5rem;
height: 8.2rem; 
padding:12px; 
background: #E5E5E5;
border-radius: 8px;
margin-top: 2rem;
font-family:sans-serif;
font-size:14px;
@media (max-width: 480px) {
    width: 17rem;
    margin-right: 0.8rem;
}
@media (max-width: 330px) {
    width: 12.5rem;
    margin-left: 0.7rem;
}

}

.card {
display: flex;
flex-direction: column;
align-items: flex-start;
width: 20rem;
min-height: 10rem;
padding: 1rem;
background: #FBFBFB;
border: 1px solid #E0E0E0;
border-radius: 12px;
gap: 1.2rem;
margin-top: 2rem;
@media (max-width: 480px) {
    width: 16rem;
    margin-right: 0.8rem;
}
@media (max-width: 330px) {
    width: 12rem;
    margin-left: 0.7rem;
}

    .content {
        h1 {
        padding-right: 5rem;
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        text-align: center;
        margin-right: 7rem;
        color: #6F6F6F;
        @media (max-width: 480px) {
        padding-right: 1.2rem;
        }
        @media (max-width: 330px) {
        margin-right: 3rem;
        }
        }

        h2 {
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
        color: #000000;
        }

        .buttons {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            gap: 2.6rem;
            margin-top: 2.8rem;

        }
    }
}
img {
    margin-top: 2rem;
}
`
export const ButtonBoss = styled.div`
display: flex;
flex-direction: column;

.line {
   margin-left: 0.4rem;
   @media (max-width: 480px) {
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   margin-right: 1rem;
   width: 300px; 
}
@media (max-width: 330px) {
    width: 14rem;
    margin-left: 0.7rem;
}
}
`

export const Button = styled.button`
margin-top: 1rem;
margin-bottom: 1rem;
background: linear-gradient(90deg, #FF6489, #F9B24E);
color:#FFFFFF;
border-style:none;
cursor:pointer;
font-weight:bold;
font-size: 18px;
font-family:sans-serif;
border-radius:2.5vh;
width:23rem;
height:6vh;
@media (max-width: 480px) {
    width: 18rem;
    margin-left: 0.7rem;
}
@media (max-width: 330px) {
    width: 14rem;
    margin-left: 0.7rem;
}
` 

export const Button2 = styled.div`
cursor: pointer;
`