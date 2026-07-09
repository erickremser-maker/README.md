# Konzept: Zentrales internes Projektportal für technische Projekte

## Management-Zusammenfassung

Das geplante Projektportal soll für technische Projekte der verbindliche Arbeitsort werden. Es ersetzt verstreute Informationen in Laufwerken, SharePoint-Seiten, Excel-Dateien, Teams-Chats, Outlook-Postfächern und Notes-Listen durch eine digitale Projektakte je Projekt oder Maßnahme.

Für Vorgesetzte und Entscheider bedeutet das: Der aktuelle Projektstand ist nicht mehr davon abhängig, wen man fragt oder welche Datei zuletzt aktualisiert wurde. Ein Projekt wird geöffnet und zeigt dort verbindlich Status, Termine, Risiken, Budget, Stunden, Rollen, Entscheidungen, Dokumente und offene Punkte.

Der wichtigste Nutzen ist nicht eine neue Oberfläche, sondern eine klare Führungslogik: Das Portal ist die führende Wahrheit. Teams und Outlook dienen nur noch für Benachrichtigungen und Abstimmungen. Projektstatus, Terminverschiebungen, Budgetabweichungen, Planprüfungen, BVB-Freigaben und Entscheidungen werden strukturiert und nachvollziehbar im Portal gepflegt.

Für technische Projektteams mit Projektmanagern, Planungsingenieuren, Bauvorlagenberechtigten, Planprüfern, technischen Fachverantwortlichen, Realisierungsverantwortlichen und Dokumentationsverantwortlichen entsteht dadurch eine gemeinsame Arbeitsgrundlage. Die Phasen Vorplanung, Ausführungsplanung, Planprüfung, BVB-Freigabe, Realisierung und Dokumentation werden standardisiert abgebildet.

Empfohlen wird eine Umsetzung mit Microsoft Dataverse, model-driven Power Apps, SharePoint-Dokumentbibliotheken, Power Automate und Power BI. Diese Architektur passt besonders gut, wenn bereits Microsoft 365 genutzt wird und interne strukturierte Projektprozesse, Dokumente, Workflows und Managementauswertungen im Vordergrund stehen. Eine eigene Web-Anwendung sollte nur dann priorisiert werden, wenn sehr individuelle Benutzeroberflächen, externe Nutzergruppen, Spezialintegrationen oder nicht abbildbare technische Anforderungen dominieren.

## 1. Zielbild für das zentrale Projektportal

Das Projektportal ist der zentrale digitale Arbeitsort für alle technischen Projekte und Maßnahmen. Es bildet eine verbindliche digitale Projektakte je Projekt. Berechtigte Nutzer sehen den vollständigen aktuellen Stand und können Informationen dort pflegen, prüfen, freigeben, ergänzen und auswerten.

Das Zielbild umfasst:

- eine zentrale Projektakte je Projekt oder Maßnahme
- standardisierte technische Projektphasen: Vorplanung, Ausführungsplanung, Planprüfung, BVB-Freigabe, Realisierung und Dokumentation
- klare Rollenmatrix je Projekt, weil eine Person in verschiedenen Projekten unterschiedliche Rollen übernehmen kann
- strukturierte Pflege von Status, Terminen, Risiken, Budget, Stunden, Entscheidungen, Dokumenten und Verantwortlichkeiten
- verpflichtende Begründung und Genehmigungslogik bei Terminverschiebungen
- integrierte Dokumentenablage mit technischen Plänen, Prüfunterlagen, Freigaben, Zeichnungen, Richtlinien, Vorlagen, Nachweisen und Referenzprojekten
- Dashboards für Projektmanager, PMO, Fachbereiche, Auftraggeber und Management
- Benachrichtigungen über Teams und Outlook, ohne dass diese Kanäle führende Ablagen sind
- nachvollziehbare Änderungshistorie für Status, Termine, Budget, Stunden, Risiken und Entscheidungen

## 2. Empfohlene technische Architektur

### Empfehlung

Für das beschriebene Zielbild ist eine Microsoft-Power-Platform-Architektur mit Dataverse, model-driven Power Apps, SharePoint-Dokumentbibliotheken, Power Automate und Power BI sehr gut geeignet. Dataverse hält die strukturierte Wahrheit. SharePoint hält die Dokumente. Power Apps stellt die Projektakte und Pflegeoberflächen bereit. Power Automate steuert Benachrichtigungen, Genehmigungen und Eskalationen. Power BI liefert Portfolio-, Budget-, Termin-, Risiko- und Auslastungsberichte.

Eine eigene Web-Anwendung ist nur dann vorzuziehen, wenn Anforderungen bestehen, die mit Power Platform wirtschaftlich oder technisch nicht sinnvoll abbildbar sind, zum Beispiel sehr individuelle Planungsoberflächen, komplexe externe Portale, Spezial-CAD-Integrationen oder stark transaktionale Echtzeitprozesse.

### Zielarchitektur

| Ebene | Empfohlene Komponente | Zweck |
|---|---|---|
| Strukturierte Projektdaten | Microsoft Dataverse | Führende Datenhaltung für Stammdaten, Phasen, Rollen, Termine, Risiken, Entscheidungen, Budget, Stunden und Governance-Daten |
| Fachliche Oberfläche | Model-driven Power App | Projektakte, Rollenmatrix, Phasenübersicht, Terminübersicht, Budget- und Stundenansichten |
| Dokumente | SharePoint-Dokumentbibliotheken | Technische Pläne, Zeichnungen, Bauvorlagen, Prüfunterlagen, Freigaben, Protokolle, Richtlinien, Vorlagen, Nachweise und Referenzen |
| Workflows | Power Automate | Terminverschiebungsfreigaben, BVB-Freigaben, Prüfaufgaben, Eskalationen, Erinnerungen und Benachrichtigungen |
| Auswertungen | Power BI | Portfolio-Cockpit, Ampeln, Termintrends, Budget- und Stundenberichte, Auslastung, Risiko-Heatmaps |
| Identität und Rechte | Microsoft Entra ID, Dataverse Security Roles, Teams-Gruppen | Authentifizierung, Rollenrechte, sensible Projektbereiche und Zugriff auf Dokumente |
| Kommunikation | Teams und Outlook | Hinweise, Aufgabenbenachrichtigungen, Freigabeanfragen und Links zur Projektakte |
| Integration | Dataverse Connectors, Power Query, Dataflows, APIs | Migration und spätere Anbindung von ERP, Zeiterfassung, Ressourcenplanung oder DMS |

