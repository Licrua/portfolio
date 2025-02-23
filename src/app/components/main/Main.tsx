import { ReactNode } from "react";

function Main({children}: {children: ReactNode}) {
	return (
		<div style={{backgroundColor: 'black'}}>
			{children}
		</div>
	);
}

export default Main;