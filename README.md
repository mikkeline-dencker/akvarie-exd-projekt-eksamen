**README - ExD Akvarie-projekt**
Denne README giver et hurtigt overblik over de forbedringer, jeg har arbejdet med til mit ExD Akvarie-tema. Formålet er at fremhæve mine optimeringer i koden.

# index.html

- Implementeret forbedret fisk og akvariemand som GIF'er i img-tags
- Implementeret taleboble-tekst og cta-tekst i hver deres div-tag
- Indsat favicon

# style.css

- Opdateret :root med flere farvevariabler, og givet relative enheder med vw i stedet for px
- Styling af .aquaman, .aquaman-cta, .aquaman-bubble, .aquaman-bubble::after med position, animation, keyframes, z-index m.m.
- Stylet .popupContent med korrekt background og border farve

# index.js

- Hentet DOM-elementer (aquaman, aquaman-cta og aquamanBubble) fra index.html
- Tilføjet click-event på akvariemanden, som viser taleboblen og afspiller soundAquaman
- Taleboblen skjules automatisk igen efter et par sekunder med setTimeout

# game.html

- Tilføjet h1 "DU VANDT!" og button "⮐ TILBAGE TIL AKVARIET" som children til div-tag "win-card"

# game.css

- Stylet .win-card h1 og button med font "Nerko One", background-color, padding, fontsize m.m.

# game.js

- Hentet DOM-elementer winOverlay og returnBtn fra HTML
- Tilføjet en click-event til returnBtn, så brugeren sendes tilbage til startsiden (index.html)
- Givet playWinningSound() en funktion, så winningSound afspiller og overlays vises
