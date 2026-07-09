# 05 Datenmodell und Datenwörterbuch

## Kernentitäten

| Entität | Zweck | Beziehung |
|---|---|---|
| Projekt | zentrale Projektakte | 1:n zu Rollen, Phasen, Terminen, Risiken, Budget, Stunden, Entscheidungen, Dokumenten |
| Person | interne/externe Beteiligte | 1:n zu Projektrollen und Stunden |
| Projektrolle | Person in projektspezifischer Rolle | n:1 zu Projekt und Person |
| Projektphase | konkrete Phase je Projekt | n:1 zu Projekt |
| Termin | Meilenstein/Inbetriebnahme | n:1 zu Projekt |
| Terminverschiebung | Historie und Genehmigung von Terminänderungen | n:1 zu Termin |
| Budgetposition | Budgetsteuerung | n:1 zu Projekt/Phase/Rolle |
| Stundenposition | Aufwand und Auslastung | n:1 zu Projekt/Phase/Rolle/Person |
| Risiko | Risiken/kritische Punkte | n:1 zu Projekt |
| Entscheidung | Entscheidungslog | n:1 zu Projekt |
| Dokumentmetadatum | fachliche Dokumentbeschreibung | n:1 zu Projekt/Phase |

## Datenwörterbuch

### Tabelle: Projekt

| Tabellenname | Feldname | Datentyp | Pflichtfeld | Quelle | Schreibberechtigte Rolle | Anzeige in Maske | Historisierung |
|---|---|---|---|---|---|---|---|
| Projekt | Projekt-ID | Autonummer/Text | Ja | berechnet | Systemadministrator | Projektakte, Portfolio | Ja |
| Projekt | Projekttitel | Text | Ja | manuell | Projektmanager, PMO | Projektakte, Portfolio | Ja |
| Projekt | Projektart | Auswahl | Ja | manuell | Projektmanager, PMO | Projektakte, Portfolio | Ja |
| Projekt | Standort/Anlage | Lookup | Ja | manuell | Projektmanager | Projektakte, Portfolio | Ja |
| Projekt | Auftraggeber | Lookup Projektrolle | Ja | manuell | Projektmanager, PMO | Projektakte, Rollenmatrix | Ja |
| Projekt | Gesamtstatus | Auswahl | Ja | manuell | Projektmanager | Projektakte, Portfolio | Ja |
| Projekt | Aktuelle Phase | Lookup Projektphase | Ja | berechnet | System | Projektakte, Portfolio | Ja |
| Projekt | Ziel-Inbetriebnahme | Datum | Ja | manuell | Projektmanager | Projektakte, Terminübersicht | Ja |
| Projekt | Aktuelle Inbetriebnahme | Datum | Ja | berechnet/manuell via Workflow | Projektmanager nach Genehmigung | Projektakte, Terminübersicht | Ja |
| Projekt | Budget Soll gesamt | Währung | Ja | Import/manuell | Auftraggeber, PMO | Budgetansicht, Portfolio | Ja |
| Projekt | Budget Forecast gesamt | Währung | Ja | berechnet | System/PMO | Budgetansicht, Portfolio | Ja |
| Projekt | Stundenbudget gesamt | Zahl | Ja | manuell/import | Projektmanager, PMO | Stundenansicht | Ja |

### Tabelle: Projektrolle

| Tabellenname | Feldname | Datentyp | Pflichtfeld | Quelle | Schreibberechtigte Rolle | Anzeige in Maske | Historisierung |
|---|---|---|---|---|---|---|---|
| Projektrolle | Projekt | Lookup Projekt | Ja | berechnet | System | Rollenmatrix | Ja |
| Projektrolle | Person | Lookup Person | Ja | manuell/import | Projektmanager, PMO | Rollenmatrix | Ja |
| Projektrolle | Rolle | Auswahl | Ja | manuell | Projektmanager, PMO | Rollenmatrix, Projektakte | Ja |
| Projektrolle | RACI-Kategorie | Auswahl | Nein | manuell | Projektmanager | Rollenmatrix | Ja |
| Projektrolle | Startdatum | Datum | Ja | manuell | Projektmanager | Rollenmatrix | Ja |
| Projektrolle | Enddatum | Datum | Nein | manuell | Projektmanager | Rollenmatrix | Ja |
| Projektrolle | Stellvertretung | Lookup Person | Nein | manuell | Projektmanager | Rollenmatrix | Ja |
| Projektrolle | Zugriffsstufe | Auswahl | Ja | manuell/berechnet | PMO, Systemadministrator | Rollenmatrix | Ja |