## 3. Konkrete technische Projektphasen

Jedes Projekt durchläuft die sechs verbindlichen Phasen Vorplanung, Ausführungsplanung, Planprüfung, BVB-Freigabe, Realisierung und Dokumentation. Phasen werden nicht als Freitext gepflegt, sondern als strukturierte Datensätze mit Status, Verantwortlichen, Pflichtfeldern, Dokumenten und Abhängigkeiten.

### 3.1 Vorplanung

| Element | Konkrete Ausprägung |
|---|---|
| Zweck | Machbarkeit, Varianten, grober Umfang, erste Kosten- und Terminannahmen klären |
| Teilbereiche | Bedarfsklärung, Bestandserfassung, Variantenvergleich, technische Machbarkeit, Grobkostenschätzung, Risikovorprüfung, Stakeholderanalyse |
| Statuswerte | Nicht gestartet, In Bearbeitung, Rückfrage offen, Zur Prüfung bereit, Abgeschlossen, Blockiert |
| Pflichtfelder | Projektziel, Standort/Anlage, Projektmanager, Auftraggeber, technischer Fachverantwortlicher, grober Leistungsumfang, Ziel-Inbetriebnahme, Budgetrahmen, Hauptrisiken, Entscheidung zur Weiterplanung |
| Typische Dokumente | Bedarfsbeschreibung, Lageplan, Bestandsunterlagen, Variantenvergleich, Grobkostenschätzung, Machbarkeitsnotiz, Fotodokumentation, Referenzprojekte |
| Verantwortlichkeiten | Projektmanager koordiniert; Planungsingenieur erstellt technische Varianten; technischer Fachverantwortlicher bewertet Machbarkeit; Auftraggeber trifft Grundsatzentscheidung |
| Abhängigkeiten | Startet nach Projektanlage; Abschluss ist Voraussetzung für Ausführungsplanung; offene Grundsatzentscheidung blockiert Folgephase |

### 3.2 Ausführungsplanung

| Element | Konkrete Ausprägung |
|---|---|
| Zweck | Technische Lösung detaillieren und prüffähige Unterlagen erstellen |
| Teilbereiche | Detailplanung, technische Berechnungen, Zeichnungen, Leistungsverzeichnisse, Schnittstellenklärung, Terminplanung, Kostenfortschreibung, Ressourcenplanung |
| Statuswerte | Nicht gestartet, In Bearbeitung, Interne Klärung, Unterlagen unvollständig, Zur Planprüfung bereit, Abgeschlossen, Blockiert |
| Pflichtfelder | verantwortlicher Planungsingenieur, Planungsstand, Dokumentenpaket, betroffene Gewerke, Schnittstellen, Meilensteine, Kosten-Forecast, Stunden-Forecast, Prüfreife-Kennzeichen |
| Typische Dokumente | Ausführungspläne, technische Zeichnungen, Berechnungen, Spezifikationen, Leistungsverzeichnis, Terminplan, Schnittstellenliste, Kostenfortschreibung |
| Verantwortlichkeiten | Planungsingenieur verantwortet Planungsunterlagen; Projektmanager steuert Termine und Abhängigkeiten; Fachverantwortlicher prüft technische Plausibilität |
| Abhängigkeiten | Benötigt abgeschlossene oder freigegebene Vorplanung; Abschluss ist Voraussetzung für Planprüfung; fehlende Dokumente verhindern Prüfübergabe |

### 3.3 Planprüfung

| Element | Konkrete Ausprägung |
|---|---|
| Zweck | Prüfen, ob Ausführungsplanung fachlich, formal und technisch vollständig ist |
| Teilbereiche | Vollständigkeitsprüfung, technische Prüfung, Normen-/Richtlinienprüfung, Schnittstellenprüfung, Mängelliste, Wiedervorlage, Prüffreigabe |
| Statuswerte | Nicht gestartet, Eingereicht, In Prüfung, Rückfragen offen, Nachbesserung erforderlich, Freigegeben, Abgelehnt, Blockiert |
| Pflichtfelder | zuständiger Planprüfer, Eingangsdatum, Prüfgegenstand, Prüfergebnis, offene Prüfpunkte, Prüffrist, Nachbesserungsverantwortlicher, Freigabeentscheidung |
| Typische Dokumente | Prüfprotokoll, kommentierte Pläne, Mängelliste, Prüfnachweise, Richtliniencheckliste, Nachbesserungsunterlagen |
| Verantwortlichkeiten | Planprüfer dokumentiert Prüfergebnis; Planungsingenieur beantwortet Rückfragen und überarbeitet Unterlagen; Projektmanager überwacht Prüffristen und Eskalationen |
| Abhängigkeiten | Benötigt prüffähige Ausführungsplanung; Nachbesserungen erzeugen Aufgaben für Planungsingenieur; Freigabe ist Voraussetzung für BVB-Freigabe oder Realisierung |

### 3.4 BVB-Freigabe

| Element | Konkrete Ausprägung |
|---|---|
| Zweck | Bauvorlagenberechtigter bestätigt und verantwortet freigaberelevante Unterlagen |
| Teilbereiche | Prüfung freigaberelevanter Unterlagen, formale BVB-Bewertung, Freigabeentscheidung, Auflagen, Dokumentation der Verantwortungsübernahme |
| Statuswerte | Nicht gestartet, Zur BVB-Prüfung bereit, In BVB-Prüfung, Auflagen offen, Freigegeben, Abgelehnt, Zurückgezogen, Blockiert |
| Pflichtfelder | Bauvorlagenberechtigter/BVB, Freigabegegenstand, Freigabedatum, Auflagen, BVB-Entscheidung, Freigabedokument, Gültigkeit, betroffene Pläne |
| Typische Dokumente | BVB-Freigabeformular, geprüfte Planunterlagen, Auflagenliste, Unterschriftenblatt, Genehmigungsunterlagen, Nachweise |
| Verantwortlichkeiten | BVB gibt frei oder lehnt begründet ab; Projektmanager koordiniert; Planungsingenieur liefert Unterlagen und arbeitet Auflagen ein; Auftraggeber wird bei Ablehnung informiert |
| Abhängigkeiten | Benötigt abgeschlossene Planprüfung oder definierte Prüffreigabe; offene BVB-Auflagen blockieren Realisierung; Ablehnung erzeugt Änderungsbedarf in Planung |

