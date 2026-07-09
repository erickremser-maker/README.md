# 11 Migrationsplan

## Migrationsprinzip

Nicht alles wird migriert. Migriert werden aktive Projekte, steuerungsrelevante Daten, gültige Dokumente, offene Entscheidungen, offene Risiken, kritische Termine und relevante Historie. Teams- und Outlook-Inhalte werden nur übertragen, wenn daraus strukturierte Projektinformationen entstehen.

## Quellenanalyse

| Quelle | Inhalt | Ziel im Portal | Migrationsmethode | Bemerkung |
|---|---|---|---|---|
| Excel-Projektlisten | Stammdaten, Status, Termine | Projekt, Termin | Power Query/Dataflow/Import | Dubletten prüfen |
| Excel-Budgetlisten | Soll/Ist/Forecast | Budgetposition | Import/Dataflow | Controlling validiert |
| Excel-Stundenlisten | Aufwand, Person, Zeitraum | Stundenposition | Import/Dataflow | Personenmapping nötig |
| SharePoint-Listen | Status, Risiken, Aufgaben | Projekt, Risiko, Aufgabe | Export/Import | Feldmapping erstellen |
| Laufwerke | Zeichnungen, Protokolle, Nachweise | SharePoint-Dokumente | strukturierte Dateimigration | Metadaten ergänzen |
| Teams | Chat, Dateien, Entscheidungen | nur relevante Entscheidungen/Aufgaben | manuelle fachliche Extraktion | keine Vollmigration |
| Outlook | E-Mails, Freigaben | Entscheidungen/Nachweise | manuelle fachliche Extraktion | keine Mailarchivierung im Portal |
| Notes-Listen | alte Projektdaten | Projekt/Risiko/Termin | Export CSV | Datenqualität prüfen |

## Migrationswellen

| Welle | Umfang | Ziel |
|---|---|---|
| Welle 0 | Datenprofiling und Mapping | Klarheit über Quellen, Qualität und Zieltabellen |
| Welle 1 | 2 Beispielprojekte | technischer Probelauf |
| Welle 2 | 5 bis 10 MVP-Pilotprojekte | UAT und fachliche Validierung |
| Welle 3 | alle aktiven kritischen Projekte | produktive Steuerung |
| Welle 4 | restliche aktive Projekte | vollständiger Rollout |
| Welle 5 | Archiv-/Referenzprojekte | Wissensdatenbank und historische Auswertung |

## Mapping-Tabelle Beispiel

| Quellfeld | Quelle | Zieltabelle | Zielfeld | Transformation |
|---|---|---|---|---|
| Projekt Nr. | Excel Projektliste | Projekt | Projekt-ID | trim, Dublettenprüfung |
| Projektname | Excel Projektliste | Projekt | Projekttitel | Textübernahme |
| PL | Excel Projektliste | Projektrolle | Person/Rolle Projektmanager | Entra-ID-Mapping |
| Status | SharePoint-Liste | Projekt | Gesamtstatus | Mapping Grün/Gelb/Rot |
| IB Datum | Excel Terminliste | Termin | Datum aktuell | als Inbetriebnahmetermin markieren |
| Budget Plan | Excel Budget | Budgetposition | Budget Soll | Währung normalisieren |
| Kosten Ist | ERP/Excel | Budgetposition | Budget Ist | Import je Stichtag |
| Stunden | Zeiterfassung/Excel | Stundenposition | Verbrauchte Stunden | Person/Zeitraum mappen |
| Risiko Text | Excel Risiko | Risiko | Beschreibung | Risikotitel ableiten |
| Freigabe Mail | Outlook | Entscheidung | Entscheidung/Dokumentverweis | nur relevante Beschlüsse übertragen |

## Datenqualitätsprüfungen

| Prüfung | Regel | Verantwortlich |
|---|---|---|
| Pflichtfelder | Projekt-ID, Titel, Auftraggeber, Projektmanager, Zieltermin vorhanden | PMO |
| Personenmapping | jede Person auf Entra-ID oder Kontakt gemappt | IT/PMO |
| Rollenmatrix | Pflichtrollen je Pilotprojekt besetzt oder begründet offen | Projektmanager |
| Terminbaseline | ursprünglicher und aktueller Termin gesetzt | Projektmanager |
| Budgetabgleich | Summen aus Positionen entsprechen Projektsumme | Controlling |
| Dokumentlink | migrierte Datei aus Projektakte erreichbar | Dokumentationsverantwortlicher |
| Altquellenstatus | alte Liste schreibgeschützt/Archiv gekennzeichnet | PMO/IT |

## Cutover-Plan

| Schritt | Beschreibung | Owner |
|---|---|---|
| Freeze | Quellsysteme für Pilotprojekte einfrieren | PMO |
| Datenimport | bereinigte Daten in Test/Prod laden | IT |
| Fachprüfung | Projektakten durch Rollen prüfen lassen | Projektmanager |
| Korrektur | Fehlerliste bereinigen | PMO/IT |
| Go-live | Portal als führend erklären | Sponsor |
| Schreibschutz | alte Listen schreibgeschützt setzen | IT |
| Hypercare | 2 bis 4 Wochen Support | PMO/IT |
