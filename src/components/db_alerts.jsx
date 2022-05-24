import { ReactComponent as Alert } from "../assets/icons/alert.svg";

export default function DBOff() {
    return (
        <div className="alert alert-warning mt-3 mb-3" role="alert">
            <span className="me-3"><Alert /></span>
            No momento, o banco de dados está desligado. ¯\_(ツ)_/¯
        </div >
    )
}