### 3.5 Realisierung

| Element | Konkrete Ausprägung |
|---|---|
| Zweck | Technische Umsetzung auf Basis freigegebener Planung steuern und überwachen |
| Teilbereiche | Arbeitsvorbereitung, Beauftragung, Ausführung, Bau-/Montagekoordination, Abnahmen, Mängelmanagement, Inbetriebnahme, Sicherheits- und Qualitätsnachweise |
| Statuswerte | Nicht gestartet, In Vorbereitung, In Umsetzung, Verzögert, Teilabgenommen, Inbetriebnahme geplant, In Betrieb genommen, Abgeschlossen, Blockiert |
| Pflichtfelder | Realisierungsverantwortlicher, Start Realisierung, geplanter Inbetriebnahmetermin, aktueller Inbetriebnahmetermin, ausführende Dienstleister, Sicherheitsfreigaben, Abnahmestatus, Mängelstatus |
| Typische Dokumente | Ausführungsfreigabe, Montagepläne, Sicherheitsunterlagen, Bautagebuch, Abnahmeprotokolle, Mängelliste, Inbetriebnahmeprotokoll, Lieferantendokumente |
| Verantwortlichkeiten | Realisierungsverantwortlicher steuert Umsetzung; Projektmanager überwacht Termine, Budget und Eskalationen; externe Dienstleister liefern Leistungen; technische Fachverantwortliche prüfen Qualität |
| Abhängigkeiten | Benötigt BVB-Freigabe oder definierte Realisierungsfreigabe; Terminverschiebungen betreffen Budget, Stunden und Rollen; Abschluss ist Voraussetzung für Dokumentation |

### 3.6 Dokumentation

| Element | Konkrete Ausprägung |
|---|---|
| Zweck | Vollständige technische und kaufmännische Abschlussdokumentation sicherstellen |
| Teilbereiche | As-built-Dokumentation, Übergabeunterlagen, Abschlussbericht, Budgetabschluss, Stundenabschluss, Lessons Learned, Archivierung, Referenzprojektkennzeichnung |
| Statuswerte | Nicht gestartet, In Sammlung, Unvollständig, In Prüfung, Nacharbeit erforderlich, Vollständig, Archiviert |
| Pflichtfelder | Dokumentationsverantwortlicher, Dokumentationspaket, As-built-Stand, Abnahme-/Inbetriebnahmenachweis, offene Restpunkte, Budgetabschluss, Stundenabschluss, Archivierungsstatus |
| Typische Dokumente | As-built-Pläne, Abschlussbericht, Übergabeprotokoll, Wartungs-/Betriebsunterlagen, Prüf- und Abnahmenachweise, Lessons Learned, Fotodokumentation |
| Verantwortlichkeiten | Dokumentationsverantwortlicher stellt Vollständigkeit sicher; Planungsingenieur liefert finale Pläne; Realisierungsverantwortlicher liefert Abnahmen; Projektmanager schließt Projekt formal ab |
| Abhängigkeiten | Startet nach oder während Realisierung; Abschluss erfordert Inbetriebnahme- und Abnahmenachweise; Archivierung beendet aktive Pflege |

## 4. Rollenlogik und Verantwortlichkeiten

Eine Person kann je Projekt unterschiedliche Rollen haben. Rollen werden deshalb nicht fest an eine Person gebunden, sondern über eine Projektrollenmatrix modelliert. Dieselbe Person kann in Projekt A Projektmanager, in Projekt B Planprüfer und in Projekt C Stakeholder sein.

| Rolle | Hauptverantwortung im Portal | Typische Bearbeitungsrechte |
|---|---|---|
| Projektmanager | Gesamtkoordination, Status, Termine, Risiken, Entscheidungen, Eskalationen und Projektakte | Projektakte bearbeiten, Statusberichte erstellen, Termine pflegen, Verschiebungen einreichen, Aufgaben zuweisen |
| Planungsingenieur | Vorplanung und Ausführungsplanung fachlich erstellen und aktualisieren | Planungsfelder, Dokumente, technische Aufgaben, Planungsstatus und Nachbesserungen bearbeiten |
| Bauvorlagenberechtigter / BVB | Freigaberelevante Unterlagen bewerten und verantworten | BVB-Freigabe erteilen/ablehnen, Auflagen dokumentieren, Freigabedokumente bestätigen |
| Planprüfer | Planunterlagen prüfen, Mängel dokumentieren und Prüfergebnisse festhalten | Prüfstatus, Prüfpunkte, Mängellisten und Prüffreigaben bearbeiten |
| Technischer Fachverantwortlicher | technische Plausibilität, Standards, Richtlinien und Qualität sichern | technische Bewertungen, Risiken, Qualitätskommentare und fachliche Freigaben bearbeiten |
| Realisierungsverantwortlicher | Umsetzung, Montage, Abnahme, Inbetriebnahme und Mängel steuern | Realisierungsstatus, Dienstleister, Abnahmen, Mängel und Inbetriebnahmeinformationen bearbeiten |
| Dokumentationsverantwortlicher | Abschlussdokumentation, As-built-Unterlagen und Archivierung sichern | Dokumentationsstatus, Dokumentenpakete, Abschlussunterlagen und Archivierungsstatus bearbeiten |
| Auftraggeber | Projektziel, Priorität, Budgetrahmen und wichtige Entscheidungen verantworten | Entscheidungen freigeben, Budgetänderungen bestätigen, Eskalationen bewerten |
| Stakeholder | Betroffenheit, Anforderungen, Hinweise und Rückmeldungen einbringen | lesender Zugriff oder kommentierende Beteiligung je Projektregel |
| Externer Dienstleister | Planungs-, Prüf-, Realisierungs- oder Dokumentationsleistungen liefern | eingeschränkter Zugriff auf definierte Aufgaben, Dokumente und Rückmeldungen |

## 5. Datenmodell mit Tabellen, Feldern und Beziehungen

### 5.1 Projekt

