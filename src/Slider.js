import { dataTwo } from "./dataTwo";
import { useState } from "react";

function Slider() {   

    const [card, setCard] = useState(0);
    const {id, name, image} = dataTwo[card];

    const previousCard = () => {
        setCard ((card => {
            card --;
            if (card < 0) {
                card = dataTwo.length - 1;
            }
            return card
        }))
    }

    const nextCard = () => {
        setCard ((card => {
            card ++;
            if (card > dataTwo.length - 1) {
                card = 0;
            }
            return card
        }))
    }

    return (<div key={id}>

            <div className="containerTwo">

                <div className="namePhoto">
                <p className="descr">{name}</p>
                </div>

                <div className="setPhoto">
                <button onClick={previousCard} className="btnTwo">Назад</button>
                <img src={image} width="400px" alt="tours" className="imgSlider"/>
                <button onClick={nextCard} className="btnTwo">Вперед</button>
                </div>
            </div>
            
        </div>
    )
    
}
export default Slider;