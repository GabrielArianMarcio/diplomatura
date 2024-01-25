import '../styles/components/pages/NosotrosPage.css';

const NosotrosPage = (props) => {
    return (
        <main className="holder">
            <div className="historia">
                <h2>Historia</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius provident velit commodi? Dicta accusamus ad aliquid. Provident accusantium, dignissimos beatae labore voluptatibus, velit quasi error adipisci temporibus, quas suscipit aspernatur.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius provident velit commodi? Dicta accusamus ad aliquid. Provident accusantium, dignissimos beatae labore voluptatibus, velit quasi error adipisci temporibus, quas suscipit aspernatur.</p>
            </div>
            <div className="staff">
                <h2>Staff</h2>
                <div className="personas">
                    <div className="persona">
                        <img src="/img/nosotros/nosotros1.jpg" alt="Juan Gomez"/>
                            <h5>Juan Gomez</h5>
                            <h6>Gerente General</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti quibusdam, architecto
                                doloribus reprehenderit ipsam asperiores sapiente tenetur expedita, voluptas eos possimus! Quos
                                magnam repellendus exercitationem. Quas laudantium cumque velit eius.</p>
                    </div>
                    <div className="persona">
                        <img src="/img/nosotros/nosotros2.jpg" alt="Sabrina Santillan"/>
                            <h5>Sabrina Santillan</h5>
                            <h6>Gerente Comercial</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti quibusdam, architecto
                                doloribus reprehenderit ipsam asperiores sapiente tenetur expedita, voluptas eos possimus! Quos
                                magnam repellendus exercitationem. Quas laudantium cumque velit eius.</p>
                    </div>
                    <div className="persona">
                        <img src="/img/nosotros/nosotros3.jpg" alt="Alberto Brueman"/>
                            <h5>Alberto Brueman</h5>
                            <h6>Gerente de Sistemas</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti quibusdam, architecto
                                doloribus reprehenderit ipsam asperiores sapiente tenetur expedita, voluptas eos possimus! Quos
                                magnam repellendus exercitationem. Quas laudantium cumque velit eius.</p>
                    </div>
                    <div className="persona">
                        <img src="/img/nosotros/nosotros4.jpg" alt="Micaela Gonzalez"/>
                            <h5>Micaela Gonzalez</h5>
                            <h6>Gerente de Marketing</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti quibusdam, architecto
                                doloribus reprehenderit ipsam asperiores sapiente tenetur expedita, voluptas eos possimus! Quos
                                magnam repellendus exercitationem. Quas laudantium cumque velit eius.</p>
                    </div>
                    <div className="persona">
                        <img src="/img/nosotros/nosotros5.jpg" alt="Claudio Saladillo"/>
                            <h5>Claudio Saladillo</h5>
                            <h6>Gerente Logistica</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti quibusdam, architecto
                                doloribus reprehenderit ipsam asperiores sapiente tenetur expedita, voluptas eos possimus! Quos
                                magnam repellendus exercitationem. Quas laudantium cumque velit eius.</p>
                    </div>

                </div>
            </div>
        </main>
    );
}

export default NosotrosPage;