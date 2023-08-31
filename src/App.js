import Footer from "./components/footer/Footer";
import Layout from "./components/layout/Layout";
import Navbar from "./components/navbar/Navbar";
import Routes from "./routes/Routes";

function App() {
	return (
		<Layout>
			<Navbar />
			<Routes />
			<Footer />
		</Layout>
	);
}

export default App;
