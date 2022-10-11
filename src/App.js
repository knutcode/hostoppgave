import { HashRouter } from "react-router-dom";
import "./assets/Global.css";
import Navbar from "./pages/components/Navbar/Navbar";

function App() {
	return (
		<HashRouter>
			<div className="App">
				<Navbar />
			</div>
		</HashRouter>
	);
}

export default App;
