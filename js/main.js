alert("Bienvenido a Drinks Deploy, para ingresar debe ser mayor de edad");
let contador = 1;
let salida = 0;
let nombre;
let edad;
let direccion;
let pedido;
let concat="";
let flag = 0;
let mensaje;


function Usuario(tuNombre, tuEdad, tuDireccion){
   this.nombre = tuNombre;
   this.edad = tuEdad;
   this.direccion = tuDireccion;
}

const bebidas = [
  { id: 1, nombre: "GANCIA", precio: 1200, cant: 100 },
  { id: 2, nombre: "FERNET", precio: 1900, cant: 200 },
  { id: 3, nombre: "GIN", precio: 5000, cant: 400 },
  { id: 4, nombre: "VODKA", precio: 1000, cant: 500 },
  { id: 5, nombre: "VINO", precio: 350, cant: 50 },
  { id: 6, nombre: "GASEOSA", precio: 200, cant: 120 },
];


while(contador < 4){
  console.log(contador);
  for(contador = 1 ;contador < 4 ;  contador++){
    if(flag === 0){
        nombre = prompt("Ingrese el nombre");
        edad = parseInt(prompt("Ingrese la edad"));
        direccion = prompt("Ingrese la direccion");
        const persona = new Usuario(nombre, edad, direccion);
        flag = 1;
    }
    if(edad < 18){
      alert("No puede ingresar al sitio, ingrese su edad nuevamente");
      flag = 0;
    }else if(edad >= 18){
      pedido=parseInt(prompt(nombre+", Por favor, ingrese 1 para realizar un pedido o 2 consultar disponibilidad de bebidas"))
      if(pedido === 1){
          salida = 1;
          let ingreso = prompt("Ingrese la bebida que desea comprar: "+bebidas.map((bebida) => bebida.nombre)).toLocaleUpperCase();
          console.log(ingreso);
          switch(ingreso){
            case "GANCIA":
              cantidad=prompt("ingrese la cantidad de "+ingreso +" que desea comoprar");
              if (cantidad>0){
                valor=1200;
                importe=valor*cantidad;
                alert("El valor de compra de "+cantidad + " unidades de " +ingreso + " por un valor unitario de $" +valor +" es: $" +importe+"\n Lo contactaremos por correo para finalizar el pago y coordinar la entrega. Muchas gracias por su compra!");
              }else{
                alert("El valor ingresado es incorrecto");
              }
              break;

            case "FERNET":
              cantidad=prompt("ingrese la cantidad de "+ingreso +" que desea comoprar");
              if (cantidad>0){
                valor=1900;
                importe=valor*cantidad;
                alert("El valor de compra de "+cantidad + " unidades de " +ingreso + " por un valor unitario de $" +valor +" es: $" +importe+"\n Lo contactaremos por correo para finalizar el pago y coordinar la entrega. Muchas gracias por su compra!");
              }else{
                alert("El valor ingresado es incorrecto");
              }
              break;
            
            case "GIN":
              cantidad=prompt("ingrese la cantidad de "+ingreso +" que desea comoprar");
              if (cantidad>0){
                valor=5000;
                importe=valor*cantidad;
                alert("El valor de compra de "+cantidad + " unidades de " +ingreso + " por un valor unitario de $" +valor +" es: $" +importe+"\n Lo contactaremos por correo para finalizar el pago y coordinar la entrega. Muchas gracias por su compra!");
              }else{
                alert("El valor ingresado es incorrecto");
              }
            break;
            
            case "VODKA":
              cantidad=prompt("ingrese la cantidad de "+ingreso +" que desea comoprar");
              if (cantidad>0){
                valor=1000;
                importe=valor*cantidad;
                alert("El valor de compra de "+cantidad + " unidades de " +ingreso + " por un valor unitario de $" +valor +" es: $" +importe)+"\n Lo contactaremos por correo para finalizar el pago y coordinar la entrega. Muchas gracias por su compra!";
              }else{
                alert("El valor ingresado es incorrecto");
              }
              break;
            
            case "VINO":
              cantidad=prompt("ingrese la cantidad de "+ingreso +" que desea comoprar");
              if (cantidad>0){
                valor=350;
                importe=valor*cantidad;
                alert("El valor de compra de "+cantidad + " unidades de " +ingreso + " por un valor unitario de $" +valor +" es: $" +importe+"\n Lo contactaremos por correo para finalizar el pago y coordinar la entrega. Muchas gracias por su compra!");
              }else{
                alert("El valor ingresado es incorrecto");
              }
              break;

            case "GASEOSA":
              cantidad=prompt("ingrese la cantidad de "+ingreso +" que desea comoprar");
              if (cantidad>0){
                valor=200;
                importe=valor*cantidad;
                alert("El valor de compra de "+cantidad + " unidades de " +ingreso + " por un valor unitario de $" +valor +" es: $" +importe+"\n Lo contactaremos por correo para finalizar el pago y coordinar la entrega. Muchas gracias por su compra!");
              }else{
                alert("El valor ingresado es incorrecto");
              }
              break;

            default:
              alert("Bebida no encontrada!");
              salida = 0;
          }
      }else if(pedido === 2){
        let consulta = prompt("Ingrese la bebida que desea consultar: "+bebidas.map((bebida) => bebida.nombre)).toLocaleUpperCase();
        let bebida = bebidas.find(item => item.nombre === consulta);
        if(bebida != undefined){
        mensaje = `
          Nombre: ${bebida.nombre}
          Precio: $${bebida.precio}
          Cantidad: ${bebida.cant}
        `;
        }else{
          alert("la opcion ingresada es invalida");
          break
        }
        alert(mensaje);
        recorroArray = parseInt(prompt("Quiere ver todos nuestros productos, cantidades y precios? ingrese 1 por Si, 2 por No"));
        if(recorroArray === 1){
          bebidas.forEach(bebida => {
            concat = concat + ("\n Nombre: "+bebida.nombre + ", Cantidad: "+bebida.cant+", Precio: $"+bebida.precio);
          });
          alert(concat)
          compra = parseInt((prompt("\n Si desea alguno de nuestros productos, ingrese 1, para salir ingrese 2 o precione enter")));
          contador = contador + 1 
          if(compra === 1){
            flag = 1;
            break
          }else{
            alert("Muchas gracias por contactarnos!")
            break
          }
        }else if(recorroArray === 2){
          alert("Muchas gracias por contactarnos!")
          contador = 5
          break
        }else{
          alert("La opcion ingresada no es valida");
        }
      }else{
        alert("La opcion ingresada no es valida");
      }
    }else{
      alert("El dato ingresado no es correcto");
      flag = 0;
    }
  if(salida == 1){
    contador = 5;
    break;
  }
  } 
}
if (contador!=5){
  alert("Demasiados intentos incorrectos, vuelva a intentar mas tarde");
}