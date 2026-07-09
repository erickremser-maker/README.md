# 06 Benutzeroberflächen und Masken

## Maskenkatalog

| Maske | Zweck | Zielgruppe | Angezeigte Felder | Editierbare Felder | Filter | Aktionen/Buttons | Pflichtlogiken | Benachrichtigungen |
|---|---|---|---|---|---|---|---|---|
| Portfolio-Startseite | Überblick über alle berechtigten Projekte | Management, PMO, Projektmanager | Projekt-ID, Titel, Status, Phase, Projektmanager, Auftraggeber, Inbetriebnahme, Budgetampel, Stundenampel, Risikoampel | keine oder Massenkommentar für PMO | Standort, Phase, Status, Kritikalität, Verantwortlicher | Projekt öffnen, Dashboard öffnen, Export berechtigt | keine Bearbeitung ohne Projektöffnung | rote Projekte, überfällige Statusupdates |
| Projektakte | zentraler Einstieg in ein Projekt | alle Projektbeteiligten nach Berechtigung | Stammdaten, Status, Phase, Termine, Top-Risiken, Budget, Stunden, offene Aufgaben, Dokumentstatus | Status, Kurzkommentar, nächste Schritte je Rolle | Register, Zeitraum, Verantwortliche | Status aktualisieren, Aufgabe erstellen, Terminverschiebung starten | Statusupdate mit Pflichtfeldern; roter Status braucht Maßnahme | Statusfälligkeit, Eskalation |
| Rollenmatrix | Verantwortlichkeiten je Projekt klären | Projektmanager, PMO, alle Beteiligten | Rolle, Person, RACI, Stellvertretung, Start/Ende, Zugriffsstufe | Person, Rolle, RACI, Stellvertretung, Zeitraum | Rolle, aktiv/inaktiv | Rolle hinzufügen, Rolle beenden, Stellvertretung setzen | Pflichtrollen müssen besetzt sein | fehlende Pflichtrolle |
| Phasenübersicht | Fortschritt je Phase steuern | Projektmanager, Fachrollen, PMO | Phase, Status, Start/Ende, Verantwortlicher, Pflichtfelder, Pflichtdokumente, Blockade | Status, Start/Ende ist, Blockadegrund | Phase, Status, Verantwortlicher | Phase starten, Phase abschließen, Blockade melden | Abschluss nur bei vollständigen Pflichtfeldern/-dokumenten | Blockade, überfällige Phase |
| Terminübersicht | Meilensteine und Inbetriebnahme steuern | Projektmanager, Auftraggeber, PMO | Titel, Typ, Baseline, aktuelles Datum, Ist-Datum, Status, kritisch, Verschiebungen | Ist-Datum, Statuskommentar; aktuelles Datum nur via Workflow | Termintyp, kritisch, überfällig | Termin anlegen, Verschiebung beantragen, Genehmigung öffnen | kritischer Termin nur mit Verschiebungsdatensatz änderbar | Genehmigung, Ablehnung, Fälligkeit |
| Terminverschiebungsdialog | Pflichtdokumentation von Terminänderungen | Projektmanager, Realisierungsverantwortlicher, Genehmiger | altes Datum, neues Datum, Grund, Ursache, Budgetauswirkung, Stundenauswirkung, Rollen, Status | neues Datum, Grund, Ursache, Auswirkungen, Rollen, Genehmiger | nicht relevant | Einreichen, Genehmigen, Ablehnen, Zurückziehen | alle Pflichtfelder vor Einreichen; Genehmigung vor Aktualisierung | Genehmigungsanfrage, Entscheidung |
| Planprüfung | Planprüfprozess steuern | Planprüfer, Planungsingenieur, Projektmanager | Prüfgegenstand, Eingangsdatum, Prüffrist, Prüfpunkte, Mängel, Prüfergebnis | Prüfpunkte, Mängel, Ergebnis, Nachbesserung | Prüfer, Status, Fälligkeit | Prüfung starten, Mangel anlegen, Nachbesserung anfordern, freigeben | Ergebnis Pflicht vor Abschluss | überfällige Prüffrist, neue Mängel |
| BVB-Freigabe | BVB-Entscheidung dokumentieren | BVB, Projektmanager, Auftraggeber | Freigabegegenstand, betroffene Dokumente, Auflagen, Entscheidung, Dokumentlink | Auflagen, Entscheidung, Kommentar, Freigabedatum | Status, BVB, Auflagen offen | Freigeben, Ablehnen, Auflage anlegen | Entscheidung nur mit Freigabedokument oder Ablehnungsgrund | Auflage offen, Freigabe/Ablehnung |
| Risikoübersicht | Risiken überwachen | Projektmanager, Fachverantwortliche, Management | Risiko, Wert, Eintritt, Auswirkung, Maßnahme, Eigner, Fälligkeit | Risiko, Bewertung, Maßnahme, Status | Risikoampel, Eigner, Fälligkeit | Risiko anlegen, eskalieren, schließen | hohes Risiko braucht Maßnahme | Eskalation, Maßnahme überfällig |
| Budgetansicht | Budgetsteuerung | Projektmanager, Auftraggeber, PMO, Controlling | Soll, Ist, Forecast, gebunden, Rest, Abweichung, Status | Forecast, Kommentar, Zuordnung; Ist per Import | Kostenart, Phase, Rolle, Status | Forecast aktualisieren, Eskalation erstellen | Abweichung > Schwelle braucht Kommentar | Budgetüberschreitung |
| Stundenansicht | Aufwand und Auslastung steuern | Projektmanager, Teammitglieder, PMO | Person, Rolle, Phase, Zeitraum, Budget, Verbrauch, Forecast, Rest, Auslastung | Stundenbudget, Forecast, eigene Ist-Stunden falls manuell | Person, Rolle, Zeitraum, Phase | Stunden erfassen, Forecast aktualisieren | Überlastung braucht Kommentar oder Maßnahme | Überlastung, Stundenüberschreitung |
| Dokumentenbereich | Dokumente phasenbezogen finden und prüfen | alle berechtigten Nutzer | Dokumenttyp, Phase, Status, Version, Verantwortlicher, Link, Pflichtdokument | Metadaten je Berechtigung; Datei in SharePoint | Phase, Typ, Status, Pflichtdokument | Dokument hochladen, Link öffnen, Status setzen | Pflichtdokumente vor Phasenabschluss erforderlich | fehlendes Pflichtdokument |
| Entscheidungslog | Entscheidungen verbindlich ablegen | Projektmanager, Auftraggeber, Management | Titel, Datum, Entscheider, Entscheidung, Begründung, Auswirkungen | Entscheidung, Begründung, Auswirkungen, Verweis | Datum, Gremium, Kategorie | Entscheidung erfassen, Dokument verknüpfen | Entscheidung braucht Entscheider und Begründung | neue Entscheidung |
| Änderungsverlauf | Nachvollziehbarkeit kritischer Änderungen | PMO, Projektmanager, Management | Feld, alter Wert, neuer Wert, Person, Datum, Grund | keine | Objekt, Zeitraum, Person | Änderung öffnen, Bericht exportieren | automatische Historisierung | optional bei kritischer Änderung |
| Wissensdatenbank | Wiederverwendung von Wissen | alle Projektbeteiligten | Referenzprojekt, Vorlage, Checkliste, Lessons Learned, Kategorie | Beiträge je Rolle | Kategorie, Phase, Projektart | Beitrag erstellen, Vorlage öffnen | Freigabe für veröffentlichte Standards | neuer freigegebener Standard |

