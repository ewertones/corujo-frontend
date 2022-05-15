import '../assets/styles/home.css';
import Navbar from '../components/navbar';
import Banner1 from '../components/banners';

export default function Home() {
    return (
        <div className="Home">
            <Navbar />
            <header className="Home-body corpus container">
                <Banner1 />
            </header>
        </div>
    );
}