alert("Bienvenido a Drinks Deploy, para ingresar debe ser mayor de edad");
let contador=1;
let salida=0;
let bebidas="Gancia - Fernet - Gin - Vodka - Vino - Gaseosa";
let correo;
let edad;
while(contador < 4){
  for(contador = 1 ;contador < 4 ;  contador++){
    edad = parseInt(prompt("Ingrese la edad"));
    correo = (prompt("ingrese su direccion de correo electronico"));
    if(edad < 18){
      alert("No puede ingresar al sitio, ingrese su edad nuevamente");
    }else if(edad >= 18){
      alert("Puedes ingresar al sitio");
      salida = 1;
      let ingreso=(prompt("Ingrese la bebida que desea comprar: " +bebidas)).toLowerCase();
      switch(ingreso){
        case "gancia":
          cantidad=prompt("ingrese la cantidad de "+ingreso +" que desea comoprar");
          if (cantidad>0){
            valor=1200;
            importe=valor*cantidad;
            alert("lo contactaremos por correo para finalizar la compra. Muchas gracias!");
            alert("El valor de compra de "+cantidad + " unidad/des de " +ingreso + " por un valor unitario de " +valor +" es: " +importe);
          }else{
            alert("El valor ingresado es incorrecto");
          }
          break;

        case "fernet":
          cantidad=prompt("ingrese la cantidad de "+ingreso +" que desea comoprar");
          if (cantidad>0){
            valor=1900;
            importe=valor*cantidad;
            alert("El valor de compra de "+cantidad + " unidad/des de " +ingreso + " por un valor unitario de " +valor +" es: " +importe);
            alert("lo contactaremos por correo para finalizar la compra. Muchas gracias!");
          }else{
            alert("El valor ingresado es incorrecto");
          }
          break;
        
        case "gin":
          cantidad=prompt("ingrese la cantidad de "+ingreso +" que desea comoprar");
          if (cantidad>0){
            valor=5000;
            importe=valor*cantidad;
            alert("El valor de compra de "+cantidad + " unidad/des de " +ingreso + " por un valor unitario de " +valor +" es: " +importe);
            alert("lo contactaremos por correo para finalizar la compra. Muchas gracias!");
          }else{
            alert("El valor ingresado es incorrecto");
          }
        break;
        
        case "vodka":
          cantidad=prompt("ingrese la cantidad de "+ingreso +" que desea comoprar");
          if (cantidad>0){
            valor=1000;
            importe=valor*cantidad;
            alert("El valor de compra de "+cantidad + " unidad/des de " +ingreso + " por un valor unitario de " +valor +" es: " +importe);
            alert("lo contactaremos por correo para finalizar la compra. Muchas gracias!");
          }else{
            alert("El valor ingresado es incorrecto");
          }
          break;
        
        case "vino":
          cantidad=prompt("ingrese la cantidad de "+ingreso +" que desea comoprar");
          if (cantidad>0){
            valor=350;
            importe=valor*cantidad;
            alert("El valor de compra de "+cantidad + " unidad/des de " +ingreso + " por un valor unitario de " +valor +" es: " +importe);
            alert("lo contactaremos por correo para finalizar la compra. Muchas gracias!");
          }else{
            alert("El valor ingresado es incorrecto");
          }
          break;

        case "gaseosa":
          cantidad=prompt("ingrese la cantidad de "+ingreso +" que desea comoprar");
          if (cantidad>0){
            valor=200;
            importe=valor*cantidad;
            alert("El valor de compra de "+cantidad + " unidad/des de " +ingreso + " por un valor unitario de " +valor +" es: " +importe);
            alert("lo contactaremos por correo para finalizar la compra. Muchas gracias!");
          }else{
            alert("El valor ingresado es incorrecto");
          }
          break;

        default:
          alert("Bebida no encontrada!");
        break;
      }

    }else{
      alert("El dato ingresado no es correcto");
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