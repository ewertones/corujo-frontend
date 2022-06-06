import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Icon from '@mdi/react'
import { mdiBitcoin, mdiEthereum, mdiCash, mdiChartLine } from '@mdi/js'
import Slider from "react-slick";

export default function Assets() {
    const sliderSettings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <Slider {...sliderSettings} className="Assets mt-5">
            {slider_objects.map((asset, index) => <Asset key={index} props={asset} />)}
        </Slider>
    )
}

const Asset = ({ props }) => {
    return (
        <div className={`col-lg gx-2 border border-3 rounded p-2 ms-2 me-2 ${props.variation > 0 ? "border-success" : props.variation < 0 ? "border-danger" : "border-secondary"}`}>
            <div className="row">
                <div className="col text-start">
                    <Icon path={props.mdi} title="symbol" size={2} rotate={0} color="black" />
                </div>
                <div className="fs-32 fw-bold col text-end">{formatCurrency(props.value)}</div>
            </div>
            <div className="row">
                <div className="fs-20 col text-start"><strong>{props.symbol}</strong></div>
                <div className={`fs-20 fw-bold col text-end ${props.variation > 0 ? "text-success" : props.variation < 0 ? "text-danger" : "text-secondary"}`}>{formatCurrency(props.variation)}</div>
            </div>
            <div className="row">
                <div className="assetName col text-start">{props.name}</div>
                <div className={`fs-17 fw-bold col text-end ${props.variation > 0 ? "text-success" : props.variation < 0 ? "text-danger" : "text-secondary"}`}>{formatPercentage(props.percentage)}</div>
            </div>
        </div>
    )
}

const formatCurrency = (value) =>
    new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(value);

function formatPercentage(value) {
    let fmt_num = value > 0 ? "▲ " : value < 0 ? "▼ " : "";
    return fmt_num + new Intl.NumberFormat('pt-BR', { style: 'percent', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
}

const slider_objects = [
    { mdi: mdiBitcoin, value: 146087.8, symbol: "BTC", variation: 2525.79, name: "Bitcoin", percentage: 0.0176 },
    { mdi: mdiEthereum, value: 9809.97, symbol: "ETH", variation: 180.14, name: "Ethereum", percentage: 0.0187 },
    { mdi: mdiCash, value: 4.88, symbol: "USD", variation: 0, name: "Dólar", percentage: 0 },
    { mdi: mdiCash, value: 5.1539, symbol: "EUR", variation: -.0021, name: "Euro", percentage: -0.0004 },
    { mdi: mdiChartLine, value: 108487.88, symbol: "IBOV", variation: 1482.66, name: "Ibovespa", percentage: 0.0139 },
    { mdi: mdiChartLine, value: 3901.36, symbol: "SPX", variation: .57, name: "S&P 500", percentage: 0.00015 },
]