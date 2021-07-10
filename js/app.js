window.addEventListener('load', function() {

  new Glider(document.querySelector('.tarjetas'), {
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: '.carousel-indicadores',
    arrows: {
      prev: '.carousel-anterior',
      next: '.carousel-siguiente'
    },
    responsive: [{
        breakpoint: 450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }, {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      }

    ]
  });

  new Glider(document.querySelector('.nosotros'), {
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: '.carousel-indicadores-nosotros',
    arrows: {
      prev: '.carousel-anterior-nosotros',
      next: '.carousel-siguiente-nosotros'
    },
    responsive: [{
        breakpoint: 450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }, {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      }

    ]
  });

});
