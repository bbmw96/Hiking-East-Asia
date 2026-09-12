# Trail backlog: candidates for future deep-dive research

This is a **research list only**, not site content. Nothing here has been
verified to the site's normal standard (WebSearch-confirmed coordinates,
current permit process, live fee, current closure status, six-locale
translation). It exists so a future session can be told "do Thailand now"
and start from a real shortlist instead of researching from zero.

**How to use this file:** pick a country section, pick entries, and run the
same research-and-write process already used for the existing deep-dive
files (`src/data/<country>-deepdive.ts`, `src/data/malaysia-kl-cluster.ts`,
`src/data/singapore-nature-parks.ts`): WebSearch each candidate for current
coordinates, elevation, permit authority and process, fee, season/closure
status, then write the full six-locale `Area` entry, run `npm run build` and
`npm run test`, and open a PR. Do not skip the verification step just
because a name is already on this list — a name being here means "worth
researching," not "confirmed." A handful of entries are flagged with their
own caveat (closure status to re-check, possible overlap with an existing
area, region attribution to double-check) — read those before starting.

**No list like this is ever finished.** Malaysia alone has hundreds of
gazetted forest reserves; this covers what turned up as genuinely notable in
a broad research pass per country, organised by state/region/province so
gaps are visible at a glance. It is not, and cannot be, literally every
trail that exists.

**Status markers:**
- Each country section opens with what's already live on the site (with
  slugs), so nothing here gets duplicated.
- Every other line is an unverified backlog candidate, grouped by
  state/region/province, with a one-line note on why it's there.

Last compiled: 2026-09-12.

---

## Summary

| Country | Live areas | Backlog candidates below |
|---|---|---|
| Malaysia | 22 | ~26, across 8 states with thin or zero coverage |
| Singapore | 10 | 6 |
| Thailand | 8 | 7 |
| Indonesia | 6 | 9 |
| Vietnam | 6 | 6 |
| Philippines | 6 | 7 |
| Brunei | 6 | 4 |
| Japan | 6 | 13 |
| South Korea | 4 | 5 |
| Taiwan | 4 | 5 |
| Hong Kong | 4 | 3 |
| China (mainland) | 4 | 10 |
| North Korea | 1 | 3 (genuinely short list — see that section) |

---

## Malaysia — 22 areas live

Live: Mount Kinabalu (`mount-kinabalu`), Taman Negara (`taman-negara`),
Cameron Highlands (`cameron-highlands`), Gunung Mulu (`gunung-mulu`), Penang
National Park (`penang-national-park`), Bukit Gasing (`bukit-gasing`), Gua
Tempurung (`gua-tempurung`), Gua Batu Maloi (`gua-batu-maloi`), Gunung Angsi
(`gunung-angsi`), Upper Baram (`upper-baram`), Gunung Nuang (`gunung-nuang`),
Bukit Tabur (`bukit-tabur`), Broga Hill (`broga-hill`), Gunung Ledang
(`gunung-ledang`), Bako National Park (`bako-national-park`), Gunung Raya
(`gunung-raya`), Fraser's Hill Pine Tree Trail (`frasers-hill-pine-tree`),
Bukit Kutu (`bukit-kutu`), Gunung Datuk (`gunung-datuk`), Templer Park
(`templer-park`), FRIM Kepong (`frim-kepong`), Gunung Rajah (`gunung-rajah`).

### Sabah — thin (only Kinabalu covered)
- [ ] Mount Trusmadi (Ranau/Tambunan district) — Malaysia's 2nd-highest peak, 2,642 m, multi-day, far less crowded than Kinabalu
- [ ] Mount Tambuyukon — Sabah's 4th-highest, 2,579 m, 4D3N through genuine lowland/hill dipterocarp forest, hard/very hard
- [ ] Maliau Basin Conservation Area ("The Lost World") — Maliau Falls, multi-day, remote, permit-controlled
- [ ] Tawau Hills Park — giant trees, sulphur springs, Table & Gelas waterfalls, easier day-trip option for range