### Tabelle: Projektphase

| Tabellenname | Feldname | Datentyp | Pflichtfeld | Quelle | Schreibberechtigte Rolle | Anzeige in Maske | Historisierung |
|---|---|---|---|---|---|---|---|
| Projektphase | Projekt | Lookup Projekt | Ja | berechnet | System | Phasenübersicht | Ja |
| Projektphase | Phase | Auswahl | Ja | berechnet | System/PMO | Phasenübersicht | Nein |
| Projektphase | Phasenstatus | Auswahl | Ja | manuell | verantwortliche Projektrolle | Phasenübersicht, Projektakte | Ja |
| Projektphase | Verantwortliche Rolle | Lookup Projektrolle | Ja | manuell | Projektmanager | Phasenübersicht | Ja |
| Projektphase | Start geplant | Datum | Ja | manuell | Projektmanager | Phasenübersicht | Ja |
| Projektphase | Ende geplant | Datum | Ja | manuell | Projektmanager | Phasenübersicht | Ja |
| Projektphase | Start ist | Datum | Nein | manuell | verantwortliche Projektrolle | Phasenübersicht | Ja |
| Projektphase | Ende ist | Datum | Nein | manuell | verantwortliche Projektrolle | Phasenübersicht | Ja |
| Projektphase | Pflichtfelder vollständig | Ja/Nein | Ja | berechnet | System | Phasenübersicht | Ja |
| Projektphase | Pflichtdokumente vollständig | Ja/Nein | Ja | berechnet | System | Phasenübersicht | Ja |
| Projektphase | Blockadegrund | Mehrzeiliger Text | Nein | manuell | Projektmanager, verantwortliche Rolle | Phasenübersicht | Ja |

### Tabelle: Termin

| Tabellenname | Feldname | Datentyp | Pflichtfeld | Quelle | Schreibberechtigte Rolle | Anzeige in Maske | Historisierung |
|---|---|---|---|---|---|---|---|
| Termin | Projekt | Lookup Projekt | Ja | berechnet | System | Terminübersicht | Ja |
| Termin | Termintitel | Text | Ja | manuell | Projektmanager | Terminübersicht, Projektakte | Ja |
| Termin | Termintyp | Auswahl | Ja | manuell | Projektmanager | Terminübersicht | Ja |
| Termin | Datum ursprünglich | Datum | Ja | manuell | Projektmanager | Terminübersicht | Ja |
| Termin | Datum aktuell | Datum | Ja | berechnet/manuell via Genehmigung | Projektmanager nach Genehmigung | Terminübersicht, Portfolio | Ja |
| Termin | Datum ist | Datum | Nein | manuell | Projektmanager, Realisierungsverantwortlicher | Terminübersicht | Ja |
| Termin | Kritisch | Ja/Nein | Ja | manuell | Projektmanager | Terminübersicht | Ja |
| Termin | Terminstatus | Auswahl | Ja | manuell/berechnet | Projektmanager | Terminübersicht | Ja |

### Tabelle: Terminverschiebung

