import "../assets/styles/faq.css"

export default function FAQ() {
    return (
        <div className="row">
            <h2 className="FAQ_Title title">Perguntas Frequentes</h2>
            <div className="FAQ_card card col">
                <div className="card-body">
                    <h5 className="card-title">Como crio uma conta?</h5>
                    <p className="card-text">Você não pode.</p>
                </div>
            </div>
            <div className="FAQ_card card col">
                <div className="card-body">
                    <h5 className="card-title">Por que não?</h5>
                    <p className="card-text">Até o presente momento, Corujo é apenas um projeto educacional.</p>
                </div>
            </div>
            <div className="FAQ_card card col">
                <div className="card-body">
                    <h5 className="card-title">Vão liberar algum dia?</h5>
                    <p className="card-text">Ainda não sei. ¯\_(ツ)_/¯</p>
                </div>
            </div>
        </div>
    )
}