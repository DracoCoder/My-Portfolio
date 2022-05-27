import { useState } from 'react'
import Slider from 'react-slick'


import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { ProjectsData } from '../../constants/constants';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, ImgContainer } from './ProjectsStyles';

const sliderSettings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  dots: true,
  centerMode: true,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
}

const ProjectsNew = () => {
  const [sliderRef, setSliderRef] = useState(null)
  return (
    <div className='content'>
      <Section nopadding id="projects">
        <SectionDivider />
        <SectionTitle main>Projects</SectionTitle>

        <Slider ref={setSliderRef}{...sliderSettings}>
          {ProjectsData.map((p, i) => {
            return (


              <GridContainer>
                <BlogCard key={i}>
                  <ImgContainer>
                    <Img src={p.image} />
                  </ImgContainer>
                  <TitleContent>
                    <HeaderThree title>{p.title}</HeaderThree>
                    <Hr />
                  </TitleContent>
                  <CardInfo className="card-info">{p.description}</CardInfo>
                  <div>
                    <TagList>
                      {p.tags.map((t, i) => {
                        return <Tag key={i}>{t}</Tag>;
                      })}
                    </TagList>
                  </div>
                  <UtilityList>
                    <ExternalLinks target="_blank" rel="noopener noreferrer" href={p.visit}>Try Now!</ExternalLinks>
                    <ExternalLinks target="_blank" rel="noopener noreferrer" href={p.source}>Source Code</ExternalLinks>
                  </UtilityList>
                </BlogCard>
              </GridContainer>

            );
          })}
        </Slider>
      </Section>
    </div >
  )
};

export default ProjectsNew;
