<h1 align="center"> Proyecto amigo secreto </h1>

![Badge estado](https://img.shields.io/badge/ESTADO-FINALIZADO-red)
![Badge version](https://img.shields.io/badge/VERSIÓN-1.0-blue)
![Badge lanzamiento](https://img.shields.io/badge/Fecha%20de%20lanzamiento-Agosto%202025-green)

## Índice

* [Propósito](propósito-del-proyecto)
* [Uso del sistema](#uso-del-sistema)
* [Funciones del sistema](#funciones-del-sistema)
* [Descripción detallada](#descripción-detallada)
* [Demostración](#demostración)
* [Detalles del código](#detalles-del-código)
* [Limitaciones](#Limitaciones)
* [Desarrollador](#desarrollador)

## Propósito del proyecto
El próposito del proyecto es implemntar un sistema funcional de selección aleatoria de un nombre entre los ingresados por el usuario.

## Uso del sistema
Para ejecutar el sistema solo es necesario descargar los archivos y ejecutar el archivo `HTML` en el navegador.

## Funciones del sistema
- `Ingreso de nombres`: El usuario puede ingresar nombres a su gusto, mismos que se muestrasn en forma de lista.
- `Verificación de datos ingresados`: el sistema realiza una verifiación de los datos ingresados, comprobando que solo se ingresen nombres.
- `Sorteo de nombres`: mediante calculos matemáticos los datos ingresados se sortean y se selecciona solo uno. Esta selección se muestra en pantalla.


## Descripción detallada

- **Ingreso de nombres**
  - El usuario puede usar el `input` para ingresar un nombre.
  - Al hacer click en el boton «Añadir», se ejecutara una `function`, la cual, mediante un bucle `for`, añadirá el nombre a una lista `HTML`, por lo que se mostrara en la parte inferior del `input`.
  - A su vez, la acción anterior provocará que el nombre se ingrese en un `array` y que la celda del `input` se vacíe.
  - Durant la acción de pulsar el boton «Añadir», sucede unua verificación intena mediante un `test`. Esta determina que el dato ingresado no está vació, además de que contenga solo texto. En caso de que lo ingresado no cumpla las condciones, no se registrará y un `alert` pedirá un dato correcto.

- **Sorteo**
  - AL pulsar el boton «Sortear amigo», una `function` genera un numero aleatorio entre cero y la cantidad de datos ingresados mediante `Math.random`.
  - El numero generado pasa a convertirse en una variable, posteriormente, esta será usada para sleccionar el dato que corresponda con esa posición númerica en el `array`.
  - Una vez que esto sucede, la lista de nombres se elimina y el nombre selccionado pasara a mostrarse en un `HTML` color verde debajo del `input`.

## Demostración
<img src="assets/sorteo.gif" alt="Demostración" width="500" />
![Img]()


## Detalles del código

 **Limitaciones**

## Desarrollador




