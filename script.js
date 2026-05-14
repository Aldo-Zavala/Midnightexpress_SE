const gameContent = document.getElementById("gameContent");

// 1. VARIABLES GLOBALES Y LUGARES
const imagenesLugares = {
    "Vagón comedor": "comedor.jpg",
    "Cocina": "cocina.jpg",
    "Cabina VIP": "cabina.jpg",
    "Sala de equipaje": "equipaje.jpg",
    "Pasillo principal": "pasillo.jpg"
};

// Usamos la lista de armas con corchetes para evitar errores en la acusación
const listaArmas = ["Cuchillo", "Veneno", "Pistola", "Cable metálico", "Llave inglesa"];

const sospechosos = [
    { nombre: "Elena Rossi", imagen: "elena.jpg", rasgo: "una señora de vestido rojo y pelo lacio" },
    { nombre: "Marco Silva", imagen: "marco.jpg", rasgo: "un caballero de traje gris impecable y cabello plateado" },
    { nombre: "Iván Petrov", imagen: "ivan.jpg", rasgo: "un hombre robusto con uniforme oscuro y botas militares" },
    { nombre: "Sofía Torres", imagen: "sofia.jpg", rasgo: "una mujer con un vestido de seda fina y collar de perlas" },
    { nombre: "Ricardo Vega", imagen: "ricardo.jpg", rasgo: "alguien con overol de trabajo y las manos manchadas de grasa" }
];

