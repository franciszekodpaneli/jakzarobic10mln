```mermaid



sequenceDiagram
    participant Przeglądarka
    participant Serwer

    Przeglądarka->>Serwer: GET /spa
    Serwer-->>Przeglądarka: HTML z kontenerem SPA

    Przeglądarka->>Serwer: GET /main.css
    Serwer-->>Przeglądarka: Styl CSS

    Przeglądarka->>Serwer: GET /spa.js
    Serwer-->>Przeglądarka: Skrypt JavaScript SPA

    Note right of Przeglądarka: JS uruchamia aplikację i pobiera dane

    Przeglądarka->>Serwer: GET /data.json
    Serwer-->>Przeglądarka: JSON z notatkami

    Note right of Przeglądarka: JS renderuje notatki bez przeładowania strony

