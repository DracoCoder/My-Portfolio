import { useState } from 'react'
import Slider from 'react-slick'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'


import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { CertificationData } from '../../constants/constants';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Img, ImgContainer, TitleContent, UtilityList } from './AcomplishmentsStyles';


const sliderSettings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,

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

const Acomplishments = () => {

  const [sliderRef, setSliderRef] = useState(null)

  return (
    <div className='content'>
      <Section nopadding id="certificates">
        <SectionTitle main>Certifications</SectionTitle>

        {/* <div className='navButtons'>
          <Button onCLick={sliderRef?.slickPrev}>
            <FaChevronLeft />
          </Button>
          <Button onCLick={sliderRef?.slickNext}>
            <FaChevronRight />
          </Button>
        </div> */}

        <Slider ref={setSliderRef} {...sliderSettings}>
          {CertificationData.map((item, index) => (

            <GridContainer>
              <style jsx>{`
                .gradient{
                background: linear-gradient(to bottom right, #ff0066 0%, #ff00ff 100%);
                border-radius: 15px;
                box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
                text-align: center;}
                .gradient:hover{
                  transform: scale(1.1);
                transition: 0.7s;}
                }
                `}
              </style>
              <div className='gradient'>
                <BlogCard key={index}>
                  {/* <ImgContainer>
                    <Img src={item.certificate} />
                  </ImgContainer> */}
                  <div className='flexbox'>
                    <TitleContent>
                      <HeaderThree title>{item.title}</HeaderThree>
                    </TitleContent>
                    <div>
                      <HeaderThree>{item.type}</HeaderThree>
                      <Hr />
                    </div>

                    <UtilityList>
                      <ExternalLinks target="_blank" rel="noopener noreferrer" href={item.certificate}>Certificate</ExternalLinks>
                      <ExternalLinks target="_blank" rel="noopener noreferrer" href={item.link}>Verify</ExternalLinks>
                    </UtilityList>
                  </div>
                </BlogCard>
              </div>
            </GridContainer>
          ))}
        </Slider>
        <SectionDivider />
      </Section>
    </div >
  )
};

export default Acomplishments;
