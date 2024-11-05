import {Header} from "../header/Header";

export function Hero(){
    return (
        <div>
            <Header></Header>
            {/* Hero Section */}
            <section id="hero" className="hero section">
                <div className="container" data-aos="fade-up" data-aos-delay={100}>
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="hero-content" data-aos="fade-up" data-aos-delay={200}>
                                <div className="company-badge mb-4">
                                    <i className="bi bi-gear-fill me-2" />
                                    Travailler pour votre réussite
                                </div>
                                <h1 className="mb-4">
                                    Un avenir <br />
                                    prometteur <br />
                                    <span className="accent-text">commence ici.</span>
                                </h1>
                                <p className="mb-4 mb-md-5">
                                    Bienvenue dans une université où l'excellence académique et l'innovation se
                                    rencontrent pour façonner les leaders de demain. Rejoignez une communauté
                                    d'apprenants et de chercheurs engagés dans un avenir meilleur.
                                </p>
                                <div className="hero-buttons">
                                    <a href="#about" className="btn btn-primary me-0 me-sm-2 mx-1">Commencer</a>
                                    <a
                                        href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                                        className="btn btn-link mt-2 mt-sm-0 glightbox"
                                    >
                                        <i className="bi bi-play-circle me-1" />
                                        lire la vidéo
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="hero-image" data-aos="zoom-out" data-aos-delay={300}>
                                <img
                                    src="assets/img/illustration-1.webp"
                                    alt="Hero Image"
                                    className="img-fluid"
                                />
                                <div className="customers-badge">
                                    <div className="customer-avatars">
                                        <img
                                            src="assets/img/avatar-1.webp"
                                            alt="Customer 1"
                                            className="avatar"
                                        />
                                        <img
                                            src="assets/img/avatar-2.webp"
                                            alt="Customer 2"
                                            className="avatar"
                                        />
                                        <img
                                            src="assets/img/avatar-3.webp"
                                            alt="Customer 3"
                                            className="avatar"
                                        />
                                        <img
                                            src="assets/img/avatar-4.webp"
                                            alt="Customer 4"
                                            className="avatar"
                                        />
                                        <img
                                            src="assets/img/avatar-5.webp"
                                            alt="Customer 5"
                                            className="avatar"
                                        />
                                        <span className="avatar more">12+</span>
                                    </div>
                                    <p className="mb-0 mt-2">
                                        500+ diplomes delivrés, 340+ insertion professionnelle
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="row stats-row gy-4 mt-5"
                        data-aos="fade-up"
                        data-aos-delay={500}
                    >
                        <div className="col-lg-3 col-md-6">
                            <div className="stat-item">
                                <div className="stat-icon">
                                    <i className="fa-solid fa-trophy"></i>
                                </div>
                                <div className="stat-content">
                                    <h4>98%</h4>
                                    <p className="mb-0">de taux de satisfaction des étudiants</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="stat-item">
                                <div className="stat-icon">
                                    <i className="fa-solid fa-calendar-days"></i>
                                </div>
                                <div className="stat-content">
                                    <h4>300</h4>
                                    <p className="mb-0">programmes d'études, couvrant plus de 50 disciplines</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="stat-item">
                                <div className="stat-icon">
                                    <i className="fa-solid fa-house"></i>
                                </div>
                                <div className="stat-content">
                                    <h4>1</h4>
                                    <p className="mb-0">campus dans la grande ville de Conakry</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="stat-item">
                                <div className="stat-icon">
                                    <i className="fa-solid fa-person"></i>
                                </div>
                                <div className="stat-content">
                                    <h4>10 000</h4>
                                    <p className="mb-0">étudiants inscrits venant de plus de 15 pays</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* /Hero Section */}
        </div>
    )
}