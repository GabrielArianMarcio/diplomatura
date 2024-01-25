import '../styles/components/pages/ContactoPage.css';

const ContactoPage = (props) => {
    return (
        <main className="holder contacto">
            <div>
                <h2>Contacto Rapido</h2>
                <form action="" method="" class="formulario">
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text" name=""/>
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="text" name=""/>
                    </p>
                    <p>
                        <label for="telefono">Telefono</label>
                        <input type="text" name=""/>
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <textarea name=""></textarea>
                    </p>
                    <p>
                        <input type="submit" value="Enviar" />
                    </p>
                </form>
            </div>
            <div class="datos">
                <h2>Otras vias de comuniacion</h2>
                <p>Tambien puede contactarse con nosootros usadno los siguientes medios</p>
                <ul>
                    <li>Telefono: 4253956</li>
                    <li>Email: contacto@transportesx.com.ar</li>
                    <li>Facebook:</li>
                    <li>X:</li>
                    <li>Skype:</li>
                </ul>
            </div>
        </main>
    );
}

export default ContactoPage;