| Feld | Typ | Beschreibung |
|---|---|---|
| Projekt-ID | Autonummer/Text | Eindeutige Projektkennung |
| Projekttitel | Text | Name des Projekts |
| Projektart | Auswahl | Maßnahme, Bauprojekt, Anlagenprojekt, Umbau, Sanierung, Infrastruktur, technisches Sonderprojekt |
| Standort / Anlage | Lookup | Betroffener Standort oder technische Anlage |
| Auftraggeber | Lookup Person/Rolle | Fachlicher Sponsor |
| Projektmanager | Lookup Projektrolle | operative Gesamtkoordination |
| Gesamtstatus | Auswahl | Grün, Gelb, Rot, Pausiert, Abgeschlossen |
| Aktuelle Phase | Lookup Projektphase | Vorplanung bis Dokumentation |
| Ziel-Inbetriebnahme | Datum | Zieltermin aus Projektauftrag |
| Aktuelle Inbetriebnahme | Datum | aktuell gültiger Termin |
| Ursprüngliche Inbetriebnahme | Datum | Baseline-Termin |
| Budget Soll gesamt | Währung | genehmigtes Gesamtbudget |
| Budget Ist gesamt | Währung | gebuchte Ist-Kosten |
| Budget Forecast gesamt | Währung | erwarteter Endwert |
| Stundenbudget gesamt | Zahl | genehmigtes Stundenbudget |
| Verbrauchte Stunden gesamt | Zahl | Summe Ist-Stunden |
| Letzte Statusaktualisierung | Datum/Uhrzeit | letzte verbindliche Aktualisierung |
| Nächste Statusfälligkeit | Datum | nächste Aktualisierungspflicht |

### 5.2 Person und Projektrolle

| Tabelle | Wichtige Felder | Zweck |
|---|---|---|
| Person | Name, E-Mail, Organisationseinheit, aktiv, externe/interne Person | Stammdaten der beteiligten Personen |
| Projektrolle | Projekt, Person, Rolle, RACI-Kategorie, Startdatum, Enddatum, Verantwortungsbeschreibung, Stellvertretung, Zugriffsstufe | Zuordnung einer Person zu einer projektspezifischen Rolle |

Beziehung: Ein Projekt hat viele Projektrollen. Eine Person kann in vielen Projekten mehrere unterschiedliche Rollen haben. Rollen sind historisierbar, damit nachvollziehbar bleibt, wer zu welchem Zeitpunkt verantwortlich war.

### 5.3 Projektphase

| Feld | Typ | Beschreibung |
|---|---|---|
| Projekt | Lookup Projekt | Zugehöriges Projekt |
| Phase | Auswahl | Vorplanung, Ausführungsplanung, Planprüfung, BVB-Freigabe, Realisierung, Dokumentation |
| Phasenstatus | Auswahl | siehe phasenspezifische Statuswerte |
| Verantwortliche Rolle | Lookup Projektrolle | primär zuständige Rolle |
| Start geplant / ist | Datum | geplanter und tatsächlicher Start |
| Ende geplant / ist | Datum | geplantes und tatsächliches Ende |
| Pflichtfelder vollständig | Ja/Nein | Systemprüfung |
| Pflichtdokumente vollständig | Ja/Nein | Dokumentenprüfung |
| Blockadegrund | Text | falls Phase blockiert ist |
| Abhängige Vorgängerphase | Lookup Projektphase | fachliche Abhängigkeit |

### 5.4 Budgetmodell

Budget wird nicht nur als ein Projektwert geführt, sondern nach Projekt, Phase, Kostenart, Rolle und optional Arbeitspaket differenziert.

| Feld | Typ | Beschreibung |
|---|---|---|
| Projekt | Lookup Projekt | Zugehöriges Projekt |
| Phase | Lookup Projektphase | betroffene Phase |
| Kostenart | Auswahl | intern, extern, Dienstleister, Material, Genehmigung, Planung, Realisierung, Dokumentation, Reserve |
| Verantwortliche Rolle | Lookup Projektrolle | fachlich budgetverantwortliche Rolle |
| Budget Soll | Währung | genehmigter Planwert |
| Budget Ist | Währung | gebuchte Kosten |
| Budget Forecast | Währung | erwarteter Endwert |
| Gebundenes Budget | Währung | beauftragte oder reservierte Kosten |
| Restbudget | Berechnet | Budget Soll minus Budget Ist minus gebundenes Budget |
| Budgetabweichung | Berechnet | Forecast minus Budget Soll oder Ist minus Soll |
| Abweichung Prozent | Berechnet | prozentuale Abweichung |
| Budgetstatus | Auswahl | Im Plan, Beobachten, Kritisch, Überschritten |
| Stichtag | Datum | Aktualitätsdatum |
| Kommentar / Begründung | Mehrzeiliger Text | Pflicht bei Abweichung oberhalb Schwelle |

### 5.5 Stunden- und Auslastungsmodell

Stunden werden je Person, Rolle, Projekt und Phase geplant und verfolgt. Dadurch kann sichtbar werden, welche Rollen oder Personen überlastet sind und welche Projekte mehr Aufwand verbrauchen als geplant.

| Feld | Typ | Beschreibung |
|---|---|---|
| Projekt | Lookup Projekt | Zugehöriges Projekt |
| Phase | Lookup Projektphase | betroffene Phase |
| Person | Lookup Person | leistende Person |
| Projektrolle | Lookup Projektrolle | Rolle der Person in diesem Projekt |
| Zeitraum | Kalenderwoche/Monat | Planungs- oder Berichtsperiode |
| Stundenbudget | Zahl | geplante Stunden für Person/Rolle/Projekt/Phase |
| Verbrauchte Stunden | Zahl | gebuchte oder gemeldete Ist-Stunden |
| Stunden Forecast | Zahl | erwarteter Gesamtaufwand |
| Reststunden | Berechnet | Stundenbudget minus verbrauchte Stunden |
| Stundenabweichung | Berechnet | Stunden Forecast minus Stundenbudget |
| Verfügbarkeit Person | Zahl | verfügbare Stunden im Zeitraum |
| Auslastung Person | Berechnet | geplante oder verbrauchte Projektstunden geteilt durch Verfügbarkeit |
| Auslastung Rolle | Berechnet | Summe Stunden je Rolle im Verhältnis zur Rollenkapazität |
| Auslastungsstatus | Auswahl | Frei, Ausgelastet, Überlastet, Kritisch überlastet |
| Kommentar | Text | Erläuterung bei Abweichungen |

### 5.6 Termin- und Terminverschiebungsmodell

