---
tags: [BS Klausur]
title: BS Klausur
created: '2022-08-02T08:34:40.542Z'
modified: '2022-08-02T10:06:31.574Z'
---

# BS Klausur

## Sicherheitsprobleme
+ Safety: Schutz vor Software-Fehler, Störungen, Ausfällen, ...
  + Funktionale Sicherheit
+ Security: Schutz vor Menschen
  + Datensicherheit

## Unerwünschte Dinge
+ nicht autorisierte Daten lesen (Geheimhaltung, Vertraulichkeit)
+ nicht autorisierte Daten schreiben (Integrität)
+ unter "falscher Flagge" arbeiten (Authentizität)
+ nicht autorisiert Ressourcen verbrauchen (Verfügbarkeit)

## Virus-Arten
+ Bootsektor-Viren: Beim Systemstart
+ Linkviren: Ausführbares Programm als Virus
+ Makroviren: in skriptbaren Programmen wie Word, Excel
  + Durch Dokumente verarbeitet

## Social Engineering
+ Ausnutzung menschlicher Fehler
+ Phishing
  + gefälschte WWW-Addressen oder emails von z.B. Banken
+ Pharming
  + Manipulation der DNS-Anfragen von Webbrowsern
  + Umleitung von Zugriffen (gefälschte Bankseite)
  + Verdächtige Zertifikate werden meist ignoriert

## Schädlinge
+ Viren
  + unabsichtliche Berbreitung
+ Würmer
  + Keine Anwender-Unterstützung bei der Verbreitung
+ Trojanische Pferde
  + Programm, das als nützliche Anwendung getarnt ist
+ Rootkit
  + Sammlung von Softwarewerkzeugen, um zukünftige Zugriffe und/oder Prozesse und Dateien zu tarnen
  + Wird nach Einbruch installiert
  + Versteckt sich selbst

## Entwurfsprinzipien für Rechteverwaltungen
+ Prinzip der geringst-möglichen Privelegisierung ("principle of least privilege")
  + Verbot als Normalfall
  + Gegenbeispiel: Systemdienste mit "root-Rechten" (*NIX)
+ Sichere Standardeinstellungen ("secure defaults")
+ Separierung von Privilegien ("seperation of duties")
  + mehrfache Bedingungen für die Zulassung einer Operation

## Zugriffsmatrix
+ Subjekte (Personen, Prozesse)
+ Objekte (Daten, Geräte, Prozesse, Speicher, ...)
+ Operationen (Lesen, Schreiben, Löschen, Ausführen, ...)
+ -> Frage: Ist Operation(Subjekt, Objekt) zulässig?

## Varianten der Schutzmatrix
+ Spaltenweise: ACL – Access Control List (Zugriffssteuerliste)
  + bei jedem Zugriff wird beim Objekt auf der Basis der Identität des Absenders dessen Berechtigung geprüft
+ Zeilenweise: Capabilites (Zugriffsberechtigungen)
  + bei jedem Zugriff wird etwas grprüft, was Subjekte besitzen und bei Bedarf weitergeben können
+ regelbasiert: Mandotory access control
  + bei jedem Zugriff werden Regeln ausgewertet

## Capabilites
+ Zeilenweise Darstellung
+ Festlegung für jedes Subjekt, wie es aug welche Objekte zugreifen darf
  + Beispiel: Unix-Dateideskriptoren
  + Weitergabe durch `fork`-Systemaufruf
    + Ermöglicht Zugriff auf Dateien ohne erneute Prüfung der UNIX-Zugriffsrechte

## Mandotory Access Control: regelbasierte Zugriffssteuerung
+ Für Subjekt und Objekte wird eine passende Regel gesucht
+ Bsp: SELinux


## Systemsoftware und Sicherheit
+ Hardware: MMU (Speicher), Schutzringe (CPU)
+ Software:
  + Betriebssystem hat **alleinige Kontrolle**
    + der Hardware
    + über alle Prozesse
    + über alle Ressourcen
  + Bereitstellung von
    + Identifikationsmechanismen
    + Authetisierungsmechanismen
    + Privilegseparation
    + Kryptographische Sicheung von Informationen
+ MMU: Harwarekomponente der CPU für Zugriff auf Speicherbereiche
  + Umsetzung von Prozess-Sicht (virtuelle Adressen) auf Hardware-Sicht (physische Adresse)
