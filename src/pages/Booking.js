import React from 'react';
// import AutoHeight from "../components/autoheight"

function Booking() {


    return (
    <article className="wrapper">
      <h1>Buchung</h1>
    <main className="layout-booking">
       
        
        <div className="text-infos">
            <h2>Hus 1</h2>

            <div>
                 
              <iframe src="https://widget.fewomanager.cloud/booking/4488#R3636" id="bookingFrame" width="100%" height="750px" frameborder="0" ></iframe>
            </div>
        </div>
       
        <div className="text-infos">
           <h2>Hus 2</h2>
           <div>
           <iframe src="https://widget.fewomanager.cloud/booking/3823#R3814" width="100%;" height="750px" frameborder="0"></iframe>
                </div>
        </div>
       
        
   </main> 
   </article>
   )
}
export default Booking;
