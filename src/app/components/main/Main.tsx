import { ReactNode } from "react";

function Main({children}: {children: ReactNode}) {
	return (
		<div>
			{children}
		</div>
	);
}

export default Main;