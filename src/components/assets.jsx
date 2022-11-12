import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Icon from "@mdi/react";
import { mdiBitcoin, mdiCash, mdiChartLine } from "@mdi/js";
import Slider from "react-slick";
import { useEffect, useState } from "react";

export default function Assets({ bearerToken }) {
    const [assets, setAssets] = useState([]);

    useEffect(() => {
        async function getAssetFeed() {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${bearerToken}`);

            var requestOptions = {
                method: "GET",
                headers: myHeaders,
                redirect: "follow",
            };
            fetch("https://api.corujo.com.br/assets/feed", requestOptions).then(
                (res) => res.json().then((obj) => setAssets(obj))
            );
        }
        getAssetFeed();
    }, [bearerToken]);

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
            {assets?.map((asset, index) => (
                <Asset key={index} props={asset} />
            ))}
        </Slider>
    );
}

const Asset = ({ props }) => {
    let mdi;
    switch (props.type) {
        case "CRYPTO":
            mdi = mdiBitcoin;
            break;
        case "STOCK":
            mdi = mdiChartLine;
            break;
        case "FOREX":
            mdi = mdiCash;
            break;
        default:
            mdi = mdiChartLine;
    }

    return (
        <div
            className={`col-lg gx-2 border border-3 rounded p-2 ms-2 me-2 ${
                props.diff > 0
                    ? "border-success"
                    : props.diff < 0
                    ? "border-danger"
                    : "border-secondary"
            }`}
        >
            <div className="row">
                <div className="col text-start">
                    <Icon
                        path={mdi}
                        title="symbol"
                        size={2}
                        rotate={0}
                        color="black"
                    />
                </div>
                <div className="fs-32 fw-bold col text-end">
                    {formatCurrency(props.close)}
                </div>
            </div>
            <div className="row">
                <div className="fs-20 col text-start">
                    <strong>{props.symbol}</strong>
                </div>
                <div
                    className={`fs-20 fw-bold col text-end ${
                        props.diff > 0
                            ? "text-success"
                            : props.diff < 0
                            ? "text-danger"
                            : "text-secondary"
                    }`}
                >
                    {formatCurrency(props.diff)}
                </div>
            </div>
            <div className="row">
                <div className="assetName col text-start">{props.name}</div>
                <div
                    className={`fs-17 fw-bold col text-end ${
                        props.diff > 0
                            ? "text-success"
                            : props.diff < 0
                            ? "text-danger"
                            : "text-secondary"
                    }`}
                >
                    {formatPercentage(props.diff_percent / 100)}
                </div>
            </div>
        </div>
    );
};

const formatCurrency = (value) =>
    new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(value);

function formatPercentage(value) {
    let fmt_num = value > 0 ? "▲ " : value < 0 ? "▼ " : "";
    return (
        fmt_num +
        new Intl.NumberFormat("pt-BR", {
            style: "percent",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(value)
    );
}