// 2. CASOS CON NARRATIVA EXTENDIDA
const historias = [
    { 
        id: 1, victima: "el Sr. Black", lugarConocido: "Cabina VIP", lugarArma: "Cocina", arma: "Veneno", culpable: "Elena Rossi",
        pistaArmaTexto: "¡Encontraste un frasco de Veneno vacío escondido astutamente en un costal de harina!",
        pistaImg: "veneno.jpg", 
        narrativa: "A medianoche, un grito ahogado perturbó el silencio del Expreso de Oriente. El magnate Sr. Black fue encontrado sin vida en su Cabina VIP, con los ojos muy abiertos. El forense determinó que fue envenenado poco después de la cena. Tienes el tiempo en contra: dispones de 3 búsquedas y 3 interrogatorios antes de que el tren llegue a la estación y el asesino escape entre la multitud.",
        pistasSutiles: { "Vagón comedor": "Huele a perfume de mujer mezclado con fuertes especias de cocina.", "Sala de equipaje": "Revisando, notas que falta una ampolleta letal del maletín médico de emergencias.", "Pasillo principal": "Hay una diminuta mancha de salsa roja en la alfombra, apuntando hacia la cocina." },
        coartadas: { "Elena Rossi": "No salí de la cocina en ningún momento, estaba preparando los postres.", "Marco Silva": "Bebía whisky solo en el comedor, a oscuras.", "Iván Petrov": "Hacía mi ronda habitual de vigilancia.", "Sofía Torres": "Dormía profundamente. El grito me despertó.", "Ricardo Vega": "Reparaba un fusible quemado." }
    },
    { 
        id: 2, victima: "el Revisor", lugarConocido: "Pasillo principal", lugarArma: "Sala de equipaje", arma: "Pistola", culpable: "Iván Petrov",
        pistaArmaTexto: "¡Debajo de un baúl polvoriento, encuentras una Pistola 9mm aún caliente!",
        pistaImg: "pistola.jpg",
        narrativa: "El tren atravesaba el oscuro túnel de los Alpes cuando las luces parpadearon y se apagaron por diez segundos. En esa oscuridad total, detonó un disparo. Al volver la luz, el Revisor de Boletos yacía en el Pasillo Principal. Quien lo hizo conocía sus movimientos a la perfección.",
        pistasSutiles: { "Vagón comedor": "Testigos afirman haber escuchado el sonido de botas militares pesadas corriendo antes del disparo.", "Cocina": "El chef se queja de que alguien robó un cuchillo para hacerlo parecer un asalto.", "Cabina VIP": "Hay casquillos de balas de origen militar ruso tirados cerca de la puerta." },
        coartadas: { "Elena Rossi": "Sacaba la basura por la puerta trasera.", "Marco Silva": "Discutía de negocios por teléfono.", "Iván Petrov": "Cenaba mi ración en el comedor tranquilamente.", "Sofía Torres": "Estaba retocando mi maquillaje en el espejo.", "Ricardo Vega": "Yo mismo apagué la luz por error al tocar un cable." }
    },
    { 
        id: 3, victima: "el Guardia", lugarConocido: "Vagón comedor", lugarArma: "Pasillo principal", arma: "Cable metálico", culpable: "Sofía Torres",
        pistaArmaTexto: "¡Oculto detrás de una pesada cortina de terciopelo, hallaste un Cable metálico enrollado!",
        pistaImg: "cable.jpg",
        narrativa: "La fría madrugada trajo un macabro hallazgo: el Guardia de Seguridad fue estrangulado en el Vagón Comedor. No hubo lucha, el asesino fue sigiloso como una sombra y lo tomó por sorpresa por la espalda. Solo alguien astuto y ágil pudo lograrlo.",
        pistasSutiles: { "Cocina": "El carrete de hilo resistente de cocina está sospechosamente vacío.", "Cabina VIP": "Hay un recibo de compra de una exclusiva tienda de sedas y moda europea en el suelo.", "Sala de equipaje": "Uno de los baúles más lujosos fue forzado y revisado apresuradamente." },
        coartadas: { "Elena Rossi": "Limpiaba los hornos para el desayuno.", "Marco Silva": "Tengo el sueño muy pesado, no escuché nada.", "Iván Petrov": "Fumaba un cigarro al final del pasillo.", "Sofía Torres": "Leía un libro allí mismo en el comedor, pero estaba tan concentrada que no vi a nadie.", "Ricardo Vega": "Reparaba el termostato de la calefacción." }
    },
    { 
        id: 4, victima: "el Chef", lugarConocido: "Cocina", lugarArma: "Cabina VIP", arma: "Llave inglesa", culpable: "Ricardo Vega",
        pistaArmaTexto: "¡Debajo del sofá de cuero VIP, hay una pesada Llave inglesa manchada de sangre!",
        pistaImg: "llave.jpg",
        narrativa: "El delicioso aroma de la cena se vio interrumpido por el caos. El Jefe de Cocina fue atacado por la espalda en su propio territorio. Alguien entró y salió de la cocina sin ser visto, pero dejó rastros inusuales que no pertenecen a la gastronomía.",
        pistasSutiles: { "Vagón comedor": "Hay feas manchas negras en el mantel blanco, parecen de grasa industrial.", "Sala de equipaje": "Falta la herramienta más grande y pesada del panel de reparaciones.", "Pasillo principal": "Unas sucias huellas de botas de trabajo manchan la alfombra." },
        coartadas: { "Elena Rossi": "Fui a tomar aire a la ventana, al regresar ya estaba en el suelo.", "Marco Silva": "Nunca salgo de mi cabina a esas horas.", "Iván Petrov": "Vigilaba el área de equipaje de cerca.", "Sofía Torres": "Tomaba mi té nocturno de siempre.", "Ricardo Vega": "Trabajé en la cocina temprano, pero me retiré mucho antes del incidente." }
    },
    { 
        id: 5, victima: "la Condesa", lugarConocido: "Sala de equipaje", lugarArma: "Vagón comedor", arma: "Cuchillo", culpable: "Marco Silva",
        pistaArmaTexto: "¡Escondido hábilmente bajo una bandeja de plata, descubres un Cuchillo con manchas!",
        pistaImg: "cuchillo.jpg",
        narrativa: "Un crimen de alta sociedad. La distinguida Condesa fue asaltada y atacada en la Sala de Equipaje. El asesino revolvió sus maletas y robó unos documentos bancarios vitales. El perpetrador debe ser alguien de su mismo círculo, con un motivo millonario.",
        pistasSutiles: { "Cocina": "Falta el cuchillo más afilado para cortar carne.", "Cabina VIP": "Hay fina ceniza de un habano cubano sumamente caro esparcida afuera de la cabina.", "Pasillo principal": "Varios pasajeros juran haber visto un elegante destello de tela gris escabulléndose." },
        coartadas: { "Elena Rossi": "No abandoné la cocina durante mi turno.", "Marco Silva": "Estuve en mi cabina escribiendo unas cartas toda la velada.", "Iván Petrov": "Me encontraba en mi habitación limpiando mi equipo.", "Sofía Torres": "Miraba las estrellas desde la ventana.", "Ricardo Vega": "Revisaba la presión de los frenos en la cola del tren." }
    }
];

// 3. VARIABLES DEL JUEGO
let casoActual;
let interrogatoriosRestantes = 3;
let lugaresRestantes = 3;
let evidenciaEncontrada = false;
let acusadoElegido = ""; // NUEVO: Para guardar al sospechoso que cliquees

