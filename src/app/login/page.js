import Image from "next/image";
import styles from "./login.module.css";

export default function RegNext() {
  return (
    <main>
        <Image className={styles.cufinger} src='/CuntPrint.png' width={52} height={80} alt="Fingerprint"/>
        <div className={styles.bioVault}>
        B<span className={styles.iitalics}>i</span>oVa<span className={styles.letteru}>u</span>
        <span className={styles.litalics}>l</span>
        <span className={styles.blackText}>t</span>
        </div>
        <div className={styles.rect}>
        <span className={styles.login}>Login</span>
        <div className={styles.boxcontainer}>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
        <div className={styles.enter}>
            <span className={styles.entering}>Name</span>
            <span className={styles.entering}>Email</span>
            <span className={styles.entering}>Upload your fingerprint</span>
        </div>
        <Image className={styles.plus}src="/upload.png"width={148} height={148} alt="Fingerprint" />
        <div className={styles.submit}>Submit
        <Image className={styles.plus}src="/submit.png"width={92} height={34} alt="Fingerprint" />
        </div>
        </div>

        </div>
        <div className={styles.outcircle1}></div>
        <div className={styles.outcircle2}></div>
        <div className={styles.outcircle3}></div>
    </main>
  );
}