Jeder Meilenstein und jeder Inbetriebnahmetermin wird mit Baseline, aktuellem Termin und tatsächlichem Termin geführt. Eine Änderung am aktuellen Termin erzeugt verpflichtend einen Terminverschiebungsdatensatz.

| Feld | Typ | Beschreibung |
|---|---|---|
| Projekt | Lookup Projekt | Zugehöriges Projekt |
| Termin / Meilenstein | Lookup Termin | betroffener Termin |
| Termintyp | Auswahl | Inbetriebnahme, Planungsabschluss, Prüffreigabe, BVB-Freigabe, Realisierungsstart, Abnahme, Dokumentationsabschluss |
| Altes Datum | Datum | bisher gültiger Termin |
| Neues Datum | Datum | neuer beantragter Termin |
| Grund | Mehrzeiliger Text, Pflichtfeld | konkrete Begründung der Verschiebung |
| Ursache | Auswahl, Pflichtfeld | Planungsänderung, fehlende Unterlagen, Prüfrückfrage, BVB-Auflage, Lieferverzug, Ressourcenmangel, externe Abhängigkeit, Budgetentscheidung, technisches Problem, Wetter/Sperrzeit, Sonstiges |
| Auswirkung auf Budget | Währung/Text, Pflichtfeld | erwartete Mehr- oder Minderkosten und Erläuterung |
| Auswirkung auf Stunden | Zahl/Text, Pflichtfeld | erwartete Mehr- oder Minderstunden und Erläuterung |
| Betroffene Rollen | Mehrfach-Lookup Projektrolle | z.B. Planungsingenieur, BVB, Planprüfer, Realisierungsverantwortlicher |
| Betroffene Phasen | Mehrfach-Lookup Projektphase | Phasen mit Terminwirkung |
| Auswirkung auf Inbetriebnahme | Auswahl | Keine, Gefährdet, Verschiebt sich, Noch offen |
| Genehmigungsstatus | Auswahl | Entwurf, Eingereicht, In Prüfung, Genehmigt, Abgelehnt, Zurückgezogen |
| Genehmiger | Lookup Projektrolle/Person | z.B. Projektmanager, Auftraggeber, PMO oder Steuerungskreis |
| Entscheidung / Kommentar | Mehrzeiliger Text | Freigabe- oder Ablehnungsgrund |
| Erstellt von / am | Person, Datum | Nachvollziehbarkeit |

Regel: Ohne ausgefüllten Grund, Ursache, Budgetauswirkung, Stundenauswirkung, betroffene Rollen und Genehmigungsstatus darf ein kritischer Meilenstein oder Inbetriebnahmetermin nicht verschoben werden.

## 6. Digitale Projektakte und Benutzeroberfläche

### 6.1 Portfolio-Startseite

Die Portfolio-Startseite ist der Einstieg für Management, PMO und Projektmanager. Sie zeigt alle berechtigten Projekte mit Ampeln, Filterung und Priorisierung.

Inhalte:

- Projektliste mit Status, Phase, Projektmanager, Auftraggeber, Ziel-Inbetriebnahme und aktueller Inbetriebnahme
- Filter nach Standort, Anlage, Projektart, Phase, Verantwortlichem, Status und Kritikalität
- Ampeln für Termin, Budget, Stunden, Risiken, Planprüfung und BVB-Freigabe
- Kacheln für überfällige Statusberichte, kritische Terminverschiebungen, rote Projekte und offene Freigaben
- Absprung in Power-BI-Dashboards und einzelne Projektakten

### 6.2 Projektakte

Die Projektakte ist die zentrale Arbeitsoberfläche eines Projekts. Sie bündelt alle fachlichen Register und zeigt auf der Startseite die wichtigsten Informationen.

Inhalte:

- Projektstammdaten
- aktueller Gesamtstatus
- aktuelle Phase
- Inbetriebnahmetermin
- kritische Meilensteine
- Top-Risiken
- offene Aufgaben
- Budget Soll/Ist/Forecast
- Stundenbudget, verbrauchte Stunden und Auslastung
- letzte Entscheidungen
- offene Prüf- und Freigabepunkte
- Dokumentenstatus

### 6.3 Rollenmatrix

Die Rollenmatrix zeigt je Projekt, wer welche Rolle innehat und welche Verantwortung besteht.

Inhalte:

- Person je Projektrolle
- RACI-Kategorie
- Stellvertretung
- Zeitraum der Rolle
- Zugriffsstufe
- Verantwortungsbeschreibung
- offene Aufgaben je Rolle

### 6.4 Phasenübersicht

Die Phasenübersicht zeigt die sechs verbindlichen Phasen und deren Status.

Inhalte:

- Vorplanung, Ausführungsplanung, Planprüfung, BVB-Freigabe, Realisierung, Dokumentation
- Status je Phase
- Start/Ende geplant und ist
- Verantwortliche Rolle
- Pflichtfelder vollständig
- Pflichtdokumente vollständig
- Blockaden und Abhängigkeiten

### 6.5 Terminübersicht

Die Terminübersicht zeigt Baseline, aktuellen Termin, Ist-Termin und Verschiebungshistorie.

Inhalte:

- Meilensteine und Inbetriebnahme
- ursprüngliches, aktuelles und tatsächliches Datum
- Terminstatus
- Verschiebungshistorie
- Grund, Ursache, Budget-/Stundenauswirkung
- betroffene Rollen und Genehmigungsstatus

### 6.6 Risikoübersicht

Die Risikoübersicht zeigt technische, terminliche, finanzielle und ressourcenbezogene Risiken.

Inhalte:

- Risikotitel und Beschreibung
- Eintrittswahrscheinlichkeit
- Auswirkung
- Risikowert
- Risikoeigner
- Maßnahmen
- Fälligkeiten
- Eskalationsbedarf

### 6.7 Budgetansicht

Die Budgetansicht zeigt Budget Soll, Ist, Forecast, gebundenes Budget, Restbudget und Abweichungen.

Inhalte:

- Budget je Projekt, Phase, Kostenart und verantwortlicher Rolle
- Budget Soll/Ist/Forecast
- gebundenes Budget
- Restbudget
- Abweichungen absolut und prozentual
- Schwellenwert-Kommentare
- Freigabe- oder Eskalationsstatus bei Überschreitungen

