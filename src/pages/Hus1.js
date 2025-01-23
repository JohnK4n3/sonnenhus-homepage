import React from 'react';
import images from '../data/images-hus1';
import Slideshow from '../slideshow';
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import images2 from "../data/images-hus1-gallery";
import '../../node_modules/lightgallery/css/lightgallery.css';
import '../../node_modules/lightgallery/css/lg-zoom.css';
import '../../node_modules/lightgallery/css/lg-thumbnail.css';
import Booknow from "../components/booknow"


function Hus1() {
    let tick = String.fromCodePoint(10004);
    return (
<>
<div className="flexcontainer"><Slideshow images={images} style={{zIndex:"2"}}/> 
</div>

<main>
    <section className="layout">
            <div>
            <Booknow></Booknow>
            </div>
            <div className="text-main"><h1>Hus1</h1>
            <p>Text zur Beschreibung des Hus1</p>
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
    <div className="text-main">
    <h2>Eckdaten</h2>
<p>
<i className="Tickbox"><span>{`${tick}`}
</span></i>
<strong>max. 6 Personen</strong>
<i className="Tickbox"><span>{`${tick}`}
</span></i>
<strong>95 m<sup>2</sup></strong>
<i className="Tickbox"><span>{`${tick}`}
</span></i>
<strong>3 Schlafzimmer</strong>
<i className="Tickbox"><span>{`${tick}`}
</span></i>
<strong>Tageslichtbad und Gäste-WC</strong>
<i className="Tickbox"><span>{`${tick}`}
</span></i>
<strong>1 Parkplatz</strong>
<i className="Tickbox"><span>{`${tick}`}
</span></i>
<strong>WLAN</strong>

</p>
</div>
<div>
<h2>Details zur Unterkunft</h2>
<table>
                <tr className="trleft">
                    <td className="tdleft">Schlafzimmer
                    </td>
                    <td>Schlafzimmer 1 mit Doppelbett, Flachbild-Fernseher <br />
                        Schlafzimmer 2 mit Doppelbett <br />
                        Schlafzimmer 3 mit Doppelbett </td>
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
                    <td>voll ausgestattet mit Spülmaschine, Kühlschrank mit Gefrierfach, Herd, Ofen, Wasserkocher, Kaffeemaschine, Toaster, Mixer, Waffeleisen, Esstisch mit 6 Stühlen</td>
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
                    <td className="tdlast">bis zu 2 Hunde gestattet, Hundenapf vorhanden <br />
                    andere Haustiere sind nicht gestattet </td>
                </tr>
            </table>
</div>

</section>
<section className="layout"> <div>
    <div>
    <h2>Preise</h2>

    
    <table>
                        <tr className="trleft">
                            <td className="tdleft">Hauptsaison</td>
                            <td>Mindestens 7 Nächte</td>
                            <td>160€</td>
                            <td>15. Juni bis 9. September 2025 und 22. Dezember 2025 bis 2. Januar 2025</td>
                        </tr>
                        <tr className="trleft">
                            <td className="tdleft">Zwischensaison</td>
                            <td>Mindestens 5 Nächte</td>
                            <td>115€</td>
                            <td>23. März bis 14. Juni und 10. September bis 3. November 2025</td>
                        </tr>
                        <tr className="trleft">
                            <td className="tdleft tdlast">Nebensaison</td>
                            <td className="tdlast">Mindestens 3 Nächte</td>
                            <td className="tdlast">85€</td>
                            <td className="tdlast">4. Januar bis 22. März und 4. November bis 21. Dezember 2025</td>
                        </tr>
   
    </table>
    </div>
<div className="preise-liste">
    <ul>
        <li><b>Endreinigung:</b> 135€</li>
        <li><b>Wäschepaket:</b> 12€/Person (Bettwäsche, ein großes und ein kleines Handtuch</li>
        <li><a href="https://www.breege.de/service/kurabgabe/">Kurtaxe</a> gemäß der Vorgaben der Gemeinde Breege</li>
        <li><b>Optional:</b> Hund (max. 2) - pro Hund 5€/Nacht (Wir stellen Ihnen Hundenäpfe, ein Handtuch und Beutel zur Verfügung)</li>
    </ul>
</div>
</div>
</section>
<section className="layout">
<iframe src="https://fewomanager.de/wid-kalender?ref=2557&amp;wid=4135" title="fewohus1" width="70%" height="370px" border="none"></iframe>

</section>

    </main>
    
    </>)
}
export default Hus1;