### Sarawak — thin (only 3 covered: Mulu, Bako, Upper Baram)
- [ ] Mount Santubong — 810 m, steep/rocky with ropes and ladders, near Kuching
- [ ] Kubah National Park (Mount Serapi) — 19 trails incl. Rayu, Waterfall, Belian; paved summit path
- [ ] Lambir Hills National Park — 12 trails, waterfalls, near Miri
- [ ] Bario / Kelabit Highlands — remote highland trekking base, Penan/Kelabit community access (cross-check against Upper Baram for overlap before writing)

### Johor — thin (only Gunung Ledang covered)
- [ ] Gunung Muntahak — Johor's highest at 634 m (note: sources disagree with "highest" framing vs Gunung Belumut's 1,010 m — verify), Tengkil Waterfall, rugged/untouched
- [ ] Gunung Panti (Panti Forest Reserve) — two trails, Forest Trail more popular, permit needed (Johor Forestry Dept or guided)
- [ ] Gunung Belumut — ~1,010 m, steeper/higher than Panti/Lambak, full-day, three campsites en route

### Terengganu — not covered at all
- [ ] Gunung Tebu — Terengganu's tallest, trailhead at Hutan Lipur Lata Belatan (Besut), steep/sustained, not for beginners
- [ ] Bukit Keluang — coastal hill, 141 m, South China Sea views, sea caves, easy
- [ ] Chemerong-Berembun-Langsir (CBL) traverse — multi-peak ridge route, for range/difficulty variety