### 6.8 Stundenansicht

Die Stundenansicht zeigt Planung, Verbrauch, Forecast und Auslastung.

Inhalte:

- Stundenbudget je Projekt, Phase, Person und Rolle
- verbrauchte Stunden
- Stunden Forecast
- Reststunden
- Abweichungen
- Auslastung je Person
- Auslastung je Rolle
- Überlastungswarnungen

### 6.9 Dokumentenbereich

Der Dokumentenbereich basiert auf SharePoint, ist aber aus der Projektakte erreichbar und fachlich strukturiert.

Inhalte:

- Vorplanungsunterlagen
- Ausführungspläne
- Prüfunterlagen
- BVB-Freigaben
- Realisierungs- und Abnahmeunterlagen
- As-built-Dokumentation
- Richtlinien, Vorlagen und Referenzen
- Dokumentstatus, Version, Verantwortlicher und Gültigkeit

### 6.10 Entscheidungslog

Das Entscheidungslog ist die verbindliche Ablage für projektbezogene Entscheidungen.

Inhalte:

- Entscheidungstitel
- Datum
- Entscheider oder Gremium
- Entscheidung
- Alternativen
- Begründung
- Auswirkungen auf Termin, Budget, Stunden und technische Lösung
- Dokumentverweise

### 6.11 Änderungsverlauf

Der Änderungsverlauf zeigt relevante Änderungen an kritischen Projektdaten.

Inhalte:

- Änderungen an Inbetriebnahmeterminen und Meilensteinen
- Statuswechsel
- Budget- und Forecast-Änderungen
- Rollenänderungen
- BVB-Entscheidungen
- Planprüfungsentscheidungen
- geänderte Risiken und Eskalationen

### 6.12 Wissensdatenbank

Die Wissensdatenbank verhindert, dass Wissen nur in alten Projekten, E-Mails oder einzelnen Köpfen liegt.

Inhalte:

- Referenzprojekte
- Lessons Learned
- typische Risiken und Gegenmaßnahmen
- Vorlagen
- Checklisten für Planprüfung und BVB-Freigabe
- Richtlinien und Standards
- Beispiele guter Dokumentation

## 7. Trennung zwischen führenden Daten und angebundenen Quellen

### Führende Daten im Projektportal / Dataverse

Verbindlich im Portal gepflegt werden:

- Projektstammdaten
- Rollenmatrix und Verantwortlichkeiten
- technische Projektphasen und Phasenstatus
- Planprüfstatus
- BVB-Freigabestatus
- Meilensteine und Inbetriebnahmetermine
- Terminverschiebungen mit Grund, Ursache, Auswirkungen und Genehmigung
- Risiken und kritische Punkte
- Aufgaben und offene Punkte
- Entscheidungen
- Budget Soll, Ist, Forecast, gebundenes Budget, Restbudget und Abweichungen
- Stundenbudget, verbrauchte Stunden, Stunden-Forecast und Auslastung
- Dokumentmetadaten
- Freigaben, Genehmigungsstände und Eskalationen

### Führende Dokumentenablage in SharePoint

SharePoint bleibt führend für Dateien, aber nicht für Projektstatus, Termine, Rollen, Budget oder Entscheidungen. Dokumente werden projektbezogen strukturiert und mit der Projektakte verknüpft.

### Nicht führende Quellen

Teams, Outlook, Excel, Laufwerke und alte SharePoint-Bereiche dürfen nicht mehr führend für aktuelle Projektinformationen sein. Sie dienen nur für Benachrichtigungen, temporäre Analysen, Altbestand, Diskussionen oder Archivzugriffe.

## 8. Migrationsstrategie aus Excel, SharePoint, Laufwerken, Teams und Outlook

1. Quellen inventarisieren: Projektlisten, Planungslisten, Prüflisten, BVB-Freigabelisten, Budgetdateien, Stundenlisten, Laufwerke und relevante SharePoint-Bibliotheken erfassen.
2. Zielmodell mappen: bestehende Felder den neuen Tabellen Projekt, Projektrolle, Projektphase, Termin, Risiko, Entscheidung, Budget, Stunden und Dokumentmetadaten zuordnen.
3. Daten bereinigen: Dubletten entfernen, Projektkennungen vereinheitlichen, Rollen normalisieren, Statuswerte auf Zielauswahllisten mappen, veraltete Projekte archivieren.
4. Dokumente strukturieren: Dokumente in SharePoint nach Projekt und Phase einordnen, Pflichtdokumente kennzeichnen und Metadaten ergänzen.
5. Relevante Inhalte aus Teams und Outlook extrahieren: nur echte Entscheidungen, Nachweise, Terminbegründungen oder Aufgaben in strukturierte Datensätze überführen.
6. Pilotmigration durchführen: 5 bis 10 typische technische Projekte migrieren und durch Projektmanager, Planungsingenieure, BVB, Planprüfer und Controlling prüfen lassen.
7. Cutover festlegen: ab einem Stichtag ist nur das Portal führend; alte Listen werden schreibgeschützt oder als Archiv gekennzeichnet.
8. Nachmigration und Abschaltung: Restbestände bewerten, Altquellen archivieren, Schattenlisten aktiv abbauen.

## 9. MVP für den technischen Projektkontext

Das MVP muss bereits eine echte digitale Projektakte sein. Es darf nicht nur eine Projektliste oder Dokumentensammlung sein.

### MVP-Funktionsumfang

- Portfolio-Startseite mit Projektampeln, Phasenstatus und kritischen Terminen
- Projektakte mit Stammdaten, Status, Rollen, Phasen, Terminen, Risiken, Budget, Stunden und Dokumentbereich
- konkrete Phasen Vorplanung, Ausführungsplanung, Planprüfung, BVB-Freigabe, Realisierung und Dokumentation
- Rollenmatrix mit Projektmanager, Planungsingenieur, BVB, Planprüfer, technischem Fachverantwortlichem, Realisierungsverantwortlichem, Dokumentationsverantwortlichem, Auftraggeber, Stakeholder und externem Dienstleister
- Planprüfstatus mit Prüfpunkten, Mängeln, Prüffrist und Prüfergebnis
- BVB-Freigabestatus mit Auflagen, Entscheidung und Freigabedokument
- Terminübersicht mit Inbetriebnahme, Meilensteinen und verpflichtender Terminverschiebungslogik
- Budgetansicht mit Soll, Ist, Forecast, gebundenem Budget, Restbudget und Abweichung
- Stundenansicht mit Stundenbudget, verbrauchten Stunden, Forecast und Auslastung je Person, Rolle und Projekt
- Risikoübersicht mit Risikowert, Maßnahmen, Verantwortlichen und Eskalationsbedarf
- Entscheidungslog für verbindliche Projektentscheidungen
- SharePoint-Dokumentbereich je Projekt mit phasenbezogener Struktur
- einfache Power-BI-Auswertung für Portfolio, Termine, Budget, Stunden, Risiken und Phasen
- Power-Automate-Benachrichtigungen bei überfälligen Prüfungen, offenen BVB-Auflagen, Terminverschiebungen, roten Projekten und überfälligen Statusupdates

