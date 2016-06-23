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

define({general:{cancel:"Cancelar",close:"Cerrar",none:"Ninguno",ok:"Aceptar",other:"Otro",stamp:"Estampar",now:"Ahora",choose:"Elige uno:"},editor:{noMetadata:"No hay metadatos para este elemento.",xmlViewOnly:"El editor no admite el tipo de metadatos asociado con este elemento. Los metadatos deben estar en formato para ArcGIS.",editorDialog:{caption:"Metadatos",captionPattern:"Metadatos para {title}"},primaryToolbar:{view:"Ver",viewXml:"Ver XML",edit:"Edición",initializing:"Cargando...",startingEditor:"Iniciando editor...",loadingDocument:"Cargando documento...",updatingDocument:"Actualizando documento...",generatingView:"Generando vista...",errors:{errorGeneratingView:"Se ha producido un error al generar la vista.",errorLoadingDocument:"Se ha producido un error al cargar el documento."}},changesNotSaved:{prompt:"El documento tiene cambios que no se han guardado.",dialogTitle:"Cerrar editor de metadatos",closeButton:"Cerrar"},download:{caption:"Descargar",dialogTitle:"Descargar",prompt:"Haz clic aquí para descargar el archivo."},load:{caption:"Abierto",dialogTitle:"Abierto",typeTab:"Nuevo documento",fileTab:"Abrir archivo",templateTab:"Una plantilla",itemTab:"Tu elemento",filePrompt:"Selecciona un archivo XML de metadatos de ArcGIS. Los metadatos deben estar en formato para ArcGIS.",templatePrompt:"Crear metadatos",pullItem:"Rellena los metadatos con detalles del elemento.",importWarning:"El archivo seleccionado no parece estar en formato para ArcGIS. Los metadatos cargados deben estar en formato para ArcGIS.",loading:"Cargando...",noMetadata:"Se pueden crear metadatos para este elemento seleccionado una de las siguientes opciones.",unrecognizedMetadata:"El editor no admite el tipo de metadatos asociado con este elemento. Se pueden crear metadatos compatibles seleccionando una de las siguientes opciones.",errorLoading:"Error al cargar.",warnings:{badFile:"El archivo seleccionado no pudo cargarse.",notAnXml:"El archivo seleccionado no es un archivo XML.",notSupported:"Este tipo de archivo no es compatible."}},save:{caption:"Guardar",dialogTitle:"Guardar metadatos",working:"Guardando metadatos...",errorSaving:"Se ha producido un error y los metadatos no se han guardado.",saveDialog:{pushCaption:"Aplicar cambios al elemento"}},saveAndClose:{caption:"Guardar y cerrar"},saveDraft:{caption:"Guardar copia local",dialogTitle:"Guardar copia local"},validate:{caption:"Validar",dialogTitle:"Validación",docIsValid:"El documento es válido."},del:{caption:"Eliminar",dialogTitle:"Eliminar metadatos",prompt:"¿Estás seguro de que deseas eliminar estos metadatos?",working:"Eliminando metadatos...",errorDeleting:"Se ha producido un error y los metadatos no se han eliminado."},transform:{caption:"Transformar",dialogTitle:"Transformar en",prompt:"",working:"Transformando...",errorTransforming:"Se ha producido un error al transformar el documento."},errorDialog:{dialogTitle:"Se ha producido un error"}},arcgis:{portal:{metadataButton:{caption:"Metadatos"}}},calendar:{button:"Calendario...",title:"Calendario"},geoExtent:{button:"Establecer extensión geográfica...",title:"Extensión geográfica",navigate:"Navegar",draw:"Dibujar un rectángulo",drawHint:"Mantén presionado para comenzar y suelta para finalizar."},hints:{date:"(aaaa o aaaa-mm o aaaa-mm-dd)",dateTime:"(aaaa-mm-ddThh:mm:ss.sss[+-]hh:mm)",dateOrDateTime:"(aaaa o aaaa-mm o aaaa-mm-dd o aaaa-mm-ddThh:mm:ss.sss[+-]hh:mm)",delimitedTextArea:"(usa coma o línea nueva para separar)",fgdcDate:"(aaaa o aaaa-mm o aaaa-mm-dd)",fgdcTime:"(hh:mm:ss.sss[+-]hh:mm)",integer:"(introduce un entero)",latitude:"(grados decimales)",longitude:"(grados decimales)",number:"(introduce un número)",numberGreaterThanZero:"(introduzca un número > 0)"},isoTopicCategoryCode:{caption:"Categoría de tema",boundaries:"Límites administrativos y políticos",farming:"Agricultura y ganadería",climatologyMeteorologyAtmosphere:"Atmósfera y clima",biota:"Biología y ecología",economy:"Negocios y economía",planningCadastre:"Catastro",society:"Cultura, sociedad y demografía",elevation:"Elevación y productos derivados",environment:"Medioambiente y protección",structure:"Infraestructuras y estructuras",geoscientificInformation:"Geología y geofísica",health:"Salud humana y enfermedades",imageryBaseMapsEarthCover:"Imágenes y mapas base",inlandWaters:"Recursos de aguas continentales",location:"Ubicaciones y redes geodésicas",intelligenceMilitary:"Asuntos militares",oceans:"Océanos y estuarios",transportation:"Redes de transporte",utilitiesCommunication:"Suministros y comunicación"},multiplicity:{moveElementDown:"Bajar la sección",moveElementUp:"Subir la sección",removeElement:"Eliminar la sección",repeatElement:"Repetir la sección"},optionalNode:{switchTip:"Incluir o excluir esta sección."},serviceTypes:{featureService:"Servicio de entidades",mapService:"Servicio de mapas",imageService:"Imagen Servicio",wms:"WMS",wfs:"WFS (servidor de entidades web)",wcs:"WCS"},validation:{pattern:"{label} - {message}",patternWithHint:"{label} - {message} {hint}",ok:"Aceptar",empty:"Se requiere un valor.",date:"El valor debe ser una fecha.",integer:"El valor debe ser un entero.",number:"El valor debe ser un número.",other:"Valor no válido."},validationPane:{clearMessages:"Borrar mensajes",prompt:"(Haz clic en cada mensaje a continuación y proporciona la información requerida en el campo que se indique)"}});