| Tabellenname | Feldname | Datentyp | Pflichtfeld | Quelle | Schreibberechtigte Rolle | Anzeige in Maske | Historisierung |
|---|---|---|---|---|---|---|---|
| Terminverschiebung | Termin | Lookup Termin | Ja | berechnet | System | Terminübersicht, Änderungsverlauf | Ja |
| Terminverschiebung | Altes Datum | Datum | Ja | berechnet | System | Terminverschiebungsdialog | Ja |
| Terminverschiebung | Neues Datum | Datum | Ja | manuell | Projektmanager, Realisierungsverantwortlicher | Terminverschiebungsdialog | Ja |
| Terminverschiebung | Grund | Mehrzeiliger Text | Ja | manuell | Einreicher | Terminverschiebungsdialog | Ja |
| Terminverschiebung | Ursache | Auswahl | Ja | manuell | Einreicher | Terminverschiebungsdialog | Ja |
| Terminverschiebung | Auswirkung Budget | Währung/Text | Ja | manuell | Einreicher, PMO | Terminverschiebungsdialog, Budgetansicht | Ja |
| Terminverschiebung | Auswirkung Stunden | Zahl/Text | Ja | manuell | Einreicher | Terminverschiebungsdialog, Stundenansicht | Ja |
| Terminverschiebung | Betroffene Rollen | Mehrfach-Lookup | Ja | manuell | Einreicher | Terminverschiebungsdialog | Ja |
| Terminverschiebung | Genehmigungsstatus | Auswahl | Ja | berechnet/manuell | Genehmiger | Terminübersicht, Änderungsverlauf | Ja |
| Terminverschiebung | Genehmiger | Lookup Projektrolle | Ja | manuell/berechnet | Projektmanager, PMO | Terminverschiebungsdialog | Ja |

### Tabelle: Budgetposition

| Tabellenname | Feldname | Datentyp | Pflichtfeld | Quelle | Schreibberechtigte Rolle | Anzeige in Maske | Historisierung |
|---|---|---|---|---|---|---|---|
| Budgetposition | Projekt | Lookup Projekt | Ja | berechnet | System | Budgetansicht | Ja |
| Budgetposition | Phase | Lookup Projektphase | Nein | manuell | Projektmanager, PMO | Budgetansicht | Ja |
| Budgetposition | Kostenart | Auswahl | Ja | manuell/import | PMO, Controlling | Budgetansicht | Ja |
| Budgetposition | Verantwortliche Rolle | Lookup Projektrolle | Nein | manuell | Projektmanager | Budgetansicht | Ja |
| Budgetposition | Budget Soll | Währung | Ja | manuell/import | Auftraggeber, PMO | Budgetansicht | Ja |
| Budgetposition | Budget Ist | Währung | Nein | Import | Controlling/System | Budgetansicht | Ja |
| Budgetposition | Budget Forecast | Währung | Ja | manuell/berechnet | Projektmanager, PMO | Budgetansicht | Ja |
| Budgetposition | Gebundenes Budget | Währung | Nein | Import/manuell | Controlling, PMO | Budgetansicht | Ja |
| Budgetposition | Restbudget | Währung | Ja | berechnet | System | Budgetansicht | Ja |
| Budgetposition | Budgetabweichung | Währung | Ja | berechnet | System | Budgetansicht, Portfolio | Ja |
| Budgetposition | Kommentar | Mehrzeiliger Text | bedingt | manuell | Projektmanager, PMO | Budgetansicht | Ja |

### Tabelle: Stundenposition

| Tabellenname | Feldname | Datentyp | Pflichtfeld | Quelle | Schreibberechtigte Rolle | Anzeige in Maske | Historisierung |
|---|---|---|---|---|---|---|---|
| Stundenposition | Projekt | Lookup Projekt | Ja | berechnet | System | Stundenansicht | Ja |
| Stundenposition | Phase | Lookup Projektphase | Ja | manuell | Projektmanager | Stundenansicht | Ja |
| Stundenposition | Person | Lookup Person | Ja | manuell/import | Projektmanager, PMO | Stundenansicht, Auslastung | Ja |
| Stundenposition | Projektrolle | Lookup Projektrolle | Ja | berechnet/manuell | Projektmanager | Stundenansicht | Ja |
| Stundenposition | Zeitraum | Monat/KW | Ja | manuell/import | Projektmanager, PMO | Stundenansicht | Ja |
| Stundenposition | Stundenbudget | Zahl | Ja | manuell | Projektmanager | Stundenansicht | Ja |
| Stundenposition | Verbrauchte Stunden | Zahl | Nein | Import/manuell | Person, PMO, System | Stundenansicht | Ja |
| Stundenposition | Stunden Forecast | Zahl | Ja | manuell/berechnet | Projektmanager | Stundenansicht | Ja |
| Stundenposition | Reststunden | Zahl | Ja | berechnet | System | Stundenansicht | Ja |
| Stundenposition | Auslastung Person | Prozent | Ja | berechnet | System | Stundenansicht, Portfolio | Ja |
| Stundenposition | Auslastungsstatus | Auswahl | Ja | berechnet | System | Stundenansicht | Ja |

