import '../../App.css';
import Header from './Header';
import Footer from './Footer';

const MainLayout = ({ children }) => {
    return (
        <div className="App">
            <Header />
            <main className="container main">
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default MainLayout;
