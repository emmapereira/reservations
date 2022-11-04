import React,{useState} from 'react';
import './ReservationBox.css';
import Reservations from '../../data/reservations.json';

function ReservationBox({room}) {

    const [isActive, setIsActive] = useState(false);

    var possibleReservation = true;
      
    const handleClick = () => {
        //toggle
        setIsActive(current => !current);
        refreshPage();
      };

    function refreshPage() {
        window.location.reload(false);
    }

    const handleSubmit = event => {
        //prevent page refresh
        event.preventDefault();
        var dateFromSelected = event.target.dateFrom.value;
        var dateToSelected = event.target.dateTo.value;
        var quantitySelected = event.target.quantity.value;

        //check that datefrom comes before dateto and notify the user otherwise (using alert for simplicity)
        if (dateFromSelected > dateToSelected) {
            alert("the initial date must be earlier than the final date!");
            return false;
        }

        for (let i = 0; i < Reservations.length; ++i) {
            var infoRes = Reservations[i]

            var resDateFrom = new Date(infoRes.dateFrom)
            resDateFrom = resDateFrom.toISOString().substring(0, 10)
              
            var resDateTo = new Date(infoRes.dateTo)
            resDateTo = resDateTo.toISOString().substring(0, 10)
        
            //check that the number of people entered by the user is not bigger than the room's capacity
            if (room.numberOfPeople < quantitySelected) possibleReservation = false;

            //check, in case the room is in a reservation, if the dates selected are available
            else if (infoRes.name === room.name) {
                if ((resDateFrom <= dateFromSelected && resDateTo >= dateToSelected) 
                    || (resDateFrom >= dateFromSelected && resDateTo >= dateToSelected && resDateFrom !== dateToSelected) 
                    || (resDateFrom <= dateFromSelected && resDateTo <= dateToSelected && resDateTo !== dateFromSelected)) {
                        possibleReservation = false;
                }
            } 
        }
        /*
        const checkRestrictions=Reservations.map(
            (infoRes)=> {
                var resDateFrom = new Date(infoRes.dateFrom)
                resDateFrom = resDateFrom.toISOString().substring(0, 10)
              
                var resDateTo = new Date(infoRes.dateTo)
                resDateTo = resDateTo.toISOString().substring(0, 10)
        
                //check that the number of people entered by the user is not bigger than the room's capacity
                if (room.quantity < quantitySelected) possibleReservation = false;

                //check, in case the room is in a reservation, if the dates selected are available
                else if (infoRes.id === room.id) {
                    if ((resDateFrom <= dateFromSelected && resDateTo >= dateToSelected) 
                        || (resDateFrom >= dateFromSelected && resDateTo >= dateToSelected) 
                        || (resDateFrom <= dateFromSelected && resDateTo <= dateToSelected)) {
                            possibleReservation = false;
                        }
                } 
            }
        )*/
        if (!possibleReservation) {
            alert("The room is not available on these dates, or the number of people is too big, please try changing the reservation details.");
            possibleReservation = true;
            return false;
        }
        else {
            console.log('form submitted');
        }
        
      };

    return (
        <div style={{
            display: isActive ? 'none' : '',
          }} id='popupbox'>
            <form onSubmit={handleSubmit}>
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