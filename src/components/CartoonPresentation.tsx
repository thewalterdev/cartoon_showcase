import styled from "styled-components";
import { useCartoon } from "../contexts/CartoonContext";

export default function CartoonPresentation() {
  const { currentCartoon } = useCartoon();

  return (
    <Container>
      <SpriteContainer>
        <Sprite src={currentCartoon.sprite} />
      </SpriteContainer>
      <InformationContainer>
        <CartoonTitle>{currentCartoon.name}</CartoonTitle>
        <CartoonDescription>{currentCartoon.description}</CartoonDescription>
        <WatchNowButton href={currentCartoon.watch_url} target="_blank">
          Assistir agora
        </WatchNowButton>
      </InformationContainer>
    </Container>
  );
}

const Container = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
`;

const SpriteContainer = styled.div`
  width: 240px;
  height: 240px;

  @media (max-width: 840px) {
    width: 120px;
    height: 120px;
  }
`;

const Sprite = styled.img`
  object-fit: contain;
  object-position: left;
  width: 100%;
  height: 100%;
`;

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;

const CartoonTitle = styled.h1`
  color: #fff;
`;

const CartoonDescription = styled.p`
  width: 620px;
  color: #fff;

  @media (max-width: 840px) {
    width: 100%;
  }
`;

const WatchNowButton = styled.a`
  height: 32px;
  padding: 0 1rem;
  border-radius: 4px;
  color: #fff;
  font-weight: 600;
  background: #1fa1fa;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

  transition: padding 0.3s ease;

  &:hover {
    padding: 0 2rem;
  }
`;
