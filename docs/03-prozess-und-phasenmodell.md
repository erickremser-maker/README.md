# 03 Prozess- und Phasenmodell

## Gesamtprozess

| Reihenfolge | Phase | Eintrittskriterium | Austrittskriterium | Hauptrisiko |
|---:|---|---|---|---|
| 1 | Vorplanung | Projekt angelegt und Auftraggeber benannt | Variantenentscheidung und Freigabe zur Ausführungsplanung | unklare Anforderungen |
| 2 | Ausführungsplanung | Vorplanung freigegeben | prüffähiges Dokumentenpaket vollständig | unvollständige technische Unterlagen |
| 3 | Planprüfung | Dokumentenpaket eingereicht | Prüfergebnis freigegeben oder Nachbesserung erzeugt | offene Prüfpunkte |
| 4 | BVB-Freigabe | Planprüfung abgeschlossen oder definiert freigegeben | BVB-Entscheidung mit Auflagen/Freigabe dokumentiert | rechtlich/formale Freigabe fehlt |
| 5 | Realisierung | Realisierungsfreigabe erteilt | Inbetriebnahme/Abnahme erfolgt | Termin- und Budgetabweichung |
| 6 | Dokumentation | Abnahme/Inbetriebnahme erfolgt oder parallel gestartet | Dokumentationspaket vollständig und archiviert | fehlende As-built-Unterlagen |

## Phasendetails

| Phase | Teilbereiche | Statuswerte | Pflichtfelder | Typische Dokumente | Verantwortlich | Abhängigkeiten |
|---|---|---|---|---|---|---|
| Vorplanung | Bedarf, Bestand, Varianten, Machbarkeit, Grobkosten, Risiken | Nicht gestartet; In Bearbeitung; Rückfrage offen; Zur Prüfung bereit; Abgeschlossen; Blockiert | Projektziel; Standort/Anlage; Projektmanager; Auftraggeber; Fachverantwortlicher; Ziel-Inbetriebnahme; Budgetrahmen | Bedarfsbeschreibung; Lageplan; Bestandsunterlagen; Variantenvergleich; Grobkostenschätzung | Projektmanager; Planungsingenieur; technischer Fachverantwortlicher | Voraussetzung für Ausführungsplanung |
| Ausführungsplanung | Detailplanung, Zeichnungen, Berechnungen, LV, Schnittstellen, Termine | Nicht gestartet; In Bearbeitung; Interne Klärung; Unterlagen unvollständig; Zur Planprüfung bereit; Abgeschlossen; Blockiert | Planungsingenieur; Planungsstand; Dokumentenpaket; Gewerke; Schnittstellen; Kosten-Forecast; Stunden-Forecast | Ausführungspläne; Berechnungen; Spezifikationen; LV; Terminplan | Planungsingenieur | Benötigt Vorplanung; liefert Planprüfung |
| Planprüfung | Vollständigkeit, Technik, Normen, Mängel, Wiedervorlage | Nicht gestartet; Eingereicht; In Prüfung; Rückfragen offen; Nachbesserung erforderlich; Freigegeben; Abgelehnt; Blockiert | Planprüfer; Eingangsdatum; Prüfgegenstand; Prüfergebnis; Prüffrist; offene Prüfpunkte | Prüfprotokoll; kommentierte Pläne; Mängelliste; Richtliniencheckliste | Planprüfer | Benötigt prüffähige Planung; liefert BVB/Realisation |
| BVB-Freigabe | formale Bewertung, Auflagen, Freigabeentscheidung | Nicht gestartet; Zur BVB-Prüfung bereit; In BVB-Prüfung; Auflagen offen; Freigegeben; Abgelehnt; Zurückgezogen; Blockiert | BVB; Freigabegegenstand; Freigabedatum; Auflagen; Entscheidung; Freigabedokument | BVB-Freigabeformular; Auflagenliste; Unterschriftenblatt; Genehmigungsunterlagen | BVB | Benötigt Planprüfung; blockiert Realisierung bei offenen Auflagen |
| Realisierung | Arbeitsvorbereitung, Ausführung, Dienstleister, Abnahme, Inbetriebnahme | Nicht gestartet; In Vorbereitung; In Umsetzung; Verzögert; Teilabgenommen; Inbetriebnahme geplant; In Betrieb genommen; Abgeschlossen; Blockiert | Realisierungsverantwortlicher; Start; Inbetriebnahmetermin; Dienstleister; Sicherheitsfreigaben; Abnahmestatus | Montagepläne; Bautagebuch; Abnahmeprotokolle; Mängelliste; Inbetriebnahmeprotokoll | Realisierungsverantwortlicher | Benötigt Freigabe; liefert Dokumentation |
| Dokumentation | As-built, Übergabe, Abschluss, Lessons Learned, Archiv | Nicht gestartet; In Sammlung; Unvollständig; In Prüfung; Nacharbeit erforderlich; Vollständig; Archiviert | Dokumentationsverantwortlicher; Dokumentenpaket; As-built-Stand; Nachweise; Restpunkte; Archivstatus | As-built-Pläne; Abschlussbericht; Übergabeprotokoll; Wartungsunterlagen; Lessons Learned | Dokumentationsverantwortlicher | Benötigt Abnahmen und Nachweise |

## Workflow-Regeln

| Regel | Auslöser | Systemreaktion |
|---|---|---|
| Phase kann nicht abgeschlossen werden | Pflichtfelder oder Pflichtdokumente fehlen | Abschlussbutton gesperrt, fehlende Felder anzeigen. |
| Planprüfung überfällig | Prüffrist überschritten | Teams/Outlook-Hinweis an Planprüfer und Projektmanager. |
| BVB-Auflage offen | Auflage nach Fälligkeit nicht erledigt | Eskalation an Projektmanager und Auftraggeber. |
| Kritischer Termin verschoben | Meilenstein/Inbetriebnahme geändert | Terminverschiebungsformular verpflichtend öffnen. |
| Budgetabweichung > Schwelle | Forecast > Soll plus Toleranz | Kommentar und Eskalationsstatus erforderlich. |
