import Quote from '../public/Quote.png'
import ChoroMap from '../public/Map.png'
import Clock from '../public/Clock.png'



export default function Work() {
    return(
        <>
        <div className='work-flex'>
            <div>
                <h2><i className="fa-solid fa-chevron-right"></i> Random quote generator:</h2>
                <p>Using React as the frontend framework, I used an API the generate random quotes and used it to diplay them, in addition to a tweet function. For the styling, Bootstrap was used for the main diplay and the buttons</p>
            </div>
            <a href='https://codepen.io/ApixNova/pen/BaqdwWp' target='_blank'><img className='work-image' src={Quote}></img></a>
        </div>
        <div className='division'></div>
        <div className='work-flex'>
            <div>
                <h2><i className="fa-solid fa-chevron-right"></i> Choropleth map:</h2>
                <p>In this project, I used the Javascript Library D3.js to generate a map and to dynamically set the color of each US county according to a JSON API data (percentage of adults with a bachelor's degree or higher).<br/>Using the same library, I also created a tree map and many graphs.</p>
            </div>
            <a href='https://codepen.io/ApixNova/pen/abRXagZ' target='_blank'><img className='work-image' src={ChoroMap}></img></a>
        </div>
        <div className='division'></div>
        <div className='work-flex'>
            <div>
                <h2><i className="fa-solid fa-chevron-right"></i> 25 + 5 Timer:</h2>
                <p>This project involved handling time in React. The timer can be cutomised and an audio file is played whenever a Session or a Break is over</p>
            </div>
            <a href='https://codepen.io/ApixNova/pen/xxyYWpm' target='_blank'><img className='work-image' src={Clock}></img></a>
        </div>

        </>
    )
}