import "../assets/styles/assets.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Icon from '@mdi/react'
import { mdiBitcoin } from '@mdi/js'
import Slider from "react-slick";

export default function Assets() {
    const sliderSettings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    const temp_bitcoin_object = { mdi: mdiBitcoin, value: 159811, symbol: "BTC", variation: 6049, name: "Bitcoin", percentage: 0.0393 }

    return (
        <Slider {...sliderSettings} className="mt-5 mb-5">
            <Asset props={temp_bitcoin_object} />
            <Asset props={temp_bitcoin_object} />
            <Asset props={temp_bitcoin_object} />
            <Asset props={temp_bitcoin_object} />
            <Asset props={temp_bitcoin_object} />
            <Asset props={temp_bitcoin_object} />
            <Asset props={temp_bitcoin_object} />
            <Asset props={temp_bitcoin_object} />
        </Slider>
    )
}

const Asset = ({ props }) => {
    return (
        <div className="Asset col gx-2 border border-3 border-success rounded p-2">
            <div className="row">
                <div className="assetMDI col text-start">
                    <Icon path={props.mdi} title="Asset symbol" size={2} rotate={0} color="black" />
                </div>
                <div className="assetPrice col text-end">{formatCurrency(props.value)}</div>
            </div>
            <div className="row">
                <div className="assetSymbol col text-start"><strong>{props.symbol}</strong></div>
                <div className="assetVariation col text-end">{formatCurrency(props.variation)}</div>
            </div>
            <div className="row">
                <div className="assetName col text-start">{props.name}</div>
                <div className="assetPercentVariation col text-end">{formatPercentage(props.percentage)}</div>
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
    let fmt_num = value >= 0 ? "▲ " : "▼ ";
    return fmt_num + new Intl.NumberFormat('pt-BR', { style: 'percent', minimumSignificantDigits: 3 }).format(value);
}