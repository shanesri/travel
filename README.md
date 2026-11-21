# Travel — Shane & Poon

แพลนเที่ยวของเราสองคน (เว็บ: travel.shanesri.com)

- `index.html` หน้ารวม: Next up / แยกปี (สถิติต่อปีคำนวณเอง) / Upcoming / Previous / Someday
- `trips.js` **ข้อมูลทริปทั้งหมด** — เพิ่มทริปใหม่แค่เพิ่ม 1 ก้อนในไฟล์นี้ แล้วสร้างโฟลเดอร์ชื่อเดียวกับ `slug`
- โฟลเดอร์ละทริป: `sichuan/` `philippines/` `bali/` `zhangjiajie/` `act/` `japan-2028/` `perhentian-2028/` `xinjiang-2028/` `lipe-2028/`
- `travel.css` `travel.js` ใช้ร่วมกันทุกหน้า

ทุกหน้าตั้ง `noindex` ไว้ ไม่ให้ Google ค้นเจอ

## ตัวเลขหลักแก้ที่ trips.js ที่เดียว
การ์ดหน้าแรกและกล่องสรุปบนหน้าย่อยอ่านจาก `trips.js` (หน้าย่อยผูกด้วย `<body data-slug>` + `data-t="..."`)
- ทริปมีวัน (`TRIPS`): `when` (ช่วงวันบนหัวเรื่อง), `days`, `cost` (กล่องงบ ~XXk), `start` (นับถอยหลัง)
- ทริป Someday (`SOMEDAY`): `days`, `price`, `peak`, `budgetMin` / `budgetMax` (กล่องรวมทั้งทริป + ตกคนละ)
- ที่ยังต้องแก้ในหน้าย่อยเอง: ตารางแตกงบรายข้อ, ตารางรายวัน, ไฮไลต์ และกล่อง "รวมทั้งทริป" ของทริปที่มีวัน (เป็นยอดรวมของตาราง)
