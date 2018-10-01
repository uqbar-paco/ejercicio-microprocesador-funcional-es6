# Ejercicio de Microprocesador Funcional en ES6

Implementación del ejercicio [Microprocesador](https://github.com/tadp-utn-frba/tadp-clases/blob/scala-microprocesador/Enunciado%20-%20Simulador%20Microprocesador.pdf) en ES6 (JavaScript) con influencias de programación funcional.

# Como ejecutar

La primera vez

```bash
yarn init
```

Luego correr los tests

```bash
yarn test
```

# Notas

Algunas notas generales:
* Hace uso extensivo de (ramda)[https://ramdajs.com/docs] que provee funciones útiles para expresar lógica sobre estado inmutable.
* Sigue el patrón de "reducer/actions" de [redux](https://es.redux.js.org) (aunque no utiliza redux, ni siquiera está la librería como dependencia, es sólo el patron).
* Está separado en varios archivos chiquitos para poder testearlo mejor y entenderlo de a "unidades".
