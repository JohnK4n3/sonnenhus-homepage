import React from 'react';
import images from '../data/images-hus2';
import Slideshow from '../slideshow';
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import images2 from "../data/images-hus2-gallery";
import Booknow2 from "../components/booknow2"
import { Link } from "react-router";
import GTC from './GTC';

function Hus1() {
    let tick = String.fromCodePoint(10004);
    return (
<><div className="flexcontainer"><Slideshow images={images} style={{zIndex:"2"}}/> </div>
    <main>
    <section className="layout">
   
    <div className="two-columns-setup">
        <div className="two-column-item">  
        <h1>Hus Zwei</h1>
                <p>Willkommen in unserem modern eingerichteten Hus Zwei. Hus Zwei ist mit separatem Eingang auf zwei Etagen verteilt. <br/> <br/>
                    Parkettfußboden sorgt für ein warmes Ambiente. Von der gemütlichen Sofaecke aus genießen Sie Fernsehabende am großen Bildschirm oder behagliche Momente vor dem Kamin. <br/> <br/>
    Erleben Sie den besten Schlafkomfort in den komfortablen Boxspringbetten. Die moderne Küche ist komplett ausgestattet. <br/> <br/>
    Es erwartet Sie der perfekte Rückzugsort, um dem Alltag zu entfliehen und sich rundum zu erholen.
    Ihr Wohlfühl- Urlaub beginnt hier.</p>
            </div>

            <div className="two-column-item">
                   
                   <h2>Eckdaten</h2>
                   <ul className='features'>
        <li><svg width="50px" padding="0 8px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.75 5.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0m1.5 0a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0m-6.182 15.093.188 1.5A.75.75 0 0 0 18 22.5h3a.75.75 0 0 0 .744-.657l.75-6-.744.657h1.5a.75.75 0 0 0 .75-.75V13.5a4.5 4.5 0 0 0-7.2-3.6.75.75 0 1 0 .9 1.2 3 3 0 0 1 4.8 2.4v2.25l.75-.75h-1.5a.75.75 0 0 0-.744.657l-.75 6L21 21h-3l.744.657-.188-1.5a.75.75 0 0 0-1.488.186M6.75 5.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0m1.5 0a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0M5.444 20.157l-.188 1.5L6 21H3l.744.657-.75-6A.75.75 0 0 0 2.25 15H.75l.75.75V13.5a3 3 0 0 1 4.8-2.4.75.75 0 1 0 .9-1.2A4.5 4.5 0 0 0 0 13.5v2.25c0 .414.336.75.75.75h1.5l-.744-.657.75 6A.75.75 0 0 0 3 22.5h3a.75.75 0 0 0 .744-.657l.188-1.5a.75.75 0 0 0-1.488-.186M13.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M15 9a3 3 0 1 0-6 0 3 3 0 0 0 6 0m-3 3a4.5 4.5 0 0 0-4.5 4.5v.75c0 .414.336.75.75.75h1.5l-.74-.627.75 4.5a.75.75 0 0 0 .74.627H12a.75.75 0 0 0 0-1.5h-1.5l.74.627-.75-4.5a.75.75 0 0 0-.74-.627h-1.5l.75.75v-.75a3 3 0 0 1 3-3 .75.75 0 0 0 0-1.5m0 1.5a3 3 0 0 1 3 3v.75l.75-.75h-1.5a.75.75 0 0 0-.74.627l-.75 4.5.74-.627H12a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 .74-.627l.75-4.5-.74.627h1.5a.75.75 0 0 0 .75-.75v-.75A4.5 4.5 0 0 0 12 12a.75.75 0 0 0 0 1.5"></path></svg>
        max. vier Personen</li>
        <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3.75 23.25V7.5a.75.75 0 0 0-1.5 0v15.75a.75.75 0 0 0 1.5 0M.22 21.53l2.25 2.25a.75.75 0 0 0 1.06 0l2.25-2.25a.75.75 0 1 0-1.06-1.06l-2.25 2.25h1.06l-2.25-2.25a.75.75 0 0 0-1.06 1.06M5.78 9.22 3.53 6.97a.75.75 0 0 0-1.06 0L.22 9.22a.75.75 0 1 0 1.06 1.06l2.25-2.25H2.47l2.25 2.25a.75.75 0 1 0 1.06-1.06M7.5 3.75h15.75a.75.75 0 0 0 0-1.5H7.5a.75.75 0 0 0 0 1.5M9.22.22 6.97 2.47a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 1 0 1.06-1.06L8.03 2.47v1.06l2.25-2.25A.75.75 0 1 0 9.22.22m12.31 5.56 2.25-2.25a.75.75 0 0 0 0-1.06L21.53.22a.75.75 0 1 0-1.06 1.06l2.25 2.25V2.47l-2.25 2.25a.75.75 0 0 0 1.06 1.06M10.5 13.05v7.2a2.25 2.25 0 0 0 2.25 2.25h6A2.25 2.25 0 0 0 21 20.25v-7.2a.75.75 0 0 0-1.5 0v7.2a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.75-.75v-7.2a.75.75 0 0 0-1.5 0m13.252 2.143-6.497-5.85a2.25 2.25 0 0 0-3.01 0l-6.497 5.85a.75.75 0 0 0 1.004 1.114l6.497-5.85a.75.75 0 0 1 1.002 0l6.497 5.85a.75.75 0 0 0 1.004-1.114"></path></svg>
        74 Quadratmeter</li>
        <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 16.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0M12 15h8.5c.69 0 1.25.56 1.25 1.25v2.5l.75-.75H12l.75.75v-4.5zm0-1.5a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75v-2.5a2.75 2.75 0 0 0-2.75-2.75zm-10.5 6h21l-.75-.75v3l.75-.75h-21l.75.75v-3zm0-1.5a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h21a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-.75-.75zm.75 5.25v-9a.75.75 0 0 0-1.5 0v9a.75.75 0 0 0 1.5 0m21 0v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0M19.4 6.001 19.403 6H15.1v.001l.562-4.5V1.5h3.176L19.4 6zm1.49-.187-.564-4.5A1.5 1.5 0 0 0 18.838 0h-3.176a1.5 1.5 0 0 0-1.488 1.314l-.563 4.5A1.5 1.5 0 0 0 15.102 7.5H19.4a1.5 1.5 0 0 0 1.49-1.687zm-4.39.936v4.5a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-1.5 0"></path></svg>
        Zwei Schlafzimmer</li>
        <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.375 10.875a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0m1.5 0a3.375 3.375 0 1 0-6.75 0 3.375 3.375 0 0 0 6.75 0m.375 12.375V18.7l-.667.745C20.748 18.98 24 15.925 24 10.5a2.25 2.25 0 0 0-4.5 0c0 1.945-.609 3.154-1.64 3.848a3.97 3.97 0 0 1-2.132.652H9a3.75 3.75 0 1 0 0 7.5h3a2.25 2.25 0 0 0 0-4.5H9a.75.75 0 0 0 0 1.5h3a.75.75 0 0 1 0 1.5H9a2.25 2.25 0 0 1 0-4.5h6.74a5.43 5.43 0 0 0 2.957-.908C20.154 14.613 21 12.932 21 10.5a.75.75 0 0 1 1.5 0c0 4.6-2.628 7.069-6.083 7.455a.75.75 0 0 0-.667.745v4.55a.75.75 0 0 0 1.5 0m-7.5-1.5v1.5a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-1.5 0M.75 1.5h1.5l-.53-.22 1.402 1.402a.75.75 0 0 0 1.06-1.06L2.78.22A.75.75 0 0 0 2.25 0H.75a.75.75 0 1 0 0 1.5m2.983 3.754a.01.01 0 0 1 .016.002c-.542-1.072-.1-2.426 1.008-2.988a2.25 2.25 0 0 1 2.037 0c-.041-.022-.043-.029-.04-.034l.002-.002-3.013 3.012zm1.07 1.05 3.002-3A1.49 1.49 0 0 0 7.51.951 3.77 3.77 0 0 0 4.079.929 3.75 3.75 0 0 0 2.43 5.971a1.49 1.49 0 0 0 2.382.323zm3.408-.968 1.116.62a.75.75 0 1 0 .728-1.312l-1.116-.62a.75.75 0 1 0-.728 1.312m1.964-2.233 1.615.44a.75.75 0 1 0 .394-1.448l-1.615-.44a.75.75 0 1 0-.394 1.448m4.217 1.15 1.615.44a.75.75 0 0 0 .396-1.447l-1.615-.44a.75.75 0 0 0-.396 1.447M5.697 7.388l.577 1.038a.75.75 0 1 0 1.312-.728L7.009 6.66a.75.75 0 1 0-1.312.728M3.284 8.94l.44 1.615a.75.75 0 1 0 1.448-.394l-.44-1.615a.75.75 0 1 0-1.448.394m1.15 4.219.246.896a.75.75 0 1 0 1.446-.396l-.245-.896a.75.75 0 1 0-1.446.396z"></path></svg>
        Tageslichtbad und Gäste-WC</li>
        <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12m1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12m-9.75-1.5a1.5 1.5 0 0 1-1.5 1.5H10.5l.75.75v-4.5L10.5 9h2.25a1.5 1.5 0 0 1 1.5 1.5m1.5 0a3 3 0 0 0-3-3H10.5a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h2.25a3 3 0 0 0 3-3m-4.5 6.75v-4.5a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0"></path></svg>
        Ein Parkplatz</li>
        <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.25 18.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0m1.5 0a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0m2.08-5.833a8.25 8.25 0 0 0-11.666 0 .75.75 0 0 0 1.06 1.06 6.75 6.75 0 0 1 9.546 0 .75.75 0 0 0 1.06-1.06m3.185-3.182c-4.979-4.98-13.051-4.98-18.03 0a.75.75 0 1 0 1.06 1.06c4.394-4.393 11.516-4.393 15.91 0a.75.75 0 1 0 1.06-1.06m2.746-3.603C17.136-.043 6.864-.043.24 6.132A.75.75 0 1 0 1.26 7.23c6.05-5.638 15.429-5.638 21.478 0a.75.75 0 0 0 1.022-1.098z"></path></svg>
        WLAN</li>
    </ul>
</div>
            
       </div> 
    </section>
    <div><LightGallery
        images2={images2}
        speed={500}
        selector= "a"
        thumbnail="true"
        download={false}
        >
   
                {images2.map((item) => (
               <div className="gallery">
                    <a href={item.imagePath} alt="">
                    <img src={item.imagePath} alt=""/>
                    </a>
               </div>
            ))}
            
            </LightGallery>
        </div>
         
        
<section className="layout">
  
<h2>Details zur Unterkunft</h2>
<div className="two-columns-setup">
                    <div className="two-column-item">

<table>
           

               
                <tr className="trleft">
                    <td className="tdleft">Schlafzimmer
                    </td>
                    <td>Schlafzimmer 1 mit Doppelbett, Flachbild-Fernseher <br />
                        Schlafzimmer 2 mit Doppelbett</td>
                </tr>
                <tr className="trleft">
                    <td className="tdleft">Wohnzimmer</td>
                    <td>Essecke, Wohlfühl-Couch, Kaminofen, Flachbildschirm, Bluetooth-Lautsprecher, Spiele</td>
                </tr>
                <tr className="trleft">
                    <td className="tdleft">Badezimmer</td>
                    <td>Dusche, WC, Haartrockner, Bügeleisen, Wäscheständer <br />
                    Gäste-WC separat</td>
                </tr>
                <tr className="trleft">
                    <td className="tdleft">Küche</td>
                    <td>voll ausgestattet mit Spülmaschine, Kühlschrank mit Gefrierfach, Herd, Mikrowelle, Ofen, Wasserkocher, Kaffeemaschine, Toaster</td>
                </tr>
                <tr className="trleft"> 
                    <td className="tdleft">Kaminofen</td>
                    <td>ab dem 1.10 eines Jahres mit einer Holzfüllung</td>
                </tr>
                <tr className="trleft">
                    <td className="tdleft">Garten</td>
                    <td>Große private Sonnenterrasse Ausrichtung S/O mit Blick auf den Bodden, Strandkorb, Gartenmöbeln und Grill </td>
                </tr>
                <tr className="trleft">
                    <td className="tdleft tdlast">Haustiere</td>
                    <td className="tdlast">bis zu ein Hund gestattet, Hundenapf vorhanden, <br />
                    andere Haustiere sind nicht gestattet </td>
                </tr>
            </table>
</div>
<div className="two-column-item">
    <img src="/images/Hus2/Bild9.png" alt="Bild9" />
    <img src="/images/Hus2/Bild10.png" alt="Bild10"/>
</div>
</div>
</section>
<section style={{paddingBottom:"24px"}} className="layout"> 
    
    <h2>Preise</h2>

    <div className="preise-desktop">
    <table style={{marginBottom:"30px"}}>
                        <tr className="trleft">
                            <td className="tdleft">Hauptsaison</td>
                            <td>Mindestens 7 Nächte</td>
                            <td>145€ pro Tag</td>
                            <td>15. Juni bis 9. September 2025</td>
                        </tr>
                        
                        <tr className="trleft">
                            <td className="tdleft">Zwischensaison</td>
                            <td>Mindestens 5 Nächte</td>
                            <td>105€ pro Tag</td>
                            <td>12. April bis 14. Juni und 10. September bis 3. November 2025</td>
                        </tr>
                        <tr className="trleft">
                            <td className="tdleft">Nebensaison</td>
                            <td >Mindestens 3 Nächte</td>
                            <td >75€ pro Tag</td>
                            <td >4. Januar bis 11. April 4. November bis 23. Dezember 2025</td>
                        </tr>
                        <tr className="trleft">
                            <td className="tdleft tdlast">Weihnachten & Silvester</td>
                            <td className="tdlast">Mindestens 3 Nächte</td>
                            <td className="tdlast">145€ pro Tag</td>
                            <td className="tdlast">24. Dezember 2025 bis 4. Januar 2025</td>
                        </tr>
   
    </table>
   </div>

   <div className="preise-mobile">
        <p><b>Hauptsaison:</b> 15. Juni bis 9. September 2025</p> 
        <ul>
            <li>Mindestens 7 Nächste</li>
            <li>145€ pro Tag</li>
        </ul>

      

       <p><b>Zwischensaison:</b> 12. April bis 14. Juni und 10. September bis 3. November 2025 </p>
        <ul>
            <li>Mindestens 5 Nächste</li>
            <li>105€ pro Tag</li>
        </ul>

       <p><b>Nebensaison:</b> 4. Januar bis 11. April und 4. November bis 23. Dezember 2025 </p> 
        <ul>
            <li>Mindestens 3 Nächste</li>
            <li>75€ pro Tag</li>
        </ul>
        <p><b>Weihnachten & Silvester:</b> 24. Dezember 2025 bis 4. Januar 2025</p> 
        <ul>
            <li>Mindestens 3 Nächste</li>
            <li>145€ pro Tag</li>
        </ul>


    </div>

    <div className="preise-liste">
    <ul>
        <li>Endreinigung:90€</li>
        <li>Wäschepaket 20€/Person (Bettwäsche, ein großes und ein kleines Handtuch)</li>
        <li><a className="agb-link" target="_blank" rel="noopener noreferrer" href="https://www.breege.de/hp2020/wp-content/uploads/2021/12/Kurabgabesatzung_Breege_2022.pdf">Kurtaxe</a> gemäß der Vorgaben der Gemeinde Breege</li>
        <li>Maximal ein Hund - 8€/Nacht (Wir stellen Ihnen Hundenäpfe, ein Handtuch und Beutel zur Verfügung)</li>
    </ul>
</div>

</section>
<p>Wir weisen darauf hin, dass ergänzend unsere <Link to ="/agb" element = {<GTC/>} className='agb-link'>AGB</Link> gelten.</p>
<br/>
<section className="calendar-desktop">

<h1>Belegungskalender</h1>


    <iframe src="https://widget.fewomanager.cloud/calendar/4061" id="fewohus2" width="70%;" height="400px" frameborder="0"></iframe>
</section>
<section className="calendar-mobile">
<h1>Belegungskalender</h1>


<iframe src="https://widget.fewomanager.cloud/calendar/4061" id="fewohus2" width="100%;" height="400px" frameborder="0"></iframe>
</section>

<Booknow2></Booknow2>
    </main>
    
    </>)
}
export default Hus1;