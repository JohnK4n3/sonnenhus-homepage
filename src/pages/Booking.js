import React from 'react';

function Booking() {
    return (<>
    
    <main className="layout-infos">
        <div className="text-infos">
            <h1>Hus 1</h1>

            <div>
                <iframe id="booking-hus1" src="https://fewomanager.de/wid-onlinebuchung?&amp;ref=2557&amp;wid=3819" padding="5px 0" width="90%" height="500px" frameborder="0"></iframe>
            </div>
        </div>
       
        <div className="text-infos">
           <h1>Hus 2</h1>
           <div>
                <iframe id="booking-hus2" src="https://fewomanager.de/wid-onlinebuchung?&amp;ref=2557&amp;wid=3823" padding="5px 0" width="90%" height="500px" frameborder="0"></iframe>
                </div>
        </div>
       
        
   </main> 
   </>)
}
export default Booking;
