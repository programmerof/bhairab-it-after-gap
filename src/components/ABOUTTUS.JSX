import React from 'react'

const ABOUTTUS = () => {
    return (
        <>
            <section id="about">
                <div className="container" data-aos="fade-up">
                    <header className="section-header">
                        <h3>About Us</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </header>
                    <div className="row about-container">
                        <div className="col-lg-6 content order-lg-1 order-2">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                            </p>
                            <div className="icon-box" data-aos="fade-up" data-aos-delay={100}>
                                <div className="icon">
                                    <i className="bi bi-card-checklist" />
                                </div>
                                <h4 className="title">
                                    <a href="">Eiusmod Tempor</a>
                                </h4>
                                <p className="description">
                                    Et harum quidem rerum facilis est et expedita distinctio. Nam
                                    libero tempore, cum soluta nobis est eligendi
                                </p>
                            </div>
                            <div className="icon-box" data-aos="fade-up" data-aos-delay={200}>
                                <div className="icon">
                                    <i className="bi bi-brightness-high" />
                                </div>
                                <h4 className="title">
                                    <a href="">Magni Dolores</a>
                                </h4>
                                <p className="description">
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                    officia deserunt mollit anim id est laborum
                                </p>
                            </div>
                            <div className="icon-box" data-aos="fade-up" data-aos-delay={300}>
                                <div className="icon"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ABOUTTUS;
