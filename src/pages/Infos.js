import React from 'react';


function Infos() {
    return (

    <main style={{backgroundColor:"rgb(255, 255, 255)"}}>
        
        <section className="layout">
            <div className="text-main">
                <h1>Die Umgebung des Sonnenhus</h1>
        
                <p>Das Ferienhaus Sonnenhus Breege/Rügen liegt am Breeger Bodden in der Gemeinde Breege (Ortsteil: Lobkevitz), dem nördlichsten Seebad der Insel Rügen. 
                Genießen Sie die Natur und Ruhe abseits des Trubels oder nutzen Sie die Lage auf der Halbinsel Wittow – dem Windland - als Ausgangspunkt für zahlreiche Freizeitaktivitäten. 
                Ob Sie die Insel erkunden, sportlich aktiv werden oder das Kulturangebot der Insel Rügen nutzen möchten – Lobkevitz bietet einen guten Ausgangspunkt für ihre Urlaubsaktivitäten.</p> 
                <br/>
            </div>
            
                    <table>
                        <thead>     <caption>Freizeitaktivitäten</caption></thead>
                   
                        <tbody>
                        <tr className="trleft">
                            <td className="tdleft">Strand</td>
                            <td>Juliusruh/Schaabe, 4,6 km, Nordstrand, Kap Arkona, Dranske <br/> 
                            (Hundestrände: Bakenberg/Nonnevitz, Dranske, Putgarten)</td>
                        </tr>
                        <tr className="trleft">
                            <td className="tdleft">Fahrradfahren</td>
                            <td>Ausgewiesenes Radwegenetz, Fahrradverleih in Breege </td>
                        </tr>
                        <tr className="trleft">
                            <td className="tdleft">Kiten, Surfen und Paddling</td>
                            <td>Region Wittow als Kite- und Surfrevier, Schulen für Kiten, Surfen und Stand up Paddling in Breege und Juliusruh </td>
                        </tr>
                        <tr className="trleft">
                            <td className="tdleft">Segeln</td>
                            <td>Segelrevier Breeger Bodden und Große Jasmunder Bodden, Segelschule in Breege</td>
                        </tr>
                        <tr className="trleft">
                            <td className="tdleft">Angeln & Angeltouren</td>
                            <td>Angelanbieter</td>
                        </tr>
                        <tr className="trleft">
                            <td className="tdleft">Reiten</td>
                            <td>Reiterhof in der Nähe von Bakenberg </td>
                        </tr>
                        <tr className="trleft">
                            <td className="tdleft">Wandern</td>
                            <td>Wanderwege auf Wittow und im Nationalpark Jasmund</td>
                        </tr>
                        <tr className="trleft">
                            <td className="tdleft">Wellness</td>
                            <td>Erlebniswelt SPLASH in Sagard </td>
                        </tr>
                        <tr className="trleft">
                            <td className="tdleft tdlast">Golf</td>
                            <td className="tdlast">Golfplatz Schloss Ranzow, Lohme, rund 20 km</td>
                        </tr>
                        </tbody>
                    </table>
                
                    {/* <iframe src="https://www.komoot.com/de-de/tour/2046099845/embed?share_token=aHhIIZOVZE7aBmCO3oJFCKH2yf2jpTp28g021909VGlmC16Wyi&gallery=1" width="100%" height="600" frameborder="0" scrolling="no"></iframe> */}
  </section>
  
   </main>
 
   )
}
export default Infos;