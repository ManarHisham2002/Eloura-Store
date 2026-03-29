import { FaStar, FaStarHalfAlt, FaPlus } from "react-icons/fa";
export const Rating = ({ ratings }) => {
  const num = Math.floor(ratings);
  const float = ratings % 1 !== 0;
  const stars = [];
  for (let i = 0; i < num; i++) {
    stars.push(<FaStar key={i} className="icon-start" />);
  }
  if (float) {
    stars.push(<FaStarHalfAlt key="half" className="icon-start" />);
  }
  return <>{stars}</>;
};