### Kelantan — not covered at all
- [ ] Gunung Stong State Park — 1,422 m, seven peaks (Ayam, Stong, Tera, Saji, Koh, Baha, Beirut, Che Tahir), Jelawang Waterfall (one of SE Asia's tallest), permit + guide required
- [ ] Bukit Salor (Jeli) — two viewpoints, short/easy, good beginner option for the state

### Perak — thin (only Gua Tempurung covered)
- [ ] Gunung Korbu — Titiwangsa range's highest peak, 2nd-highest in Peninsular Malaysia, multi-day only (forestry-imposed ban on single-day/time-compressed attempts)
- [ ] Gunung Bujang Melaka — Hutan Rizab Kampar, ~6.5-7h, highly challenging, permit required

### Perlis — not covered at all
- [ ] Wang Kelian / Pintu Wang Gunung — transboundary Malaysia-Thailand trekking route, permit from Forestry Dept, steep (up to 45°)
- [ ] Bukit Chabang — one of Peninsular Malaysia's hardest trails, near-80° rock climbs, veteran hikers only
- [ ] Bukit Jernih — easier, good tent/hammock camping spots

### Pahang — has Taman Negara (general), Cameron Highlands, Fraser's Hill, Gunung Rajah, but missing the flagship peak
- [ ] Gunung Tahan — Peninsular Malaysia's highest peak (2,187 m), inside Taman Negara, 7-9 day expedition, mandatory licensed guide, no solo hiking; deserves its own entry distinct from the general Taman Negara area page since it's a wholly different multi-day undertaking

### Kedah — thin (only Gunung Raya on Langkawi covered)
- [ ] Gunung Jerai — 1,217 m, five routes of varying difficulty/permit needs (geopark), waterfalls, mossy forest
- [ ] Gunung Bintang (Ulu Sedim) — high elevation gain, less mainstream
- [ ] Gunung Machinchang (Langkawi) — second Langkawi peak alongside the already-covered Gunung Raya, for contrast

### Melaka — not researched
- [ ] Limited genuine hiking terrain (historic city state); worth one further research pass before assuming there's nothing, but do not force a padding entry if there truly isn't a real trail

### Negeri Sembilan / Selangor — already reasonably deep (3 + 10 areas)
Worth a light pass later for anything missed (e.g. Gunung Berembun, Gunung
Irau near Fraser's Hill) rather than a priority.

## Singapore — 10 areas live

Live: Central Catchment (`central-catchment`), Bukit Timah (`bukit-timah`),
Southern Ridges (`southern-ridges`), Pulau Ubin/Chek Jawa
(`pulau-ubin-chek-jawa`), Sungei Buloh (`sungei-buloh`), Rail Corridor
(`rail-corridor`), Labrador Nature Reserve (`labrador-nature-reserve`),
Dairy Farm Nature Park (`dairy-farm-nature-park`), Coney Island Park
(`coney-island-park`), Pasir Ris Mangrove Boardwalk (`pasir-ris-mangrove`).

- [ ] Fort Canning Park — city-centre hilltop park, 8 trails, easy, historical rather than wild (e.g. "Trees of the Fort Trail", 2 km)
- [ ] Hindhede Nature Park — adjoins Bukit Timah, family-friendly gentler incline, 1900s quarry view; check for meaningful non-overlap with the existing Bukit Timah entry before writing
- [ ] Bishan-Ang Mo Kio Park — 62 ha urban park, naturalised Kallang River, easy, more a park walk than a hike but fits the site's "easy" tier pattern
- [ ] Springleaf Nature Park — newer (2021) park near Upper Seletar Reservoir, along Thomson-East Coast MRT line
- [ ] Admiralty Park — Woodlands, mangrove/forest boardwalk, less documented, needs its own research pass to confirm it clears the bar
- [ ] Kent Ridge Park / Berlayer Creek mangrove boardwalk — technically part of the Southern Ridges chain already covered; verify whether it needs a standalone entry or is already implicitly covered before writing

## Thailand — 8 areas live

Live: Doi Inthanon (`doi-inthanon`), Khao Yai (`khao-yai`), Khao Sok
(`khao-sok`), Doi Suthep-Pui (`doi-suthep-pui`), Erawan (`erawan`), Phu
Kradueng (`phu-kradueng`), Doi Chiang Dao (`doi-chiang-dao`), Khao Phanom
Bencha (`khao-phanom-bencha`).

### North (beyond Doi Inthanon/Suthep-Pui/Chiang Dao already covered)
- [ ] Doi Pha Hom Pok National Park (Fang, Chiang Mai) — Thailand's 2nd-highest peak, 2,285 m, best Nov-May
- [ ] Sri Lanna National Park (Mae Taeng, Chiang Mai) — one of Thailand's larger parks
- [ ] Mae Wong National Park — noted separately, needs its own research pass

### South / islands (currently zero coverage south of Khao Sok)
- [ ] Khao Sam Roi Yot National Park — limestone "300 peaks," Phraya Nakhon Cave sunbeam phenomenon
- [ ] Mu Ko Similan National Park — 11-island cluster, day-trip only (no overnight), open 15 Oct-15 May
- [ ] Ao Phang Nga National Park — limestone karst bay, best explored by sea kayak rather than on foot; verify it fits the site's hiking focus before writing, or treat as a paddling-adjacent walk
- [ ] Tarutao National Park — 51-island archipelago, southernmost Thailand

## Indonesia — 6 areas live

Live: Rinjani (`rinjani`), Bromo (`bromo`), Ijen (`ijen`), Batur (`batur`),
Kelimutu (`kelimutu`), Bantimurung-Bulusaraung (`bantimurung-bulusaraung`).

### Java (currently only Bromo/Ijen covered, both East Java)
- [ ] Mount Semeru — Java's highest peak, 3,676 m, 2-day standard route via Ranu Kumbolo lake; note current status (had a period of closure/no-summit-access due to volcanic activity in past years, verify before writing)
- [ ] Mount Merapi — one of Indonesia's most active volcanoes, Central Java, demanding, check current activity/closure status carefully given eruption frequency
- [ ] Mount Papandayan (Garut, West Java) — beginner/family-friendly, short accessible routes
- [ ] Mount Prau (Dieng Plateau, Central Java) — increasingly popular, good range-filler

### Sumatra — deliberately excluded from the September 2026 deep-dive (PR #32) due to active wildfire closures across nine national parks
- [ ] Mount Kerinci (Kerinci Seblat NP) — Indonesia's highest volcano; re-check closure status before researching, since Kerinci Seblat was one of the parks closed as of September 2026
- [ ] Mount Tujuh / Mount Masurai / Mount Nokilalaki — other Kerinci Seblat routes, same closure caveat applies

### Sulawesi (only Bantimurung-Bulusaraung covered, South Sulawesi)
- [ ] Gunung Latimojong (Buntu Rantemario) — South Sulawesi's highest peak, 8 staging points from Karangan village

### Papua — zero coverage, and deliberately hard to reach
- [ ] Puncak Jaya / Carstensz Pyramid (Lorentz National Park) — Indonesia and Australasia's highest peak, ~4,884 m, technical, extremely remote and expensive; worth a research pass but likely to end up flagged as "beyond this site's realistic scope" rather than written up as a normal Area

## Vietnam — 6 areas live

Live: Fansipan (`fansipan`), Cat Ba (`cat-ba`), Pu Luong (`pu-luong`), Ba Vi
(`ba-vi`), Phong Nha-Ke Bang (`phong-nha-ke-bang`), Lang Biang (`lang-biang`).

### North (beyond Fansipan/Cat Ba/Pu Luong/Ba Vi already covered)
- [ ] Sapa's other treks (Cat Cat Village, Lao Chai-Ta Van) — easy/moderate village + rice-terrace routes, distinct from the Fansipan summit push already covered; worth one standalone entry rather than duplicating Fansipan
- [ ] Ha Giang Loop trekking region — karst mountains, ethnic minority villages, rice terraces (Jul-Sep), "final frontier" far north

### Central Vietnam — currently zero coverage
- [ ] Bach Ma National Park (near Da Nang/Hue) — well-marked day hikes, Hai Vong Dai summit, Do Quyen waterfall, Five Lakes
- [ ] Ta Nang-Phan Dung trek — long-distance (35-55 km) route across Lam Dong/Ninh Thuan/Binh Thuan provinces

### South (beyond Lang Biang already covered)
- [ ] Nui Ba Den (Tay Ninh, "Black Virgin Mountain") — southern Vietnam's highest peak, popular day trip from Ho Chi Minh City
- [ ] Nam Cat Tien National Park — southern lowland jungle, guide required/recommended, Dec-May best

## Philippines — 6 areas live

Live: Mount Pulag (`mount-pulag`), Mount Pinatubo (`mount-pinatubo`), Mount
Apo (`mount-apo`), Mount Batulao (`mount-batulao`), Osmeña Peak
(`osmena-peak`), Mount Tapyas (`mount-tapyas`).

### Luzon (beyond Pulag/Pinatubo/Batulao already covered)
- [ ] Mount Ulap (Itogon, Benguet) — ~45 min from Baguio, Cordillera views, Igorot cultural sites (burial caves, hanging bridges), good day-hike range-filler
- [ ] Mount Pico de Loro / Palay-Palay (Cavite/Batangas border) — dormant volcano, distinctive "Parrot's Beak" monolith
- [ ] Mount Maculot (Cuenca, Batangas) — Rockies/Summit/Grotto sections, Taal Volcano views

### Visayas (only Osmeña Peak/Cebu currently covered)
- [ ] Mount Kitanglad — highest peak in the Bukidnon range (note: search described it as "highest in Visayas," which conflicts with it actually being in Mindanao — verify region/province carefully before writing, since the site's structured-hierarchy test is strict about this)
- [ ] Mount Talinis / Cuernos de Negros (Negros) — 1,903 m, full-day, Lake Balinsasayao and Lake Danao nearby

### Mindanao (only Mount Apo currently covered)
- [ ] Mount Hibok-Hibok (Camiguin) — active stratovolcano, 1,332 m, moderate, 5-7h
- [ ] Mount Dulang-Dulang — Philippines' 2nd-highest peak, Bukidnon, Mount Kitanglad range

## Brunei — 6 areas live

Live: Ulu Temburong (`ulu-temburong`), Bukit Patoi (`bukit-patoi`), Bukit
Shahbandar (`bukit-shahbandar`), Tasek Merimbun (`tasek-merimbun`), Bukit
Teraja (`bukit-teraja`), Luagan Lalak (`luagan-lalak`).

- [ ] Bukit Peradayan (Peradayan Forest Reserve) — twin hill to the already-covered Bukit Patoi (410 m vs Patoi's 310 m), same reserve; write only if genuinely distinct enough from the existing Bukit Patoi entry to earn its own page rather than a mention
- [ ] Wasai Kandal — waterfall hike, less documented, needs a dedicated research pass to confirm exact location/access before writing
- [ ] Bukit Sipatir — panoramic viewpoint, needs further research
- [ ] Bukit Dadap — Brunei River and forest views, needs further research

## Japan — 6 areas live

Live: Mount Fuji (`mount-fuji`), Kumano Kodo (`kumano-kodo`), Mount Takao
(`mount-takao`), Yakushima (`yakushima`), Kamikochi (`kamikochi`),
Daisetsuzan-Asahidake (`daisetsuzan-asahidake`).

### Hokkaido (beyond Daisetsuzan-Asahidake already covered)
- [ ] Mount Rishiri ("Rishiri-Fuji") — Rishiri-Rebun-Sarobetsu National Park, challenging summit, ferry-access island
- [ ] Mount Yotei ("Ezo-Fuji") — near Niseko, classic conical volcano
- [ ] Mount Mashu / Mount Meakan / Mount Poroshiri — eastern/central Hokkaido, less touristed

### Tohoku — currently zero coverage
- [ ] Mount Hakkoda (Aomori) — volcanic peaks, autumn colour and winter "snow monster" (juhyo) fame
- [ ] Mount Zao (Yamagata/Miyagi border) — crater lake (Okama), also winter juhyo
- [ ] Mount Iwate / Mount Bandai — further Tohoku volcanic peaks, need dedicated research

### Kansai (beyond Kumano Kodo already covered)
- [ ] Nakasendo Way (Magome-Tsumago section) — Edo-era post road through the Kiso Valley, UNESCO-adjacent cultural walking trail distinct from Kumano Kodo's pilgrimage framing

### Kyushu — currently zero coverage
- [ ] Mount Aso — Japan's largest volcano, Kusasenri/Suna Senri black sand desert loop
- [ ] Mount Miyanoura (Yakushima) — Kyushu's highest peak; check for meaningful non-overlap with the existing general Yakushima entry (Jomon Sugi cedar route) before writing as a separate page
- [ ] Mount Misen (Miyajima, Hiroshima — technically Chugoku not Kyushu, verify region) — 500 m, three courses (Momijidani, Daisho-in, Omoto), UNESCO World Heritage island setting

### Japan Alps (beyond Kamikochi already covered)
- [ ] Tateyama-Kurobe Alpine Route — 90 km route linking Toyama/Nagano, famous snow-wall corridor, Mount Tateyama (3,015 m); distinct experience from the Kamikochi valley walk already covered despite sharing Chubu-Sangaku National Park

## South Korea — 4 areas live

Live: Seoraksan (`seoraksan`), Jirisan (`jirisan`), Bukhansan (`bukhansan`),
Hallasan (`hallasan`).

- [ ] Odaesan National Park (Gangwon) — Daecheongbong Peak trail, largest wooded area in the country
- [ ] Songnisan National Park — Munjangdae Rock, Beopjusa temple, strong autumn-foliage destination
- [ ] Deogyusan National Park — "backbone of Korea's mountains," Chilyeon Valley/Waterfall
- [ ] Naejangsan National Park — autumn foliage flagship, Geumseon Valley Trail, Naejangsa Temple Trail
- [ ] Chiaksan National Park — Birobong summit, dense forest/gorge trails

## Taiwan — 4 areas live

Live: Yushan (`yushan`), Xueshan (`xueshan`), Hehuanshan East Peak
(`hehuanshan-east-peak`), Alishan (`alishan`).

- [ ] Zhuilu Old Trail (Taroko National Park) — indigenous Truku hunting-trail heritage, narrow cliffside ledge section, permit-controlled
- [ ] Lushui Trail (Taroko National Park) — 2 km, easy, all-ages, distinct difficulty tier from Zhuilu in the same park
- [ ] Qixingshan / Seven Star Mountain (Yangmingshan National Park) — 1,120 m, tallest peak in the park, volcanic, edge of Taipei
- [ ] Qingtiangang Grassland (Yangmingshan National Park) — easy loop, grassland, water buffalo, silvergrass in autumn
- [ ] Beidawushan — needs a dedicated research pass, not covered in this round

## Hong Kong — 4 areas live

Live: MacLehose Trail (`maclehose-trail`), Dragon's Back (`dragons-back`),
Lion Rock (`lion-rock`), Tai Mo Shan (`tai-mo-shan`).

- [ ] Wilson Trail — 78 km, 10 sections, Stanley Gap (HK Island) to Nam Chung (New Territories); genuinely distinct long-distance trail from MacLehose, worth its own entry rather than a mention
- [ ] Tai Long Wan (Sai Kung Peninsula) — ~12 km, half-day, secluded east-coast beach as the payoff; check overlap with MacLehose Section 1/2, which already passes through parts of Sai Kung, before writing
- [ ] Hong Kong Trail (Hong Kong Island) — the Island's own long-distance trail (distinct from Dragon's Back, which is one section of it) — verify the exact relationship before deciding whether it needs a standalone page

## China (mainland) — 4 areas live

Live: Huangshan (`huangshan`), Zhangjiajie (`zhangjiajie`), Emeishan
(`emeishan`), Yubeng (`yubeng`).

### Yunnan/Sichuan (beyond Yubeng already covered)
- [ ] Tiger Leaping Gorge (Lijiang, Yunnan) — 22 km, 2-day classic trek, one of the world's deepest canyons
- [ ] Jade Dragon Snow Mountain (Lijiang, Yunnan) — multiple scenic routes, glacier park
- [ ] Mount Siguniang ("Queen of Sichuan Mountains") — four peaks, glaciers, alpine meadows, experienced-hiker tier
- [ ] Jiuzhaigou Valley — multi-day, UNESCO World Heritage valley system

### Guangxi / Fujian — currently zero coverage
- [ ] Li River hiking route (Yangshuo to Xingping, Guilin) — classic karst-landscape walk, over 10 km
- [ ] Wuyishan (Fujian) — UNESCO World Natural and Cultural Heritage site

### Tibet / Qinghai / Xinjiang — currently zero coverage, and genuinely demanding logistics (permits, altitude, remoteness)
- [ ] Everest Base Camp trek (Tibet side) — 66 km, 4,000-5,350 m altitude range, major permit/logistics undertaking
- [ ] Kailash Kora (Mount Kailash circuit, Tibet) — multi-day, above 5,000 m, sacred-mountain pilgrimage route
- [ ] Kanas Lake (Hemu village to Kanas, Xinjiang) — 46 km, 3-day, autumn colour especially strong
- [ ] Amne Machin (Qinghai) — 6,282 m, remote, needs a dedicated research pass before deciding if it's realistically within scope

## North Korea — 1 area live

Live: Mount Myohyang (`mount-myohyang`).

North Korea's tourist-accessible hiking is genuinely limited to a small,
well-documented set of government-approved mountain areas reached only
through licensed tour operators, so this backlog is short by nature, not by
neglect.

- [ ] Mount Kumgang (Kumgangsan, "Diamond Mountains") — near the South Korean border, ~12 km trail, one of the most-visited (relatively) and most photographed mountain areas
- [ ] Mount Chilbo (Chilbosan) — north east, reached only by internal flight to Orang, Inner/Outer Chilbo regions, includes the country's only homestay experience
- [ ] Mount Paektu — North Korea's highest peak, culturally/politically significant site, verify current tour-access status carefully before writing since access rules for this specific mountain change

---
