# Kako dodati video

Portfolio stranica već podržava prikazivanje videa! Evo kako možete dodati video:

## Opcija 1: YouTube ili Vimeo video

1. Otvorite `src/data/portfolioData.js`
2. Pronađite stavku portfolija kojoj želite dodati video
3. Promijenite `video: null` u `video: "EMBED_URL"`

### YouTube primjer:
```javascript
{
  id: 1,
  title: "Pas",
  category: "Crtež olovkom",
  images: [...],
  description: "...",
  video: "https://www.youtube.com/embed/VIDEO_ID", // Zamijenite VIDEO_ID s ID-om vašeg videa
}
```

**Kako dobiti YouTube embed URL:**
- Idite na YouTube video
- Kliknite "Dijeli" → "Umetni"
- Kopirajte `src` URL iz iframe koda
- Ili jednostavno dodajte `/embed/` nakon `youtube.com/watch?v=VIDEO_ID`

**Primjer:**
- Originalni link: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- Embed URL: `https://www.youtube.com/embed/dQw4w9WgXcQ`

### Vimeo primjer:
```javascript
video: "https://player.vimeo.com/video/VIDEO_ID"
```

## Opcija 2: Lokalni video fajl

1. Dodajte video fajl u `public/videos/` folder (kreirajte folder ako ne postoji)
2. U `portfolioData.js` dodajte putanju do videa:

```javascript
{
  id: 1,
  title: "Pas",
  category: "Crtež olovkom",
  images: [...],
  description: "...",
  video: "/videos/my-video.mp4", // Putanja do lokalnog videa
}
```

**Podržani formati:**
- MP4 (preporučeno)
- WebM
- OGG

**Primjer strukture:**
```
arkista-web/
├── public/
│   ├── images/
│   └── videos/
│       └── my-video.mp4
└── src/
    └── data/
        └── portfolioData.js
```

## Napomene

- Video će se automatski prikazati ispod opisa na stranici portfolija
- Za YouTube/Vimeo videa koristi se iframe embed
- Za lokalne video fajlove koristi se HTML5 video player s kontrolama
- Video se prikazuje samo ako `video` nije `null`

## Primjer kompletnog koda

```javascript
{
  id: 1,
  title: "Pas",
  category: "Crtež olovkom",
  images: [
    "/images/pas/pas1.jpeg",
    "/images/pas/pas2.jpeg",
    "/images/pas/pas3.jpeg",
  ],
  description: "Detaljna studija portreta olovkom...",
  video: "https://www.youtube.com/embed/VIDEO_ID", // Ili "/videos/pas-video.mp4" za lokalni fajl
}
```




