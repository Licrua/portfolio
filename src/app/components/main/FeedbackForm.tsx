"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "@/app/styles/componentStyles/general/feedbackForm.module.css";
import toast, { Toaster } from "react-hot-toast";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { fadeInUp, fieldVariants, errorShake, buttonPress } from "@/utils/motionVariants";

export default function FeedbackForm() {
  const t = useTranslations("translation.feedbackForm");

  const schema = z.object({
    name: z.string().min(2, t("validation.nameMin")),
    email: z.string().email(t("validation.emailInvalid")),
    story: z.string().min(10, t("validation.messageMin")),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append("access_key", "89367206-309f-4284-893f-051c3e5b6f1f");
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.story);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      toast.success(t("success"));
    } else {
      toast.error(t("error"));
    }
  };

  return (
    <>
      <Toaster />
      <motion.section
        className={styles.feedback}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className={styles.header} variants={fadeInUp}>
          <motion.h2 className={styles.title} variants={fadeInUp}>
            {t("title")}
          </motion.h2>
          <motion.p className={styles.text} variants={fadeInUp}>
            {t("description")}
          </motion.p>
          <motion.span className={styles.note} variants={fadeInUp}>
            {t("note")}
          </motion.span>
        </motion.div>
		<motion.div className={styles.formContainer}>
          <motion.form 
            onSubmit={handleSubmit(onSubmit)} 
            className={styles.form}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className={styles.field}>
              <label htmlFor="name" className={styles.label}>
                {t("name")}
              </label>
              <input type="text" id="name" {...register("name")} className={styles.input} />
              {errors.name && <span className={styles.error}>{errors.name.message}</span>}
            </p>
            <p className={styles.field}>
              <label htmlFor="email" className={styles.label}>
                {t("email")}
              </label>
              <input type="email" id="email" {...register("email")} className={styles.input} />
              {errors.email && <span className={styles.error}>{errors.email.message}</span>}
            </p>
            <p className={styles.field}>
              <label htmlFor="story" className={styles.label}>
                {t("message")}
              </label>
              <textarea id="story" rows={5} {...register("story")} className={styles.textarea} />
              {errors.story && <span className={styles.error}>{errors.story.message}</span>}
            </p>
            <motion.button
              type="submit"
              className={styles.button}
              disabled={isSubmitting}
              whileTap={buttonPress.whileTap}
            >
              <span className={styles.span}>{isSubmitting ? t("submitting") : t("submit")}</span>
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.section>
    </>
  );
}
