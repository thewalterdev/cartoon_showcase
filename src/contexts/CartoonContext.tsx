import { Cartoon } from "../types/Cartoon";
import { ReactNode, createContext, useContext, useState } from "react";
import Cartoons from "../utils/getCartoonData";

interface CartoonContextType {
  currentCartoon: Cartoon;
  cartoonList: Cartoon[];
  setCurrentCartoon: (cartoon: Cartoon) => void;
}

const CartoonContext = createContext<CartoonContextType>({
  cartoonList: Cartoons,
  currentCartoon: Cartoons[0],
  setCurrentCartoon: () => {},
});

export function CartoonProvider({ children }: { children: ReactNode }) {
  const [currentCartoon, setCurrentCartoon] = useState<Cartoon>(Cartoons[0]);

  return (
    <CartoonContext.Provider
      value={{ cartoonList: Cartoons, currentCartoon, setCurrentCartoon }}
    >
      {children}
    </CartoonContext.Provider>
  );
}

export const useCartoon = () => {
  const context = useContext(CartoonContext);
  return context;
};
