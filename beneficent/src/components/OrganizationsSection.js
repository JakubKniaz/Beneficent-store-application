import React, { useState, useEffect, Component } from 'react';

const OrganizationSection = props => {
    const [organizations, setOrganizations] = useState([]);
    const [type, setType] = useState('foundation');
    const [currentPage, setCurrentPage] = useState(1);
    const [organizationsPerPage, setOrganizationsPerPage] = useState(3);

    useEffect(() => {
        const queryParams = '?orderBy="type"&equalTo="' + type + '"';
        const url = 'https://beneficent-store-application.firebaseio.com/organizations.json' + queryParams;
        
        fetch(url)
        .then(response => response.json())
        .then(obj => {
            const fetchOrganizations = [];
            for (let key in obj) {
                fetchOrganizations.push ({
                    ...obj[key],
                    id: key
                });
            }
            setOrganizations(fetchOrganizations);
            setCurrentPage(1);
        })
    }, [type]);
    if(organizations === null) {
        return <h1>Wczytywanie...</h1>
    }

    // handleClick(event) {
    //     this.setState({
    //       currentPage: Number(event.target.id)
    //     });
    //   }

    
     const handleClick = (e) => {
         const number = e.target.name
            setCurrentPage(Number(number))
        }
       

    const indexOfLastOrganization = currentPage * organizationsPerPage;
    const indexOfFirstOrganizations = indexOfLastOrganization - organizationsPerPage;
    const currentOrganizations = organizations.slice(indexOfFirstOrganizations, indexOfLastOrganization);
    const pageNumbers = [];
        for (let i=1; i <= Math.ceil(organizations.length / organizationsPerPage); i++) {
            pageNumbers.push(i);
        }


    // getOrganizationItems = () => {
    //     // const pgs = Math.ceil(organizations.length / 3);
    //     // console.log(pgs);
    // }

    


    return (
        <section id="organizations" className="fifth-section container">
            <div className="main-title">Komu pomagamy?</div>
            <div className="fifth-pattern-div">
              <div className="fifth-pattern"></div>
           </div>
           <div className="organizations-columns">
               <div class="box-organizations">
                   <button className="btn-organization" onClick= { () => setType('foundation')}>Fundacjom</button>
               </div>
               <div class="box-organizations">
                   <button className="btn-organization" onClick= { () => setType('organization')}>Organizacjom<br/>pozarządowym</button>
               </div>
               <div class="box-organizations">
                   <button className="btn-organization" onClick= { () => setType('collection')}>Lokalnym<br/>zbiórkom</button>
               </div>
           </div>
           <div className="organizations-description">
                <div className="org-info">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy.
                     Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                </div>
           </div>
           <div className="organizations-form">
               <div className="org-content">
                   {currentOrganizations.map((organization, index) => {
                       return (
                    <>
                        <div className="org-title" key={index}>{organization.name}<br/><span className="org-mission" key={index}>Cel i misja: {organization.mission}</span></div>
                        <div className="org-stuff" key={index}>{organization.stuff}</div>
                    </>
                       )
                })}
               </div>
               <div className="btn-content">
                   {pageNumbers.map((number) => {
                       if(pageNumbers.length > 1) {
                            return (
                                <button key={number} name={number} onClick={ handleClick } className="btn-num">{number}</button>
                                )
                            }
                        })}
               </div>

           </div>

        </section>
    )
}

export default OrganizationSection;
