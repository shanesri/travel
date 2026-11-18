/* ===== ข้อมูลทริปทั้งหมด =====
   เพิ่มทริปใหม่ = เพิ่ม 1 ก้อนใน TRIPS (หน้าแรกจัดปี/สถิติ/Previous ให้เอง)
   year     ปีของแพลน (ทริปข้ามปีใส่ปีที่อยากให้นับ)
   start/end  YYYY-MM-DD (ใช้เรียงและย้ายไป Previous อัตโนมัติ) · ถ้ายังไม่รู้วันจริงใส่วันประมาณ
   cost     งบรวมสองคน (บาท) ใช้คิดสถิติรายปี
   price    ข้อความบนการ์ด · status ป้ายสถานะ
*/
const T='https://thumb.wikimedia.org/wikipedia/commons/thumb/';
window.TRIPS=[
 {slug:'act',year:2026,name:'Thin Air',place:'Annapurna Circuit + Tilicho',country:'เนปาล',start:'2026-04-06',end:'2026-04-19',when:'6 – 19 เม.ย. 2026',days:14,cost:108000,price:'~54k ฿ ต่อคน',tags:['เทรค 5,416 ม.','Thorong La','ทะเลสาบ Tilicho'],
  img:T+'4/47/Reflection_of_Tilicho_glacier_on_Tilicho_lake_at_4919_meters.jpg/1280px-Reflection_of_Tilicho_glacier_on_Tilicho_lake_at_4919_meters.jpg'},
 {slug:'sichuan',year:2027,name:'Snow & Spice',place:'เฉิงตู · ง้อไบ๊ · เล่อซาน · ชิงเฉิงซาน',country:'จีน',start:'2026-12-31',end:'2027-01-06',when:'31 ธ.ค. – 6 ม.ค.',days:7,cost:43000,price:'~43k ฿ สองคน',status:'จองครบ',tags:['เคาท์ดาวน์','เดินเขาหิมะ','พระใหญ่','หม่าล่า'],
  img:T+'4/4f/Golden_Summit_%28Jinding%29_%2817264931860%29.jpg/1280px-Golden_Summit_%28Jinding%29_%2817264931860%29.jpg'},
 {slug:'philippines',name:'Blue Hours',year:2027,place:'โมอัลโบอัล + ปังเลา',country:'ฟิลิปปินส์',start:'2027-04-10',end:'2027-04-17',when:'10 – 17 เม.ย.',days:8,cost:50000,price:'~50k ฿ สองคน',status:'แพลนแล้ว · ยังไม่จอง',tags:['ฟรีไดฟ์','ซาร์ดีน','เต่า'],
  img:T+'0/00/2014_11_Moalboal_21_sardine_run_%2816024303526%29.jpg/1280px-2014_11_Moalboal_21_sardine_run_%2816024303526%29.jpg'},
 {slug:'bali',year:2027,name:'Dolphins at Dawn',place:'ลอวีนา + เปอมูเตรัน + เมินจางัน',country:'อินโดนีเซีย',start:'2027-07-17',end:'2027-07-21',when:'~17 – 21 ก.ค.',days:5,cost:42000,price:'~42k ฿ สองคน',status:'ร่างแพลน',tags:['ว่ายกับโลมา','ฟรีไดฟ์','ดำน้ำทุกวัน'],
  img:T+'7/70/Ile_de_Menjangan.jpg/1280px-Ile_de_Menjangan.jpg'},
 {slug:'zhangjiajie',year:2027,name:'Avatar Mountains',place:'จางเจียเจี้ย + ฝูหรงเจิ้น + เฟิ่งหวง',country:'จีน',start:'2027-10-21',end:'2027-10-27',when:'~21 – 27 ต.ค.',days:7,cost:49000,price:'~49k ฿ สองคน',status:'ร่างแพลน',tags:['เดินเขา','ทางเดินกระจก','เมืองโบราณ'],
  img:T+'6/61/Zhangjiajie_National_Forest_Park_%E5%BC%A0%E5%AE%B6%E7%95%8C%E5%9B%BD%E5%AE%B6%E6%A3%AE%E6%9E%97%E5%85%AC%E5%9B%AD%2C_Hunan%2C_2023_%2852669865292%29.jpg/1280px-Zhangjiajie_National_Forest_Park_%E5%BC%A0%E5%AE%B6%E7%95%8C%E5%9B%BD%E5%AE%B6%E6%A3%AE%E6%9E%97%E5%85%AC%E5%9B%AD%2C_Hunan%2C_2023_%2852669865292%29.jpg'},
 {slug:'japan-2028',year:2028,name:'Lanterns in the Snow',place:'ชิราคาวาโกะ + ทาคายามะ + ฮิรายุออนเซ็น',country:'ญี่ปุ่น',start:'2028-01-29',end:'2028-02-02',when:'~ม.ค./ก.พ. (รอวันจัดไฟ)',days:5,cost:50000,price:'~50k ฿ สองคน',status:'ไอเดีย',tags:['ไฟหมู่บ้านหิมะ','ออนเซ็น','เรียวกัง'],
  img:T+'a/a5/Shirakawa_Go_At_Night_%28198621599%29.jpeg/1280px-Shirakawa_Go_At_Night_%28198621599%29.jpeg'},
 {slug:'perhentian-2028',year:2028,name:'Turtle Bay',place:'เกาะเปอร์เฮนเตียน',country:'มาเลเซีย',start:'2028-04-13',end:'2028-04-16',when:'~13 – 16 เม.ย. (สงกรานต์)',days:4,cost:27000,price:'~27k ฿ สองคน',status:'ไอเดีย',tags:['ฟรีไดฟ์หน้าหาด','เต่า','ซากเรือ'],
  img:T+'1/1f/Perhentian_Islands%2C_Malaysia%2C_Beach.jpg/1280px-Perhentian_Islands%2C_Malaysia%2C_Beach.jpg'},
 {slug:'xinjiang-2028',year:2028,name:'Across the Tianshan',place:'เส้นทางโบราณอู๋ซุน · ซินเจียง',country:'จีน',start:'2028-08-10',end:'2028-08-19',when:'~10 – 19 ส.ค. (วันแม่)',days:10,cost:112000,price:'~112k ฿ สองคน',status:'ไอเดีย',tags:['เทรค 7 วัน','ช่องเขา 3,860 ม.','ทะเลสาบสวรรค์'],
  img:T+'d/d1/Nalati_Grassland_2.jpg/1280px-Nalati_Grassland_2.jpg'},
 {slug:'lipe-2028',year:2028,name:'Lipe Blue',place:'เกาะหลีเป๊ะ · อุทยานตะรุเตา',country:'ไทย',start:'2028-11-18',end:'2028-11-22',when:'~18 – 22 พ.ย.',days:5,cost:22000,price:'~22k ฿ สองคน',status:'ไอเดีย',tags:['ฟรีไดฟ์','เหมาหางยาว','ถนนคนเดิน'],
  img:T+'5/56/Ko_Lipe_beach.JPG/1280px-Ko_Lipe_beach.JPG'},
];
/* ทริปที่ยังไม่ลงวัน · price = งบสองคน All-in โดยประมาณ (จาก Gemini) */
window.SOMEDAY=[
 {"name": "Cenotes & Baja California", "country": "เม็กซิโก", "days": "9 วัน (12–13 วันถ้าพ่วง Baja)", "peak": "พ.ค. – ก.ย.", "price": "~158k – 204k ฿", "note": "ฟรีไดฟ์ถ้ำหินปูนน้ำจืดบนคาบสมุทรยูกาตัน ลำแสงใต้น้ำที่ El Pit ชั้นน้ำจืด-น้ำเค็ม (Halocline) และแม่น้ำใต้บาดาลที่ Cenote Angelita · พ่วง Baja California ลงน้ำกลางฝูงกระเบน Mobula (+~40k)", "img": T+"1/11/Gran_Cenote_Tulum_%28125162449%29.jpeg/1280px-Gran_Cenote_Tulum_%28125162449%29.jpeg", "file": "Gran_Cenote_Tulum_(125162449).jpeg", "credit": "Dronepicr · CC BY 3.0"},
 {"name": "Machu Picchu via Salkantay", "country": "เปรู", "days": "11 – 12 วัน", "peak": "พ.ค. – ก.ย. (หน้าแล้ง)", "price": "~190k – 245k ฿", "note": "เทรค Salkantay ข้ามช่องเขา 4,630 ม. ผ่านทะเลสาบธารน้ำแข็ง Humantay ทะลุป่าเมฆไปมาชูปิกชู พ่วงภูเขาสายรุ้ง Vinicunca", "img": T+"d/db/Panorama_of_Machu_Picchu.jpg/1280px-Panorama_of_Machu_Picchu.jpg", "file": "Panorama_of_Machu_Picchu.jpg", "credit": "Brian Jeffery Beggerly · CC BY 2.0"},
 {"name": "Manaslu Circuit", "country": "เนปาล", "days": "14 – 16 วัน", "peak": "ต.ค. – พ.ย. · มี.ค. – เม.ย.", "price": "~85k – 115k ฿", "note": "เทรคหิมาลัยสายดิบ เงียบกว่า Annapurna ข้ามช่องเขา Larkya La 5,106 ม. ประจันหน้ายอด Manaslu 8,163 ม. ผ่านหมู่บ้านวัฒนธรรมทิเบต · บังคับไกด์ + Restricted Area Permit", "img": T+"5/58/Birendra_lake_and_Mt._Manaslu.jpg/1280px-Birendra_lake_and_Mt._Manaslu.jpg", "file": "Birendra_lake_and_Mt._Manaslu.jpg", "credit": "Sangyam adventurer · CC BY-SA 4.0"},
 {"name": "Phong Nha-Kẻ Bàng", "country": "เวียดนาม", "days": "4 – 5 วัน", "peak": "ก.พ. – ส.ค. (หน้าแล้ง)", "price": "~35k – 85k ฿", "note": "เดินป่าลุยแม่น้ำใต้ดิน ว่ายน้ำในถ้ำหินปูนยักษ์ระดับโลก นอนบนหาดทรายในโถงถ้ำ (Hang Én, Tú Làn, Hang Va)", "img": T+"4/43/Hang_%C3%89n_Cave_-_201505_-_JB.jpg/1280px-Hang_%C3%89n_Cave_-_201505_-_JB.jpg", "file": "Hang_Én_Cave_-_201505_-_JB.jpg", "credit": "Jérémie B. · CC BY-SA 4.0"},
 {"name": "Dahab & Mount Sinai", "country": "อียิปต์", "days": "8 วัน 7 คืน", "peak": "เม.ย. – พ.ค. · ก.ย. – พ.ย.", "price": "~88k – 103k ฿", "note": "ฟรีไดฟ์ Blue Hole หลุมยุบลึก 100 ม. รอยแยก The Canyon แนวปะการัง Ras Abu Galum พ่วงเดินกลางคืนขึ้นภูเขาซีนาย 2,285 ม. ดูพระอาทิตย์ขึ้น", "img": T+"3/34/Blue_Whole%2C_Dahab.jpg/1280px-Blue_Whole%2C_Dahab.jpg", "file": "Blue_Whole,_Dahab.jpg", "credit": "Petar Milošević · CC BY-SA 4.0"},
 {"name": "Raja Ampat", "country": "อินโดนีเซีย", "days": "9 วัน 8 คืน", "peak": "พ.ย. – มี.ค.", "price": "~80k – 133k ฿", "note": "พักบนเกาะ Kri / Mansuar ดำจากหาดในแนวปะการังที่หลากหลายที่สุดในโลก เหมาเรือไป Piaynemo, Manta Sandy, Cape Kri · ถูกสุดถ้าพักโฮมสเตย์", "img": T+"a/a7/Pulau_Piaynemo%2C_Raja_Ampat.jpg/1280px-Pulau_Piaynemo%2C_Raja_Ampat.jpg", "file": "Pulau_Piaynemo,_Raja_Ampat.jpg", "credit": "Rizalubun · CC BY-SA 4.0"},
 {"name": "Great Barrier Reef · Minke Whales", "country": "ออสเตรเลีย", "days": "12 วัน", "peak": "มิ.ย. – ก.ค. (วาฬมาแค่ 6–8 สัปดาห์)", "price": "~185k – 226k ฿", "note": "ออกจากแคนส์ไป Ribbon Reefs ว่ายน้ำกับวาฬมิงค์แคระที่เข้ามาดูคนใกล้ๆ พ่วงซากเรือ SS Yongala หรือเกาะ Lady Elliot", "img": T+"9/9d/Dwarf_Minke_Whale_Balaenoptera_Acutorostrata_Subspecies_%28223124975%29.jpeg/1280px-Dwarf_Minke_Whale_Balaenoptera_Acutorostrata_Subspecies_%28223124975%29.jpeg", "file": "Dwarf_Minke_Whale_Balaenoptera_Acutorostrata_Subspecies_(223124975).jpeg", "credit": "Kris Mikael Krister · CC BY 3.0"},
];
