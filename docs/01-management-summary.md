# 01 Management Summary

## Zweck

Dieses Anforderungspaket beschreibt ein zentrales internes Projektportal für technische Projekte. Es richtet sich an Management, Projektleitung, Fachbereiche, IT und Umsetzungsteams. Ziel ist eine verbindliche digitale Projektakte je Projekt, die Status, Termine, Rollen, Planprüfung, BVB-Freigabe, Budget, Stunden, Risiken, Entscheidungen und Dokumente an einem Ort zusammenführt.

## Kernaussagen

| Thema | Aussage | Management-Nutzen |
|---|---|---|
| Führende Wahrheit | Das Portal ist führend für Status, Termine, Risiken, Entscheidungen, Budget und Stunden. | Kein Zusammensuchen aus Excel, Teams, Outlook oder Laufwerken. |
| Digitale Projektakte | Jedes Projekt hat eine zentrale Akte mit strukturierten Daten und Dokumentverweisen. | Projektstand ist jederzeit nachvollziehbar. |
| Technische Phasen | Vorplanung, Ausführungsplanung, Planprüfung, BVB-Freigabe, Realisierung und Dokumentation werden standardisiert geführt. | Vergleichbarkeit aller technischen Projekte. |
| Rollenmatrix | Personen werden je Projekt in Rollen geführt, nicht global fest verdrahtet. | Verantwortlichkeiten sind eindeutig und historisierbar. |
| Terminverschiebungen | Kritische Terminänderungen benötigen Grund, Ursache, Budget-/Stundenauswirkung, betroffene Rollen und Genehmigung. | Terminrisiken werden steuerbar. |
| Budget und Stunden | Soll, Ist, Forecast, gebundenes Budget, Restbudget, Stundenbudget, Verbrauch und Auslastung werden strukturiert ausgewertet. | Früherkennung von Überlastung und Kostenabweichung. |
| Microsoft-Architektur | Empfohlen werden Dataverse, model-driven Power Apps, SharePoint, Power Automate und Power BI. | Schnelle Umsetzung mit vorhandener Microsoft-365-Nähe. |

## Zielzustand in einem Satz

Ein Projektmanager öffnet ein Projekt und sieht dort den aktuellen, freigegebenen und vollständigen Stand inklusive Planung, Prüfung, BVB-Freigabe, Realisierung, Dokumentation, Budget, Stunden, Risiken, Entscheidungen und Dokumenten.

## Empfohlene MVP-Entscheidung

| Entscheidung | Empfehlung |
|---|---|
| Startumfang | MVP mit 5 bis 10 Pilotprojekten aus unterschiedlichen technischen Projekttypen. |
| Technologie | Dataverse als führende Datenbank, model-driven Power App als Fachoberfläche, SharePoint für Dokumente, Power Automate für Workflows, Power BI für Dashboards. |
| Nicht verhandelbar | Keine parallele führende Excel-Liste nach Cutover. |
| Kritischer Erfolgsfaktor | Management nutzt ausschließlich Portalberichte und fordert keine Schattenreports an. |

## Messbare Erfolgskriterien

| KPI | Zielwert im MVP | Bedeutung |
|---|---:|---|
| Aktive Pilotprojekte mit vollständiger Projektakte | 100 % | Jedes Pilotprojekt ist im Portal abgebildet. |
| Statusaktualität | mindestens wöchentlich | Keine veralteten Projektstände. |
| Kritische Terminverschiebungen mit vollständiger Begründung | 100 % | Keine unbegründeten Terminänderungen. |
| Planprüfungen mit dokumentiertem Ergebnis | 100 % | Prüfstatus ist nicht in E-Mails verborgen. |
| BVB-Freigaben mit Entscheidung/Auflagen | 100 % | Freigaben sind nachvollziehbar. |
| Budget-/Stundenabweichungen mit Kommentar | > 95 % | Management sieht Ursache und Prognose. |
