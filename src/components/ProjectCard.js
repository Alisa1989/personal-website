const ProjectCard = ({item}) => {
  return (
    <a className="projects__card" href={item.link}>
      <div className="projects__card__text">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
