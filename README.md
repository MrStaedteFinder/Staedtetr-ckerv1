# Städtetracker

Eine installierbare Web-App zum Sammeln besuchter Städte – aktuell in Deutschland und Frankreich.

## Aktueller Stand: Version 0.15

- Deutschland-Challenge mit **237 Städten**
- Frankreich-Challenge mit **150 Städten in 13 Regionen**
- Länderwahl über den Button **„Deutschland“** auf der Startseite
- Besuche, Erstbesuchsdaten und Fortschritt werden je Land getrennt gespeichert
- Europa-Challenge mit 48 Hauptstädten
- Benutzerkonto, Cloud-Synchronisierung, Freundschaftsanfragen und Freunde-Rangliste
- Interaktive, leicht gekippte Europa-Karte
  - Deutschland ist hell hervorgehoben
  - alle 237 deutschen Challenge-Städte sind als Punkte sichtbar
  - weißer Punkt = offen, grüner Punkt = besucht
  - Tippen auf einen Punkt öffnet die Stadt

## Installation auf dem Handy

### iPhone

1. Seite in **Safari** öffnen.
2. Auf **Teilen** tippen.
3. **Zum Home-Bildschirm** auswählen.
4. **Hinzufügen** tippen.

### Samsung / Android

1. Seite in **Chrome** öffnen.
2. Im Menü auf **App installieren** oder **Zum Startbildschirm hinzufügen** tippen.

Danach startet Städtetracker wie eine normale App.

## Aktualisieren

Für eine neue Version alle Dateien dieses Ordners im GitHub-Repository ersetzen. Die App lädt beim nächsten Öffnen automatisch die neue Version. Falls noch die alte Ansicht erscheint: App einmal komplett schließen und neu öffnen.

## Kartenhinweis

Die Kartenansicht braucht beim ersten Öffnen eine Internetverbindung. Die Städte und dein Fortschritt bleiben davon unabhängig gespeichert.

## Datenquellen

- Deutsche Städte: Statistisches Bundesamt und GeoNames
- Französische Städte und Koordinaten: GeoNames
- Kartenbasis: OpenFreeMap / OpenStreetMap

## Projektdateien

- `index.html` – Oberfläche
- `styles.css` – Design
- `app.js` – App-Logik, Länder, Besuche, Freunde und Karte
- `germany-city-coordinates.js` – Koordinaten der deutschen Challenge-Städte
- `france-cities.js` – Städte für Frankreich
- `sw.js` – Offline-Cache und Updates
- `manifest.webmanifest` – App-Name, Icon und Installation

