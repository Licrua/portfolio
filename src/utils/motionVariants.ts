export const letterVariants = {
	hidden: { opacity: 0, y: 10 },
	visible: (i: number) => ({
	  opacity: 1,
	  y: 0,
	  transition: { delay: i * 0.05, duration: 0.5 },
	}),
  };
  
  export const cardVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: (i: number) => ({
	  opacity: 1,
	  y: 0,
	  transition: { delay: i * 0.2, duration: 0.5 },
	}),
  };
  
  export const techVariants = {
	hidden: { opacity: 0, x: -10 },
	visible: (i: number) => ({
	  opacity: 1,
	  x: 0,
	  transition: { delay: i * 0.1, duration: 0.3 },
	}),
  };
  

  // utils/motionVariants.ts
export const fadeInUp = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  
  export const fieldVariants = {
	hidden: { opacity: 0, x: -10 },
	visible: (i: number) => ({
	  opacity: 1,
	  x: 0,
	  transition: { delay: i * 0.1, duration: 0.4 },
	}),
  };
  
  export const errorShake = {
	hidden: { opacity: 0 },
	visible: {
	  opacity: 1,
	  x: [0, -5, 5, -5, 5, 0], // Легкая тряска
	  transition: { duration: 0.3 },
	},
  };
  
  export const buttonPress = {
	whileTap: { scale: 0.95 },
  };
  