"use strict";

var ORDERS = [];
var SELECTED_ORDER = 0;

var PLAYBOX_COMFORT_AMOUNT = 0;
var PLAYBOX_AUCTION_AMOUNT = 0;
var XBOX_COMFORT_AMOUNT = 0;
var XBOX_AUCTION_AMOUNT = 0;

var PROMO_CODE = {};
var DISCOUNT = 0;

var MINIMUM_COIN = 10000;
var MAXIMUM_COIN = 50000000;

var CUR_RATES = "";
var CUR_NAME = "";

var CONSOLE_NAME = "";
var MAINQUANTITY="";
console.log('MAINQUANTITY',MAINQUANTITY)
var PRICE = 0;
var PRICE_VALUE = 1;
//
//

function getReviews() {
  $.ajax({
    type: "GET",
    url: "/api/getreviews/",
    success: function (data) {
      data = data["res"];
      // console.log(data);
      var html = ``;
      html += `      <div class="wrap">
        <span
          id="right-arrow"
          class="arrow right fa fa-chevron-right"
        ></span>
        <span
          id="left-arrow"
          class="arrow left fa fa-chevron-left"
        ></span>
        <ul id="testim-dots" class="dots">
        
        <li class="dot active"></li>`;
      for (var ddot = 1; ddot < data.length; ddot++) {
        html += `<li class="dot"></li>`;
      }
      html += `
         </ul>
        <div id="testim-content" class="cont">
        `;
      for (var i = 0; i < data.length; i++) {
        if (i == 0) {
          html +=
            `
        <div class="active">
            <div class="img">
              <img
              src="static/images/reviews-user.png"  
              alt=""
              />
            </div>
            <h2>` +
            data[i]["user"] +
            `</h2>
            <p class="stars">`;
          for (var k = 0; k < data[i]["star"]; k++) {
            html += `<i class="fa fa-star" aria-hidden="true"></i>`;
          }
          for (var k = 0; k < 5 - data[i]["star"]; k++) {
            html += `<i class="fa fa-star" style="color: #747474 !important;" aria-hidden="true"></i>`;
          }
          html +=
            `</p>
              <p>
              ` +
            data[i]["mess"] +
            `
              </p>
          </div>
        `;
        } else {
          html +=
            `
          <div class="">
            <div class="img">
              <img
              src="static/images/reviews-user.png"  
              alt=""
              />
            </div>
            <h2>` +
            data[i]["user"] +
            `</h2>
            <p class="stars">`;
          for (var k = 0; k < data[i]["star"]; k++) {
            html += `<i class="fa fa-star" aria-hidden="true"></i>`;
          }
          for (var k = 0; k < 5 - data[i]["star"]; k++) {
            html += `<i class="fa fa-star" style="color: #747474 !important;" aria-hidden="true"></i>`;
          }
          html +=
            `</p>
              <p>
              ` +
            data[i]["mess"] +
            `
              </p>
          </div>
        `;
        }
      }
      html += `</div>`;

      document.getElementById("testim").innerHTML += html;

      // vars
      ("use strict");
      var testim = document.getElementById("testim"),
        testimDots = Array.prototype.slice.call(
          document.getElementById("testim-dots").children
        ),
        testimContent = Array.prototype.slice.call(
          document.getElementById("testim-content").children
        ),
        testimLeftArrow = document.getElementById("left-arrow"),
        testimRightArrow = document.getElementById("right-arrow"),
        testimSpeed = 4500,
        currentSlide = 0,
        currentActive = 0,
        testimTimer,
        touchStartPos,
        touchEndPos,
        touchPosDiff,
        ignoreTouch = 30;
      window.onload = function () {
        // Testim Script
        function playSlide(slide) {
          for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
          }

          if (slide < 0) {
            slide = currentSlide = testimContent.length - 1;
          }

          if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
          }

          if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");
          }
          testimContent[slide].classList.add("active");
          testimDots[slide].classList.add("active");

          currentActive = currentSlide;

          clearTimeout(testimTimer);
          testimTimer = setTimeout(function () {
            playSlide((currentSlide += 1));
          }, testimSpeed);
        }

        testimLeftArrow.addEventListener("click", function () {
          playSlide((currentSlide -= 1));
        });

        testimRightArrow.addEventListener("click", function () {
          playSlide((currentSlide += 1));
        });

        for (var l = 0; l < testimDots.length; l++) {
          testimDots[l].addEventListener("click", function () {
            playSlide((currentSlide = testimDots.indexOf(this)));
          });
        }

        playSlide(currentSlide);

        // keyboard shortcuts
        document.addEventListener("keyup", function (e) {
          switch (e.keyCode) {
            case 37:
              testimLeftArrow.click();
              break;

            case 39:
              testimRightArrow.click();
              break;

            case 39:
              testimRightArrow.click();
              break;

            default:
              break;
          }
        });

        testim.addEventListener("touchstart", function (e) {
          touchStartPos = e.changedTouches[0].clientX;
        });

        testim.addEventListener("touchend", function (e) {
          touchEndPos = e.changedTouches[0].clientX;

          touchPosDiff = touchStartPos - touchEndPos;

          // console.log(touchPosDiff);
          // console.log(touchStartPos);
          // console.log(touchEndPos);

          if (touchPosDiff > 0 + ignoreTouch) {
            testimLeftArrow.click();
          } else if (touchPosDiff < 0 - ignoreTouch) {
            testimRightArrow.click();
          } else {
            return 0;
          }
        });
      };

      //
      var $status = $(".pagingInfo");
      var $slickElement = $(".js-delivery-slider");

      $slickElement.on(
        "init reInit afterChange",
        function (event, slick, currentSlide, nextSlide) {
          //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
          var i = (currentSlide ? currentSlide : 0) + 1;
          $status.text(i + "/" + slick.slideCount);
        }
      );

      $slickElement.slick({
        autoplay: true,
        dots: false,
        arrows: true,
        appendArrows: ".c-section__delivery__actions--items",
      });

      //
    },
    error: function (data) {
      console.log("Error!");
    },
  });
}

