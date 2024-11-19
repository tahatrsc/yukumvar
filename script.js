// script.js
function detayGoster(baslik, agirlik, yer) {
    const modal = document.getElementById("detay-modal");
    const modalBaslik = document.getElementById("modal-baslik");
    const modalDetay = document.getElementById("modal-detay");

    modalBaslik.innerText = baslik;
    modalDetay.innerText = `Ağırlık: ${agirlik}kg\nYer: ${yer}`;

    modal.style.display = "block"; // Modali göster
}

function modalKapat() {
    const modal = document.getElementById("detay-modal");
    modal.style.display = "none"; // Modali gizle
}

// Arama fonksiyonu
function aramaYap() {
    const arama = document.getElementById("arama").value.toLowerCase();
    const yukler = document.querySelectorAll(".yuk-kart");

    yukler.forEach(yuk => {
        const yukAciklama = yuk.querySelector("h3").innerText.toLowerCase();
        if (yukAciklama.includes(arama)) {
            yuk.style.display = "block"; // Eşleşiyorsa göster
        } else {
            yuk.style.display = "none"; // Eşleşmiyorsa gizle
        }
    });
}

// Filtreleme fonksiyonu
function filtrele() {
    const agirlikFiltre = document.getElementById("filtre").value;
    const yukler = document.querySelectorAll(".yuk-kart");

    yukler.forEach(yuk => {
        const agirlik = parseInt(yuk.getAttribute("data-agirlik"), 10);

        if (agirlikFiltre === "") {
            yuk.style.display = "block"; // Tüm yükleri göster
        } else if (agirlik >= agirlikFiltre) {
            yuk.style.display = "block"; // Filtreye uyan yükleri göster
        } else {
            yuk.style.display = "none"; // Uymayan yükleri gizle
        }
    });
}
function kayitOl() {
    const isim = document.getElementById("isim").value;
    const email = document.getElementById("email").value;
    const sifre = document.getElementById("sifre").value;
    const sifreTekrar = document.getElementById("sifreTekrar").value;

    // Şifre kontrolü
    if (sifre !== sifreTekrar) {
        alert("Şifreler eşleşmiyor!");
        return false; // Formun gönderilmesini engelle
    }

    // Kullanıcı bilgilerini işlemek için API çağrısı veya başka işlemler burada yapılabilir.

    alert("Kayıt işleminiz başarıyla tamamlandı!");
    return false; // Formun gönderilmesini engelle
}
function büyüt(element) {
    element.style.transform = "scale(1.1)";
    element.style.transition = "transform 0.3s ease";
}

function kucult(element) {
    element.style.transform = "scale(1)";
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".sofor-detaylar p").forEach(function(p) {
        if (p.textContent.trim().endsWith(":")) { 
            p.style.display = "none"; // İçeriği boş olan alanları gizler
        }
    });
});
document.getElementById('yükForm').addEventListener('submit', function (event) {
  event.preventDefault();
  alert('Yük başarıyla eklendi!');
  this.reset();
});

$(document).ready(function(){
    $('.menu__item').click(function(){
      $('.menu__item').removeClass('active');
      $(this).addClass('active');
    });
  });
  
  var swiper = new Swiper(".swiper", {
    effect: "cube",
    grabCursor: true,
    loop: true,
    speed: 1000,
    cubeEffect: {
      shadow: false,
      slideShadows: true,
      shadowOffset: 10,
      shadowScale: 0.94,
    },
    autoplay: {
      delay: 2600,
      pauseOnMouseEnter: true,
    },
  });
  
  tsParticles.load("tsparticles", {
    fpsLimit: 60,
    backgroundMode: {
      enable: true,
      zIndex: -1,
    },
    particles: {
      number: {
        value: 30,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: [
          "#3998D0",
          "#2EB6AF",
          "#A9BD33",
          "#FEC73B",
          "#F89930",
          "#F45623",
          "#D62E32",
        ],
      },
      destroy: {
        mode: "split",
        split: {
          count: 1,
          factor: {
            value: 5,
            random: {
              enable: true,
              minimumValue: 4,
            },
          },
          rate: {
            value: 10,
            random: {
              enable: true,
              minimumValue: 5,
            },
          },
          particles: {
            collisions: {
              enable: false,
            },
            destroy: {
              mode: "none",
            },
            life: {
              count: 1,
              duration: {
                value: 1,
              },
            },
          },
        },
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          sides: 5,
        },
      },
      opacity: {
        value: 1,
        random: false,
        animation: {
          enable: false,
          speed: 1,
          minimumValue: 0.1,
          sync: false,
        },
      },
      size: {
        value: 8,
        random: {
          enable: true,
          minimumValue: 4,
        },
        animation: {
          enable: false,
          speed: 40,
          minimumValue: 0.1,
          sync: false,
        },
      },
      collisions: {
        enable: true,
        mode: "destroy",
      },
      move: {
        enable: true,
        speed: 7,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    detectRetina: true,
  });
  