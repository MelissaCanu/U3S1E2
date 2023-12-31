// import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/myFooter";
import Welcome from "./components/Welcome";
// import AllTheBooks from "./components/AllTheBooks";
/* ------------------------------------------------ */
import horror from "./data/horror.json";
// import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList";

function App() {
	// const staticHorrorBook = horror[4];
	return (
		<div className="App">
			<MyNav />
			<Welcome name="GattoRude" fontSize="fs-2" textSize="fs-3" />
			{/* <AllTheBooks /> */}
			{/* <SingleBook book={staticHorrorBook} /> */}
			<BookList books={horror} />
			<MyFooter />
		</div>
	);
}

export default App;
