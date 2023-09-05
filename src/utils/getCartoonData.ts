import { Cartoon } from "../types/Cartoon";
import SuperchoqueBg from "../assets/superchoque-bg.jpg";
import SuperchoqueSprite from "../assets/superchoque.png";
import ApenasumshowBg from "../assets/apenasumshow-bg.jpg";
import ApenasumshowSprite from "../assets/apenasumshow.png";
import StevenBg from "../assets/steven_bg.jpg";
import StevenSprite from "../assets/steven_sprite.png";
import AdventureTimeBg from "../assets/adventuretime_bg.jpg";
import FinnSprite from "../assets/finn_sprite.png";

const Cartoons: Cartoon[] = [
  {
    background: SuperchoqueBg,
    description:
      "Super Choque é uma série animada produzida pela Warner Bros. Television, tendo estreado em 23 de setembro de 2000 no canal estadunidense The WB, no bloco dedicado à animações infantis.",
    name: "Superchoque",
    sprite: SuperchoqueSprite,
    watch_url: "https://animesdigital.org/anime/a/super-choque",
  },
  {
    background: ApenasumshowBg,
    description:
      "Apenas um Show é uma animação de comédia aclamada que cativa tanto crianças quanto adultos com sua abordagem única e hilariante da vida cotidiana.",
    name: "Apenas um show",
    sprite: ApenasumshowSprite,
    watch_url:
      "https://www.hbomax.com/br/pt/series/urn:hbo:series:GXl20QAK1sTC3wwEAAB4I",
  },
  {
    background: StevenBg,
    description:
      "Steven Universo é uma série de desenho animado que cativou uma ampla audiência com sua narrativa envolvente, personagens carismáticos e mensagens poderosas.",
    name: "Steven Universo",
    sprite: StevenSprite,
    watch_url:
      "https://www.hbomax.com/br/pt/series/urn:hbo:series:GXbGBEw3y6pGYoAEAAAVc",
  },
  {
    background: AdventureTimeBg,
    description:
      "Hora de Aventura é uma série de desenho animado que se destaca por sua criatividade, humor peculiar e narrativa única.",
    name: "Hora de Aventura",
    sprite: FinnSprite,
    watch_url:
      "https://www.hbomax.com/br/pt/series/urn:hbo:series:GXmAuwAxxXp4_wwEAACh0",
  },
];

export default Cartoons;
