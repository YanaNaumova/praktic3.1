import styles from "./styles.module.css";

function TeamCard({ name, members }) {
  const { container, text } = styles;
  return (
    <div className={container}>
      <h1>{name}</h1>
      {members.map((member, ind) => {
        return (
          <p className={text} key={ind}>
            {member}
          </p>
        );
      })}
    </div>
  );
}

export default TeamCard;
