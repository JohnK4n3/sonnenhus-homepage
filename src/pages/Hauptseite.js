import React from 'react';
import images from '../data/image-main';
import Slideshow from '../slideshow';
import Booknow from '../components/booknow1';
import Slideshow_small from '../slideshow_small';
import imagesSmall from "../data/image-main-small";


function Hauptseite() {
    return (<>
   
        <div className="flexcontainer"><Slideshow images={images} style={{zIndex:"2"}} /> </div>
        <main>
        {/* <div><Booknow></Booknow></div> */}
            <section className="layout">
            <h1 className="heading-house">Sonnenhus Breege</h1>            
                 <div className="two-columns-setup">
                    <div className="two-column-item"> 
                         <Slideshow_small images={imagesSmall} style={{zIndex:"2"}} /></div>

                    
                    
                    <div className="two-column-item">
                            <h3>Urlaub auf Rügen - Ihre perfekte Auszeit auf der Halbinsel Wittow</h3>
                            <p>Erleben Sie unvergessliche Tage auf der zauberhaften Halbinsel Wittow. 
                            <br/>

                             Hier können Sie abseits von Lärm und Trubel Erholung pur mit Badevergnügen an einem der schönsten Strände der Ostsee verbinden.</p> <br/>
                            <h3>Private Terrasse und Boddenblick</h3>
                            <p>Entspannen Sie im hauseigenen Strandkorb auf der Terrasse und genießen Sie den Blick auf den Breeger Bodden.
                             Befeuern Sie im Sommer den Grill und sorgen in der kalten Jahreszeit vor dem Kamin für romantische Stimmung.</p><br/>
                            <h3>Idealer Ausgangspunkt für Ausflüge</h3>
                             <p>Nutzen Sie die Lage des Hauses als Ausgangspunkt für abwechslungsreiche Freizeitaktivitäten und Ausflugstouren.
                             Mit dem Fahrrad können Sie von Lobkevitz hervorragend die Insel erobern.
                            Vom Breeger Hafen geht die Fähre direkt zu den Störtebeker Festspielen nach Ralswiek oder zur Insel Hiddensee.</p> <br/>
                         </div> 
                        
                        </div>
                

                    

                    
                   
                        
               
                         
                    <div className="address-mainsite-desktop">
                        
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9244.759908491094!2d13.3235124!3d54.6006458!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ab5167e1ab533d%3A0xfe1ab717a06800ea!2sSonnenhus!5e0!3m2!1sde!2sde!4v1738961056293!5m2!1sde!2sde" width="100%" maxwidth="900px" height="350" frameborder="0" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2311.18540320286!2d13.321807315886103!3d54.60072638026102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ab5167e1ab533d%3A0xfe1ab717a06800ea!2sSonnenhus!5e0!3m2!1sde!2sde!4v1630762168499!5m2!1sde!2sde" width="80%" height="350" border="0" padding="24px 0" allowfullscreen="true" loading="lazy"/> */}
                        {/* <iframe width="70%" height="350" src="https://www.openstreetmap.org/export/embed.html?bbox=13.298392295837404%2C54.59126225696902%2C13.349461555480959%2C54.61008100468135&amp;layer=mapnik&amp;marker=54.60068514785956%2C13.32392692565918" style={{border:"1px solid black"}}/><br/><small><a href="https://www.openstreetmap.org/?mlat=54.60069&amp;mlon=13.32393#map=15/54.60067/13.32393">Größere Karte anzeigen</a></small> */}
                        <p>Adresse: <a target="_blank" rel="noopener noreferrer" href="https://maps.google.com/maps/place/Sonnenhus/@54.6006458,13.3235124,15z/data=!4m5!3m4!1s0x0:0xfe1ab717a06800ea!8m2!3d54.6006458!4d13.3235124">Lobkevitz 23a, 18556 Breege</a></p>
                </div>

                <div className="address-mainsite-mobile">
                       
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9244.759908491094!2d13.3235124!3d54.6006458!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ab5167e1ab533d%3A0xfe1ab717a06800ea!2sSonnenhus!5e0!3m2!1sde!2sde!4v1738961056293!5m2!1sde!2sde" width="100%" maxwidth="700px" height="350" frameborder="0" style={{border:"0"}} padding="24px 0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <p>Adresse: <a target="_blank" rel="noopener noreferrer" href="https://www.openstreetmap.org/?mlat=54.60069&mlon=13.32393#map=15/54.60067/13.32393">Lobkevitz 23a, 18556 Breege</a></p>
                </div>
            </section>
     </main>
   
    </>);
}

export default Hauptseite;