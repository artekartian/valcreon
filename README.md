# Valcreon – szablon landing page

Prosty, szybki i tani w utrzymaniu szablon LP pod wiele produktów.

## Pliki
- `index.html` – struktura strony
- `styles.css` – style i zmienne kolorów (CSS variables)
- `script.js` – drobne interakcje (menu, rok w stopce)
- `assets/valcreon-logo.svg` – logo placeholder

## Jak sklonować dla nowego produktu
1. Sklonuj cały folder i zmień treści (hero, korzyści, cennik).
2. Zmień `title` i meta `description` w `<head>`.
3. Jeśli chcesz inny kolor przewodni, podmień `--primary` i `--primary-2` w `:root` w `styles.css`.
4. Podłącz własny endpoint formularza w `action` (np. `/api/contact`, Netlify Forms, Formspree).

## Wdrożenie
- Statyczne pliki – działają na Netlify, Vercel, GitHub Pages, Azure Static Web Apps.
- Brak zewnętrznych zależności – szybkie ładowanie i wysoki wynik Lighthouse.