// 4. FUNCIÓN PARA CAMBIAR FONDO (Aplicar imagen del tren)
function aplicarFondoTren() {
    document.body.style.backgroundImage = "url('images/tren.jpg')"; // Asegúrate de tener esta imagen
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
}

document.getElementById("startButton").onclick = iniciarJuego;

function iniciarJuego() {
    casoActual = historias[Math.floor(Math.random() * historias.length)];
    interrogatoriosRestantes = 3;
    lugaresRestantes = 3;
    evidenciaEncontrada = false;
    acusadoElegido = "";
    mostrarIntro();
}

function mostrarIntro() {
    aplicarFondoTren(); // FONDO DEL TREN

    let htmlSocial = sospechosos.map(p => `
        <div style="background:rgba(26,26,26,0.9); padding:10px; border-radius:10px; width:150px; text-align:center; border: 1px solid #444;">
            <img src="images/${p.imagen}" style="width:100%; height:120px; object-fit:cover; border-radius:5px;">
            <h4 style="color:white; margin:5px 0;">${p.nombre}</h4>
            <p style="color:#aaa; font-size:11px;">${p.rasgo}</p>
        </div>
    `).join('');

    gameContent.innerHTML = `
        <div style="background:rgba(0,0,0,0.8); padding: 30px; border-radius: 15px; max-width: 900px; margin: 0 auto;">
            <h2 style="color:#e74c3c; font-size: 32px; border-bottom: 2px solid #e74c3c; padding-bottom: 10px;">El Asesinato de ${casoActual.victima}</h2>
            <p id="text" style="font-size: 18px; line-height: 1.6; text-align: justify; color: #ecf0f1;">${casoActual.narrativa}</p>
            <h3 style="color: gold; margin-top: 25px;">Sospechosos a bordo:</h3>
            <div style="display:flex; flex-wrap:wrap; justify-content:center; gap:15px; margin:20px 0;">${htmlSocial}</div>
            <button onclick="mostrarMapa()" style="background:#27ae60; padding:15px 30px; font-size: 18px;">INICIAR INVESTIGACIÓN</button>
        </div>
    `;
}

function mostrarMapa() {
    aplicarFondoTren(); // FONDO DEL TREN

    let htmlBotones = Object.keys(imagenesLugares).map(lugar => {
        let deshabilitado = (lugar === casoActual.lugarConocido || lugaresRestantes <= 0) ? 'disabled style="background:#555;"' : '';
        let textoBoton = (lugar === casoActual.lugarConocido) ? `${lugar} (Escena del Crimen)` : lugar;
        return `<button ${deshabilitado} onclick="investigar('${lugar}')">${textoBoton}</button>`;
    }).join('');

    gameContent.innerHTML = `
        <div style="background:rgba(0,0,0,0.85); padding: 30px; border-radius: 15px;">
            <h2 style="color:gold; font-size: 28px;">Plano del Tren</h2>
            <div style="background: #2c3e50; padding: 15px; border-radius: 10px; display: inline-block; margin-bottom: 20px;">
                <p id="text" style="margin: 0;"><b>Búsquedas restantes:</b> <span style="color:#3498db; font-size: 20px; font-weight: bold;">${lugaresRestantes}</span> | <b>Interrogatorios:</b> <span style="color:#e67e22; font-size: 20px; font-weight: bold;">${interrogatoriosRestantes}</span></p>
            </div>
            
            <div style="margin:20px 0; display:flex; flex-wrap:wrap; justify-content:center; gap:10px;">${htmlBotones}</div>
            
            <div style="margin-top: 30px; border-top: 1px solid #555; padding-top: 20px;">
                <button onclick="menuInterrogatorio()" style="background:#e67e22; margin:5px; padding: 15px;">INTERROGAR SOSPECHOSOS</button>
                <button onclick="pantallaAcusar()" style="background:#c0392b; margin:5px; padding: 15px;">IR A LA ACUSACIÓN FINAL</button>
            </div>
        </div>
    `;
}

