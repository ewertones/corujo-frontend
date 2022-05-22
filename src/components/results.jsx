import "../assets/styles/results.css"
import AnimatedNumber from "animated-number-react";

export default function Results() {
    return (
        <div className="Results mt-3 mb-3">
            <div className="ResultsColumn container">
                <div className="ResultsValue">
                    <strong className="ResultsValueNumber">
                        <AnimatedNumber value={1.01} duration={5000} formatValue={(value) => `+ ${value.toFixed(2)}%`} />
                    </strong>
                    <br />últimos 30d
                </div>
                <div className="ResultsValue">
                    <strong className="ResultsValueNumber">
                        <AnimatedNumber value={13.1} duration={5000} formatValue={(value) => `+ ${value.toFixed(1)}%`} />
                    </strong>
                    <br />últimos 12m
                </div>
            </div>
            <div className="Results-column col"></div>
        </div>
    )
}