### Tabelle: Risiko

| Tabellenname | Feldname | Datentyp | Pflichtfeld | Quelle | Schreibberechtigte Rolle | Anzeige in Maske | Historisierung |
|---|---|---|---|---|---|---|---|
| Risiko | Projekt | Lookup Projekt | Ja | berechnet | System | Risikoübersicht | Ja |
| Risiko | Risikotitel | Text | Ja | manuell | Projektmanager, Fachverantwortlicher | Risikoübersicht, Projektakte | Ja |
| Risiko | Beschreibung | Mehrzeiliger Text | Ja | manuell | Projektmanager, Fachverantwortlicher | Risikoübersicht | Ja |
| Risiko | Eintrittswahrscheinlichkeit | Auswahl/Zahl | Ja | manuell | Risikoeigner | Risikoübersicht | Ja |
| Risiko | Auswirkung | Auswahl/Zahl | Ja | manuell | Risikoeigner | Risikoübersicht | Ja |
| Risiko | Risikowert | Zahl | Ja | berechnet | System | Risikoübersicht, Portfolio | Ja |
| Risiko | Maßnahme | Mehrzeiliger Text | bedingt | manuell | Risikoeigner | Risikoübersicht | Ja |
| Risiko | Eskalationsbedarf | Ja/Nein | Ja | manuell/berechnet | Projektmanager | Risikoübersicht, Portfolio | Ja |

### Tabelle: Entscheidung

| Tabellenname | Feldname | Datentyp | Pflichtfeld | Quelle | Schreibberechtigte Rolle | Anzeige in Maske | Historisierung |
|---|---|---|---|---|---|---|---|
| Entscheidung | Projekt | Lookup Projekt | Ja | berechnet | System | Entscheidungslog | Ja |
| Entscheidung | Entscheidungstitel | Text | Ja | manuell | Projektmanager | Entscheidungslog | Ja |
| Entscheidung | Entscheidungsdatum | Datum | Ja | manuell | Projektmanager, Auftraggeber | Entscheidungslog | Ja |
| Entscheidung | Entscheider/Gremium | Text/Lookup | Ja | manuell | Projektmanager, Auftraggeber | Entscheidungslog | Ja |
| Entscheidung | Entscheidung | Mehrzeiliger Text | Ja | manuell | Auftraggeber, Projektmanager | Entscheidungslog | Ja |
| Entscheidung | Begründung | Mehrzeiliger Text | Ja | manuell | Entscheider | Entscheidungslog | Ja |
| Entscheidung | Auswirkung Termin/Budget/Stunden | Mehrzeiliger Text | Nein | manuell | Projektmanager | Entscheidungslog | Ja |
| Entscheidung | Dokumentverweis | URL/Lookup Dokument | Nein | manuell | Projektmanager | Entscheidungslog | Ja |

### Tabelle: Dokumentmetadatum

| Tabellenname | Feldname | Datentyp | Pflichtfeld | Quelle | Schreibberechtigte Rolle | Anzeige in Maske | Historisierung |
|---|---|---|---|---|---|---|---|
| Dokumentmetadatum | Projekt | Lookup Projekt | Ja | berechnet | System | Dokumentenbereich | Ja |
| Dokumentmetadatum | Phase | Lookup Projektphase | Nein | manuell | Dokumentationsverantwortlicher, Planungsingenieur | Dokumentenbereich | Ja |
| Dokumentmetadatum | Dokumenttyp | Auswahl | Ja | manuell | Dokumenteigner | Dokumentenbereich | Ja |
| Dokumentmetadatum | Dokumentstatus | Auswahl | Ja | manuell | Dokumenteigner | Dokumentenbereich | Ja |
| Dokumentmetadatum | Version | Text | Nein | Import/SharePoint | System | Dokumentenbereich | Ja |
| Dokumentmetadatum | Verantwortlich | Lookup Projektrolle | Ja | manuell | Projektmanager | Dokumentenbereich | Ja |
| Dokumentmetadatum | SharePoint-Link | URL | Ja | Import/SharePoint | System | Dokumentenbereich | Ja |
| Dokumentmetadatum | Pflichtdokument | Ja/Nein | Ja | manuell/berechnet | PMO | Dokumentenbereich, Phasenübersicht | Ja |

