import styled from 'styled-components';

export const Img = styled.img`

  width:35%;
 
  object-fit: cover;
  overflow: hidden;
  // box-shadow: 5px 5px 5px 5px #555555, 3px 3px #111111;
  
  border-radius: 15px;
  padding: 0rem 0rem;

  margin-left: auto;
  margin-right: auto;
  display: block;
`
export const ImgContainer = styled.div`
  padding: 2rem 0rem;  
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-top: 0;
  padding-bottom: 0;
}

`
export const BlogCard = styled.div`
  border-radius: 15px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  height: 550px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 90%;
  }
`;

export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  padding: 3rem;

`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  // color: #7FFFD4;
  // color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 15px auto;
  border: 0;
  background: #FFFF00;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #f4f6f7;
  font-style: 2rem;
  line-height: 24px;
  text-align: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  
}
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 2rem;
  display: flex;
  justify-content: space-around;
  margin: 2rem 0;
`;

export const ExternalLinks = styled.a`
// color:#ffffff;
color: #8A2BE2;
font-size: 1.6rem;
padding:1.5rem 1rem;
border-radius: 5px;
transition: 0.5s;
background: #FFFFFF;

color:#000000;
&:hover{
  background: #DDDDDD;
}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding:3rem 2rem 0rem 2rem;
`

export const Tag = styled.li`
color: #FFFF00;
font-size: 1.7rem;
font-weight: 500;
padding: 0.5rem 1rem;
border-radius: 5px;
transition: 0.5s;
&:hover{
  background: #ffffff;
  color:#000000;
}
`