function investigar(lugar) {
    lugaresRestantes--;
    // AQUÍ CAMBIA EL FONDO A LA IMAGEN ESPECÍFICA DEL LUGAR
    document.body.style.backgroundImage = `url('images/${imagenesLugares[lugar]}')`;
    
    if(lugar === casoActual.lugarArma) {
        evidenciaEncontrada = true;
        gameContent.innerHTML = `
            <div style="background:rgba(0,0,0,0.85); padding: 30px; border-radius: 15px;">
                <h2 style="color:#deff9a; font-size: 30px;">¡EVIDENCIA ENCONTRADA!</h2>
                <p id="text" style="font-size: 22px;">${casoActual.pistaArmaTexto}</p>
                <img src="images/${casoActual.pistaImg}" style="width:250px; height:250px; object-fit:contain; background:rgba(0,0,0,0.5); border:3px solid #deff9a; border-radius:10px; margin: 20px 0;">
                <br><button onclick="mostrarMapa()" style="padding: 15px 30px;">GUARDAR Y VOLVER</button>
            </div>
        `;
    } else {
        let pista = casoActual.pistasSutiles[lugar] || "Registraste cada rincón, pero no hallaste nada de utilidad.";
        gameContent.innerHTML = `
            <div style="background:rgba(0,0,0,0.85); padding: 30px; border-radius: 15px;">
                <h2 style="color:#3498db;">Revisando: ${lugar}</h2>
                <div style="background:rgba(0,0,0,0.6); padding:25px; border-left:6px solid #3498db; margin:20px auto; max-width: 600px;">
                    <p id="text" style="font-style:italic; font-size: 20px; color:#ecf0f1; margin:0;">"${pista}"</p>
                </div>
                <button onclick="mostrarMapa()" style="padding: 15px 30px;">VOLVER AL MAPA</button>
            </div>
        `;
    }
}

function menuInterrogatorio() {
    aplicarFondoTren(); // FONDO DEL TREN
    if(interrogatoriosRestantes <= 0) { alert("El tren está frenando. ¡Ya no hay tiempo para más preguntas!"); return; }
    
    let btns = sospechosos.map(s => `<button onclick="interrogar('${s.nombre}')" style="font-size: 16px;">Hablar con ${s.nombre}</button>`).join('');
    
    gameContent.innerHTML = `
        <div style="background:rgba(0,0,0,0.85); padding: 30px; border-radius: 15px;">
            <h2 style="color:#e67e22;">Sala de Interrogatorios</h2>
            <p id="text">Elige a quién presionar. Oportunidades restantes: <b>${interrogatoriosRestantes}</b></p>
            <div style="display:grid; gap:15px; max-width: 400px; margin: 20px auto;">${btns}</div>
            <br><button onclick="mostrarMapa()">CANCELAR Y VOLVER</button>
        </div>
    `;
}

function interrogar(nombre) {
    aplicarFondoTren(); // FONDO DEL TREN
    interrogatoriosRestantes--;
    
    // Buscar la imagen del sospechoso para mostrarla en el interrogatorio
    let fotoSospechoso = sospechosos.find(s => s.nombre === nombre).imagen;

    gameContent.innerHTML = `
        <div style="background:rgba(0,0,0,0.85); padding: 30px; border-radius: 15px;">
            <img src="images/${fotoSospechoso}" style="width: 120px; height: 120px; object-fit: cover; border-radius: 50%; border: 3px solid #e67e22; margin-bottom: 15px;">
            <h2 style="color:#e67e22; margin-top: 0;">Testimonio de ${nombre}</h2>
            <div style="background:rgba(0,0,0,0.6); padding:25px; border-radius:10px; margin:20px auto; max-width: 600px;">
                <p id="text" style="font-style:italic; font-size: 22px; margin:0; color:#fff;">"${casoActual.coartadas[nombre]}"</p>
            </div>
            <button onclick="mostrarMapa()" style="padding: 15px 30px;">TOMAR NOTA Y VOLVER</button>
        </div>
    `;
}

// === NUEVA FUNCIÓN PARA SELECCIONAR LA FOTO ===
function seleccionarAcusado(nombre) {
    acusadoElegido = nombre;
    
    // Primero, le quitamos el borde rojo a TODAS las fotos
    sospechosos.forEach(s => {
        let imgEl = document.getElementById("img_" + s.nombre);
        if(imgEl) { imgEl.style.borderColor = "transparent"; imgEl.style.transform = "scale(1)"; }
    });
    
    // Luego, le ponemos borde rojo (seleccionado) solo al que hiciste clic
    let imgSeleccionada = document.getElementById("img_" + nombre);
    imgSeleccionada.style.borderColor = "#e74c3c";
    imgSeleccionada.style.transform = "scale(1.1)";
}

