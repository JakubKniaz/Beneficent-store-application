import React from 'react';

const ThreeColumns = () => {
    return (
        <section id="kontakt" className="three-columns-section container">
            <div className="three-columns-content">
                <div className="column-item">
                    <div className="column-number">10</div>
                    <div className="column-description">oddanych worków</div>
                    <div className="column-info">Lorem ipsum dolor sit amet,
                     consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</div>
                </div>
                <div className="column-item">
                    <div className="column-number">5</div>
                    <div className="column-description">wspartych organizacji</div>
                    <div className="column-info">Lorem ipsum dolor sit amet,
                     consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</div>
                </div>
                <div className="column-item">
                        <div className="column-number">8</div>
                        <div className="column-description">zorganizowanych zbiórek</div>
                        <div className="column-info">Lorem ipsum dolor sit amet,
                        consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</div>
                </div>
            </div>
        </section>
    )
}

export default ThreeColumns;