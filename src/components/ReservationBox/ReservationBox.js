import React,{useState} from 'react';
import './ReservationBox.css';

function ReservationBox({room}) {

    const [isActive, setIsActive] = useState(false);
      
    const handleClick = () => {
        //toggle
        setIsActive(current => !current);
        refreshPage();
      };

    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <div style={{
            display: isActive ? 'none' : '',
          }} id='popupbox'>
            <form onSubmit={null}>
                <fieldset>
                    <div className='titleCloseBtn'>
                        <button onClick={handleClick}>
                            X
                        </button>
                    </div>

                    <h1>Reserve</h1>

                    <p>Room: {room.name}</p>

                    <p>
                        <label htmlFor="dateFrom">Date from: </label>
                        <input id="dateFrom" type="date" autoComplete="phone" required />
                    </p>

                    <p>
                        <label htmlFor="dateTo">Date to: </label>
                        <input id="dateTo" type="date" autoComplete="phone" required />
                    </p>

                    <p>
                        <label htmlFor="quantity">Number of people: </label>
                        <input id="quantity" type="number" required />
                    </p>

                    <p>
                        <button className="submit" type="submit">Register store</button>
                    </p>

                </fieldset>
            </form>
        </div>
        
    )
}

export default ReservationBox;