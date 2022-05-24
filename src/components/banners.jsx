import cute_owl from "../assets/images/cute_owl_min.webp"

export default function Banner1() {
    return (
        <div className="container row">
            <div className="col-lg mt-3 mb-2">
                <h2 className="subtitle mb-3">Inteligência&nbsp;Artificial na Bolsa&nbsp;de&nbsp;Valores</h2>
                <p>Corujo é uma Rede Neural Artificial que coleta diariamente dados de diversos tipos de ativos como ações, índices, fundos de investimento, FOREX, <i>commodities</i> & criptomoedas.</p>
                <p>Corujo gera uma distribuição otimizada e diversificada que tende a maximizar o lucro para o dia seguinte, porém fornecendo previsões para períodos abragentens.</p>
            </div>
            <div className="col-lg mt-3 mb-2">
                <figure>
                    <img src={cute_owl} className="rounded" width="100%" alt="" />
                    <figcaption>O placeholder mais lindo que você verá hoje!</figcaption>
                </figure>
            </div>
        </div>
    )
}