### MVP-Erfolgskriterien

- Jedes Pilotprojekt besitzt genau eine digitale Projektakte.
- Der aktuelle Projektstatus ist im Portal sichtbar und nicht aus E-Mails oder Excel abzuleiten.
- Jede Terminverschiebung kritischer Meilensteine enthält Grund, Ursache, Budgetauswirkung, Stundenauswirkung, betroffene Rollen und Genehmigungsstatus.
- Planprüfung und BVB-Freigabe sind als verbindliche Prozessschritte sichtbar.
- Budget- und Stundenabweichungen sind für Projektmanager und Auftraggeber erkennbar.
- Dokumente sind aus der Projektakte heraus auffindbar und phasenbezogen strukturiert.
- Management nutzt das Portfolio-Dashboard statt separater Excel-Abfragen.

## 10. Spätere Ausbaustufen

| Ausbaustufe | Inhalte |
|---|---|
| Portfolio- und Managementsteuerung | Steuerungskreisberichte, Eskalationscockpit, Bereichs- und Standortauswertungen, automatische Management-Summaries |
| Ressourcen- und Kapazitätsmanagement | Kapazitätsplanung je Person, Rolle, Team und Zeitraum; Überlastungswarnungen; Skill-Planung |
| Finanz- und ERP-Integration | Ist-Kosten aus ERP, Bestellungen, Obligos, Rechnungsbezüge, Investitionsfreigaben und Forecast-Prozesse |
| Erweiterte Planungsintegration | Anbindung von CAD-/Planmanagement-Systemen, Zeichnungsstatus, technische Änderungsstände |
| Wissensmanagement | Referenzprojekt-Suche, Lessons Learned, Checklisten, Vorlagenkatalog und technische Standards |
| Externe Zusammenarbeit | kontrollierter Zugriff für Dienstleister, externe Prüf- und Freigabeprozesse, Power Pages oder Extranet-Szenarien |
| KI-Unterstützung | automatische Statuszusammenfassungen, Risikoindikatoren, semantische Suche, Vorschläge für Maßnahmen |

## 11. Regeln zur Datenpflege und Governance

### Grundregeln

- Das Projektportal ist die führende Quelle für technische Projektinformationen.
- Projektstatus, Rollen, Phasen, Termine, Risiken, Entscheidungen, Budget und Stunden dürfen nicht ausschließlich in E-Mails, Teams-Chats oder Excel geführt werden.
- Jede aktive Maßnahme benötigt eine digitale Projektakte.
- Jede Projektakte benötigt eine Rollenmatrix.
- Jede Phase benötigt Status, Verantwortliche, Pflichtfelder und Pflichtdokumente.
- Terminverschiebungen kritischer Meilensteine benötigen Grund, Ursache, Auswirkungen und Genehmigung.
- Rote Projektstatuswerte benötigen Maßnahme und Eskalationsnotiz.
- Budget- und Stundenabweichungen oberhalb definierter Schwellen benötigen Kommentar und Forecast.
- Entscheidungen müssen mit Datum, Entscheider, Begründung und Auswirkungen dokumentiert werden.

### Rollen in der Governance

| Rolle | Governance-Verantwortung |
|---|---|
| Projektmanager | Aktualität der Projektakte, Status, Termine, Risiken, Aufgaben und Eskalationen |
| Planungsingenieur | Qualität und Aktualität der Planungsunterlagen und Planungsstatus |
| BVB | formale BVB-Freigabe, Auflagen und verantwortete Freigabedokumente |
| Planprüfer | Prüfergebnisse, Mängel, Prüffristen und Prüffreigaben |
| Technischer Fachverantwortlicher | technische Standards, Richtlinienkonformität und Qualität |
| Realisierungsverantwortlicher | Umsetzungsstatus, Abnahmen, Mängel und Inbetriebnahme |
| Dokumentationsverantwortlicher | Vollständigkeit, As-built-Stand, Übergabe und Archivierung |
| Auftraggeber | Budgetrahmen, Priorität, Grundsatzentscheidungen und Eskalationen |
| PMO | Datenmodell, Standards, Reporting, Qualitätssicherung und Schulung |
| Systemadministrator | Rechte, Umgebungen, Lösungen, Schnittstellen und Betrieb |

### Datenqualitätsregeln

- Statusaktualisierung mindestens wöchentlich oder je Projektstandard.
- Überfällige Planprüfungen und BVB-Auflagen werden automatisch erinnert.
- Projekte ohne aktuelle Statusmeldung erscheinen im PMO-Dashboard.
- Terminverschiebungen ohne vollständige Pflichtinformationen bleiben im Status Entwurf und ändern keinen freigegebenen Zieltermin.
- Budgetüberschreitungen oberhalb eines Schwellenwerts erzeugen eine Eskalation.
- Überlastete Personen oder Rollen werden in der Auslastungsansicht hervorgehoben.
- Abgeschlossene Projekte werden archiviert, bleiben aber für Referenzprojekte und Lessons Learned auswertbar.

## 12. Risiken, warum so ein System scheitern kann

