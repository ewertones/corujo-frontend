import AnimatedNumber from "animated-number-react";

export default function Results() {
    return (
        <div className="mb-3 row fw-bold">
            <div className="col-lg">
                <strong className="fs-70 green">
                    <AnimatedNumber value={1.01} duration={5000} formatValue={(value) => `+${value.toFixed(2)}%`} />
                </strong>
                <p>últimos&nbsp;30d</p>
            </div>
            <div className="col-lg">
                <strong className="fs-70 green">
                    <AnimatedNumber value={13.1} duration={5000} formatValue={(value) => `+${value.toFixed(1)}%`} />
                </strong>
                <p>últimos&nbsp;12m</p>
            </div>
        </div>
    )
}