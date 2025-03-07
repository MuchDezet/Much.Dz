import AboutSection from './AboutSection';
import Abouts from './Abouts';

const About = () => {
  return (
    <div className="min-h-screen text-white bg-primary">
      <div className="container mx-auto pt-20">
        <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>
        <AboutSection />
        <Abouts />
      </div>
    </div>
  );
}

export default About;