function changePrice() {
  let num_format = Intl.NumberFormat("en-US");
  var amount = document.getElementById("coinamount").value;
  
  MAINQUANTITY=amount;
  console.log("INNER MAINQUANTITY",MAINQUANTITY)
  document.getElementById("kFormat").innerHTML =
  "= " + kFormatter(parseInt(amount));
  
  if (parseInt(amount) < MINIMUM_COIN || amount == "") {
    document.getElementById("coinamount").value = MINIMUM_COIN;
    amount = parseInt(MINIMUM_COIN);
    MAINQUANTITY=amount;
  }
  if (parseInt(amount) > MAXIMUM_COIN) {
    document.getElementById("coinamount").value = MAXIMUM_COIN;
    amount = parseInt(MAXIMUM_COIN);
    MAINQUANTITY=amount;
  }
  var selec = document.getElementById("cursym");
  var sym = selec.value;
  PRICE_VALUE = CUR_RATES;
  // console.log(CUR_RATES[sym]);
  // console.log(CUR_RATES)
  
  var p = 0;
  var ele1 = document.getElementsByClassName("c-section__banner__btn--fill")[0];
  ele1 = ele1.getAttribute("data-id");
  
  var ele2 = document.querySelectorAll("#ct")[0].checked;
  
  console.log("MAINQUANTITY",MAINQUANTITY)
  if (ele1 == "playstation" && ele2) {
    p = amount * (PLAYBOX_COMFORT_AMOUNT * PRICE_VALUE);
    p = amount * (PLAYBOX_COMFORT_AMOUNT * PRICE_VALUE);
  } else if (ele1 == "playstation" && !ele2) {
    p = amount * (PLAYBOX_AUCTION_AMOUNT * PRICE_VALUE);
  } else if (ele1 == "xbox" && ele2) {
    p = amount * (XBOX_COMFORT_AMOUNT * PRICE_VALUE);
  } else if (ele1 == "xbox" && !ele2) {
    p = amount * (XBOX_AUCTION_AMOUNT * PRICE_VALUE);
  }

  p = parseFloat(p).toFixed(2);
  document.getElementById("coinprice").value = p;
  var symsym = selec.options[selec.selectedIndex].getAttribute("data-id");
  document.getElementById("symbol").innerText = symsym;
  PRICE = p;
  // console.log('Total=',PRICE)

  if (ele1 == "playstation") {
    document.getElementById("duration-1").disabled = false;
    document.getElementById("duration-2").disabled = false;
    document.getElementById("duration-3").disabled = true;
    document.getElementById("duration-4").disabled = true;
  } else if (ele1 == "xbox") {
    document.getElementById("duration-1").disabled = true;
    document.getElementById("duration-2").disabled = true;
    document.getElementById("duration-3").disabled = false;
    document.getElementById("duration-4").disabled = false;
  }

  var console_ps = document.querySelectorAll("#duration-1")[0].checked;
  var console_xbox = document.querySelectorAll("#duration-3")[0].checked;
  var console_name = "";
  if (ele1 == "playstation") {
    if (console_ps) {
      console_name = "PS4";
      CONSOLE_NAME = console_name;
    } else {
      console_name = "PS5";
      CONSOLE_NAME = console_name;
    }
  } else {
    if (console_xbox) {
      console_name = "Xbox ONE";
      CONSOLE_NAME = console_name;
    } else {
      console_name = "Xbox X/S";
      CONSOLE_NAME = console_name;
    }
  }
  var ele1 = document.getElementsByClassName("c-section__banner__btn--fill")[0];
  ele1 = ele1.getAttribute("data-id");

  var ele2 = document.querySelectorAll("#ct")[0].checked;
  if (ele2) {
    ele2 = "comfort";
  } else {
    ele2 = "auction";
  }
  // console.log(PRICE)

  //
  // check coupon
  let DISCOUNT_PRICE = 0;
  let getcoupon = document.getElementById("couponcode").value;
  // console.log("getcouponvalue",getcoupon)
  if (getcoupon == PROMO_CODE) {
    DISCOUNT_PRICE = PRICE - (PRICE * DISCOUNT) / 100;
    console.log("DISCOUNT_PRICE", DISCOUNT_PRICE);
    DISCOUNT_PRICE=parseFloat(DISCOUNT_PRICE).toFixed(2);
    PRICE = DISCOUNT_PRICE;
    document.getElementById("coinprice").value = PRICE;
    console.log("DISCOUNT_Total=", PRICE);
  } else {
    PRICE = p;
    document.getElementById("coinprice").value = PRICE;
  }
  var name = ele1 + "_" + ele2;
  var quantity = document.getElementById("coinamount").value;


  document.getElementById("yourbill").innerHTML = "";
  var coupon_detailshtml = ``;
  coupon_detailshtml +=
    `<figure>
  <span><strong>` +
    CONSOLE_NAME +
    ` </strong>(` +
    ele2 +
    `)</span>
  <span>` +
    quantity +
    `</span>
  <span>` +
    p +
    CUR_NAME +
    `</span>
  </figure>
  </section>      
  <section id="subtotal">
  <figure>
  <span>Subtotal</span><span>-</span>
  <span><strong>` +
    p +
    CUR_NAME +
    `</strong></span></figure>
  </section>;
  <section id="Discountinvoice">
  <figure>
  <span>Discount</span><span>-</span>
  <span><strong>-` +
    DISCOUNT +
    CUR_NAME +
    `%</strong></span></figure>
  </section>;
  <section id="totalbill">
  <span><strong>Total</strong></span>
  <span><strong>` +
    PRICE +
    CUR_NAME +
    `</strong></span>
  </section>`;
  document.getElementById("yourbill").innerHTML += coupon_detailshtml;
}
console.log("OUTER_MAIN_Quantity",MAINQUANTITY)
//
// Coupon code
function couponCode() {
  $.ajax({
    type: "POST",
    url: "/api/getcoupon/",
    success: function (data) {
      var data1 = data["set"];
      var coupon = String(document.getElementById("couponcode").value);

      function isCoupon(successcoupon) {
        return successcoupon.coupon_code === coupon;
      }
      var maincoupon = data1.find(isCoupon);
      if (maincoupon) {
        var coupon_name = data["coupon_name"];
        var discount = data["discount"];
        console.log("coupon_name=", coupon_name);
        console.log("discount=", discount);
        PROMO_CODE = maincoupon["coupon_code"];
        DISCOUNT = maincoupon["discount"];
        console.log("PROMO_CODE", PROMO_CODE);
        console.log("DISCOUNT", DISCOUNT);
        changePrice();
        document.getElementById(
          "error_coupon"
          ).innerHTML = `<span id="coupon_success">Coupon successfully appied!</span>`;
        } else if (maincoupon == undefined) {
        DISCOUNT = 0
        changePrice();
        document.getElementById(
          "error_coupon"
        ).innerHTML = `<span id="coupon_invalid">Invalid couponcode</span>`;
      }
    },
    error: function () {
      console.log("Error!");
    },
  });
}

