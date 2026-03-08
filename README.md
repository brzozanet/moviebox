# 🎥 Explore the Moviebox

![Screenshot App](https://raw.githubusercontent.com/brzozanet/moviebox/refs/heads/main/src/images/gh-cover-project-moviebox.jpg)

**Filmoteka (Moviebox)** to nowoczesna aplikacja webowa do wyszukiwania i przeglądania filmów z integracją TMDb API. Umożliwia wyszukiwanie w czasie rzeczywistym, przeglądanie szczegółów (obsada, oceny, zwiastuny), nieskończone przewijanie oraz budowanie osobistej biblioteki filmów (obejrzane / do obejrzenia) zapisywanej w `localStorage`. Projekt został zrealizowany w vanilla JavaScript i demonstruje pracę z REST API oraz organizację kodu bez użycia frameworków..

## 🌐 Demo

Aplikacja jest dostępna online:

- [GitHub Pages](https://brzozanet.github.io/moviebox/)

## 🎬 Funkcjonalności

- **Przeglądanie popularnych filmów**: Automatyczne ładowanie najpopularniejszych filmów z TMDb API
- **Wyszukiwanie filmów**: Wyszukiwanie filmów po tytule w czasie rzeczywistym
- **Szczegółowe informacje**: Modal z pełnymi informacjami o filmie (opis, oceny, gatunki)
- **Zwiastuny**: Oglądanie oficjalnych zwiastunów filmów bezpośrednio w aplikacji
- **Biblioteka filmów**:
  - Lista obejrzanych filmów (Watched)
  - Lista filmów do obejrzenia (Queue)
  - Przechowywanie danych w `localStorage`
- **Nieskończone przewijanie**: Automatyczne ładowanie kolejnych stron z wynikami podczas przewijania
- **Responsywny design**: Optymalizacja wyświetlania na różnych urządzeniach

## 🛠️ Technologie

- **JavaScript (ES6+)**: Główny język programowania
- **Parcel**: Bundler i narzędzie do developmentu
- **SASS/SCSS**: Preprocesor CSS
- **jQuery**: Manipulacja DOM
- **Notiflix**: Powiadomienia i komunikaty użytkownika
- **dotenv**: Wczytywanie klucza API z pliku `.env`
- **The Movie Database (TMDb) API**: Źródło danych o filmach
- **localStorage**: Przechowywanie danych użytkownika lokalnie

## 📁 Struktura projektu

```
moviebox/
├── .github/                   # Konfiguracja CI/CD
│   └── workflows/
│       └── deploy.yml         # Build i deploy na GitHub Pages
├── src/
│   ├── images/                 # Obrazy i zasoby graficzne
│   ├── js/                     # Pliki JavaScript
│   │   ├── app.js              # Główna logika aplikacji
│   │   ├── library.js          # Logika biblioteki filmów
│   │   ├── modal.js            # Obsługa modala z szczegółami
│   │   ├── search-box.js       # Wyszukiwanie filmów
│   │   ├── genres.js           # Obsługa gatunków filmowych
│   │   ├── local-storage.js    # Zarządzanie localStorage
│   │   ├── loading-spinner.js  # Spinner ładowania
│   │   └── setup.js            # Konfiguracja API
│   ├── sass/                   # Style SASS/SCSS
│   │   ├── main.scss           # Główny plik stylów
│   │   └── partials/           # Częściowe pliki stylów
│   ├── partials/               # Współdzielone fragmenty HTML
│   ├── index.html              # Strona główna
│   └── library.html            # Strona biblioteki
├── dist/                       # Zbudowane pliki (generowane po build)
├── package.json                # Zależności i skrypty
└── README.md                   # Dokumentacja
```

## 📋 Wymagania

Na komputerze musi być zainstalowana LTS-wersja [Node.js](https://nodejs.org/en/).

## 🚀 Instalacja

1. **Klonowanie repozytorium**:

```bash
git clone https://github.com/brzozanet/moviebox.git
cd moviebox
```

2. **Instalacja zależności**:

```bash
npm install
```

3. **Konfiguracja klucza API (TMDb)**:

Utwórz plik `.env` w katalogu głównym projektu i dodaj:

```bash
API_KEY=twoj_klucz_tmdb
```

Bez poprawnie ustawionego `API_KEY` wyszukiwanie i pobieranie danych filmów nie będzie działać.

## 💻 Uruchomienie

### Tryb deweloperski:

```bash
npm run dev
```

Aplikacja domyślnie będzie dostępna pod adresem: [http://localhost:1234](http://localhost:1234).
Jeśli port `1234` jest zajęty, Parcel automatycznie uruchomi serwer na innym wolnym porcie i wyświetli właściwy adres w terminalu.

## 📦 Build

Budowanie wersji produkcyjnej:

```bash
npm run build
```

Lokalny build używa relatywnego `public-url` (`./`), więc poprawnie działa np. przy serwowaniu folderu `dist` przez prosty serwer statyczny.

## 🌐 Deploy

Przy każdym pushu do gałęzi `main` uruchamia się workflow GitHub Actions, który buduje projekt i publikuje zawartość folderu `dist` na gałęzi `gh-pages`. Po chwili aktualna wersja jest dostępna pod adresem:

**[https://brzozanet.github.io/moviebox/](https://brzozanet.github.io/moviebox/)**

Do buildu pod GitHub Pages używane jest polecenie:

```bash
npm run build:pages
```

Aby deploy na GitHub Pages działał poprawnie, ustaw w repozytorium sekret:

`Settings -> Secrets and variables -> Actions -> New repository secret`

- Name: `API_KEY`
- Value: Twoj klucz TMDb API

Workflow `deploy.yml` wstrzykuje ten sekret do procesu buildu.

### Zasady organizacji plików

- Wszystkie partiale stylów powinny znajdować się w folderze `src/sass` i być importowane w `src/sass/main.scss`.
- Wszystkie partiale HTML powinny znajdować się w folderze `src/partials` i być importowane w `index.html` lub `library.html`.
- Pliki skryptów JS umieszczamy w folderze `js`; zalecane jest, aby każda niezależna funkcjonalność była w oddzielnym pliku `.js`, importowanym w `app.js`.
- Obrazy umieszczamy w folderze `src/images`; przed dodaniem powinny być zoptymalizowane. Parcel kopiuje wykorzystane pliki, dzięki czemu nie musi wykonywać ciężkiej optymalizacji podczas budowania na słabszych komputerach.

## ⚙️ Ustawienia edytora kodu

- **WAŻNE**: Nie uruchamiaj watchera SASS (`Watch Sass`), ponieważ pliki CSS generują się z SCSS za pomocą Parcela.
- Wyłącz autozapis w edytorze, ponieważ zapis pliku z niekompletnymi zmianami może powodować błędy w Parcelu.

## 🤝 Wkład

Wszelkie sugestie i pull requesty są mile widziane. Aby zgłosić problem lub zasugerować funkcjonalność, otwórz [nowy issue](https://github.com/brzozanet/moviebox/issues).
