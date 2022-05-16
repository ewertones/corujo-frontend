import '../assets/styles/home.css';
import Navbar from '../components/navbar';
import Banner1 from '../components/banners';
import DBOff from '../components/db_alerts';

export default function Home() {
    return (
        <div className="Home">
            <Navbar />
            <header className="Home-body corpus">
                <DBOff />
                <Banner1 />
            </header>
        </div>
    );
}