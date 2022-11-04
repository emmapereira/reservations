import React,{useState} from 'react';
import './ReservationBox.css';
import Reservations from '../../data/reservations.json';

var possibleReservation = true;

function ReservationBox({room}) {

    const [isActive, setIsActive] = useState(false);
      
    //toggle to know when to show or close the form window
    const handleClick = () => {
        setIsActive(current => !current);
        refreshPage();
    };

    //reloads the window
    function refreshPage() {
        window.location.reload(false);
    }

    //checks all the date conditions to see if the reservation is possible
    function checkDateConditions(infoRes, room, resDateFrom, resDateTo, dateFromSelected, dateToSelected) {
        if (infoRes.reservedPeople === room.numberOfPeople) {
            if ((resDateFrom <= dateFromSelected && resDateTo >= dateToSelected) 
                || (resDateFrom >= dateFromSelected && resDateTo <= dateToSelected)
                || (resDateFrom >= dateFromSelected && resDateTo >= dateToSelected && resDateFrom !== dateToSelected && resDateFrom < dateToSelected) 
                || (resDateFrom <= dateFromSelected && resDateTo <= dateToSelected && resDateTo !== dateFromSelected && resDateTo > dateFromSelected)) {
                    possibleReservation = false;
            }
        }
    }

    const handleSubmit = event => {
        possibleReservation = true;
        //prevent page refresh
        event.preventDefault();

        //get all the user's input from the form
        var dateFromSelected = event.target.dateFrom.value;
        var dateToSelected = event.target.dateTo.value;
        var quantitySelected = event.target.quantity.value;

        //check that datefrom comes before dateto and notify the user otherwise (using alert for simplicity)
        if (dateFromSelected > dateToSelected) {
            alert("the initial date must be earlier than the final date!");
            return false;
        }

        //check with each reservation in our file to see if the new one is available
        for (let i = 0; i < Reservations.length; ++i) {
            var infoRes = Reservations[i]

            //save the dates of the reservation we are checking in the right format so that we can compare them
            var resDateFrom = new Date(infoRes.dateFrom)
            resDateFrom = resDateFrom.toISOString().substring(0, 10)
              
            var resDateTo = new Date(infoRes.dateTo)
            resDateTo = resDateTo.toISOString().substring(0, 10)
        
            //check that the number of people entered by the user is not bigger than the room's capacity
            if (room.numberOfPeople < quantitySelected) {
                possibleReservation = false;
            }

            //check all the dat conditions to see if the reservation si possible
            checkDateConditions(infoRes, room, resDateFrom, resDateTo, dateFromSelected, dateToSelected);
        }

        //notify the user that reservation was not possible through an alert for simplicity
        if (!possibleReservation) {
            alert("The room is not available on these dates, or the number of people is too big, please try changing the reservation details.");
            return false;
        }

        //here we would create a new json object and write into the file, but this is not possible by just using react without a data base
        //close the reservation pop up window and notify the user that the room has been reserved
        else {
            //this console log is only a mock, since i cannot write into the json file with the reservations
            console.log('EMAIL SENT TO test@admin.com FOR CREATED Reservation WITH ID {4}');
            alert("Your reservation has been processed!");
            handleClick();
        }
      };

    return (
        <div style={{
            display: isActive ? 'none' : '',
          }} id='popupbox'>
            <form id="form" onSubmit={handleSubmit}>
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

                    <div class="titleCloseBtn">
                        <button className="submit" type="submit">Reserve</button>
                    </div>

                </fieldset>
            </form>
        </div>
    )
}

export default ReservationBox;