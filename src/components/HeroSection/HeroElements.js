import styled from 'styled-components'
import {MdKeyboardArrowRight,MdArrowForward} from 'react-icons/md';

export const HeroContainer= styled.div`


background:#FFFF00;
display:flex;
justify-content: center;
align-items: center;
flex-direction:column;
padding: 0 30px;
// margin:0;
height: 800px;
position: relative;
z-index:1

:before{
    content:'';
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
    linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
    z-index:2;
}
`
export const HeroContent= styled.div`
z-index:3;
max-width:1200px;
position:absolute;
padding: 8px 24px;
dislpay: flex;
flex-direction:column;
align-items:center;
`

export const HeroH1= styled.h1`
color: #000000;
font-size: 68px;
text-align:center;
font-family: 'Kanit', sans-serif;

@media screen and(max-width:768px){
    font-size:40px
}

@media screen and(max-width:480px){
    font-size:32px
}
`

export const HeroP= styled.p`
margin-top:24px;
font-size:24px;
// text-align:center;  
max-width:600px;
font-family: 'Jura', sans-serif;
font-weight:bold;
justify-content:center;

@media screen and(max-width:768px){
    font-size:24px
}

@media screen and(max-width:480px){
    font-size:18px
}
`
export const HeroBtnWrapper= styled.div`
margin-top:32px;
display:flex;
flex-direction:column;
align-items:center;
font-family: 'Jura', sans-serif;
font-weight: bold;
`

export const ArrowForward=styled(MdArrowForward)`
margin-left:8px;
font-size:20px;
`

export const ArrowRight= styled(MdKeyboardArrowRight)`
margin-left:8px;
font-size:20px
`
// For svg

export const ImgWrapper= styled.div`
max-width:555px;
height:100%;

`

export const Img = styled.img`
width:100%;
margin: 0 0 10px 0;
padding-right:0;
`