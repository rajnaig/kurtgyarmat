# Galéria Komponens Használati Útmutató

Ez a dokumentum leírja, hogyan használd a Galéria komponenst a Kürtgyarmat weboldalon.

## Áttekintés

A Galéria komponens egy interaktív képnézegető, amely:
- Képeket és videókat jelenít meg reszponzív rácselrendezésben
- Lehetővé teszi a képek és videók teljes képernyős megtekintését
- Szűrési lehetőséget biztosít képek és videók között
- Billentyűzet-navigációt támogat (balra/jobbra nyilak, ESC)

## Fájlszerkezet

```
/components/sections/gallery.tsx - Fő galéria szekció komponens
/components/shared/gallery-card.tsx - Galéria elem kártya komponens
/components/shared/media-viewer.tsx - Teljes képernyős média megjelenítő
/lib/media-utils.ts - Segédfüggvények a média kezeléséhez
/public/gallery/ - Mappa a képek és videók tárolásához
```

## Képek és Videók Hozzáadása

### Új fájlok hozzáadása

1. Helyezd a képeket és videókat a `/public/gallery/` mappába
2. Módosítsd a `lib/media-utils.ts` fájlban található `getPhotoItems` és `getVideoItems` függvényeket, hogy az új fájlokat tartalmazza

```typescript
function getPhotoItems(): MediaItem[] {
  return [
    {
      id: "photo1",
      title: "Kép címe",
      description: "Kép leírása",
      src: "/gallery/kep_neve.jpg",
      type: "image"
    },
    // Több kép...
  ];
}
```

## Testreszabás

### Stílus módosítása

A galéria stílusa a Tailwind CSS osztályokkal van meghatározva. A színek és egyéb stíluselemek módosításához:

1. Módosítsd a komponensekben található CSS osztályokat
2. Vagy módosítsd a `tailwind.config.js` fájlban a színsémát

### Elrendezés módosítása

A rácselrendezés módosításához változtasd meg a grid osztályokat a `gallery.tsx` fájlban:

```jsx
<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
```

## Hibaelhárítás

### Képek nem jelennek meg

- Ellenőrizd, hogy a képek elérési útja helyes-e
- Ellenőrizd, hogy a képek formátuma támogatott-e (jpg, jpeg, png, gif, webp)
- Ellenőrizd a konzolt hibaüzenetekért

### Videók nem játszódnak le

- Ellenőrizd, hogy a videók formátuma támogatott-e (mp4, webm, ogg)
- Ellenőrizd, hogy a videók megfelelően vannak-e kódolva
- Ellenőrizd a konzolt hibaüzenetekért

### Google Drive kapcsolódási problémák

- Ellenőrizd, hogy az API kulcs helyes-e
- Ellenőrizd, hogy a mappa azonosító helyes-e
- Ellenőrizd, hogy a megfelelő hozzáférési jogok be vannak-e állítva
