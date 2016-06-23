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

define({documentTypes:{arcgis:{caption:"Metadados do ArcGIS",editorCaption:"Metadados",description:""}},emptyOption:"Vazio",conditionals:{ISO19139A1_ROW4:"Se Nível de Hierarquia de Metadados for Conjunto de Dados, uma Caixa Delimitadora Geográfica ou Descrição Geográfica é exigida.",ISO19139A1_ROW6:"Um Identificador do Conjunto de Dados ou Nome do Conjunto de Dados é exigido.",ISO19139A1_ROW7:"Se Outras Restrições forem escolhidas, Outras Restrições são exigidas.",ISO19139A1_ROW9:"Se Escopo não for Conjunto de Dados ou Séries, uma Descrição de Nível é exigida.",ISO19139A1_ROW10_11_12:"Se Escopo for Conjunto de Dados ou Séries; uma Declaração, Etapa do Processo, ou Fonte de Dados é exigido.",ISO19139A1_ROW15:"Se Disponibilidade do Ponto de Verificação estiver selecionado, Descrição do Ponto de Verificação é exigido.",ISO19139A1_ROW18:"Se Distribuição for documentado, um Formato ou Distribuidor/Formato é exigido.",INSPIRE_AccessLimitation:" Pelo menos um código de restrição de acesso válido ou de classificação de segurança é exigido. (INSPIRE)",INSPIRE_UseLimitation:" Pelo menos uma limitação de uso, é exigida. (INSPIRE)",INSPIRE_ConformanceResult:"Um relatório de Consistência de Domínio exige um Resultado de Conformidade. (INSPIRE)",INSPIRE_DomainConsistency:"Um relatório de Resultado de Conformidade é exigido. (INSPIRE)",INSPIRE_LineageStatement:"Se Escopo for Conjunto de Dados ou Séries, uma Declaração de Linhagem é exigida. (INSPIRE).",FGDC_DescIfTemporal:"Uma Descrição é exigida para uma Extensão Temporal. (FGDC)",FGDC_Keywords:"Um Tópico, Tag ou Palavra-Chave de Tema é exigido. (FGDC)",FGDC_Reports:"Relatórios de Omissão da Qualidade e Consistência Conceitual são exigidos. (FGDC)",FGDC_Temporal:"Pelo menos uma Extensão Temporal é exigida. (FGDC)",NAP_Contact:"Um Ponto de Endereço/Entrega, número de Telefone/Voz ou Recurso/URL Online é exigido. (NAP)",GEN_BoundingBox:"Pelo menos uma Caixa Delimitadora Geográfica é exigida.",GEN_ReportResult:"Resultado de Conformidade ou Quantitativo é exigido.",minLessThanMax:"O Valor Mínimo deve ser menor que o Valor Máximo."},hints:{integerGreaterThanZero:"(insira um inteiro > 0)",integerGreaterThanOne:"(insira um inteiro > 1)",integer0To100:"(insira um inteiro 0..100)",maxScale:"(insira um inteiro > 0, por exemplo. 50000)",minScale:"(insira um inteiro > 0, por exemplo. 150000000)",number0To100:"(insira um número 0..100)",number0To360:"(insira um número 0..360)",number90To90:"(insira um número -90..90)",listOfDoubles:"(insira uma lista de números, utilize um espaço para separar)"},htmlEditor:{button:"Editar..."},sections:{overview:"Visão Geral",esri:"Esri",resource:"Recurso",reference:"Referência",content:"Conteúdo",distribution:"Distribuição",quality:"Qualidade",eainfo:"Campos",representation:"Representação",metadata:"Metadados"},metadataStyle:{caption:"ArcGIS Metadata Style",changeButton:"Alterar...",dialogTitle:"Escolha um Estilo de Metadados",updating:"Atualizando documento...","Item Description":"Descrição de item","FGDC CSDGM Metadata":"FGDC CSDGM Metadata","ISO 19139 Metadata Implementation Specification":"Especificação de Implementação de Metadados ISO 19139","ISO 19139 Metadata Implementation Specification GML3.2":"Especificação de Implementação de Metadados GML3.2 ISO 19139","INSPIRE Metadata Directive":"INSPIRE Metadados Diretivo","North American Profile of ISO19115 2003":"Perfil Norte Americano de ISO19115 2003"},aggrInfo:{caption:"Agregar Informações",datasetHint:"Um Identificador do Conjunto de Dados ou Nome do Conjunto de Dados é exigido.",aggrDSIdent:"Identificador do conjunto de dados",aggrDSName:"Nome do Conjunto de Dados"},appSchInfo:{caption:"Esquema do Aplicativo",asName:"Nome do Esquema",asSchLang:"Idioma do Esquema",asCstLang:"Idioma da Restrição",asAscii:"ASCII",asGraFile:"Arquivo de Gráficos",asGraFile_src:"Fonte do Arquivo de Gráficos",asSwDevFile:"Arquivo de Desenvolvimento do Software",asSwDevFile_src:"Fonte do Arquivo de Desenvolvimento do Software",asSwDevFiFt:"Formato do Arquivo de Desenvolvimento do Software"},citation:{caption:"Referência",section:{titlesAndDates:"Títulos & Datas",links:"URLs do",identifiers:"Identificadores",presentation:"Formulário",other:"Outro",edition:"Edição",series:"Série"},conditionalDate:{caption:"Data de Citação",msg:"Uma Data de Criação, Data de Publicação ou Data de Revisão é exigida.",msg_nap:"Uma data de citação é exigida."},resTitle:"Título",resAltTitle:"Alternar Título",collTitle:"Título Coletivo",date:{createDate:"Data de Criação",pubDate:"Data de Publicação",reviseDate:"Data de Revisão",notavailDate:"Nenhuma Data Disponível",inforceDate:"Data Em Vigor",adoptDate:"Data Adotada",deprecDate:"Data Desaprovada",supersDate:"Data Substituída"},isbn:"ISBN",issn:"ISSN",citId:{caption:"Identificador",identCode:"Código",identAuth:"Citação de Autoridade"},resEd:"Edição",resEdDate:"Data de Edição",datasetSeries:{seriesName:"Nome",issId:"Problema",artPage:"Página"},otherCitDet:"Outros Detalhes",contactCaption:"Contato de Referência"},cntAddress:{caption:"Endereço",delPoint:"Pontos de Entrega",city:"Cidade",adminArea:"Área Administrativa",postCode:"Código Postal",country:"País",eMailAdd:"E-mail",addressType:{caption:"Tipo de Endereço",postal:"Código Postal",physical:"Físico",both:"Ambos"}},cntOnlineRes:{caption:"Recurso On-Line",linkage:"URL",protocol:"Protocolo",appProfile:"Perfil do Aplicativo",orName:"Nome",orDesc:"Descrição"},cntPhone:{caption:"Telefone",voiceNum:"Voz",faxNum:"Fax",tddtty:"TDD/TTY?"},codeRef:{caption:"Identificador",identCode:"Código",idCodeSpace:"Espaço de Código",idVersion:"Versão",identAuth:"Citação de Autoridade"},constraints:{caption:"Restrições",useLimit:"Limitação de Uso",general:{caption:"Geral"},legal:{caption:"Legal",accessConsts:"Restrições de Acesso",useConsts:"Restrições de Uso",othConsts:"Outras Restrições"},security:{caption:"Segurança",classSys:"Sistema de Classificação",userNote:"Anotação de Usuário",handDesc:"Descrição de Manuseio"}},contInfo:{caption:"Informações do Conteúdo",section:{CovDesc:"Descrição da Coverage",ImgDesc:"Descrição da Imagem",FetCatDesc:"Catálogo de Feições"},attDesc:"Descrição do Atributo",covDim:{caption:"Faixa ou Banda",seqID:"Identificador de Sequência",seqIDType:"Tipo de Identificador de Sequência",dimDescrp:"Descritor"},RangeDim:{caption:"Dimensão da Faixa"},Band:{caption:"Banda",minVal:"Valor Mínimo",maxVal:"Valor Máximo",valUnit:"Unidades do Valor",pkResp:"Máximo de Resposta",bitsPerVal:"Bits por Valor",toneGrad:"Graduação de Tons",sclFac:"Fator de Escala",offset:"Deslocamento"},CovDesc:{caption:"Descrição da Coverage",section:{description:"Descrição",rangesAndBands:"Faixas e Bandas"}},ImgDesc:{caption:"Descrição da Imagem",section:{description:"Descrição",rangesAndBands:"Faixas e Bandas"},illElevAng:"Ângulo de Elevação da Iluminação",illAziAng:"Ângulo de Azimute da Iluminação",cloudCovPer:"Porcentagem de Cobertura de Nuvem",cmpGenQuan:"Qualidade de Compressão",trianInd:"Indicador de Triangulação?",radCalDatAv:"Disponibilidade de Dados de Calibração Radiométrica?",camCalInAv:"Disponibilidade das Informações de Calibração da Câmera",filmDistInAv:"Disponibilidade das Informações de Distorção do Filme?",lensDistInAv:"Disponibilidade das Informações de Distorção da Lente?",imagQuCode:"Código de Qualidade",prcTypCde:"Código de Nível de Processamento"},FetCatDesc:{caption:"Catálogo de Feições",section:{description:"Descrição",featureTypes:"Tipos de Feições",citation:"Referência"},compCode:"O catálogo cumpre com ISO 19110",incWithDS:"Included With Dataset?",catCitation:"Citação do Catálogo de Feições:",catFetTyps:{caption:"Tipo de Feição",genericName:"Nome",codeSpace:"Espaço de Código"}}},contact:{caption:"Contato",section:{name:"Nome de Contato",info:"Informações de Contato",hoursAndInstructions:"Horas & Instruções"},conditionalName:{caption:"Nome de Contato",msg:"Um Nome Individual, Nome de Organização ou Nome de Posição é exigido.",msg_fgdc:"Um Nome Individual ou Nome de Organização é exigido."},rpIndName:"Nome Individual",rpOrgName:"Nome da Organização",rpPosName:"Nome de Posição",rpCntInfo:"Informações de Contato",cntHours:"Horas de Serviço",cntInstr:"Instruções de Contato"},distInfo:{caption:"Informações de Distribuição",section:{format:"Formatar",distributor:"Distribuidor",transfer:"Opções de Transferência"},distFormat:{caption:"Formato de Distribuição",formatName:"Nome do Formato",formatVer:"Versão do Formato",formatAmdNum:"Número de Emenda",formatSpec:"Especificação",fileDecmTech:"Técnica de Descompactação",formatInfo:"Conteúdo da Informação"},distributor:{caption:"Distribuidor"},distTranOps:{caption:"Opções de Transferência Digitais",section:{unitsAndSize:"Unidades"},unitsODist:"Unidades de Distribuição",transSize:"Tamanho de Transferência",offLineMed:{caption:"Meio Desconectado",medDensity:"Densidade",medDenUnits:"Unidades de Densidade",medVol:"Volumes",medNote:"Nota Média"}},distorOrdPrc:{caption:"Processo de Classificação",resFees:"Taxas",planAvDtTm:"Data Disponível",planAvTmPd:{caption:"Período de Data Disponível",tmBegin:"Data/Hora Inicial",tmEnd:"Data/Hora Final"},ordInstr:"Instruções de Classificação",ordTurn:"Progresso"}},dqInfo:{caption:"Qualidade dos Dados",section:{scope:"Escopo",report:"Relatório",lineage:"Linhagem"},dqScope:{section:{level:"Nível",extent:"Extensão"},scpLvl:"Nível de Escopo",scpLvlDesc:"Descrição do Nível",scpExt:"Extensão do Escopo"},report:{section:{measure:"Medida",evaluation:"Avaliação",result:"Resultado",conformance:"Conformidade"},measDesc:"Descrição da Medida",measName:"Nome da Medida",measDateTm:"Data de Medida",measId:"Identificador de Medida",evalMethDesc:"Método de Avaliação",evalProc:"Citação de Procedimento",ConResult:{caption:"Resultado de Conformidade",conExpl:"Explanação",conSpec:"Especificação",conPass:{caption:"Graus",_1:"Conforme",_0:"Não Conforme"}},QuanResult:{caption:"Resultado Quantitativo",quanVal:"Valor",quanValType:"Tipo de Valor",quanValUnit:"Unidades do Valor",errStat:"Estatística de Erro"}},dataLineage:{section:{statement:"Declaração",dataSource:"Fonte de Dados",prcStep:"Etapas do Processo"},statement:"Declaração de Linhagem",dataSource:{caption:"Fonte de Dados",section:{description:"Descrição",srcRefSys:"Sistema de Referência",srcExt:"Extensão",srcCitatn:"Referência"},srcDesc:"Descrição da Fonte",srcScale:{rfDenom:"Denominador de Escala"},srcRefSys:"Sistema de Referência de Origem",srcExt:"Extensão de Origem",srcCitatn:"Citação de Origem"},prcStep:{caption:"Etapas do Processo",section:{description:"Descrição",stepProc:"Processador",stepSrc:"Fonte de Dados"},stepDesc:"Descrição do Processo",stepRat:"Análise Racional",stepDateTm:"Data das Etapas do Processo",stepProc:"Processador",stepSrc:"Fonte de Dados"}}},eainfo:{caption:"Informações de Atributos e Entidades",section:{detailed:"Detalhes",overview:"Visão Geral"},detailed:{caption:"Detalhes de Atributos e Entidades",section:{enttyp:"Entidade",attr:"Atributos"},enttyp:{caption:"Tipo de Entidade",enttypl:"Rótulo",enttypt:"Objeto",enttypc:"Enumerar",enttypd:"Definição",enttypds:"Fonte de Definição"},attr:{caption:"Atributo",section:{description:"Descrição",value:"Valor",domain:"Domínio"},attrlabl:"Rótulo",attalias:"Nome Alternativo",attrdef:"Definição",attrdefs:"Fonte de Definição",attrtype:"Tipo",attwidth:"Largura",atprecis:"Precisão",attscale:"Escala",atindex:"Indexado",attrvai:{attrva:"Explanação do Valor",attrvae:"Acurácia de Valor"},attrmfrq:"Frequência de Medida do Valor",begdatea:"Data Inicial dos Valores",enddatea:"Data Final dos Valores",attrdomv:{caption:"Domínio",edom:{caption:"Enumerada",edomv:"Valor",edomvd:"Definição",edomvds:"Fonte de Definição"},rdom:{caption:"Intervalo",rdommin:"Valor Mínimo",rdommax:"Valor Máximo",rdommean:"Médio",rdomstdv:"Desvio Padrão",attrunit:"Unidades",attrmres:"Resolução da Medida"},codesetd:{caption:"Conjunto de Código",codesetn:"Nome",codesets:"Origem"},udom:{caption:"Não Representável"}}}},overview:{caption:"Visão Geral",eaover:"Resumo",eadetcit:"Referência"}},extent:{caption:"Extensão",section:{description:"Descrição",geographic:"Geográfico",temporal:"Temporal",vertical:"Vertical"},exDesc:"Descrição da Extensão",geoEle:{caption:"Extensão Geográfica",GeoBndBox:{caption:"Caixa Delimitadora",esriExtentType:"A extensão é para pesquisa?",exTypeCode:"A extensão contém o recurso?",westBL:"Longitude de Limite Oeste",eastBL:"Longitude de Limite Leste",southBL:"Latitude de Limite Sul",northBL:"Latitude de Limite Norte"},GeoDesc:{caption:"Descrição Geográfica",exTypeCode:"A descrição contém o recurso?",identCode:"Código"}},tempEle:{caption:"Extensão Temporal",TM_Period:"Período de Tempo",TM_Instant:"Intervalo de Tempo",tmPosition:"Data",tmBegin:"Data Inicial",tmEnd:"Data Final"},vertEle:{caption:"Extensão Vertical",vertMinVal:"Valor Mínimo",vertMaxVal:"Valor Máximo"}},graphOver:{caption:"Procurar Gráfico",bgFileName:"Procurar URL de Gráfico",bgFileDesc:"Descrição Gráfica de Navegador",bgFileType:"Procurar Tipo de Arquivo do Gráfico"},keywords:{caption:"Palavras-Chaves",section:{topicCategory:"Tópico",searchKeys:"Tags",themeKeys:"Tema",placeKeys:"Posicionar",tempKeys:"Temporal",discKeys:"Disciplina",stratKeys:"Estrato",productKeys:"Produto",subTopicCatKeys:"Subtópico",otherKeys:"Outro"},delimited:"Palavras-Chaves",searchKeys:"Tags",themeKeys:"Palavras-Chaves do Tema",placeKeys:"Palavras-Chaves de Localização",tempKeys:"Palavras-Chaves Temporais",discKeys:"Palavras-Chaves de Disciplina",stratKeys:"Palavras-Chaves do Estrato",productKeys:"Palavras-Chaves do Produto",subTopicCatKeys:"Palavras-Chaves do Subtópico",otherKeys:"Outros Palavras-Chaves",thesaName:"Citação do Dicionário de Sinônimos",thesaLang:"Idioma do Dicionário de Sinônimos"},locales:{caption:"Locais",locale:"Local",resTitle:"Título",idAbs:"Resumo"},maintenance:{caption:"Manutenção",section:{frequency:"Frequência",scope:"Escopo",note:"Nota"},usrDefFreq:"Frequência Personalizada",dateNext:"Próxima Atualização",maintScp:"Atualizar Escopo",upScpDesc:{caption:"Descrição do Escopo",attribSet:"Atributos",attribIntSet:"Instâncias do Atributo",featSet:"Feições",featIntSet:"Instâncias da Feição",datasetSet:"Conjunto de Dados",other:"Outras Instâncias"},maintNote:"Nota de Manutenção",maintCont:"Contato de Manutenção"},metadata:{section:{profile:"Perfil",details:"Escopo"},mdFileID:"Identificador de Arquivo",mdParentID:"Identificador do Arquivo Pai",datasetURI:"URI do Conjunto de Dados",dataSetFn:"Função do Conjunto de Dados",mdDateSt:"Metadados",mdLang:"Idioma de Metadados",mdChar:"Conjunto de Caracteres",mdHrLv:"Nível de Hierarquia",mdHrLvName:"Nome do Nível de Hierarquia",mdContact:"Contato de Metadados",mdMaint:"Manutenção do Metadados",mdConst:"Restrições dos Metadados"},porCatInfo:{caption:"Citação da Representação"},refSysInfo:{caption:"Referência Espacial"},resource:{section:{citation:"Referência",details:"Detalhes",description:"Descrição",keywords:"Palavras-Chaves",status:"Status",resolution:"Resolução",representation:"Representação",browse:"Procurar Gráfico",format:"Formatar",usage:"Uso",aggregateInfo:"Agregação",additional:"Adicional"},idAbs:"Descrição (Resumo)",idPurp:"Resumo (Proposta)",suppInfo:"Informações Suplementares",idCredit:"Créditos",envirDesc:"Ambiente de Processamento",dataLang:"Idioma do Recurso",dataExt:"Extensão do Recurso",idPoC:"Ponto de Contato",resMaint:"Manutenção do Recurso",resConst:"Restrições do Recurso",dsFormat:"Formato do Recurso",dataScale:{caption:"Escala de Dados",equScale:"Resolução da Escala",scaleDist:"Resolução da Distância",scaleDist_value:"Distância"},idSpecUse:{caption:"Uso do Recurso",specUsage:"Uso Específico",usageDate:"Data de Uso",usrDetLim:"Limitações",usrCntInfo:"Contato de Uso"}},service:{caption:"Serviço",svType:"Tipo de Serviço",svType_Name:"Nome",svAccProps:"Propriedades de Acesso",svCouplRes:{caption:"Recurso Associado",svOpName:"Nome da Operação",svResCitId:"Identificador de Recurso"},svCoupleType:"Tipo de Associação"},scaleRange:{caption:"Faixa de Escala",maxScale:"Escala Máxima",minScale:"Escala Mínima"},spatRepInfo:{caption:"Representação Espacial",section:{dimension:"Dimensão",parameters:"Parâmetros"},numDims:"Número de Dimensões",tranParaAv:"Disponibilidade do Parâmetro de Transformação?",axisDimension:{caption:"Dimensão",dimSize:"Tamanho",dimResol:{caption:"Resolução",_value:"Valor de Resolução",uom:"Unidades de Resolução"}},VectSpatRep:{caption:"Vetor",geometObjs:"Objetos Geométricos",geoObjCnt:"Contagem de Objeto"},GridSpatRep:{caption:"Grade"},Georect:{caption:"Georretificado",section:{centerPoint:"Ponto Central",cornerPts:"Pontos de Extremidade"},chkPtAv:"Disponibilidade do Ponto de Verificação?",chkPtDesc:"Descrição do Ponto de Verificação",ptInPixel:"Ponto em Pixel",transDimDesc:"Descrição de Dimensão da Transformação",transDimMap:"Mapeamento de Dimensão da Transformação",cornerPts:{caption:"Vértices",pos:"Posição",gmlDesc:"Descrição",gmlDescRef:"Referência",gmlIdent:"Identificador",codeSpace:"Código de Espaço do Identificador"}},Georef:{caption:"Georreferenciável",ctrlPtAv:"Disponibilidade do Ponto de Controle?",orieParaAv:"Disponibilidade do Parâmetro de Orientação?",orieParaDs:"Descrição do Parâmetro de Orientação",georefPars:"Parâmetros Georreferenciados",paraCit:"Citação do Parâmetro"},Indref:{caption:"Indireto"}},booleanOptions:{_false:"Não",_true:"Sim"},codelist:{CountryCode:"País",LanguageCode:"Idioma",MonetaryUnits:"Unidades Monetárias",MonetaryUnits_empty:"Sem moeda universal",PresentationForm:"Formulário de Apresentação de Dados Geoespaciais FGDC",CI_PresentationFormCode:"Formulário de Apresentação",CI_RoleCode:"Função",CI_OnLineFunctionCode:"Função",IMS_ContentType:"Tipo de Conteúdo",DQ_ElementDimension:"Dimensão",DQ_ElementType:"Tipo de Relatório",DQ_EvaluationMethodTypeCode:"Tipo de Avaliação",DS_AssociationTypeCode:"Tipo de Associação",DS_InitiativeTypeCode:"Tipo de Iniciativa",LI_SourceType:"Tipo de Fonte",MD_CellGeometryCode:"Geometria da Célula",MD_CharacterSetCode:"Conjunto de Caracteres",MD_ClassificationCode:"Classificação",MD_CoverageContentTypeCode:"Tipo de Conteúdo",MD_DimensionNameTypeCode:"Tipo de Dimensão",MD_GeometricObjectTypeCode:"Tipo de Objeto Geométrico",MD_ImagingConditionCode:"Condição da Imagem",MD_MaintenanceFrequenceCode:"Frequência de Atualização",MD_MediumFormatCode:"Código do Formato",MD_MediumNameCode:"Nome da Média",MD_PixelOrientationCode:"Orientação do Pixel",MD_ProgressCode:"Status",MD_RestrictionCode:"Código de Restrição",MD_ScopeCode:"Escopo",MD_SpatialRepresentationTypeCode:"Tipo de Representação Espacial",MD_TopicCategoryCode:"Categorias do Tópico",MD_TopologyLevelCode:"Nível de Topologia",RS_Dimension:"Dimensão",SV_CouplingType:"Tipo de Associação",UCUM:"Unidades",UCUM_Length:"Unidades de Distância"}});