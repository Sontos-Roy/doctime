
function AllSliders(){
  
  $(".product_slider").slick({
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,  // Changed from 5 to 1 for smoother scrolling
        speed: 300,         // Add animation speed
        cssEase: 'linear',  // Smoother easing
        waitForAnimate: false, // Prevents animation queue buildup
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1  // Changed here too
                }
            },
            {
                breakpoint: 1070,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1  // Changed here too
                }
            },
            {
                breakpoint: 870,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1  // Changed here too
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1  // Changed here too
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1  // Changed here too
                }
            },
            {
                breakpoint: 380,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    
  $(".brand_slider").slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    margin: '10px',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1070,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false
        }
      },

      {
        breakpoint: 770,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $(".reviews_slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    dots: true
  });
  $(".product-slider-main").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.product-slider-nav'
  });
  
  $(".product-slider-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.product-slider-main',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    margin: 20
  });


}

function accordion(){
  $('.accordion-box .accordion-title').click(function(){
    $(this).find('i').toggleClass('fa-plus fa-minus');
    $(this).closest('.accordion-box').find('.accordion-body').stop().slideToggle();
  })
}
function toggle(){
  $('.filter-btn').click(function(){
    $('.sidebar-filter').addClass('open');
    $('.overlay-sidebar').show();
  })
  $('.overlay-sidebar').click(function(){
    $('.sidebar-filter').removeClass('open');
    $('.overlay-sidebar').hide();
  })
  $('.filter_btn_shop').click(function(){
    $('.sidebar-main').addClass('active');
    $('.overlay').show();
  })

}
function navfix(){
    var fixedElement = $('header.header');
    
    $(window).scroll(function() {
      // Get the scroll position
      var scrollPosition = $(window).scrollTop();

      // Check if the scroll position is greater than the element's initial position
      if (scrollPosition >= 140) {
        // If so, add a class to make the element fixed
        fixedElement.addClass('fixed')
      } else {
        // If not, remove the class to make the element relative
        fixedElement.removeClass('fixed')
      }
    });
    $('.icon_cart').click(function(){
      $('.cart_sidebar').addClass('active');
      $('.overlay').show();
    })
    $('.cart_dismiss, .overlay, .sidebar_dismiss').click(function(){
      $('.cart_sidebar').removeClass('active');
      $('.sidebar-main').removeClass('active');
      $('.overlay').hide();
    })
    $('.signin_link').click(function(){
      $('.sign_in').addClass('active');
      $('.overlay').show();
    })
    $('.sign_in_dismiss, .overlay').click(function(){
      $('.sign_in').removeClass('active');
      $('.overlay').hide();
    })
    $('.menu_sidebar .navbar-nav li.has_menu').click(function(){
      $(this).find('.inner_menu').slideToggle();
      $(this).toggleClass('active');
    })
    $('.side_menu_toggler').click(function(){
      $('.menu_sidebar').addClass('active');
      $('.overlay').show();
    })
    $('.overlay').click(function(){
      $('.menu_sidebar').removeClass('active');
      $('.overlay').hide();
    })
    $('.passwordChange .password_visible').click(function(){
      let inputField = $(this).closest('.passwordChange').find('input');
      let ptype = inputField.attr('type');
  
      if (ptype === 'password') {
          inputField.attr('type', 'text');
      } else {
          inputField.attr('type', 'password');
      }
  });
  $('.quantity_box .minus').click(function(){
    let value = $('.quantity_value').val();
    if(value > 0){
        value--;
    }
      $('.quantity_value').val(value);
  });
  $('.quantity_box .plus').click(function(){
    let value = $('.quantity_value').val();
    if(value < 10){
        value++;
    }
      $('.quantity_value').val(value);
  });

}
$(document).ready(function(){
  $('.categories .category div.checkbox').click(function(){
      $(this).toggleClass('active');
      var checkbox = $(this).find('.shop_checkbox');
      checkbox.toggleClass('checked');
      checkbox.prop('checked', !checkbox.prop('checked'));
      console.log('Checkbox checked:', checkbox.prop('checked'));
      // if($(this).find('.shop_checkbox').is(':checked')){
      //     alert('hello');
      // }
      
  });
})
$(document).ready(function () {
  const rangeInput = $(".range-input input");
  const priceInput = $(".price-input input");
  const range = $(".slider .progress");
  let priceGap = 1000;
  
  var timer;
  priceInput.on("input", function (e) {
    let minPrice = parseInt(priceInput.eq(0).val());
    let maxPrice = parseInt(priceInput.eq(1).val());

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput.eq(1).attr("max")) {
      if ($(this).hasClass("input-min")) {
        rangeInput.eq(0).val(minPrice);
        range.css("left", (minPrice / rangeInput.eq(0).attr("max")) * 100 + "%");
      } else {
        rangeInput.eq(1).val(maxPrice);
        range.css("right", (100 - (maxPrice / rangeInput.eq(1).attr("max")) * 100) + "%");
      }
    }
  });
    
  rangeInput.on("input", function (e) {
    let minVal = parseInt(rangeInput.eq(0).val());
    let maxVal = parseInt(rangeInput.eq(1).val());

    if (maxVal - minVal < priceGap) {
      if ($(this).hasClass("range-min")) {
        rangeInput.eq(0).val(maxVal - priceGap);
      } else {
        rangeInput.eq(1).val(minVal + priceGap);
      }
    } else {
      priceInput.eq(0).val(minVal);
      priceInput.eq(1).val(maxVal);
      range.css("left", (minVal / rangeInput.eq(0).attr("max")) * 100 + "%");
      range.css("right", (100 - (maxVal / rangeInput.eq(1).attr("max")) * 100) + "%");
    }
    
    
    clearTimeout(timer);
        var ms = 700; // milliseconds
        timer = setTimeout(function() {
          getProduct();
        }, ms);
   
   
  });
});
$(document).ready(function(){
  AllSliders();
  accordion();
   toggle();
   navfix();
   var $easyzoom = $('.easyzoom').easyZoom();
   $('.fancybox').on('click', function (e) {
    e.preventDefault();
  
    // Open Fancybox
    $.fancybox.open({
        src: $(this).attr('href'),
        type: 'image',
        opts: {
            thumbs: {
                autoStart: true,
            },
            afterLoad: function (instance, current) {
                // Trigger EasyZoom on the opened Fancybox image
                easyzoom.data('easyzoom').swap(current.src, current.width, current.height);
            },
        },
    });
  });
   $(".carousel").swipe({
    swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
        if (direction == 'left') $(this).carousel('next');
        if (direction == 'right') $(this).carousel('prev');
    },
    allowPageScroll: "vertical"
});

});




// Manually control the carousel
var carousel = new bootstrap.Carousel(document.getElementById('product'));

// Handle slide change event
document.getElementById('product').addEventListener('slid.bs.carousel', function (event) {
var indicators = document.getElementById('nav_images').getElementsByTagName('img');

// Remove 'active' class from all indicators
for (var i = 0; i < indicators.length; i++) {
    indicators[i].classList.remove('active');
}

// Add 'active' class to the current indicator
indicators[event.to].classList.add('active');
});