import { useState } from "react";

function Shop({tour}){

    const [showText, setShowText]=useState(false);
    

    const showTextClick = (element) => {
        element.showMore = !element.showMore
        setShowText(!showText)
    }

    return (
        <div className="container">
            {tour.map((element => {
                const {id, name, price, image, description, showMore} = element;
                return (
                <div key={id} className="card">
                    
                    <h3>{name}</h3>
                    <img src={image} width="300px" alt="tours" />
                    <h4>от {price} руб.</h4>
                    <p>{showMore ? description : description.substring(0, 80) + "..."}
                    <button className="btnShow" onClick={() => showTextClick(element)}>{showMore ? "Скрыть" : "Раскрыть"}</button></p>
                </div>
                )
            }))}
        </div>
    )
}
export default Shop;