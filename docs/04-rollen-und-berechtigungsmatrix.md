# 04 Rollen- und Berechtigungsmatrix

## Rollenprinzip

Eine Person kann je Projekt unterschiedliche Rollen haben. Berechtigungen werden aus Projektrolle, Organisationseinheit und Sensitivität des Projekts abgeleitet.

## Rollenbeschreibung

| Rolle | Kurzbeschreibung | Typische Verantwortung |
|---|---|---|
| Projektmanager | operative Gesamtsteuerung | Projektakte, Status, Termine, Risiken, Eskalationen, Aufgaben |
| Planungsingenieur | technische Planung | Vorplanung, Ausführungsplanung, technische Dokumente, Nachbesserungen |
| Bauvorlagenberechtigter / BVB | formale Freigabe | BVB-Bewertung, Auflagen, Freigabe/Ablehnung |
| Planprüfer | fachliche/formale Prüfung | Prüfpunkte, Prüfergebnis, Mängelliste |
| Technischer Fachverantwortlicher | Qualität und Standards | technische Bewertung, Richtlinienkonformität |
| Realisierungsverantwortlicher | Umsetzung | Realisierung, Dienstleister, Abnahmen, Mängel, Inbetriebnahme |
| Dokumentationsverantwortlicher | Abschlussdokumentation | As-built, Übergabe, Archivierung |
| Auftraggeber | Sponsor/Entscheider | Budget, Priorität, Entscheidungen, Eskalationen |
| Stakeholder | Betroffene/Beteiligte | Anforderungen, Hinweise, Rückmeldungen |
| Externer Dienstleister | Lieferant/Partner | definierte Aufgaben und Dokumente |
| PMO | Governance | Standards, Qualitätssicherung, Reporting |
| Systemadministrator | technischer Betrieb | Rechte, Umgebungen, Schnittstellen |

## Berechtigungsmatrix

| Objekt/Maske | Projektmanager | Planungsingenieur | BVB | Planprüfer | Fachverantwortlicher | Realisierung | Dokumentation | Auftraggeber | Stakeholder | Dienstleister | PMO |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Portfolio | Lesen | Lesen gefiltert | Lesen gefiltert | Lesen gefiltert | Lesen gefiltert | Lesen gefiltert | Lesen gefiltert | Lesen | Lesen gefiltert | Kein Zugriff/limitiert | Lesen |
| Projektstammdaten | Bearbeiten | Lesen | Lesen | Lesen | Lesen | Lesen | Lesen | Lesen/Freigeben | Lesen | Lesen limitiert | Bearbeiten |
| Rollenmatrix | Bearbeiten | Lesen | Lesen | Lesen | Lesen | Lesen | Lesen | Lesen | Lesen limitiert | Lesen limitiert | Bearbeiten |
| Phasenstatus | Bearbeiten | Bearbeiten Planung | Lesen | Bearbeiten Prüfung | Bearbeiten fachlich | Bearbeiten Realisierung | Bearbeiten Doku | Lesen | Lesen | Bearbeiten eigene Aufgaben | Qualität prüfen |
| Planprüfung | Lesen/Bearbeiten Workflow | Nachbesserung bearbeiten | Lesen | Bearbeiten | Kommentieren | Lesen | Lesen | Lesen | Lesen limitiert | ggf. Nachbesserung | Auswerten |
| BVB-Freigabe | Einreichen/Lesen | Unterlagen liefern | Freigeben/Ablehnen | Lesen | Kommentieren | Lesen | Lesen | Lesen | Lesen limitiert | kein Zugriff | Auswerten |
| Termine | Bearbeiten/Einreichen | Kommentieren | Kommentieren | Kommentieren | Kommentieren | Bearbeiten Realisierung | Kommentieren | Genehmigen | Lesen | Lesen limitiert | Auswerten |
| Terminverschiebung | Einreichen | Kommentieren | Kommentieren | Kommentieren | Kommentieren | Einreichen | Kommentieren | Genehmigen | Lesen | Lesen limitiert | Auswerten |
| Budget | Bearbeiten Kommentar | Lesen | Lesen | Lesen | Lesen | Lesen | Lesen | Genehmigen | Kein Zugriff | Kein Zugriff | Auswerten |
| Stunden | Bearbeiten/Prüfen | eigene Stunden | Lesen | eigene Stunden | eigene Stunden | eigene Stunden | eigene Stunden | Lesen aggregiert | Kein Zugriff | eigene Leistung | Auswerten |
| Dokumente | Bearbeiten | Bearbeiten Planung | Bearbeiten Freigabe | Bearbeiten Prüfung | Kommentieren | Bearbeiten Realisierung | Bearbeiten Doku | Lesen | Lesen limitiert | Bearbeiten zugewiesen | Lesen |
| Entscheidungen | Erstellen | Vorschlagen | Vorschlagen | Vorschlagen | Vorschlagen | Vorschlagen | Vorschlagen | Entscheiden | Kommentieren | kein Zugriff | Auswerten |

## Zugriffsstufen

| Zugriffsstufe | Bedeutung | Beispiel |
|---|---|---|
| Lesen | Datensatz sichtbar, nicht änderbar | Stakeholder sieht Status. |
| Kommentieren | Hinweise ergänzen, keine Kerndaten ändern | Fachverantwortlicher kommentiert Risiko. |
| Bearbeiten | fachliche Felder ändern | Planungsingenieur aktualisiert Planungsstand. |
| Einreichen | Workflow starten | Projektmanager reicht Terminverschiebung ein. |
| Freigeben/Ablehnen | Entscheidung im Workflow treffen | BVB gibt Unterlagen frei. |
| Administrieren | Datenmodell, Rechte, Stammdaten | Systemadministrator. |
