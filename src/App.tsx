import styled from "styled-components";
import CartoonPresentation from "./components/CartoonPresentation";
import CartoonButton from "./components/CartoonButton";
import { useCartoon } from "./contexts/CartoonContext";
import { useEffect } from "react";

export default function App() {
  const { cartoonList, currentCartoon } = useCartoon();

  function changeFavicon() {
    const link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/png";
    link.href = currentCartoon.sprite;

    const existingFavicon = document.querySelector('link[rel="icon"]');
    if (existingFavicon) {
      document.head.removeChild(existingFavicon);
    }

    document.head.appendChild(link);
  }

  useEffect(() => {
    document.title = currentCartoon.name;
    changeFavicon();
  }, [currentCartoon]);

  return (
    <Background $cartoon_bg={currentCartoon.background}>
      <BackgroundWrapper>
        <CartoonPresentation />
        <CartoonSelector>
          {cartoonList.map((cartoon) => {
            return (
              <CartoonButton
                key={cartoon.name}
                button_bg={cartoon.background}
                cartoon_name={cartoon.name}
              />
            );
          })}
        </CartoonSelector>
      </BackgroundWrapper>
    </Background>
  );
}

const Background = styled.div<{ $cartoon_bg: string }>`
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 1)),
    url(${(props) => props.$cartoon_bg});
  background-position: center;
  background-size: cover;
`;

const BackgroundWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  width: 100%;
  height: 100%;
`;

const CartoonSelector = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;

  @media (max-width: 840px) {
    position: absolute;
    flex-direction: row;
    width: 100%;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
  }
`;