### Tabelle: Planprüfung

| Tabellenname | Feldname | Datentyp | Pflichtfeld | Quelle | Schreibberechtigte Rolle | Anzeige in Maske | Historisierung |
|---|---|---|---|---|---|---|---|
| Planprüfung | Projekt | Lookup Projekt | Ja | berechnet | System | Planprüfung, Projektakte | Ja |
| Planprüfung | Phase | Lookup Projektphase | Ja | berechnet | System | Planprüfung, Phasenübersicht | Ja |
| Planprüfung | Prüfgegenstand | Text | Ja | manuell | Projektmanager, Planprüfer | Planprüfung | Ja |
| Planprüfung | Eingangsdatum | Datum | Ja | manuell | Planprüfer, Projektmanager | Planprüfung | Ja |
| Planprüfung | Prüffrist | Datum | Ja | manuell/berechnet | Planprüfer, Projektmanager | Planprüfung, Portfolio | Ja |
| Planprüfung | Planprüfer | Lookup Projektrolle | Ja | manuell | Projektmanager, PMO | Planprüfung, Rollenmatrix | Ja |
| Planprüfung | Prüfstatus | Auswahl | Ja | manuell | Planprüfer | Planprüfung, Phasenübersicht | Ja |
| Planprüfung | Prüfergebnis | Auswahl | bedingt | manuell | Planprüfer | Planprüfung | Ja |
| Planprüfung | Anzahl offene Mängel | Ganze Zahl | Ja | berechnet | System | Planprüfung, Portfolio | Ja |
| Planprüfung | Freigabekommentar | Mehrzeiliger Text | bedingt | manuell | Planprüfer | Planprüfung, Entscheidungslog | Ja |
| Planprüfung | Prüfprotokoll-Link | URL/Lookup Dokument | bedingt | Import/SharePoint | Planprüfer, Dokumentationsverantwortlicher | Planprüfung, Dokumentenbereich | Ja |

### Tabelle: Prüfmangel

| Tabellenname | Feldname | Datentyp | Pflichtfeld | Quelle | Schreibberechtigte Rolle | Anzeige in Maske | Historisierung |
|---|---|---|---|---|---|---|---|
| Prüfmangel | Planprüfung | Lookup Planprüfung | Ja | berechnet | System | Planprüfung | Ja |
| Prüfmangel | Mangelnummer | Autonummer | Ja | berechnet | System | Planprüfung | Ja |
| Prüfmangel | Beschreibung | Mehrzeiliger Text | Ja | manuell | Planprüfer | Planprüfung, Aufgabenliste | Ja |
| Prüfmangel | Kategorie | Auswahl | Ja | manuell | Planprüfer | Planprüfung | Ja |
| Prüfmangel | Verantwortliche Rolle | Lookup Projektrolle | Ja | manuell | Planprüfer, Projektmanager | Planprüfung, Aufgabenliste | Ja |
| Prüfmangel | Fälligkeitsdatum | Datum | Ja | manuell | Planprüfer, Projektmanager | Planprüfung, Aufgabenliste | Ja |
| Prüfmangel | Mangelstatus | Auswahl | Ja | manuell | Planprüfer, Planungsingenieur | Planprüfung | Ja |
| Prüfmangel | Nachweis-Link | URL/Lookup Dokument | Nein | Import/SharePoint | Planungsingenieur | Planprüfung, Dokumentenbereich | Ja |

### Tabelle: BVB-Freigabe

