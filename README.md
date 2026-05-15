1. El Sorteo del Misterio (Inicio del Juego)
Paso 1: El jugador entra a la página y el juego se carga en la memoria.
Paso 2: Al hacer clic en "Iniciar", el código elige aleatoriamente uno de los 5 casos guardados en la variable historias. A partir de este momento, el juego "sabe" secretamente quién es el asesino, qué arma usó y dónde está escondida.
Paso 3: Se restablecen los recursos del jugador: se le otorgan exactamente 3 intentos de búsqueda y 3 intentos de interrogatorio.
2. La Escena del Crimen (Introducción)
Paso 4: La pantalla cambia, mostrando el fondo del tren (tren.jpg).
Paso 5: El juego imprime en pantalla el título del caso (ej. "El Asesinato de el Chef"), la narrativa inicial para poner en contexto al jugador, y las fotos de los 5 sospechosos a bordo.
Paso 6: El jugador lee la historia y presiona "Iniciar Investigación" para pasar a la acción.
3. El Centro de Operaciones (El Mapa)
Paso 7: El jugador llega al menú principal (la función mostrarMapa()). Aquí ve cuántas búsquedas y preguntas le quedan.
Paso 8: Desde aquí, el jugador tiene tres caminos posibles. El juego espera a que tome una decisión: explorar un vagón, interrogar a alguien, o ir directo a acusar.
4. Camino A: Fase de Exploración (Investigar)
Paso 9: El jugador selecciona un vagón (ej. "Cocina"). El código resta 1 al contador de búsquedas.
Paso 10: El fondo de la pantalla cambia a la imagen de ese lugar en específico.
Paso 11: El juego verifica: ¿Es aquí donde está escondida el arma de este caso?
Si SÍ es el lugar correcto: Aparece la pantalla de ¡EVIDENCIA! y se muestra la imagen en grande del arma (ej. veneno.jpg). El juego marca internamente que la evidencia fue encontrada.
Si NO es el lugar correcto: Aparece un texto con una "Pista Sutil" (ej. "Falta un cuchillo de carne"), que sirve para ir deduciendo sin encontrar el arma físicamente.
Paso 12: El jugador presiona "Volver" y regresa al Mapa (Paso 7).
5. Camino B: Fase de Entrevistas (Interrogar)
Paso 13: El jugador elige "Interrogar Sospechosos".
Paso 14: Selecciona a una persona de la lista. El código resta 1 al contador de preguntas.
Paso 15: Aparece la foto en grande del sospechoso junto con su coartada específica para ese caso en particular.
Paso 16: El jugador toma nota mental de la excusa, presiona "Volver" y regresa al Mapa (Paso 7).
6. El Veredicto (La Acusación Final)
Paso 17: Una vez que el jugador se queda sin turnos (o si ya se siente seguro), hace clic en "Ir a la acusación final".
Paso 18: Se muestra una cuadrícula con las fotos de los 5 sospechosos. El jugador debe hacer clic en uno (la foto elegida se resalta en rojo) y luego seleccionar un arma de la lista desplegable.
Paso 19: El jugador presiona "Dictar Sentencia".
7. Resolución y Reinicio
Paso 20: El juego realiza la validación matemática final comparando la elección del jugador con los datos secretos del Paso 2.
Condición de Victoria: Si (Acusado elegido == Culpable real) Y (Arma elegida == Arma real). Se muestra la pantalla verde de éxito, felicitando al jugador por su deducción.
Condición de Derrota: Si se equivoca en cualquiera de las dos (falla el arma o falla el culpable), se muestra la pantalla roja. El asesino escapa y el juego revela quién fue realmente y cómo lo hizo.
