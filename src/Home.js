import { useState } from 'react';
import { data } from './data';
import Button from './Button';
import Shop from './Shop';
function Home() {

    const [tours, setTours] = useState(data);
    const shosenTour = (searchSection) => {
        const newTours = data.filter(element => element.searchSection === searchSection);
        setTours(newTours);
    }

    return (
        <div>
            <div className='head'> 
            <h2 className='header'>Выбери свое путешествие</h2>
            </div>

            <div>
                <Button filteredTours={shosenTour} />
                <Shop tour={tours} />
            </div>

        </div>
    )
}
export default Home;