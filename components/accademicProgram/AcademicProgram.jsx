import Image from "next/image";
import styles from "./academicProgram.module.css";
import getAcademicProgram from "./getAcademicProgram/getAcademicProgram";

function AcademicProgram() {
  const academicProgram = getAcademicProgram();
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Shikho একাডেমিক প্রোগ্রামে যা যা থাকছে</h2>
      <p className={styles.subTitle}>
        ক্লাসের পড়ায় ও বোর্ড পরীক্ষার প্রস্তুতিতে সবার চেয়ে এগিয়ে রাখতে এই
        প্রোগ্রামে রয়েছে-
      </p>
      <div className={styles.descContainer}>
        <div className={styles.desc}>
          {academicProgram.map((info, i) => {
            return (
              <div key={i} className={`${styles.singleDes} ${styles.active}`}>
                <Image
                  src={info.icon}
                  alt={info.title}
                  width={40}
                  height={40}
                />
                <p>{info.title}</p>
              </div>
            );
          })}
          {/* <div className={`${styles.singleDes} ${styles.active}`}>
            <Image src="./1.svg" alt="#" width={40} height={40} />
            <p>লাইভ এবং রেকর্ডেড ক্লাস</p>
          </div>
          <div className={styles.singleDes}>
            <Image src="./2.svg" alt="#" width={40} height={40} />
            <p>অ্যানিমেটেড ভিডিও</p>
          </div>
          <div className={styles.singleDes}>
            <Image src="./3.svg" alt="#" width={40} height={40} />
            <p>প্র্যাকটিস MCQ টেস্ট</p>
          </div>
          <div className={styles.singleDes}>
            <Image src="./4.svg" alt="#" width={40} height={40} />
            <p>লাইভ MCQ টেস্ট</p>
          </div>
          <div className={styles.singleDes}>
            <Image src="./5.svg" alt="#" width={40} height={40} />
            <p>ক্লাস নোট</p>
          </div>
          <div className={styles.singleDes}>
            <Image src="./6.svg" alt="#" width={40} height={40} />
            <p>স্মার্ট নোট</p>
          </div>
          <div className={styles.singleDes}>
            <Image src="./7.svg" alt="#" width={40} height={40} />
            <p>রিপোর্ট কার্ড</p>
          </div> */}
        </div>
        <div className={styles.descImg}>
          {/* {academicProgram.map((info, i) => {
            return (
              <Image
                key={i}
                src={info.image}
                fill
                className={styles.academicImg}
                alt={info.title}
              />
            );
          })} */}
          <Image
            src="/Live_and_Recorded_Class_m1e0eg.webp"
            fill
            className={styles.academicImg}
            alt="#"
          />
        </div>
      </div>
    </div>
  );
}

export default AcademicProgram;
