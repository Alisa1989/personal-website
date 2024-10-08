const ProjectCard = ({item}) => {
  return (
    <a className="projects__card" href={item.link} target={"_blank"} rel="noreferrer">
      <div className="projects__card__text">
        <img className="projects__image" src={item.image} alt={item.imageAlt}/>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
