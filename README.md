# 🎥 Filmoteka (Moviebox)

**Filmoteka (Moviebox)** to nowoczesna aplikacja webowa umożliwiająca przeglądanie, wyszukiwanie i zarządzanie filmami. Dzięki integracji z The Movie Database (TMDb) API, użytkownicy mogą odkrywać najpopularniejsze produkcje, przeglądać szczegółowe informacje o filmach, oglądać zwiastuny oraz tworzy ćwłasne listy ulubionych tytułów.

## 🌐 Demo

Aplikacja jest dostępna online:

- [GitHub Pages](https://brzozanet.github.io/project-moviebox/)

## 🎬 Funkcjonalności

- **Przeglądanie popularnych filmów**: Automatyczne ładowanie najpopularniejszych filmów z TMDb API
- **Wyszukiwanie filmów**: Wyszukiwanie filmów po tytule w czasie rzeczywistym
- **Szczegółowe informacje**: Modal z pełnymi informacjami o filmie (opis, obsada, oceny, gatunki)
- **Zwiastuny**: Oglądanie oficjalnych zwiastunów filmów bezpośrednio w aplikacji
- **Biblioteka filmów**:
  - Lista obejrzanych filmów (Watched)
  - Lista filmów do obejrzenia (Queue)
  - Przechowywanie danych w localStorage
- **Nieskończone przewijanie**: Automatyczne ładowanie kolejnych stron z wynikami podczas przewijania
- **Responsywny design**: Optymalizacja wyświetlania na różnych urządzeniach

## 🛠️ Technologie

- **JavaScript (ES6+)**: Główny język programowania
- **Parcel**: Bundler i narzędzie do developmentu
- **SASS/SCSS**: Preprocesor CSS
- **jQuery**: Manipulacja DOM
- **Notiflix**: Powiadomienia i komunikaty użytkownika
- **The Movie Database (TMDb) API**: Źródło danych o filmach
- **LocalStorage**: Przechowywanie danych użytkownika lokalnie

## 📁 Struktura projektu

```
project-moviebox/
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
│   ├── partials/               # HTML partials
│   ├── sass/                   # Style SASS/SCSS
│   │   ├── main.scss           # Główny plik stylów
│   │   └── partials/           # Częściowe pliki stylów
│   ├── index.html              # Strona główna
│   └── library.html            # Strona biblioteki
├── dist/                       # Zbudowane pliki (generowane)
├── package.json                # Zależności i skrypty
└── README.md                   # Dokumentacja
```

## 📋 Wymagania

Na komputerze musi być zainstalowana LTS-wersja [Node.js](https://nodejs.org/en/).

## 🚀 Instalacja

1. **Klonowanie repozytorium**:

```bash
git clone https://github.com/brzozanet/project-moviebox.git
cd project-moviebox
```

2. **Instalacja zależności**:

```bash
npm install
```

## 💻 Uruchomienie

### Tryb deweloperski:

```bash
npm run dev
```

Aplikacja będzie dostępna pod adresem: [http://localhost:5173](http://localhost:5173).

## 📦 Build

Budowanie wersji produkcyjnej:

```bash
npm run build
```

## 🌐 Deploy

Kod będzie automatycznie się zbierać i robić deploy aktualnej wersji projektu na GitHub Pages, w gałąź `gh-pages`, za każdym razem jeśli zostaną wprowadzone zmiany w `main`. Na przykład, po bezpośrednim push lub po przyjęciu pull-request. Po pewnym czasie stronę można będzie zobaczyć na żywo pod adresem:

**[https://brzozanet.github.io/project-moviebox/](https://brzozanet.github.io/project-moviebox/)**

### Zasady organizacji plików

- Wszystkie partiale plików stylów powinny być w folderze `src/sass` i importować się w `src/sass/main.scss`
- Wszystkie partiale plików kontentu HTML powinny się znajdować w folderze `partials` i importować się w `index.html` lub `library.html`
- Pliki skryptów JS umieszczamy w folderze `js`, wskazane aby każda niezależna funkcjonalność znalazła się w oddzielnym pliku .js i importowała się w pliku `app.js`
- Zdjęcia umieszczamy w folderze `src/images`, przed dodaniem powinny być zoptymalizowane. Program po prostu kopiuje wykorzystane zdjęcia aby system nie musiał ich optymalizować, bo na słabych komputerach to może zająć dużo czasu.

## ⚙️ Ustawienia edytora kodu

- **WAŻNE**: NIE uruchamiaj watchera SASS (`Watch Sass`), ponieważ pliki css generują się z scss za pomocą Parcel JS
- Wyłączamy autozapis w edytorze, ponieważ każdy błąd w pliku, powstały choćby poprzez autozapis w czasie pisania instrukcji, skutkuje błędem Parcel JS

## 🤝 Wkład

Wszelkie sugestie i pull requesty są mile widziane. Aby zgłosić problem lub zasugerować funkcjonalność, otwórz [nowy issue](https://github.com/brzozanet/project-moviebox/issues).

<br>

![Screenshot App](https://raw.githubusercontent.com/brzozanet/project-moviebox/refs/heads/main/src/images/gh-cover-project-moviebox.jpg)
