import Image from "next/image";
import Link from "next/link";
import React from "react";
type Drink = {
  id: string;
  image: string;
  title: string;
  idDrink: string;
  strDrink: string;
};

type DrinksListProps = {
  drinks: Drink[];
};
const DrinksList: React.FC<DrinksListProps> = ({ drinks }) => {
  return (
    <ul className="menu menu-vertical pl-0">
      {drinks?.map((drink: any) => {
        return (
          <li key={drink.id}>
            <Link href={`/drinks/${drink.idDrink}`}>{drink.strDrink}</Link>
            <Image
              src={drink.strDrinkThumb}
              alt={drink.strDrink}
              width={300}
              height={300}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default DrinksList;
