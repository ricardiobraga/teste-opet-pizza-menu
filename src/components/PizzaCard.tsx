
import { log } from "console";
import Image, { StaticImageData } from "next/image";
import { FunctionComponent } from "react";





interface PizzaCard {
  pizzaObj: PizzaConfig;
}

interface PizzaConfig {
  name: string,
  ingredients: string,
  price: number,
  photoName: string,
  soldOut: boolean,
}



export const PizzaCard: FunctionComponent<PizzaCard> = ({ pizzaObj }) => {  
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "grayscale opacity-80 text-soft-grey" : ""}  flex flex-col md:flex-row  items-center gap-[3.2rem]`}>
      <div className="w-48 h-48 aspect-square  gap-14">       
        <Image src={pizzaObj.photoName} alt={`Pizza ${pizzaObj.name} photo`} width="400" height="400" layout='responsive'/>
      </div>
      <div className="flex flex-1 flex-col h-full items-center md:items-start w-[70%] gap-x-[0.8rem]">
        <h3 className="text-[2rem] font-normal">{pizzaObj.name}</h3>
        <p className="text-[1.4rem] text-center md:text-left font-light italic mb-auto">{pizzaObj.ingredients}</p>
        <span className="block text-[1.6rem]">{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  )
}