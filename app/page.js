import AcademicProgram from "@/components/accademicProgram/AcademicProgram";
import Believe from "@/components/belive/Belive";
import ClassVideoSlider from "@/components/classVideoSlider/ClassVideoSlider";
import Contact from "@/components/contact/Contact";
import DisplayAccet from "../components/DisplayAccet";
import Carousel from "../components/carousel/Carousel";
import styles from "./home.module.css";

export default function Home() {
  return (
    <main className="">
      <div className={styles.carousel}>
        <Carousel />
      </div>
      <DisplayAccet />
      <div className={styles.videoSlider}>
        <ClassVideoSlider />
      </div>
      <div className={styles.academicProgram}>
        <AcademicProgram />
      </div>
      <div className={styles.believe}>
        <Believe />
      </div>
      <div className={styles.contact}>
        <Contact />
      </div>
    </main>
  );
}
