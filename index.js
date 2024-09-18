
// let imgBox = document.getElementById("imgBox");
// let qrImage = document.getElementById("qrImage");
// let qrText = document.getElementById("qrText");

// function generateQr(){

//     if (qrText.value.length > 0){
//         qrImage.src =
//           "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
//           qrText.value;
//         imgBox.classList.add("show-img");
//     }
//     else{
//         qrText.classList.add("error");
//         setTimeout(()=>{
//             qrText.classList.remove('error')
//         },1000);
//     }
    
// }
let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let downloadBtn = document.getElementById("downloadBtn");

function generateQr() {
  if (qrText.value.length > 0) {
    const qrUrl =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;
    qrImage.src = qrUrl;
    imgBox.classList.add("show-img");

    // Show the download button
    downloadBtn.style.display = "inline-block";

    // Set the href attribute to the QR code URL
    downloadBtn.href = qrUrl;
  } else {
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
  }
}


