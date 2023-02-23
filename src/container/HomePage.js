import Header from "../components/header/Header";
import Main from "./Main";
import Footer from "./Footer";

function HomePage() {
    return (
        <div className="root">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default HomePage;