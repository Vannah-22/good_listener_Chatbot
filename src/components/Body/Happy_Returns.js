import React from 'react';
import './MoodSelect.css';

// var gratitude = 
//     ["Gratitude is a great habit; keep it the good work!", 
//     "Don't forget to thank the people that support you when you needed it the most!",
//     "I'm grateful to talk to someone like you!"];
    


class Happy extends React.Component {
    render() {
        return (     
            <div>
                <h5 className="std-msg">
                    I'm glad you're happy! Can you explain why?
                </h5>
                
                    <div>
                        <button className="std-mood-buttons"
                            onClick="happy-returns()" 
                            type="button"
                            className="std-mood-buttons"
                            id="gratitude">
                            Gratitude is a great habit to have; keep up the good work!
                        </button>

                        <button className="std-mood-buttons"
                            onClick="happy-returns()" 
                            type="button"
                            className="std-mood-buttons"
                            id="prideful">
                            Every day you overcome is a 'win' to be proud of!
                        </button>

                        <button className="std-mood-buttons"
                            onClick="happy-returns()" 
                            type="button"
                            className="std-mood-buttons"
                            id="excitement">
                            You look so much brighter when you smile!
                        </button>


                    </div>
            </div>
        )
    }
}
export default Happy;