// COPYRIGHT © 2016 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.

define({documentTypes:{fgdc:{caption:"FGDC",description:""}},alternates:{none:"Kein",notComplete:"Nicht vollständig",other:"Andere",present:"Vorhanden",unknown:"Unbekannt",unpublishedMaterial:"Unveröffentlichtes Material"},hints:{integerGreaterThanOne:"(geben Sie eine ganze Zahl > 1 ein)",integer0To100:"(geben Sie eine ganze Zahl 0..100 ein)"},citeinfo:{caption:"Informationen zu bibliografischen Angaben",origin:"Urheber",pubdate:"Veröffentlichungsdatum",pubtime:"Veröffentlichungszeit",title:"Titel",edition:"Edition",geoform:{caption:"Präsentationsform für räumliche Daten",atlas:"Atlas",audio:"Audio",diagram:"Diagramm",sDocument:"Dokument",globe:"Globus",map:"Karte",model:"Modell",multiMediaPresentation:"Multimedia-Präsentation",profile:"Profil",rasterDigitalData:"Digitale Raster-Daten",remoteSensingImage:"Fernerkundungsbild",section:"Abschnitt",spreadsheet:"Kalkulationstabelle",tabularDigitalData:"Digitale Tabellendaten",vectorDigitalData:"Digitale Vektordaten",video:"Video",view:"Ansicht"},serinfo:{caption:"Reiheninformationen",sername:"Name der Reihe",issue:"Problemidentifizierung"},pubinfo:{caption:"Veröffentlichungsinformationen",pubplace:"Veröffentlichungsort",publish:"Publisher"},othercit:"Sonstige Details zu bibliografischen Angaben",onlink:"Online-Links (URL)"},cntinfo:{caption:"Kontaktinformationen",section:{primary:"Erst",phoneAndEmail:"Telefon und E-Mail",hoursAndInstructions:"Erreichbarkeit und Hinweise"},cntorgp:{caption:"Nach Organisation",cntorg:"Organisation",cntper:"Person"},cntperp:{caption:"Nach Person",cntper:"Person",cntorg:"Organisation"},cntpos:"Position",cntaddr:{caption:"Adresse",addrtype:{caption:"Adresstyp",mailing:"E-Mai-Adresse",physical:"Physisch",mailingAndPhysical:"E-Mail- und physische Adresse"},address:"Adresse",city:"Ort",state:"Staat",postal:"Postleitzahl",country:"Land"},cntvoice:"Telefon",cnttdd:"TDD/TTY-Telefon (Hörgeschädigte)",cntfax:"Fax",cntemail:"E-Mail-Adresse",hours:"Erreichbarkeit",cntinst:"Anweisungen"},dataqual:{caption:"Informationen zur Datenqualität",section:{attributeAccuracy:"Attributgenauigkeit",logicalConsistency:"Logische Konsistenz",completeness:"Vollständigkeit",positionalAccuracy:"Positionsgenauigkeit",lineage:"Herkunft",cloudCover:"Wolkendecke"},attracc:{caption:"Attributgenauigkeit",attraccr:"Bericht zur Attributgenauigkeit",qattracc:{caption:"Quantitative Bewertung der Attributgenauigkeit",attraccv:"Wert für Attributgenauigkeit",attracce:"Erklärung zur Attributgenauigkeit"}},logic:"Bericht zur logischen Konsistenz",complete:"Bericht zur Vollständigkeit",posacc:"Positionsgenauigkeit",horizpa:{caption:"Horizontale Positionsgenauigkeit",horizpar:"Bericht zur horizontalen Positionsgenauigkeit",qhorizpa:{caption:"Quantitative Bewertung der horizontalen Positionsgenauigkeit",horizpav:"Wert für die horizontale Positionsgenauigkeit",horizpae:"Erklärung der horizontalen Positionsgenauigkeit"}},vertacc:{caption:"Vertikale Positionsgenauigkeit",vertaccr:"Bericht zur vertikalen Positionsgenauigkeit",qvertpa:{caption:"Quantitative Bewertung der vertikalen Positionsgenauigkeit",vertaccv:"Wert für die vertikale Positionsgenauigkeit",vertacce:"Erklärung der vertikalen Positionsgenauigkeit"}},lineage:{caption:"Herkunft"},srcinfo:{caption:"Quellinformationen",srccite:"Quelldatenbestand",srcscale:"Nenner des Quellmaßstabs",typesrc:{caption:"Typ des Quellmediums",paper:"Papier",stableBaseMaterial:"Stabiles Rohpapier",microfiche:"Microfiche",microfilm:"Mikrofilm",audiocassette:"Audiokassette",chart:"Diagramm",filmstrip:"Filmstreifen",transparency:"Transparenz",videocassette:"Videokassette",videodisc:"Videodatenträger",videotape:"Videoband",physicalModel:"Physikalisches Modell",computerProgram:"Computerprogramm",disc:"Disk",cartridgeTape:"Magnetbandkassette",magneticTape:"Magnetband",online:"Online",cdrom:"CD-ROM",electronicBulletinBoard:"Electronic Bulletin Board",electronicMailSystem:"E-Mail-System"},srctime:"Quelle für Zeitraum des Inhalts",srccurr:"Referenz zur Aktualität der Quelle",srccitea:"Abkürzung für Quelldatenbestand",srccontr:"Quellbeitrag"},procstep:{caption:"Bearbeitungsschritt",procdesc:"Prozessbeschreibung",srcused:"Quelle verwendet Abkürzung für bibliografische Angaben",procdate:"Bearbeitungsdatum",proctime:"Verarbeitungszeit",srcprod:"Von der Quelle erzeugte Abkürzung für die bibliografische Angaben",proccont:"Ansprechpartner für Prozess"},cloud:"Wolkendecke"},distinfo:{caption:"Vertriebsinformation",section:{distributor:"Vertriebsstelle",description:"Beschreibung",orderProcess:"Bestellvorgang",prerequisites:"Voraussetzungen",availability:"Verfügbarkeit"},distrib:"Vertriebsstelle",resdesc:{caption:"Beschreibung der Ressource",liveData:"Live-Daten und Karten",downloadableData:"Herunterladbare Daten",offlineData:"Offline-Daten",staticMapImages:"Statische Kartenbilder",sDocument:"Andere Dokumente",application:"Anwendungen",geographicService:"Geographische Dienste",clearingHouse:"Clearinghouses",mapFiles:"Kartendateien",geographicActivies:"Geographische Aktivitäten"},distliab:"Haftungshinweis zum Vertrieb",custom:"Angepasstes Bestellverfahren",techpreq:"Technische Voraussetzungen",availabl:"Verfügbarkeit"},eainfo:{caption:"Entitäts- und Attributinformationen",overview:"Übersichtsbeschreibung",eaover:"Übersicht über Entitäten und Attribute",eadetcit:"Detaillierte bibliografische Angaben zu Entitäten und Attributen"},idinfo:{caption:"Information zur Identifikation",section:{timeAndStatus:"Zeit und Status",constraints:"Einschränkungen",contact:"Kontakt",additional:"Weitere"},citeinfo:"Bibliografische Angaben",descript:{caption:"Beschreibung",sAbstract:"Kurzfassung",purpose:"Verwendung",supplinf:"Zusätzliche Informationen"},timeperd:{caption:"Zeitraum des Inhalts",current:{caption:"Aktualitätsreferenz",groundCondition:"Bodenbedingung",publicationDate:"Veröffentlichungsdatum"}},status:{caption:"Status",progress:{caption:"Fortschritt",complete:"Abgeschlossen",inWork:"In Bearbeitung",planned:"Geplant"},update:{caption:"Pflege- und Aktualisierungsintervall",continual:"Kontinuierlich",daily:"Täglich",weekly:"Wöchentlich",monthly:"Monatlich",annually:"Jährlich",unknown:"Unbekannt",asNeeded:"Nach Bedarf",irregular:"Unregelmäßig",nonePlanned:"Nicht geplant"}},spdom:{caption:"Ausdehnung",bounding:{caption:"Grenzkoordinaten",westbc:"Westliche Länge",eastbc:"Östliche Länge",northbc:"Nördliche Breite",southbc:"Südliche Breite"}},keywords:{caption:"Schlagwörter",theme:"Thema",place:"Ort",stratum:"Schichtungsebene",temporal:"Zeit",thesaursus:"Zugeordneter Thesaurus",delimited:"Schlagwörter",themektIsoTopicCategory:"ISO-Thema...",themektIsoTopicDialog:"ISO-Thema",placektGnis:"Informationssystem für geographische Bezeichnungen"},accconst:"Zugriffsbeschränkungen",useconst:"Use Constraints",ptcontac:"Ansprechpartner für die Ressource",browse:{caption:"Grafische Darstellung",browsen:"URL der grafischen Darstellung",browsed:"Grafikdateibeschreibung durchsuchen",browset:"Grafikdateityp durchsuchen"},datacred:"Quellennachweis für Dataset",secinfo:{caption:"Sicherheitsinformationen",secsys:"Sicherheitsklassifizierungssystem",secclass:{caption:"Sicherheitsklassifizierung",topSecret:"Streng geheim",secret:"Geheim",confidential:"Vertraulich",restricted:"Eingeschränkt",unclassified:"Nicht klassifiziert",sensitive:"Empfindlich"},sechandl:"Beschreibung von Sicherheitsmaßnahmen"},sNative:"Native Dataset-Umgebung",crossref:"Querverweis"},metadata:{idinfo:"Identifizierung",dataqual:"Qualität",spdoinfo:"Spatial Data Organization",spref:"Raumbezug",eainfo:"Entity and Attribute (Entität und Attribut)",distinfo:"Verteilung",metainfo:"Metadaten"},metainfo:{caption:"Metadateninformationen",section:{dates:"Datumsangaben für Metadaten",contact:"Ansprechpartner für Metadaten",standard:"Metadatenstandard",additional:"Zusätzliche"},metd:"Metadatendatum",metrd:"Datum der Metadatenprüfung",metfrd:"Zukünftiges Prüfungsdatum für Metadaten",metstdn:"Name des Metadatenstandards",metstdv:"Version des Metadatenstandards",metac:"Zugriffsbeschränkungen für Metadaten",metuc:"Nutzungsbeschränkungen für Metadaten",metsi:{caption:"Informationen zur Metadatensicherheit",metscs:"Klassifizierungssystem für Metadatensicherheit",metsc:"Klassifizierung der Metadatensicherheit",metshd:"Beschreibung von Sicherheitsmaßnahmen für Metadaten"}},spref:{caption:"Informationen zum Raumbezug",horizsys:{caption:"Horizontales Koordinatensystem",geograph:{caption:"Geographisch",latres:"Breitengradauflösung",longres:"Längengradauflösung",geogunit:{caption:"Geographische Koordinateneinheiten",decimalDegrees:"Dezimalgrad",decimalMinutes:"Dezimalminuten",decimalSeconds:"Dezimalsekunden",degreesAndDecimalMinutes:"Grade und Dezimalminuten",degreesMinutesAndDecimalSeconds:"Grad, Minuten und Dezimalsekunden",radians:"Radiant",grads:"Grad"}},planar:{caption:"Eben"},local:{caption:"Lokal",localdes:"Lokale Beschreibung",localgeo:"Lokale Georeferenzinformationen"},geodetic:{caption:"Geodätisches Modell",horizdn:{caption:"Name des horizontalen Datums",nad83:"North American Datum von 1983",nad27:"North American Datum von 1927"},ellips:{caption:"Name des Ellipsoid",grs80:"Geodätisches Referenzsystem 80",clarke1866:"Clarke 1866"},semiaxis:"Große Halbachse",denflat:"Nenner für Abflachungsverhältnis"}},vertdef:{caption:"Vertikales Koordinatensystem",altsys:{caption:"Höhensystem",altdatum:{caption:"Name des Höhendatums",navd88:"North American Vertical Datum von 1988",ngvd29:"National Geodetic Vertical Datum von 1929"},altres:"Höhenauflösung",altunits:{caption:"Entfernungseinheiten für Höhe",meters:"Meter",feet:"Fuß"},altenc:{caption:"Codierungsmethode für Höhe",explicit:"In horizontalen Koordinaten enthaltene explizite Höhenkoordinate",implicit:"Implizite Koordinate",attribute:"Attributwerte"}},depthsys:{caption:"Tiefensystem",depthdn:{caption:"Name des Tiefendatums",option1:"Lokale Oberfläche",option2:"Diagrammbezugspunkt; Bezugspunkt für ständigen Abfall",option3:"Niedrigstmöglicher Gezeitenwasserstand",option4:"Höchstmöglicher Gezeitenwasserstand",option5:"Mittleres Niedrigwasser",option6:"Mittleres Hochwasser",option7:"Normalnull",option8:"Bezugspunkt für Landvermessung",option9:"Mittleres Niedrigwasser zur Springzeit",option10:"Mittleres Hochwasser zur Springzeit",option11:"Mittleres Nipphochwasser",option12:"Mittleres Nippniedrigwasser",option13:"Mittleres niedriges Niedrigwasser",option14:"Mittelniedriges Springniedrigwasser",option15:"Mittleres höchstes Hochwasser",option16:"Mittleres höchstes Niedrigwasser",option17:"Mittleres niedrigstes Hochwasser",option18:"Springtide",option19:"Tropic Lower Low Water",option20:"Nipptide",option21:"Hochwasser",option22:"Höchstes Hochwasser",option23:"Niedrigwasser",option24:"Bezugspunkt für Niedrigwasser",option25:"Niedrigstes Niedrigwasser",option26:"Niedriges Niedrigwasser",option27:"Niedrigstes Normalniedrigwasser",option28:"Mittlerer Tidenhub",option29:"Indisches Springniedrigwasser",option30:"Hochwasser vollständig oder teilweise",option31:"Niedrigwasser vollständig oder teilweise",option32:"Columbia River Datum",option33:"Niedrigwasserbezugspunkt der Golfküste",option34:"Äquatoriales Springniedrigwasser",option35:"Ungefährer niedrigstmöglicher Gezeitenwasserstand",option36:"Keine Korrektur"},depthres:"Tiefenauflösung",depthdu:{caption:"Entfernungseinheiten für Tiefen",meters:"Meter",feet:"Fuß"},depthem:{caption:"Codierungsmethode für Tiefe",explicit:"In horizontalen Koordinaten enthaltene explizite Tiefenkoordinate",implicit:"Implizite Koordinate",attribute:"Attributwerte"}}}},timeinfo:{caption:"Informationen zum Zeitraum",sngdate:"Einzelne Datumsangabe",mdattim:"Mehrere Datumsangaben",rngdates:"Datumsbereich",caldate:"Datum",time:"Zeit",begdate:"Anfangsdatum",begtime:"Anfangszeit",enddate:"Enddatum",endtime:"Endzeit"}});