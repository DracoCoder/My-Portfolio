// import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimationNew';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import ProjectsNew from '../components/Projects/ProjectsNew';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
// import Acomplishments from '../components/Acomplishments/Acomplishments';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      {/* <Projects /> */}
      <ProjectsNew />
      <Technologies />
      <Timeline />
      {/* <Acomplishments /> */}
    </Layout>
  );
};

export default Home;