## Detaillierte Masken-Steckbriefe für den MVP

### Portfolio-Startseite

| Kategorie | Konkretisierung |
|---|---|
| Zweck | Management- und PMO-Einstieg zur schnellen Identifikation kritischer Projekte. |
| Zielgruppe | Management, PMO, Auftraggeber, Projektmanager. |
| Angezeigte Felder | Projekt-ID, Projekttitel, Standort, Gesamtstatus, aktuelle Phase, Projektmanager, Auftraggeber, Ziel-Inbetriebnahme, aktuelle Inbetriebnahme, Terminampel, Budgetampel, Stundenampel, Risikoampel, offene Freigaben. |
| Editierbare Felder | keine regulären Projektfelder; optional PMO-Kommentar oder Portfolio-Kategorie. |
| Filter | Standort, Anlage, Auftraggeber, Projektmanager, Phase, Status, Kritikalität, überfällig ja/nein. |
| Aktionen/Buttons | Projektakte öffnen, Power-BI-Detailbericht öffnen, Liste exportieren, kritische Projekte filtern. |
| Pflichtlogiken | keine direkte Bearbeitung; Drill-down in Projektakte erforderlich. |
| Benachrichtigungen | wöchentlicher Portfolio-Status an Management; Soforthinweis bei neuem roten Projekt. |

