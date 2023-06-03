import dataCountry from '../data/data.json'
import { useParams } from 'react-router-dom'


export default function Country() {
  const { name } = useParams();
  const theCountry = dataCountry.find((data) => {
    return data.name === name}
  )
  //Advance Destructure
 // Language
  const {languages} = theCountry;
  const lang = [];
  for(const {name: languageName} of languages){
    lang.push(languageName)
  }
 // Currencies
  const {currencies} = theCountry;
  const curr = [];
  for(const {code: currCode, symbol: currSymbol} of currencies){
    curr.push(currCode, currSymbol)
  }
  console.log(curr);
 // Border
  const borderExist = Object.hasOwn(theCountry, 'borders');
  let BorderList = ''
  let BorderNameList = ''
  if(borderExist)
    {
      const {borders} = theCountry
      const borderName = [];
      for(const borderCountry of borders) {
        dataCountry.find((data) => {
          if(data.alpha3Code === borderCountry){
            borderName.push(data.name)
          }
        })
      }
      BorderList = borders.join(', ')
      BorderNameList = borderName.join(', ')
    }
  else
  {
      BorderList = 'None';
      BorderNameList = 'None'
  }
  
  return (
    <>
      <img src={theCountry.flag} alt={theCountry.name} />
      <h1>{theCountry.nativeName}</h1>
      <h3>{theCountry.name}</h3>
      <p><b>Population:</b> {theCountry.population} </p>
      <p><b>Region:</b> {theCountry.region} </p>
      <p><b>Sub Region:</b> {theCountry.subregion} </p>
      <p><b>Currencies:</b>{` ${curr[0]}  (${curr[1]}) `}</p>
      <p>
        <b>Border : </b>
        <span>{BorderList}</span> <br />
        <span>{BorderNameList}</span> <br />
      </p>
    </>
  )
}

/* for (const {
    name: languageName,
    nativeName: nativeLanguageName,
  } of languages) {
    console.log(`Name: ${languageName}, nativeName: ${nativeLanguageName}`);
  } 
*/