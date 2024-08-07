import TeamCard from "../teamCard";
import styles from "./styles.module.css";

function CardsList({ teams }) {
  const { cardsContainer } = styles;

  return (
    <div className={cardsContainer}>
      {teams.map((team, ind) => {
        return <TeamCard key={ind} name={team.name} members={team.members} />;
      })}
    </div>
  );
}

export default CardsList;