+ Pages:
  + Einblendung nur der gnau benötigeten Menge an Speicherseiten des Hauptspeichers
  + Isolation der physikalischen Adressräume
  + Schutzbits für jede Seite, die bei jedem Zugriff kontroliiert werden
    + rwx
    + Zugriff im User-Mode/Supervisor-Mode

## Schutzringe
+ Privilegienkonzept, hir in der x86-Variante
  + Ausführung von Code ist bestimmem Schutzring zugeordnet
  + Code in Ring 0 hat Zugriff auf alle Ressourcen des Systems
  + User-Programme laufen in Ring 3
  + Ringe 1 und 2 für BS-nahen Code
    + Gerätetreiber
+ Ringe schränken ein
  + den nutzbaren Befehlssatz des Prozessors
    + Bsp: keine Interruptsperren in Ring > 0
  + den zugeifbaren Adressbereich für den Prozess
    + Sperre von I/O-Zugriffen

### Softwaebasierter Schutz
## Identifikationsmechanismen
+ Unix: Benutzidentifikation, Gruppenidentifikation
  + Numerischer Wert
  + Übersetzung in Namen durch Zuordnungstabellen in /etc/passwd bzw. /etc/group
+ Ressourcen haben zugeordnete Besitzer
+ Superuser:uid = 0
  + Hat volle Rechte auf das System
## Authentifizierungsmechanismen
+ Beispiel: Unix login
+ Abfrage von Benutzernamen und Passwort
+ Verifikatopm des Passworts mit im System hinterlgtem Passwort
  + Entweder durch Verschlüsslung des eingegebenen Passworts und Vergleich mit dem hinterlegten verschlüsselten Wert
  + oder durch Verifikation eines Hash-Wertes
+ Der login-Prozess startet dann das erste Benutzerprogramm (z.B. eine Shell) mit der uid und gid
## Kryptographische Sicherung von Informationen
+ Bsp: Passworte der Systembenutzer DES-verschlüsselt
+ Ursprünglich in Unix: (/etc/passwd)
+ Problem: verschlüsselte Passworte für alle Benutzer lesbar
  + und mit genügend Zeit auch durch "brute force"-Angriff zu knacken
  + fertige Tools wie z.B. "John the Ripper"
+ Heute: Nur Benutzeinformation
  + Passworte setehen separat in /etc/shadow

## Softwarefehler
+ Trade-off: Performance $\leftrightarrow$ Sicherheit
+ C, C++, Assembler: *"unmanaged"*-Sprachen
  + Pointer, Keine Prüfung von Arraygrenzen, Wertebereich-Overflow
+ C#, Java: *"managed"*-Sprachen
  + Für Systementwicklung leider i.d.R ungeeignet
  + In managed-Sprachen gibt es auch Probleme, z.B. mit Speicherlecks!
+ Häifige Probleme:
  + Pufferüberläufe
  + Wertebereichsüberläufe
+ Statistik: Durschnittlich 1 Fehler pro 1000 Quellcodezeilen

---

## Dateisysteme

### UNIX Block Buffer Cache
+ Read ahead: beim sequentiellen Lesen wird auch der Transfer von Folgeblöcken angestoßen
+ Lazy write: Block wird nicht sofort auf der Platte geschrieben (erlaubt Optimierung der Schreibzugriffe und blockiert den Schreiber nicht)
+ Verwaltung freier Blöcke in einer Freiliste
  + LRU-Verfahren
  + Bereits freie, aber noch nicht anderweitig benutzte Blöcke können reaktiviert werden
+ Schreiben erfolgt, wenn
  + keine freine pUffer mehr vorhanden sind
  + regelmäßig vom System (fsflush-Prozess, update-Prozess)
  + beim Systemaufruf sync
  + und nach jedem Schreibaufruf im Modus O_SYNC
+ Addressierung
  + Adressierung eines Blocks erfolgt über ein Tupel: (Gereätenummer, Blocknummer)
  + Über die Adresse wir ein Hash-Wert gebildet, der eine mögliche Pufferliste auswählt

## Fehlererholung
+ Reparaturprogramme: fsck, chkdsk, scandisk
  + kann länger Dauern

## Journaled File System
+ Zusätzlich zum Schreiben der Daten und Meta-Daten (z.B. Inodes) wird ein Protokoll der Änderungen geführt
  + Alle Änderungen treten als Teil von Transaktionen auf
  + Log File
+ Bootvorgang: Abgelich der Protokoll datei mit den aktuellen Änderungen
  + Vermeidung von Inkonsistenzen
