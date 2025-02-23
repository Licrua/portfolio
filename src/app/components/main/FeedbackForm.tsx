

"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "@/app/styles/componentStyles/feedbackForm.module.css";

const schema = z.object({
  name: z.string().min(2, "Имя должно содержать минимум 2 символа"),
  email: z.string().email("Введите корректный email"),
  story: z.string().min(10, "Сообщение должно содержать минимум 10 символов"),
});

export default function FeedbackForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });


const onSubmit = async (data: any) => {
	const formData = new FormData();
	console.log('formData', formData);
	formData.append("access_key", "89367206-309f-4284-893f-051c3e5b6f1f");
	formData.append("name", data.name);
	formData.append("email", data.email);
	formData.append("message", data.message);
  
	const response = await fetch("https://api.web3forms.com/submit", {
	  method: "POST",
	  body: formData,
	});
  
	if (response.ok) {
	  alert("Форма отправлена!");
	} else {
	  alert("Ошибка при отправке.");
	}
  };
  





  return (
    <section className={styles.feedback}>
      <div className={styles.header}>
        <h2 className={styles.title}>Обратная форма</h2>
        <p className={styles.text}>Остались вопросы? Или хотите заказать работу?</p>
        <p className={styles.text}> - Заполните форму!</p>
      </div>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <p className={styles.field}>
            <label htmlFor="name" className={styles.label}>Имя</label>
            <input 
              type="text" 
              id="name" 
              {...register("name")} 
              className={styles.input} 
            />
            {errors.name && <span className={styles.error}>{errors.name.message}</span>}
          </p>
          <p className={styles.field}>
            <label htmlFor="email" className={styles.label}>Почта</label>
            <input 
              type="email" 
              id="email" 
              {...register("email")} 
              className={styles.input} 
            />
            {errors.email && <span className={styles.error}>{errors.email.message}</span>}
          </p>
          <p className={styles.field}>
            <label htmlFor="story" className={styles.label}>Сообщение</label>
            <textarea 
              id="story" 
              rows={5} 
              {...register("story")} 
              className={styles.textarea} 
            />
            {errors.story && <span className={styles.error}>{errors.story.message}</span>}
          </p>
          <button type="submit" className={styles.button} disabled={isSubmitting}>
            <span className={styles.span}>
              {isSubmitting ? "Отправка..." : "Отправить"}
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}
