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

define({documentTypes:{data:{caption:"ISO 19115 (データ)",description:""},service:{caption:"ISO 19119 (サービス)",description:""},gmi:{caption:"ISO 19115-2 (画像およびグリッド データ)",description:""}},general:{reference:"参照"},sections:{metadata:"メタデータ",identification:"辨識",distribution:"分布",quality:"品質",acquisition:"取得"},metadataSection:{identifier:"識別子",contact:"問い合わせ先",date:"日付",standard:"標準",reference:"参照"},identificationSection:{citation:"引用",description:"説明",contact:"問い合わせ先",thumbnail:"Thumbnail",keywords:"キーワード（Keywords）",constraints:"制限範囲",resource:"リソース",resourceTab:{representation:"リプレゼンテーション",language:"言語",classification:"分類",extent:"範囲"},serviceResourceTab:{serviceType:"サービス タイプ",extent:"範囲",couplingType:"結合タイプ",operation:"操作",operatesOn:"操作対象"}},distributionSection:{},qualitySection:{scope:"スコープ",conformance:"適合性",lineage:"系統"},acquisitionSection:{requirement:"要件",objective:"Objective",instrument:"計器",plan:"プラン",operation:"操作",platform:"プラットフォーム",environment:"環境"},AbstractMD_Identification:{sAbstract:"概要（Abstract）",purpose:"目的",credit:"著作権",pointOfContact:"問い合わせ先",resourceMaintenance:"管理",graphicOverview:"閲覧図",descriptiveKeywords:"キーワード コレクション",resourceConstraints:"制限範囲"},CI_Address:{deliveryPoint:"番地",city:"市区町村（City）",administrativeArea:"都道府県名",postalCode:"郵便番号",country:"国",electronicMailAddress:"電子メール アドレス"},CI_Citation:{title:"タイトル",alternateTitle:"代替典拠",identifier:"URI",resource:{title:"情報資源のタイトル",date:"情報資源の更新日"},specification:{title:"仕様のタイトル",date:"仕様の更新日"}},CI_Contact:{phone:"電話（Phone）",address:"住所",onlineResource:"オンライン情報資源",hoursOfService:"案内時間",contactInstructions:"問い合わせのための手引き"},CI_Date:{date:"日付",dateType:"日付タイプ"},CI_DateTypeCode:{caption:"日付タイプ",creation:"Creation Date",publication:"公開日",revision:"改訂日"},CI_OnLineFunctionCode:{caption:"関数",download:"ダウンロード",information:"情報",offlineAccess:"オフライン アクセス",order:"注文",search:"検索"},CI_OnlineResource:{caption:"オンライン情報資源",linkage:"URL",protocol:"プロトコル",applicationProfile:"アプリケーション プロファイル",name:"名前",description:"説明",sFunction:"関数"},CI_ResponsibleParty:{caption:"問い合わせ先",individualName:"個人名",organisationName:"組織名",positionName:"役職名",contactInfo:"問い合わせ先情報",role:"ロール（Role）"},CI_RoleCode:{caption:"ロール（Role）",resourceProvider:"リソース提供者",custodian:"管理者",owner:"所有者",user:"ユーザー",distributor:"配布者",originator:"創作者",pointOfContact:"問い合わせ先",principalInvestigator:"主要な調査担当者",processor:"プロセッサ",publisher:"公開者",author:"作成者"},CI_Telephone:{voice:"電話番号",facsimile:"ファクシミリ番号"},DCPList:{caption:"DCP",XML:"XML",CORBA:"CORBA",JAVA:"JAVA",COM:"COM",SQL:"SQL",WebServices:"WebServices"},DQ_ConformanceResult:{caption:"適合性の結果",explanation:"説明",degree:{caption:"度",validationPerformed:"妥当性確認が実行されました",conformant:"適合",nonConformant:"非適合"}},DQ_DataQuality:{report:"レポート"},DQ_Scope:{level:"適用範囲 (品質情報の適用先)",levelDescription:"レベルの説明"},EX_Extent:{caption:"範囲",description:"説明",geographicElement:"空間範囲",temporalElement:"時間範囲",verticalElement:"垂直範囲"},EX_GeographicBoundingBox:{westBoundLongitude:"西境界 (経度)",eastBoundLongitude:"東境界 (経度)",southBoundLatitude:"南境界 (緯度)",northBoundLatitude:"北境界 (緯度)"},EX_GeographicDescription:{caption:"地理説明"},EX_TemporalExtent:{TimePeriod:{beginPosition:"開始日",endPosition:"終了日"}},EX_VerticalExtent:{minimumValue:"最小値",maximumValue:"最大値",verticalCRS:"鉛直 CRS"},Length:{caption:"長さ",uom:"計測単位",km:"キロメートル",m:"メートル",mi:"マイル",ft:"フィート"},LI_Lineage:{statement:"系譜の説明"},MD_BrowseGraphic:{fileName:"閲覧図の URL",fileDescription:"閲覧図のキャプション",fileType:"閲覧図のタイプ"},MD_ClassificationCode:{unclassified:"未分類",restricted:"制限公開",confidential:"部外秘",secret:"機密",topSecret:"最高機密"},MD_Constraints:{caption:"使用制約",useLimitation:"使用制限"},MD_DataIdentification:{spatialRepresentationType:"空間表現型",spatialResolution:"空間解像度",language:"リソース言語",supplementalInformation:"補足"},MD_DigitalTransferOptions:{onLine:"オンライン"},MD_Distribution:{distributionFormat:"配布書式",transferOptions:"交換任意選択"},MD_Format:{name:"形式名称",version:"書式バージョン"},MD_Identifier:{caption:"URI",identifierCaption:"識別子",code:"コード"},MD_Keywords:{delimitedCaption:"キーワード（Keywords）",thesaurusName:"関連シソーラス"},MD_KeywordTypeCode:{caption:"キーワード タイプ",discipline:"学問分野",place:"場所",stratum:"層",temporal:"テンポラル",theme:"テーマ"},MD_LegalConstraints:{caption:"法的制限",accessConstraints:"アクセス制限",useConstraints:"利用制限",otherConstraints:"その他の制限"},MD_MaintenanceFrequencyCode:{caption:"頻度",continual:"頻繁",daily:"毎日",weekly:"毎週",fortnightly:"隔週",monthly:"毎月",quarterly:"四半期",biannually:"年 2 回",annually:"毎年",asNeeded:"必要に応じて",irregular:"不規則",notPlanned:"無計画",unknown:"不明"},MD_Metadata:{caption:"メタデータ",fileIdentifier:"ファイル識別子",language:"メタデータ言語",hierarchyLevel:"階層レベル",hierarchyLevelName:"階層レベル名",contact:"メタデータの問い合わせ先",dateStamp:"メタデータの更新日",metadataStandardName:"メタデータの標準名",metadataStandardVersion:"メタデータ標準バージョン",referenceSystemInfo:"参照系",identificationInfo:"辨識",distributionInfo:"分布",dataQualityInfo:"品質"},MD_ProgressCode:{caption:"進行状況コード",completed:"完了",historicalArchive:"古文書",obsolete:"廃棄",onGoing:"進行中",planned:"計画",required:"必須",underDevelopment:"作業中"},MD_RepresentativeFraction:{denominator:"分母"},MD_Resolution:{equivalentScale:"等価縮尺",distance:"距離"},MD_RestrictionCode:{copyright:"著作権",patent:"特許",patentPending:"特許出願中",trademark:"商標",license:"ライセンス",intellectualPropertyRights:"知的所有権",restricted:"制限公開",otherRestrictions:"その他の制限"},MD_ScopeCode:{attribute:"属性",attributeType:"属性型",collectionHardware:"収集用機器",collectionSession:"収集作業",dataset:"データセット",series:"系列",nonGeographicDataset:"非地理データ集合",dimensionGroup:"次元グループ",feature:"フィーチャ",featureType:"フィーチャ タイプ",propertyType:"プロパティ タイプ",fieldSession:"現場作業",software:"ソフトウェア",service:"サービス",model:"モデル",tile:"タイル"},MD_ScopeDescription:{attributes:"属性",features:"フィーチャ",featureInstances:"フィーチャ インスタンス",attributeInstances:"属性インスタンス",dataset:"データセット",other:"その他"},MD_SecurityConstraints:{caption:"機密制限",classification:"分類",userNote:"ユーザーの注意事項",classificationSystem:"分類システム",handlingDescription:"取り扱い説明"},MD_SpatialRepresentationTypeCode:{caption:"空間表現型",vector:"ベクター",grid:"グリッド",textTable:"テキスト表形式",tin:"TIN",stereoModel:"ステレオ モデル",video:"ビデオ"},MD_TopicCategoryCode:{caption:"トピック カテゴリ",boundaries:"境界",farming:"農業",climatologyMeteorologyAtmosphere:"気象",biota:"生物相",economy:"経済",planningCadastre:"Cadastral",society:"社会",elevation:"高さ",environment:"環境",structure:"構造物",geoscientificInformation:"地球化学の情報",health:"健康",imageryBaseMapsEarthCover:"画像およびベースマップ",inlandWaters:"陸水",location:"位置",intelligenceMilitary:"軍事",oceans:"大洋",transportation:"運輸",utilitiesCommunication:"公益サービス・通信"},MI_ContextCode:{caption:"状況",acquisition:"取得",pass:"合格",wayPoint:"ウェイポイント"},MI_EnvironmentalRecord:{caption:"環境条件",averageAirTemperature:"平均気温",maxRelativeHumidity:"最大相対湿度",maxAltitude:"最大高度",meterologicalConditions:"気象条件"},MI_Event:{identifier:"イベント識別子",time:"時間",expectedObjectiveReference:"推定される Objective (Objective 識別子)",relatedSensorReference:"関連センサー (計器識別子)",relatedPassReference:"関連する合格 (プラットフォーム合格識別子)"},MI_GeometryTypeCode:{point:"ポイント",linear:"リニア",areal:"エリア",strip:"ストリップ"},MI_Instrument:{citation:"計器の引用",identifier:"計器識別子",sType:"計器タイプ",description:"計器の説明",mountedOn:"設置先",mountedOnPlatformReference:"設置先 (プラットフォーム識別子)"},MI_Metadata:{acquisitionInformation:"取得"},MI_Objective:{caption:"Objective",identifier:"Objective 識別子",priority:"目標点の優先度",sFunction:"Objective の機能",extent:"範囲",pass:"プラットフォーム合格",sensingInstrumentReference:"センシング計器 (計器識別子)",objectiveOccurrence:"イベント",sections:{identification:"辨識",extent:"範囲",pass:"合格",sensingInstrument:"センシング計器",objectiveOccurrence:"イベント"}},MI_ObjectiveTypeCode:{caption:"タイプ (Objective の収集技術)",instantaneousCollection:"瞬時収集",persistentView:"持続的表示",survey:"調査"},MI_Operation:{caption:"操作",description:"操作の説明",citation:"操作の引用",identifier:"操作識別子",status:"操作ステータス",objectiveReference:"関連 Objective (Objective 識別子)",planReference:"関連計画 (計画識別子)",significantEventReference:"関連イベント (イベント識別子)",platformReference:"関連プラットフォーム (プラットフォーム識別子)",sections:{identification:"辨識",related:"関連"}},MI_OperationTypeCode:{caption:"操作のタイプ",real:"Real",simulated:"シミュレート済み",synthesized:"合成済み"},MI_Plan:{sType:"データ収集用のサンプリング ジオメトリ",status:"計画のステータス",citation:"コレクションを要求している権限の引用",satisfiedRequirementReference:"満たされた要件 (要件識別子)",operationReference:"関連操作 (操作識別子)"},MI_Platform:{citation:"プラットフォームの引用",identifier:"プラットフォーム識別子",description:"計器をサポートしているプラットフォームの説明",sponsor:"プラットフォームのスポンサー組織",instrument:"プラットフォーム上に設置される計器",instrumentReference:"計器識別子",sections:{identification:"辨識",sponsor:"スポンサー",instruments:"計器"}},MI_PlatformPass:{identifier:"プラットフォーム合格識別子",extent:"プラットフォーム合格範囲",relatedEventReference:"関連イベント (イベント識別子)"},MI_PriorityCode:{critical:"重大",highImportance:"重要度: 高",mediumImportance:"重要度: 中",lowImportance:"重要度: 低"},MI_RequestedDate:{requestedDateOfCollection:"コレクションの要求日",latestAcceptableDate:"最終許容期限"},MI_Requirement:{caption:"要件",citation:"要件ガイダンス マテリアルの引用",identifier:"要件識別子",requestor:"要件の要求側",recipient:"要件結果の受信者",priority:"要件の優先度",requestedDate:"リクエスト日",expiryDate:"有効期限",satisifiedPlanReference:"満たされた計画 (計画識別子)",sections:{identification:"辨識",requestor:"要求側",recipient:"受信者",priorityAndDates:"優先度と日付",satisifiedPlan:"満たされた計画"}},MI_SequenceCode:{caption:"シーケンス",start:"開始",end:"終了",instantaneous:"瞬時"},MI_TriggerCode:{caption:"トリガー",automatic:"自動",manual:"手動",preProgrammed:"プログラム済み"},ObjectReference:{uuidref:"UUID 参照",xlinkref:"URL 参照"},RS_Identifier:{caption:"ID 加算コード空間",code:"コード",codeSpace:"コード空間"},SV_CouplingType:{loose:"疎",mixed:"混合",tight:"密"},SV_OperationMetadata:{operationName:"操作名",DCP:"DCP",connectPoint:"ポイントの接続"},SV_ServiceIdentification:{serviceType:"サービスの種類（ServiceType）",couplingType:"結合タイプ",containsOperations:"操作のメタデータ",operatesOn:"操作対象"},TM_Primitive:{indeterminatePosition:"不確定位置",indeterminates:{before:"より前",after:"より後",now:"現在",unknown:"不明"}},gemet:{concept:{gemetConceptKeyword:"GEMET のコンセプト キーワード",tool:"検索...",dialogTitle:"GEMET - コンセプト キーワード",searchLabel:"検索:",searchTip:"GEMET の検索"},theme:{tool:"検索...",dialogTitle:"GEMET - INSPIRE データのテーマ"},ioerror:"GEMET サービス: {url} との通信でエラーが発生しました。",searching:"GEMET を検索しています...",noMatch:"一致する結果が見つかりませんでした。",languages:{bg:"ブルガリア語",cs:"チェコ語",da:"デンマーク語",nl:"オランダ語",en:"英語",et:"エストニア語",fi:"フィンランド語",fr:"フランス語",de:"ドイツ語",el:"ギリシャ語",hu:"ハンガリー語",ga:"ゲール語 (アイルランド語)",it:"イタリア語",lv:"ラトビア語",lt:"リトアニア語",mt:"マルタ語",pl:"ポーランド語",pt:"ポルトガル語",ro:"ルーマニア語",sk:"スロバキア語",sl:"スロベニア語",es:"スペイン語",sv:"スウェーデン語"}}});