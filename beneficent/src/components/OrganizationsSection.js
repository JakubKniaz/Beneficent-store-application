import React from 'react';
import {NavLink} from 'react-router-dom';

const OrganizationSection = () => {
    return (
        <section id="organizations" className="fifth-section container">
            <div className="main-title">Komu pomagamy?</div>
            <div className="fifth-pattern-div">
              <div className="fifth-pattern"></div>
           </div>
           <div className="organizations-columns">
               <div class="box-organizations">
                   <NavLink to="/login"><button className="btn-organization">Fundacjom</button></NavLink>
               </div>
               <div class="box-organizations">
                   <NavLink to="/login"><button className="btn-organization">Organizacjom<br/>pozarządowym</button></NavLink>
               </div>
               <div class="box-organizations">
                   <NavLink to="/login"><button className="btn-organization">Lokalnym<br/>zbiórkom</button></NavLink>
               </div>
           </div>
           <div className="organizations-description">
                <div className="org-info">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy.
                     Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                </div>
           </div>
           <div className="organizations-form">
               <div className="org-content">
                   <div className="org-title">Fundacja “Dbam o Zdrowie”<br/><span className="org-mission">Cel i misja: Pomoc osobom znajdującym
                        się w trudnej sytuacji życiowej.</span>

                   </div>
                   <div className="org-stuff">ubrania, jedzenie, sprzęt AGD, meble, zabawki</div>
               </div>
               <div className="org-content">
                   <div className="org-title">Fundacja “Dla dzieci”<br/><span className="org-mission">Cel i misja: Pomoc dzieciom z 
                   ubogich rodzin.</span>
                   </div>
                   <div className="org-stuff">ubrania, meble, zabawki</div>
               </div>
               <div className="org-content">
                   <div className="org-title">Fundacja “Bez domu”<br/><span className="org-mission">Cel i misja: Pomoc dla osób nie posiadających
                    miejsca zamieszkania.</span>
                   </div>
                   <div className="org-stuff">ubrania, jedzenie, ciepłe koce</div>
               </div>
               <div className="btn-content">
                   <button className="btn-num">1</button>
                   <button className="btn-num">2</button>
                   <button className="btn-num">3</button>
               </div>

           </div>

        </section>
    )
}

export default OrganizationSection;