function pantallaAcusar() {
    aplicarFondoTren(); // FONDO DEL TREN
    acusadoElegido = ""; // Reseteamos por si entra y sale
    
    // Creamos la cuadrícula de fotos interactivas
    let fotosHtml = sospechosos.map(s => `
        <div style="display:inline-block; margin: 10px; text-align:center; cursor:pointer;" onclick="seleccionarAcusado('${s.nombre}')">
            <img id="img_${s.nombre}" src="images/${s.imagen}" style="width: 110px; height: 110px; object-fit: cover; border-radius: 10px; border: 4px solid transparent; transition: 0.2s;">
            <br>
            <span style="color:white; font-size: 14px; display:block; margin-top: 5px;">${s.nombre}</span>
        </div>
    `).join('');

    let optArm = listaArmas.map(a => `<option value="${a}">${a}</option>`).join('');

    gameContent.innerHTML = `
        <div style="background:rgba(0,0,0,0.9); padding: 30px; border-radius: 15px; border: 2px solid #c0392b;">
            <h2 style="color:#e74c3c; font-size: 32px;">RESOLUCIÓN DEL CASO</h2>
            <p style="color:#aaa; font-size: 16px;">El crimen de ${casoActual.victima} ocurrió en <b>${casoActual.lugarConocido}</b>.</p>
            
            <h3 style="color: gold; margin-top: 20px;">1. Haz clic en la foto del culpable:</h3>
            <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 10px; display: inline-block;">
                ${fotosHtml}
            </div>

            <h3 style="color: gold; margin-top: 25px;">2. ¿Qué arma utilizó?</h3>
            <select id="selArma" style="padding: 10px; font-size: 18px; border-radius: 5px; background: #2c3e50; color: white; border: 1px solid #3498db;">
                ${optArm}
            </select>
            
            <br><br><br>
            <button onclick="verificar()" style="background:#27ae60; padding: 15px 40px; font-size: 20px; font-weight: bold;">¡DICTAR SENTENCIA!</button>
            <br><br>
            <button onclick="mostrarMapa()" style="background: #7f8c8d;">Volver a revisar pistas</button>
        </div>
    `;
}

function verificar() {
    if (acusadoElegido === "") {
        alert("¡Detective! Debes hacer clic en la foto de un sospechoso antes de dictar sentencia.");
        return;
    }

    const armaElegida = document.getElementById("selArma").value;

    aplicarFondoTren(); // FONDO DEL TREN

    if(acusadoElegido === casoActual.culpable && armaElegida === casoActual.arma) {
        let textoExtra = evidenciaEncontrada ? "Tus pruebas físicas fueron irrefutables." : "Tu lógica destruyó su coartada falsa en el tribunal.";
        gameContent.innerHTML = `
            <div style="background:rgba(0,0,0,0.9); padding: 40px; border-radius: 15px; border: 2px solid #deff9a;">
                <h2 style="color:#deff9a; font-size: 40px; margin-top:0;">¡MISTERIO RESUELTO!</h2>
                <img src="images/${sospechosos.find(s => s.nombre === acusadoElegido).imagen}" style="width: 150px; height: 150px; object-fit: cover; border-radius: 50%; border: 4px solid #deff9a; margin: 10px 0;">
                <p id="text" style="font-size: 22px;">Atrapaste exitosamente a <b>${acusadoElegido}</b>.</p>
                <p id="text" style="font-size: 20px;">Deduciste que el arma utilizada fue <b>${armaElegida}</b>.</p>
                <p style="color:#a9cce3; font-style:italic; font-size: 18px;">${textoExtra}</p>
                <br>
                <button onclick="iniciarJuego()" style="background:#27ae60; padding: 15px 30px; font-size: 18px;">RESOLVER UN NUEVO CASO</button>
            </div>
        `;
    } else {
        gameContent.innerHTML = `
            <div style="background:rgba(0,0,0,0.9); padding: 40px; border-radius: 15px; border: 2px solid red;">
                <h2 style="color:red; font-size: 40px; margin-top:0;">¡ACUSACIÓN ERRÓNEA!</h2>
                <p id="text" style="font-size: 22px;">El juez desestimó tu teoría. El asesino escapó impune en la siguiente estación.</p>
                <div style="background: rgba(255,0,0,0.1); padding: 20px; border-radius: 10px; margin: 20px 0;">
                    <p style="margin:0; font-size: 18px; color:#fff;">La realidad es que <b>${casoActual.culpable}</b> perpetró el crimen con el <b>${casoActual.arma}</b>.</p>
                </div>
                <br>
                <button onclick="iniciarJuego()" style="padding: 15px 30px; font-size: 18px;">REINICIAR INVESTIGACIÓN</button>
            </div>
        `;
    }
}