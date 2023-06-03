import { Link } from "react-router-dom";
export default function Card({data}) {
    const cardID = data.alpha3code;
    const cardFlag = data.flag;
    const cardName = data.name;
    const cardPopulation  = data.population;
    const cardRegion = data.region;
    const cardCapital = data.capital;
    return(
        <div className="">
            <Link to={`/country/${cardName}`}>
                <img className="h-24 w-48 object-cover" src={cardFlag} alt={cardName} />
            </Link>
            <section>
            <h1>{cardName}</h1>
            <p><b>Population:</b> {cardPopulation} </p>
            <p><b>Region:</b> {cardRegion} </p>
            <p><b>Capital:</b> {cardCapital} </p>
            </section>
        </div>
    )
}