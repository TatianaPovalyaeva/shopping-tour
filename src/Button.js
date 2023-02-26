function Button({filteredTours}) {
    return (
        <div className="btn">
            <button onClick={() => filteredTours("Байкал")} className="change">Байкал</button>
            <button onClick={() => filteredTours("Алтай")} className="change">Алтай</button>
            <button onClick={() => filteredTours("Карелия")} className="change">Карелия</button>
            <button onClick={() => filteredTours("Узбекистан")} className="change">Узбекистан</button>
            <button onClick={() => filteredTours("Мурманск")} className="change">Мурманск</button>
        </div>
    )
}
export default Button;