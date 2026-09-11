import type { CountrySlug, LocalizedString } from './types.ts';

/** Emergency line kinds. The labels are translated once in the UI dictionary
 *  rather than repeated per country; the numbers themselves are not text. */
export type EmergencyKind = 'all' | 'police' | 'fire' | 'ambulance';

export interface CountrySafety {
  country: CountrySlug;
  /** Verified against official/government sources, not written from memory. */
  emergency: { kind: EmergencyKind; number: string }[];
  /** Whether a licensed guide is expected, described as practice rather than
   *  as legal advice. Permit and season lines are derived from the area data
   *  instead of restated here, so they can never drift from the permit boxes. */
  guides: LocalizedString;
}

export const countrySafety: CountrySafety[] = [
  {
    country: 'malaysia',
    emergency: [{ kind: 'all', number: '999' }],
    guides: {
      en: 'Several parks here will not issue a permit without a licensed guide, among them Mount Kinabalu, Taman Negara and Gunung Mulu. Ask for the guide\'s registration number and check it with the park office, not only with the organiser.',
      ms: 'Beberapa taman di sini tidak akan mengeluarkan permit tanpa pemandu berlesen, antaranya Gunung Kinabalu, Taman Negara dan Gunung Mulu. Minta nombor pendaftaran pemandu dan semak dengan pejabat taman, bukan hanya dengan penganjur.',
      'zh-cn': '此地多个公园若无持牌向导便不会签发许可证，包括京那巴鲁山、国家公园及姆鲁山。请索取向导的注册编号，并向公园办事处核实，而非仅向主办方查询。',
      'zh-hk': '呢度好幾個公園如果冇持牌嚮導就唔會簽發許可證，包括京那峇魯山、國家公園同姆魯山。請攞嚮導嘅註冊編號，並且向公園辦事處核實，唔好淨係問主辦方。',
      ta: 'கினாபாலு மலை, தாமான் நெகாரா மற்றும் குனுங் முலு உட்பட இங்குள்ள பல பூங்காக்கள் உரிமம் பெற்ற வழிகாட்டி இல்லாமல் அனுமதிச்சீட்டு வழங்காது. வழிகாட்டியின் பதிவு எண்ணைக் கேட்டு, ஏற்பாட்டாளரிடம் மட்டுமல்லாமல் பூங்கா அலுவலகத்திடமும் சரிபார்க்கவும்.',
      ar: 'عدة حدائق هنا لا تصدر تصريحًا دون مرشد مرخّص، منها جبل كينابالو وتامان نيغارا وجبل مولو. اطلب رقم تسجيل المرشد وتحقق منه لدى مكتب الحديقة، لا لدى المنظّم وحده.',
    },
  },
  {
    country: 'singapore',
    emergency: [{ kind: 'police', number: '999' }, { kind: 'ambulance', number: '995' }],
    guides: {
      en: 'No guide is needed. Every route listed here is a public park trail managed by NParks, open without booking, so anyone charging you for access is not charging you for a permit.',
      ms: 'Tiada pemandu diperlukan. Setiap laluan yang disenaraikan di sini ialah laluan taman awam yang diurus oleh NParks, terbuka tanpa tempahan, jadi sesiapa yang mengenakan bayaran kepada anda untuk masuk bukan mengenakan bayaran untuk permit.',
      'zh-cn': '无需向导。此处所列每条路线均为国家公园局管理的公共公园步道，无须预约即可进入，因此任何向你收取进入费用者，收的都不是许可证费用。',
      'zh-hk': '唔使嚮導。呢度所列每條路線都係國家公園局管理嘅公共公園步道，唔使預約就入得，所以任何向你收取入場費用嘅人，收嘅都唔係許可證費用。',
      ta: 'வழிகாட்டி தேவையில்லை. இங்கு பட்டியலிடப்பட்ட ஒவ்வொரு பாதையும் என்பார்க்ஸ் நிர்வகிக்கும் பொது பூங்கா பாதை, முன்பதிவு இல்லாமல் திறந்திருக்கும், எனவே அணுகலுக்காக உங்களிடம் கட்டணம் வசூலிப்பவர் அனுமதிச்சீட்டுக்காக வசூலிக்கவில்லை.',
      ar: 'لا حاجة إلى مرشد. كل مسار مُدرج هنا هو درب حديقة عامة تديره هيئة الحدائق الوطنية، ومفتوح دون حجز، لذا فإن من يتقاضى منك رسمًا مقابل الدخول لا يتقاضاه مقابل تصريح.',
    },
  },
  {
    country: 'thailand',
    emergency: [{ kind: 'police', number: '191' }, { kind: 'ambulance', number: '1669' }],
    guides: {
      en: 'Most day routes need no guide, but the DNP requires a park-arranged guide on some overnight and restricted routes. Park entry fees are collected at the gate and differ for Thai and non-Thai visitors.',
      ms: 'Kebanyakan laluan sehari tidak memerlukan pemandu, tetapi DNP mewajibkan pemandu yang diatur taman pada sesetengah laluan bermalam dan terhad. Yuran masuk taman dikutip di pintu masuk dan berbeza bagi pelawat Thai dan bukan Thai.',
      'zh-cn': '多数一日路线无需向导，但国家公园厅规定部分过夜及管制路线须由公园安排向导。公园门票于入口收取，泰籍与非泰籍访客收费不同。',
      'zh-hk': '大部分一日路線唔使嚮導，但國家公園廳規定部分過夜同管制路線要由公園安排嚮導。公園門票喺入口收取，泰籍同非泰籍訪客收費唔同。',
      ta: 'பெரும்பாலான ஒரு நாள் பாதைகளுக்கு வழிகாட்டி தேவையில்லை, ஆனால் சில இரவுத் தங்கும் மற்றும் கட்டுப்படுத்தப்பட்ட பாதைகளில் பூங்காவால் ஏற்பாடு செய்யப்பட்ட வழிகாட்டியை டிஎன்பி கோருகிறது. பூங்கா நுழைவுக் கட்டணம் வாயிலில் வசூலிக்கப்படுகிறது, தாய் மற்றும் தாய் அல்லாத பார்வையாளர்களுக்கு வேறுபடும்.',
      ar: 'معظم مسارات اليوم الواحد لا تحتاج مرشدًا، لكن هيئة الحدائق الوطنية تشترط مرشدًا تُرتّبه الحديقة في بعض المسارات الليلية والمقيّدة. تُحصَّل رسوم الدخول عند البوابة وتختلف بين الزوار التايلانديين وغيرهم.',
    },
  },
  {
    country: 'indonesia',
    emergency: [{ kind: 'all', number: '112' }],
    guides: {
      en: 'A guide is effectively compulsory on the volcano routes here. Rinjani requires a registered operator, and Batur is controlled by a single guide association, so a price quoted without a named operator is a warning sign.',
      ms: 'Pemandu pada dasarnya wajib di laluan gunung berapi di sini. Rinjani memerlukan pengendali berdaftar, dan Batur dikawal oleh satu persatuan pemandu, jadi harga yang disebut tanpa nama pengendali ialah tanda amaran.',
      'zh-cn': '此地火山路线实际上必须聘用向导。林贾尼火山须由注册营运商带领，巴图尔火山则由单一向导协会管控，因此若报价未指明营运商名称，即属警讯。',
      'zh-hk': '呢度嘅火山路線實際上一定要請嚮導。林賈尼火山要由註冊營運商帶隊，巴圖爾火山就由單一嚮導協會管控，所以如果報價冇講明營運商名，就係警號。',
      ta: 'இங்குள்ள எரிமலைப் பாதைகளில் வழிகாட்டி நடைமுறையில் கட்டாயமாகும். ரின்ஜானிக்கு பதிவுசெய்யப்பட்ட இயக்குநர் தேவை, மேலும் பாதுர் ஒரே வழிகாட்டி சங்கத்தால் கட்டுப்படுத்தப்படுகிறது, எனவே இயக்குநர் பெயர் இல்லாமல் கூறப்படும் விலை ஒரு எச்சரிக்கை அறிகுறி.',
      ar: 'المرشد إلزامي عمليًا في مسارات البراكين هنا. يشترط رينجاني مشغّلًا مسجّلًا، ويخضع باتور لجمعية مرشدين واحدة، لذا فإن سعرًا يُعرض دون تسمية المشغّل علامة تحذير.',
    },
  },
  {
    country: 'vietnam',
    emergency: [{ kind: 'police', number: '113' }, { kind: 'fire', number: '114' }, { kind: 'ambulance', number: '115' }],
    guides: {
      en: 'Park management boards register visitors at the gate and arrange guides for the longer routes. Fansipan can also be reached by cable car, so check whether a trip you are paying for is actually a trek.',
      ms: 'Lembaga pengurusan taman mendaftarkan pelawat di pintu masuk dan mengatur pemandu untuk laluan yang lebih panjang. Fansipan juga boleh dicapai dengan kereta kabel, jadi semak sama ada perjalanan yang anda bayar itu benar-benar pendakian.',
      'zh-cn': '公园管理委员会于入口为访客登记，并为较长路线安排向导。番西邦峰亦可搭缆车抵达，因此请确认你所付费的行程是否真为徒步。',
      'zh-hk': '公園管理委員會喺入口幫訪客登記，亦會為較長路線安排嚮導。番西邦峰都可以搭纜車上到，所以請確認你畀錢嘅行程係咪真係徒步。',
      ta: 'பூங்கா நிர்வாக வாரியங்கள் வாயிலில் பார்வையாளர்களைப் பதிவு செய்து, நீண்ட பாதைகளுக்கு வழிகாட்டிகளை ஏற்பாடு செய்கின்றன. ஃபான்சிபானை கேபிள் காரிலும் அடையலாம், எனவே நீங்கள் பணம் செலுத்தும் பயணம் உண்மையில் ஒரு நடைப்பயணமா என்பதைச் சரிபார்க்கவும்.',
      ar: 'تسجّل مجالس إدارة الحدائق الزوار عند البوابة وترتّب مرشدين للمسارات الأطول. يمكن الوصول إلى فانسيبان بالتلفريك أيضًا، فتحقّق مما إذا كانت الرحلة التي تدفع مقابلها رحلة سير فعلًا.',
    },
  },
  {
    country: 'philippines',
    emergency: [{ kind: 'all', number: '911' }],
    guides: {
      en: 'DENR-run protected areas and local tourism offices normally require a registered local guide and a logged registration. That registration is the thing to ask for: a legitimate organiser can name the office that issued it.',
      ms: 'Kawasan perlindungan yang dikendalikan DENR dan pejabat pelancongan tempatan lazimnya memerlukan pemandu tempatan berdaftar dan pendaftaran yang direkodkan. Pendaftaran itulah yang perlu diminta: penganjur yang sah boleh menamakan pejabat yang mengeluarkannya.',
      'zh-cn': '环境与自然资源部管理的保护区及地方旅游办事处通常要求聘用注册本地向导并办理登记备案。该登记正是你应索取的凭证：正当主办方能说出核发登记的办事处名称。',
      'zh-hk': '環境與自然資源部管理嘅保護區同地方旅遊辦事處通常要求請註冊本地嚮導並且辦理登記備案。呢個登記正正係你應該要攞嘅憑證：正當主辦方講得出核發登記嘅辦事處名。',
      ta: 'டிஇஎன்ஆர் நடத்தும் பாதுகாக்கப்பட்ட பகுதிகளும் உள்ளூர் சுற்றுலா அலுவலகங்களும் பொதுவாக பதிவுசெய்யப்பட்ட உள்ளூர் வழிகாட்டியையும் பதிவுசெய்யப்பட்ட விவரத்தையும் கோருகின்றன. அந்தப் பதிவே கேட்க வேண்டியது: நேர்மையான ஏற்பாட்டாளர் அதை வழங்கிய அலுவலகத்தைப் பெயரிட முடியும்.',
      ar: 'تشترط المحميات التي تديرها وزارة البيئة والموارد الطبيعية ومكاتب السياحة المحلية عادةً مرشدًا محليًا مسجّلًا وتسجيلًا موثّقًا. هذا التسجيل هو ما ينبغي طلبه: المنظّم النزيه يستطيع تسمية المكتب الذي أصدره.',
    },
  },
  {
    country: 'brunei',
    emergency: [{ kind: 'police', number: '993' }, { kind: 'ambulance', number: '991' }, { kind: 'fire', number: '995' }],
    guides: {
      en: 'Ulu Temburong can only be reached through an approved operator, since access is by longboat and the park controls numbers. The other reserves listed here are open walk-in recreation areas.',
      ms: 'Ulu Temburong hanya boleh dicapai melalui pengendali yang diluluskan, kerana akses adalah dengan bot panjang dan taman mengawal bilangan pengunjung. Rizab lain yang disenaraikan di sini ialah kawasan rekreasi terbuka tanpa tempahan.',
      'zh-cn': '乌鲁淡布隆仅能透过获批营运商前往，因入园须乘长舟且公园管控人数。此处所列其他保护区则为可直接前往的开放游憩区。',
      'zh-hk': '烏魯淡布隆淨係可以透過獲批營運商前往，因為入園要搭長舟而且公園管控人數。呢度所列其他保護區就係可以直接去嘅開放遊憩區。',
      ta: 'உலு தெம்புரோங்கை அங்கீகரிக்கப்பட்ட இயக்குநர் மூலம் மட்டுமே அடைய முடியும், ஏனெனில் அணுகல் நீள்படகு வழியாகும், பூங்கா எண்ணிக்கையைக் கட்டுப்படுத்துகிறது. இங்கு பட்டியலிடப்பட்ட மற்ற காப்பகங்கள் நேரடியாகச் செல்லக்கூடிய திறந்த பொழுதுபோக்குப் பகுதிகள்.',
      ar: 'لا يمكن الوصول إلى أولو تيمبورونغ إلا عبر مشغّل معتمد، إذ يتم الدخول بالقوارب الطويلة وتضبط الحديقة الأعداد. أما المحميات الأخرى المدرجة هنا فمناطق ترفيهية مفتوحة بلا حجز.',
    },
  },
  {
    country: 'japan',
    emergency: [{ kind: 'police', number: '110' }, { kind: 'fire', number: '119' }],
    guides: {
      en: 'Guides are not required, but Mount Fuji has an official climbing season, a per-person fee and entry gates that close overnight. Outside that season the huts and rescue cover close and the climb becomes a winter mountaineering undertaking.',
      ms: 'Pemandu tidak diperlukan, tetapi Gunung Fuji mempunyai musim pendakian rasmi, yuran setiap orang dan pintu masuk yang ditutup pada waktu malam. Di luar musim itu, pondok dan liputan penyelamat ditutup dan pendakian menjadi usaha pendakian musim sejuk.',
      'zh-cn': '无须向导，但富士山设有官方登山季、按人计费及夜间关闭的入山闸口。非官方季节期间，山屋与救援服务停止运作，登山即成为冬季登山行动。',
      'zh-hk': '唔使嚮導，但富士山設有官方登山季、按人收費同夜間關閉嘅入山閘口。非官方季節期間，山屋同救援服務停止運作，登山就變成冬季登山行動。',
      ta: 'வழிகாட்டிகள் தேவையில்லை, ஆனால் ஃபுஜி மலைக்கு அதிகாரப்பூர்வ ஏறும் பருவம், ஒருவருக்கான கட்டணம் மற்றும் இரவில் மூடப்படும் நுழைவு வாயில்கள் உள்ளன. அந்தப் பருவத்திற்கு வெளியே குடிசைகளும் மீட்புச் சேவையும் மூடப்படும், ஏற்றம் ஒரு குளிர்கால மலையேற்றப் பணியாக மாறும்.',
      ar: 'المرشدون غير مطلوبين، لكن لجبل فوجي موسم تسلّق رسمي ورسم لكل شخص وبوابات دخول تُغلق ليلًا. خارج ذلك الموسم تُغلق الأكواخ وتغطية الإنقاذ، ويصبح الصعود مهمة تسلّق شتوي.',
    },
  },
  {
    country: 'south-korea',
    emergency: [{ kind: 'police', number: '112' }, { kind: 'fire', number: '119' }],
    guides: {
      en: 'No guide is needed, but the Korea National Park Service runs a reservation system on the busiest peaks and closes trails outright for fire risk and for winter conditions. Check the trail status page on the morning you leave.',
      ms: 'Tiada pemandu diperlukan, tetapi Perkhidmatan Taman Negara Korea mengendalikan sistem tempahan di puncak tersibuk dan menutup laluan sepenuhnya kerana risiko kebakaran dan keadaan musim sejuk. Semak halaman status laluan pada pagi anda berlepas.',
      'zh-cn': '无须向导，但韩国国立公园公团于最热门山峰实施预约制，并会因火灾风险及冬季状况直接封闭步道。请于出发当日早晨查阅步道状况页面。',
      'zh-hk': '唔使嚮導，但韓國國立公園公團喺最熱門山峰實施預約制，亦會因為火災風險同冬季狀況直接封閉步道。請喺出發當日朝早查閱步道狀況頁面。',
      ta: 'வழிகாட்டி தேவையில்லை, ஆனால் கொரிய தேசிய பூங்கா சேவை பரபரப்பான சிகரங்களில் முன்பதிவு முறையை நடத்துகிறது, தீ அபாயம் மற்றும் குளிர்கால நிலைமைகளுக்காக பாதைகளை முற்றிலும் மூடுகிறது. நீங்கள் புறப்படும் காலையில் பாதை நிலைப் பக்கத்தைச் சரிபார்க்கவும்.',
      ar: 'لا حاجة إلى مرشد، لكن هيئة الحدائق الوطنية الكورية تدير نظام حجز على أكثر القمم ازدحامًا وتغلق المسارات كليًا بسبب خطر الحرائق وظروف الشتاء. راجع صفحة حالة المسارات صباح يوم انطلاقك.',
    },
  },
  {
    country: 'taiwan',
    emergency: [{ kind: 'police', number: '110' }, { kind: 'fire', number: '119' }],
    guides: {
      en: 'High-mountain routes need two separate approvals, a national park permit and a police mountain entry permit, both applied for through one government portal. Quotas are small and demand exceeds them, so an organiser promising guaranteed places should be questioned.',
      ms: 'Laluan gunung tinggi memerlukan dua kelulusan berasingan, permit taman negara dan permit kemasukan gunung polis, kedua-duanya dimohon melalui satu portal kerajaan. Kuota adalah kecil dan permintaan melebihinya, jadi penganjur yang menjanjikan tempat terjamin patut dipersoalkan.',
      'zh-cn': '高山路线须取得两项独立核准：国家公园入园许可证与警察入山证，两者皆透过同一政府平台申请。名额有限且供不应求，因此若主办方保证一定有位，应予质疑。',
      'zh-hk': '高山路線要攞兩項獨立核准：國家公園入園許可證同警察入山證，兩樣都係透過同一個政府平台申請。名額有限而且供不應求，所以如果主辦方保證實有位，就應該質疑。',
      ta: 'உயர மலைப் பாதைகளுக்கு இரண்டு தனித்தனி ஒப்புதல்கள் தேவை: தேசிய பூங்கா அனுமதிச்சீட்டு மற்றும் காவல்துறை மலை நுழைவு அனுமதிச்சீட்டு, இரண்டுக்கும் ஒரே அரசு போர்ட்டல் வழியாக விண்ணப்பிக்கப்படுகிறது. ஒதுக்கீடுகள் சிறியவை, தேவை அவற்றை மீறுகிறது, எனவே உறுதியான இடங்களை உறுதியளிக்கும் ஏற்பாட்டாளரைக் கேள்வி கேட்க வேண்டும்.',
      ar: 'تتطلب المسارات الجبلية العالية موافقتين منفصلتين: تصريح الحديقة الوطنية وتصريح الشرطة لدخول الجبل، ويُقدَّم طلبهما عبر بوابة حكومية واحدة. الحصص صغيرة والطلب يفوقها، لذا ينبغي التشكيك في منظّم يَعِد بأماكن مضمونة.',
    },
  },
  {
    country: 'hong-kong',
    emergency: [{ kind: 'all', number: '999' }],
    guides: {
      en: 'No permits and no guides. The country parks are free and open, and the trails carry numbered distance posts that rescue services use to locate you, so note the nearest post if you need help.',
      ms: 'Tiada permit dan tiada pemandu. Taman desa adalah percuma dan terbuka, dan laluan mempunyai tiang jarak bernombor yang digunakan perkhidmatan penyelamat untuk mengesan anda, jadi catat tiang terdekat jika anda perlukan bantuan.',
      'zh-cn': '无须许可证，亦无须向导。郊野公园免费开放，步道沿途设有编号距离标距柱，救援部门凭此定位，因此如需求助，请记下最近的标距柱编号。',
      'zh-hk': '唔使許可證，亦都唔使嚮導。郊野公園免費開放，步道沿途設有編號標距柱，救援部門靠佢定位，所以如果要求助，請記低最近嘅標距柱編號。',
      ta: 'அனுமதிச்சீட்டுகள் இல்லை, வழிகாட்டிகளும் இல்லை. நாட்டுப் பூங்காக்கள் இலவசமும் திறந்ததும், பாதைகளில் எண்ணிடப்பட்ட தூரக் கம்பங்கள் உள்ளன, அவற்றை மீட்புச் சேவைகள் உங்களைக் கண்டறியப் பயன்படுத்துகின்றன, எனவே உதவி தேவைப்பட்டால் அருகிலுள்ள கம்பத்தைக் குறித்துக்கொள்ளுங்கள்.',
      ar: 'لا تصاريح ولا مرشدين. الحدائق الريفية مجانية ومفتوحة، وتحمل المسارات أعمدة مسافة مرقّمة تستخدمها خدمات الإنقاذ لتحديد موقعك، لذا سجّل أقرب عمود إن احتجت المساعدة.',
    },
  },
  {
    country: 'china',
    emergency: [{ kind: 'police', number: '110' }, { kind: 'fire', number: '119' }, { kind: 'ambulance', number: '120' }],
    guides: {
      en: 'Guides are not required, but every scenic area here sells real-name tickets tied to a passport or ID and caps daily numbers. Buy through the official platform: a ticket resold without your name on it may not admit you.',
      ms: 'Pemandu tidak diperlukan, tetapi setiap kawasan tumpuan di sini menjual tiket nama benar yang terikat dengan pasport atau kad pengenalan dan mengehadkan bilangan harian. Beli melalui platform rasmi: tiket yang dijual semula tanpa nama anda mungkin tidak membenarkan anda masuk.',
      'zh-cn': '无须向导，但此地各景区均实行与护照或身份证绑定的实名制售票，并设每日人数上限。请透过官方平台购票：转售而未记你姓名的门票，可能无法入园。',
      'zh-hk': '唔使嚮導，但呢度各景區都實行同護照或身份證綁定嘅實名制售票，並且設每日人數上限。請透過官方平台買飛：轉售而冇記你名嘅門票，可能入唔到園。',
      ta: 'வழிகாட்டிகள் தேவையில்லை, ஆனால் இங்குள்ள ஒவ்வொரு அழகுத்தல அமைவும் கடவுச்சீட்டு அல்லது அடையாளத்துடன் இணைக்கப்பட்ட உண்மையான-பெயர் டிக்கெட்டுகளை விற்கிறது, தினசரி எண்ணிக்கையை வரம்பிடுகிறது. உத்தியோகபூர்வ தளம் மூலம் வாங்கவும்: உங்கள் பெயர் இல்லாமல் மறுவிற்பனை செய்யப்பட்ட டிக்கெட் உங்களை அனுமதிக்காமல் போகலாம்.',
      ar: 'المرشدون غير مطلوبين، لكن كل منطقة سياحية هنا تبيع تذاكر بالاسم الحقيقي مرتبطة بجواز السفر أو الهوية وتحدّ من الأعداد اليومية. اشترِ عبر المنصة الرسمية: تذكرة أُعيد بيعها دون اسمك عليها قد لا تسمح لك بالدخول.',
    },
  },
  {
    country: 'north-korea',
    emergency: [],
    guides: {
      en: 'Independent travel does not exist here: every visitor is assigned a state guide who is present at all times, and there is no separate permit, booking or emergency-calling system outside that arrangement. As of this update, North Korea remains closed to almost all foreign tourism (Russian nationals are the current exception), and several governments, including the United States, either advise against all travel there or restrict their own citizens’ passports from being used for it. Everything on this page describes what has been offered when the country has been open, for planning ahead of a reopening, not a trip you can book today.',
      ms: 'Perjalanan bebas tidak wujud di sini: setiap pelawat diberikan pemandu negara yang hadir sepanjang masa, dan tiada sistem permit, tempahan atau panggilan kecemasan berasingan di luar aturan itu. Setakat kemas kini ini, Korea Utara kekal ditutup kepada hampir semua pelancongan asing (warganegara Rusia adalah pengecualian semasa), dan beberapa kerajaan, termasuk Amerika Syarikat, sama ada menasihati menentang sebarang perjalanan ke sana atau menyekat pasport warganya daripada digunakan untuknya. Segala-galanya di halaman ini menerangkan apa yang pernah ditawarkan semasa negara ini dibuka, untuk perancangan sebelum pembukaan semula, dan bukan perjalanan yang boleh anda tempah hari ini.',
      'zh-cn': '这里不存在独立自由行：每位访客都会被分配一名国家导游全程陪同，除此安排外没有独立的许可、预订或紧急呼叫系统。截至本次更新，朝鲜仍对几乎所有外国游客关闭（俄罗斯公民目前是例外），包括美国在内的多国政府要么建议避免一切前往，要么限制本国公民的护照不得用于此行程。本页所述内容记录的是该国开放时期曾提供的项目，供重新开放前的规划参考，而非当下可预订的行程。',
      'zh-hk': '呢度冇獨立自由行呢回事：每位訪客都會派一個國家導遊全程跟住，除咗呢個安排之外冇獨立嘅許可、預訂或者緊急求助系統。截至今次更新，北韓仍然對幾乎所有外國遊客封閉（俄羅斯公民而家係例外），包括美國喺內嘅多個政府，要麼建議避免一切前往，要麼限制本國公民嘅護照唔准用嚟去呢度。呢版所講嘅內容記錄嘅係呢個國家開放時期曾經提供嘅項目，供重新開放之前規劃參考，而唔係而家可以預訂嘅行程。',
      ta: 'இங்கு சுதந்திரமான பயணம் என்பதே இல்லை: ஒவ்வொரு பார்வையாளருக்கும் எப்போதும் உடனிருக்கும் அரசு வழிகாட்டி நியமிக்கப்படுகிறார், அந்த ஏற்பாட்டிற்கு வெளியே தனி அனுமதி, முன்பதிவு அல்லது அவசரகால அழைப்பு அமைப்பு எதுவும் இல்லை. இந்தப் புதுப்பிப்பின்படி, வட கொரியா கிட்டத்தட்ட அனைத்து வெளிநாட்டு சுற்றுலாவிற்கும் மூடப்பட்டே உள்ளது (ரஷ்ய குடிமக்கள் தற்போதைய விதிவிலக்கு), அமெரிக்கா உட்பட பல அரசாங்கங்கள் அனைத்துப் பயணத்திற்கும் எதிராக அறிவுறுத்துகின்றன அல்லது தங்கள் குடிமக்களின் கடவுச்சீட்டுகளை இதற்குப் பயன்படுத்த தடை விதிக்கின்றன. இந்தப் பக்கத்தில் உள்ளது நாடு திறந்திருந்தபோது வழங்கப்பட்டவற்றை விவரிக்கிறது, மீண்டும் திறப்பதற்கு முன் திட்டமிட, இன்று முன்பதிவு செய்யக்கூடிய பயணமாக அல்ல.',
      ar: 'لا وجود للسفر المستقل هنا: يُخصَّص لكل زائر مرشد حكومي يرافقه طوال الوقت، ولا يوجد نظام منفصل للتصاريح أو الحجز أو الاتصال بالطوارئ خارج هذا الترتيب. حتى هذا التحديث، لا تزال كوريا الشمالية مغلقة أمام جل السياحة الأجنبية (المواطنون الروس هم الاستثناء الحالي)، وتنصح عدة حكومات، من بينها الولايات المتحدة، إما بتجنّب كل سفر إليها أو تقيّد استخدام جوازات مواطنيها لهذا الغرض. ما يرد في هذه الصفحة يصف ما كان يُقدَّم حين كانت البلاد مفتوحة، للتخطيط قبل إعادة الفتح، لا رحلة يمكن حجزها اليوم.',
    },
  },
];

export function getCountrySafety(slug: CountrySlug): CountrySafety | undefined {
  return countrySafety.find((c) => c.country === slug);
}
