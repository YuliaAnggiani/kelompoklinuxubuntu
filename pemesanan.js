var harga = ['25000','50000','8000','75000'];
var kereta = ['ARGO PARAHYANGAN','WALAHAR','CIKURAY','PANGRANGO'];
function Tujuan() {
 // body...
 var tujuan = document.getElementById('inp_tujuan').value;
 var kereta2 = document.getElementById('kereta2');
 kereta2.innerHTML="<option>--PILIH KERETA--</option>"
 if (tujuan=='gmbr') {
  for (var i = 0; i < 2; i++) {
   result="<option value="+i+">"+kereta[i]+"</option>";
   kereta2.innerHTML+=result;
  }
 }
 else if (tujuan=='grt') {
  for (var i = 2; i < 4; i++) {
   result="<option value="+i+">"+kereta[i]+"</option>";
   kereta2.innerHTML+=result;
  }
 }
}
function harganya(){
 var harga2 = document.getElementById('kereta2').value;
  tampil.value="Rp. "+harga[parseInt(harga2)];
}

function Total() {
 // body...
var harga2 = document.getElementById('kereta2').value;
var jumlah;
jumlah=parseInt(document.getElementById('inp_jumlah').value);
total= jumlah*parseInt(harga[parseInt(harga2)]);
total2.value="Rp. "+total;
}
function pesan() {
 // body...
 var nama=document.getElementById('inp_nama').value;
 var ktp=document.getElementById('inp_ktp').value;
 var yakin = confirm("Apakah Pesanan Sudah Benar ");
  if (yakin) {
    alert('HAI !! ' + nama +" Pesanan Tiket Kamu Sudah Berhasil Dengan No KTP " +ktp);
    alert('Silahkan Lakukan Pembayaran Dengan Total ' + total ); 
  }
  else{
    alert("Pesanan Dibatalkan");
  }
 
}