// Coin in Convert in ("K","M","B")
var SI_SYMBOL = ["", "k", "M", "B", "T", "P", "E"];
function kFormatter(number) {
  // what tier? (determines SI symbol)
  var tier = (Math.log10(Math.abs(number)) / 3) | 0;
  // if zero, we don't need a suffix
  if (tier == 0) return "10.00K";
  // get suffix and determine scale
  if (number > 50000000) {
    return "50.00M";
  } else {
    var suffix = SI_SYMBOL[tier];
    var scale = Math.pow(10, tier * 3);
    // scale the number
    var scaled = number / scale;
    // format number and add suffix
    return scaled.toFixed(2) + suffix;
  }
}

function changeBut(ele) {
  // console.log(ele.className);
  var cls = ele.className;
  if (cls.includes("c-section__banner__btn--fill")) {
    return;
  } else {
    document.getElementsByClassName(
      "c-section__banner__btn--fill"
    )[0].className =
      "btn btn-outline c-section__banner__btn c-section__banner__btn--outline";
    ele.className =
      "btn btn-primary c-section__banner__btn c-section__banner__btn--fill";
  }
  changePrice();
}

$(document).ready(function () {
  getReviews();
  checkAuth();

  var but = document.getElementsByClassName("c-section__banner__btn");
  but[0].addEventListener("click", function () {
    changeBut(this);
  });
  but[1].addEventListener("click", function () {
    changeBut(this);
  });

  //
  $.ajax({
    type: "POST",
    currency: {
      cu_name: document
        .getElementById("cursym")
        .options[document.getElementById("cursym").selectedIndex].getAttribute(
          "data-id"
        ).value,
    },
    url: "/api/getsettings/",
    success: function (data) {
      var data1 = data["settings"][0];
      PLAYBOX_AUCTION_AMOUNT = data1["playstation_auction"];
      PLAYBOX_COMFORT_AMOUNT = data1["playstation_comfort"];
      XBOX_AUCTION_AMOUNT = data1["xbox_auction"];
      XBOX_COMFORT_AMOUNT = data1["xbox_comfort"];

      CUR_RATES = data["rates"];
      // console.log('CUR_RATES',CUR_RATES)
      changePrice();
    },
    error: function () {
      console.log("Error!");
    },
  });
  //

  $(".nice-select").niceSelect();
});

