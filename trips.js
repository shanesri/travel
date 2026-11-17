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
 {slug:'lanta-2028',year:2028,name:'Slow Lanta',place:'เกาะลันตา · เกาะห้า / เกาะรอก',country:'ไทย',start:'2028-11-18',end:'2028-11-21',when:'~18 – 21 พ.ย.',days:4,cost:15000,price:'~15k ฿ สองคน',status:'ไอเดีย',tags:['ฟรีไดฟ์','ต้นไฮซีซั่น','ปิดปีชิลๆ'],
  img:T+'2/2c/Beach_ko_rok_yai%2C_Thailand_-_Strand_%2819507307333%29.jpg/1280px-Beach_ko_rok_yai%2C_Thailand_-_Strand_%2819507307333%29.jpg'},
];
window.SOMEDAY=[
 {name:'Manaslu Circuit',place:'เนปาล · เทรค 5,000 ม.+',days:'~14 วัน',note:'อยากได้ฟีลแบบ ACT อีกรอบ · เพื่อนชวนไปเม.ย. แต่ยังไม่ลงปี',img:T+'2/24/Mt_Manaslu.jpg/1280px-Mt_Manaslu.jpg'},
 {name:"Xi'an + Huashan",place:'ซีอาน · จีน',days:'~5 วัน',note:'ทหารดินเผา + ทางเดินไม้หน้าผาหัวซาน · แพลนไว้แล้วแต่ยังไม่ลงปี',img:T+'0/0a/HuaShan_Mountain.jpg/1280px-HuaShan_Mountain.jpg'},
];
