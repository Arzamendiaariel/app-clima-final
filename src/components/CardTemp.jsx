import estilo from '../components/Styles/cardTemp.module.css'

function CardTemp({label, value}) {
    return (
    <div className={estilo.cardTemp}>
        <label>{label}</label>
        <span>{value}</span>
    </div>
    );
    }
    export default CardTemp;