| Tabellenname | Feldname | Datentyp | Pflichtfeld | Quelle | Schreibberechtigte Rolle | Anzeige in Maske | Historisierung |
|---|---|---|---|---|---|---|---|
| BVB-Freigabe | Projekt | Lookup Projekt | Ja | berechnet | System | BVB-Freigabe, Projektakte | Ja |
| BVB-Freigabe | Phase | Lookup Projektphase | Ja | berechnet | System | BVB-Freigabe, Phasenübersicht | Ja |
| BVB-Freigabe | BVB-Rolle | Lookup Projektrolle | Ja | manuell | Projektmanager, PMO | BVB-Freigabe, Rollenmatrix | Ja |
| BVB-Freigabe | Freigabegegenstand | Text | Ja | manuell | Projektmanager, BVB | BVB-Freigabe | Ja |
| BVB-Freigabe | Betroffene Pläne | Mehrfach-Lookup Dokument | Ja | manuell | Planungsingenieur, BVB | BVB-Freigabe, Dokumentenbereich | Ja |
| BVB-Freigabe | Freigabestatus | Auswahl | Ja | manuell | BVB | BVB-Freigabe, Portfolio | Ja |
| BVB-Freigabe | Freigabedatum | Datum | bedingt | manuell | BVB | BVB-Freigabe | Ja |
| BVB-Freigabe | Entscheidung | Auswahl | bedingt | manuell | BVB | BVB-Freigabe, Entscheidungslog | Ja |
| BVB-Freigabe | Entscheidungsbegründung | Mehrzeiliger Text | bedingt | manuell | BVB | BVB-Freigabe | Ja |
| BVB-Freigabe | Freigabedokument-Link | URL/Lookup Dokument | bedingt | Import/SharePoint | BVB, Dokumentationsverantwortlicher | BVB-Freigabe, Dokumentenbereich | Ja |

### Tabelle: BVB-Auflage

| Tabellenname | Feldname | Datentyp | Pflichtfeld | Quelle | Schreibberechtigte Rolle | Anzeige in Maske | Historisierung |
|---|---|---|---|---|---|---|---|
| BVB-Auflage | BVB-Freigabe | Lookup BVB-Freigabe | Ja | berechnet | System | BVB-Freigabe | Ja |
| BVB-Auflage | Auflagentitel | Text | Ja | manuell | BVB | BVB-Freigabe, Aufgabenliste | Ja |
| BVB-Auflage | Auflagenbeschreibung | Mehrzeiliger Text | Ja | manuell | BVB | BVB-Freigabe | Ja |
| BVB-Auflage | Verantwortliche Rolle | Lookup Projektrolle | Ja | manuell | BVB, Projektmanager | BVB-Freigabe, Aufgabenliste | Ja |
| BVB-Auflage | Fälligkeitsdatum | Datum | Ja | manuell | BVB, Projektmanager | BVB-Freigabe, Aufgabenliste | Ja |
| BVB-Auflage | Auflagenstatus | Auswahl | Ja | manuell | BVB, Planungsingenieur | BVB-Freigabe | Ja |
| BVB-Auflage | Erledigungsnachweis-Link | URL/Lookup Dokument | bedingt | Import/SharePoint | Planungsingenieur, BVB | BVB-Freigabe, Dokumentenbereich | Ja |

### Tabelle: Aufgabe / Offener Punkt

| Tabellenname | Feldname | Datentyp | Pflichtfeld | Quelle | Schreibberechtigte Rolle | Anzeige in Maske | Historisierung |
|---|---|---|---|---|---|---|---|
| Aufgabe | Projekt | Lookup Projekt | Ja | berechnet | System | Projektakte, Aufgabenliste | Ja |
| Aufgabe | Bezug | Auswahl/Lookup | Nein | manuell/berechnet | System, Projektmanager | Aufgabenliste | Ja |
| Aufgabe | Titel | Text | Ja | manuell | Projektmanager, Planprüfer, BVB | Projektakte, Aufgabenliste | Ja |
| Aufgabe | Beschreibung | Mehrzeiliger Text | Nein | manuell | Ersteller, Verantwortlicher | Aufgabenliste | Ja |
| Aufgabe | Verantwortliche Rolle | Lookup Projektrolle | Ja | manuell | Projektmanager, Ersteller | Aufgabenliste, Rollenmatrix | Ja |
| Aufgabe | Fälligkeitsdatum | Datum | Ja | manuell | Projektmanager, Ersteller | Aufgabenliste, Portfolio | Ja |
| Aufgabe | Priorität | Auswahl | Ja | manuell | Projektmanager, Ersteller | Aufgabenliste | Ja |
| Aufgabe | Aufgabenstatus | Auswahl | Ja | manuell | Verantwortliche Rolle | Aufgabenliste | Ja |
| Aufgabe | Erledigt am | Datum | Nein | berechnet/manuell | Verantwortliche Rolle | Aufgabenliste, Änderungsverlauf | Ja |
