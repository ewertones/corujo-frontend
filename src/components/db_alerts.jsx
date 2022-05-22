import { ReactComponent as Alert } from "../assets/icons/alert.svg";

export default function DBOff() {
    return (
        <div className="alert alert-warning" role="alert">
            <span className="me-3"><Alert /></span>
            <span className="">No momento, o banco de dados está desligado. ¯\_(ツ)_/¯</span>
        </div >
    )
}