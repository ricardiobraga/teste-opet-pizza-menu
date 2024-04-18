import { PizzaCard } from "@/components/PizzaCard";
import pizzaImgFocaccia from '../assets/pizzas/focaccia.jpg';
import pizzaImgMargherita from '@/assets/pizzas/margherita.jpg';
import pizzaImgSpinaci from '@/assets/pizzas/spinaci.jpg';
import pizzaImgFunghi from '@/assets/pizzas/funghi.jpg';
import pizzaImgSalamino from '@/assets/pizzas/salamino.jpg';
import pizzaImgProsciutto from '@/assets/pizzas/prosciutto.jpg';

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "/assets/pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "/assets/pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "/assets/pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "/assets/pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "/assets/pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "/assets/pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

export function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="flex flex-col justify-center items-center gap-16">
      <h2 className="inline-block py-4  border-t-2 border-b-2 border-black text-[2.4rem] uppercase tracking-[3px] font-medium">Our Menu</h2>
      {numPizzas > 0 ? (
        <>
          <p className=" text-2xl text-center leading-10 w-4/5">
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className=" flex flex-col md:grid md:grid-cols-2 gap-[4.8rem]">
            {pizzas.map((pizza) => (
              <PizzaCard pizzaObj={pizza} key={pizza.name} />

            ))}
          </ul>
        </>
      ) : (
        <p>{"We're still working on our menu. Please come back later :)"}</p>
      )}
    </main>

  )
}