### Projektakte

| Kategorie | Konkretisierung |
|---|---|
| Zweck | zentrale Arbeitsoberfläche für alle Informationen eines einzelnen Projekts. |
| Zielgruppe | Projektmanager, Fachrollen, Auftraggeber, PMO, berechtigte Stakeholder. |
| Angezeigte Felder | Stammdaten, Rollen, Gesamtstatus, Phasenstatus, Termine, offene Aufgaben, Top-Risiken, Budget, Stunden, Entscheidungen, Dokumentstatus. |
| Editierbare Felder | Statuszusammenfassung, nächste Schritte, Blockaden, fachliche Kommentare, je nach Rolle auch Phasen-/Termin-/Risiko-/Budget-/Stundenfelder. |
| Filter | Register, Zeitraum, Verantwortliche Rolle, Status, offene Punkte. |
| Aktionen/Buttons | Status aktualisieren, Rolle hinzufügen, Aufgabe erstellen, Risiko erfassen, Terminverschiebung beantragen, Entscheidung erfassen, Dokument öffnen. |
| Pflichtlogiken | roter Status benötigt Maßnahme; Statusabschluss benötigt Aktualisierungsdatum; fehlende Pflichtrollen werden angezeigt. |
| Benachrichtigungen | Statusfälligkeit, neue Aufgabe, Eskalation, Terminverschiebungsentscheidung. |

### Planprüfung

| Kategorie | Konkretisierung |
|---|---|
| Zweck | formale und fachliche Prüfung der Ausführungsplanung steuern. |
| Zielgruppe | Planprüfer, Planungsingenieur, Projektmanager, PMO. |
| Angezeigte Felder | Prüfgegenstand, Dokumentenpaket, Eingangsdatum, Prüffrist, Prüfstatus, offene Mängel, Prüfergebnis, Prüfprotokoll. |
| Editierbare Felder | Prüfpunkte, Mängel, Prüfergebnis, Freigabekommentar, Nachbesserungsanforderung. |
| Filter | Prüfstatus, Fälligkeit, Planprüfer, offene Mängel, Projektphase. |
| Aktionen/Buttons | Prüfung starten, Mangel anlegen, Nachbesserung anfordern, Prüfung freigeben, Prüfung ablehnen, Prüfprotokoll hochladen. |
| Pflichtlogiken | Abschluss nur mit Prüfergebnis; Freigabe nur ohne offene kritische Mängel; Nachbesserung benötigt Verantwortlichen und Frist. |
| Benachrichtigungen | Prüffrist überschritten, neuer Mangel, Nachbesserung erledigt, Prüfung freigegeben. |

### BVB-Freigabe

| Kategorie | Konkretisierung |
|---|---|
| Zweck | BVB-relevante Unterlagen, Auflagen und Entscheidungen verbindlich dokumentieren. |
| Zielgruppe | Bauvorlagenberechtigter/BVB, Projektmanager, Planungsingenieur, Auftraggeber. |
| Angezeigte Felder | Freigabegegenstand, BVB-Rolle, betroffene Dokumente aus Zuordnungstabelle, Freigabestatus, Auflagen, Entscheidung, Freigabedatum, Freigabedokument. |
| Editierbare Felder | Auflagen, Entscheidung, Entscheidungsbegründung, Freigabedatum, Dokumentverweis. |
| Filter | Status, BVB, offene Auflagen, Fälligkeit, betroffene Phase. |
| Aktionen/Buttons | Freigeben, Ablehnen, Auflage erstellen, Auflage schließen, Freigabedokument öffnen. |
| Pflichtlogiken | Freigabe benötigt Freigabedokument; Ablehnung benötigt Begründung; offene Auflagen blockieren Realisierung, sofern nicht explizit übersteuert. |
| Benachrichtigungen | neue BVB-Prüfung, offene Auflage fällig, Freigabe erteilt, Freigabe abgelehnt. |

### Terminverschiebungsdialog

