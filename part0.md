```mermaid


sequenceDiagram
    participant Przeglądarka
    participant Serwer

    Note over Przeglądarka: Użytkownik wpisuje notatkę i klika "Zapisz"

    Przeglądarka->>Serwer: POST /new_note (wysłanie danych formularza)
    Serwer-->>Przeglądarka: HTTP 302 Redirect do /notes

    Note over Przeglądarka: Przeglądarka automatycznie przechodzi do /notes

    Przeglądarka->>Serwer: GET /notes
    Serwer-->>Przeglądarka: HTML strony z notatkami

    Przeglądarka->>Serwer: GET /main.css
    Serwer-->>Przeglądarka: Styl CSS

    Przeglądarka->>Serwer: GET /main.js
    Serwer-->>Przeglądarka: Skrypt JavaScript

    Note right of Przeglądarka: JS pobiera dane notatek

    Przeglądarka->>Serwer: GET /data.json
    Serwer-->>Przeglądarka: JSON z notatkami (w tym nowa)

    Note right of Przeglądarka: JS renderuje listę notatek na stronie
