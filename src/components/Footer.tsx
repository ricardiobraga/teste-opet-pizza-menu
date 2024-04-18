import { Order } from "./Order";


export function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="text-[1.4rem]">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p className="text-center">
          {`We're happy to welcome you between ${openHour}:00 and ${closeHour}:00.`}
        </p>
      )}

      
    </footer>
  );
}