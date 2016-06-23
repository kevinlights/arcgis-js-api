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

define({documentTypes:{fgdc:{caption:"FGDC (Federal Geographic Data Committee)",description:""}},alternates:{none:"なし",notComplete:"未入力",other:"その他",present:"あり",unknown:"不明",unpublishedMaterial:"未公開マテリアル"},hints:{integerGreaterThanOne:"(1 より大きい整数を入力)",integer0To100:"(0 ～ 100 の整数を入力)"},citeinfo:{caption:"引用情報",origin:"創作者",pubdate:"公開日",pubtime:"刊行時刻",title:"タイトル",edition:"版",geoform:{caption:"地理空間データ プレゼンテーション形式",atlas:"地図帳",audio:"オーディオ",diagram:"ダイアグラム",sDocument:"ドキュメント",globe:"グローブ",map:"マップ",model:"モデル",multiMediaPresentation:"マルチメディア プレゼンテーション",profile:"断面",rasterDigitalData:"ラスター デジタル データ",remoteSensingImage:"リモート センシング画像",section:"セクション",spreadsheet:"スプレッドシート",tabularDigitalData:"表形式のデジタル データ",vectorDigitalData:"ベクター デジタル データ",video:"ビデオ",view:"表示"},serinfo:{caption:"シリーズ情報",sername:"シリーズ名",issue:"巻/号の識別情報"},pubinfo:{caption:"刊行情報",pubplace:"公開場所",publish:"公開者"},othercit:"その他の引用の詳細",onlink:"オンライン リンク (URL)"},cntinfo:{caption:"連絡先情報:",section:{primary:"主",phoneAndEmail:"電話番号と電子メール",hoursAndInstructions:"時間と指示"},cntorgp:{caption:"組織",cntorg:"組織",cntper:"人"},cntperp:{caption:"人",cntper:"人",cntorg:"組織"},cntpos:"位置",cntaddr:{caption:"住所",addrtype:{caption:"アドレス タイプ",mailing:"郵送",physical:"物理",mailingAndPhysical:"郵送および物理"},address:"住所",city:"市区町村（City）",state:"州",postal:"郵便番号",country:"国"},cntvoice:"電話番号",cnttdd:"TDD/TTY 電話 (聴覚障害者向け)",cntfax:"ファクシミリ番号",cntemail:"電子メール アドレス",hours:"時間",cntinst:"手順"},dataqual:{caption:"データ品質情報",section:{attributeAccuracy:"属性正確度",logicalConsistency:"論理的一貫性",completeness:"完全性",positionalAccuracy:"位置正確度",lineage:"系統",cloudCover:"クラウド カバー"},attracc:{caption:"属性正確度",attraccr:"属性正確度の報告",qattracc:{caption:"定量属性正確度評価",attraccv:"属性正確度の値",attracce:"属性正確度の説明"}},logic:"論理一貫性報告",complete:"完全性報告",posacc:"位置正確度",horizpa:{caption:"水平位置正確度",horizpar:"水平位置正確度の報告",qhorizpa:{caption:"定量水平位置正確度評価",horizpav:"水平位置正確度の値",horizpae:"水平位置正確度の説明"}},vertacc:{caption:"鉛直位置正確度",vertaccr:"鉛直位置正確度の報告",qvertpa:{caption:"定量鉛直位置正確度評価",vertaccv:"鉛直位置正確度の値",vertacce:"鉛直位置正確度の説明"}},lineage:{caption:"系統"},srcinfo:{caption:"ソース情報",srccite:"ソース引用",srcscale:"ソース縮尺分母",typesrc:{caption:"ソース媒体のタイプ",paper:"用紙",stableBaseMaterial:"Stable ベース マテリアル",microfiche:"マイクロフィッシュ",microfilm:"マイクロフィルム",audiocassette:"オーディオ カセット",chart:"チャート",filmstrip:"フィルム ストリップ",transparency:"透過表示",videocassette:"ビデオ カセット",videodisc:"ビデオ ディスク",videotape:"ビデオ テープ",physicalModel:"物理モデル",computerProgram:"コンピューター プログラム",disc:"ディスク",cartridgeTape:"カートリッジ テープ",magneticTape:"磁気テープ",online:"オンライン",cdrom:"CD-ROM",electronicBulletinBoard:"電子掲示板",electronicMailSystem:"電子メール システム"},srctime:"ソースのコンテンツの有効期間",srccurr:"ソース最新さ基準",srccitea:"ソース引用略語",srccontr:"ソース寄与"},procstep:{caption:"処理手順",procdesc:"プロセスの説明",srcused:"ソース使用引用略語",procdate:"処理日付",proctime:"プロセス時刻",srcprod:"ソース作成引用略語",proccont:"処理問い合わせ先"},cloud:"クラウド カバー"},distinfo:{caption:"配布情報",section:{distributor:"配布者",description:"説明",orderProcess:"発注手順",prerequisites:"前提条件",availability:"可用性"},distrib:"配布者",resdesc:{caption:"情報資源の説明",liveData:"オンライン データ アンド マップ サービス",downloadableData:"ダウンロード可能なデータ",offlineData:"オフライン データ",staticMapImages:"静的マップ イメージ",sDocument:"その他のドキュメント",application:"アプリケーション",geographicService:"地理サービス",clearingHouse:"クリアリングハウス",mapFiles:"マップ ファイル",geographicActivies:"地理アクティビティ"},distliab:"配布責任の説明",custom:"カスタム発注手順",techpreq:"技術的前提条件",availabl:"可用性"},eainfo:{caption:"エンティティおよび属性情報",overview:"概要の説明",eaover:"エンティティと属性の概要",eadetcit:"エンティティと属性の引用の詳細"},idinfo:{caption:"識別情報",section:{timeAndStatus:"時間とステータス",constraints:"制限範囲",contact:"問い合わせ先",additional:"追加"},citeinfo:"引用",descript:{caption:"説明",sAbstract:"概要（Abstract）",purpose:"目的",supplinf:"補足情報"},timeperd:{caption:"コンテンツの有効期間",current:{caption:"最新さ基準",groundCondition:"地上状況",publicationDate:"公開日"}},status:{caption:"ステータス",progress:{caption:"進行状況",complete:"完成",inWork:"作業中",planned:"計画"},update:{caption:"メンテナンスと更新の頻度",continual:"頻繁",daily:"毎日",weekly:"毎週",monthly:"毎月",annually:"毎年",unknown:"不明",asNeeded:"必要に応じて",irregular:"不規則",nonePlanned:"未計画"}},spdom:{caption:"範囲",bounding:{caption:"境界座標",westbc:"西境界 (経度)",eastbc:"東境界 (経度)",northbc:"北境界 (緯度)",southbc:"南境界 (緯度)"}},keywords:{caption:"キーワード（Keywords）",theme:"テーマ",place:"場所",stratum:"層",temporal:"テンポラル",thesaursus:"関連シソーラス",delimited:"キーワード（Keywords）",themektIsoTopicCategory:"ISO トピック...",themektIsoTopicDialog:"ISO トピック",placektGnis:"地名情報システム"},accconst:"アクセス制限",useconst:"利用制限",ptcontac:"情報資源の問い合わせ先",browse:{caption:"閲覧図",browsen:"閲覧図の URL",browsed:"参照図ファイルの説明",browset:"参照図ファイルのタイプ"},datacred:"データ集合著作権",secinfo:{caption:"機密情報",secsys:"機密情報分類システム",secclass:{caption:"機密情報分類",topSecret:"最高機密",secret:"機密",confidential:"部外秘",restricted:"制限公開",unclassified:"未分類",sensitive:"センシティブ"},sechandl:"機密情報取り扱い説明"},sNative:"ネイティブ データ集合環境",crossref:"対照表"},metadata:{idinfo:"辨識",dataqual:"品質",spdoinfo:"空間データ編成",spref:"空間参照",eainfo:"エンティティおよび属性",distinfo:"分布",metainfo:"メタデータ"},metainfo:{caption:"メタデータ情報",section:{dates:"メタデータの更新日",contact:"メタデータの問い合わせ先",standard:"メタデータ標準",additional:"追加"},metd:"メタデータの更新日",metrd:"メタデータ レビュー実施日",metfrd:"メタデータ レビュー予定日",metstdn:"メタデータの標準名",metstdv:"メタデータ標準バージョン",metac:"メタデータへのアクセス制限",metuc:"メタデータ利用制限",metsi:{caption:"メタデータ機密情報",metscs:"メタデータ機密情報分類システム",metsc:"メタデータ機密情報分類",metshd:"メタデータ機密情報取り扱い説明"}},spref:{caption:"空間参照情報",horizsys:{caption:"水平座標系",geograph:{caption:"地理学",latres:"緯度解像度",longres:"経度解像度",geogunit:{caption:"地理座標単位",decimalDegrees:"度（10 進）",decimalMinutes:"分 (10 進)",decimalSeconds:"秒 (10 進)",degreesAndDecimalMinutes:"度 分 (10 進)",degreesMinutesAndDecimalSeconds:"度 分 秒 (10 進)",radians:"ラジアン",grads:"グラード"}},planar:{caption:"平面"},local:{caption:"ローカル",localdes:"局所の説明",localgeo:"局所ジオリファレンス情報"},geodetic:{caption:"測地モデル",horizdn:{caption:"水平原子名",nad83:"North American Datum (北米測地基準系) 1983",nad27:"North American Datum (北米測地基準系) 1927"},ellips:{caption:"楕円体名称",grs80:"測地基準系 80",clarke1866:"Clarke 1866"},semiaxis:"軌道長半径",denflat:"逆扁平率"}},vertdef:{caption:"鉛直座標系",altsys:{caption:"高度座標系",altdatum:{caption:"高度原子名",navd88:"North American Vertical Datum (北米鉛直測地基準系) 1988",ngvd29:"National Geodetic Vertical Datum (米国鉛直測地基準系) 1929"},altres:"高度解像度",altunits:{caption:"高度距離単位",meters:"メートル",feet:"フィート"},altenc:{caption:"高度エンコード手法",explicit:"水平座標に含まれる明示的な標高の座標",implicit:"明示されない座標",attribute:"属性値"}},depthsys:{caption:"深度座標系",depthdn:{caption:"深度原子名",option1:"局所サーフェス",option2:"チャート測地基準 (測深値低減のための測地基準)",option3:"最低天文潮",option4:"最高天文潮",option5:"平均低潮面",option6:"平均高潮面",option7:"平均海水面",option8:"土地測量測地基準",option9:"大潮平均低潮面",option10:"大潮平均高潮面",option11:"小潮平均低潮面",option12:"小潮平均高潮面",option13:"平均低低潮面",option14:"大潮平均低低潮面",option15:"平均高高潮面",option16:"平均高低潮面",option17:"平均低高潮面",option18:"大潮",option19:"回帰低低潮面",option20:"小潮",option21:"高潮面",option22:"高高潮面",option23:"低潮面",option24:"低潮測地基準",option25:"最低低潮面",option26:"低低潮面",option27:"最低標準低潮面",option28:"平均潮位",option29:"インド洋基準面",option30:"朔望平均高潮間隔",option31:"朔望平均低潮間隔",option32:"コロンビア川測地基準",option33:"湾岸低潮測地基準",option34:"赤道大潮低潮面",option35:"略最低天文潮",option36:"補正なし"},depthres:"深度解像度",depthdu:{caption:"深度距離単位",meters:"メートル",feet:"フィート"},depthem:{caption:"深度エンコード手法",explicit:"水平座標に含まれる明示的な深度の座標",implicit:"明示されない座標",attribute:"属性値"}}}},timeinfo:{caption:"時間情報",sngdate:"単一日",mdattim:"複数日",rngdates:"日付範囲",caldate:"日付",time:"時間",begdate:"開始日付",begtime:"開始時刻",enddate:"終了日付",endtime:"終了時刻"}});