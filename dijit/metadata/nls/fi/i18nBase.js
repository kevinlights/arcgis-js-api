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

define({general:{cancel:"Peruuta",close:"Sulje",none:"Ei mitään",ok:"OK",other:"Muu",stamp:"Leima",now:"Nyt",choose:"Valitse yksi:"},editor:{noMetadata:"Kohteelle ei ole metatietoja.",xmlViewOnly:"Editori ei tue tähän kohteeseen liittyvän metadatan lajia. Metadatan on oltava ArcGIS-muodossa.",editorDialog:{caption:"Metatiedot",captionPattern:"Kohteen {title} metatiedot"},primaryToolbar:{view:"Näytä",viewXml:"Näytä XML",edit:"Muokkaa",initializing:"Ladataan...",startingEditor:"Aloitetaan editoria...",loadingDocument:"Ladataan dokumenttia...",updatingDocument:"Päivitetään dokumenttia...",generatingView:"Luodaan näkymää...",errors:{errorGeneratingView:"Virhe näkymän luonnissa.",errorLoadingDocument:"Virhe dokumentin latauksessa."}},changesNotSaved:{prompt:"Dokumentissasi on muutoksia, joita ei ole tallennettu.",dialogTitle:"Sulje metadataeditori",closeButton:"Sulje"},download:{caption:"Lataa",dialogTitle:"Lataa",prompt:"Lataa tiedosto napsauttamalla tätä."},load:{caption:"Avoin",dialogTitle:"Avoin",typeTab:"Uusi dokumentti",fileTab:"Avaa tiedosto",templateTab:"Malli",itemTab:"Kohteesi",filePrompt:"Valitse paikallinen ArcGIS Metadata XML -tiedosto. Metadatan on oltava ArcGIS-muodossa.",templatePrompt:"Luo metadata",pullItem:"Täytä metatiedot kohteen tiedoilla.",importWarning:"Valittu tiedosto ei ole ArcGIS-muodossa. Ladatun metadatan on oltava ArcGIS-muodossa.",loading:"Ladataan...",noMetadata:"Tämän kohteen metatiedot voi luoda valitsemalla jonkin seuraavista vaihtoehdoista.",unrecognizedMetadata:"Editori ei tue tähän kohteeseen liittyvien metatietojen lajia. Tuetut metatiedot voi luoda valitsemalla jonkin seuraavista vaihtoehdoista.",errorLoading:"Virhe ladattaessa.",warnings:{badFile:"Valittua tiedostoa ei voitu ladata.",notAnXml:"Valittu tiedosto ei ole XML-tiedosto.",notSupported:"Tämäntyyppistä tiedostoa ei tueta."}},save:{caption:"Tallenna",dialogTitle:"Tallenna metatiedot",working:"Tallennetaan metatietoja...",errorSaving:"On ilmennyt virhe. Metatietoja ei ole tallennettu.",saveDialog:{pushCaption:"Ota muutokset käyttöön kohteessa"}},saveAndClose:{caption:"Tallenna ja sulje"},saveDraft:{caption:"Tallenna paikallinen kopio",dialogTitle:"Tallenna paikallinen kopio"},validate:{caption:"Vahvista",dialogTitle:"Validointi",docIsValid:"Dokumenttisi on kelvollinen."},del:{caption:"Poista",dialogTitle:"Poista metadata",prompt:"Haluatko varmasti poistaa nämä metatiedot?",working:"Poistetaan metatietoja...",errorDeleting:"On ilmennyt virhe. Metatietoja ei ole poistettu."},transform:{caption:"Muunna",dialogTitle:"Muunna muotoon",prompt:"",working:"Muunnetaan...",errorTransforming:"Virhe muunnettaessa dokumenttia."},errorDialog:{dialogTitle:"Tapahtui virhe"}},arcgis:{portal:{metadataButton:{caption:"Metatiedot"}}},calendar:{button:"Kalenteri...",title:"Kalenteri"},geoExtent:{button:"Aseta maantieteellinen laajuus...",title:"Maantieteellinen laajuus",navigate:"Siirry",draw:"Piirrä suorakulmio",drawHint:"Käynnistä ja anna mennä loppuun painamalla alas."},hints:{date:"(vvvv tai vvvv-kk tai vvvv-kk-pp)",dateTime:"(vvvv-kk-ppTtt:mm:ss.sss[+-]tt:mm)",dateOrDateTime:"(vvvv tai vvvv-kk tai vvvv-kk-pp tai vvvv-kk-ppTtt:mm:ss.sss[+-]tt:mm)",delimitedTextArea:"(käytä pilkkua tai rivinvaihtoa erotinmerkkinä)",fgdcDate:"(vvvv tai vvvv-kk tai vvvv-kk-pp)",fgdcTime:"tt:mm:ss.sss[+-]tt:mm)",integer:"(kirjoita kokonaisluku)",latitude:"(desimaaliasteet)",longitude:"(desimaaliasteet)",number:"(kirjoita numero)",numberGreaterThanZero:"(kirjoita numero, joka on suurempi kuin 0)"},isoTopicCategoryCode:{caption:"Aiheluokka",boundaries:"Hallinnolliset ja poliittiset rajat",farming:"Maanviljely ja karjanhoito",climatologyMeteorologyAtmosphere:"Ilmakehä ja ilmasto",biota:"Biologia ja ekologia",economy:"Liiketoiminta ja talous",planningCadastre:"Kiinteistörekisteri",society:"Kulttuuri, yhteiskunta ja demografia",elevation:"Korkeus ja siihen liittyvät tuotteet",environment:"Ympäristö ja luonnonsuojelu",structure:"Palvelut ja rakenteet",geoscientificInformation:"Geologia ja geofysiikka",health:"Ihmisten terveys ja sairaudet",imageryBaseMapsEarthCover:"Kuvat ja taustakartat",inlandWaters:"Sisävesistöjen resurssit",location:"Sijainnit ja geodeettiset verkot",intelligenceMilitary:"Sotilastoiminta",oceans:"Meret ja joensuut",transportation:"Kuljetusverkot",utilitiesCommunication:"Apuohjelmat ja tiedonsiirto"},multiplicity:{moveElementDown:"Siirrä osaa alaspäin",moveElementUp:"Siirrä osaa ylöspäin",removeElement:"Poista osa",repeatElement:"Toista osa"},optionalNode:{switchTip:"Sisällytä tämä osa tai jätä se pois."},serviceTypes:{featureService:"Kohdepalvelu",mapService:"Karttapalvelu",imageService:"Kuvapalvelu",wms:"WMS",wfs:"WFS",wcs:"WCS"},validation:{pattern:"{label} - {message}",patternWithHint:"{label} - {message} {hint}",ok:"OK",empty:"Arvo on pakollinen.",date:"Arvon on oltava päivämäärä.",integer:"Arvon on oltava kokonaisluku.",number:"Arvon on oltava numero.",other:"Virheellinen arvo."},validationPane:{clearMessages:"Tyhjennä sanomat",prompt:"(napsauta kutakin alla olevaa viestiä ja anna tarvittavat tiedot määritettyyn kenttään)"}});