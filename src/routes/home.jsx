import Assets from "../components/assets";
import Banner1 from "../components/banners";
import Results from "../components/results";
import FAQ from "../components/faq";

export default function Home() {
    return (
        <div>
            <header className="container text-center">
                <Assets />
                <Banner1 />
                <Results />
                <FAQ />
            </header>
        </div>
    );
}
