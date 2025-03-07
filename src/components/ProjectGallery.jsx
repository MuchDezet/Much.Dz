import CircularGallery from './Animations/CircularGallery';

const ProjectGallery = () => {
  const projects = [
    {
      image: "/img/project2.png",
      text: "GAMEHUB Platform"
    },
    {
      image: "/img/beyazid.jpeg",
      text: "Export Gateway"
    },
    {
      image: "/img/ryan.jpeg",
      text: "Creative Portfolio"
    },
    {
      image: "/img/edulearn.png",
      text: "EduLearn Platform"
    },
    {
      image: "/img/fittrack.png",
      text: "FitTrack App"
    },
    {
      image: "/img/smarthome.png",
      text: "SmartHome Dashboard"
    }
  ];

  return (
    <div className="h-screen w-full">
      <CircularGallery 
        items={projects}
        bend={2}
        textColor="#ffffff"
        borderRadius={0.05}
        font="bold 24px DM Sans"
      />
    </div>
  );
};

export default ProjectGallery;
