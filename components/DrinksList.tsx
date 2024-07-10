import React from "react";
type Drink = {
  image: string;
  title: string;
};

type DrinksListProps = {
  drinks: Drink[];
};
const DrinksList: React.FC<DrinksListProps> = ({ drinks }) => {
  return <div>DrinksList</div>;
};

export default DrinksList;
