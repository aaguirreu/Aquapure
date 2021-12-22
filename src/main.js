const { createClient } = require('@supabase/supabase-js')

const supurl = 'https://hfgjmakrfcnefkiaaygm.supabase.co';
const supkey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDAxNDIwOSwiZXhwIjoxOTU1NTkwMjA5fQ.sMPlAWqgmLSSMHFWhhMZcT71VzB-lQEJcKGaDYSpAuI'

var supabase = createClient(supurl, supkey)

let { data: llenos } = await supabase
    .from('inventario')
    .select('stock_bidones_llenos');
document.querySelector('#llenos').innerText = Object.values(llenos[0])[0];

let { data: vacios } = await supabase
    .from('inventario')
    .select('stock_bidones_vacios');
document.querySelector('#vacios').innerText = Object.values(vacios[0])[0];

tableQuery();

async function tableQuery() {

    let { data: total_ventas } = await supabase
    .from('venta')
    .select('venta_id')

    let { data: venta_id } = await supabase
    .from('venta')
    .select('venta_id')
  console.log( Object.values(venta_id[0])[0] );
  
  let { data: comprador_id } = await supabase
    .from('comprador')
    .select('comprador_id')
  console.log( Object.values(comprador_id[0])[0] );

  let { data: comprador_name } = await supabase
    .from('comprador')
    .select('comprador_name')
  console.log( Object.values(comprador_name[0])[0] );
    
  let { data: unidades } = await supabase
    .from('venta')
    .select('unidades')
  console.log( Object.values(unidades[0])[0] );

  let { data: recarga } = await supabase
    .from('venta')
    .select('recarga')
  console.log( Object.values(recarga[0])[0] );

  let { data: ubicacion } = await supabase
  .from('venta')
  .select('ubicacion')
console.log( Object.values(ubicacion[0])[0] );

  let { data: contacto } = await supabase
  .from('comprador')
  .select('contacto')
console.log( Object.values(contacto[0])[0] );

  let { data: pagado } = await supabase
  .from('venta')
  .select('pedido_pagado')
console.log( Object.values(pagado[0])[0] );

  let { data: monto } = await supabase
  .from('venta')
  .select('monto')
console.log( Object.values(monto[0])[0] );

  for (let index = 0; index < total_ventas.length; index++) {
    let tr = document.createElement('tr');

    let th = document.createElement('th');
    th.innerHTML = Object.values(venta_id[index])[0]
    tr.appendChild(th);

    let td1 = document.createElement('td');
    tr.appendChild(td1);
    td1.innerHTML = Object.values(comprador_id[index])[0];
    
    let td2 = document.createElement('td');
    tr.appendChild(td2);
    td2.innerHTML = Object.values(comprador_name[index])[0];
    
    let td3 = document.createElement('td');
    tr.appendChild(td3);
    td3.innerHTML = Object.values(unidades[index])[0];
    
    let td4 = document.createElement('td');
    tr.appendChild(td4);
    td4.innerHTML = `$ ${Object.values(monto[index])[0]}`;

    let td5 = document.createElement('td');
    tr.appendChild(td5);
    td5.innerHTML = Object.values(recarga[index])[0];

    let td6 = document.createElement('td');
    tr.appendChild(td6);
    td6.innerHTML = Object.values(contacto[index])[0] 
    
    let td7 = document.createElement('td');
    tr.appendChild(td7);
    td7.innerHTML = "owo";

    let td8 = document.createElement('td');
    tr.appendChild(td8);
    td8.innerHTML = Object.values(ubicacion[index])[0] 
    
    let td9 = document.createElement('td');
    tr.appendChild(td9);
    td9.innerHTML = Object.values(pagado[index])[0] 
    
    document.querySelector('tbody').appendChild(tr);  
}


}