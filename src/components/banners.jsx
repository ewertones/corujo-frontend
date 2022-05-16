import cute_owl from "../assets/images/cute_owl_min.webp"
import "../assets/styles/banners.css"

export default function Banner1() {
    return (
        <div className="Banner row">
            <div className="Banner-column col">
                <div className="Banner-title mb-3">Inteligência&nbsp;Artificial na Bolsa&nbsp;de&nbsp;Valores</div>
                <div className="Banner-content">
                    <p>Corujo é uma rede neural que coleta diariamente dados de diversos tipos de ativos como ações, índices, fundos de investimento, FOREX, <i>commodities</i> & criptomoedas.</p>
                    <p>Corujo gera uma distribuição otimizada e diversificada que tende a maximizar o lucro em D+1, porém fornecendo previsões para períodos maiores também.</p>
                </div>
            </div>
            <div className="Banner-column col">
                <figure>
                    <img src={cute_owl} className="rounded float-right" width="100%" alt="" />
                    <figcaption>Olha que coisa linda!</figcaption>
                </figure>
            </div>
        </div>
    )
}