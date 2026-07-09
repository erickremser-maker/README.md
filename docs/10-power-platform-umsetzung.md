# 10 Power-Platform-Umsetzung

## Zielarchitektur

| Baustein | Umsetzung | Hinweise |
|---|---|---|
| Dataverse | Tabellen für Projekt, Rollen, Phasen, Termine, Budget, Stunden, Risiken, Entscheidungen, Dokumentmetadaten | führende strukturierte Daten |
| Model-driven Power App | Projektportal-App mit Sitemap nach Masken | geeignet für rollenbasierte Geschäftsanwendung |
| SharePoint | Dokumentbibliothek je Projekt oder strukturierte Bibliothek mit Projektmetadaten | Dateien und Versionierung |
| Power Automate | Workflows für Terminverschiebung, Planprüfung, BVB, Eskalation, Erinnerungen | keine Fachlogik nur in E-Mail |
| Power BI | Portfolio-, Budget-, Stunden-, Risiko- und Termin-Dashboards | Datenmodell aus Dataverse |
| Entra ID | Nutzer, Gruppen, ggf. externe Gäste | Sicherheits- und Zugriffskonzept |

## Dataverse-Tabellen und Umsetzungshinweise

| Tabelle | Typ | Primärspalte | Besonderheit |
|---|---|---|---|
| Projekt | Standard/custom | Projekttitel | Autonummer für Projekt-ID |
| Person | Benutzer/Kontakt | Name | interne Benutzer über Entra, externe als Kontakt |
| Projektrolle | custom | Rolle + Person | historisierbare Rollenzuordnung |
| Projektphase | custom | Phase | automatisch sechs Phasen je Projekt erzeugen |
| Termin | custom | Termintitel | Baseline und aktuelles Datum getrennt |
| Terminverschiebung | custom | Termin + Datum | Business Process Flow/Genehmigung |
| Budgetposition | custom | Kostenart + Phase | berechnete Spalten für Rest/Abweichung |
| Stundenposition | custom | Person + Zeitraum | Import aus Zeiterfassung möglich |
| Risiko | custom | Risikotitel | Risikowert berechnet |
| Entscheidung | custom | Entscheidungstitel | unveränderbare Historie prüfen |
| Dokumentmetadatum | custom/SharePoint metadata | Dokumentname | Link zu SharePoint-Datei |

## Model-driven App Sitemap

| Bereich | Unterbereich | Tabelle/Maske |
|---|---|---|
| Portfolio | Portfolio-Startseite | Projektansicht + Power-BI-Einbettung |
| Projekte | Projektakte | Projektformular |
| Projekte | Rollenmatrix | Projektrolle |
| Projekte | Phasenübersicht | Projektphase |
| Steuerung | Termine | Termin, Terminverschiebung |
| Steuerung | Risiken | Risiko |
| Steuerung | Entscheidungen | Entscheidung |
| Finanzen & Ressourcen | Budget | Budgetposition |
| Finanzen & Ressourcen | Stunden/Auslastung | Stundenposition |
| Dokumente | Dokumentenbereich | SharePoint-Integration/Dokumentmetadatum |
| Wissen | Wissensdatenbank | Dokumente/Referenzen |
| Administration | Stammdaten | Auswahllisten, Vorlagen, Pflichtdokumente |

## Workflows

| Workflow | Auslöser | Schritte | Ergebnis |
|---|---|---|---|
| Projektanlage | neues Projekt | sechs Phasen erzeugen, Standardtermine erzeugen, Dokumentenbereich anlegen | Projektakte initialisiert |
| Terminverschiebung | Änderung kritischer Termin beantragt | Pflichtfelder prüfen, Genehmiger benachrichtigen, Entscheidung speichern | aktueller Termin nur bei Genehmigung aktualisiert |
| Planprüfung | Status „Eingereicht“ | Planprüfer benachrichtigen, Frist überwachen, Mängel erzeugen | Prüfergebnis dokumentiert |
| BVB-Freigabe | Status „Zur BVB-Prüfung bereit“ | BVB benachrichtigen, Auflagen verfolgen, Entscheidung speichern | Freigabe/Ablehnung sichtbar |
| Budgetabweichung | Forecast überschreitet Schwelle | Kommentar erzwingen, Auftraggeber/PMO informieren | Eskalation erzeugt |
| Statusfälligkeit | Statusdatum überschritten | Projektmanager erinnern, PMO-Dashboard aktualisieren | Datenqualität steigt |

## Umgebungen und ALM

| Umgebung | Zweck | Zugriffsgruppe |
|---|---|---|
| Development | Entwicklung von Tabellen, App, Flows | Entwickler, Admins |
| Test | Fachtests mit Pilotdaten | Key User, PMO, IT |
| Production | produktive Nutzung | berechtigte Nutzer |

## Umsetzungssprints

| Sprint | Inhalt | Ergebnis |
|---|---|---|
| Sprint 0 | Setup, Umgebungen, Security, Backlog finalisieren | arbeitsfähige Basis |
| Sprint 1 | Projekt, Rollen, Phasen, Projektakte | erste Projektakte |
| Sprint 2 | Termine, Terminverschiebung, Workflows | kritische Terminlogik |
| Sprint 3 | Planprüfung, BVB-Freigabe, Dokumentbereich | technischer Kernprozess |
| Sprint 4 | Budget, Stunden, Risiken, Entscheidungen | Steuerungsdaten vollständig |
| Sprint 5 | Power BI, Migration Pilotdaten, UAT | MVP abnahmefähig |