| Risiko | Beschreibung | Gegenmaßnahme |
|---|---|---|
| Es wird nur eine weitere Liste | Technische Phasen, Rollen, Prüfungen und Freigaben werden nicht verbindlich abgebildet | MVP als echte Projektakte mit Phasen, Rollenmatrix, Terminen, Budget, Stunden und Dokumenten bauen |
| Keine führende Wahrheit | Excel, Teams und Outlook bleiben maßgeblich | Cutover-Stichtag, alte Listen schreibschützen, Management nutzt nur Portalberichte |
| Rollen bleiben unklar | Eine Person hat je Projekt unterschiedliche Aufgaben, aber das System bildet das nicht ab | Projektrollenmatrix mit Historie, RACI und Verantwortungsbeschreibung einführen |
| Planprüfung und BVB sind nur Dokumente | Prüf- und Freigabestatus verschwinden in PDFs oder E-Mails | Planprüfung und BVB-Freigabe als eigene strukturierte Phasen mit Pflichtfeldern modellieren |
| Terminverschiebungen bleiben intransparent | Verschiebungen werden ohne Ursache und Folgen gepflegt | Pflichtlogik für Grund, Ursache, Budget, Stunden, betroffene Rollen und Genehmigung |
| Budget und Stunden sind zu grob | Management sieht Abweichungen zu spät | Budget und Stunden je Projekt, Phase, Rolle und Person auswertbar machen |
| Zu viele Pflichtfelder | Nutzer empfinden Pflege als Belastung | Pflichtfelder je Phase priorisieren und MVP schlank halten |
| Schlechte Datenmigration | Altlasten und Dubletten zerstören Vertrauen | Pilotmigration, Datenbereinigung und Validierung durch Fachrollen |
| Fehlende Governance | Power-Platform-Wildwuchs und unklare Rechte entstehen | Umgebungsstrategie, Rollenmodell, Solution Management und Product Ownership etablieren |
| Keine Nutzerakzeptanz | Projektteams pflegen weiter wie bisher | Schulung, einfache Oberfläche, klare Management-Verbindlichkeit und messbarer Nutzen |

## 13. Konkrete nächste Schritte für einen nicht-technischen Projektmanager

1. Zielentscheidung vorbereiten: Das Portal wird führende Quelle für technische Projektinformationen.
2. Sponsor sichern: Management oder Bereichsleitung muss die Verbindlichkeit unterstützen.
3. Pilotprojekte auswählen: 5 bis 10 Projekte mit Planung, Planprüfung, BVB-Freigabe, Realisierung und Dokumentation wählen.
4. Rollen je Pilotprojekt erfassen: Projektmanager, Planungsingenieur, BVB, Planprüfer, Fachverantwortliche, Realisierung, Dokumentation, Auftraggeber und Dienstleister aufnehmen.
5. Bestehende Quellen inventarisieren: Excel, SharePoint, Laufwerke, Teams, Outlook und Notes nach Status, Terminen, Risiken, Budget, Stunden, Dokumenten und Entscheidungen durchsuchen.
6. Pflichtinformationen festlegen: je Phase definieren, welche Felder und Dokumente für Fortschritt und Freigabe zwingend sind.
7. Terminverschiebungsregel beschließen: Kein kritischer Termin wird ohne Grund, Ursache, Budget-/Stundenauswirkung, betroffene Rollen und Genehmigung geändert.
8. Mit IT Lizenz- und Architekturcheck durchführen: Dataverse, Power Apps, SharePoint, Power Automate, Power BI, Entra-ID-Rechte und Umgebungsstrategie klären.
9. MVP-Prototyp beauftragen: mit echten Pilotdaten, nicht nur als Mock-up.
10. Pilot testen: Projektmanager, Planungsingenieure, BVB, Planprüfer, Controlling und Management arbeiten im MVP.
11. Cutover definieren: ab Stichtag sind alte Listen nicht mehr führend.
12. Rollout vorbereiten: Schulungen, Governance, Support, Datenqualitätsberichte und kontinuierliche Verbesserung einplanen.


## Ergänzendes Anforderungspaket

Dieses Konzept wird durch ein umsetzungsnahes Dokumentenpaket im Ordner `docs/` ergänzt. Die Dateien gliedern die Anforderungen für Management, Fachbereich, IT und Umsetzungsteam in einzelne Arbeitsdokumente:

| Datei | Inhalt |
|---|---|
| `docs/01-management-summary.md` | Management-Zusammenfassung mit Nutzen, Entscheidungen und KPIs |
| `docs/02-fachliches-zielbild.md` | fachliches Zielbild, Zielgruppen, führende Informationen und Scope |
| `docs/03-prozess-und-phasenmodell.md` | Prozess- und Phasenmodell mit Status, Pflichtfeldern, Dokumenten und Abhängigkeiten |
| `docs/04-rollen-und-berechtigungsmatrix.md` | Rollen, Verantwortlichkeiten, Zugriffsstufen und Berechtigungsmatrix |
| `docs/05-datenmodell-und-datenwoerterbuch.md` | Datenmodell und Datenwörterbuch mit Pflichtfeldern, Quellen, Berechtigungen, Masken und Historisierung |
| `docs/06-benutzeroberflaechen-und-masken.md` | Maskenkatalog mit Zweck, Zielgruppe, Feldern, Aktionen, Pflichtlogiken und Benachrichtigungen |
| `docs/07-mvp-backlog.md` | MVP-Backlog nach MoSCoW-Priorisierung |
| `docs/08-user-stories.md` | User-Story-Katalog mit Akzeptanzkriterien |
| `docs/09-beispielprojekt.md` | vollständiges Beispielprojekt mit konkreten Beispieldaten |
| `docs/10-power-platform-umsetzung.md` | Umsetzungshinweise für Dataverse, Power Apps, SharePoint, Power Automate und Power BI |
| `docs/11-migrationsplan.md` | Migrationsplan mit Quellen, Mapping, Wellen, Datenqualität und Cutover |
| `docs/12-governance-und-betrieb.md` | Governance, Betrieb, Datenpflege, Release-Management und Supportmodell |

## Kurzfazit

Die Microsoft-Power-Platform-Variante ist für diesen technischen Projektkontext sehr gut geeignet, wenn sie konsequent als digitale Projektakte und nicht als weitere Projektliste umgesetzt wird. Entscheidend sind die verbindlichen Phasen Vorplanung, Ausführungsplanung, Planprüfung, BVB-Freigabe, Realisierung und Dokumentation, eine projektspezifische Rollenmatrix, belastbare Terminverschiebungslogik sowie konkrete Budget- und Stundenmodelle. SharePoint bleibt für Dokumente sinnvoll, Dataverse für die führenden strukturierten Daten, Power Apps für die Arbeitsoberfläche, Power Automate für Workflows und Power BI für Steuerung und Managementtransparenz.
