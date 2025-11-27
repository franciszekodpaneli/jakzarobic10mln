```mermaid



sequenceDiagram
    participant Przeglądarka
    participant Serwer

    Note over Przeglądarka: Użytkownik wpisuje notatkę i klika "Zapisz"

    Przeglądarka->>Serwer: POST /new_note_spa (wysłanie JSON z notatką)
    Serwer-->>Przeglądarka: JSON z nową notatką

    Note right of Przeglądarka: JS dodaje notatkę do listy bez przeładowania strony

