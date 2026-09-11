import type { Area } from './types.ts';

/**
 * Documented here for what it is: a country this site cannot send anyone to
 * right now. As of this update North Korea remains closed to almost all
 * foreign tourism (Russian nationals are the current exception), regular
 * Western tourism has been suspended since January 2020, and several
 * governments, the United States among them, either advise against all
 * travel here or restrict their own citizens' passports from being used for
 * it. There is no independent permit system to verify against, because
 * there is no independent travel: every visitor is assigned a state guide
 * for the duration of the trip, and access runs entirely through a small
 * number of licensed specialist tour operators.
 *
 * What follows describes what has been offered when the country has been
 * open, for planning ahead of a reopening that may or may not happen on any
 * predictable timeline, not a trip that can be booked today. Read the
 * safety section before anything else on this page.
 */
export const northKoreaAreas: Area[] = [
  {
    slug: 'mount-myohyang',
    country: 'north-korea',
    divisions: ['North Pyongan Province', 'South Pyongan Province'],
    locality: 'Hyangsan County',
    region: 'Hyangsan County, North Pyongan Province, on the border with South Pyongan Province',
    coordinates: { lat: 40.0186, lng: 126.3331 },
    difficulty: 'moderate',
    elevationM: 1909,
    duration: {
      en: 'The Manphok Valley round trip is about 8 km, roughly 3-4 hours; routes further toward Piro Peak take a full day',
      ms: 'Perjalanan pergi balik Lembah Manphok kira-kira 8 km, lebih kurang 3-4 jam; laluan lebih jauh ke arah Puncak Piro mengambil masa sehari penuh',
      'zh-cn': '万瀑峡谷往返约 8 公里，需 3 至 4 小时；再往毗卢峰方向的路线需要一整天',
      'zh-hk': '萬瀑峽谷來回大約 8 公里，要 3 至 4 個鐘；再向毗盧峰方向嘅路線就要成日',
      ta: 'மன்போக் பள்ளத்தாக்குக்குச் சென்று திரும்புவது சுமார் 8 கி.மீ., சுமார் 3-4 மணி நேரம்; பிரோ சிகரத்தை நோக்கிய மேலதிக பாதைகளுக்கு ஒரு முழு நாள் ஆகும்',
      ar: 'رحلة وادي مانفوك ذهابًا وإيابًا نحو 8 كم، أي من 3 إلى 4 ساعات؛ المسارات الأبعد نحو قمة بيرو تستغرق يومًا كاملاً',
    },
    permit: {
      required: true,
      authorityName: 'DPRK National Tourism Administration, arranged entirely through a licensed foreign tour operator: there is no independent permit or booking route',
      url: 'https://koryogroup.com/travel-guide/mt-myohyang-north-korea-north-korea-travel-guide',
      fee: {
        en: 'Not a standalone entrance fee: hiking here is one stop within a multi-day guided tour package, typically several hundred to a few thousand US dollars depending on the operator and itinerary',
        ms: 'Bukan yuran kemasukan berasingan: mendaki di sini adalah satu perhentian dalam pakej lawatan berpandu berbilang hari, biasanya beberapa ratus hingga beberapa ribu dolar AS bergantung pada pengendali dan itinerari',
        'zh-cn': '并非单独的入场费：此处徒步是多日导览行程套餐中的一站，费用通常从数百到数千美元不等，视营运商与行程而定',
        'zh-hk': '唔係獨立嘅入場費：呢度行山係多日導覽行程套餐入面嘅一站，費用通常由幾百到幾千美元唔等，睇營運商同行程',
        ta: 'தனி நுழைவுக் கட்டணம் அல்ல: இங்கு மலையேற்றம் பல நாள் வழிகாட்டப்பட்ட சுற்றுலா தொகுப்பில் ஒரு நிறுத்தம், பொதுவாக இயக்குநர் மற்றும் பயணத் திட்டத்தைப் பொறுத்து பல நூறு முதல் சில ஆயிரம் அமெரிக்க டாலர்கள் வரை',
        ar: 'ليست رسم دخول منفصلًا: المشي هنا محطة واحدة ضمن باقة جولة مرشدة متعددة الأيام، عادةً من بضع مئات إلى بضعة آلاف من الدولارات الأمريكية حسب المشغّل وخط السير',
      },
      advanceNotice: {
        en: 'Weeks to months, when tours are running at all, to arrange the visa, the state guide and the itinerary as one package',
        ms: 'Beberapa minggu hingga beberapa bulan, apabila lawatan beroperasi sama sekali, untuk mengatur visa, pemandu negara dan itinerari sebagai satu pakej',
        'zh-cn': '在有团可参加的前提下，办理签证、国家导游与行程作为一整套安排，通常需要数周到数月',
        'zh-hk': '喺有團可以報嘅前提下，辦簽證、國家導遊同行程做一套安排，通常要幾個星期到幾個月',
        ta: 'சுற்றுலாக்கள் இயங்கும்போது, விசா, அரசு வழிகாட்டி மற்றும் பயணத் திட்டத்தை ஒரே தொகுப்பாக ஏற்பாடு செய்ய வாரங்கள் முதல் மாதங்கள் வரை',
        ar: 'من أسابيع إلى أشهر، عندما تكون الجولات قائمة أصلاً، لترتيب التأشيرة والمرشد الحكومي وخط السير كباقة واحدة',
      },
      howToApply: {
        en: 'There is no independent permit process and no way to visit alone. All foreign tourism to North Korea, this area included, runs through a small number of licensed specialist operators (Koryo Tours, Young Pioneer Tours and Uri Tours have historically arranged it), who book the visa, the mandatory state guide and the full itinerary as one package; a visitor is never without that guide. As of this update the country remains closed to almost all foreign tourism, with Russian nationals the current exception, so check an operator’s current listings and your own government’s travel advisory before planning anything here. Citizens of some countries, including the United States, face separate legal restrictions on travel to North Korea regardless of whether the country is accepting tourists.',
        ms: 'Tiada proses permit bebas dan tiada cara untuk melawat sendirian. Semua pelancongan asing ke Korea Utara, termasuk kawasan ini, dijalankan melalui sebilangan kecil pengendali pakar bertauliah (Koryo Tours, Young Pioneer Tours dan Uri Tours pernah mengaturnya), yang menempah visa, pemandu negara wajib dan itinerari penuh sebagai satu pakej; pelawat tidak pernah tanpa pemandu itu. Setakat kemas kini ini, negara ini kekal ditutup kepada hampir semua pelancongan asing, dengan warganegara Rusia sebagai pengecualian semasa, jadi semak senarai semasa pengendali dan nasihat perjalanan kerajaan anda sendiri sebelum merancang apa-apa di sini. Warganegara sesetengah negara, termasuk Amerika Syarikat, menghadapi sekatan undang-undang berasingan untuk perjalanan ke Korea Utara tanpa mengira sama ada negara itu menerima pelancong.',
        'zh-cn': '没有独立的许可流程，也没有独自前往的方式。所有前往朝鲜的外国旅游，包括本区域在内，均须透过为数不多的持牌专业营运商办理（历史上安排过此类行程的包括高丽旅行社 Koryo Tours、Young Pioneer Tours 与 Uri Tours），由其一并预订签证、强制配备的国家导游以及完整行程；访客全程不会脱离该导游。截至本次更新，该国仍对几乎所有外国游客关闭，俄罗斯公民目前是例外，因此在此规划任何行程前，请查阅营运商的最新团期以及你所属政府的旅行警示。包括美国在内的部分国家公民，无论朝鲜是否接受游客，都面临额外的法律限制。',
        'zh-hk': '冇獨立嘅許可流程，都冇獨自去嘅方法。所有去北韓嘅外國旅遊，包括呢個區域在內，都要透過得幾間持牌專業營運商辦理（歷史上安排過呢類行程嘅包括高麗旅行社 Koryo Tours、Young Pioneer Tours 同 Uri Tours），由佢哋一併訂簽證、強制配備嘅國家導遊同埋完整行程；訪客全程都唔會離開嗰個導遊。截至今次更新，呢個國家仍然對幾乎所有外國遊客封閉，俄羅斯公民而家係例外，所以喺呢度規劃任何行程之前，請查吓營運商嘅最新團期同你所屬政府嘅旅遊警示。包括美國喺內嘅部分國家公民，唔理北韓收唔收遊客，都要面對額外嘅法律限制。',
        ta: 'சுதந்திரமான அனுமதி செயல்முறை இல்லை, தனியாக வருகை தர வழியும் இல்லை. வட கொரியாவிற்கான அனைத்து வெளிநாட்டு சுற்றுலாவும், இந்தப் பகுதி உட்பட, சிறிய எண்ணிக்கையிலான உரிமம் பெற்ற நிபுணர் இயக்குநர்கள் மூலமாகவே நடைபெறுகிறது (Koryo Tours, Young Pioneer Tours மற்றும் Uri Tours வரலாற்று ரீதியாக இதை ஏற்பாடு செய்துள்ளன), அவர்கள் விசா, கட்டாய அரசு வழிகாட்டி மற்றும் முழு பயணத் திட்டத்தை ஒரே தொகுப்பாக முன்பதிவு செய்கிறார்கள்; பார்வையாளர் அந்த வழிகாட்டி இல்லாமல் ஒருபோதும் இருக்க மாட்டார். இந்தப் புதுப்பிப்பின்படி, நாடு கிட்டத்தட்ட அனைத்து வெளிநாட்டு சுற்றுலாவிற்கும் மூடப்பட்டே உள்ளது, ரஷ்ய குடிமக்கள் தற்போதைய விதிவிலக்கு, எனவே இங்கு எதையும் திட்டமிடுவதற்கு முன் ஒரு இயக்குநரின் தற்போதைய பட்டியல்களையும் உங்கள் சொந்த அரசாங்கத்தின் பயண அறிவுரையையும் சரிபார்க்கவும். அமெரிக்கா உட்பட சில நாடுகளின் குடிமக்கள், நாடு சுற்றுலாப் பயணிகளை ஏற்கிறதா இல்லையா என்பதைப் பொருட்படுத்தாமல், வட கொரியாவிற்கான பயணத்திற்கு தனி சட்டரீதியான கட்டுப்பாடுகளை எதிர்கொள்கிறார்கள்.',
        ar: 'لا يوجد إجراء تصريح مستقل ولا طريقة للزيارة بمفردك. تمر كل السياحة الأجنبية إلى كوريا الشمالية، بما فيها هذه المنطقة، عبر عدد قليل من المشغّلين المتخصصين المرخّصين (رتّبت ذلك تاريخيًا شركات مثل Koryo Tours وYoung Pioneer Tours وUri Tours)، الذين يحجزون التأشيرة والمرشد الحكومي الإلزامي وخط السير الكامل كباقة واحدة؛ ولا يكون الزائر أبدًا بلا ذلك المرشد. حتى هذا التحديث، لا تزال البلاد مغلقة أمام جل السياحة الأجنبية، والمواطنون الروس هم الاستثناء الحالي، لذا تحقق من قوائم المشغّل الحالية ومن نصيحة السفر الخاصة بحكومتك قبل التخطيط لأي شيء هنا. يواجه مواطنو بعض الدول، ومن بينها الولايات المتحدة، قيودًا قانونية منفصلة على السفر إلى كوريا الشمالية بصرف النظر عمّا إذا كانت البلاد تستقبل سياحًا.',
      },
    },
    season: {
      monthsBest: [4, 5, 9, 10],
      monthsAvoid: [12, 1, 2],
      bestMonths: {
        en: 'April to May and September to October, the same spring and autumn windows that suit hiking across the rest of the Korean peninsula',
        ms: 'April hingga Mei dan September hingga Oktober, tetingkap musim bunga dan musim luruh yang sama yang sesuai untuk mendaki di seluruh Semenanjung Korea',
        'zh-cn': '4 月至 5 月及 9 月至 10 月，与朝鲜半岛其他地区适合徒步的春秋时段相同',
        'zh-hk': '4 月至 5 月同 9 月至 10 月，同朝鮮半島其他地方啱行山嘅春秋時段一樣',
        ta: 'ஏப்ரல் முதல் மே மற்றும் செப்டம்பர் முதல் அக்டோபர் வரை, கொரியத் தீபகற்பத்தின் பிற பகுதிகளுக்கும் ஏற்ற அதே வசந்த மற்றும் இலையுதிர் காலங்கள்',
        ar: 'من أبريل إلى مايو ومن سبتمبر إلى أكتوبر، نفس نافذتي الربيع والخريف المناسبتين للتنزه في بقية شبه الجزيرة الكورية',
      },
      avoidMonths: {
        en: 'December to February, when the mountains are deep in continental winter cold and snow',
        ms: 'Disember hingga Februari, apabila gunung-ganang berada dalam kesejukan dan salji musim sejuk benua yang mendalam',
        'zh-cn': '12 月至次年 2 月，此时山区正值大陆性严冬，冰雪覆盖',
        'zh-hk': '12 月到嚟年 2 月，呢陣山區正值大陸性嚴冬，冰雪蓋晒',
        ta: 'டிசம்பர் முதல் பிப்ரவரி வரை, மலைகள் கடுமையான கண்ட குளிர்காலக் குளிர் மற்றும் பனியில் மூழ்கியிருக்கும்போது',
        ar: 'من ديسمبر إلى فبراير، حين تغرق الجبال في برد وثلج شتاء قاري عميق',
      },
      notes: {
        en: 'North Pyongan Province shares the Korean peninsula\'s continental monsoon climate: hot, humid summers with heavy July and August rain, and cold, dry winters. None of this changes the fact that a visit here is only possible as part of a licensed tour, on whatever dates that operator is running and the country is accepting tourists.',
        ms: 'Wilayah Pyongan Utara berkongsi iklim monsun benua Semenanjung Korea: musim panas panas dan lembap dengan hujan lebat Julai dan Ogos, serta musim sejuk sejuk dan kering. Tiada satu pun daripada ini mengubah hakikat bahawa lawatan ke sini hanya mungkin sebagai sebahagian daripada lawatan bertauliah, pada apa-apa tarikh pengendali itu beroperasi dan negara menerima pelancong.',
        'zh-cn': '平安北道与朝鲜半岛共享大陆性季风气候：夏季炎热潮湿，7 月与 8 月降雨集中，冬季寒冷干燥。以上都不会改变一个事实：唯有跟随持牌旅行团、并且该国当时正接受游客的前提下，才有可能造访此地。',
        'zh-hk': '平安北道同朝鮮半島共享大陸性季候風氣候：夏天又熱又濕，7 月同 8 月落雨集中，冬天又凍又乾。以上呢啲都改變唔到一個事實：一定要跟持牌旅行團、而且嗰陣個國家肯收遊客先至有可能去到呢度。',
        ta: 'வடக்கு பியோங்கன் மாகாணம் கொரியத் தீபகற்பத்தின் கண்ட பருவமழை காலநிலையைப் பகிர்ந்து கொள்கிறது: ஜூலை மற்றும் ஆகஸ்ட் மாதங்களில் கனமழையுடன் வெப்பமான, ஈரப்பதமான கோடைகாலம், மற்றும் குளிர்ந்த, உலர்ந்த குளிர்காலம். இதில் எதுவும், இங்கு வருகை என்பது உரிமம் பெற்ற சுற்றுலாவின் ஒரு பகுதியாக மட்டுமே, அந்த இயக்குநர் இயங்கும் மற்றும் நாடு சுற்றுலாப் பயணிகளை ஏற்கும் எந்த தேதிகளிலும், சாத்தியமாகும் என்ற உண்மையை மாற்றாது.',
        ar: 'تشترك مقاطعة بيونجان الشمالية في مناخ شبه الجزيرة الكورية الموسمي القاري: صيف حار ورطب بأمطار غزيرة في يوليو وأغسطس، وشتاء بارد جاف. لا شيء من هذا يغيّر حقيقة أن الزيارة هنا ممكنة فقط كجزء من جولة مرخّصة، في أي تواريخ يعمل فيها ذلك المشغّل وتقبل فيها البلاد السياح.',
      },
    },
    name: { en: 'Mount Myohyang', ms: 'Gunung Myohyang', 'zh-cn': '妙香山', 'zh-hk': '妙香山', ta: 'மயோஹ்யாங் மலை', ar: 'جبل ميوهيانغ' },
    tagline: {
      en: 'The Ten Thousand Waterfalls valley below Piro Peak, one of the few hikes ever offered to foreign visitors in North Korea',
      ms: 'Lembah Sepuluh Ribu Air Terjun di bawah Puncak Piro, salah satu daripada sedikit pendakian yang pernah ditawarkan kepada pelawat asing di Korea Utara',
      'zh-cn': '毗卢峰下的万瀑峡谷，是朝鲜历来少数向外国游客开放的徒步路线之一',
      'zh-hk': '毗盧峰下嘅萬瀑峽谷，係北韓歷來少數向外國遊客開放嘅行山路線之一',
      ta: 'பிரோ சிகரத்திற்குக் கீழே உள்ள பத்தாயிரம் நீர்வீழ்ச்சிகள் பள்ளத்தாக்கு, வட கொரியாவில் வெளிநாட்டு பார்வையாளர்களுக்கு எப்போதேனும் வழங்கப்பட்ட சில மலையேற்றங்களில் ஒன்று',
      ar: 'وادي الآلاف من الشلالات تحت قمة بيرو، أحد المسارات القليلة التي عُرضت يومًا على الزوار الأجانب في كوريا الشمالية',
    },
    overview: {
      en: 'Mount Myohyang rises to 1,909 m at Piro Peak, on the border of North and South Pyongan provinces, and has historically been one of the very few genuine hiking destinations included on foreign tour itineraries in North Korea alongside the more famous International Friendship Exhibition nearby. The main route follows Manphok Valley, whose name means "ten thousand waterfalls", past cascades and pools on a well-built path; Sangwon Valley offers a second, quieter route. The wider mountain has over 55 km of trail across several valleys, though a foreign tour typically covers only the short, accessible core.',
      ms: 'Gunung Myohyang menjulang ke 1,909 m di Puncak Piro, di sempadan wilayah Pyongan Utara dan Selatan, dan secara sejarah telah menjadi salah satu daripada sedikit destinasi pendakian sebenar yang disertakan dalam itinerari lawatan asing di Korea Utara bersebelahan dengan Pameran Persahabatan Antarabangsa yang lebih terkenal berdekatan. Laluan utama mengikuti Lembah Manphok, yang namanya bermaksud "sepuluh ribu air terjun", melepasi air terjun dan kolam di atas laluan yang dibina dengan baik; Lembah Sangwon menawarkan laluan kedua yang lebih tenang. Gunung yang lebih luas mempunyai lebih 55 km laluan merentasi beberapa lembah, walaupun lawatan asing biasanya hanya meliputi teras yang pendek dan boleh diakses.',
      'zh-cn': '妙香山最高点毗卢峰海拔 1,909 米，位于平安北道与平安南道交界，历来是朝鲜为数极少纳入外国旅游行程的真正徒步目的地之一，与附近更著名的国际友谊展览馆并列为主要景点。主路线沿满瀑峡谷而行，其名意为「万瀑」，沿途经过一系列瀑布与水潭，路面修整良好；祥原峡谷则提供更清静的第二条路线。整座山脉分布着超过 55 公里的步道，横跨多条峡谷，不过外国旅游团通常只走其中短而易达的核心一段。',
      'zh-hk': '妙香山最高點毗盧峰海拔 1,909 米，喺平安北道同平安南道交界，歷來係北韓為數極少納入外國旅遊行程嘅真正行山目的地之一，同附近更出名嘅國際友誼展覽館並列為主要景點。主路線沿滿瀑峽谷行，個名意思係「萬瀑」，沿途經過一連串瀑布同水潭，路面修得幾好；祥原峽谷就提供更清靜嘅第二條路線。成座山分佈住超過 55 公里嘅步道，橫跨幾條峽谷，不過外國旅行團通常淨係行其中短而易到嘅核心一段。',
      ta: 'மயோஹ்யாங் மலை பியோங்கன் வடக்கு மற்றும் தெற்கு மாகாணங்களின் எல்லையில் பிரோ சிகரத்தில் 1,909 மீ. உயரத்தை எட்டுகிறது, மேலும் வரலாற்று ரீதியாக, அருகிலுள்ள மிகவும் பிரபலமான சர்வதேச நட்புறவு கண்காட்சிக்கு அருகில், வட கொரியாவில் வெளிநாட்டு சுற்றுலா பயணத் திட்டங்களில் சேர்க்கப்பட்ட மிகச் சில உண்மையான மலையேற்ற இடங்களில் ஒன்றாகும். முதன்மைப் பாதை "பத்தாயிரம் நீர்வீழ்ச்சிகள்" என்று பொருள்படும் மன்போக் பள்ளத்தாக்கைப் பின்பற்றுகிறது, நன்கு கட்டப்பட்ட பாதையில் அருவிகள் மற்றும் குளங்களைக் கடந்து செல்கிறது; சாங்வொன் பள்ளத்தாக்கு இரண்டாவது, அமைதியான பாதையை வழங்குகிறது. பரந்த மலையில் பல பள்ளத்தாக்குகள் முழுவதும் 55 கி.மீ.க்கும் மேற்பட்ட பாதை உள்ளது, இருப்பினும் வெளிநாட்டு சுற்றுலா பொதுவாக குறுகிய, அணுகக்கூடிய மையத்தை மட்டுமே உள்ளடக்கும்.',
      ar: 'يرتفع جبل ميوهيانغ إلى 1,909 مترًا عند قمة بيرو، على حدود مقاطعتي بيونجان الشمالية والجنوبية، وكان تاريخيًا واحدًا من وجهات المشي القليلة الحقيقية المدرجة في برامج الجولات الأجنبية في كوريا الشمالية، إلى جانب معرض الصداقة الدولي الأشهر القريب منه. يتبع المسار الرئيسي وادي مانفوك، الذي يعني اسمه "الآلاف من الشلالات"، مارًا بشلالات وبرك على طريق مُعبَّد جيدًا؛ ويوفر وادي سانغوون مسارًا ثانيًا أكثر هدوءًا. يمتد الجبل الأوسع بأكثر من 55 كم من المسارات عبر عدة أودية، رغم أن الجولة الأجنبية تغطي عادةً فقط النواة القصيرة يسيرة الوصول.',
    },
    highlights: {
      en: ['Manphok Valley\'s chain of waterfalls and pools', 'The quieter, less-visited Sangwon Valley route', 'Piro Peak, the mountain\'s 1,909 m summit', 'The International Friendship Exhibition nearby, usually visited on the same trip'],
      ms: ['Rangkaian air terjun dan kolam Lembah Manphok', 'Laluan Lembah Sangwon yang lebih tenang dan kurang dikunjungi', 'Puncak Piro, kemuncak gunung setinggi 1,909 m', 'Pameran Persahabatan Antarabangsa berdekatan, biasanya dilawati pada perjalanan yang sama'],
      'zh-cn': ['满瀑峡谷连绵的瀑布与水潭', '较为清静、游人较少的祥原峡谷路线', '毗卢峰，海拔 1,909 米的主峰', '附近的国际友谊展览馆，通常与此行一并造访'],
      'zh-hk': ['滿瀑峽谷連綿嘅瀑布同水潭', '比較清靜、遊人較少嘅祥原峽谷路線', '毗盧峰，海拔 1,909 米嘅主峰', '附近嘅國際友誼展覽館，通常同呢次行程一齊去'],
      ta: ['மன்போக் பள்ளத்தாக்கின் அருவிகள் மற்றும் குளங்களின் சங்கிலி', 'அமைதியான, குறைவாக பார்வையிடப்படும் சாங்வொன் பள்ளத்தாக்கு பாதை', 'பிரோ சிகரம், மலையின் 1,909 மீ. சிகரம்', 'அருகிலுள்ள சர்வதேச நட்புறவு கண்காட்சி, பொதுவாக அதே பயணத்தில் பார்வையிடப்படும்'],
      ar: ['سلسلة شلالات وبرك وادي مانفوك', 'مسار وادي سانغوون الأكثر هدوءًا وقلة الزوار', 'قمة بيرو، قمة الجبل عند 1,909 مترًا', 'معرض الصداقة الدولي القريب، يُزار عادةً في الرحلة نفسها',],
    },
    gettingThere: {
      en: 'Mount Myohyang is reached only as a stop on a pre-arranged tour itinerary, typically a drive of a few hours from Pyongyang. There is no independent transport option, and the route, timing and stops are set by the tour operator and state guide, not the visitor.',
      ms: 'Gunung Myohyang hanya boleh dicapai sebagai perhentian dalam itinerari lawatan yang telah diatur, biasanya pemanduan beberapa jam dari Pyongyang. Tiada pilihan pengangkutan bebas, dan laluan, masa dan perhentian ditetapkan oleh pengendali lawatan dan pemandu negara, bukan pelawat.',
      'zh-cn': '前往妙香山只能作为事先安排好的行程中的一站，通常从平壤驱车数小时可达。没有任何独立的交通选择，路线、时间与停靠点均由旅行社与国家导游决定，而非游客本人。',
      'zh-hk': '去妙香山淨係可以作為事先安排好嘅行程入面嘅一站，通常由平壤揸車幾個鐘就到。冇任何獨立嘅交通選擇，路線、時間同停靠點都係由旅行社同國家導遊決定，而唔係遊客本人。',
      ta: 'மயோஹ்யாங் மலை முன்கூட்டியே ஏற்பாடு செய்யப்பட்ட பயணத் திட்டத்தில் ஒரு நிறுத்தமாக மட்டுமே அடையப்படுகிறது, பொதுவாக பியோங்யாங்கிலிருந்து சில மணி நேர வாகனப் பயணம். சுதந்திரமான போக்குவரத்து விருப்பம் இல்லை, பாதை, நேரம் மற்றும் நிறுத்தங்கள் சுற்றுலா இயக்குநர் மற்றும் அரசு வழிகாட்டியால் நிர்ணயிக்கப்படுகின்றன, பார்வையாளரால் அல்ல.',
      ar: 'لا يُصار إلى جبل ميوهيانغ إلا كمحطة ضمن خط سير جولة مرتّب مسبقًا، عادةً بضع ساعات بالسيارة من بيونغ يانغ. لا يوجد خيار نقل مستقل، ويحدد المسار والتوقيت والمحطات مشغّل الجولة والمرشد الحكومي، لا الزائر.',
    },
    safety: {
      en: 'The physical walk is straightforward, a well-built path past waterfalls with no technical difficulty. The real risk here is legal and political, not the terrain: foreign visitors have been detained in North Korea, sometimes over actions that would be trivial elsewhere, and the outcome has occasionally been fatal. Follow every instruction from the state guide without exception, do not photograph anything you are told not to, and check your own government\'s current travel advisory before considering this trip at all; several governments, including the United States, either advise against all travel to North Korea or restrict their citizens\' passports from being used for it.',
      ms: 'Perjalanan fizikal adalah mudah, laluan yang dibina dengan baik melepasi air terjun tanpa kesukaran teknikal. Risiko sebenar di sini adalah undang-undang dan politik, bukan rupa bumi: pelawat asing pernah ditahan di Korea Utara, kadangkala atas tindakan yang remeh di tempat lain, dan hasilnya kadangkala maut. Ikut setiap arahan daripada pemandu negara tanpa pengecualian, jangan mengambil gambar apa-apa yang anda diberitahu untuk tidak, dan semak nasihat perjalanan semasa kerajaan anda sendiri sebelum mempertimbangkan perjalanan ini sama sekali; beberapa kerajaan, termasuk Amerika Syarikat, sama ada menasihati menentang sebarang perjalanan ke Korea Utara atau menyekat pasport warganya daripada digunakan untuknya.',
      'zh-cn': '实际徒步并不困难，是一条经过精心修整、途经瀑布的步道，没有技术难度。这里真正的风险在于法律与政治层面，而非地形本身：曾有外国游客在朝鲜被拘留，有时仅因在别处微不足道的举动，结果有时是致命的。请无一例外地遵从国家导游的每一项指示，未获准许绝不拍照，并在考虑此行之前务必查阅本国政府当前的旅行警示；包括美国在内的多国政府，要么建议避免一切前往朝鲜，要么限制本国公民的护照不得用于此目的。',
      'zh-hk': '實際行山唔難，係一條整理得幾好、經過瀑布嘅步道，冇技術難度。呢度真正嘅風險在於法律同政治層面，而唔係地形本身：試過有外國遊客喺北韓被拘留，有時淨係因為喺其他地方微不足道嘅舉動，結果有時仲會致命。請無一例外咁遵從國家導遊嘅每一項指示，未獲准絕對唔好影相，同埋喺考慮呢次行程之前一定要查吓自己國家政府嘅最新旅遊警示；包括美國喺內嘅多個政府，要麼建議避免一切前往北韓，要麼限制本國公民嘅護照唔准用嚟做呢個用途。',
      ta: 'உடல் ரீதியான நடை எளிதானது, தொழில்நுட்ப சிரமம் இல்லாமல் அருவிகளைக் கடந்து செல்லும் நன்கு கட்டப்பட்ட பாதை. இங்குள்ள உண்மையான ஆபத்து சட்ட மற்றும் அரசியல் ரீதியானது, நிலப்பரப்பு அல்ல: வெளிநாட்டு பார்வையாளர்கள் வட கொரியாவில் தடுத்து வைக்கப்பட்டுள்ளனர், சில சமயங்களில் வேறு எங்கும் அற்பமான செயல்களுக்காக, முடிவு எப்போதாவது கொடியதாகவும் இருந்துள்ளது. அரசு வழிகாட்டியின் ஒவ்வொரு அறிவுரையையும் விதிவிலக்கின்றி பின்பற்றுங்கள், வேண்டாம் என்று சொல்லப்பட்ட எதையும் புகைப்படம் எடுக்க வேண்டாம், மேலும் இந்தப் பயணத்தைக் கருத்தில் கொள்வதற்கு முன் உங்கள் சொந்த அரசாங்கத்தின் தற்போதைய பயண அறிவுரையைச் சரிபார்க்கவும்; அமெரிக்கா உட்பட பல அரசாங்கங்கள், வட கொரியாவிற்கான அனைத்துப் பயணத்திற்கும் எதிராக அறிவுறுத்துகின்றன அல்லது தங்கள் குடிமக்களின் கடவுச்சீட்டுகளை இதற்குப் பயன்படுத்த தடை விதிக்கின்றன.',
      ar: 'المشي الفعلي بسيط، طريق مُعبَّد جيدًا يمر بشلالات دون صعوبة تقنية. الخطر الحقيقي هنا قانوني وسياسي، لا يتعلق بالتضاريس: احتُجز زوار أجانب في كوريا الشمالية، أحيانًا بسبب تصرفات تافهة في أي مكان آخر، وكانت النتيجة قاتلة في بعض الأحيان. اتبع كل تعليمة من المرشد الحكومي دون استثناء، ولا تصوّر أي شيء يُطلب منك عدم تصويره، وتحقق من نصيحة السفر الحالية لحكومتك قبل التفكير في هذه الرحلة أصلاً؛ تنصح عدة حكومات، من بينها الولايات المتحدة، إما بتجنّب كل سفر إلى كوريا الشمالية أو تقيّد استخدام جوازات مواطنيها لهذا الغرض.',
    },
    whatToBring: {
      en: ['Comfortable walking shoes; the path is well maintained and not technical', 'Cash in the currency your operator specifies, since cards are not usable', 'A copy of your own government\'s current travel advisory, read before you go, not after', 'Realistic expectations about photography and phone use, set by your guide rather than by you'],
      ms: ['Kasut berjalan yang selesa; laluan diselenggara dengan baik dan tidak teknikal', 'Wang tunai dalam mata wang yang ditetapkan oleh pengendali anda, kerana kad tidak boleh digunakan', 'Salinan nasihat perjalanan semasa kerajaan anda sendiri, dibaca sebelum anda pergi, bukan selepas', 'Jangkaan realistik tentang fotografi dan penggunaan telefon, ditetapkan oleh pemandu anda dan bukan oleh anda'],
      'zh-cn': ['舒适的步行鞋；步道维护良好，没有技术难度', '营运商指定货币的现金，因为无法使用银行卡', '出发前而非之后，先阅读本国政府当前的旅行警示', '对拍照与手机使用抱持现实预期，规则由导游而非你自己决定'],
      'zh-hk': ['舒服嘅行山鞋；步道保養得好好，冇技術難度', '營運商指定貨幣嘅現金，因為銀行卡用唔到', '出發之前而唔係之後，要睇返自己國家政府嘅最新旅遊警示', '對影相同用電話要有實際預期，規矩係由導遊而唔係你自己話事'],
      ta: ['வசதியான நடைபயணக் காலணிகள்; பாதை நன்கு பராமரிக்கப்படுகிறது, தொழில்நுட்பமானது அல்ல', 'உங்கள் இயக்குநர் குறிப்பிடும் நாணயத்தில் பணம், அட்டைகள் பயன்படுத்த முடியாததால்', 'நீங்கள் செல்வதற்கு முன், பிறகு அல்ல, படிக்க வேண்டிய உங்கள் சொந்த அரசாங்கத்தின் தற்போதைய பயண அறிவுரையின் நகல்', 'புகைப்படம் மற்றும் தொலைபேசி பயன்பாடு குறித்த யதார்த்தமான எதிர்பார்ப்புகள், உங்களால் அல்ல உங்கள் வழிகாட்டியால் நிர்ணயிக்கப்படுகின்றன'],
      ar: ['حذاء مشي مريح؛ المسار مُصان جيدًا وغير تقني', 'نقد بالعملة التي يحددها مشغّلك، إذ لا يمكن استخدام البطاقات', 'نسخة من نصيحة السفر الحالية لحكومتك، تُقرأ قبل الذهاب لا بعده', 'توقعات واقعية بشأن التصوير واستخدام الهاتف، يحددها مرشدك لا أنت',],
    },
    heroGradient: 'from-slate-900 via-stone-700 to-amber-600',
    heroAlt: { en: 'A forested valley with a waterfall descending between steep rock walls', ms: 'Lembah berhutan dengan air terjun menurun antara dinding batu curam', 'zh-cn': '两侧陡峭岩壁间瀑布倾泻而下的林木峡谷', 'zh-hk': '兩邊陡峭岩壁之間瀑布傾瀉而下嘅林木峽谷', ta: 'செங்குத்தான பாறை சுவர்களுக்கு இடையே இறங்கும் நீர்வீழ்ச்சியுடன் கூடிய காடு சூழ்ந்த பள்ளத்தாக்கு', ar: 'وادٍ مشجّر بشلال ينحدر بين جدران صخرية شديدة الانحدار' },
    officialLinks: [
      { label: 'US Department of State: North Korea Travel Advisory', url: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/north-korea-travel-advisory.html' },
      { label: 'Koryo Tours: Mount Myohyang travel guide', url: 'https://koryogroup.com/travel-guide/mt-myohyang-north-korea-north-korea-travel-guide' },
    ],
  },
];
