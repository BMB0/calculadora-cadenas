function calculador(cadena) {
  var i = 0, res = 0;
  res = parseInt(cadena);
  if(cadena === "")
  {
    res = 0;
  }
  if(cadena.search(",") != -1) 
  {
    const cadenaArray = cadena.split(",");
    res = parseInt(cadenaArray[0]) +  parseInt(cadenaArray[1]);
  } 
  return res;
}

export default calculador;
