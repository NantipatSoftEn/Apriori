
แนวข้อสอบ
1. define นิความความหมาย

Database คือฐานข้อมูลที่ใช้จัดเก็บข้อมูลขององค์กรทั่วไป เช่น ข้อมูลสินค้าก็จะเก็บเฉพาะรายละเอียดของสินค้านั้น ๆ โดยเก็บเป็นหมวดหมู่แยกประเภทเอาไว้ ถ้าข้อมูลพนักงานก็จะเก็บเฉพาะพนักงาน ซึ่งอาจจะมีข้อมูลบางอย่าง 

ที่เป็นประโยชน์ต่อผู้บริหารในการวิเคราะห์ประสิทธิภาพได้
What Is Data Mining => knowledge discovery from data.  Extraction of interesting patterns or knowledge from
huge amount of data

OLTP(Online Transaction Processing)  => เป็นการจัดการข้อมูลรายวัน มีการ เพิ่ม ลบ แก้ไขข้อมูลได้ตลอดเวลา

OLAP(Online Analytical Processing) => คือเทคโนโลยี ที่ใช้ดึงข้อมูลจาก Data Warehouse เพื่อนำไปวิเคราะห์และหาคำตอบที่ต้องการได้อย่างมีประสิทธิภาพ

Data Warehouse คือ คลังของข้อมูลที่ผ่านกระบวนการสารสนเทศแล้ว และได้รับการออกแบบมาเพื่อจัดเก็บข้อมูลที่ปริมาณมาก เป็นฐานข้อมูลขนาดใหญ่ที่เก็บรวบรวมข้อมูลจากหลายแหล่งขององค์กรทั้งหมด ตั้งแต่อดีตจนถึงปัจจุบันโดยข้อมูลที่เก็บจะต้องเป็นข้อมูลสารสนเทศ



2.ตอบคำถามเกี่ยวกับ function

3.introuction to datamining


Why data mining
- ตัดสินใจ
- ต้องมีข้อมูลพร้อมขนาดใหญ่
- best data
- ต้องทำ data wherehouse
4.introuction to datamining

5.การเตรียม preprocessing 4 ข้อย่อย


Data cleaning
Data integration and transformation
Data reduction
Discretization and concept hierarchy generation


Why preprocess the data?
- Data cleaning  => Data in the real world is dirty, No quality, Multi-Dimensional 

Data cleaning tasks

- Fill in missing values
- Identify outliers and smooth out noisy data
- Correct inconsistent data ไม่สอดคล้อง
- Data integration(การรวมข้อมูล)

6.จำลอง transection Apori ตอบข้อ 6,7,8,9

7.FTgrow

8.Closed

9. generate role

10. ตอบคำถาม data nining application (presen in class)


70 คะแนน 35 % 10 ข้อ






##  Apori

1. หา support จาก itemSet 
2. จับคู่ permu และตัดตัว min ต่ำ
3. วนลูป

##  FTgrow

1. หา support จาก itemSet 
2.เรียงตารางจากน้อยไปมาก
3.สร้าง graph โดยหาจากตาราง
4.หา pattern จากตัว support น้อย


## Closed

1. หา support จาก item ด้วยการสร้าง matrix ตาราง
2.สร้าง graph ที่จับคู่กันให้ได้มากที่สุด
3. หา FCC แล้วเอาตัว min ต่ำออก