//
function sendMail() {
  var mail = document.getElementById("mailboxin").value;
  if (mail) {
    $.ajax({
      type: "POST",
      url: "/api/mailbox/",
      data: {
        mail: mail,
      },
      success: function (data) {
        alert("Mail added.");
      },
      error: function (data) {
        console.log("Error!");
      },
    });
  }
}

function showLogin() {
  toTop();
  // document.getElementById("loginclose").click();
  document.getElementById("logincont").style.display = "block";
}

function hideLogin() {
  document.getElementById("logincont").style.display = "none";
}
function toTop() {
  window.scrollTo(0, 0);
}
function showToTop() {
  var top = window.pageYOffset || document.documentElement.scrollTop;
  // console.log(top);
  if (top > 520) {
    document.getElementById("totop").style.display = "flex";
  } else {
    document.getElementById("totop").style.display = "none";
  }
}

function checkAuth() {
  var cookie = getCookie("_qtrajklvfgetqawyuwquywqruyqruy");

  if (cookie) {
    document.getElementById("loginbut1").innerText = "Logout";
    document.getElementById("loginbut2").innerText = "Logout";

    var type = getCookie("_qtrajklvfgetqawyuwquywqruyqruy_type");
    if (type == "google") {
      document
        .getElementById("loginbut1")
        .addEventListener("click", function () {
          googlesignOut();
        });
      document
        .getElementById("loginbut2")
        .addEventListener("click", function () {
          googlesignOut();
        });
    } else {
      document
        .getElementById("loginbut1")
        .addEventListener("click", function () {
          logout();
        });
      document
        .getElementById("loginbut2")
        .addEventListener("click", function () {
          logout();
        });
    }

    $.ajax({
      type: "GET",
      url: "/api/getuser/",
      success: function (data) {
        console.log('data',data)
        document.getElementById("accname").value = data["account"]["name"];
        document.getElementById("accmail").value = data["account"]["email"];
        document.getElementById("accpass").value = "*".repeat(
          data["account"]["password"]
          );
        ORDERS = data["orders"];
        console.log('ORDERS',ORDERS)
        if (ORDERS.length == 0) {
          document.getElementById("orderlist").innerHTML = "No orders";
          return;
        }
        for(var i = 0; i < ORDERS.length; i++) {
          var stat = ORDERS[i]["status"];
          if (stat == 0) {
            stat = "Pending";
            continue;
          } else if (stat == 1) {
            stat = "Completed";
          } else if (stat == 2) {
            stat = "Delivered";
          } else if (stat == 3) {
            stat = "Cancelled";
          }
          var html =
          `
          <table class="acctable">
          <tbody>
              <tr>
                <td>Order Id</td>
                <td>#` +
            ORDERS[i]["id"] +
            `</td>
              </tr>
              <tr>
                <td>Date</td>
                <td>` +
            ORDERS[i]["tim"].slice(0, 10) +
            `</td>
              </tr>
              <tr>
                <td>Order Information</td>
                <td>` +
            ORDERS[i]["info"] +
            `</td>
              </tr>
              <tr>
                <td>Status</td>
                <td>` +
            stat +
            `</td>
              </tr>
              <tr>
              <td>Track order</td>
              <td class='linktd' onclick='showTrack("` +
            ORDERS[i]["id"] +
            `")'>Reviews</td>
            </tr>
            </tbody>
          </table> 
            `;

          document.getElementById("orderlist").innerHTML += html;
        }
      },
      error: function (data) {
        console.log("Error!");
      },
    });
  } else {
    document.getElementById("loginbut1").addEventListener("click", function () {
      showLogin();
    });
    document.getElementById("loginbut2").addEventListener("click", function () {
      document.getElementById("hamburger-1").click();
      // const HAMBURGER=document.getElementById("hamburger-1").classList;
      // if (HAMBURGER=="hamburger is-active"){
      //   HAMBURGER.remove("is-active")}
      // const menu=document.getElementById("mobileMenu").classList;
      // if (menu=="modal fade show"){
      //   menu.remove("show")}

        
      showLogin();
    });
  }
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
function logout() {
  $.ajax({
    type: "GET",
    url: "/api/logout/",
    success: function (data) {
      setTimeout(function () {
        window.location.reload();
      }, 1000);
    },
    error: function (data) {
      console.log("Error!");
    },
  });
}

function loginFunc(event) {
  event.preventDefault();
  var mail = document.getElementById("loginmail").value;
  var pass = document.getElementById("loginpass").value;
  if (mail == "" || pass == "") {
    document.getElementById("loginerror").innerText = "Enter all fields.";
    return;
  }
  $.ajax({
    type: "POST",
    url: "/api/login/",
    data: {
      mail: mail,
      password: pass,
    },
    success: function (data) {
      if (data.hasOwnProperty("error")) {
        document.getElementById("loginerror").innerText = data["error"];
        return;
      } else {
        document.getElementById("loginerror").innerText = "Login successfull.";
        setTimeout(function () {
          window.location.reload();
        }, 1000);
      }
    },
    error: function (data) {
      console.log("Error!");
    },
  });
}
function registerFunc(event) {
  event.preventDefault();
  var name = document.getElementById("upname").value;
  var mail = document.getElementById("upmail").value;
  var pass = document.getElementById("uppass").value;

  if (mail == "" || pass == "" || name === "") {
    document.getElementById("loginerror").innerText = "Enter all fields.";
    return;
  }
  $.ajax({
    type: "POST",
    url: "/api/register/",
    data: {
      fname: name,
      mail: mail,
      password: pass,
    },
    success: function (data) {
      if (data.hasOwnProperty("error")) {
        document.getElementById("loginerror").innerText = data["error"];
        return;
      } else {
        document.getElementById("loginerror").innerText =
          "Account created successfuly.";
        setTimeout(function () {
          window.location.reload();
        }, 1000);
      }
    },
    error: function (data) {
      console.log("Error!");
    },
  });
}
//
//
//
function showAccount(event) {
  toTop();
  var cookie = getCookie("_qtrajklvfgetqawyuwquywqruyqruy");

  if (cookie) {
    document.getElementById("accountdiv").style.display = "block";
  } else {
    showLogin();
  }
}
function hideAccount(event) {
  document.getElementById("accountdiv").style.display = "none";
}
function showOrders(event) {
  toTop();
  var cookie = getCookie("_qtrajklvfgetqawyuwquywqruyqruy");

  if (cookie) {
    document.getElementById("ordersdiv").style.display = "block";
  } else {
    showLogin();
  }
}
function hideOrders(event) {
  document.getElementById("ordersdiv").style.display = "none";
}
function changeOtherSelect(ele, other) {
  var val = ele.value;
  CUR_NAME = val;

  // console.log("val",CUR_NAME)
  // document.getElementById(other).value = val;
  var e = document.getElementById(other).nextSibling.querySelectorAll("ul li");
  for (var i = 0; i < e.length; i++) {
    if (e[i].getAttribute("data-value") == val) {
      e[i].click();
      // e[i].click();
    }
  }
}
//
function showForgot(event) {
  toTop();
  hideLogin(event);
  document.getElementById("forgotdiv").style.display = "block";
}
function hideForgot(event) {
  document.getElementById("forgotdiv").style.display = "none";
}

function forgotFunc(event) {
  document.getElementById("forgoterror").innerText = "";
  var mail = document.getElementById("forgotmail").value;
  if (mail == "") {
    document.getElementById("forgoterror").innerText = "Enter your email.";
    return;
  }
  $.ajax({
    type: "POST",
    url: "/api/forgot/",
    data: {
      mail: mail,
    },
    success: function (data) {
      if (data.hasOwnProperty("error")) {
        document.getElementById("forgoterror").innerText = data["error"];
        return;
      } else {
        document.getElementById("forgoterror").innerText =
          "Password send to your email.";
      }
    },
    error: function (data) {
      console.log("Error!");
    },
  });
}
//
function showBuy(event) {
  toTop();
  var cookie = getCookie("_qtrajklvfgetqawyuwquywqruyqruy");

  if (cookie) {
    document.getElementById("buydiv").style.display = "block";
  } else {
    showLogin();
  }
}
function hideBuy(event) {
  document.getElementById("buydiv").style.display = "none";
}
//
function showBill(event) {
  toTop();
  var cookie = getCookie("_qtrajklvfgetqawyuwquywqruyqruy");

  if (cookie) {
    document.getElementById("buybill").style.display = "block";
  } else {
    showLogin();
  }
}
function hideBill(event) {
  document.getElementById("buybill").style.display = "none";
}
// 
// backup modal
function showBackupcode(event) {
  toTop();
  document.getElementById("Backupcodes").style.display = "block";
}
function hideBackupcode(event) {
  document.getElementById("Backupcodes").style.display = "none";  
}
//
// Stripe
function buyStripe(event) {
  var cur = "";
  var quantity = "";
  var price = "";
  var name = "";

  var ele1 = document.getElementsByClassName("c-section__banner__btn--fill")[0];
  ele1 = ele1.getAttribute("data-id");

  var ele2 = document.querySelectorAll("#ct")[0].checked;
  if (ele2) {
    ele2 = "comfort";
  } else {
    ele2 = "auction";
  }
  name = ele1 + "_" + ele2;
  var console_ps = document.querySelectorAll("#duration-1")[0].checked;
  var console_xbox = document.querySelectorAll("#duration-3")[0].checked;
  var console_name = "";
  if (ele1 == "playstation") {
    if (console_ps) {
      console_name = "PS4";
    } else {
      console_name = "PS5";
    }
  } else {
    if (console_xbox) {
      console_name = "Xbox ONE";
    } else {
      console_name = "Xbox X/S";
    }
  }
  quantity = document.getElementById("coinamount").value;
  var selec = document.getElementById("cursym");
  cur = selec.options[selec.selectedIndex].value;
  price = PRICE;

  // console.log("price>>>", price);
  // return

  $.ajax({
    type: "POST",
    url: "/api/stripe/create-checkout-session/",
    data: {
      cur: cur,
      quantity: quantity,
      price: PRICE,
      name: name,
      console_name: console_name,
    },
    success: function (data) {
      window.location.replace(data["url"]);
    },
    error: function (data) {
      console.log("Error!");
    },
  });
}
//
//PayU
function buyPayU(event) {
  var cur = "";
  var quantity = "";
  var price = "";
  var name = "";

  var ele1 = document.getElementsByClassName("c-section__banner__btn--fill")[0];
  ele1 = ele1.getAttribute("data-id");

  var ele2 = document.querySelectorAll("#ct")[0].checked;
  if (ele2) {
    ele2 = "comfort";
  } else {
    ele2 = "auction";
  }
  name = ele1 + "_" + ele2;
  quantity = document.getElementById("coinamount").value;
  // console.log("qyantiyt", quantity);
  var console_ps = document.querySelectorAll("#duration-1")[0].checked;
  var console_xbox = document.querySelectorAll("#duration-3")[0].checked;
  var console_name = "";
  if (ele1 == "playstation") {
    if (console_ps) {
      console_name = "PS4";
    } else {
      console_name = "PS5";
    }
  } else {
    if (console_xbox) {
      console_name = "Xbox ONE";
    } else {
      console_name = "Xbox X/S";
    }
  }
  var selec = document.getElementById("cursym");
  cur = selec.options[selec.selectedIndex].value;
  price = PRICE;

  // console.log("price>>>", price);
  // return

  $.ajax({
    type: "POST",
    url: "/api/payu/create-checkout-session/",
    data: {
      cur: "INR",
      quantity: document.getElementById("coinamount").value,
      price: price * 75,
      name: name,
      console_name: console_name,
    },
    success: function (data) {
      data = data["body"];
      console.log("PAYU DATA=", data);
      // window.location.replace(data["url"]);
      document.getElementById("paykey").value = data["key"];
      document.getElementById("paytxn").value = data["txnid"];
      document.getElementById("payname").value = data["firstname"];
      document.getElementById("payamt").value = data["amount"];
      document.getElementById("payemail").value = data["email"];
      document.getElementById("payinfo").value = data["productinfo"];

      document.getElementById("paysurl").value = data["surl"];
      document.getElementById("payfurl").value = data["furl"];
      document.getElementById("payhash").value = data["hash"];
      document.getElementById("paybut").click();
    },
    error: function (data) {
      console.log("Error!");
    },
  });
}
//
// Crypto
function buyCrypto(event) {
  var cur = "";
  var quantity = "";
  var name = "";
  var priceforcrypto = 0;

  var ele1 = document.getElementsByClassName("c-section__banner__btn--fill")[0];
  ele1 = ele1.getAttribute("data-id");

  var ele2 = document.querySelectorAll("#ct")[0].checked;

  if (ele1 == "playstation" && ele2) {
    priceforcrypto = PLAYBOX_COMFORT_AMOUNT;
  } else if (ele1 == "playstation" && !ele2) {
    priceforcrypto = PLAYBOX_AUCTION_AMOUNT;
  } else if (ele1 == "xbox" && ele2) {
    priceforcrypto = XBOX_COMFORT_AMOUNT;
  } else if (ele1 == "xbox" && !ele2) {
    priceforcrypto = XBOX_AUCTION_AMOUNT;
  }

  var ele1 = document.getElementsByClassName("c-section__banner__btn--fill")[0];
  ele1 = ele1.getAttribute("data-id");

  var ele2 = document.querySelectorAll("#ct")[0].checked;
  if (ele2) {
    ele2 = "comfort";
  } else {
    ele2 = "auction";
  }
  name = ele1 + "_" + ele2;
  quantity = document.getElementById("coinamount").value;

  var console_ps = document.querySelectorAll("#duration-1")[0].checked;
  var console_xbox = document.querySelectorAll("#duration-3")[0].checked;
  var console = "";
  if (ele1 == "playstation") {
    if (console_ps) {
      console = "PS4";
    } else {
      console = "PS5";
    }
  } else {
    if (console_xbox) {
      console = "Xbox ONE";
    } else {
      console = "Xbox X/S";
    }
  }

  // console.log("qyantiyt",quantity)
  var selec = document.getElementById("cursym");
  cur = selec.options[selec.selectedIndex].value;

  // console.log("price>>>", price);
  // return

  $.ajax({
    type: "POST",
    url: "/api/crypto/create-checkout-session",
    data: {
      cur: cur,
      quantity: document.getElementById("coinamount").value,
      price: priceforcrypto,
      Totalprice: priceforcrypto * document.getElementById("coinamount").value,
      name: name,
      console: console,
    },
    success: function (data) {
      data = data["body"];
      document.getElementById("coin_cmd").value = data["cmd"];
      document.getElementById("coin_reset").value = data["reset"];
      document.getElementById("coin_merchant").value = data["merchant"];
      document.getElementById("coin_item_name").value = data["item_name"];
      document.getElementById("coin_currency").value = data["currency"];
      document.getElementById("coin_amountf").value = data["amountf"];
      document.getElementById("coin_quantity").value = data["quantity"];
      document.getElementById("coin_want_shipping").value =
        data["want_shipping"];
      document.getElementById("coin_success_url").value = data["success_url"];
      document.getElementById("coin_cancel_url").value = data["cancel_url"];
      document.getElementById("coin_allow_quantity").value =
        data["allow_quantity"];
      document.getElementById("payCrypto").click();
    },
    error: function (data) {
      console.log("Error!");
    },
  });
}

//
// PAYPAL
function buyPaypal(event) {
  var cur = "";
  var quantity = "";
  var name = "";
  var price = "";

  var ele1 = document.getElementsByClassName("c-section__banner__btn--fill")[0];
  ele1 = ele1.getAttribute("data-id");

  var ele2 = document.querySelectorAll("#ct")[0].checked;

  if (ele1 == "playstation" && ele2) {
    priceforcrypto = PLAYBOX_COMFORT_AMOUNT;
  } else if (ele1 == "playstation" && !ele2) {
    priceforcrypto = PLAYBOX_AUCTION_AMOUNT;
  } else if (ele1 == "xbox" && ele2) {
    priceforcrypto = XBOX_COMFORT_AMOUNT;
  } else if (ele1 == "xbox" && !ele2) {
    priceforcrypto = XBOX_AUCTION_AMOUNT;
  }

  var ele1 = document.getElementsByClassName("c-section__banner__btn--fill")[0];
  ele1 = ele1.getAttribute("data-id");

  var ele2 = document.querySelectorAll("#ct")[0].checked;
  if (ele2) {
    ele2 = "comfort";
  } else {
    ele2 = "auction";
  }
  name = ele1 + "_" + ele2;
  quantity = document.getElementById("coinamount").value;
  price=PRICE

  var console_ps = document.querySelectorAll("#duration-1")[0].checked;
  var console_xbox = document.querySelectorAll("#duration-3")[0].checked;
  var console = "";
  if (ele1 == "playstation") {
    if (console_ps) {
      console = "PS4";
    } else {
      console = "PS5";
    }
  } else {
    if (console_xbox) {
      console = "Xbox ONE";
    } else {
      console = "Xbox X/S";
    }
  }

  // console.log("qyantiyt",quantity)
  var selec = document.getElementById("cursym");
  cur = selec.options[selec.selectedIndex].value;

  // console.log("price>>>", price);
  // return

  $.ajax({
    type: "POST",
    url: "/api/paypal/create/",
    data: {
      cur: cur,
      quantity: document.getElementById("coinamount").value,
      price: price,
      name: name,
      console: console,
    },
    success: function (data) {
      data = data["body"];
      fetch('api/success/'+data.order_id+'/')
    },
    error: function (data) {
      console.log("Error!");
    },
  });
}


//
//
function selectReviewStar(ele) {
  var str = document.getElementsByClassName("star");
  for (var k = 0; k < str.length; k++) {
    if (str[k].getAttribute("data-id") <= ele.getAttribute("data-id")) {
      str[k].style.color = "#11cd8c";
      str[k].setAttribute("data-select", "1");
    } else {
      str[k].style.color = "#747474";
      str[k].setAttribute("data-select", "0");
    }
  }
}
function postReview(event) {
  event.preventDefault();
  var str = document.querySelectorAll("[data-select='1']").length;
  if (!str) {
    return;
  }
  var desc = document.getElementById("reviewtext").value;
  if (desc == "") {
    return;
  }
  $.ajax({
    type: "POST",
    url: "/api/postreview/",
    data: {
      order: SELECTED_ORDER,
      stars: str,
      desc: desc,
    },
    success: function (data) {
      document.getElementById("reviewarea").style.display = "none";
      document.getElementById("thanks").style.display = "block";

      setTimeout(function () {
        window.location.reload();
      }, 1000);
    },
    error: function (data) {
      console.log("Error!");
    },
  });
}
//
//
function handleeaaccount(event) {
  event.preventDefault();
  // changePrice()
  // var quantity = document.getElementById("coinamount").value;
  console.log('Handleeaaccount quantity : ',MAINQUANTITY)
  var login = document.getElementById ("email-input").value;
  console.log('Handleeaaccount login : ',login)
  var pass = document.getElementById ("password-input").value;
  console.log('Handleeaaccount pass : ',pass)
  var backup = document.getElementById ("backup-input").value;
  console.log('Handleeaaccount backup : ',backup)
  var comemail = document.getElementById ("comemail-input").value;
  console.log('Handleeaaccount comemail : ',comemail)
  var whatsappnum = document.getElementById ("num-input").value;
  console.log('Handleeaaccount whatsappnum : ',whatsappnum)
  // if (desc == "") {
  //   return;
  // }
  $.ajax({
    type: "POST",
    url: "/api/handleaaccdetails/",
    data: {
      login:login,
      pass:pass,
      backup:backup,
      comemail:comemail,
      whatsappnum:whatsappnum,
      quantity: MAINQUANTITY
    },
    success: function (data) {
      alert("YOUR ORDER HAS BEEN PLACED")
      // console.log(data)
      // setTimeout(function () {
      //   window.location.reload();
      // }, 1000);
    },
    error: function (data) {
      console.log("Error!");
    },
  });
}
// 
// 
function showTrack(id) {
  toTop();
  SELECTED_ORDER = id;
  // console.log(id);
  hideOrders();
  document.getElementById("tracktit").innerText = "Order Id : #" + id;
  for (var i = 0; i < ORDERS.length; i++) {
    if (ORDERS[i]["id"] == id) {
      document.getElementById("ordermess").innerText = ORDERS[i]["message"];
      // console.log(ORDERS[i]["status"], ORDERS[i]["review_star"]);
      if (ORDERS[i]["status"] == 1 && ORDERS[i]["review_star"] == 0) {
        document.getElementById("reviewarea").style.display = "block";
      }
      if (ORDERS[i]["status"] == 1 && ORDERS[i]["review_star"] != 0) {
        var starhtml = ``;
        for (var g = 0; g < ORDERS[i]["review_star"]; g++) {
          starhtml += `<i class="fa fa-star" aria-hidden="true"></i>`;
        }
        for (var g = 0; g < 5 - ORDERS[i]["review_star"]; g++) {
          starhtml += `<i class="fa fa-star" style="color: #747474 !important;" aria-hidden="true"></i>`;
        }

        document.getElementById("donestar").innerHTML = starhtml;
        document.getElementById("donemess").innerHTML =
          ORDERS[i]["review_mess"];
        document.getElementById("donereview").style.display = "block";
      }
      break;
    }
  }

  document.getElementById("trackdiv").style.display = "block";
}

function hideTrack() {
  document.getElementById("trackdiv").style.display = "none";
  // console.log(id);
}

// typing effect
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["buy FIFA 22 coins"];
const typingDelay = 20;
const erasingDelay = 20;
const newTextDelay = 1000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

// hamburger
function hamburger(){
  // console.log("In hamburger")
  const HAMBURGER=document.getElementById("hamburger-1").classList;
  // if (HAMBURGER==hamburgerclose){
    // HAMBURGER.remove("is-active")}
    // console.log('BEFORE',HAMBURGER)
    if (HAMBURGER=="hamburger is-active"){
      HAMBURGER.remove("is-active")
      // console.log('AFTER',HAMBURGER)
      // HAMBURGER.add("hamburgerclose")
}else{HAMBURGER.add("is-active")}
  
  
  }
// 
// 


// counter;
$(".count").each(function () {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 6000,
        easing: "swing",
        step: function (now) {
          $(this).text(Math.ceil(now));
        },
      }
    );
});


// Scroll down
window.addEventListener("scroll", reveal);
function reveal() {
  var reveal = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveal.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveal[i].getBoundingClientRect().top;
    var revealpoint = 100;

    if (revealtop < windowheight - revealpoint) {
      reveal[i].classList.add("active");
    } else {
      reveal[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", revealleftright);
function revealleftright() {
  var revealleftright = document.querySelectorAll(".revealleftright");
  for (var i = 0; i < revealleftright.length; i++) {
    var windowheight = window.innerHeight;
    var revealleftrighttop = revealleftright[i].getBoundingClientRect().top;
    var revealleftrightpoint = 100;
    // console.log("windowheight", windowheight);
    // console.log("revealleftrighttop", revealleftrighttop);
    // console.log("revealleftrightpoint", revealleftrightpoint);
    if (revealleftrighttop < windowheight - revealleftrightpoint) {
      revealleftright[i].classList.add("active");
      if (revealleftright) {
      }
    } else {
      revealleftright[i].classList.remove("active");
    }
  }
}

function mainloading(){
  var preloader = document.getElementById('loading')
  preloader.style.display="none";
}

function acc_formdetails(){

}

