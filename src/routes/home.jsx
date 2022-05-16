import '../assets/styles/home.css';
import Navbar from '../components/navbar';
import DBOff from '../components/db_alerts';
import Assets from '../components/assets';
import Banner1 from '../components/banners';
import Results from '../components/results';
import HowToCreateAccount from '../components/faq';

export default function Home() {
    return (
        <div className="Home">
            <Navbar />
            <header className="Home-body corpus">
                <DBOff />
                <Assets />
                <Banner1 />
                <Results />
                <HowToCreateAccount />
            </header>
        </div>
    );
}