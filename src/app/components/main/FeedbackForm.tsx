import styles from "@/app/styles/componentStyles/feedbackForm.module.scss";

function FeedbackForm() {
  return ( 
    <section className={styles.feedback}>
      <div className={styles.header}>
        <h2 className={styles.title}>Обратная форма</h2>
        <p className={styles.text}>Остались вопросы? Или хотите заказать работу?</p>
        <p className={styles.text}> - Заполните форму!</p>
      </div>
      <div className={styles.formContainer}>
        <form action="" method="post" className={styles.form}>
          <p className={styles.field}>
            <label htmlFor="name" className={styles.label}>Имя</label>
            <input type="text" name="name" id="name" required className={styles.input} />
          </p>
          <p className={styles.field}>
            <label htmlFor="email" className={styles.label}>Почта</label>
            <input type="email" name="email" id="email" required className={styles.input} />
          </p>
          <p className={styles.field}>
            <label htmlFor="story" className={styles.label}>Сообщение</label>
            <textarea id="story" name="story" rows={5} className={styles.textarea} />
          </p>
          <button type="submit" className={styles.button}>
			<span className={styles.span}>
				Отправить
			</span>
		  </button>
        </form>
      </div>
    </section>
  );
}

export default FeedbackForm;
