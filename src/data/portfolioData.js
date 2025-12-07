export const portfolioData = [
  {
    id: 1,
    title: "Pas",
    category: "Crtež olovkom",
    tags: ["Životinje"],
    images: [
      "/images/crtezi/pas/pas1.jpeg",
      "/images/crtezi/pas/pas2.jpeg",
      "/images/crtezi/pas/pas3.jpeg",
      "/images/crtezi/pas/pas4.jpeg",
    ],
    description: "Detaljna studija portreta olovkom koja se fokusira na crte lica i tehnike sjenčanja. Ovo djelo pokazuje pažljivu pozornost na svjetlo i sjenu, stvarajući dubinu i realizam.",
    video: "/images/crtezi/pas/pas-video.mp4",
    size: "30 x 40 cm",
    technique: "Grafitna olovka na papiru",
  },
  {
    id: 2,
    title: "Suncokret",
    category: "Slika",
    tags: ["Priroda"],
    images: [
      "/images/slike/suncokret/suncokret0.jpeg",
      "/images/slike/suncokret/suncokret1.jpeg",
      "/images/slike/suncokret/suncokret2.jpeg",
    ],
    description: "Ekspresivna slika suncokreta koja hvata ljepotu prirode kroz hrabre boje i dinamične poteze kista. Djelo izaziva osjećaj spokoja i čuđenja.",
    video: "/images/slike/suncokret/suncokret1.mp4",
    size: "50 x 60 cm",
    technique: "Akril na platnu",
  },
  {
    id: 9,
    title: "Karla",
    category: "Digitalne ilustracije",
    tags: ["Portret"],
    images: [
      "/images/digitalne-ilustracije/karla/karla1.jpeg",
      "/images/digitalne-ilustracije/karla/karla2.jpeg",
    ],
    description: "Moderna digitalna ilustracija portreta koja kombinira tradicionalne umjetničke tehnike s digitalnim alatom. Djelo prikazuje suvremeni pristup portretiranju kroz živahne boje i precizne detalje.",
    size: "Digitalni format",
    technique: "Digitalna ilustracija",
  },
  {
    id: 10,
    title: "Pas 2",
    category: "Crtež olovkom",
    tags: ["Životinje"],
    images: [
      "/images/crtezi/pas2/pas2.jpeg",
      "/images/crtezi/pas2/pas1.jpeg",
    ],
    description: "Detaljna studija portreta olovkom koja se fokusira na crte lica i tehnike sjenčanja. Ovo djelo pokazuje pažljivu pozornost na svjetlo i sjenu, stvarajući dubinu i realizam.",
    size: "30 x 40 cm",
    technique: "Grafitna olovka na papiru",
  },
  {
    id: 11,
    title: "Beba",
    category: "Crtež olovkom",
    tags: ["Portret"],
    images: [
      "/images/crtezi/beba/beba1.jpeg",
      "/images/crtezi/beba/beba2.jpeg",
      "/images/crtezi/beba/beba3.jpeg",
    ],
    description: "Nježan portret bebe olovkom koji hvata čistotu i nevinost djetinjstva. Djelo prikazuje pažljivo sjenčanje koje naglašava mekoću dječjih crta lica.",
    size: "30 x 40 cm",
    technique: "Grafitna olovka na papiru",
  },
  {
    id: 12,
    title: "Zenadjete",
    category: "Crtež olovkom",
    tags: ["Portret"],
    images: [
      "/images/crtezi/zenadjete/Zenadjete1.jpeg",
      "/images/crtezi/zenadjete/Zenadjete2.jpeg",
      "/images/crtezi/zenadjete/Zenadjete3.jpeg",
    ],
    description: "Detaljni portret olovkom koji prikazuje izražajnost lica kroz precizne linije i tehnike sjenčanja. Djelo hvata karakter i emocije subjekta.",
    size: "30 x 40 cm",
    technique: "Grafitna olovka na papiru",
  },
];

export const categories = ["Sve", "Crtež olovkom", "Slika", "Digitalne ilustracije"];

// Extract unique tags from all portfolio items
export const getTags = () => {
  const allTags = portfolioData
    .flatMap((item) => item.tags || [])
    .filter((tag, index, self) => self.indexOf(tag) === index)
    .sort();
  return allTags;
};

