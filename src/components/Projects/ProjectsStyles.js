import styled from 'styled-components';

export const Img = styled.img`

  width:40%;
  height:40%;
  object-fit: cover;
  overflow: hidden;
  
  border-radius: 15px;
  padding: 3rem 0rem;

  margin-left: auto;
  margin-right: auto;
  display: block;
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
  background: #d0bb57;
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
  color: #e4e6e7;
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
&:hover{
  background: #ffffff;
  color:#000000;
}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding:3rem 1.5rem 0rem 1.5rem;
`
export const Tag = styled.li`
// color: #8A2BE2;
color: #7FFFD4;
font-size: 1.6rem;
padding:1rem;
border-radius: 5px;
transition: 0.5s;
&:hover{
  background: #ffffff;
  color:#000000;
}
`
