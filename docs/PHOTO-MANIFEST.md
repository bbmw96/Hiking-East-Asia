# Photograph manifest

Every photograph the site can use, with the exact place it must be saved and the
search that finds it. Nothing here is a guess at a file URL: this session cannot
reach `commons.wikimedia.org`, `upload.wikimedia.org` or `images.unsplash.com`,
so it cannot verify that any particular file exists. Search and category links
are constructed from the place name and are therefore always valid to open, and
the choice of which photograph to take is left to you.

## How to use this

1. Open the search link for a row.
2. On Commons, set **Filter → Licence** to anything except "Non-free". Prefer
   **CC0**, **Public domain**, **CC BY** or **CC BY-SA**. Never take a photo
   marked "All rights reserved", "Fair use", or "Non-commercial only".
3. Download the **largest JPEG** offered.
4. Rename it to the **Target file** in the row and save it at that exact path.
5. Add one record to `src/data/photo-credits.json` using the **Credit key**:

   ```json
   "areas/malaysia/mount-kinabalu": {
     "title": "Mount Kinabalu from Kundasang",
     "author": "<the name credited on the file page>",
     "licence": "<the exact licence, e.g. CC BY-SA 4.0>",
     "sourceUrl": "<the file page URL you downloaded from>"
   }
   ```

The photograph appears only when its credit record exists, so a picture can
never be published without its attribution. Remove the record and the generated
terrain art returns. You can add them a few at a time; there is no need to do
all fifty before the first one shows.

**Sizing:** landscape, at least 1600px wide. Anything larger is fine, the build
does not resize, so keep files under about 900 KB each by exporting at quality
80 if the original is very large.

---

## Part 1 · Country backgrounds (12)

One iconic image per country, used behind the country page title.

