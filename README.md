# Counter app gebouwd met React motivatie

Op dit moment ben ik bezig om React te leren. Op deze manier wil ik mijn leerproces delen. Dit zijn mijn notities.
Dit is een kleine React app. Wanneer de user op de button drukt, wordt een telling bijgehouden.

## Wat heb ik tot nu geleerd?

1. Ik heb geleerd hoe ik React moet opzetten: npx create-react-app naam + npm start (openen in de browser).
2. Ik heb mijn eerste component gebouwd. function App() { return (<div>...</div>)};
3. De component staat in een andere file opgeslagen (Counter.js) en in de main JS file (App.js) roep ik deze component op. 
   In App.js: import Counter from './Counter' en in de function App() <Counter />.
   In Counter.js: export default Counter;
4. Ik heb geleerd wat props zijn.
5. Ik heb geleerd wat state is.
6. Ik heb geleerd hoe ik styling kan toevoegen aan de html elements via className.

### State?
*Bij state manage je de data. 
*Dit kun je aanpassen, maar kan alleen binnen de component. Dit doe je door setState method.

*voorbeeld uit code: App.js:
const [count, setCount] = useState(0);
const increment = () => {
    setCount(count+1);
}
count heeft hier een waarde van 0
met setCount kan ik deze waarde veranderen

### Props?
*Bij props geef je de data (pass the data). 
*Dit is dus alleen read-only.

*voorbeeld uit code: App.js: <Counter numClicked={count} inc={increment}/>
*toelichting: {count} komt af van de state (dat 0 is). {increment} komt af van de function increment. De informatie hiervan geef ik door aan Counter.js. Zie hierboven state.
*Counter.js file: Counter({numClicked, inc}){} en roep ik op onClick={inc} en bij <h2> {numClicked}






