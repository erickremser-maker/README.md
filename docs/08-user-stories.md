# 08 User Stories

## User-Story-Katalog

| ID | Rolle | Story | Nutzen | Akzeptanzkriterien | Priorität |
|---|---|---|---|---|---|
| US-001 | Projektmanager | Ich möchte ein Projekt mit Stammdaten anlegen. | Projekt ist zentral sichtbar. | Pflichtfelder geprüft; Projekt-ID automatisch erzeugt. | Must |
| US-002 | Projektmanager | Ich möchte Rollen je Projekt zuordnen. | Verantwortlichkeiten sind eindeutig. | Pflichtrollen markiert; Historie bei Rollenwechsel. | Must |
| US-003 | Planungsingenieur | Ich möchte den Vorplanungsstand pflegen. | Projektmanager sieht Reifegrad. | Statuswerte, Pflichtfelder und Dokumente verfügbar. | Must |
| US-004 | Planungsingenieur | Ich möchte Ausführungsunterlagen als prüffähig markieren. | Planprüfung kann starten. | Nur möglich, wenn Dokumentenpaket vollständig ist. | Must |
| US-005 | Planprüfer | Ich möchte Prüfungen mit Mängeln dokumentieren. | Nachbesserungen sind nachvollziehbar. | Mangel hat Beschreibung, Verantwortlichen, Frist und Status. | Must |
| US-006 | BVB | Ich möchte Freigaben mit Auflagen erfassen. | BVB-Entscheidung ist verbindlich dokumentiert. | Freigabe/Ablehnung braucht Kommentar und Dokumentverweis. | Must |
| US-007 | Realisierungsverantwortlicher | Ich möchte Realisierungsstatus und Abnahmen pflegen. | Umsetzung ist transparent. | Status, Mängel, Abnahme und Inbetriebnahme sind sichtbar. | Must |
| US-008 | Dokumentationsverantwortlicher | Ich möchte As-built- und Abschlussdokumente prüfen. | Projekt kann sauber archiviert werden. | Pflichtdokumente werden angezeigt. | Should |
| US-009 | Projektmanager | Ich möchte eine Terminverschiebung beantragen. | Auswirkungen werden vor Freigabe bewertet. | Grund, Ursache, Budget, Stunden, Rollen, Genehmiger Pflicht. | Must |
| US-010 | Auftraggeber | Ich möchte Terminverschiebungen genehmigen oder ablehnen. | Kritische Termine bleiben kontrolliert. | Entscheidung wird historisiert; Benachrichtigung an Projektmanager. | Must |
| US-011 | Projektmanager | Ich möchte Budget Soll/Ist/Forecast sehen. | Budgetabweichungen werden früh erkannt. | Restbudget und Abweichung berechnet. | Must |
| US-012 | PMO | Ich möchte Budgetabweichungen über alle Projekte auswerten. | Portfolio-Steuerung wird möglich. | Filter nach Bereich, Status, Kostenart. | Should |
| US-013 | Teammitglied | Ich möchte verbrauchte Stunden melden oder importiert sehen. | Aufwand ist nachvollziehbar. | Stunden je Projekt, Rolle, Phase, Zeitraum. | Must |
| US-014 | Projektmanager | Ich möchte Auslastung je Person/Rolle sehen. | Überlastungen werden sichtbar. | Auslastungsstatus berechnet. | Must |
| US-015 | Management | Ich möchte rote Projekte im Portfolio sehen. | Eskalationen sind transparent. | Ampeln für Status, Termin, Budget, Stunden, Risiko. | Must |
| US-016 | Stakeholder | Ich möchte relevante Projektinformationen lesen. | Betroffene sind informiert. | Zugriff nur auf freigegebene Informationen. | Should |
| US-017 | Externer Dienstleister | Ich möchte zugewiesene Dokumente und Aufgaben sehen. | Zusammenarbeit wird gezielt. | Zugriff auf definierte Inhalte begrenzt. | Could |
| US-018 | PMO | Ich möchte Datenqualitätsregeln überwachen. | Portal bleibt verlässlich. | fehlende Pflichtfelder und überfällige Updates sichtbar. | Should |
| US-019 | Projektmanager | Ich möchte Entscheidungen dokumentieren. | Beschlüsse sind auffindbar. | Datum, Entscheider, Begründung Pflicht. | Should |
| US-020 | Nutzer | Ich möchte Referenzprojekte und Vorlagen finden. | Wiederverwendung von Wissen. | Suche nach Phase, Projektart, Dokumenttyp. | Could |

## Definition of Ready

| Kriterium | Beschreibung |
|---|---|
| Rolle benannt | fachlicher Nutzer oder Systemrolle ist eindeutig. |
| Nutzen beschrieben | Business Value ist verständlich. |
| Akzeptanzkriterien vorhanden | Testbare Kriterien liegen vor. |
| Datenobjekte bekannt | betroffene Tabellen/Felder sind identifiziert. |
| Berechtigungen geklärt | schreibende und lesende Rollen sind benannt. |

## Definition of Done

| Kriterium | Beschreibung |
|---|---|
| Funktion umgesetzt | Maske, Tabelle, Workflow oder Bericht funktioniert. |
| Pflichtlogik geprüft | Validierungen verhindern unvollständige Daten. |
| Berechtigungen getestet | Rollen können nur vorgesehene Aktionen ausführen. |
| Testdaten vorhanden | Beispielprojekt deckt Funktion ab. |
| Dokumentation aktualisiert | Datenwörterbuch und Maskenbeschreibung sind konsistent. |
