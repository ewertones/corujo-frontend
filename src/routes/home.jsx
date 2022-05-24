import Navbar from '../components/navbar';
import DBOff from '../components/db_alerts';
import Assets from '../components/assets';
import Banner1 from '../components/banners';
import Results from '../components/results';
import FAQ from '../components/faq';

export default function Home() {
    return (
        <div>
            <Navbar />
            <header className="container text-center">
                <DBOff />
                <Assets />
                <Banner1 />
                <Results />
                <FAQ />
            </header>
        </div>
    );
}