| # | Country | Should show | Target file | Credit key | Search |
|---|---------|-------------|-------------|------------|--------|
| 1 | 🇲🇾 Malaysia | Mount Kinabalu | `public/photos/countries/malaysia.jpg` | `countries/malaysia` | [Commons](https://commons.wikimedia.org/w/index.php?search=Mount%20Kinabalu&title=Special:MediaSearch&type=image) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Mount%20Kinabalu) |
| 2 | 🇸🇬 Singapore | MacRitchie Reservoir | `public/photos/countries/singapore.jpg` | `countries/singapore` | [Commons](https://commons.wikimedia.org/w/index.php?search=MacRitchie%20Reservoir&title=Special:MediaSearch&type=image) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=MacRitchie%20Reservoir) |
| 3 | 🇹🇭 Thailand | Doi Inthanon | `public/photos/countries/thailand.jpg` | `countries/thailand` | [Commons](https://commons.wikimedia.org/w/index.php?search=Doi%20Inthanon&title=Special:MediaSearch&type=image) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Doi%20Inthanon) |
| 4 | 🇮🇩 Indonesia | Mount Bromo | `public/photos/countries/indonesia.jpg` | `countries/indonesia` | [Commons](https://commons.wikimedia.org/w/index.php?search=Mount%20Bromo&title=Special:MediaSearch&type=image) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Mount%20Bromo) |
| 5 | 🇻🇳 Vietnam | Fansipan | `public/photos/countries/vietnam.jpg` | `countries/vietnam` | [Commons](https://commons.wikimedia.org/w/index.php?search=Fansipan&title=Special:MediaSearch&type=image) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Fansipan) |
| 6 | 🇵🇭 Philippines | Mount Pulag sea of clouds | `public/photos/countries/philippines.jpg` | `countries/philippines` | [Commons](https://commons.wikimedia.org/w/index.php?search=Mount%20Pulag%20sea%20of%20clouds&title=Special:MediaSearch&type=image) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Mount%20Pulag%20sea%20of%20clouds) |
| 7 | 🇧🇳 Brunei | Ulu Temburong National Park canopy walkway | `public/photos/countries/brunei.jpg` | `countries/brunei` | [Commons](https://commons.wikimedia.org/w/index.php?search=Ulu%20Temburong%20National%20Park%20canopy%20walkway&title=Special:MediaSearch&type=image) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Ulu%20Temburong%20National%20Park%20canopy%20walkway) |
| 8 | 🇯🇵 Japan | Mount Fuji | `public/photos/countries/japan.jpg` | `countries/japan` | [Commons](https://commons.wikimedia.org/w/index.php?search=Mount%20Fuji&title=Special:MediaSearch&type=image) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Mount%20Fuji) |
| 9 | 🇰🇷 South Korea | Seoraksan | `public/photos/countries/south-korea.jpg` | `countries/south-korea` | [Commons](https://commons.wikimedia.org/w/index.php?search=Seoraksan&title=Special:MediaSearch&type=image) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Seoraksan) |
| 10 | 🇹🇼 Taiwan | Jade Mountain Yushan | `public/photos/countries/taiwan.jpg` | `countries/taiwan` | [Commons](https://commons.wikimedia.org/w/index.php?search=Jade%20Mountain%20Yushan&title=Special:MediaSearch&type=image) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Jade%20Mountain%20Yushan) |
| 11 | 🇭🇰 Hong Kong | Lion Rock Hong Kong | `public/photos/countries/hong-kong.jpg` | `countries/hong-kong` | [Commons](https://commons.wikimedia.org/w/index.php?search=Lion%20Rock%20Hong%20Kong&title=Special:MediaSearch&type=image) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Lion%20Rock%20Hong%20Kong) |
| 12 | 🇨🇳 Mainland China | Huangshan | `public/photos/countries/china.jpg` | `countries/china` | [Commons](https://commons.wikimedia.org/w/index.php?search=Huangshan&title=Special:MediaSearch&type=image) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Huangshan) |

---

## Part 2 · Trail area photographs (50)

### 🇲🇾 Malaysia (6)

| Area | Region | Should show | Target file | Credit key | Search |
|---|---|---|---|---|---|
| **Mount Kinabalu** | Sabah, Borneo<br><code>6.0754, 116.5583</code> | The summit or ridgeline (4,095 m), daylight, landscape orientation | `public/photos/areas/malaysia/mount-kinabalu.jpg` | `areas/malaysia/mount-kinabalu` | [Commons](https://commons.wikimedia.org/w/index.php?search=Mount%20Kinabalu%20Sabah%2C%20Borneo&title=Special:MediaSearch&type=image) · [Category](https://commons.wikimedia.org/wiki/Special:Search?search=incategory%3AMount_Kinabalu) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Mount%20Kinabalu) |
| **Taman Negara** | Pahang / Kelantan / Terengganu<br><code>4.3833, 102.4000</code> | The summit or ridgeline (2,187 m), daylight, landscape orientation | `public/photos/areas/malaysia/taman-negara.jpg` | `areas/malaysia/taman-negara` | [Commons](https://commons.wikimedia.org/w/index.php?search=Taman%20Negara%20Pahang%20%2F%20Kelantan%20%2F%20Terengganu&title=Special:MediaSearch&type=image) · [Category](https://commons.wikimedia.org/wiki/Special:Search?search=incategory%3ATaman_Negara) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Taman%20Negara) |
| **Cameron Highlands** | Pahang<br><code>4.4711, 101.3762</code> | The summit or ridgeline (2,031 m), daylight, landscape orientation | `public/photos/areas/malaysia/cameron-highlands.jpg` | `areas/malaysia/cameron-highlands` | [Commons](https://commons.wikimedia.org/w/index.php?search=Cameron%20Highlands%20Pahang&title=Special:MediaSearch&type=image) · [Category](https://commons.wikimedia.org/wiki/Special:Search?search=incategory%3ACameron_Highlands) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Cameron%20Highlands) |
| **Gunung Mulu National Park** | Sarawak, Borneo<br><code>4.0483, 114.8181</code> | The summit or ridgeline (2,377 m), daylight, landscape orientation | `public/photos/areas/malaysia/gunung-mulu.jpg` | `areas/malaysia/gunung-mulu` | [Commons](https://commons.wikimedia.org/w/index.php?search=Gunung%20Mulu%20National%20Park%20Sarawak%2C%20Borneo&title=Special:MediaSearch&type=image) · [Category](https://commons.wikimedia.org/wiki/Special:Search?search=incategory%3AGunung_Mulu_National_Park) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Gunung%20Mulu%20National%20Park) |
| **Penang National Park** | Penang<br><code>5.4611, 100.1978</code> | The summit or ridgeline (200 m), daylight, landscape orientation | `public/photos/areas/malaysia/penang-national-park.jpg` | `areas/malaysia/penang-national-park` | [Commons](https://commons.wikimedia.org/w/index.php?search=Penang%20National%20Park%20Penang&title=Special:MediaSearch&type=image) · [Category](https://commons.wikimedia.org/wiki/Special:Search?search=incategory%3APenang_National_Park) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Penang%20National%20Park) |
| **Bukit Gasing** | Selangor / Kuala Lumpur<br><code>3.1201, 101.6544</code> | The summit or ridgeline (195 m), daylight, landscape orientation | `public/photos/areas/malaysia/bukit-gasing.jpg` | `areas/malaysia/bukit-gasing` | [Commons](https://commons.wikimedia.org/w/index.php?search=Bukit%20Gasing%20Selangor%20%2F%20Kuala%20Lumpur&title=Special:MediaSearch&type=image) · [Category](https://commons.wikimedia.org/wiki/Special:Search?search=incategory%3ABukit_Gasing) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Bukit%20Gasing) |

### 🇸🇬 Singapore (4)

| Area | Region | Should show | Target file | Credit key | Search |
|---|---|---|---|---|---|
| **Central Catchment Nature Reserve** | Central Singapore<br><code>1.3413, 103.8300</code> | The trail, or the landscape it crosses, daylight, landscape orientation | `public/photos/areas/singapore/central-catchment.jpg` | `areas/singapore/central-catchment` | [Commons](https://commons.wikimedia.org/w/index.php?search=Central%20Catchment%20Nature%20Reserve%20Central%20Singapore&title=Special:MediaSearch&type=image) · [Category](https://commons.wikimedia.org/wiki/Special:Search?search=incategory%3ACentral_Catchment_Nature_Reserve) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Central%20Catchment%20Nature%20Reserve) |
| **Bukit Timah Nature Reserve** | Central Singapore<br><code>1.3548, 103.7767</code> | The summit or ridgeline (163 m), daylight, landscape orientation | `public/photos/areas/singapore/bukit-timah.jpg` | `areas/singapore/bukit-timah` | [Commons](https://commons.wikimedia.org/w/index.php?search=Bukit%20Timah%20Nature%20Reserve%20Central%20Singapore&title=Special:MediaSearch&type=image) · [Category](https://commons.wikimedia.org/wiki/Special:Search?search=incategory%3ABukit_Timah_Nature_Reserve) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Bukit%20Timah%20Nature%20Reserve) |
| **Southern Ridges** | Southern Singapore<br><code>1.2762, 103.8095</code> | The summit or ridgeline (105 m), daylight, landscape orientation | `public/photos/areas/singapore/southern-ridges.jpg` | `areas/singapore/southern-ridges` | [Commons](https://commons.wikimedia.org/w/index.php?search=Southern%20Ridges%20Southern%20Singapore&title=Special:MediaSearch&type=image) · [Category](https://commons.wikimedia.org/wiki/Special:Search?search=incategory%3ASouthern_Ridges) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Southern%20Ridges) |
| **Pulau Ubin & Chek Jawa Wetlands** | Eastern Singapore (offshore island)<br><code>1.4043, 103.9601</code> | The trail, or the landscape it crosses, daylight, landscape orientation | `public/photos/areas/singapore/pulau-ubin-chek-jawa.jpg` | `areas/singapore/pulau-ubin-chek-jawa` | [Commons](https://commons.wikimedia.org/w/index.php?search=Pulau%20Ubin%20%26%20Chek%20Jawa%20Wetlands%20Eastern%20Singapore%20(offshore%20island)&title=Special:MediaSearch&type=image) · [Category](https://commons.wikimedia.org/wiki/Special:Search?search=incategory%3APulau_Ubin_%26_Chek_Jawa_Wetlands) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Pulau%20Ubin%20%26%20Chek%20Jawa%20Wetlands) |

### 🇹🇭 Thailand (5)

| Area | Region | Should show | Target file | Credit key | Search |
|---|---|---|---|---|---|
| **Doi Inthanon National Park** | Chiang Mai<br><code>18.5883, 98.4867</code> | The summit or ridgeline (2,565 m), daylight, landscape orientation | `public/photos/areas/thailand/doi-inthanon.jpg` | `areas/thailand/doi-inthanon` | [Commons](https://commons.wikimedia.org/w/index.php?search=Doi%20Inthanon%20National%20Park%20Chiang%20Mai&title=Special:MediaSearch&type=image) · [Category](https://commons.wikimedia.org/wiki/Special:Search?search=incategory%3ADoi_Inthanon_National_Park) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Doi%20Inthanon%20National%20Park) |
| **Khao Yai National Park** | Nakhon Ratchasima<br><code>14.4381, 101.3728</code> | The summit or ridgeline (1,351 m), daylight, landscape orientation | `public/photos/areas/thailand/khao-yai.jpg` | `areas/thailand/khao-yai` | [Commons](https://commons.wikimedia.org/w/index.php?search=Khao%20Yai%20National%20Park%20Nakhon%20Ratchasima&title=Special:MediaSearch&type=image) · [Category](https://commons.wikimedia.org/wiki/Special:Search?search=incategory%3AKhao_Yai_National_Park) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Khao%20Yai%20National%20Park) |
| **Khao Sok National Park** | Surat Thani<br><code>8.9247, 98.5245</code> | The trail, or the landscape it crosses, daylight, landscape orientation | `public/photos/areas/thailand/khao-sok.jpg` | `areas/thailand/khao-sok` | [Commons](https://commons.wikimedia.org/w/index.php?search=Khao%20Sok%20National%20Park%20Surat%20Thani&title=Special:MediaSearch&type=image) · [Category](https://commons.wikimedia.org/wiki/Special:Search?search=incategory%3AKhao_Sok_National_Park) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Khao%20Sok%20National%20Park) |
| **Doi Suthep-Pui National Park** | Chiang Mai<br><code>18.8047, 98.9219</code> | The trail, or the landscape it crosses, daylight, landscape orientation | `public/photos/areas/thailand/doi-suthep-pui.jpg` | `areas/thailand/doi-suthep-pui` | [Commons](https://commons.wikimedia.org/w/index.php?search=Doi%20Suthep-Pui%20National%20Park%20Chiang%20Mai&title=Special:MediaSearch&type=image) · [Category](https://commons.wikimedia.org/wiki/Special:Search?search=incategory%3ADoi_Suthep-Pui_National_Park) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Doi%20Suthep-Pui%20National%20Park) |
| **Erawan National Park** | Kanchanaburi<br><code>14.3687, 99.1416</code> | The trail, or the landscape it crosses, daylight, landscape orientation | `public/photos/areas/thailand/erawan.jpg` | `areas/thailand/erawan` | [Commons](https://commons.wikimedia.org/w/index.php?search=Erawan%20National%20Park%20Kanchanaburi&title=Special:MediaSearch&type=image) · [Category](https://commons.wikimedia.org/wiki/Special:Search?search=incategory%3AErawan_National_Park) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Erawan%20National%20Park) |

### 🇮🇩 Indonesia (4)

| Area | Region | Should show | Target file | Credit key | Search |
|---|---|---|---|---|---|
| **Mount Rinjani National Park** | Lombok<br><code>-8.4108, 116.4575</code> | The summit or ridgeline (3,726 m), daylight, landscape orientation | `public/photos/areas/indonesia/rinjani.jpg` | `areas/indonesia/rinjani` | [Commons](https://commons.wikimedia.org/w/index.php?search=Mount%20Rinjani%20National%20Park%20Lombok&title=Special:MediaSearch&type=image) · [Category](https://commons.wikimedia.org/wiki/Special:Search?search=incategory%3AMount_Rinjani_National_Park) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Mount%20Rinjani%20National%20Park) |
| **Mount Bromo & the Sea of Sand** | East Java<br><code>-7.9425, 112.9530</code> | The summit or ridgeline (2,329 m), daylight, landscape orientation | `public/photos/areas/indonesia/bromo.jpg` | `areas/indonesia/bromo` | [Commons](https://commons.wikimedia.org/w/index.php?search=Mount%20Bromo%20%26%20the%20Sea%20of%20Sand%20East%20Java&title=Special:MediaSearch&type=image) · [Category](https://commons.wikimedia.org/wiki/Special:Search?search=incategory%3AMount_Bromo_%26_the_Sea_of_Sand) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Mount%20Bromo%20%26%20the%20Sea%20of%20Sand) |
| **Kawah Ijen (Ijen Crater)** | East Java<br><code>-8.0581, 114.2422</code> | The summit or ridgeline (2,799 m), daylight, landscape orientation | `public/photos/areas/indonesia/ijen.jpg` | `areas/indonesia/ijen` | [Commons](https://commons.wikimedia.org/w/index.php?search=Kawah%20Ijen%20(Ijen%20Crater)%20East%20Java&title=Special:MediaSearch&type=image) · [Category](https://commons.wikimedia.org/wiki/Special:Search?search=incategory%3AKawah_Ijen_(Ijen_Crater)) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Kawah%20Ijen%20(Ijen%20Crater)) |
| **Mount Batur** | Bali<br><code>-8.2422, 115.3752</code> | The summit or ridgeline (1,717 m), daylight, landscape orientation | `public/photos/areas/indonesia/batur.jpg` | `areas/indonesia/batur` | [Commons](https://commons.wikimedia.org/w/index.php?search=Mount%20Batur%20Bali&title=Special:MediaSearch&type=image) · [Category](https://commons.wikimedia.org/wiki/Special:Search?search=incategory%3AMount_Batur) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Mount%20Batur) |

### 🇻🇳 Vietnam (4)

| Area | Region | Should show | Target file | Credit key | Search |
|---|---|---|---|---|---|
| **Mount Fansipan** | Sapa, Lao Cai<br><code>22.3033, 103.7752</code> | The summit or ridgeline (3,143 m), daylight, landscape orientation | `public/photos/areas/vietnam/fansipan.jpg` | `areas/vietnam/fansipan` | [Commons](https://commons.wikimedia.org/w/index.php?search=Mount%20Fansipan%20Sapa%2C%20Lao%20Cai&title=Special:MediaSearch&type=image) · [Category](https://commons.wikimedia.org/wiki/Special:Search?search=incategory%3AMount_Fansipan) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Mount%20Fansipan) |
| **Cat Ba National Park** | Hai Phong<br><code>20.7997, 107.0378</code> | The summit or ridgeline (331 m), daylight, landscape orientation | `public/photos/areas/vietnam/cat-ba.jpg` | `areas/vietnam/cat-ba` | [Commons](https://commons.wikimedia.org/w/index.php?search=Cat%20Ba%20National%20Park%20Hai%20Phong&title=Special:MediaSearch&type=image) · [Category](https://commons.wikimedia.org/wiki/Special:Search?search=incategory%3ACat_Ba_National_Park) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Cat%20Ba%20National%20Park) |
| **Pu Luong Nature Reserve** | Thanh Hoa<br><code>20.4167, 105.1500</code> | The trail, or the landscape it crosses, daylight, landscape orientation | `public/photos/areas/vietnam/pu-luong.jpg` | `areas/vietnam/pu-luong` | [Commons](https://commons.wikimedia.org/w/index.php?search=Pu%20Luong%20Nature%20Reserve%20Thanh%20Hoa&title=Special:MediaSearch&type=image) · [Category](https://commons.wikimedia.org/wiki/Special:Search?search=incategory%3APu_Luong_Nature_Reserve) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Pu%20Luong%20Nature%20Reserve) |
| **Ba Vi National Park** | Hanoi<br><code>21.0833, 105.3667</code> | The summit or ridgeline (1,296 m), daylight, landscape orientation | `public/photos/areas/vietnam/ba-vi.jpg` | `areas/vietnam/ba-vi` | [Commons](https://commons.wikimedia.org/w/index.php?search=Ba%20Vi%20National%20Park%20Hanoi&title=Special:MediaSearch&type=image) · [Category](https://commons.wikimedia.org/wiki/Special:Search?search=incategory%3ABa_Vi_National_Park) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Ba%20Vi%20National%20Park) |

### 🇵🇭 Philippines (4)

| Area | Region | Should show | Target file | Credit key | Search |
|---|---|---|---|---|---|
| **Mount Pulag National Park** | Benguet / Ifugao, Luzon<br><code>16.5989, 120.8994</code> | The summit or ridgeline (2,922 m), daylight, landscape orientation | `public/photos/areas/philippines/mount-pulag.jpg` | `areas/philippines/mount-pulag` | [Commons](https://commons.wikimedia.org/w/index.php?search=Mount%20Pulag%20National%20Park%20Benguet%20%2F%20Ifugao%2C%20Luzon&title=Special:MediaSearch&type=image) · [Category](https://commons.wikimedia.org/wiki/Special:Search?search=incategory%3AMount_Pulag_National_Park) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Mount%20Pulag%20National%20Park) |
| **Mount Pinatubo** | Tarlac / Zambales<br><code>15.1429, 120.3496</code> | The summit or ridgeline (1,486 m), daylight, landscape orientation | `public/photos/areas/philippines/mount-pinatubo.jpg` | `areas/philippines/mount-pinatubo` | [Commons](https://commons.wikimedia.org/w/index.php?search=Mount%20Pinatubo%20Tarlac%20%2F%20Zambales&title=Special:MediaSearch&type=image) · [Category](https://commons.wikimedia.org/wiki/Special:Search?search=incategory%3AMount_Pinatubo) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Mount%20Pinatubo) |
| **Mount Apo Natural Park** | Davao / North Cotabato, Mindanao<br><code>6.9873, 125.2727</code> | The summit or ridgeline (2,954 m), daylight, landscape orientation | `public/photos/areas/philippines/mount-apo.jpg` | `areas/philippines/mount-apo` | [Commons](https://commons.wikimedia.org/w/index.php?search=Mount%20Apo%20Natural%20Park%20Davao%20%2F%20North%20Cotabato%2C%20Mindanao&title=Special:MediaSearch&type=image) · [Category](https://commons.wikimedia.org/wiki/Special:Search?search=incategory%3AMount_Apo_Natural_Park) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Mount%20Apo%20Natural%20Park) |
| **Mount Batulao** | Nasugbu, Batangas<br><code>14.0492, 120.7967</code> | The summit or ridgeline (811 m), daylight, landscape orientation | `public/photos/areas/philippines/mount-batulao.jpg` | `areas/philippines/mount-batulao` | [Commons](https://commons.wikimedia.org/w/index.php?search=Mount%20Batulao%20Nasugbu%2C%20Batangas&title=Special:MediaSearch&type=image) · [Category](https://commons.wikimedia.org/wiki/Special:Search?search=incategory%3AMount_Batulao) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Mount%20Batulao) |

### 🇧🇳 Brunei (3)

| Area | Region | Should show | Target file | Credit key | Search |
|---|---|---|---|---|---|
| **Ulu Temburong National Park** | Temburong District<br><code>4.5333, 115.1500</code> | The trail, or the landscape it crosses, daylight, landscape orientation | `public/photos/areas/brunei/ulu-temburong.jpg` | `areas/brunei/ulu-temburong` | [Commons](https://commons.wikimedia.org/w/index.php?search=Ulu%20Temburong%20National%20Park%20Temburong%20District&title=Special:MediaSearch&type=image) · [Category](https://commons.wikimedia.org/wiki/Special:Search?search=incategory%3AUlu_Temburong_National_Park) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Ulu%20Temburong%20National%20Park) |
| **Bukit Patoi, Peradayan Forest Reserve** | Temburong District<br><code>4.6608, 115.1206</code> | The summit or ridgeline (310 m), daylight, landscape orientation | `public/photos/areas/brunei/bukit-patoi.jpg` | `areas/brunei/bukit-patoi` | [Commons](https://commons.wikimedia.org/w/index.php?search=Bukit%20Patoi%2C%20Peradayan%20Forest%20Reserve%20Temburong%20District&title=Special:MediaSearch&type=image) · [Category](https://commons.wikimedia.org/wiki/Special:Search?search=incategory%3ABukit_Patoi%2C_Peradayan_Forest_Reserve) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Bukit%20Patoi%2C%20Peradayan%20Forest%20Reserve) |
| **Bukit Shahbandar Forest Recreation Park** | Brunei-Muara District<br><code>4.9667, 114.7333</code> | The trail, or the landscape it crosses, daylight, landscape orientation | `public/photos/areas/brunei/bukit-shahbandar.jpg` | `areas/brunei/bukit-shahbandar` | [Commons](https://commons.wikimedia.org/w/index.php?search=Bukit%20Shahbandar%20Forest%20Recreation%20Park%20Brunei-Muara%20District&title=Special:MediaSearch&type=image) · [Category](https://commons.wikimedia.org/wiki/Special:Search?search=incategory%3ABukit_Shahbandar_Forest_Recreation_Park) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Bukit%20Shahbandar%20Forest%20Recreation%20Park) |

### 🇯🇵 Japan (4)

| Area | Region | Should show | Target file | Credit key | Search |
|---|---|---|---|---|---|
| **Mount Fuji** | Yamanashi / Shizuoka<br><code>35.3606, 138.7274</code> | The summit or ridgeline (3,776 m), daylight, landscape orientation | `public/photos/areas/japan/mount-fuji.jpg` | `areas/japan/mount-fuji` | [Commons](https://commons.wikimedia.org/w/index.php?search=Mount%20Fuji%20Yamanashi%20%2F%20Shizuoka&title=Special:MediaSearch&type=image) · [Category](https://commons.wikimedia.org/wiki/Special:Search?search=incategory%3AMount_Fuji) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Mount%20Fuji) |
| **Kumano Kodo (Nakahechi Route)** | Wakayama, Kii Peninsula<br><code>33.8375, 135.7728</code> | The trail, or the landscape it crosses, daylight, landscape orientation | `public/photos/areas/japan/kumano-kodo.jpg` | `areas/japan/kumano-kodo` | [Commons](https://commons.wikimedia.org/w/index.php?search=Kumano%20Kodo%20(Nakahechi%20Route)%20Wakayama%2C%20Kii%20Peninsula&title=Special:MediaSearch&type=image) · [Category](https://commons.wikimedia.org/wiki/Special:Search?search=incategory%3AKumano_Kodo_(Nakahechi_Route)) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Kumano%20Kodo%20(Nakahechi%20Route)) |
| **Mount Takao** | Tokyo<br><code>35.6255, 139.2431</code> | The summit or ridgeline (599 m), daylight, landscape orientation | `public/photos/areas/japan/mount-takao.jpg` | `areas/japan/mount-takao` | [Commons](https://commons.wikimedia.org/w/index.php?search=Mount%20Takao%20Tokyo&title=Special:MediaSearch&type=image) · [Category](https://commons.wikimedia.org/wiki/Special:Search?search=incategory%3AMount_Takao) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Mount%20Takao) |
| **Yakushima (Jomon Sugi Trail)** | Kagoshima<br><code>30.3494, 130.5228</code> | The summit or ridgeline (1,300 m), daylight, landscape orientation | `public/photos/areas/japan/yakushima.jpg` | `areas/japan/yakushima` | [Commons](https://commons.wikimedia.org/w/index.php?search=Yakushima%20(Jomon%20Sugi%20Trail)%20Kagoshima&title=Special:MediaSearch&type=image) · [Category](https://commons.wikimedia.org/wiki/Special:Search?search=incategory%3AYakushima_(Jomon_Sugi_Trail)) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Yakushima%20(Jomon%20Sugi%20Trail)) |

### 🇰🇷 South Korea (4)

| Area | Region | Should show | Target file | Credit key | Search |
|---|---|---|---|---|---|
| **Seoraksan National Park** | Gangwon<br><code>38.1197, 128.4656</code> | The summit or ridgeline (1,708 m), daylight, landscape orientation | `public/photos/areas/south-korea/seoraksan.jpg` | `areas/south-korea/seoraksan` | [Commons](https://commons.wikimedia.org/w/index.php?search=Seoraksan%20National%20Park%20Gangwon&title=Special:MediaSearch&type=image) · [Category](https://commons.wikimedia.org/wiki/Special:Search?search=incategory%3ASeoraksan_National_Park) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Seoraksan%20National%20Park) |
| **Jirisan National Park** | Jeolla / Gyeongsang<br><code>35.3372, 127.7306</code> | The summit or ridgeline (1,915 m), daylight, landscape orientation | `public/photos/areas/south-korea/jirisan.jpg` | `areas/south-korea/jirisan` | [Commons](https://commons.wikimedia.org/w/index.php?search=Jirisan%20National%20Park%20Jeolla%20%2F%20Gyeongsang&title=Special:MediaSearch&type=image) · [Category](https://commons.wikimedia.org/wiki/Special:Search?search=incategory%3AJirisan_National_Park) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Jirisan%20National%20Park) |
| **Bukhansan National Park** | Seoul<br><code>37.6585, 126.9772</code> | The summit or ridgeline (837 m), daylight, landscape orientation | `public/photos/areas/south-korea/bukhansan.jpg` | `areas/south-korea/bukhansan` | [Commons](https://commons.wikimedia.org/w/index.php?search=Bukhansan%20National%20Park%20Seoul&title=Special:MediaSearch&type=image) · [Category](https://commons.wikimedia.org/wiki/Special:Search?search=incategory%3ABukhansan_National_Park) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Bukhansan%20National%20Park) |
| **Hallasan National Park** | Jeju<br><code>33.3617, 126.5292</code> | The summit or ridgeline (1,947 m), daylight, landscape orientation | `public/photos/areas/south-korea/hallasan.jpg` | `areas/south-korea/hallasan` | [Commons](https://commons.wikimedia.org/w/index.php?search=Hallasan%20National%20Park%20Jeju&title=Special:MediaSearch&type=image) · [Category](https://commons.wikimedia.org/wiki/Special:Search?search=incategory%3AHallasan_National_Park) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Hallasan%20National%20Park) |

### 🇹🇼 Taiwan (4)

| Area | Region | Should show | Target file | Credit key | Search |
|---|---|---|---|---|---|
| **Yushan (Jade Mountain)** | Nantou / Chiayi<br><code>23.4707, 120.9578</code> | The summit or ridgeline (3,952 m), daylight, landscape orientation | `public/photos/areas/taiwan/yushan.jpg` | `areas/taiwan/yushan` | [Commons](https://commons.wikimedia.org/w/index.php?search=Yushan%20(Jade%20Mountain)%20Nantou%20%2F%20Chiayi&title=Special:MediaSearch&type=image) · [Category](https://commons.wikimedia.org/wiki/Special:Search?search=incategory%3AYushan_(Jade_Mountain)) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Yushan%20(Jade%20Mountain)) |
| **Xueshan (Snow Mountain)** | Miaoli / Taichung<br><code>24.3831, 121.2214</code> | The summit or ridgeline (3,886 m), daylight, landscape orientation | `public/photos/areas/taiwan/xueshan.jpg` | `areas/taiwan/xueshan` | [Commons](https://commons.wikimedia.org/w/index.php?search=Xueshan%20(Snow%20Mountain)%20Miaoli%20%2F%20Taichung&title=Special:MediaSearch&type=image) · [Category](https://commons.wikimedia.org/wiki/Special:Search?search=incategory%3AXueshan_(Snow_Mountain)) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Xueshan%20(Snow%20Mountain)) |
| **Hehuanshan East Peak** | Nantou<br><code>24.1447, 121.2789</code> | The summit or ridgeline (3,421 m), daylight, landscape orientation | `public/photos/areas/taiwan/hehuanshan-east-peak.jpg` | `areas/taiwan/hehuanshan-east-peak` | [Commons](https://commons.wikimedia.org/w/index.php?search=Hehuanshan%20East%20Peak%20Nantou&title=Special:MediaSearch&type=image) · [Category](https://commons.wikimedia.org/wiki/Special:Search?search=incategory%3AHehuanshan_East_Peak) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Hehuanshan%20East%20Peak) |
| **Alishan National Forest Recreation Area** | Chiayi<br><code>23.5122, 120.8034</code> | The summit or ridgeline (2,489 m), daylight, landscape orientation | `public/photos/areas/taiwan/alishan.jpg` | `areas/taiwan/alishan` | [Commons](https://commons.wikimedia.org/w/index.php?search=Alishan%20National%20Forest%20Recreation%20Area%20Chiayi&title=Special:MediaSearch&type=image) · [Category](https://commons.wikimedia.org/wiki/Special:Search?search=incategory%3AAlishan_National_Forest_Recreation_Area) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Alishan%20National%20Forest%20Recreation%20Area) |

### 🇭🇰 Hong Kong (4)

| Area | Region | Should show | Target file | Credit key | Search |
|---|---|---|---|---|---|
| **MacLehose Trail (Sections 1-2)** | Sai Kung, New Territories<br><code>22.3667, 114.3583</code> | The summit or ridgeline (314 m), daylight, landscape orientation | `public/photos/areas/hong-kong/maclehose-trail.jpg` | `areas/hong-kong/maclehose-trail` | [Commons](https://commons.wikimedia.org/w/index.php?search=MacLehose%20Trail%20(Sections%201-2)%20Sai%20Kung%2C%20New%20Territories&title=Special:MediaSearch&type=image) · [Category](https://commons.wikimedia.org/wiki/Special:Search?search=incategory%3AMacLehose_Trail_(Sections_1-2)) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=MacLehose%20Trail%20(Sections%201-2)) |
| **Dragon's Back** | Shek O Country Park, Hong Kong Island<br><code>22.2394, 114.2378</code> | The summit or ridgeline (284 m), daylight, landscape orientation | `public/photos/areas/hong-kong/dragons-back.jpg` | `areas/hong-kong/dragons-back` | [Commons](https://commons.wikimedia.org/w/index.php?search=Dragon's%20Back%20Shek%20O%20Country%20Park%2C%20Hong%20Kong%20Island&title=Special:MediaSearch&type=image) · [Category](https://commons.wikimedia.org/wiki/Special:Search?search=incategory%3ADragon's_Back) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Dragon's%20Back) |
| **Lion Rock** | Lion Rock Country Park, Kowloon<br><code>22.3517, 114.1822</code> | The summit or ridgeline (495 m), daylight, landscape orientation | `public/photos/areas/hong-kong/lion-rock.jpg` | `areas/hong-kong/lion-rock` | [Commons](https://commons.wikimedia.org/w/index.php?search=Lion%20Rock%20Lion%20Rock%20Country%20Park%2C%20Kowloon&title=Special:MediaSearch&type=image) · [Category](https://commons.wikimedia.org/wiki/Special:Search?search=incategory%3ALion_Rock) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Lion%20Rock) |
| **Tai Mo Shan** | Tai Mo Shan Country Park, New Territories<br><code>22.4103, 114.1247</code> | The summit or ridgeline (957 m), daylight, landscape orientation | `public/photos/areas/hong-kong/tai-mo-shan.jpg` | `areas/hong-kong/tai-mo-shan` | [Commons](https://commons.wikimedia.org/w/index.php?search=Tai%20Mo%20Shan%20Tai%20Mo%20Shan%20Country%20Park%2C%20New%20Territories&title=Special:MediaSearch&type=image) · [Category](https://commons.wikimedia.org/wiki/Special:Search?search=incategory%3ATai_Mo_Shan) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Tai%20Mo%20Shan) |

### 🇨🇳 Mainland China (4)

| Area | Region | Should show | Target file | Credit key | Search |
|---|---|---|---|---|---|
| **Huangshan (Yellow Mountain)** | Anhui<br><code>30.1339, 118.1664</code> | The summit or ridgeline (1,864 m), daylight, landscape orientation | `public/photos/areas/china/huangshan.jpg` | `areas/china/huangshan` | [Commons](https://commons.wikimedia.org/w/index.php?search=Huangshan%20(Yellow%20Mountain)%20Anhui&title=Special:MediaSearch&type=image) · [Category](https://commons.wikimedia.org/wiki/Special:Search?search=incategory%3AHuangshan_(Yellow_Mountain)) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Huangshan%20(Yellow%20Mountain)) |
| **Zhangjiajie (Wulingyuan)** | Hunan<br><code>29.3167, 110.4749</code> | The summit or ridgeline (1,262 m), daylight, landscape orientation | `public/photos/areas/china/zhangjiajie.jpg` | `areas/china/zhangjiajie` | [Commons](https://commons.wikimedia.org/w/index.php?search=Zhangjiajie%20(Wulingyuan)%20Hunan&title=Special:MediaSearch&type=image) · [Category](https://commons.wikimedia.org/wiki/Special:Search?search=incategory%3AZhangjiajie_(Wulingyuan)) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Zhangjiajie%20(Wulingyuan)) |
| **Mount Emei (Emeishan)** | Sichuan<br><code>29.5204, 103.3346</code> | The summit or ridgeline (3,079 m), daylight, landscape orientation | `public/photos/areas/china/emeishan.jpg` | `areas/china/emeishan` | [Commons](https://commons.wikimedia.org/w/index.php?search=Mount%20Emei%20(Emeishan)%20Sichuan&title=Special:MediaSearch&type=image) · [Category](https://commons.wikimedia.org/wiki/Special:Search?search=incategory%3AMount_Emei_(Emeishan)) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Mount%20Emei%20(Emeishan)) |
| **Yubeng Village (Meili Snow Mountain)** | Yunnan<br><code>28.3739, 98.7286</code> | The summit or ridgeline (3,100 m), daylight, landscape orientation | `public/photos/areas/china/yubeng.jpg` | `areas/china/yubeng` | [Commons](https://commons.wikimedia.org/w/index.php?search=Yubeng%20Village%20(Meili%20Snow%20Mountain)%20Yunnan&title=Special:MediaSearch&type=image) · [Category](https://commons.wikimedia.org/wiki/Special:Search?search=incategory%3AYubeng_Village_(Meili_Snow_Mountain)) · [Wikipedia](https://en.wikipedia.org/w/index.php?search=Yubeng%20Village%20(Meili%20Snow%20Mountain)) |

---

## Part 3 · Licence rules, in short

| Licence | May use | Must credit | Notes |
|---|---|---|---|
| CC0 / Public domain | Yes | Not required | Credit anyway; the manifest records it |
| CC BY | Yes | Author + licence + link | |
| CC BY-SA | Yes | Author + licence + link | Fine for a website |
| CC BY-NC / NC-SA | **No** | | Non-commercial only; a public site is safer without it |
| All rights reserved | **No** | | |
| Unsplash / Pexels | Yes | Not required, but do it | Their own licence, not Creative Commons |

The credit strip the site renders (title · author · licence, linked to the
source page) satisfies CC BY and CC BY-SA attribution as written.

