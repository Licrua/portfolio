import { techVariants } from "@/utils/motionVariants";
import styles from "@/app/styles/componentStyles/main/jobSection.module.css";
import { motion } from "framer-motion";
import Jobs from "@/types/jobs";
import { useTranslations } from "next-intl";


function JobList({ jobs }: { jobs: Jobs }) {
	


  return (
    <ul className={styles.tasks}>
      {jobs.tasks.map((task: string, taskIndex: number) => (
        <motion.li
          key={taskIndex}
          custom={taskIndex}
          variants={techVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {task}
        </motion.li>
      ))}
    </ul>
  );
}

export default JobList;
