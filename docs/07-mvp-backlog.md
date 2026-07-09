# 07 MVP-Backlog

## MoSCoW-Backlog

### Must have

| ID | User Story | Akzeptanzkriterien | Hauptrolle |
|---|---|---|---|
| M-01 | Als Projektmanager möchte ich eine Projektakte anlegen, damit alle Projektdaten zentral geführt werden. | Projekt-ID, Titel, Standort, Auftraggeber, Ziel-Inbetriebnahme und Status sind Pflichtfelder. | Projektmanager |
| M-02 | Als Projektmanager möchte ich die sechs Standardphasen sehen, damit jedes Projekt gleich strukturiert ist. | Alle Phasen werden automatisch je Projekt erzeugt. | Projektmanager |
| M-03 | Als Projektmanager möchte ich Rollen je Projekt zuordnen, damit Verantwortlichkeiten eindeutig sind. | Pflichtrollen werden geprüft; eine Person kann je Projekt andere Rollen haben. | Projektmanager |
| M-04 | Als Planungsingenieur möchte ich Planungsstatus und Dokumente pflegen, damit Prüffähigkeit sichtbar wird. | Ausführungsplanung kann auf „Zur Planprüfung bereit“ gesetzt werden, wenn Pflichtdaten vorhanden sind. | Planungsingenieur |
| M-05 | Als Planprüfer möchte ich Prüfpunkte und Prüfergebnis erfassen, damit Planprüfung nachvollziehbar ist. | Prüfung hat Status, Frist, Mängel und Ergebnis. | Planprüfer |
| M-06 | Als BVB möchte ich Freigabe, Ablehnung und Auflagen dokumentieren, damit die BVB-Entscheidung verbindlich ist. | Freigabe/Ablehnung braucht Begründung oder Dokumentverweis. | BVB |
| M-07 | Als Projektmanager möchte ich Terminverschiebungen beantragen, damit kritische Terminänderungen genehmigt werden. | Grund, Ursache, Budgetauswirkung, Stundenauswirkung, Rollen und Genehmiger sind Pflicht. | Projektmanager |
| M-08 | Als Auftraggeber möchte ich Terminverschiebungen genehmigen oder ablehnen, damit Terminänderungen kontrolliert sind. | Aktueller Termin ändert sich erst nach Genehmigung. | Auftraggeber |
| M-09 | Als Projektmanager möchte ich Budget Soll/Ist/Forecast sehen, damit Abweichungen steuerbar werden. | Budgetabweichung und Restbudget werden berechnet. | Projektmanager |
| M-10 | Als Projektmanager möchte ich Stundenbudget, Verbrauch und Auslastung sehen, damit Überlastungen sichtbar sind. | Auslastungsstatus wird berechnet und angezeigt. | Projektmanager |
| M-11 | Als Nutzer möchte ich Dokumente phasenbezogen öffnen, damit ich die richtigen Unterlagen finde. | Dokumentbereich ist aus Projektakte erreichbar. | alle |
| M-12 | Als Management möchte ich ein Portfolio-Dashboard sehen, damit ich rote Projekte, Termine und Budgetabweichungen erkenne. | Portfolio zeigt Status-, Termin-, Budget-, Stunden- und Risikoampeln. | Management |

### Should have

| ID | User Story | Akzeptanzkriterien | Hauptrolle |
|---|---|---|---|
| S-01 | Als Projektmanager möchte ich Risiken erfassen und bewerten, damit Gegenmaßnahmen verfolgt werden. | Risikowert wird aus Eintritt und Auswirkung berechnet. | Projektmanager |
| S-02 | Als Projektmanager möchte ich Entscheidungen dokumentieren, damit Beschlüsse nachvollziehbar sind. | Entscheidung braucht Datum, Entscheider, Begründung. | Projektmanager |
| S-03 | Als PMO möchte ich überfällige Statusupdates sehen, damit Datenqualität steuerbar ist. | Dashboard listet überfällige Projekte. | PMO |
| S-04 | Als Planprüfer möchte ich Mängel als Aufgaben an Planungsingenieure geben. | Mangel erzeugt Aufgabe mit Verantwortlichem und Frist. | Planprüfer |
| S-05 | Als BVB möchte ich offene Auflagen verfolgen. | offene Auflagen haben Status, Verantwortlichen und Fälligkeit. | BVB |
| S-06 | Als Dokumentationsverantwortlicher möchte ich Pflichtdokumente prüfen. | Phasenabschluss zeigt fehlende Pflichtdokumente. | Dokumentation |

### Could have

| ID | User Story | Akzeptanzkriterien | Hauptrolle |
|---|---|---|---|
| C-01 | Als Nutzer möchte ich Referenzprojekte durchsuchen. | Suche nach Projektart, Phase, Dokumenttyp. | alle |
| C-02 | Als Projektmanager möchte ich automatische Statuszusammenfassungen generieren. | Zusammenfassung basiert auf strukturierten Daten. | Projektmanager |
| C-03 | Als PMO möchte ich Excel-Importvorlagen bereitstellen. | Import validiert Pflichtfelder. | PMO |
| C-04 | Als Management möchte ich Trendanalysen über mehrere Monate sehen. | Status-, Budget- und Termintrends verfügbar. | Management |

### Won't have im MVP

| ID | Funktion | Grund |
|---|---|---|
| W-01 | vollständige ERP-Integration | zu hoher Aufwand für MVP; späterer Ausbau. |
| W-02 | vollständige CAD-/Planmanagement-Integration | zunächst Link-/Dokumentenlogik ausreichend. |
| W-03 | externes Dienstleisterportal | Sicherheits- und Berechtigungskonzept später vertiefen. |
| W-04 | KI-gestützte Risikoerkennung | benötigt Datenbasis aus laufender Nutzung. |
| W-05 | qualifizierte elektronische Signatur | rechtliche und technische Prüfung separat. |
