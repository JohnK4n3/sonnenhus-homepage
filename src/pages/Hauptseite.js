import React from 'react';
import images from '../data/image-main';
import Slideshow from '../slideshow';
import Booknow from '../components/booknow';



function Hauptseite() {
    return (<>
   
        <div className="flexcontainer"><Slideshow images={images} style={{zIndex:"2"}} /> </div>
        <main>
        {/* <div><Booknow></Booknow></div> */}
            <section className="layout">
                             
                 
               
                    <h1 className="heading-house">Sonnenhus Breege</h1>

                    
              
                    <div className="text-main">
                   
                        <div className="text-main">
                            <h3>Entfliehen Sie dem Alltag in einem großzügigen Ferienhaus auf der Insel Rügen</h3>
                            <p>Genießen Sie Ihren Urlaub in dem ruhig und sonnig gelegenen Doppelhaus mit großem Garten in Breege
                                 – Ortsteil Lobkevitz auf Rügens Halbinsel Wittow.</p>

                             <p> Hier können Sie abseits von Lärm und Trubel Erholung pur mit Badevergnügen an einem der schönsten Strände der Ostsee verbinden.</p> <br/>
                            <h3>Private Terrasse und Boddenblick</h3>
                            <p>Entspannen Sie im hauseigenen Strandkorb auf der Terrasse und genießen Sie den Blick auf den Breeger Bodden.
                             Befeuern Sie im Sommer den Grill und sorgen in der kalten Jahreszeit vor dem Kamin für romantische Stimmung.</p><br/>
                            <h3>Idealer Ausgangspunkt für Ausflüge</h3>
                             <p>Nutzen Sie die Lage des Hauses als Ausgangspunkt für abwechslungsreiche Freizeitaktivitäten und Ausflugstouren.
                             Mit dem Fahrrad können Sie von Lobkevitz hervorragend die Insel erobern.
                            Vom Breeger Hafen geht die Fähre direkt zu den Störtebeker Festspielen nach Ralswiek oder zur Insel Hiddensee.</p> <br/>
                         </div>

                         
                    <div className="address-mainsite">
                        <p><a href="https://maps.google.com/maps/place/Sonnenhus/@54.6006458,13.3235124,15z/data=!4m5!3m4!1s0x0:0xfe1ab717a06800ea!8m2!3d54.6006458!4d13.3235124"><b>Adresse</b></a>: Lobkevitz 23, 18556 Breege</p>
                   
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2311.18540320286!2d13.321807315886103!3d54.60072638026102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ab5167e1ab533d%3A0xfe1ab717a06800ea!2sSonnenhus!5e0!3m2!1sde!2sde!4v1630762168499!5m2!1sde!2sde" width="80%" height="350" border="0" padding="24px 0" allowfullscreen="true" loading="lazy"/>
                
                     </div>
                </div>
            </section>
     </main>
   
    </>);
}

export default Hauptseite;