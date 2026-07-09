# 12 Governance und Betrieb

## Governance-Ziele

| Ziel | Beschreibung |
|---|---|
| Verbindlichkeit | Portal ist führende Quelle für Projektinformationen. |
| Datenqualität | Pflichtfelder, Statusaktualität und Historie werden überwacht. |
| Sicherheit | Zugriff folgt Projektrolle und Sensitivität. |
| Betriebsstabilität | Änderungen erfolgen über kontrollierte Releases. |
| Akzeptanz | Nutzer erhalten Schulung, Support und klare Regeln. |

## Betriebsrollen

| Rolle | Verantwortung | Taktung |
|---|---|---|
| Product Owner Projektportal | fachliche Priorisierung und Roadmap | wöchentlich |
| PMO | Standards, Datenqualität, Reporting, Schulung | laufend |
| Systemadministrator | Umgebungen, Rechte, Lösungen, Fehleranalyse | laufend |
| Power-Platform-Entwickler | App, Flows, Tabellen, Reports | sprintweise |
| Datenschutz/Compliance | Prüfung sensibler Daten und Aufbewahrung | bei Änderungen |
| Key User | Feedback, Tests, Multiplikator | je Release |
| Support | Annahme und Bearbeitung von Tickets | laufend |

## Datenpflege-Regeln

| Regel | Verantwortlich | Kontrollmechanismus |
|---|---|---|
| Status wöchentlich aktualisieren | Projektmanager | PMO-Dashboard überfällige Statusupdates |
| Pflichtrollen besetzen | Projektmanager | Rollenmatrix-Prüfung |
| Phasenabschluss nur vollständig | verantwortliche Rolle | Systemvalidierung Pflichtfelder/-dokumente |
| Terminverschiebung nur mit Genehmigung | Projektmanager/Auftraggeber | Workflow und Historie |
| Budgetabweichung kommentieren | Projektmanager/PMO | Pflichtkommentar ab Schwelle |
| Stundenforecast pflegen | Projektmanager | Abweichungsbericht |
| BVB-Auflagen fristgerecht schließen | BVB/Planungsingenieur | Erinnerungsflow |
| Dokumente phasenbezogen ablegen | Dokumenteigner | Dokumentenstatusbericht |

## Release- und Änderungsmanagement

| Änderungstyp | Beispiel | Vorgehen |
|---|---|---|
| Klein | neuer Auswahlwert | PMO-Freigabe, Test, Release |
| Mittel | neues Feld in Maske | Anforderung, Datenmodellprüfung, Test |
| Groß | neuer Workflow | fachliches Design, UAT, Rolloutkommunikation |
| Kritisch | Berechtigungsänderung | Sicherheitsprüfung, Freigabe IT/Compliance |

## Datenqualitäts-Dashboard

| Kennzahl | Ziel | Eskalation |
|---|---:|---|
| Projekte ohne aktuellen Status | 0 | Projektmanager, dann Auftraggeber |
| fehlende Pflichtrollen | 0 | PMO an Projektmanager |
| offene BVB-Auflagen überfällig | 0 | BVB, Projektmanager, Auftraggeber |
| Terminverschiebungen im Entwurf > 5 Arbeitstage | 0 | Projektmanager, PMO |
| Budgetabweichungen ohne Kommentar | 0 | PMO, Controlling |
| Dokumentationspakete unvollständig bei Abschluss | 0 | Dokumentationsverantwortlicher |

## Supportmodell

| Level | Zuständigkeit | Beispiele |
|---|---|---|
| Level 0 | Hilfe im Portal, FAQ, Schulungsunterlagen | Wie ändere ich Status? |
| Level 1 | Key User/PMO | fachliche Bedienfragen, Datenpflege |
| Level 2 | IT/Power-Platform-Team | Fehler in App, Flow, Berechtigung |
| Level 3 | Hersteller/Plattform-Support | Plattformstörung, Connector-Problem |

## Risiken im Betrieb

| Risiko | Gegenmaßnahme |
|---|---|
| Schattenlisten entstehen erneut | Management nutzt nur Portalberichte; Altlisten schreibschützen. |
| Pflichtfelder werden als Bürokratie erlebt | Pflichtfelder je Phase kritisch prüfen und automatisieren. |
| Rechte sind zu grob | Rollenbasierte Zugriffsmatrix und regelmäßige Prüfung. |
| Workflows werden umgangen | kritische Änderungen technisch sperren, z.B. Termin nur via Genehmigung. |
| Datenqualität sinkt | Datenqualitätsdashboard und Eskalationsregeln. |
