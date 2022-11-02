function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

function openTabMenu(evt, TabMenu) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(TabMenu).style.display = "block";
  evt.currentTarget.className += " active";
}
var swiper1 = new Swiper("#tab-menu .mySwiper1", {
  slidesPerView: 4,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 2000,
  },
});

var swiper3 = new Swiper("#tab-menu .mySwiper3", {
  slidesPerView: 4,
  spaceBetween: 30,
  autoplay: {
    delay: 2000,
  },
});

var swiper4 = new Swiper("#tab-menu .mySwiper4", {
  slidesPerView: 4,
  spaceBetween: 30,
  autoplay: {
    delay: 2000,
  },
});



$(document).ready(function () {
  var elem = $("#getcard div")
  $(elem).on("click", function () {
    debugger
    let price = jQuery("#price", this).text()
    let img = jQuery("#img", this).attr('src')
    let name = jQuery("#productname", this).text()
    let basketitem = { Name: name, Price: price, Img: img };

    let basketlist = JSON.parse(localStorage.getItem('basket'));

    if (basketlist==null) {
      basketlist = [basketitem];
      localStorage.setItem("basket", JSON.stringify(basketlist))
    }else{
      basketlist.push(basketitem)
      localStorage.setItem("basket", JSON.stringify(basketlist))
    }

  });


});


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