| Kategorie | Konkretisierung |
|---|---|
| Zweck | kritische Terminänderungen kontrolliert beantragen, bewerten und genehmigen. |
| Zielgruppe | Projektmanager, Realisierungsverantwortlicher, Auftraggeber, PMO. |
| Angezeigte Felder | betroffener Termin, altes Datum, neues Datum, Grund, Ursache, Budgetauswirkung, Stundenauswirkung, betroffene Rollen aus Zuordnungstabelle, Genehmigungsstatus. |
| Editierbare Felder | neues Datum, Grund, Ursache, Auswirkungen, Zuordnungen zu betroffenen Rollen und Phasen, Genehmiger. |
| Filter | nicht relevant; Dialog aus Termin heraus. |
| Aktionen/Buttons | Entwurf speichern, Einreichen, Genehmigen, Ablehnen, Zurückziehen. |
| Pflichtlogiken | Einreichen nur mit Grund, Ursache, Budgetauswirkung, Stundenauswirkung, mindestens einer Zuordnung in Terminverschiebung_BetroffeneRolle und Genehmiger; Termin wird erst nach Genehmigung aktualisiert. |
| Benachrichtigungen | Genehmigungsanfrage, Rückfrage, Genehmigung, Ablehnung, überfällige Entscheidung. |

### Budgetansicht

| Kategorie | Konkretisierung |
|---|---|
| Zweck | Kostensteuerung je Projekt, Phase, Kostenart und Rolle ermöglichen. |
| Zielgruppe | Projektmanager, Auftraggeber, PMO, Controlling. |
| Angezeigte Felder | Budget Soll, Ist, Forecast, gebundenes Budget, Restbudget, Budgetabweichung, Kostenart, Phase, Verantwortliche Rolle, Status. |
| Editierbare Felder | Forecast, Kommentar, Kostenartzuordnung, Verantwortliche Rolle; Ist-Kosten vorzugsweise per Import. |
| Filter | Phase, Kostenart, Budgetstatus, Verantwortliche Rolle, Abweichungsschwelle. |
| Aktionen/Buttons | Forecast aktualisieren, Abweichung kommentieren, Eskalation erstellen, Budgetbericht öffnen. |
| Pflichtlogiken | Abweichung oberhalb Schwelle benötigt Kommentar und Forecast-Aktualisierung. |
| Benachrichtigungen | Budget überschritten, Forecast kritisch, Kommentar fehlt. |

### Stundenansicht

| Kategorie | Konkretisierung |
|---|---|
| Zweck | Stundenbudget, Verbrauch, Forecast und Auslastung je Person, Rolle und Projekt steuern. |
| Zielgruppe | Projektmanager, Teammitglieder, PMO, Linienverantwortliche. |
| Angezeigte Felder | Person, Projektrolle, Phase, Zeitraum, Stundenbudget, verbrauchte Stunden, Stunden-Forecast, Reststunden, Auslastung Person, Auslastung Rolle. |
| Editierbare Felder | Stundenbudget, Forecast, Kommentar, manuelle Ist-Stunden sofern keine Zeiterfassung angebunden ist. |
| Filter | Person, Rolle, Phase, Zeitraum, Auslastungsstatus, Abweichung. |
| Aktionen/Buttons | Stunden erfassen, Forecast aktualisieren, Auslastungsbericht öffnen, Überlastung eskalieren. |
| Pflichtlogiken | Überlastung über Schwelle benötigt Kommentar oder Maßnahme. |
| Benachrichtigungen | Überlastung, Stundenbudget überschritten, Forecast fehlt. |

### Dokumentenbereich

| Kategorie | Konkretisierung |
|---|---|
| Zweck | phasenbezogene Dokumente finden, prüfen und Vollständigkeit sicherstellen. |
| Zielgruppe | alle berechtigten Projektbeteiligten. |
| Angezeigte Felder | Dokumenttyp, Phase, Dokumentstatus, Version, Verantwortliche Rolle, SharePoint-Link, Pflichtdokument ja/nein, Gültigkeit. |
| Editierbare Felder | Dokumentmetadaten je Berechtigung; Datei selbst in SharePoint. |
| Filter | Phase, Dokumenttyp, Status, Pflichtdokument, Verantwortliche Rolle. |
| Aktionen/Buttons | Dokument öffnen, Dokument hochladen, Status setzen, fehlende Pflichtdokumente anzeigen. |
| Pflichtlogiken | Phasenabschluss blockiert, wenn Pflichtdokumente fehlen oder nicht freigegeben sind. |
| Benachrichtigungen | Pflichtdokument fehlt, Dokument zur Prüfung bereit, Dokument freigegeben. |
