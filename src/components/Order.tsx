interface Props {
  closeHour: number,
  openHour: number,
}

export function Order({ closeHour, openHour }: Props) { 
  return (
    <div className="flex flex-col items-center gap-[2.4rem]">
      <p className="text-center">
       {` We're open from ${openHour}:00 to ${closeHour}:00. Come visit us or order
        online`}
      </p>
      <button className=" text-inherit border-0 text-[1.4rem] font-medium bg-light-yellow hover:bg-mid-yellow py-[1.4rem] px-[3.2rem] cursor-pointer transition-all duration-[0.2s] ">Order</button>
    </div>
  );
}