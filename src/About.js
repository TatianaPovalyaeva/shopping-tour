import Slider from "./Slider";

function About() {   

    return (
        <div>
            <div className="aboutMain">
                <h1 className="header">О нас</h1>
                <p className="par">Мы молодая динамично развивающаяся команда. Организовываем путешествия, которые вы будете всегда помнить.
                    В нашей команде профессиональные гиды, фотографы и видео-операторы. Наши путешествия увлекательные, интересные, подходят для всей
                    семьи. Присоединяйтесь к нам и мы вам откроем новый мир!
                </p>
                <p className="par">Посмотри наши фотографии из путешествий.</p>
            </div>
            <div>
                <Slider />
            </div>

            <div>
                <h2 className="aboutPar">Почему стоит ехать с нами</h2>
            </div>

            <div className="aboutMainTwo">
                <div className="aboutPar2">
                    <h3 className="parOne">Опыт</h3>
                    <p>Более 15 лет путешествий</p>
                </div>
                <div className="aboutPar2">
                    <h3 className="parOne">Надежность</h3>
                    <p>Мы в реестре туроператоров</p>
                </div>
                <div className="aboutPar2">
                    <h3 className="parOne">Безопасность</h3>
                    <p>Сертифицированные гиды</p>
                </div>
            </div>
        </div>
    )
}
export default About;