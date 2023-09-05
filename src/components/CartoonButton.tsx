import styled from "styled-components";
import { useCartoon } from "../contexts/CartoonContext";

interface Props {
  button_bg: string;
  cartoon_name: string;
}

export default function CartoonButton({ cartoon_name, button_bg }: Props) {
  const { cartoonList, setCurrentCartoon } = useCartoon();

  function handleChangeCartoon() {
    cartoonList.map((cartoon) => {
      if (cartoon.name === cartoon_name) {
        setCurrentCartoon(cartoon);
      }
    });
  }

  return (
    <Container onClick={handleChangeCartoon}>
      <Image src={button_bg} />
    </Container>
  );
}

const Container = styled.button`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  border: none;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s;

  &:hover {
    transform: scale(1.08);
    box-shadow: 0 0 18px #fff;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
