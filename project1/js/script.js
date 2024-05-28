document.addEventListener('DOMContentLoaded', function() 
{
   
  let currentSlide = 0;
  const slides = document.querySelector('.slide-content');
  const totalSlides = slides.children.length;

  function changeSlide(n) {
      currentSlide += n;

      if (currentSlide >= totalSlides) {
          currentSlide = 0;
      }

      if (currentSlide < 0) {
          currentSlide = totalSlides - 1;
      }

      slides.style.transform = `translateX(${-currentSlide * 100}%)`;
  }

  document.querySelector('.prev').addEventListener('click', function() {
      changeSlide(-1);
  });

  document.querySelector('.next').addEventListener('click', function() {
      changeSlide(1);
  });
});

var fiets = document.getElementById('fiets');
    var currentPosition = 0;
    var speed = 3; // snelheid fiets

    function moveFiets() {
        currentPosition += speed;
        fiets.style.left = currentPosition + 'px';

        if (currentPosition > window.innerWidth) {
            currentPosition = -fiets.width;
        }

        requestAnimationFrame(moveFiets);
    }

    
    moveFiets();

    document.addEventListener('DOMContentLoaded', function() {
      const fietsen = document.querySelectorAll('.fiets');
      const detailsSection = document.getElementById('details');
      const detailsImage = document.getElementById('details-image');
      const detailsInfo = document.getElementById('details-info');
  
      fietsen.forEach(fiets => {
          fiets.addEventListener('click', function() {
              const fietsId = this.dataset.fietsId;
              hideAllFietsen();
              showFietsDetails(fietsId);
          });
      });
  
      function hideAllFietsen() {
          fietsen.forEach(fiets => {
              fiets.style.display = 'none';
          });
      }
  
      function showFietsDetails(fietsId) {
          const selectedFiets = document.querySelector(`.fiets[data-fiets-id="${fietsId}"]`);
          const fietsImageSrc = selectedFiets.querySelector('img').src;
          const fietsName = selectedFiets.querySelector('p').textContent;
  
          detailsImage.src = fietsImageSrc;
          detailsInfo.textContent = getFietsDetailsById(fietsId);
  
          detailsSection.classList.remove('hidden');
      }
  
      function getFietsDetailsById(fietsId) 
      {
          const fietsDetails = {
              '1': 'Details voor fiets 1: elektrisch, geschikt voor zakelijk en prive, dames, transport, Pelikaan, nieuw, zwart, €769,00',
              '2': 'Details voor fiets 2: elektrisch, geschikt voor zakelijk en prive, dames, stads, Stella, nieuw, zwart, €999,00',
              '3': 'Details voor fiets 3: elektrisch, geschikt voor zakelijk en prive, heren, stads, Gazelle, nieuw, blauw, €2199,00',
              '4': 'Details voor fiets 4: niet elektrisch, geschikt voor zakelijk en prive, heren, Gazelle, stads, nieuw, meerdere, €679,00'
          };
  
          return fietsDetails[fietsId];
      }
  });


function verhuurFietsen() {
    const geselecteerdeFietsen = document.querySelectorAll('input[name="selectBikes"]:checked');
    const meldingDiv = document.getElementById('melding');

    if (geselecteerdeFietsen.length === 0) {
        meldingDiv.innerHTML = "Selecteer minstens één fiets om te huren.";
    } else {
        let melding = "Geselecteerde fiets(en): ";

        geselecteerdeFietsen.forEach((checkbox, index) => {
            const fietsNaam = checkbox.value;
            const huurprijs = checkbox.parentNode.nextElementSibling.textContent.trim();
            melding += `${fietsNaam} (${huurprijs} )`;

            if (index < geselecteerdeFietsen.length - 1) {
                melding += ", ";
            }
        });

        meldingDiv.innerHTML = melding;
    }
}