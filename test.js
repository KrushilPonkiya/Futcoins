!(function (e) {
  function t(t) {
    for (
      var o, i, s = t[0], c = t[1], l = t[2], u = 0, m = [];
      u < s.length;
      u++
    )
      (i = s[u]),
        Object.prototype.hasOwnProperty.call(r, i) && r[i] && m.push(r[i][0]),
        (r[i] = 0);
    for (o in c) Object.prototype.hasOwnProperty.call(c, o) && (e[o] = c[o]);
    for (d && d(t); m.length; ) m.shift()();
    return n.push.apply(n, l || []), a();
  }
  function a() {
    for (var e, t = 0; t < n.length; t++) {
      for (var a = n[t], o = !0, s = 1; s < a.length; s++) {
        var c = a[s];
        0 !== r[c] && (o = !1);
      }
      o && (n.splice(t--, 1), (e = i((i.s = a[0]))));
    }
    return e;
  }
  var o = {},
    r = { 0: 0 },
    n = [];
  function i(t) {
    if (o[t]) return o[t].exports;
    var a = (o[t] = { i: t, l: !1, exports: {} });
    return e[t].call(a.exports, a, a.exports, i), (a.l = !0), a.exports;
  }
  (i.m = e),
    (i.c = o),
    (i.d = function (e, t, a) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
    }),
    (i.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.t = function (e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var a = Object.create(null);
      if (
        (i.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          i.d(
            a,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return a;
    }),
    (i.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return i.d(t, "a", t), t;
    }),
    (i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = "");
  var s = (window.webpackJsonp = window.webpackJsonp || []),
    c = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var l = 0; l < s.length; l++) t(s[l]);
  var d = c;
  n.push([490, 1]), a();
})({
  0: function (e, t, a) {
    "use strict";
    a.d(t, "b", function () {
      return r;
    });
    var o = {},
      r = null;
    (o.currency = "$"),
      (o.secure = new window.SecureLS({
        encodingType: "des",
        isCompression: !1,
        encryptionSecret: "key-fifa-22",
      })),
      (o.paypalEnabled = !0),
      (o.rate = "4.5"),
      (o.reviews = "212"),
      (o.secureEasy = new window.SecureLS()),
      (o.$document = $(document)),
      (o.$window = $(window)),
      (o.$body = $(document.body)),
      (o.$html = $(document.documentElement)),
      (o.$siteContainer = $(".site-container")),
      (o.$loader = $(".loader:not(.loader-content)")),
      (o.$header = $(".header")),
      (o.$site = $(".site")),
      (o.$footer = $(".footer")),
      (o.$sidebar = o.$body.find(".sidebar")),
      (o.isMobile = function () {
        return innerWidth <= 1024;
      }),
      (o.isIE = function () {
        return o.$html.hasClass("is-browser-ie");
      }),
      (o.winWidth = window.innerWidth),
      (o.dirRtl = "rtl" === o.$html.attr("dir")),
      (o.currencyList = {
        USD: "$",
        RUB: "₽",
        EUR: "€",
        GBP: "£",
        CAD: "C$",
        BRL: "R$",
        SEK: "kr",
        NOK: "NKr",
        SAR: "SAR",
        AED: "AED",
      }),
      (o.setCookie = function (e, t, a) {
        var o = "";
        if (a) {
          var r = new Date();
          r.setTime(r.getTime() + 24 * a * 60 * 60 * 1e3),
            (o = "; expires=".concat(r.toUTCString()));
        }
        document.cookie = ""
          .concat(e, "=")
          .concat(t || "")
          .concat(o, "; path=/");
      }),
      (o.fixInputMin = function (e) {
        e.length > 0 &&
          Number(e.val().replace(" ", "")) < Number(e.attr("data-min")) &&
          (e.val(e.attr("data-min")), e.trigger("input"));
      }),
      (o.getCookie = function (e) {
        for (
          var t = "".concat(e, "="), a = document.cookie.split(";"), o = 0;
          o < a.length;
          o++
        ) {
          for (var r = a[o]; " " === r.charAt(0); )
            r = r.substring(1, r.length);
          if (0 === r.indexOf(t)) return r.substring(t.length, r.length);
        }
        return null;
      }),
      (o.eraseCookie = function (e) {
        document.cookie = "".concat(e, "=; Max-Age=-99999999;path=/");
      });
    var n,
      i = [],
      s = function (e) {
        return function () {
          clearTimeout(e);
        };
      };
    function c() {
      return (
        !(!o.isIE || !o.getScrollbarWidth()) ||
        (!o.isMobile() &&
          (!(
            !window.matchMedia("(any-hover: hover)").matches &&
            !window.matchMedia("(hover: hover)").matches
          ) ||
            (!window.matchMedia("(hover: none)").matches &&
              void 0 === o.$html.ontouchstart)))
      );
    }
    (o.debounce = function (e, t) {
      var a = i.find(function (t) {
        return t.funcString === e.toString();
      });
      a ? a.cancel() : ((a = {}), i.push(a)),
        (a.func = e),
        (a.funcString = e.toString());
      for (
        var o = arguments.length, r = new Array(o > 2 ? o - 2 : 0), n = 2;
        n < o;
        n++
      )
        r[n - 2] = arguments[n];
      (a.timeout = setTimeout.apply(void 0, [e, t].concat(r))),
        (a.cancel = s(a.timeout));
    }),
      (o.saveScrollPosition = function () {
        o.$html.css("scroll-behavior", "initial"),
          (r = window.pageYOffset || document.documentElement.scrollTop);
      }),
      (o.restoreScrollPosition = function () {
        null !== r &&
          (window.scrollTo(window.pageXOffset, r),
          (r = null),
          o.$html.css("scroll-behavior", ""));
      }),
      (o.scrollTo = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 500,
          a =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        o.$html.css("scroll-behavior", "initial"),
          $("html, body")
            .stop()
            .animate({ scrollTop: "".concat(e.offset().top + a) }, t),
          setTimeout(function () {
            o.$html.css("scroll-behavior", "");
          }, t + 100);
      }),
      (o.getScrollbarWidth = function () {
        var e = window.innerWidth - o.$html.get(0).clientWidth;
        return e ||
          document.documentElement.clientHeight >=
            document.documentElement.offsetHeight
          ? e
          : (n ||
              (((n = document.createElement("div")).style.cssText =
                "width:100px;height:100px;overflow:scroll !important;position:absolute;top:-9999px"),
              document.body.appendChild(n)),
            n.offsetWidth - n.clientWidth);
      }),
      c()
        ? o.$html.removeClass("no-hover").addClass("has-hover")
        : o.$html.removeClass("has-hover").addClass("no-hover"),
      o.$window.on("resize", function () {
        o.debounce(function () {
          o.winWidth !== window.innerWidth &&
            (c()
              ? o.$html.removeClass("no-hover").addClass("has-hover")
              : o.$html.removeClass("has-hover").addClass("no-hover"),
            (o.winWidth = window.innerWidth));
        }, 300);
      }),
      (o.getSpecialChars = function (e) {
        for (var t = "", a = 0; a < e.split("-").length; a++) {
          var o = e.split("-")[a];
          a > 0 && (o = o.replace(o.charAt(0), o.charAt(0).toUpperCase())),
            (t += o);
        }
        return t;
      }),
      (o.getSpecialAttributes = function (e, t) {
        var a = {};
        if (e.hasAttributes())
          return (
            $.each(e.attributes, function (e, r) {
              if (r.name.indexOf("data-".concat(t)) >= 0) {
                var n = r.name,
                  i = "true" === r.value || (!1 !== r.value && r.value),
                  s = o.getSpecialChars(n.replace("data-".concat(t, "-"), ""));
                a[s] = i;
              }
            }),
            a
          );
      }),
      (o.numberWithCommas = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : " ",
          a = e.toString().split(".");
        return (
          a[0].replace(/\B(?=(\d{3})+(?!\d))/g, t) +
          (a[1] ? ".".concat(a[1]) : "")
        );
      }),
      (o.numberWithCommasForArabic = function (e, t) {
        if (o.dirRtl || "ar" === o.locale) {
          t || (t = "&nbsp;");
          var a = e.toString().split(".");
          return (
            a[0].replace(/\B(?=(\d{3})+(?!\d))/g, t) +
            (a[1] ? ".".concat(a[1]) : "")
          );
        }
        return o.numberWithCommas(e, t);
      }),
      (o.numberWithCommas4 = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : " ",
          a = e.toString().split(".");
        return (
          a[0].replace(/\B(?=(\d{4})+(?!\d))/g, t) +
          (a[1] ? ".".concat(a[1]) : "")
        );
      }),
      (o.deliveryBage = function (e, t) {
        var a = "",
          o = t.attr("data-default"),
          r = helpers.calculator.getManualPrice();
        r > 0
          ? (a = "+"
              .concat(helpers.currency)
              .concat(helpers.numberWithCommasForArabic(r)))
          : r < 0 &&
            (o = "+"
              .concat(helpers.currency)
              .concat(helpers.numberWithCommasForArabic(Math.abs(r)))),
          e.html(a),
          t.html(o);
      }),
      (window.helpers = o),
      (t.a = o);
  },
  12: function (e, t, a) {
    "use strict";
    var o = a(22),
      r = a.n(o),
      n = a(23),
      i = a.n(n),
      s = a(0),
      c = a(38);
    function l() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "$",
        t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "USD";
      ("" !== e && "string" == typeof e) || ((e = "$"), (t = "USD")),
        (s.a.currency = e),
        (s.a.currencyName = t),
        s.a.setCookie("currencyCookie", e),
        s.a.setCookie("currencyNameCookie", t),
        $(".header__currency-btn span").text(e),
        s.a.$html.attr("data-currency", t),
        $(".header__currency-btn").removeClass("is-hide");
    }
    function d() {
      $(".js-calculator-coins").val(
        s.a.numberWithCommas(s.a.calculator.getCoins())
      ),
        $(".js-calculator-amount").val(
          s.a.numberWithCommas(s.a.calculator.getAmount())
        ),
        $(".js-calculator-amountFull").text(
          s.a.numberWithCommas(s.a.calculator.getFullAmount())
        ),
        Object(c.b)(),
        $(".js-calculator-amount")
          .closest("label")
          .attr("data-currency", s.a.currency),
        $(".js-calculator-amountFull").attr("data-currency", s.a.currency);
    }
    function u(e) {
      var t = s.a.limits.min,
        a = s.a.limits.max,
        o = s.a.discounts;
      $(".js-calculator-discount.btn:nth-child(1)").removeClass("is-hidden"),
        "manual" === s.a.calculator.getMethod().toLowerCase() &&
          ((a = 1e6),
          (o = o.filter(function (e) {
            return e.limitSumCoins <= a;
          }))),
        "xbox" === s.a.calculator.getPlatform().toLowerCase() &&
          ((t = 2e5),
          $(".js-calculator-discount.btn:nth-child(1)").addClass("is-hidden")),
        f(o);
      var r,
        n = Number(s.a.getCookie("currencyPriceCookie")),
        i = a,
        c = 0;
      (e ||
        (e =
          s.a.calculator.getPlatform() ||
          $(".js-calculator-platform:checked").data("id")),
      n > 0)
        ? (c = n)
        : (c =
            null === (r = s.a.coinsInfo[e]) || void 0 === r
              ? void 0
              : r.pricePerCurrencyMap[s.a.currencyName]);
      var l = t,
        u = Number($(".js-calculator-coins").val().replace(/ /g, "")) || 0;
      $(".js-calculator-coins")
        .attr("value", u)
        .attr("data-min", l)
        .attr("maxlength", i.toString().length + 2)
        .attr("max", i),
        $(".js-calculator-amount")
          .attr("value", (u * c).toFixed(2))
          .attr("data-min", (l * c).toFixed(2))
          .attr("maxlength", (i * c).toString().length + 1)
          .attr("max", (i * c).toFixed(2)),
        $(".js-calculator-coins").trigger("blur"),
        d();
    }
    function m(e, t) {
      return Number(t - (t / 100) * e);
    }
    var p = (function () {
      function e() {
        var t, a, o, n;
        r()(this, e),
          (this.info = {}),
          (this.discount = 1),
          (this.method =
            (null === (t = s.a.secureEasy.get("user_order")) || void 0 === t
              ? void 0
              : t.method) || "Easy"),
          (this.platform =
            (null === (a = s.a.secureEasy.get("user_order")) || void 0 === a
              ? void 0
              : a.platform) || "ps4"),
          (this.сoinsVal =
            (null === (o = s.a.secureEasy.get("user_order")) || void 0 === o
              ? void 0
              : o.coins) || s.a.limits.min),
          (this.currency = {
            id: s.a.getCookie("currencyCookie"),
            name: s.a.getCookie("currencyNameCookie"),
          }),
          (this.price =
            s.a.coinsInfo[this.platform].pricePerCurrencyMap[
              this.currency.name
            ]),
          (this.amount =
            (null === (n = s.a.secureEasy.get("user_order")) || void 0 === n
              ? void 0
              : n.amount) || s.a.limits.min * this.price),
          this.changeDiscount(this.сoinsVal),
          this.changeInfo(!1);
      }
      return (
        i()(e, [
          {
            key: "changeInfo",
            value: function (e, t) {
              var a =
                  s.a.coinsInfo[this.platform].pricePerCurrencyMap[
                    this.currency.name
                  ],
                o = Number(this.discount),
                r = Number(this.сoinsVal),
                n = Number(this.amount),
                i = r * a;
              t && (n = t),
                ("discount" !== e &&
                  "coins" !== e &&
                  "method" !== e &&
                  "platform" !== e &&
                  "currency" !== e) ||
                t
                  ? "amount" !== e || t || ((i = n), (r = n / a))
                  : ((n = o > 1 ? m(o, r * a) : r * a), (i = r * a)),
                (this.info = {
                  amount: n.toFixed(2),
                  amountFull: i.toFixed(2),
                  coins: r.toFixed(0),
                  discount: o,
                  method: this.method,
                  platform: s.a.coinsInfo[this.platform].platform,
                  price: a,
                });
            },
          },
          {
            key: "changeCurrency",
            value: function (e, t) {
              l(e, t),
                (this.currency = { id: e, name: t }),
                this.changeInfo("currency");
            },
          },
          {
            key: "changeDiscount",
            value: function (e) {
              for (
                var t = Array.prototype.slice.call(s.a.discounts), a = 0;
                a < t.length;
                a++
              ) {
                if (e >= t[a].limitSumCoins) {
                  this.discount = t[a].discountPercent;
                  break;
                }
                this.discount = 1;
              }
            },
          },
          {
            key: "setPlatform",
            value: function (e) {
              (this.platform = e), this.changeInfo("platform");
            },
          },
          {
            key: "setMethod",
            value: function (e) {
              (this.method = e),
                "manual" === e.toLowerCase()
                  ? (s.a.coinsInfo = s.a.manualCoinsInfo)
                  : (s.a.coinsInfo = s.a.easyCoinsInfo),
                this.changeInfo("method");
            },
          },
          {
            key: "setAmount",
            value: function (e) {
              (this.amount = Number(e)),
                this.changeDiscount(this.amount / this.price),
                this.changeInfo("amount");
            },
          },
          {
            key: "setAmountWithCoupon",
            value: function (e) {
              (this.amount = Number(e)), this.changeInfo("amount", e);
            },
          },
          {
            key: "setCoins",
            value: function (e) {
              (this.сoinsVal = e),
                this.changeDiscount(this.сoinsVal),
                this.changeInfo("coins");
            },
          },
          {
            key: "setDiscount",
            value: function (e, t) {
              (this.discount = Number(e).toFixed(0)),
                (this.сoinsVal = Number(t).toFixed(0)),
                this.changeInfo("discount");
            },
          },
          {
            key: "setCoupon",
            value: function (e) {
              this.info.couponPrice = e;
            },
          },
          {
            key: "getCoupon",
            value: function () {
              return this.info.couponPrice;
            },
          },
          {
            key: "getCurrency",
            value: function () {
              return this.currency;
            },
          },
          {
            key: "getPlatform",
            value: function () {
              return this.info.platform;
            },
          },
          {
            key: "getAmount",
            value: function () {
              return this.info.amount;
            },
          },
          {
            key: "getAmountFull",
            value: function () {
              return Number(this.info.amountFull);
            },
          },
          {
            key: "getPrice",
            value: function () {
              return this.info.price;
            },
          },
          {
            key: "getFullAmount",
            value: function () {
              return this.info.discount > 1 ? this.info.amountFull : "";
            },
          },
          {
            key: "getCoins",
            value: function () {
              return this.info.coins;
            },
          },
          {
            key: "getMethod",
            value: function () {
              return this.info.method;
            },
          },
          {
            key: "getManualPrice",
            value: function () {
              var e =
                  s.a.manualCoinsInfo[this.platform].pricePerCurrencyMap[
                    this.currency.name
                  ],
                t =
                  this.discount > 1
                    ? m(this.discount, this.info.coins * e)
                    : Number(this.info.coins * e);
              return "manual" === this.info.method.toLowerCase()
                ? (t - this.info.amount).toFixed(2)
                : (
                    (this.discount > 1
                      ? m(this.discount, this.info.coins * e)
                      : Number(this.info.coins * e)) - this.info.amount
                  ).toFixed(2);
            },
          },
          {
            key: "getFullInfo",
            value: function () {
              return this.info;
            },
          },
        ]),
        e
      );
    })();
    function f(e) {
      var t,
        a,
        o =
          ((t = e),
          (a = $.map(t, function (e) {
            return e;
          })).sort(function (e, t) {
            return e.limitSumCoins - t.limitSumCoins;
          }),
          a);
      $(".calculator-discounts .calculator__discount-trigger").remove();
      for (var r = 0; r < o.length; r++) {
        var n = o[r].limitSumCoins,
          i = o[r].discountPercent,
          s = o[r].limitSumView;
        $(
          '<button type="button" class="calculator__discount-trigger js-calculator-discount" data-count="'
            .concat(n, '" data-discount="')
            .concat(i, '" />')
        )
          .text(s)
          .appendTo(".calculator-discounts");
      }
    }
    function g(e, t, a) {
      var o = e.target;
      if (null !== o.value.replace(/ /g, "").match(/^[0-9]+$/)) {
        var r,
          n = Number(e.currentTarget.value.replace(/ /g, ""));
        (e.currentTarget.value = s.a.numberWithCommas(n.toFixed(0))),
          "amount" === a
            ? (s.a.calculator.setAmount(n), (r = s.a.calculator.getCoins()))
            : "coins" === a &&
              (s.a.calculator.setCoins(n), (r = s.a.calculator.getAmount())),
          t.val(s.a.numberWithCommas(r)),
          $(".js-calculator-amountFull").text(
            s.a.numberWithCommas(s.a.calculator.getFullAmount())
          ),
          Object(c.b)();
      } else o.value = o.value.replace(/ /g, "").slice(0, -1);
    }
    function h(e, t, a) {
      var o,
        r,
        n = Number(e.currentTarget.value.replace(/ /g, "")),
        i = e.currentTarget.dataset.min,
        l = e.currentTarget.max;
      (n > l || n < i) &&
        ((n = (function (e, t, a) {
          if ("" !== e) {
            if (e < t) return t;
            if (e > a) return a;
          }
          return e;
        })(n, i, l)),
        "amount" === a
          ? ((r = Number(n).toFixed(2)),
            s.a.calculator.setAmount(n),
            (o = s.a.calculator.getCoins()))
          : "coins" === a &&
            ((r = Number(n).toFixed(0)),
            s.a.calculator.setCoins(n),
            (o = s.a.calculator.getAmount())),
        (e.currentTarget.value = s.a.numberWithCommas(r)),
        t.val(s.a.numberWithCommas(o)),
        $(".js-calculator-amountFull").text(
          s.a.numberWithCommas(s.a.calculator.getFullAmount())
        ),
        Object(c.b)());
    }
    t.a = {
      init: function () {
        s.a.calculator || (s.a.calculator = new p());
      },
      destroy: function () {
        s.a.calculator = null;
      },
      setCurrency: l,
      setFields: d,
      setAllFields: u,
      renderDiscountButtons: f,
      calculatorEvents: function (e) {
        $(e)
          .find(".js-calculator-platform")
          .on("change.home", function (e) {
            s.a.calculator.setPlatform($(e.currentTarget).data("id")), u();
          }),
          $(e)
            .find(".js-calculator-method")
            .on("change.home", function (e) {
              var t = $(e.currentTarget).data("id");
              (s.a.coinsInfo = s.a["".concat(t.toLowerCase(), "CoinsInfo")]),
                s.a.calculator.setMethod(t),
                s.a.secureEasy.set("user_method", t),
                u();
            }),
          $(e).on("click.home", ".js-calculator-discount", function (e) {
            s.a.calculator.setDiscount(
              $(e.currentTarget).data("discount"),
              $(e.currentTarget).data("count")
            ),
              u();
          }),
          $(e)
            .find(".js-calculator-coins")
            .on("input.home", function (e) {
              g(e, $(".js-calculator-amount"), "coins");
            }),
          $(e)
            .find(".js-calculator-coins")
            .on("blur.home", function (e) {
              h(e, $(".js-calculator-amount"), "coins");
            }),
          $(e)
            .find(".js-calculator-amount")
            .on("input.home", function (e) {
              g(e, $(".js-calculator-coins"), "amount");
            }),
          $(e)
            .find(".js-calculator-amount")
            .on("blur.home", function (e) {
              h(e, $(".js-calculator-coins"), "amount");
            });
      },
    };
  },
  13: function (e, t, a) {
    "use strict";
    var o = a(0),
      r = a(1),
      n = a.n(r),
      i = a(3),
      s = {},
      c = 0;
    function l(e) {
      return e >= 0 && e < 10 ? "0".concat(e) : "".concat(e);
    }
    (s.headerUser = function (e) {
      return '\n\t\t<div class="header__user">\n\t\t\t<a class="header__user-name" href="/'
        .concat(
          "en" === o.a.locale ? "" : "".concat(o.a.locale, "/"),
          'profile">'
        )
        .concat(e.email, "</a>\n\t\t\t")
        .concat(
          e.currency
            ? '<div class="header__user-money">\n\t\t\t\t<span class="currency">'
                .concat(
                  e.currency ? e.currency : o.a.currency,
                  '</span>\n\t\t\t\t<span class="text">'
                )
                .concat(e.money ? e.money : 0, "</span>\n\t\t\t</div>")
            : "",
          '\n\t\t\t<button class="btn header__button js-logout-btn" type="button"><span class="btn__content">'
        )
        .concat(i.c[o.a.locale].logOut, "</span></button>\n\t\t</div>");
    }),
      (s.headerUserNotify = function (e) {
        return ""
          .concat(i.c[o.a.locale].youLogged, " <em>")
          .concat(e.email, "</em>");
      }),
      (s.inputCode = function (e, t) {
        return '<div class="input__code" data-value="'
          .concat(e, '"><span class="input__code-text">')
          .concat(
            t,
            '</span><button class="btn input__code-btn" type="button"><span class="btn__content"><svg><use xlink:href="'
          )
          .concat(
            window.location.origin,
            '/images/sprites.svg#close"></use></svg></span></button></div>'
          );
      }),
      (s.profileTableHeadingStatus = function (e) {
        return "created" === (e = e.toLowerCase()) || "accepted" === e
          ? { text: i.b[o.a.locale][e], status: "created" }
          : "out_of_stock" === e ||
            "warning" === e ||
            "wrong_credentials" === e ||
            "wrong_backup" === e ||
            "no_enough_stock" === e ||
            "not_enough_stock" === e ||
            "no_enough_coins_to_start" === e ||
            "not_enough_coins_to_start" === e ||
            "error_fut" === e ||
            "waiting_payment" === e ||
            "error_payment" === e ||
            "no_access_to_fifa_21_webapp" === e ||
            "fut_error" === e ||
            "customer_online" === e
          ? { text: i.b[o.a.locale][e], status: "warning" }
          : "success" === e || "finished" === e || "payed" === e
          ? { text: i.b[o.a.locale][e], status: "success" }
          : "locked" === e
          ? { text: i.b[o.a.locale][e], status: "warning" }
          : {
              text:
                void 0 === i.b[o.a.locale][e]
                  ? i.b[o.a.locale].progress
                  : i.b[o.a.locale][e],
              status: "progress",
            };
      });
    var d = new Date(),
      u = [l(d.getMonth() + 1), l(d.getDate()), d.getFullYear()].join("/"),
      m = [l(d.getMonth() + 1), l(d.getDate() - 1), d.getFullYear()].join("/");
    (s.profileTableHeading = function (e) {
      var t = n()(e.createdAt).format("L"),
        a = o.a.currencyList[e.currency],
        r = "ar" === o.a.locale ? "arabic" : "";
      return (
        t === u && (t = i.c[o.a.locale].toDay),
        t === m && (t = i.c[o.a.locale].yesterDay),
        '<div class="profile-order-table__heading js-accordion-btn" id="accordion-heading-'
          .concat(
            e.id,
            '" role="button" aria-expanded="false" aria-controls="accordion-content-'
          )
          .concat(e.id, '" href="#accordion-content-')
          .concat(
            e.id,
            '">\n\t\t<div class="profile-order-table__devider">\n\t\t\t<span>'
          )
          .concat(
            t,
            '</span><div class="profile-order-table__devider-line"></div>\n\t\t</div>\n\t\t<div class="profile-order-table__content">\n\t\t\t<div class="profile-order-table__col profile-order-table__col--num">\n\t\t\t\t<div class="profile-order-table__col-head">\n\t\t\t\t\t'
          )
          .concat(i.c[o.a.locale].numDay, "</div><span>")
          .concat(o.a.numberWithCommasForArabic(e.id), "\n\t\t\t\t\t")
          .concat(
            "easy" === e.deliveryMethod.toLowerCase() ? "CT" : "PA",
            '\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t\t<div class="profile-order-table__col profile-order-table__col--login">\n\t\t\t\t<div class="profile-order-table__col-head">'
          )
          .concat(
            i.c[o.a.locale].login,
            '</div>\n\t\t\t\t<svg class="profile-order-table__platform"><use xlink:href="'
          )
          .concat(window.location.origin, "/images/sprites.svg#platform-")
          .concat(e.platform, '"></use></svg>\n\t\t\t\t')
          .concat(
            "easy" === e.deliveryMethod.toLowerCase()
              ? '\n\t\t\t\t\t<span class="'
                  .concat(r, '">')
                  .concat(
                    e.mail ||
                      '<span class="profile-order-table__span">'.concat(
                        "ps4" === e.platform ? "PLAYSTATION" : "XBOX",
                        "</span>"
                      ),
                    "</span>\n\t\t\t\t"
                  )
              : "\n\t\t\t\t\t<span>".concat(
                  "ps4" === e.platform ? "PLAYSTATION" : "XBOX",
                  "</span>\n\t\t\t\t"
                ),
            '\n\t\t\t</div>\n\t\t\t<div class="profile-order-table__col profile-order-table__col--amount">\n\t\t\t\t<div class="profile-order-table__col-head">'
          )
          .concat(i.c[o.a.locale].amount, "</div><span>")
          .concat(
            o.a.numberWithCommasForArabic(e.coinCount),
            '</span>\n\t\t\t</div>\n\t\t\t<div class="profile-order-table__col profile-order-table__col--price">\n\t\t\t\t<div class="profile-order-table__col-head">'
          )
          .concat(i.c[o.a.locale].price, "</div><span>")
          .concat(a, " ")
          .concat(
            o.a.numberWithCommasForArabic(e.overallPrice.toFixed(2)),
            '</span>\n\t\t\t</div>\n\t\t\t<div class="profile-order-table__col profile-order-table__col--status">\n\t\t\t\t<div class="profile-order-table__col-head">'
          )
          .concat(
            i.c[o.a.locale].status,
            '</div>\n\t\t\t\t<div class="profile-order-table__progress profile-order-table__progress--'
          )
          .concat(s.profileTableHeadingStatus(e.status).status, '"><span>')
          .concat(
            s.profileTableHeadingStatus(e.status).text,
            '</span><img src="'
          )
          .concat(window.location.origin, "/images/profile/")
          .concat(
            s.profileTableHeadingStatus(e.status).status,
            '.svg" alt="status"></div>\n\t\t\t</div>\n\t\t\t<div class="profile-order-table__arrow"><svg><use xlink:href="'
          )
          .concat(
            window.location.origin,
            '/images/sprites.svg#arrow-down"></use></svg></div></div>\n\t</div>'
          )
      );
    }),
      (s.profileTableBody = function (e) {
        for (var t = !1, a = [], r = "", n = 0; n < e.labels.length; n++) {
          "place_on_fut" === e.labels[n].toLowerCase() && (t = !0);
        }
        if (e.backupCode1)
          for (var c = 1; c <= 8; c++) {
            var l = e["backupCode".concat(c)];
            l && a.push(l);
          }
        return (
          "manual" === e.deliveryMethod.toLowerCase() &&
            t &&
            ["payed", "error_fut", "waiting_payment"].indexOf(
              e.status.toLowerCase()
            ) > -1 &&
            (r =
              '\n\t\t\t<div class="profile-order-table__col">\n\t\t\t\t<button class="btn profile__button js-profile-continue" type="button" data-id="'
                .concat(e.id, '">\n\t\t\t\t\t<span class="btn__content">')
                .concat(
                  i.c[o.a.locale].continueTransfering,
                  "</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t"
                )),
          "manual" !== e.deliveryMethod.toLowerCase() ||
            ("accepted" !== e.status.toLowerCase() &&
              "in_progress" !== e.status.toLowerCase()) ||
            (r =
              '\n\t\t\t<div class="profile-order-table__col">\n\t\t\t\t<button class="btn profile__button js-profile-continue" type="button" data-link="'
                .concat(e.link, '">\n\t\t\t\t\t<span class="btn__content">')
                .concat(
                  i.c[o.a.locale].continueTransfering,
                  "</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t"
                )),
          '<div class="profile-order-table__body js-accordion-content" id="accordion-content-'
            .concat(e.id, '" role="region" aria-labelledby="accordion-heading-')
            .concat(e.id, '" aria-hidden="true" data-method="')
            .concat(e.deliveryMethod, '">\n\t\t')
            .concat(
              "manual" === e.deliveryMethod.toLowerCase() &&
                [
                  "payed",
                  "accepted",
                  "error_fut",
                  "in_progress",
                  "waiting_payment",
                ].indexOf(e.status.toLowerCase()) > -1
                ? '\n\t\t\t<div class="profile-order-table__conten">\n\t\t\t\t'
                    .concat(
                      e.coinTransferred >= 0 &&
                        e.coinCount > 0 &&
                        "locked" !== e.status.toLowerCase() &&
                        "accepted" !== e.status.toLowerCase()
                        ? '\n\t\t\t\t\t<div class="profile-order-table__col">\n\t\t\t\t\t\t<div class="profile-order-table__col-head">'
                            .concat(
                              i.c[o.a.locale].transferred,
                              '</div>\n\t\t\t\t\t\t\t<div class="profile-order-table__transferred">\n\t\t\t\t\t\t\t<span>'
                            )
                            .concat(e.coinTransferred, " / ")
                            .concat(
                              e.coinCount,
                              "</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t"
                            )
                        : "",
                      "\n\t\t\t\t"
                    )
                    .concat(
                      e.percentTransferred >= 0 &&
                        "locked" !== e.status.toLowerCase() &&
                        "accepted" !== e.status.toLowerCase()
                        ? '\n\t\t\t\t\t<div class="profile-progress">\n\t\t\t\t\t\t<div class="profile-progress__percent">'
                            .concat(
                              e.percentTransferred &&
                                toString(e.percentTransferred).indexOf("%") > -1
                                ? e.percentTransferred
                                : "".concat(e.percentTransferred, "%"),
                              '</div>\n\t\t\t\t\t\t<div class="profile-progress__line" style="width: '
                            )
                            .concat(
                              e.percentTransferred &&
                                toString(e.percentTransferred).indexOf("%") > -1
                                ? e.percentTransferred
                                : "".concat(e.percentTransferred, "%"),
                              '"></div>\n\t\t\t\t\t</div>\n\t\t\t\t'
                            )
                        : "",
                      "\n\t\t\t\t"
                    )
                    .concat(
                      r,
                      '\n\t\t\t</div>\n\t\t\t<div class="profile-order-table__frame is-hidden"><iframe src=""></iframe></div>\n\t\t'
                    )
                : '\n\t\t\t<form class="form profile-order-table__form js-form-order-profile" '
                    .concat(
                      t ? "" : "disabled",
                      ' autocomplete="off" action="/'
                    )
                    .concat(
                      e.id,
                      '/place" method="POST">\n\t\t\t\t<div class="form__message form__message--error js-form-error-message is-hidden"></div>\n\t\t\t\t<div class="form__message form__message--success js-form-success-message is-hidden">\n\t\t\t\t\t<div class="text">'
                    )
                    .concat(
                      i.c[o.a.locale].profileFormSuccess,
                      ': <span class="status"></span></div>\n\t\t\t\t</div>\n\t\t\t\t<div class="js-form-content">\n\t\t\t\t\t'
                    )
                    .concat(
                      e.coinTransferred >= 0 &&
                        e.coinCount > 0 &&
                        "locked" !== e.status.toLowerCase() &&
                        "accepted" !== e.status.toLowerCase()
                        ? '\n\t\t\t\t\t\t<div class="profile-order-table__col">\n\t\t\t\t\t\t\t<div class="profile-order-table__col-head">'
                            .concat(
                              i.c[o.a.locale].transferred,
                              '</div>\n\t\t\t\t\t\t\t\t<div class="profile-order-table__transferred">\n\t\t\t\t\t\t\t\t<span>'
                            )
                            .concat(e.coinTransferred, " / ")
                            .concat(
                              e.coinCount,
                              "</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t"
                            )
                        : "",
                      "\n\t\t\t\t\t"
                    )
                    .concat(
                      e.percentTransferred >= 0 &&
                        "locked" !== e.status.toLowerCase() &&
                        "accepted" !== e.status.toLowerCase()
                        ? '\n\t\t\t\t\t\t<div class="profile-progress">\n\t\t\t\t\t\t\t<div class="profile-progress__percent">'
                            .concat(
                              e.percentTransferred &&
                                toString(e.percentTransferred).indexOf("%") > -1
                                ? e.percentTransferred
                                : "".concat(e.percentTransferred, "%"),
                              '</div>\n\t\t\t\t\t\t\t<div class="profile-progress__line" style="width: '
                            )
                            .concat(
                              e.percentTransferred &&
                                toString(e.percentTransferred).indexOf("%") > -1
                                ? e.percentTransferred
                                : "".concat(e.percentTransferred, "%"),
                              '"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t'
                            )
                        : "",
                      "\n\t\t\t\t\t"
                    )
                    .concat(
                      "created" === e.status.toLowerCase() ||
                        "in_progress" === e.status.toLowerCase() ||
                        "warning" === e.status.toLowerCase() ||
                        "no_enough_stock" === e.status.toLowerCase() ||
                        "not_enough_stock" === e.status.toLowerCase() ||
                        "no_enough_coins_to_start" === e.status.toLowerCase() ||
                        "not_enough_coins_to_start" ===
                          e.status.toLowerCase() ||
                        "locked" === e.status.toLowerCase() ||
                        "error_payment" === e.status.toLowerCase() ||
                        "accepted" === e.status.toLowerCase()
                        ? ""
                        : '\n\t\t\t\t\t\t<div class="form__group">\n\t\t\t\t\t\t\t<div class="form__col">\n\t\t\t\t\t\t\t\t<fieldset class="input__group '
                            .concat(e.mail ? "has-success" : "", " ")
                            .concat(
                              "wrong_credentials" === e.status.toLowerCase()
                                ? "has-error"
                                : "",
                              '">\n\t\t\t\t\t\t\t\t\t<label class="input__label input__label--email" for="profile-email-order-'
                            )
                            .concat(
                              e.id,
                              '">\n\t\t\t\t\t\t\t\t\t\t<input class="input__input" id="profile-email-order-'
                            )
                            .concat(
                              e.id,
                              '" name="email" type="email" required minlength="7" value="'
                            )
                            .concat(
                              e.mail ? e.mail : "",
                              '" autocomplete="off" placeholder="'
                            )
                            .concat(
                              i.c[o.a.locale].email,
                              '">\n\t\t\t\t\t\t\t\t\t\t<span class="input__label-placeholder">'
                            )
                            .concat(
                              i.c[o.a.locale].account,
                              "</span>\n\t\t\t\t\t\t\t\t\t\t"
                            )
                            .concat(
                              "wrong_credentials" === e.status.toLowerCase()
                                ? '<label for="profile-order-'
                                    .concat(e.id, '-codes" class="error">')
                                    .concat(
                                      i.c[o.a.locale].wrongCredentials,
                                      "</label>"
                                    )
                                : "",
                              '\n\t\t\t\t\t\t\t\t\t\t<div class="input__borders"><div class="input__border input__border-left"></div><div class="input__border input__border-middle"><div class="input-top__borders"><div class="input__border input__border-start"></div><div class="input__border input__border-end"></div></div><div class="input-bottom__borders"><div class="input__border input__border-start"></div><div class="input__border input__border-end"></div></div></div><div class="input__border input__border-right"></div></div>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</fieldset>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="form__col">\n\t\t\t\t\t\t\t\t<fieldset class="input__group '
                            )
                            .concat(
                              "wrong_credentials" === e.status.toLowerCase()
                                ? "has-error"
                                : "",
                              '">\n\t\t\t\t\t\t\t\t\t<label class="input__label input__label--password" for="profile-password-order-'
                            )
                            .concat(
                              e.id,
                              '">\n\t\t\t\t\t\t\t\t\t\t<input class="input__input" id="profile-password-order-'
                            )
                            .concat(
                              e.id,
                              '" name="password" type="password" required minlength="2" placeholder="'
                            )
                            .concat(
                              i.c[o.a.locale].password,
                              '">\n\t\t\t\t\t\t\t\t\t\t<span class="input__label-placeholder">'
                            )
                            .concat(
                              i.c[o.a.locale].password,
                              "</span>\n\t\t\t\t\t\t\t\t\t\t"
                            )
                            .concat(
                              "wrong_credentials" === e.status.toLowerCase()
                                ? '<label for="profile-order-'
                                    .concat(e.id, '-codes" class="error">')
                                    .concat(
                                      i.c[o.a.locale].wrongCredentials,
                                      "</label>"
                                    )
                                : "",
                              '\n\t\t\t\t\t\t\t\t\t\t<div class="input__borders"><div class="input__border input__border-left"></div><div class="input__border input__border-middle"><div class="input-top__borders"><div class="input__border input__border-start"></div><div class="input__border input__border-end"></div></div><div class="input-bottom__borders"><div class="input__border input__border-start"></div><div class="input__border input__border-end"></div></div></div><div class="input__border input__border-right"></div></div>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t<button class="input__view btn js-password-view" type="button" title="'
                            )
                            .concat(
                              i.c[o.a.locale].seePassword,
                              '"><span class="btn__content"><svg class="eye"><use xlink:href="'
                            )
                            .concat(
                              window.location.origin,
                              '/images/sprites.svg#eye"></use></svg><svg class="eye-close"><use xlink:href="'
                            )
                            .concat(
                              window.location.origin,
                              '/images/sprites.svg#eye-close"></use></svg></span></button>\n\t\t\t\t\t\t\t\t</fieldset>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<fieldset class="input__group js-profile-codes '
                            )
                            .concat(a && a.length ? "has-success" : "", " ")
                            .concat(
                              "wrong_backup" === e.status.toLowerCase()
                                ? "has-error"
                                : "",
                              '">\n\t\t\t\t\t\t\t<label class="input__label input__label--codes" for="profile-order-'
                            )
                            .concat(
                              e.id,
                              '-codes" data-length="8">\n\t\t\t\t\t\t\t\t<div class="js-input-codes">\n\t\t\t\t\t\t\t\t\t'
                            )
                            .concat(
                              a && a.length
                                ? a
                                    .map(function (e) {
                                      return s.inputCode(
                                        e,
                                        o.a.numberWithCommas4(e)
                                      );
                                    })
                                    .join("")
                                : "",
                              '\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<input class="input__input" id="profile-order-'
                            )
                            .concat(
                              e.id,
                              '-codes" autocomplete="off" name="codes" type="text" inputmode="decimal" minlength="8" placeholder="'
                            )
                            .concat(
                              i.c[o.a.locale].enterCode,
                              '">\n\t\t\t\t\t\t\t\t<label for="profile-order-'
                            )
                            .concat(
                              e.id,
                              '-codes" class="input__input--masked is-placeholder">'
                            )
                            .concat(
                              i.c[o.a.locale].enterCode,
                              "</label>\n\t\t\t\t\t\t\t\t"
                            )
                            .concat(
                              "wrong_backup" === e.status.toLowerCase()
                                ? '<label for="profile-order-'
                                    .concat(e.id, '-codes" class="error">')
                                    .concat(
                                      i.c[o.a.locale].wrongCode,
                                      "</label>"
                                    )
                                : "",
                              '\n\t\t\t\t\t\t\t\t<span class="input__label-placeholder">'
                            )
                            .concat(
                              i.c[o.a.locale].backupCode,
                              '</span>\n\t\t\t\t\t\t\t\t<div class="input__borders"><div class="input__border input__border-left"></div><div class="input__border input__border-middle"><div class="input-top__borders"><div class="input__border input__border-start"></div><div class="input__border input__border-end"></div></div><div class="input-bottom__borders"><div class="input__border input__border-start"></div><div class="input__border input__border-end"></div></div></div><div class="input__border input__border-right"></div></div>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</fieldset>\n\t\t\t\t\t\t<div class="input__helper">'
                            )
                            .concat(
                              i.c[o.a.locale].backupCodes,
                              ' <a href="https://myaccount.ea.com/cp-ui/security/index" target="_blank">myaccount.ea.com/cp-ui/security/index</a></div>\n\t\t\t\t\t\t'
                            )
                            .concat(
                              t
                                ? '\n\t\t\t\t\t\t\t<div class="form__group">\n\t\t\t\t\t\t\t\t'
                                    .concat(
                                      "war" === e.status.toLowerCase
                                        ? '\n\t\t\t\t\t\t\t\t\t<button class="btn profile__button-event js-profile-button-report" type="button"><span class="btn__content"><svg><use xlink:href="'
                                            .concat(
                                              window.location.origin,
                                              '/images/sprites.svg#warning"></use></svg><span>'
                                            )
                                            .concat(
                                              i.c[o.a.locale].reportProblem,
                                              '</span></span></button>\n\t\t\t\t\t\t\t\t\t<button class="btn profile__button-event js-profile-button-cancel" type="button"><span class="btn__content"><svg><use xlink:href="'
                                            )
                                            .concat(
                                              window.location.origin,
                                              '/images/sprites.svg#cancel"></use></svg><span>'
                                            )
                                            .concat(
                                              i.c[o.a.locale].cancelOrder,
                                              "</span></span></button>\n\t\t\t\t\t\t\t\t"
                                            )
                                        : "",
                                      '\n\t\t\t\t\t\t\t\t<button class="btn profile__button profile__group-button js-form-submit" type="submit"><span class="btn__content">'
                                    )
                                    .concat(
                                      i.c[o.a.locale].saveChanges,
                                      "</span></button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t"
                                    )
                                : "",
                              "\n\t\t\t\t\t"
                            ),
                      "\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t"
                    ),
              "\n\t</div>"
            )
        );
      }),
      (s.promoCodeBtn = function () {
        return '<a class="btn payment-method__total-coupon-title" role="button">'.concat(
          i.c[o.a.locale].haveCoupon,
          "</a>"
        );
      }),
      (s.promoCodeTemplate = function (e) {
        return '\n\t\t<div class="payment-method__total-coupon-title">'
          .concat(
            e.promoCode,
            '</div>\n\t\t<div class="payment-method__total-coupon-addon">\n\t\t\t<span>'
          )
          .concat((Number(e.price) - Number(e.newValue)).toFixed(2), " (-")
          .concat(
            e.discount.toFixed(2),
            '%)</span>\n\t\t\t<svg id="closeCoupon"><use xlink:href="'
          )
          .concat(
            window.location.origin,
            '/images/sprites.svg#cross"></use></svg>\n\t\t</div>'
          );
      }),
      (s.orderNotifyProgress = function (e) {
        return '\n\t\t<a href="/'
          .concat(
            "en" === o.a.locale ? "" : "".concat(o.a.locale, "/"),
            'order#delivery-progress" data-id="'
          )
          .concat(
            e.id,
            '" class="header-order__notify-item header-order__notify-item--progress">\n\t\t\t<span>'
          )
          .concat(
            Object(i.d)([o.a.locale].yourOrder, e.id),
            '</span>\n\t\t\t<img src="'
          )
          .concat(
            window.location.origin,
            '/images/profile/progress.svg" alt="status">\n\t\t</a>\n\t'
          );
      }),
      (s.orderNotifyError = function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "".concat(Object(i.b)(e.status).text);
        return '\n\t\t<a href="/'
          .concat(
            "en" === o.a.locale ? "" : "".concat(o.a.locale, "/"),
            'order#delivery" data-id="'
          )
          .concat(
            e.id,
            '" class="header-order__notify-item header-order__notify-item--error">\n\t\t\t<span>'
          )
          .concat(t, '</span>\n\t\t\t<img src="')
          .concat(
            window.location.origin,
            '/images/profile/progress.svg" alt="status">\n\t\t</a>\n\t'
          );
      }),
      (s.errorTemplate = function (e) {
        var t = "error-".concat(c);
        return {
          html: '\n\t\t\t<div class="header__notify header__notify--error is-hidden" data-id="'
            .concat(t, '">\n\t\t\t\t<span>')
            .concat(
              e,
              '</span>\n\t\t\t\t<button class="btn header__notify-btn js-notify-btn" type="button">\n\t\t\t\t\t<span class="btn__content">\n\t\t\t\t\t\t<svg><use xlink:href="'
            )
            .concat(
              window.location.origin,
              '/images/sprites.svg#close-alt"></use></svg>\n\t\t\t\t\t\t<svg class="circle" viewBox="25 25 50 50"><circle cx="50" cy="50" r="24"></circle></svg>\n\t\t\t\t\t</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t'
            ),
          num: c++,
        };
      }),
      (s.profileNotifyTemplate = function (e) {
        var t = "profile-".concat(c);
        return {
          html: '\n\t\t\t<div class="header__notify header__notify--profile is-hidden" data-id="'
            .concat(t, '">\n\t\t\t\t<span>')
            .concat(
              e,
              '</span>\n\t\t\t\t<button class="btn header__notify-btn js-notify-btn" type="button">\n\t\t\t\t\t<span class="btn__content">\n\t\t\t\t\t\t<svg><use xlink:href="'
            )
            .concat(
              window.location.origin,
              '/images/sprites.svg#close-alt"></use></svg>\n\t\t\t\t\t\t<svg class="circle" viewBox="25 25 50 50"><circle cx="50" cy="50" r="24"></circle></svg>\n\t\t\t\t\t</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t'
            ),
          num: c++,
        };
      }),
      (t.a = s);
  },
  3: function (e, t, a) {
    "use strict";
    a.d(t, "b", function () {
      return o;
    }),
      a.d(t, "c", function () {
        return r;
      }),
      a.d(t, "d", function () {
        return n;
      }),
      a.d(t, "e", function () {
        return i;
      }),
      a.d(t, "a", function () {
        return s;
      });
    a(283);
    var o = {
        en: {
          created: "Created",
          accepted: "Accepted",
          out_of_stock: "Out of stock",
          warning: "Warning",
          wrong_credentials: "Wrong credentials",
          wrong_backup: "Wrong backup",
          no_enough_stock: "Not enough stock",
          not_enough_stock: "Not enough stock",
          no_enough_coins_to_start: "Not enough coins to start",
          not_enough_coins_to_start: "Not enough coins to start",
          waiting_payment: "Waiting payment",
          payment_failed: "Payment failed",
          error_payment: "Payment failed",
          no_access_to_fifa_21_webapp: "No access to FIFA 22 Web-App",
          error_fut: "FUT error",
          fut_error: "FUT error",
          customer_online: "FIFA account currently in use",
          success: "Success",
          finished: "Finished",
          payed: "Paid",
          progress: "In progress",
          locked: "locked",
        },
        ru: {
          created: "Создан",
          accepted: "Принят",
          out_of_stock: "Распродано",
          warning: "Предупреждение",
          wrong_credentials: "Неверные учётные данные",
          wrong_backup: "Неверные резервные коды",
          no_enough_stock: "Не хватает монет, нет в наличии",
          not_enough_stock: "Не хватает монет, нет в наличии",
          no_enough_coins_to_start: "Не достаточно монет, для начала",
          not_enough_coins_to_start: "Не достаточно монет, для начала",
          waiting_payment: "Ожидает оплаты",
          payment_failed: "Платеж не прошел",
          error_payment: "Платеж не прошел",
          no_access_to_fifa_21_webapp: "Нет доступа к FIFA 22 Web-App",
          error_fut: "Ошибка FUT",
          fut_error: "Ошибка FUT",
          customer_online: "Аккаунт FIFA, используется в настоящее время",
          success: "Успешно",
          finished: "Завершён",
          payed: "Оплачен",
          progress: "В процессе",
          locked: "Заблокированный",
        },
        de: {
          created: "ERSTELLEN",
          accepted: "ZAHLUNG AKZEPTIERT",
          out_of_stock: "NICHT AUF LAGER",
          warning: "Warnung",
          wrong_credentials: "FALSCHE ZUGANGSDATEN",
          wrong_backup: "FALSCHE BACKUP",
          no_enough_stock: "NICHT GENUG Münzen",
          not_enough_stock: "NICHT GENUG Münzen",
          no_enough_coins_to_start: "NICHT GENUG Münzen UM ZU BEGINNEN",
          not_enough_coins_to_start: "NICHT GENUG Münzen UM ZU BEGINNEN",
          waiting_payment: "ZAHLUNG WIRD ERWARTET",
          payment_failed: "ZAHLUNG FEHLGESCHLAGEN",
          error_payment: "ZAHLUNG FEHLGESCHLAGEN",
          no_access_to_fifa_21_webapp: "Kein Zugang zur WEB-APP FIFA 22",
          error_fut: "FUT FEHLER",
          fut_error: "FUT FEHLER",
          customer_online: "FIFA-Konto wird verwendet",
          success: "Erfolg",
          finished: "BEENDET",
          payed: "BEZAHLT",
          progress: "WIRD VERARBEITET",
          locked: "sperren",
        },
        fr: {
          created: "CRÉÉE",
          accepted: "acceptée",
          out_of_stock: "RUPTURE DE STOCK",
          warning: "Avertissement",
          wrong_credentials: "IDENTIFIANTS ERRONÉS",
          wrong_backup: "CODE DE SAUVEGARDE ERRONÉ",
          no_enough_stock: "PAS ASSEZ DE Crédits",
          not_enough_stock: "PAS ASSEZ DE Crédits",
          no_enough_coins_to_start: "PAS ASSEZ DE Crédits POUR COMMENCER",
          not_enough_coins_to_start: "PAS ASSEZ DE Crédits POUR COMMENCER",
          waiting_payment: "EN ATTENTE DE PAIEMENT",
          payment_failed: "ÉCHEC DU PAIEMENT",
          error_payment: "ÉCHEC DU PAIEMENT",
          no_access_to_fifa_21_webapp: "Aucun accès à APPLICATION WEB FIFA 22",
          error_fut: "ERREUR FUT",
          fut_error: "ERREUR FUT",
          customer_online: "compte FIFA actuellement en cours d'utilisation",
          success: "Succès",
          finished: "TERMINÉ",
          payed: "PAYÉE",
          progress: "EN COURS",
          locked: "verrouillé",
        },
        it: {
          created: "CREAZIONE",
          accepted: "ACCETTATO",
          out_of_stock: "ESAURITO",
          warning: "Avvertimento",
          wrong_credentials: "CREDENZIALI ERRATE",
          wrong_backup: "BACKUP ERRATO",
          no_enough_stock: "crediti INSUFFICIENTI",
          not_enough_stock: "crediti INSUFFICIENTI",
          no_enough_coins_to_start: "crediti INSUFFICIENTI",
          not_enough_coins_to_start: "crediti INSUFFICIENTI",
          waiting_payment: "IN ATTESA DEL PAGAMENTO",
          payment_failed: "PAGAMENTO NON RIUSCITO",
          error_payment: "PAGAMENTO NON RIUSCITO",
          no_access_to_fifa_21_webapp:
            "Accesso alla web-app di FIFA 22 non disponibile",
          error_fut: "ERRORE IN FUT",
          fut_error: "ERRORE IN FUT",
          customer_online: "Account FIFA in uso",
          success: "Success",
          finished: "OPERAZIONE CONCLUSA",
          payed: "PAGATO",
          progress: "IN CORSO",
          locked: "rinchiuso",
        },
        ar: {
          created: "إنشاء",
          accepted: "مقبول",
          out_of_stock: "غير متوفر",
          warning: "تحذير",
          wrong_credentials: "بيانات اعتماد خاطئة",
          wrong_backup: "كود احتياطي خاطئ",
          no_enough_stock: "عملات معدنية غير كافية للبدء",
          not_enough_stock: "عملات معدنية غير كافية للبدء",
          no_enough_coins_to_start: "عملات معدنية غير كافية للبدء",
          not_enough_coins_to_start: "عملات معدنية غير كافية للبدء",
          waiting_payment: "في انتظار السداد",
          payment_failed: "فشلت عملية الدفع",
          error_payment: "فشلت عملية الدفع",
          no_access_to_fifa_21_webapp:
            "لا يمكن الوصول إلى تطبيق FIFA 22 على الويب",
          error_fut: "FUT خطأ",
          fut_error: "FUT خطأ",
          customer_online: "حساب FIFA قيد الاستخدام حاليًا",
          success: "النجاح",
          finished: "مكتمل",
          payed: "مدفوع",
          progress: "قيد التنفيذ",
          locked: "مقفل",
        },
        nl: {
          created: "AANGEMAAKT",
          accepted: "AANVAARD",
          out_of_stock: "UITVERKOCHT",
          warning: "Waarschuwing",
          wrong_credentials: "VERKEERDE GEGEVENS",
          wrong_backup: "VERKEERDE BACK-UP",
          no_enough_stock: "NIET GENOEG MUNTEN",
          not_enough_stock: "NIET GENOEG MUNTEN",
          no_enough_coins_to_start: "NIET GENOEG MUNTEN OM TE STARTEN",
          not_enough_coins_to_start: "NIET GENOEG MUNTEN OM TE STARTEN",
          waiting_payment: "WACHT OP BETALING",
          payment_failed: "BETALING MISLUKT",
          error_payment: "BETALING MISLUKT",
          no_access_to_fifa_21_webapp: "Geen toegang tot FIFA 22 WEB-APP",
          error_fut: "FOUT FUT",
          fut_error: "FOUT FUT",
          customer_online: "FIFA account momenteel in gebruik",
          success: "Succes",
          finished: "AFGEWERKT",
          payed: "BETAALD",
          progress: "BEZIG MET UITVOERING",
          locked: "afgesloten",
        },
        es: {
          created: "CREADO",
          accepted: "ACEPTADO",
          out_of_stock: "AGOTADAS",
          warning: "Advertencia",
          wrong_credentials: "CREDENCIALES INCORRECTAS",
          wrong_backup: "COPIA DE SEGURIDAD INCORRECTA",
          no_enough_stock: "MONEDAS INSUFICIENTES PARA INICIAR",
          not_enough_stock: "MONEDAS INSUFICIENTES PARA INICIAR",
          no_enough_coins_to_start: "MONEDAS INSUFICIENTES PARA INICIAR",
          not_enough_coins_to_start: "MONEDAS INSUFICIENTES PARA INICIAR",
          waiting_payment: "ESPERANDO PAGO",
          payment_failed: "ERROR DEL PAGO",
          error_payment: "ERROR DEL PAGO",
          no_access_to_fifa_21_webapp:
            "Sin acceso a la aplicación web de «FIFA 22»",
          error_fut: "ERROR FUT",
          fut_error: "ERROR FUT",
          customer_online: "Cuenta de «FIFA» ya en uso",
          success: "Éxito",
          finished: "COMPLETADO",
          payed: "PAGADO",
          progress: "EN CURSO",
          locked: "bloquear",
        },
        pt: {
          created: "CRIAR",
          accepted: "ACEITE",
          out_of_stock: "SEM STOCK",
          warning: "Aviso",
          wrong_credentials: "CREDENCIAIS ERRADAS",
          wrong_backup: "CÓDIGO DE SEGURANÇA ERRADO",
          no_enough_stock: "SEM MOEDAS SUFICIENTES PARA COMEÇAR",
          not_enough_stock: "SEM MOEDAS SUFICIENTES PARA COMEÇAR",
          no_enough_coins_to_start: "SEM MOEDAS SUFICIENTES PARA COMEÇAR",
          not_enough_coins_to_start: "SEM MOEDAS SUFICIENTES PARA COMEÇAR",
          waiting_payment: "A AGUARDAR PAGAMENTO",
          payment_failed: "O PAGAMENTO FALHOU",
          error_payment: "O PAGAMENTO FALHOU",
          no_access_to_fifa_21_webapp: "Sem acesso à APLICAÇÃO ONLINE FIFA 22",
          error_fut: "ERRO FUT",
          fut_error: "ERRO FUT",
          customer_online: "Conta FIFA a ser utilizada atualmente",
          success: "Sucesso",
          finished: "CONCLUÍDO",
          payed: "PAGO",
          progress: "A DECORRER",
          locked: "protegido",
        },
        ch: {
          created: "创建",
          accepted: "已接受",
          out_of_stock: "缺货",
          warning: "警告",
          wrong_credentials: "凭证错误",
          wrong_backup: "备份错误",
          no_enough_stock: "启动金币不足",
          not_enough_stock: "启动金币不足",
          no_enough_coins_to_start: "启动金币不足",
          not_enough_coins_to_start: "启动金币不足",
          waiting_payment: "等待支付中",
          payment_failed: "支付失败",
          error_payment: "支付失败",
          no_access_to_fifa_21_webapp: "无法访问 FIFA 22 WEB-APP",
          error_fut: "FUT 错误",
          fut_error: "FUT 错误",
          customer_online: "FIFA 帐户当前正在使用中",
          success: "成功",
          finished: "已完成",
          payed: "已支付",
          progress: "进行中",
          locked: "锁上了",
        },
        tr: {
          created: "OLUŞTUR",
          accepted: "KABUL EDİLDİ",
          out_of_stock: "STOKTA YOK",
          warning: "Uyarıcı",
          wrong_credentials: "GİRİŞ BİLGİLERİ HATALI",
          wrong_backup: "BACKUP HATALI",
          no_enough_stock: "YETERLİ JETON YOK",
          not_enough_stock: "YETERLİ JETON YOK",
          no_enough_coins_to_start: "YETERLİ JETON YOK",
          not_enough_coins_to_start: "YETERLİ JETON YOK",
          waiting_payment: "ÖDEME BEKLENİYOR",
          payment_failed: "ÖDEME BAŞARISIZ",
          error_payment: "ÖDEME BAŞARISIZ",
          no_access_to_fifa_21_webapp:
            "FIFA 22 WEB-APP uygulamasına erişilemiyor",
          error_fut: "FUT HATASI",
          fut_error: "FUT HATASI",
          customer_online: "FIFA hesabı halihazırda kullanılıyor",
          success: "Başarı",
          finished: "TAMAMLANDI",
          payed: "ÖDENDİ",
          progress: "İŞLENİYOR",
          locked: "kilitli",
        },
        pl: {
          created: "TWORZENIE",
          accepted: "ZAAKCEPTOWANE",
          out_of_stock: "BRAK W MAGAZYNIE",
          warning: "Ostrzeżenie",
          wrong_credentials: "BŁĘDNE DANE",
          wrong_backup: "BŁĘDNY KOD ZAPASOWY",
          no_enough_stock: "ZA MAŁO MONET NA START",
          not_enough_stock: "ZA MAŁO MONET NA START",
          no_enough_coins_to_start: "ZA MAŁO MONET NA START",
          not_enough_coins_to_start: "ZA MAŁO MONET NA START",
          waiting_payment: "OCZEKIWANIE NA PŁATNOŚĆ",
          payment_failed: "PŁATNOŚĆ NIEUDANA",
          error_payment: "PŁATNOŚĆ NIEUDANA",
          no_access_to_fifa_21_webapp: "Brak dostępu do aplikacji WWW FIFA 22",
          error_fut: "BŁĄD FUT",
          fut_error: "BŁĄD FUT",
          customer_online: "Konto FIFA jest obecnie używane",
          success: "Sukcesy",
          finished: "ZAKOŃCZONO",
          payed: "OPŁACONE",
          progress: "W TRAKCIE REALIZACJI",
          locked: "zablokowane",
        },
        sw: {
          created: "SKAPA",
          accepted: "GODKÄND",
          out_of_stock: "EJ I LAGER",
          warning: "Varning",
          wrong_credentials: "FELAKTIGA UPPGIFTER",
          wrong_backup: "FELAKTIG RESERVKOD",
          no_enough_stock: "SAKNAS MYNT FÖR ATT STARTA",
          not_enough_stock: "SAKNAS MYNT FÖR ATT STARTA",
          no_enough_coins_to_start: "SAKNAS MYNT FÖR ATT STARTA",
          not_enough_coins_to_start: "SAKNAS MYNT FÖR ATT STARTA",
          waiting_payment: "VÄNTAR PÅ BETALNING",
          payment_failed: "BETALNINGSFEL",
          error_payment: "BETALNINGSFEL",
          no_access_to_fifa_21_webapp: "Ingen tillgång till FIFA 22:s webbapp",
          error_fut: "FUT-FEL",
          fut_error: "FUT-FEL",
          customer_online: "FIFA-kontot används",
          success: "Framgång",
          finished: "LEVERERAD",
          payed: "BETALAD",
          progress: "BEHANDLAS",
          locked: "låst",
        },
        no: {
          created: "OPPRETT",
          accepted: "GODTATT",
          out_of_stock: "IKKE FLERE TILGJENGELIG",
          warning: "Advarsel",
          wrong_credentials: "FEIL OPPLYSNINGER",
          wrong_backup: "FEIL RESERVE",
          no_enough_stock: "IKKE NOK MYNTER TIL Å KUNNE STARTE",
          not_enough_stock: "IKKE NOK MYNTER TIL Å KUNNE STARTE",
          no_enough_coins_to_start: "IKKE NOK MYNTER TIL Å KUNNE STARTE",
          not_enough_coins_to_start: "IKKE NOK MYNTER TIL Å KUNNE STARTE",
          waiting_payment: "AVVENTER BETALING",
          payment_failed: "BETALING MISLYKTES",
          error_payment: "BETALING MISLYKTES",
          no_access_to_fifa_21_webapp: "Ingen tilgang til FIFA 22-NETTAPPEN",
          error_fut: "FUT-FEIL",
          fut_error: "FUT-FEIL",
          customer_online: "FIFA-kontoen er i bruk",
          success: "Suksess",
          finished: "FULLFØRT",
          payed: "BETALT",
          progress: "PÅGÅR",
          locked: "låse",
        },
      },
      r = {
        en: {
          forPaymentError: "Payment failed",
          profileCodesErrors:
            "Please enter backup codes. The code should be at least 8 characters long.",
          loading: "Loading",
          seePassword: "See password",
          hidePassword: "Hide password",
          toDay: "Today",
          yesterDay: "Yesterday",
          numDay: "#",
          login: "Platform / E-mail",
          amount: "Amount",
          price: "Price",
          status: "Status",
          transferred: "Coins transferred",
          continueTransfering: "Continue Transfering",
          profileFormSuccess: "Order is changed, the status",
          enterCode: "Enter code",
          wrongCode: "Wrong Backup",
          backupCode: "Backup codes",
          email: "Email",
          account: "Account",
          password: "Password",
          emailOrPassword: "Email or password is invalid",
          fbError: "Email or password is invalid",
          isInvalid: "invalid",
          isAlreadyTaken: "is already taken",
          wrongCredentials: "Wrong Credentials",
          reportProblem: "Report a problem",
          cancelOrder: "Cancel order",
          saveChanges: "Save changes",
          haveCoupon: "Have an coupon",
          logOut: "Log out",
          youLogged: "You’re successfully logged as",
          coinsFor: "Coins for",
          orderCreationError: "Order creation error",
          orderUpdateError: "Order update error",
          invalidPromo: "Invalid promo code",
          couponExpired: "Coupon expired",
          couponLimit: "This coupon has been used in full",
          couponCondition:
            "Order amount does not meet the minimum requirement to use a coupon",
          buyingCoins: "Buying coins on royalfut.com",
          currency: "$",
          currencyName: "USD",
          paymentsLanguage: "en-US",
          MissingOrInvalidCredentialsCode:
            "Connection error, please try again!",
          profileNotify: "DELIVERING your order №xxxxx",
          backupCodes: "You can get backup codes here: ",
        },
        ru: {
          forPaymentError: "Платёж не прошел",
          profileCodesErrors:
            "Пожалуйста, введите резервные коды. Код должен состоять не менее чем из 8 символов.",
          loading: "Загрузка",
          seePassword: "Посмотреть пароль",
          hidePassword: "Скрыть пароль",
          toDay: "Сегодня",
          yesterDay: "Вчера",
          numDay: "#",
          login: "Платформа / E-mail",
          amount: "Сумма монет",
          price: "Стоимость",
          status: "Статус",
          transferred: "Переведенные монеты",
          continueTransfering: "Продолжить перевод",
          profileFormSuccess: "Заказ изменен, статус",
          enterCode: "Введите код",
          wrongCode: "Неверный резервный код",
          backupCode: "Резервные коды",
          email: "Почта",
          account: "Аккаунт",
          password: "Пароль",
          emailOrPassword: "Неверная электронная почта или пароль",
          fbError: "Неверная электронная почта или пароль",
          isInvalid: "неверно",
          isAlreadyTaken: "уже занят",
          isAlreadyTaken1: "уже занята",
          wrongCredentials: "Неверные учетные данные",
          reportProblem: "Сообщить о проблеме",
          cancelOrder: "Отменить заказ",
          saveChanges: "Сохранить изменения",
          haveCoupon: "Есть купон",
          logOut: "Выйти",
          youLogged: "Вы успешно вошли как",
          coinsFor: "Монет за",
          orderCreationError: "Ошибка создания заказа",
          orderUpdateError: "Ошибка обновления заказа",
          invalidPromo: "Промокод не найден",
          couponExpired: "Срок действия купона истек",
          couponLimit: "Промокод использован максимальное кол-во раз",
          couponCondition:
            "Сумма заказа не удовлетворяет минимальной для использования промокода",
          buyingCoins: "Купить монеты на royalfut.com",
          currency: "₽",
          currencyName: "RUB",
          paymentsLanguage: "ru-RU",
          MissingOrInvalidCredentialsCode:
            "Ошибка подключения, пожалуйста, попробуйте еще раз!",
          profileNotify: "ДОСТАВКА вашего заказа №xxxxx",
          backupCodes: "Коды резервной копии доступны здесь: ",
        },
        de: {
          forPaymentError: "Zahlung fehlgeschlagen",
          profileCodesErrors:
            "Bitte geben Sie die Backup-Codes ein. Der Code muss mindestens 8 Zeichen lang sein.",
          loading: "Laden",
          seePassword: "Siehe Passwort",
          hidePassword: "Passwort ausblenden",
          toDay: "Heute",
          yesterDay: "Eben",
          numDay: "Nr.",
          login: "Plattform / E-Mail",
          amount: "Anzahl",
          price: "Preis",
          status: "Status",
          transferred: "Coins übermittelt",
          continueTransfering: "Transfer fortsetzen",
          profileFormSuccess: "Reihenfolge wird geändert, der status",
          enterCode: "code eingeben",
          wrongCode: "FALSCHE BACKUP",
          backupCode: "Backup-codes",
          email: "E-mail",
          account: "Konto",
          password: "Passwort",
          emailOrPassword: "E-Mail-Adresse oder Passwort ungültig",
          fbError: "E-Mail-Adresse oder Passwort ungültig",
          isInvalid: "ungültig",
          isAlreadyTaken: "ist bereits vergeben",
          wrongCredentials: "FALSCHE ZUGANGSDATEN",
          reportProblem: "Ein problem melden",
          cancelOrder: "Bestellung abbrechen",
          saveChanges: "ÄNDERUNGEN SPEICHERN",
          haveCoupon: "Ich habe einen Gutschein",
          logOut: "AUSLOGGEN",
          youLogged: "Sie haben sich erfolgreich angemeldet als Benutzer",
          coinsFor: "Münzen für",
          orderCreationError: "Fehler bei der Auftragserstellung",
          orderUpdateError: "Um update-Fehler",
          invalidPromo: "Promocode ungültig",
          couponExpired: "Gutschein abgelaufen",
          couponLimit: "Dieser Gutschein wurde bereits aufgebraucht",
          couponCondition:
            "Die Bestellmenge erfüllt nicht die Mindestanforderungen für einen Gutschein",
          buyingCoins: "Münzen kaufen auf royalfut.com",
          currency: "$",
          currencyName: "USD",
          paymentsLanguage: "de-DE",
          MissingOrInvalidCredentialsCode:
            "Verbindungsproblem. Bitte erneut versuchen!",
          profileNotify: "Ihre Bestellung Nr. xxxxx wird VERSANDT",
          backupCodes: "Hier kannst du dir Backup Codes holen: ",
        },
        fr: {
          forPaymentError: "ÉCHEC DU PAIEMENT",
          profileCodesErrors:
            "Veuillez entrer le code de sauvegarde qui doit comporter au moins 8 caractères.",
          loading: "Chargement",
          seePassword: "Voir le mot de passe",
          hidePassword: "Masquer le mot de passe",
          toDay: "Aujourd'hui",
          yesterDay: "Hier",
          numDay: "№",
          login: "Plateforme / Adresse e-mail",
          amount: "Nombre",
          price: "Prix",
          status: "Statut",
          transferred: "Pièces transférées",
          continueTransfering: "Poursuivre le transfert",
          profileFormSuccess: "L'ordre est changé, le statut",
          enterCode: "ENTRER LE CODE",
          wrongCode: "CODE DE SAUVEGARDE ERRONÉ",
          backupCode: "Codes de sauvegarde",
          email: "E-mail",
          account: "Compte",
          password: "Mot de passe",
          emailOrPassword: "Adresse électronique ou mot de passe non valide",
          fbError: "Adresse électronique ou mot de passe non valide",
          isInvalid: "non valide",
          isAlreadyTaken: "déjà enregistré",
          wrongCredentials: "IDENTIFIANTS ERRONÉS",
          reportProblem: "Signaler un problème",
          cancelOrder: "Annuler la commande",
          saveChanges: "ENREGISTRER LES MODIFICATIONS",
          haveCoupon: "Si vous avez un coupon",
          logOut: "SE DÉCONNECTER",
          youLogged:
            "Vous êtes connecté avec succès avec votre nom d'utilisateur",
          coinsFor: "Crédits pour",
          orderCreationError: "Erreur de création de commande",
          orderUpdateError: "Erreur de mise à jour de commande",
          invalidPromo: "Code promotionnel non valide",
          couponExpired: "Coupon expiré",
          couponLimit: "Ce coupon a été utilisé en totalité",
          couponCondition:
            "Le montant de la commande n'atteint pas le minimum requis pour utiliser un coupon",
          buyingCoins: "ACHETER DES CRÉDITS sur royalfut.com",
          currency: "$",
          currencyName: "USD",
          paymentsLanguage: "fr-FR",
          MissingOrInvalidCredentialsCode:
            "Erreur de connexion, veuillez réessayer !",
          profileNotify: "LIVRAISON de votre commande №xxxxx",
          backupCodes: "Vous pouvez obtenir des codes de secours ici : ",
        },
        it: {
          forPaymentError: "PAGAMENTO NON RIUSCITO",
          profileCodesErrors:
            "inserisci i codici di backup. Ogni codice deve contenere almeno 8 caratteri",
          loading: "Loading",
          seePassword: "Vedi password",
          hidePassword: "Nascondi password",
          toDay: "Oggi",
          yesterDay: "Ieri",
          numDay: "Num.",
          login: "Piattaforma / E-mail",
          amount: "Quantità",
          price: "Prezzo",
          status: "Stato",
          transferred: "Monete trasferite",
          continueTransfering: "Continua il trasferimento",
          profileFormSuccess: "L'ordine è cambiato, lo stato",
          enterCode: "INSERISCI IL CODICE",
          wrongCode: "BACKUP ERRATO",
          backupCode: "Codice di backup",
          email: "E-mail",
          account: "Account",
          password: "Password",
          emailOrPassword: "E-mail o password non valida",
          fbError: "E-mail o password non valida",
          isInvalid: "non valida",
          isAlreadyTaken: "è già in uso",
          wrongCredentials: "CREDENZIALI ERRATE",
          reportProblem: "Segnala un problema",
          cancelOrder: "Annulla ordine",
          saveChanges: "SALVA LE MODIFICHE",
          haveCoupon: "Avere un coupon",
          logOut: "DISCONNETTERSI\t",
          youLogged: "Accesso riuscito con il nome utente",
          coinsFor: "crediti per",
          orderCreationError: "Errore di creazione dell'ordine",
          orderUpdateError: "Errore di aggiornamento dell'ordine",
          invalidPromo: "codice promozionale non valido",
          couponExpired: "coupon scaduto",
          couponLimit: "Questo coupon è stato usato completamente",
          couponCondition:
            "L'ammontare dell'ordine è inferiore al minimo richiesto per usare un coupon",
          buyingCoins: "Acquisto di crediti su royalfut.com",
          currency: "$",
          currencyName: "USD",
          paymentsLanguage: "it-IT",
          MissingOrInvalidCredentialsCode: "Errore di connessione, riprova!",
          profileNotify: "CONSEGNA del tuo ordine xxxxx",
          backupCodes: "Puoi ottenere i tuoi codici di backup qui: ",
        },
        ar: {
          forPaymentError: "فشلت عملية الدفع",
          profileCodesErrors:
            "يُرجى إدخال الأكواد الاحتياطية. يجب أن يكون الكود 8 حروف على الأقل",
          loading: "تحميل",
          seePassword: "انظر كلمة المرور",
          hidePassword: "إخفاء كلمة المرور",
          toDay: "اليوم",
          yesterDay: "أمس",
          numDay: "#",
          login: "المنصة / البريد الإلكتروني",
          amount: "المقدار",
          price: "السعر",
          status: "الحالة",
          transferred: "تم نقل العملات",
          continueTransfering: "متابعة التحويل",
          profileFormSuccess: "يتم تغيير النظام ، والحالة",
          enterCode: "إدخال الكود",
          wrongCode: "كود احتياطي خاطئ",
          backupCode: "الأكواد الاحتياطية",
          email: "البريد الإلكتروني",
          account: "الحساب",
          password: "كلمة المرور",
          emailOrPassword: "البريد الإلكتروني أو كلمة المرور غير صالحين",
          fbError: "البريد الإلكتروني أو كلمة المرور غير صالحين",
          isInvalid: "صالحين",
          isAlreadyTaken: "هذا مستخدم بالفعل",
          wrongCredentials: "بيانات اعتماد خاطئة",
          reportProblem: "الإبلاغ عن مشكلة",
          cancelOrder: "إلغاء الطلب",
          saveChanges: "حفظ التغييرات",
          haveCoupon: "لديك قسيمة",
          logOut: "تسجيل خروج",
          youLogged: "لقد سجلت الدخول بنجاح باسم",
          coinsFor: "من العملات مقابل",
          orderCreationError: "خطأ في إنشاء الطلب",
          orderUpdateError: "خطأ في تحديث الطلب",
          invalidPromo: "كود ترويجي غير صالح",
          couponExpired: "القسيمة منتهية الصلاحية",
          couponLimit: "اُستخدمت هذه القسيمة بالكامل",
          couponCondition:
            "لا تلبي قيمة الطلب الحد الأدنى المطلوب لاستخدام القسيمة",
          buyingCoins: "شراء العملات على royalfut.com",
          currency: "$",
          currencyName: "SAR",
          paymentsLanguage: "ar-EG",
          profileNotify: "جارٍ تسليم طلبك رقم xxxxx",
          backupCodes: "يمكنك الحصول على الأكواد الاحتياطية هنا: ",
        },
        nl: {
          forPaymentError: "Betaling mislukt",
          profileCodesErrors:
            "Gelieve je backup codes in te voeren. De code moet minstens 8 tekens lang zijn.",
          loading: "Laden",
          seePassword: "Zie wachtwoord",
          hidePassword: "Wachtwoord verbergen",
          toDay: "Vandaag",
          yesterDay: "Gisteren",
          numDay: "#",
          login: "Platform / e-mail",
          amount: "Aantal",
          price: "Prijs",
          status: "Status",
          transferred: "Munten overgedragen",
          continueTransfering: "Doorgaan met transfers",
          profileFormSuccess: "Volgorde is veranderd, de status",
          enterCode: "Code invoeren",
          wrongCode: "VERKEERDE BACK-UP",
          backupCode: "Backup-codes",
          email: "E-mail",
          account: "Account",
          password: "Wachtwoord",
          emailOrPassword: "Ongeldig e-mailadres of wachtwoord.",
          fbError: "Ongeldig e-mailadres of wachtwoord.",
          isInvalid: "Ongeldig",
          isAlreadyTaken: "bestaat al",
          wrongCredentials: "VERKEERDE GEGEVENS",
          reportProblem: "Een probleem melden",
          cancelOrder: "Bestelling annuleren",
          saveChanges: "Wijzigingen opslaan",
          haveCoupon: "Ik heb een kortingsbon",
          logOut: "UITLOGGEN",
          youLogged: "Je bent met succes aangemeld als",
          coinsFor: "Munten voor",
          orderCreationError: "bestelling aanmaken fout",
          orderUpdateError: "bestelling fout bijwerken",
          invalidPromo: "Ongeldige kortingscode",
          couponExpired: "Kortingsbon niet meer geldig",
          couponLimit: "Deze coupon is volledig gebruikt",
          couponCondition:
            "De grootte van de bestelling komt niet overeen met de minimale vereisten voor het gebruik van een coupon",
          buyingCoins: "Munten kopen op royalfut.com",
          currency: "$",
          currencyName: "USD",
          paymentsLanguage: "nl-NL",
          MissingOrInvalidCredentialsCode:
            "Verbindingsfout, gelieve het nog eens te proberen!",
          profileNotify: "LEVERING van bestelling №xxxxx",
          backupCodes: "Hier kun je back-upcodes krijgen: ",
        },
        es: {
          forPaymentError: "Error del pago",
          profileCodesErrors:
            "Indique el código de copia de seguridad. El código debe tener al menos 8 caracteres.",
          loading: "Carga",
          seePassword: "Ver contraseña",
          hidePassword: "Ocultar contraseña",
          toDay: "Hoy",
          yesterDay: "Ayer",
          numDay: "N.º",
          login: "Plataforma / email",
          amount: "Cantidad",
          price: "Precio",
          status: "Estado",
          transferred: "Monedas transferidas",
          continueTransfering: "Continuar transferencia",
          profileFormSuccess: "El orden se cambia, el estado",
          enterCode: "INDIQUE EL CÓDIGO",
          wrongCode: "COPIA DE SEGURIDAD INCORRECTA",
          backupCode: "Códigos de copia de seguridad",
          email: "Correo electrónico",
          account: "CUENTA",
          password: "Contraseña",
          emailOrPassword:
            "El correo electrónico o la contraseña no son válidos.",
          fbError: "El correo electrónico o la contraseña no son válidos.",
          isInvalid: "no válidos",
          isAlreadyTaken: "ya está ocupado.",
          wrongCredentials: "CREDENCIALES INCORRECTAS",
          reportProblem: "Informar de un problema",
          cancelOrder: "Cancelar pedido",
          saveChanges: "GUARDAR CAMBIOS",
          haveCoupon: "Tengo un cupón",
          logOut: "SALIR",
          youLogged: "Se ha registrado correctamente como",
          coinsFor: "monedas por",
          orderCreationError: "Error de creación de pedidos",
          orderUpdateError: "Error de actualización de pedido",
          invalidPromo: "Código promocional no válido",
          couponExpired: "Cupón caducado",
          couponLimit: "Este cupón ya ha sido usado",
          couponCondition:
            "La cantidad del pedido no cumple los requisitos mínimos para usar un cupón",
          buyingCoins: "Comprar monedas en royalfut.com",
          currency: "$",
          currencyName: "USD",
          paymentsLanguage: "es-ES",
          MissingOrInvalidCredentialsCode:
            "Error de conexión. Inténtelo de nuevo.",
          profileNotify: "ENTREGA de su pedido n.º xxxxx",
          backupCodes: "Consigue códigos de recuperación aquí: ",
        },
        pt: {
          forPaymentError: "O pagamento falhou",
          profileCodesErrors:
            "Introduz o código de segurança. O código deve ter, pelo menos, 8 caracteres.",
          loading: "Carregamento",
          seePassword: "Ver passe",
          hidePassword: "Esconder a passe",
          toDay: "Hoje",
          yesterDay: "Ontem",
          numDay: "N.º",
          login: "Plataforma / E-mail",
          amount: "Montante",
          price: "Preço",
          status: "Estado",
          transferred: "Moedas transferidas",
          continueTransfering: "Continuar a transferência",
          profileFormSuccess: "A ordem é alterada, o estado",
          enterCode: "INTRODUZIR O CÓDIGO",
          wrongCode: "CÓDIGO DE SEGURANÇA ERRADO",
          backupCode: "Código de segurança",
          email: "E-mail",
          account: "CONTA",
          password: "Palavra-passe",
          emailOrPassword: "O e-mail ou palavra-passe são inválidos",
          fbError: "O e-mail ou palavra-passe são inválidos",
          isInvalid: "inválidos",
          isAlreadyTaken: "já foi escolhido",
          wrongCredentials: "CREDENCIAIS ERRADAS",
          reportProblem: "Comunicar um problema",
          cancelOrder: "Cancelar a ordem",
          saveChanges: "GUARDAR ALTERAÇÕES",
          haveCoupon: "Tenho um cupão",
          logOut: "TERMINAR SESSÃO",
          youLogged: "Iniciaste sessão com sucesso com o nome de",
          coinsFor: "Moedas por",
          orderCreationError: "Erro de criação da ordem",
          orderUpdateError: "Erro de actualização da ordem",
          invalidPromo: "código promocional inválido",
          couponExpired: "Cupão caducado",
          couponLimit: "Este cupão já foi totalmente usado",
          couponCondition:
            "A quantia da encomenda não atinge os requisitos mínimos para usar um cupão",
          buyingCoins: "Compra de moedas royalfut.com",
          currency: "$",
          currencyName: "USD",
          paymentsLanguage: "pt-PT",
          MissingOrInvalidCredentialsCode: "Erro de ligação, tenta novamente!",
          profileNotify: "A ENTREGAR o teu pedido n.ºxxxxx",
          backupCodes: "Podes obter códigos de segurança aqui: ",
        },
        ch: {
          forPaymentError: "支付失败",
          profileCodesErrors: "请输入备份代码。代码长度不应少于 8 个字符",
          loading: "加载",
          seePassword: "查看密码",
          hidePassword: "隐藏密码",
          toDay: "今天",
          yesterDay: "昨天",
          numDay: "#",
          login: "平台/邮箱",
          amount: "数量",
          price: "价格",
          status: "状态",
          transferred: "金币已转账",
          continueTransfering: "继续交易",
          profileFormSuccess: "订单被改变，状态",
          enterCode: "输入代码",
          wrongCode: "备份错误",
          backupCode: "备份代码",
          email: "电子邮件",
          account: "帐户",
          password: "密码",
          emailOrPassword: "电子邮件或密码无效",
          fbError: "电子邮件或密码无效",
          isInvalid: "无效",
          isAlreadyTaken: "已被占用",
          wrongCredentials: "凭证错误",
          reportProblem: "报告问题",
          cancelOrder: "取消订单",
          saveChanges: "保存更改",
          haveCoupon: "有一张优惠券",
          logOut: "退出",
          youLogged: "您已成功以用户名登录",
          coinsFor: "购买",
          orderCreationError: "订单创建错误",
          orderUpdateError: "订单更新错误",
          invalidPromo: "无效的促销代码",
          couponExpired: "优惠券已过期",
          couponLimit: "此优惠券已用完",
          couponCondition: "订单金额不符合使用优惠券的最低要求",
          buyingCoins: "购买硬币 royalfut.com",
          currency: "$",
          currencyName: "USD",
          paymentsLanguage: "jp-JP",
          MissingOrInvalidCredentialsCode: "连接错误，请再次尝试!",
          profileNotify: "交付您的订单 №xxxxx",
          backupCodes: "您可以在此处获取备用代码： ",
        },
        tr: {
          forPaymentError: "Ödeme başarısız",
          profileCodesErrors:
            "Lütfen backup kodunu girin. Kod en az 8 karakter uzunluğunda olmalıdır.",
          loading: "Yükleniyor",
          seePassword: "Bkz. şifre",
          hidePassword: "Şifreyi gizle",
          toDay: "Bugün",
          yesterDay: "Dün",
          numDay: "#",
          login: "Platform / E-posta",
          amount: "Miktar",
          price: "Fiyat",
          status: "Durum",
          transferred: "Jeton transfer edildi",
          continueTransfering: "Transfere devam edin",
          profileFormSuccess: "Sipariş değişti, durum",
          enterCode: "Kodu gir",
          wrongCode: "BACKUP HATALI",
          backupCode: "Backup kodları",
          email: "E-POSTA",
          account: "hesabı",
          password: "Şifre",
          emailOrPassword: "E-posta veya şifre geçersiz.",
          fbError: "E-posta veya şifre geçersiz.",
          isInvalid: "geçersiz",
          isAlreadyTaken: "adı alınmış.",
          wrongCredentials: "GİRİŞ BİLGİLERİ HATALI",
          reportProblem: "Bir sorunu bildir",
          cancelOrder: "Siparişi iptal et",
          saveChanges: "Değişiklikleri Kaydet",
          haveCoupon: "İndirim kuponunuz mu var",
          logOut: "ÇIKIŞ",
          youLogged: "Kullanıcı adı olarak başarıyla kaydoldunuz.",
          coinsFor: "Jeton bedeli",
          orderCreationError: "Sipariş oluşturma hatası",
          orderUpdateError: "Sipariş güncelleme hatası",
          invalidPromo: "İndirim kodu geçersiz",
          couponExpired: "Kuponun süresi dolmuş",
          couponLimit: "Bu kupon tümüyle kullanılmış",
          couponCondition:
            "Sipariş miktarı kupon kullanmak için gereken minimum şartı karşılamıyor",
          buyingCoins: "Para satın alma royalfut.com",
          currency: "$",
          currencyName: "USD",
          paymentsLanguage: "tr-TR",
          MissingOrInvalidCredentialsCode:
            "Bağlantı hatası. Lütfen tekrar deneyin!",
          profileNotify: "№xxxxx numaralı siparişiniz TESLİM EDİLİYOR",
          backupCodes: "Yedek kodunu şuradan alabilirsiniz: ",
        },
        pl: {
          forPaymentError: "PŁATNOŚĆ NIEUDANA",
          profileCodesErrors:
            "Wprowadź kody zapasowe. Kod powinien mieć co najmniej 8 znaków",
          loading: "Ładowanie",
          seePassword: "Zobacz hasło",
          hidePassword: "Ukryj hasło",
          toDay: "Dziś",
          yesterDay: "Wczoraj",
          numDay: "#",
          login: "Platforma / E-mail",
          amount: "Liczba",
          price: "Cena",
          status: "Stan",
          transferred: "Monety przekazane",
          continueTransfering: "Kontynuuj transfer",
          profileFormSuccess: "Kolejność została zmieniona, status",
          enterCode: "WPROWADŹ KOD",
          wrongCode: "BŁĘDNY KOD ZAPASOWY",
          backupCode: "Kody zapasowe",
          email: "E-mail",
          account: "KONTO",
          password: "Hasło",
          emailOrPassword: "Błędny e-mail lub hasło",
          fbError: "Błędny e-mail lub hasło",
          isInvalid: "hasło",
          isAlreadyTaken: "jest już zajęta",
          wrongCredentials: "BŁĘDNE DANE",
          reportProblem: "Zgłoś problem",
          cancelOrder: "Anuluj zamówienie",
          saveChanges: "Zapisz zmiany",
          haveCoupon: "Jeśli masz kupon",
          logOut: "WYLOGUJ\t\t",
          youLogged: "Poprawnie zalogowano nazwą użytkownika",
          coinsFor: "mnt. za",
          orderCreationError: "Błąd tworzenia zamówienia",
          orderUpdateError: "Błąd aktualizacji zamówienia",
          invalidPromo: "Błędny kod promocyjny",
          couponExpired: "kupon przeterminowany",
          couponLimit: "Ten kupon został użyty w pełni",
          couponCondition:
            "Zamówienie nie spełnia minimalnego wymagania do użycia kuponu",
          buyingCoins: "Skup monet naroyalfut.com",
          currency: "$",
          currencyName: "USD",
          paymentsLanguage: "pl-PL",
          MissingOrInvalidCredentialsCode:
            "Błąd połączenia, spróbuj jeszcze raz!",
          profileNotify: "DOSTARCZANIE twojego zamówienia xxxxx",
          backupCodes: "Zapasowy kody znajdziesz tutaj: ",
        },
        sw: {
          forPaymentError: "BETALNINGSFEL",
          profileCodesErrors:
            "Ange reservkod. Koden ska vara minst 8 tecken lång.",
          loading: "Lastning",
          seePassword: "Se lösenord",
          hidePassword: "Dölj lösenord",
          toDay: "Idag",
          yesterDay: "Igår",
          numDay: "#",
          login: "Plattform/e-post",
          amount: "Antal",
          price: "Pris",
          status: "Status",
          transferred: "Överförda mynt",
          continueTransfering: "Fortsätt överföringen",
          profileFormSuccess: "Order ändras, status",
          enterCode: "Ange kod",
          wrongCode: "FELAKTIG RESERVKOD",
          backupCode: "Reservkoder",
          email: "E-post",
          account: "KONTO",
          password: "Lösenord",
          emailOrPassword: "E-post eller lösenord stämmer inte",
          fbError: "E-post eller lösenord stämmer inte",
          isInvalid: "stämmer",
          isAlreadyTaken: "är redan taget",
          wrongCredentials: "FELAKTIGA UPPGIFTER",
          reportProblem: "Rapportera ett problem",
          cancelOrder: "Avbryt beställning",
          saveChanges: "Spara ändringar",
          haveCoupon: "Har en kupong",
          logOut: "LOGGA UT",
          coinsFor: "mynt för",
          orderCreationError: "Orderskapande fel",
          orderUpdateError: "Orderuppdateringsfel",
          invalidPromo: "Ogiltig kampanjkod",
          couponExpired: "Kupongen har gått ut",
          couponLimit: "Den här kupongen har använts",
          couponCondition:
            "Orderbeloppet uppfyller inte minimikravet för kuponganvändning",
          buyingCoins: "Köpa mynt på royalfut.com",
          currency: "$",
          currencyName: "SEK",
          paymentsLanguage: "sv-SV",
          MissingOrInvalidCredentialsCode: "Anslutningsfel. Försök igen.",
          profileNotify: "LEVERER bestilling nr. xxxxx",
          backupCodes: "Du kan hämta reservkoder här ",
        },
        no: {
          forPaymentError: "Betaling mislyktes",
          profileCodesErrors: "oppgi reservekode, minst 8 tegn",
          loading: "Lasting",
          seePassword: "Se passordet ditt",
          hidePassword: "Skjul passord",
          toDay: "I dag",
          yesterDay: "I går",
          numDay: "#",
          login: "Plattform/e-post",
          amount: "Antall",
          price: "Pris",
          status: "Status",
          transferred: "Mynter overført",
          continueTransfering: "Fortsett overføringen",
          profileFormSuccess: "Rekkefølgen er endret status",
          enterCode: "Skriv inn kode",
          wrongCode: "FEIL RESERVE",
          backupCode: "Reservekoder",
          email: "E-postadresse",
          account: "Konto",
          password: "Passord",
          emailOrPassword: "Ugyldig e-postadresse eller passord",
          fbError: "Ugyldig e-postadresse eller passord",
          isInvalid: "Ugyldig",
          isAlreadyTaken: "er allerede i bruk",
          wrongCredentials: "FEIL OPPLYSNINGER",
          reportProblem: "Informar de un problema",
          cancelOrder: "Cancelar pedido",
          saveChanges: "LAGRE ENDRINGER",
          haveCoupon: "Har en kupong",
          logOut: "LOGG UT",
          coinsFor: "mynter for",
          orderCreationError: "Error de creación de pedidos",
          orderUpdateError: "Error de actualización de pedido",
          invalidPromo: "Ugyldig kampanjekode",
          couponExpired: "Kupongen er utløpt",
          couponLimit: "Denne kupongen har blitt brukt",
          couponCondition:
            "Bestillingsbeløpet matcher ikke minimumskravet for å bruke en kupong",
          buyingCoins: "Comprar monedas en royalfut.com",
          currency: "$",
          currencyName: "NOK",
          paymentsLanguage: "no-NO",
          MissingOrInvalidCredentialsCode: "Tilkoblingsfeil. Prøv igjen.",
          profileNotify: "LEVERERAR beställning xxxxx",
          backupCodes: "Du kan få backup-koder her: ",
        },
      },
      n = function (e, t) {
        return {
          en: {
            forPaidError: "Your order ".concat(
              t ? "№".concat(t, " ") : "",
              "successfully paid. Please tap the banner to continue proceeding your order."
            ),
            forCredentialsError: "Order ".concat(t, " – Invalid account data"),
            forBackupError: "Order ".concat(t, " – Invalid backup codes"),
            forCustomerError: "Order ".concat(t, " – User is currently online"),
            yourOrder: "Your order <em>№".concat(t, "</em> in progress"),
          },
          ru: {
            forPaidError: "Ваш заказ ".concat(
              t ? "№".concat(t, " ") : "",
              " успешно оплачен. Пожалуйста, нажмите на баннер, чтобы продолжить оформление заказа."
            ),
            forCredentialsError: "Неверные учётные данные по заказу ".concat(t),
            forBackupError: "Неверные резервные коды по заказу ".concat(t),
            forCustomerError: "Пользователь находится онлайн по заказу ".concat(
              t
            ),
            yourOrder: "Ваш заказ <em>№".concat(
              t,
              "</em> в процессе выполнения"
            ),
          },
          de: {
            forPaidError: "Deine Bestellung mit der ".concat(
              t ? "№".concat(t, " ") : "",
              "wurde erfolgreich bezahlt. Bitte tippe auf das Banner, um mit deiner Bestellung fortzufahren."
            ),
            forCredentialsError: "Bestell ".concat(
              t,
              " – Konto-Informationen ungültig"
            ),
            forBackupError: "Bestell ".concat(t, " – Backup-Code ungültig"),
            forCustomerError: "Bestell ".concat(
              t,
              " – Benutzer ist derzeit online"
            ),
            yourOrder: "Ihre Bestellung <em>№".concat(
              t,
              "</em> FALSCHE ZUGANGSDATEN"
            ),
          },
          fr: {
            forPaidError: "Le paiement de votre commande ".concat(
              t ? "№".concat(t, " ") : "",
              "a abouti. Veuillez toucher la bannière pour poursuivre le traitement de votre commande."
            ),
            forCredentialsError: "Commande ".concat(
              t,
              " - Données sur le compte non valides"
            ),
            forBackupError: "Commande ".concat(
              t,
              " – Codes de sauvegarde non valides"
            ),
            forCustomerError: "Commande ".concat(
              t,
              " – Utilisateur actuellement connecté"
            ),
            yourOrder: "Votre commande <em>№".concat(t, "</em> EN COURS"),
          },
          it: {
            forPaidError: "Il pagamento del tuo ordine ".concat(
              t ? "№".concat(t, " ") : "",
              "è stato effettuato. Tocca il banner per procedere con l'ordine."
            ),
            forCredentialsError: "Ordine ".concat(
              t,
              " – Dati dell'account non validi"
            ),
            forBackupError: "Ordine ".concat(
              t,
              " – Codici di backup non validi"
            ),
            forCustomerError: "Ordine ".concat(t, " – L'utente è online"),
            yourOrder: "Il Tuo Ordine <em>№".concat(t, "</em> in corso"),
          },
          ar: {
            forPaidError: "تم سداد طلبك ".concat(
              t ? "№".concat(t, " ") : "",
              "بنجاح. الرجاء الضغط على الشعار لمتابعة إجراء طلبك."
            ),
            forCredentialsError: "طلب رقم ".concat(
              t,
              " – بيانات حساب غير صالحة"
            ),
            forBackupError: "طلب رقم ".concat(t, " – أكواد احتياطية غير صالحة"),
            forCustomerError: "طلب رقم ".concat(t, " – المستخدم متصل حاليًا"),
            yourOrder: "تم سداد طلبك <em>№".concat(t, "</em> قيد التنفيذ"),
          },
          nl: {
            forPaidError: "Je bestelling ".concat(
              t ? "№".concat(t, " ") : "",
              "is betaald. Tik op de banner om door te gaan met je bestelling."
            ),
            forCredentialsError: "Bestelling ".concat(
              t,
              " – Ongeldige account gegevens"
            ),
            forBackupError: "Bestelling ".concat(
              t,
              " – Ongeldige backup-codes"
            ),
            forCustomerError: "Bestelling ".concat(
              t,
              " – gebruiker is momenteel online"
            ),
            yourOrder: "Je bestelling <em>№".concat(
              t,
              "</em> BEZIG MET UITVOERING"
            ),
          },
          es: {
            forPaidError: "Su pedido ".concat(
              t ? "№".concat(t, " ") : "",
              " se ha pagado correctamente. Haga clic en el banner para continuar con el proceso.."
            ),
            forCredentialsError: "Pedido ".concat(
              t,
              " – datos de cuenta no válidos"
            ),
            forBackupError: "Pedido ".concat(
              t,
              " – códigos de copia de seguridad no válidos"
            ),
            forCustomerError: "Pedido ".concat(
              t,
              " – el usuario ya está conectado"
            ),
            yourOrder: "Su pedido <em>№".concat(t, "</em> EN CURSO"),
          },
          pt: {
            forPaidError: "O teu pedido ".concat(
              t ? "№".concat(t, " ") : "",
              "foi pago com sucesso. Toca no banner para continuares a processar o teu pedido."
            ),
            forCredentialsError: "Pedido ".concat(
              t,
              " – Dados de conta inválidos"
            ),
            forBackupError: "Pedido ".concat(
              t,
              " – Códigos de segurança inválidos"
            ),
            forCustomerError: "Pedido ".concat(
              t,
              " – O utilizador está atualmente online"
            ),
            yourOrder: "O teu pedido <em>№".concat(t, "</em> A DECORRER"),
          },
          ch: {
            forPaidError: "您的订单 ".concat(
              t ? "№".concat(t, " ") : "",
              " 已成功支付。请点击横幅继续订购。"
            ),
            forCredentialsError: "订单 ".concat(t, " – 无效的帐户数据"),
            forBackupError: "订单 ".concat(t, " – 无效的备份代码"),
            forCustomerError: "订单 ".concat(t, " – 用户当前在线"),
            yourOrder: "您的订单 <em>№".concat(t, "</em> 进行中"),
          },
          tr: {
            forPaidError: "Numaralı siparişinizin ".concat(
              t ? "№".concat(t, " ") : "",
              " ödemesi başarıyla yapıldı. Lütfen siparişi tamamlamak için banda tıklayın.."
            ),
            forCredentialsError: "Sipariş ".concat(
              t,
              " – Hesap bilgileri geçersiz"
            ),
            forBackupError: "Sipariş ".concat(t, " – Geçersiz backup kodu"),
            forCustomerError: "Sipariş ".concat(
              t,
              " – Kullanıcı şu anda çevrimiçi"
            ),
            yourOrder: "Numaralı siparişinizin <em>№".concat(
              t,
              "</em> İŞLENİYOR"
            ),
          },
          pl: {
            forPaidError: "Twoje zamówienie ".concat(
              t ? "nr".concat(t, " ") : "",
              "zostało poprawnie opłacone. Dotknij bannera, aby kontynuować przetwarzanie zamówienia."
            ),
            forCredentialsError: "Zamówienie ".concat(
              t,
              " – błędne dane konta"
            ),
            forBackupError: "Zamówienie ".concat(t, " – błędne kody zapasowe"),
            forCustomerError: "Zamówienie ".concat(
              t,
              " – użytkownik jest obecnie online"
            ),
            yourOrder: "Twoje zamówienie <em>№".concat(
              t,
              "</em> W TRAKCIE REALIZACJI"
            ),
          },
          sw: {
            forPaidError: "Beställning ".concat(
              t ? "№".concat(t, " ") : "",
              "har betalats. Tryck på bannern för att fortsätta."
            ),
            forCredentialsError: "Beställning ".concat(
              t,
              " – ogiltiga kontouppgifter"
            ),
            forBackupError: "Beställning ".concat(t, " – ogiltiga reservkoder"),
            forCustomerError: "Beställning ".concat(
              t,
              " – användaren är online"
            ),
            yourOrder: "Beställning <em>№".concat(t, "</em> BEHANDLAS"),
          },
          no: {
            forPaidError: "Betaling for bestilling ".concat(
              t ? "nr.".concat(t, " ") : "",
              "er gjennomført. Trykk på banneret for å fortsette med bestillingen."
            ),
            forCredentialsError: "Bestilling ".concat(
              t,
              " – ugyldige kontoopplysninger"
            ),
            forBackupError: "Bestilling ".concat(t, " – ugyldige reservekoder"),
            forCustomerError: "Bestilling ".concat(t, " – brukeren er på nett"),
            yourOrder: "Betaling for bestilling <em>№".concat(t, "</em> PÅGÅR"),
          },
        }[e];
      },
      i = {
        en: {
          required: "This field is required.",
          remote: "Please fix this field.",
          email: "Please enter a valid email address.",
          url: "Please enter a valid URL.",
          date: "Please enter a valid date.",
          dateISO: "Please enter a valid date (ISO).",
          number: "Please enter a valid number.",
          digits: "Please enter only digits.",
          equalTo: "Please enter the same value again.",
          maxlength: $.validator.format(
            "Please enter no more than {0} characters."
          ),
          minlength: $.validator.format(
            "Please enter at least {0} characters."
          ),
          rangelength: $.validator.format(
            "Please enter a value between {0} and {1} characters long."
          ),
          range: $.validator.format(
            "Please enter a value between {0} and {1}."
          ),
          max: $.validator.format(
            "Please enter a value less than or equal to {0}."
          ),
          min: $.validator.format(
            "Please enter a value greater than or equal to {0}."
          ),
          step: $.validator.format("Please enter a multiple of {0}."),
          codes: "Wrong backup codes",
          generic: "Connection error, please try again!",
          genericCode: "Error occured, please try again!",
        },
        ru: {
          required: "Это поле является обязательным.",
          remote: "Пожалуйста, исправьте это поле.",
          email: "Пожалуйста, введите действительный адрес электронной почты.",
          url: "Пожалуйста, введите действительный URL-адрес.",
          date: "Пожалуйста, введите действительную дату.",
          dateISO: "Пожалуйста, введите действительную дату (ISO).",
          number: "Пожалуйста, введите действительный номер.",
          digits: "Пожалуйста, введите только цифры.",
          equalTo: "Пожалуйста, введите то же самое значение еще раз.",
          maxlength: $.validator.format(
            "Пожалуйста, введите не более {0} символов."
          ),
          minlength: $.validator.format(
            "Пожалуйста, введите не менее {0} символов."
          ),
          rangelength: $.validator.format(
            "Пожалуйста, введите значение длиной от {0} до {1} символов."
          ),
          range: $.validator.format(
            "Пожалуйста, введите значение между {0} и {1}."
          ),
          max: $.validator.format(
            "Пожалуйста, введите значение меньше или равно {0}."
          ),
          min: $.validator.format(
            "Пожалуйста, введите значение, большее или равное {0}."
          ),
          step: $.validator.format("Пожалуйста, введите кратное {0}."),
          codes: "Неверные резервные коды",
          generic: "Ошибка подключения, пожалуйста, попробуйте еще раз!",
          genericCode: "Произошла ошибка, пожалуйста, попробуйте еще раз!",
        },
        de: {
          required: "Das ist ein Pflichtfeld.",
          remote: "Bitte beheben Sie dieses Feld.",
          email: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
          url: "Bitte geben Sie eine gültige URL.",
          date: "Bitte geben Sie ein gültiges Datum ein.",
          dateISO: "Bitte geben Sie ein gültiges Datum (ISO).",
          number: "Bitte geben Sie eine gültige Nummer ein.",
          digits: "Bitte geben Sie nur Ziffern ein.",
          equalTo: "Bitte geben Sie den gleichen Wert erneut ein.",
          maxlength: $.validator.format(
            "Bitte geben Sie nicht mehr als {0} Zeichen."
          ),
          minlength: $.validator.format(
            "Bitte geben Sie mindestens {0} Zeichen ein."
          ),
          rangelength: $.validator.format(
            "Bitte geben Sie einen Wert zwischen {0} und {1} Zeichen lang sein."
          ),
          range: $.validator.format(
            "Bitte geben Sie einen Wert zwischen {0} und {1}."
          ),
          max: $.validator.format(
            "Bitte geben Sie einen Wert kleiner oder gleich {0}."
          ),
          min: $.validator.format(
            "Bitte geben Sie einen Wert größer oder gleich {0}."
          ),
          step: $.validator.format(
            "Bitte geben Sie ein Vielfaches von {0} ein."
          ),
          codes: "Falsche backup-codes",
          generic: "Verbindungsproblem. Bitte erneut versuchen!",
          genericCode: "Ein Fehler ist aufgetreten. Bitte erneut versuchen!",
        },
        fr: {
          required: "Ce champ est obligatoire.",
          remote: "Veuillez corriger ce champ.",
          email: "Veuillez entrer une adresse électronique valide.",
          url: "S'il vous plaît entrer une URL valide.",
          date: "Veuillez entrer une Date valide.",
          dateISO: "S'il vous plaît entrer une date valide (ISO).",
          number: "Veuillez saisir un numéro valide.",
          digits: "Veuillez saisir uniquement des Chiffres.",
          equalTo: "Veuillez saisir à nouveau la même valeur.",
          maxlength: $.validator.format(
            "S'il vous plaît ne pas entrer plus de {0} caractères."
          ),
          minlength: $.validator.format(
            "Veuillez entrer au moins {0} caractères."
          ),
          rangelength: $.validator.format(
            "S'il vous plaît entrer une valeur entre {0} et {1} caractères longs."
          ),
          range: $.validator.format(
            "S'il vous plaît entrer une valeur entre {0} et {1}."
          ),
          max: $.validator.format(
            "S'il vous plaît entrer une valeur inférieure ou égale à {0}."
          ),
          min: $.validator.format(
            "S'il vous plaît entrer une valeur supérieure ou égale à {0}."
          ),
          step: $.validator.format("Veuillez saisir un multiple de {0}."),
          codes: "Codes de sauvegarde incorrects",
          generic: "Erreur de connexion, veuillez réessayer !",
          genericCode: "Une erreur s'est produite, veuillez réessayer !",
        },
        it: {
          required: "Questo campo è obbligatorio.",
          remote: "Si prega di risolvere questo campo.",
          email: "Inserisci un indirizzo e-mail valido.",
          url: "Inserisci un URL valido.",
          date: "Si prega di inserire una data valida.",
          dateISO: "Inserire una data valida (ISO).",
          number: "Si prega di inserire un numero valido.",
          digits: "Si prega di inserire solo cifre.",
          equalTo: "Inserire nuovamente lo stesso valore.",
          maxlength: $.validator.format("Inserire non più di {0} caratteri."),
          minlength: $.validator.format("Inserisci almeno {0} caratteri."),
          rangelength: $.validator.format(
            "Inserire un valore compreso tra {0} E {1}."
          ),
          range: $.validator.format(
            "Inserire un valore compreso tra {0} E {1}."
          ),
          max: $.validator.format("Inserire un valore minore o uguale a {0}."),
          min: $.validator.format(
            "Inserire un valore maggiore o uguale a {0}."
          ),
          step: $.validator.format("Inserire un multiplo di {0}."),
          codes: "Codici di backup errati",
          generic: "Errore di connessione, riprova!",
          genericCode: "Si è verificato un errore, riprova!",
        },
        ar: {
          required: "هذه الخانة مطلوبة.",
          remote: "Please fix this field.",
          email: "يُرجى إدخال عنوان بريد إلكتروني صالح.",
          url: "Please enter a valid URL.",
          date: "Please enter a valid date.",
          dateISO: "Please enter a valid date (ISO).",
          number: "Please enter a valid number.",
          digits: "Please enter only digits.",
          equalTo: "Please enter the same value again.",
          maxlength: $.validator.format(
            "Please enter no more than {0} characters."
          ),
          minlength: $.validator.format("يُرجى إدخال {0} حروف على الأقل."),
          rangelength: $.validator.format(
            "Please enter a value between {0} and {1} characters long."
          ),
          range: $.validator.format(
            "Please enter a value between {0} and {1}."
          ),
          max: $.validator.format(
            "Please enter a value less than or equal to {0}."
          ),
          min: $.validator.format(
            "Please enter a value greater than or equal to {0}."
          ),
          step: $.validator.format("Please enter a multiple of {0}."),
          codes: "رموز احتياطية خاطئة",
          generic: "خطأ في الاتصال، يُرجى المحاولة مجددًا!",
          genericCode: "حدث خطأ، يُرجى المحاولة مجددًا!",
        },
        nl: {
          required: "Dit veld is verplicht.",
          remote: "Please fix this field.",
          email: "Gelieve een geldig e-mailadres in te voeren",
          url: "Please enter a valid URL.",
          date: "Please enter a valid date.",
          dateISO: "Please enter a valid date (ISO).",
          number: "Please enter a valid number.",
          digits: "Please enter only digits.",
          equalTo: "Please enter the same value again.",
          maxlength: $.validator.format(
            "Please enter no more than {0} characters."
          ),
          minlength: $.validator.format(
            "Gelieve minstens {0} tekens in te voeren."
          ),
          rangelength: $.validator.format(
            "Please enter a value between {0} and {1} characters long."
          ),
          range: $.validator.format(
            "Please enter a value between {0} and {1}."
          ),
          max: $.validator.format(
            "Please enter a value less than or equal to {0}."
          ),
          min: $.validator.format(
            "Please enter a value greater than or equal to {0}."
          ),
          step: $.validator.format("Please enter a multiple of {0}."),
          codes: "VERKEERDE BACK-UP CODES",
          generic: "Verbindingsfout, gelieve het nog eens te proberen!",
          genericCode:
            "Er is een fout opgetreden, gelieve het nog eens te proberen!",
        },
        es: {
          required: "Campo obligatorio.",
          remote: "Please fix this field.",
          email: "Indique una dirección de correo electrónico válida.",
          url: "Please enter a valid URL.",
          date: "Please enter a valid date.",
          dateISO: "Please enter a valid date (ISO).",
          number: "Please enter a valid number.",
          digits: "Please enter only digits.",
          equalTo: "Please enter the same value again.",
          maxlength: $.validator.format(
            "Please enter no more than {0} characters."
          ),
          minlength: $.validator.format("Indique al menos {0} caracteres."),
          rangelength: $.validator.format(
            "Please enter a value between {0} and {1} characters long."
          ),
          range: $.validator.format(
            "Please enter a value between {0} and {1}."
          ),
          max: $.validator.format(
            "Please enter a value less than or equal to {0}."
          ),
          min: $.validator.format(
            "Please enter a value greater than or equal to {0}."
          ),
          step: $.validator.format("Please enter a multiple of {0}."),
          codes: "COPIA DE SEGURIDAD INCORRECTA",
          generic: "Error de conexión. Inténtelo de nuevo.",
          genericCode: "Se ha producido un error. Inténtelo de nuevo.",
        },
        pt: {
          required: "Este campo é obrigatório.",
          remote: "Please fix this field.",
          email: "Introduz um endereço de e-mail válido.",
          url: "Please enter a valid URL.",
          date: "Please enter a valid date.",
          dateISO: "Please enter a valid date (ISO).",
          number: "Please enter a valid number.",
          digits: "Please enter only digits.",
          equalTo: "Please enter the same value again.",
          maxlength: $.validator.format(
            "Please enter no more than {0} characters."
          ),
          minlength: $.validator.format(
            "Introduz, pelo menos, {0} caracteres."
          ),
          rangelength: $.validator.format(
            "Please enter a value between {0} and {1} characters long."
          ),
          range: $.validator.format(
            "Please enter a value between {0} and {1}."
          ),
          max: $.validator.format(
            "Please enter a value less than or equal to {0}."
          ),
          min: $.validator.format(
            "Please enter a value greater than or equal to {0}."
          ),
          step: $.validator.format("Please enter a multiple of {0}."),
          codes: "Códigos de salvaguarda errados",
          generic: "Erro de ligação, tenta novamente!",
          genericCode: "Ocorreu um erro, tenta novamente!",
        },
        ch: {
          required: "必填字段。",
          remote: "Please fix this field.",
          email: "请输入有效的电子邮件地址。",
          url: "Please enter a valid URL.",
          date: "Please enter a valid date.",
          dateISO: "Please enter a valid date (ISO).",
          number: "Please enter a valid number.",
          digits: "Please enter only digits.",
          equalTo: "Please enter the same value again.",
          maxlength: $.validator.format(
            "Please enter no more than {0} characters."
          ),
          minlength: $.validator.format("请输入至少 {0} 个字符。"),
          rangelength: $.validator.format(
            "Please enter a value between {0} and {1} characters long."
          ),
          range: $.validator.format(
            "Please enter a value between {0} and {1}."
          ),
          max: $.validator.format(
            "Please enter a value less than or equal to {0}."
          ),
          min: $.validator.format(
            "Please enter a value greater than or equal to {0}."
          ),
          step: $.validator.format("Please enter a multiple of {0}."),
          codes: "错误的备份代码",
          generic: "连接错误，请再次尝试！",
          genericCode: "发生错误，请重新尝试！",
        },
        tr: {
          required: "Zorunlu alan",
          remote: "Please fix this field.",
          email: "Lütfen geçerli bir e-posta adresi girin.",
          url: "Please enter a valid URL.",
          date: "Please enter a valid date.",
          dateISO: "Please enter a valid date (ISO).",
          number: "Please enter a valid number.",
          digits: "Please enter only digits.",
          equalTo: "Please enter the same value again.",
          maxlength: $.validator.format(
            "Please enter no more than {0} characters."
          ),
          minlength: $.validator.format("Lütfen en az {0} karakter girin."),
          rangelength: $.validator.format(
            "Please enter a value between {0} and {1} characters long."
          ),
          range: $.validator.format(
            "Please enter a value between {0} and {1}."
          ),
          max: $.validator.format(
            "Please enter a value less than or equal to {0}."
          ),
          min: $.validator.format(
            "Please enter a value greater than or equal to {0}."
          ),
          step: $.validator.format("Please enter a multiple of {0}."),
          codes: "Backup HATALI kodları",
          generic: "Bağlantı hatası. Lütfen tekrar deneyin.",
          genericCode: "Bir hata oldu. Lütfen tekrar deneyin.",
        },
        pl: {
          required: "To pole jest wymagane.",
          remote: "Please fix this field.",
          email: "Podaj poprawny adres e-mail.",
          url: "Please enter a valid URL.",
          date: "Please enter a valid date.",
          dateISO: "Please enter a valid date (ISO).",
          number: "Please enter a valid number.",
          digits: "Please enter only digits.",
          equalTo: "Please enter the same value again.",
          maxlength: $.validator.format(
            "Please enter no more than {0} characters."
          ),
          minlength: $.validator.format("Wprowadź co najmniej {0} znaków."),
          rangelength: $.validator.format(
            "Please enter a value between {0} and {1} characters long."
          ),
          range: $.validator.format(
            "Please enter a value between {0} and {1}."
          ),
          max: $.validator.format(
            "Please enter a value less than or equal to {0}."
          ),
          min: $.validator.format(
            "Please enter a value greater than or equal to {0}."
          ),
          step: $.validator.format("Please enter a multiple of {0}."),
          codes: "BŁĘDNY KOD ZAPASOWY kod",
          generic: "Błąd połączenia, spróbuj jeszcze raz!",
          genericCode: "Wystąpił błąd, spróbuj jeszcze raz!",
        },
        sw: {
          required: "Obligatoriskt fält.",
          remote: "Please fix this field.",
          email: "Ange en giltig e-postadress.",
          url: "Please enter a valid URL.",
          date: "Please enter a valid date.",
          dateISO: "Please enter a valid date (ISO).",
          number: "Please enter a valid number.",
          digits: "Please enter only digits.",
          equalTo: "Please enter the same value again.",
          maxlength: $.validator.format(
            "Please enter no more than {0} characters."
          ),
          minlength: $.validator.format("Ange minst {0} tecken."),
          rangelength: $.validator.format(
            "Please enter a value between {0} and {1} characters long."
          ),
          range: $.validator.format(
            "Please enter a value between {0} and {1}."
          ),
          max: $.validator.format(
            "Please enter a value less than or equal to {0}."
          ),
          min: $.validator.format(
            "Please enter a value greater than or equal to {0}."
          ),
          step: $.validator.format("Please enter a multiple of {0}."),
          codes: "FELAKTIG Reservkoder",
          generic: "Anslutningsfel. Försök igen.",
          genericCode: "Ett fel inträffade. Försök igen.",
        },
        no: {
          required: "Dette feltet er påkrevd.",
          remote: "Please fix this field.",
          email: "Skriv inn en gyldig e-postadresse.",
          url: "Please enter a valid URL.",
          date: "Please enter a valid date.",
          dateISO: "Please enter a valid date (ISO).",
          number: "Please enter a valid number.",
          digits: "Please enter only digits.",
          equalTo: "Please enter the same value again.",
          maxlength: $.validator.format(
            "Please enter no more than {0} characters."
          ),
          minlength: $.validator.format("Skriv inn minst {0} tegn."),
          rangelength: $.validator.format(
            "Please enter a value between {0} and {1} characters long."
          ),
          range: $.validator.format(
            "Please enter a value between {0} and {1}."
          ),
          max: $.validator.format(
            "Please enter a value less than or equal to {0}."
          ),
          min: $.validator.format(
            "Please enter a value greater than or equal to {0}."
          ),
          step: $.validator.format("Please enter a multiple of {0}."),
          codes: "FEIL Reservekoder",
          generic: "Tilkoblingsfeil. Prøv igjen.",
          genericCode: "Det har oppstått en feil. Prøv igjen.",
        },
      },
      s = {
        ru: {
          deliveryHours: "время доставки $1-$2ч",
          deliveryMinutes: "время доставки $1-$2м",
        },
        en: {
          deliveryHours: "$1-$2h Delivery Time",
          deliveryMinutes: "$1-$2m Delivery Time",
        },
        de: {
          deliveryHours: "$1-$2 h Lieferzeit",
          deliveryMinutes: "$1-$2 m Lieferzeit",
        },
        fr: {
          deliveryHours: "Livraison en $1 à $2 h",
          deliveryMinutes: "Livraison en $1 à $2 m",
        },
        it: {
          deliveryHours: "Tempo di consegna $1-$2h",
          deliveryMinutes: "Tempo di consegna $1-$2m",
        },
        ar: {
          deliveryHours: "وقت التسليم سا$1 إلى $2عتين",
          deliveryMinutes: "وقت التسليم سا$1 إلى $2 دقيقة",
        },
        nl: {
          deliveryHours: "$1-$2 uur levertijd",
          deliveryMinutes: "$1-$2 minuten levertijd",
        },
        es: {
          deliveryHours: "$1-$2 h de tiempo de entrega",
          deliveryMinutes: "$1-$2 min de tiempo de entrega",
        },
        pt: {
          deliveryHours: "Tempo de entrega: $1-$2h",
          deliveryMinutes: "Tempo de entrega: $1-$2 min",
        },
        pl: {
          deliveryHours: "Czas dostarczenia $1-$2 godz.",
          deliveryMinutes: "Czas dostarczenia $1-$2 minut.",
        },
        ch: {
          deliveryHours: "$1-$2小时交货时间",
          deliveryMinutes: "$1-$2 分钟交货时间",
        },
        tr: {
          deliveryHours: "$1-$2 saatte teslim",
          deliveryMinutes: "$1-$2 dakika teslim",
        },
        sw: {
          deliveryHours: "$1–$2 timmars leveranstid",
          deliveryMinutes: "$1-$2 minuters leveranstid",
        },
        no: {
          deliveryHours: "$1-$2 timers levering",
          deliveryMinutes: "$1-$2 minutters levering",
        },
      };
  },
  34: function (e, t, a) {
    "use strict";
    var o = a(0);
    function r() {
      $(".modal").hasClass("is-opened") &&
        (o.a.$body.css({ paddingRight: "" }),
        o.a.$header.add(o.a.$footer).add(".modal__bg").css({ right: "" }),
        o.a.$html.css({ top: "" }).removeClass("is-lock-scroll"),
        o.a.restoreScrollPosition(),
        setTimeout(function () {
          o.a.$header.add(o.a.$footer).css({ transition: "" });
        }, 400),
        $(".modal.is-opened").removeClass("is-opened"));
    }
    function n(e) {
      $(".modal").hasClass("is-opened") && r();
      var t = $('[data-modal="'.concat(e, '"]'));
      o.a.saveScrollPosition(),
        o.a.isMobile() && o.a.$html.css({ top: "-".concat(o.b, "px") }),
        o.a.$html.addClass("is-lock-scroll"),
        o.a.$body.css({
          paddingRight: "".concat(o.a.getScrollbarWidth(), "px"),
        }),
        o.a.$header.add(o.a.$footer).css({ transition: "0s" }),
        o.a.$header
          .add(o.a.$footer)
          .add(".modal__bg")
          .css({ right: "".concat(o.a.getScrollbarWidth(), "px") }),
        t.addClass("is-opened"),
        t.find(".modal__wrapper").animate({ scrollTop: 0 }, 0);
    }
    t.a = {
      init: function () {
        var e, t;
        o.a.$document
          .on("click.modal", ".js-modal-btn", function (e) {
            n($(e.currentTarget).data("id"));
          })
          .on("click.modal", ".js-modal-close", function () {
            o.a.eraseCookie("click_buy"), r();
          })
          .on("keyup.modal", function (e) {
            27 === e.keyCode &&
              $(".modal").hasClass("is-opened") &&
              (o.a.eraseCookie("click_buy"), r());
          }),
          (e = $("[data-scrollbar]")),
          (t = $("[data-scrollbar-mobile]")),
          e.each(function (e, t) {
            Scrollbar.init(t);
          }),
          t.each(function (e, t) {
            o.a.isMobile() && Scrollbar.init(t);
          });
      },
      destroy: function () {
        o.a.$document.off(".modal"), r();
        var e = $("[data-scrollbar]"),
          t = $("[data-scrollbar-mobile]");
        e.add(t).each(function (e, t) {
          Scrollbar.destroy(t);
        }),
          t.each(function (e, t) {
            Scrollbar.destroy(t);
          });
      },
      open: n,
      close: r,
    };
  },
  35: function (e, t, a) {
    "use strict";
    (function (e) {
      var o,
        r = a(0),
        n = a(49),
        i = a(3),
        s = a(13),
        c = a(50),
        l = a(34),
        d = a(9),
        u = a(12),
        m = a(59),
        p = (r.a.secure.get("_secure_meta_user").email, !1),
        f = r.a.secureEasy.get("user_order_id") || "",
        g = !1;
      function h(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 300;
        e.toggleClass("is-tremor", !0),
          (o = setTimeout(function () {
            e.toggleClass("is-tremor", !1);
          }, t));
      }
      function v(e) {
        clearTimeout(o), e.toggleClass("is-tremor", !1);
      }
      function _(e) {
        return {
          en: { easy: "Comfort trade", manual: "Player Auction" },
          ru: { easy: "Комфортный", manual: "Трансферный рынок" },
          de: { easy: "Komforthandel", manual: "Spielerauktion" },
          fr: { easy: "Transaction confort", manual: "Enchères joueur" },
          it: { easy: "Scambio comfort", manual: "Asta dei giocatori" },
          ar: { easy: "التداول المريح", manual: "مزاد اللاعب" },
          nl: { easy: "Comfort ruil", manual: "Spelersveiling" },
          es: { easy: "Tradeo cómodo", manual: "Subasta de jugadores" },
          pt: { easy: "Negociação Comfort", manual: "Leilão de Jogador" },
          ch: { easy: "舒适交易", manual: "玩家拍卖" },
          tr: { easy: "Rahat işlem", manual: "Oyuncu açik artirma" },
          pl: { easy: "Comfort trade", manual: "Aukcja graczy" },
          sw: { easy: "Smidig leverans", manual: "Spelarauktion" },
          no: { easy: "Comfort trade", manual: "Spillerauksjon" },
        }[r.a.locale][e.toLowerCase()];
      }
      function y(e, t) {
        return new Promise(function (a) {
          if (
            (e.addClass("is-active"),
            window.location.hash &&
              e.length &&
              r.a.scrollTo(e, 600, r.a.isMobile() ? -100 : -200),
            -1 === ["platform", "method", "payment-method"].indexOf(t) &&
              e.find('[type="radio"]').prop("checked", !1),
            barba.history.add(
              "/"
                .concat(
                  "en" !== r.a.locale ? "".concat(r.a.locale, "/") : "",
                  "order/#"
                )
                .concat(t),
              "changeStep"
            ),
            "method" === t &&
              0 !== r.a.calculator.getManualPrice() &&
              r.a.deliveryBage(
                e.find('[for="order-method-manual"] .method__card-price'),
                e.find('[for="order-method-easy"] .method__card-recomend')
              ),
            "amount" === t && u.a.setFields(),
            "payment-method" === t)
          ) {
            var o = (function (e, t, a) {
                if (e >= 1e5 && e <= 299999) {
                  if ("easy" === t) {
                    if ("ps4" === a)
                      return { type: "deliveryMinutes", time: ["20", "30"] };
                    if ("xbox" === a)
                      return { type: "deliveryMinutes", time: ["30", "40"] };
                  } else if ("manual" === t) {
                    if ("ps4" === a)
                      return { type: "deliveryMinutes", time: ["25", "35"] };
                    if ("xbox" === a)
                      return { type: "deliveryMinutes", time: ["35", "45"] };
                  }
                } else if (e >= 3e5 && e <= 799999) {
                  if ("easy" === t) {
                    if ("ps4" === a)
                      return { type: "deliveryMinutes", time: ["30", "50"] };
                    if ("xbox" === a)
                      return { type: "deliveryMinutes", time: ["45", "75"] };
                  } else if ("manual" === t) {
                    if ("ps4" === a)
                      return { type: "deliveryMinutes", time: ["35", "55"] };
                    if ("xbox" === a)
                      return { type: "deliveryMinutes", time: ["50", "80"] };
                  }
                } else if (e >= 8e5 && e <= 1499999) {
                  if ("easy" === t) {
                    if ("ps4" === a)
                      return { type: "deliveryMinutes", time: ["50", "80"] };
                    if ("xbox" === a)
                      return { type: "deliveryHours", time: ["1.5", "2"] };
                  } else if ("manual" === t) {
                    if ("ps4" === a)
                      return { type: "deliveryHours", time: ["1", "1.5"] };
                    if ("xbox" === a)
                      return { type: "deliveryHours", time: ["1.5", "2"] };
                  }
                } else if (e >= 15e5 && e <= 2999999) {
                  if ("easy" === t) {
                    if ("ps4" === a)
                      return { type: "deliveryHours", time: ["1.5", "3"] };
                    if ("xbox" === a)
                      return { type: "deliveryHours", time: ["2", "4"] };
                  } else if ("manual" === t) {
                    if ("ps4" === a)
                      return { type: "deliveryHours", time: ["1.5", "3"] };
                    if ("xbox" === a)
                      return { type: "deliveryHours", time: ["2", "4"] };
                  }
                } else if (e >= 3e6 && e <= 4999999) {
                  if ("easy" === t) {
                    if ("ps4" === a)
                      return { type: "deliveryHours", time: ["3", "5"] };
                    if ("xbox" === a)
                      return { type: "deliveryHours", time: ["4", "6"] };
                  } else if ("manual" === t) {
                    if ("ps4" === a)
                      return { type: "deliveryHours", time: ["3", "5"] };
                    if ("xbox" === a)
                      return { type: "deliveryHours", time: ["4", "6"] };
                  }
                } else if (e >= 5e6 && e <= 1e9)
                  if ("easy" === t) {
                    if ("ps4" === a)
                      return { type: "deliveryHours", time: ["5", "10"] };
                    if ("xbox" === a)
                      return { type: "deliveryHours", time: ["6", "12"] };
                  } else if ("manual" === t) {
                    if ("ps4" === a)
                      return { type: "deliveryHours", time: ["5", "10"] };
                    if ("xbox" === a)
                      return { type: "deliveryHours", time: ["6", "12"] };
                  }
              })(
                r.a.calculator.getCoins(),
                r.a.calculator.getMethod().toLowerCase(),
                r.a.calculator.getPlatform().toLowerCase()
              ),
              n = i.a[r.a.locale][o.type];
            (n = (n = n.replace("$1", o.time[0])).replace("$2", o.time[1])),
              $(".js-set-delivery").html(n);
            var s = e.find(".js-payment-method-form-coupon");
            s.data("order") ||
              (s.attr("action", "".concat(s.attr("action"), "/").concat(f)),
              s.data("order", f));
          }
          e.find(".site__content").slideDown(function () {
            "payment-method" === t &&
              $(".payment-method").css({
                "--label-active-width": "".concat(
                  $(".payment-method__placeholder").width(),
                  "px"
                ),
              }),
              e.find("input").length && a();
          });
        });
      }
      function b(e, t) {
        e.addClass("is-correct"),
          e.find(".site__content").slideUp(function () {
            e.removeClass("is-active");
            var a = e.next();
            $(".js-select-page").filter(".is-correct").length < 3
              ? $(".js-select-page").each(function (e, t) {
                  if (!$(t).hasClass("is-correct")) return (a = $(t)), !1;
                })
              : (a = $('[data-id="payment-method"]')),
              t || (t = a.data("id"));
            var o = r.a.calculator.getFullInfo();
            "platform" === e.data("id") &&
              "xbox" === o.platform &&
              parseInt(o.coins) < 2e5 &&
              ((a = $('.js-select-page[data-id="amount"]')),
              (t = "amount"),
              r.a.calculator.setCoins(2e5),
              $('[data-id="amount"]')
                .find(".site__tab-value")
                .html(
                  '<div class="okay"><svg><use xlink:href="'.concat(
                    window.location.origin,
                    '/images/sprites.svg#okay"></use></svg></div>'
                  )
                ),
              a.removeClass("is-correct")),
              u.a.setAllFields(),
              y(a, t);
          });
      }
      function C() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          t = {
            id: f,
            platform: r.a.calculator.getPlatform(),
            method: r.a.calculator.getMethod(),
            price:
              r.a.coinsInfo[r.a.calculator.getPlatform()].pricePerCurrencyMap
                .EUR,
            amount: r.a.calculator.getCoins(),
            coupon: r.a.coupon,
          };
        d.a.sendPayment(t);
        var a = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Token ".concat(
                r.a.secure.get("_secure_meta_token")
              ),
            },
            data: JSON.stringify({ paymentMethod: e }),
          },
          o = "".concat(urlForOrder, "/").concat(f, "/prepay"),
          n = "/".concat(e);
        switch (e) {
          case "acquiring":
            (n = ""), delete a.data;
            break;
          case "payop":
            a.data = JSON.stringify({ paymentMethod: null });
        }
        return (a.url = "".concat(o).concat(n)), $.ajax(a);
      }
      function w(e) {
        var t = s.a.errorTemplate(e);
        r.a.$body.append(t.html),
          $('[data-id="error-'.concat(t.num, '"]'))
            .last()
            .removeClass("is-hidden"),
          setTimeout(function () {
            $('[data-id="error-'.concat(t.num, '"]')).fadeOut();
          }, 5e3);
      }
      function E(e) {
        var t = !1;
        "payment-method" !== e || f || (e = "method"),
          "payment-fail" === e && ((e = "payment-method"), (t = !0)),
          "delivery" === e ||
            "deliveryManual" === e ||
            "delivery-progress" === e ||
            "amount" === e ||
            ($('[data-id="'.concat(e, '"]')).length &&
              r.a.secureEasy.get("user_order")) ||
            (e = "platform"),
          (function (e, t) {
            ("method" !== e.data("id") && "amount" !== e.data("id")) ||
              (r.a.calculator.setMethod("Easy"),
              r.a.secureEasy.set("user_order", r.a.calculator.getFullInfo())),
              "payment-method" === e.data("id") &&
                e
                  .find(".payment-method__total-value")
                  .html(
                    ""
                      .concat(r.a.currency, " ")
                      .concat(
                        r.a.numberWithCommasForArabic(
                          r.a.calculator.getAmount()
                        )
                      )
                  ),
              y(e, t).then(function () {
                e.prevAll().each(function (e, t) {
                  var a = $(t),
                    o = r.a.calculator.getFullInfo()[a.data("id")];
                  if ("platform" === a.data("id")) {
                    var n = r.a.secure.get("needPlatform"),
                      s =
                        r.a.platformName && n
                          ? "<span>".concat(r.a.platformName, "</span>")
                          : r.a.calculator.getPlatform();
                    if (
                      (a.attr("data-platform", o),
                      !$("[data-barba-subname]").length)
                    ) {
                      var c = barba.history.h;
                      (c.length >= 3 && "home" === c[c.length - 3].ns) ||
                      c.length <= 2
                        ? a
                            .find(".site__tab-value")
                            .html(
                              '<svg><use xlink:href="'
                                .concat(
                                  window.location.origin,
                                  "/images/sprites.svg#platform-"
                                )
                                .concat(
                                  o,
                                  '"></use></svg><div class="okay"><svg><use xlink:href="'
                                )
                                .concat(
                                  window.location.origin,
                                  '/images/sprites.svg#okay"></use></svg></div>'
                                )
                            )
                        : a
                            .find(".site__tab-value")
                            .html(
                              ""
                                .concat(s, '<svg><use xlink:href="')
                                .concat(
                                  window.location.origin,
                                  "/images/sprites.svg#platform-"
                                )
                                .concat(
                                  o,
                                  '"></use></svg><div class="okay"><svg><use xlink:href="'
                                )
                                .concat(
                                  window.location.origin,
                                  '/images/sprites.svg#okay"></use></svg></div>'
                                )
                            );
                    }
                    r.a.secure.remove("needPlatform"), a.addClass("is-correct");
                  }
                  if ("amount" === a.data("id")) {
                    var l = r.a.calculator.getAmount();
                    a.addClass("is-correct"),
                      a
                        .find(".site__tab-value")
                        .html(
                          ""
                            .concat(
                              r.a.numberWithCommasForArabic(
                                r.a.calculator.getCoins()
                              ),
                              " "
                            )
                            .concat(i.c[r.a.locale].coinsFor, " <nobr>")
                            .concat(r.a.currency, " ")
                            .concat(
                              r.a.numberWithCommasForArabic(l),
                              '</nobr><div class="okay"><svg><use xlink:href="'
                            )
                            .concat(
                              window.location.origin,
                              '/images/sprites.svg#okay"></use></svg></div>'
                            )
                        );
                  }
                  "method" === a.data("id") &&
                    ($("input[data-id=".concat(o, "]")).attr("checked", !0),
                    a.addClass("is-correct"),
                    a
                      .find(".site__tab-value")
                      .html(
                        ""
                          .concat(
                            _(o),
                            '<div class="okay"><svg><use xlink:href="'
                          )
                          .concat(
                            window.location.origin,
                            '/images/sprites.svg#okay"></use></svg></div>'
                          )
                      ));
                });
              });
          })($('[data-id="'.concat(e, '"]')), e),
          t && w("".concat(i.c[r.a.locale].forPaymentError));
      }
      function k(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return new Promise(function (a) {
          r.a.secureEasy.remove("acquiringLink");
          var o = {
            url: urlForOrder,
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Token ".concat(
                r.a.secure.get("_secure_meta_token")
              ),
            },
            data: JSON.stringify({
              platform:
                r.a.calculator.getPlatform() ||
                document.querySelector("[data-platform]").dataset.platform,
              deliveryMethod: r.a.calculator.getMethod(),
              currency: r.a.currencyName,
              coinCount: Number(r.a.calculator.getCoins()),
              client_id: r.a.clientID,
            }),
          };
          null !== t && t.prop("disabled", !0).addClass("is-disabled"),
            $.ajax(o)
              .done(function (o) {
                r.a.calculator.setPlatform(o.order.platform),
                  r.a.calculator.setMethod(o.order.deliveryMethod),
                  r.a.calculator.setCoins(o.order.coinCount),
                  (p = !0),
                  null !== t &&
                    t.prop("disabled", !1).removeClass("is-disabled"),
                  $(".js-pay").prop("disabled", !1).removeClass("is-disabled"),
                  $(".payment-method__method-wrapper").removeClass(
                    "is-disabled"
                  ),
                  r.a.secureEasy.set(
                    "user_order",
                    r.a.calculator.getFullInfo()
                  ),
                  (f = o.order.id),
                  $(".js-payment-method-form-coupon").attr(
                    "action",
                    "/api/order/".concat(f)
                  ),
                  $(".js-payment-method-form-coupon").data("order", f),
                  e &&
                    e.length &&
                    ($('[data-id="method"]')
                      .find(".site__tab-value")
                      .html(
                        ""
                          .concat(
                            _(r.a.calculator.getMethod()),
                            '<div class="okay"><svg><use xlink:href="'
                          )
                          .concat(
                            window.location.origin,
                            '/images/sprites.svg#okay"></use></svg></div>'
                          )
                      ),
                    $('[data-id="amount"]')
                      .find(".site__tab-value")
                      .html(
                        ""
                          .concat(
                            r.a.numberWithCommasForArabic(
                              r.a.calculator.getCoins()
                            ),
                            " "
                          )
                          .concat(i.c[r.a.locale].coinsFor, " <nobr>")
                          .concat(r.a.currency, " ")
                          .concat(
                            r.a.numberWithCommasForArabic(
                              r.a.calculator.getAmount()
                            ),
                            '</nobr><div class="okay"><svg><use xlink:href="'
                          )
                          .concat(
                            window.location.origin,
                            '/images/sprites.svg#okay"></use></svg></div>'
                          )
                      ),
                    $('[data-id="payment-method"]')
                      .find(".payment-method__total-value")
                      .html(
                        ""
                          .concat(r.a.currency, " ")
                          .concat(
                            r.a.numberWithCommasForArabic(
                              r.a.calculator.getAmount()
                            )
                          )
                      ),
                    b(e)),
                  r.a.secureEasy.get("analytics") &&
                    (r.a.secureEasy.remove("analytics"),
                    d.a.sendOrder({
                      id: f,
                      platform: o.order.platform,
                      method: o.order.deliveryMethod,
                      price:
                        r.a.coinsInfo[o.order.platform].pricePerCurrencyMap.EUR,
                      amount: o.order.coinCount,
                    })),
                  a();
              })
              .fail(function () {
                null !== t && t.prop("disabled", !1).removeClass("is-disabled"),
                  w("".concat(i.c[r.a.locale].orderCreationError)),
                  a();
              });
        });
      }
      function A(e) {
        var t =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          a =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : null;
        return new Promise(function (o) {
          var n = {
            url: "".concat(urlForOrder, "/").concat(f),
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Token ".concat(
                r.a.secure.get("_secure_meta_token")
              ),
            },
            data: JSON.stringify({
              platform: r.a.calculator.getPlatform(),
              deliveryMethod: r.a.calculator.getMethod(),
              currency: r.a.currencyName,
              coinCount: Number(r.a.calculator.getCoins()),
              client_id: r.a.clientID,
            }),
          };
          null !== a && a.prop("disabled", !0).addClass("is-disabled"),
            $.ajax(n)
              .done(function (t) {
                null !== a && a.prop("disabled", !1).removeClass("is-disabled"),
                  r.a.calculator.setPlatform(t.platform),
                  r.a.calculator.setMethod(t.deliveryMethod),
                  r.a.calculator.setCoins(t.coinCount),
                  (p = !0),
                  e &&
                    e.length &&
                    ($('[data-id="method"]')
                      .find(".site__tab-value")
                      .html(
                        ""
                          .concat(
                            _(r.a.calculator.getMethod()),
                            '<div class="okay"><svg><use xlink:href="'
                          )
                          .concat(
                            window.location.origin,
                            '/images/sprites.svg#okay"></use></svg></div>'
                          )
                      ),
                    $('[data-id="amount"]')
                      .find(".site__tab-value")
                      .html(
                        ""
                          .concat(
                            r.a.numberWithCommasForArabic(
                              r.a.calculator.getCoins()
                            ),
                            " "
                          )
                          .concat(i.c[r.a.locale].coinsFor, " <nobr>")
                          .concat(r.a.currency, " ")
                          .concat(
                            r.a.numberWithCommasForArabic(
                              r.a.calculator.getAmount()
                            ),
                            '</nobr><div class="okay"><svg><use xlink:href="'
                          )
                          .concat(
                            window.location.origin,
                            '/images/sprites.svg#okay"></use></svg></div>'
                          )
                      ),
                    $('[data-id="payment-method"]')
                      .find(".payment-method__total-value")
                      .html(
                        ""
                          .concat(r.a.currency, " ")
                          .concat(
                            r.a.numberWithCommasForArabic(
                              r.a.calculator.getAmount()
                            )
                          )
                      ),
                    b(e)),
                  o();
              })
              .fail(function () {
                null !== a && a.prop("disabled", !1).removeClass("is-disabled"),
                  $(".payment-method__method-wrapper").addClass("is-disabled"),
                  t && w("".concat(i.c[r.a.locale].orderUpdateError)),
                  k(),
                  o();
              });
        });
      }
      function T() {
        var e = $("#costValue"),
          t = $("#costValueOld"),
          a = $(".payment-method__total-coupon");
        e.html(
          ""
            .concat(r.a.currency, " ")
            .concat(
              r.a.numberWithCommasForArabic(Number(r.a.calculator.getAmount()))
            )
        ),
          t.slideUp(200),
          a.html(s.a.promoCodeBtn),
          (g = !1);
        var o = $(".js-payment-method-form-coupon"),
          n = {
            url: "".concat(window.url).concat(o.attr("action")),
            method: o.attr("method"),
            headers: {
              "Content-Type": "application/json",
              Authorization: "Token ".concat(
                r.a.secure.get("_secure_meta_token")
              ),
            },
            data: JSON.stringify({
              platform: r.a.calculator.getPlatform(),
              deliveryMethod: r.a.calculator.getMethod(),
              coinCount: Number(r.a.calculator.getCoins()),
              currency: r.a.currencyName,
            }),
          };
        $.ajax(n), c.a.closeCoupon();
      }
      function P(e) {
        var t = $("#costValue"),
          a = $("#costValueOld"),
          o = e.closest("form"),
          n = "".concat(window.url).concat(o.attr("action")),
          l = o.attr("method"),
          d = o.find("input").val(),
          u = Number(r.a.calculator.getAmountFull()),
          m = $(".payment-method__total-coupon"),
          p = {
            url: n,
            method: l,
            headers: {
              "Content-Type": "application/json",
              Authorization: "Token ".concat(
                r.a.secure.get("_secure_meta_token")
              ),
            },
            data: JSON.stringify({
              platform: r.a.calculator.getPlatform(),
              deliveryMethod: r.a.calculator.getMethod(),
              coinCount: Number(r.a.calculator.getCoins()),
              currency: r.a.currencyName,
              promoCode: d,
            }),
          };
        o.valid() || !o.find(".has-error").length
          ? ($('[type="submit"]').prop("disabled", !0).addClass("is-disabled"),
            $.ajax(p)
              .done(function (e) {
                (g = !0),
                  $('[type="submit"]')
                    .prop("disabled", !1)
                    .removeClass("is-disabled"),
                  o.find(".js-form-error").addClass("is-hidden");
                for (
                  var n = !1,
                    l = "".concat(i.c[r.a.locale].invalidPromo),
                    p = 0;
                  p < e.labels.length;
                  p++
                ) {
                  var f = e.labels[p];
                  "promo_not_found" === f.toLowerCase()
                    ? (n = !0)
                    : "promo_out_of_date" === f.toLowerCase()
                    ? ((n = !0), (l = "".concat(i.c[r.a.locale].couponExpired)))
                    : "limit_exceeded" === f.toLowerCase()
                    ? ((n = !0), (l = "".concat(i.c[r.a.locale].couponLimit)))
                    : "condition_not_met" === f.toLowerCase() &&
                      ((n = !0),
                      (l = "".concat(i.c[r.a.locale].couponCondition)));
                }
                var h = {
                  promoCode: d,
                  price: u,
                  newValue: e.overallPrice,
                  discount: 100 - 100 * (e.overallPrice / u).toFixed(2),
                };
                (r.a.promoCodeDiscount = h.discount),
                  n
                    ? o.find(".js-form-error").text(l).removeClass("is-hidden")
                    : (t
                        .html(
                          ""
                            .concat(r.a.currency, " ")
                            .concat(
                              r.a.numberWithCommasForArabic(e.overallPrice)
                            )
                        )
                        .attr("overallPrice", e.overallPrice),
                      a.html(
                        ""
                          .concat(r.a.currencyName, " ")
                          .concat(r.a.numberWithCommasForArabic(u))
                      ),
                      a.slideDown(200),
                      m.html(s.a.promoCodeTemplate(h)),
                      c.a.closeCoupon(),
                      r.a.calculator.setCoupon(e.overallPrice),
                      (r.a.coupon = d));
              })
              .fail(function () {
                $('[type="submit"]')
                  .prop("disabled", !1)
                  .removeClass("is-disabled"),
                  o
                    .find(".js-form-error")
                    .text("".concat(i.c[r.a.locale].invalidPromo))
                    .removeClass("is-hidden");
              }))
          : o.find("input").length && o.find("input").trigger("update");
      }
      function S(t) {
        e(function () {
          location.href = t;
        });
      }
      function O(e, t, a, o) {
        $(".js-select-page").filter(".is-correct").length <= 3 &&
          ("method" === t &&
            e
              .find(".site__tab-value")
              .html(
                ""
                  .concat(_(a), '<div class="okay"><svg><use xlink:href="')
                  .concat(
                    window.location.origin,
                    '/images/sprites.svg#okay"></use></svg></div>'
                  )
              ),
          b(e)),
          !p && f && f.toString().length && (p = !0),
          $(".js-select-page").filter(".is-correct").length >= 3 &&
            (p ? A(e, !0, o) : (k(e, o), (p = !0)),
            d.a.sendOrder({
              id: f,
              platform: r.a.calculator.getPlatform(),
              method: r.a.calculator.getMethod(),
              price:
                r.a.coinsInfo[r.a.calculator.getPlatform()].pricePerCurrencyMap
                  .EUR,
              amount: r.a.calculator.getCoins(),
            }));
      }
      t.a = {
        init: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "platform",
            t = arguments.length > 1 ? arguments[1] : void 0;
          Object(m.b)(document.querySelector(".order"));
          var a = $(".site__page"),
            o = $(".payment-method__coupon-content");
          if (
            ((f = r.a.secureEasy.get("user_order_id") || ""),
            u.a.init(),
            u.a.calculatorEvents($(".order")),
            !(location.search.indexOf("token") > -1))
          ) {
            if (
              ((window.onpageshow = function (e) {
                if (e.persisted) {
                  var t = window.location.hash;
                  "#payment-method" === t &&
                    (T(),
                    k().then(function () {
                      E(t.replace("#", ""));
                    }));
                }
              }),
              "ps4" === e ||
                "ps5" === e ||
                "xbox_one" === e ||
                "xbox_series_x" === e)
            ) {
              switch (
                (r.a.calculator.setPlatform(
                  e.indexOf("ps") >= 0 ? "ps4" : "xbox"
                ),
                e)
              ) {
                case "xbox_one":
                  e = "xbox";
                  break;
                case "xbox_series_x":
                  e = "xboxs";
              }
              (r.a.platformName = e), u.a.setAllFields(e), (e = "amount");
            } else u.a.setAllFields();
            "payment-fail" !== e &&
              "payment-method" !== e &&
              "delivery" !== e &&
              "deliveryManual" !== e &&
              "delivery-progress" !== e &&
              r.a.calculator.getMethod() &&
              f &&
              !t &&
              (r.a.secureEasy.remove("user_order_id"), (f = "")),
              ("method" !== e && "amount" !== e) ||
                (r.a.calculator.setMethod("Easy"),
                r.a.secureEasy.set("user_order", r.a.calculator.getFullInfo())),
              "payment-fail" === e && r.a.secureEasy.remove("is-pay"),
              ("payment-fail" === e || "payment-method" === e) &&
              r.a.calculator.getMethod() &&
              f
                ? "payment-fail" === e
                  ? k().then(function () {
                      E(e);
                    })
                  : A(void 0, !1).then(function () {
                      E(e);
                    })
                : ("delivery" !== e &&
                    "deliveryManual" !== e &&
                    "delivery-progress" !== e) ||
                  !f
                ? t && !f
                  ? E((e = "platform" !== e ? "amount" : "platform"))
                  : "payment-method" === e && "" === f && "payment-fail" !== e
                  ? k().then(function () {
                      E(e);
                    })
                  : E(e)
                : barba.go(
                    "/"
                      .concat(
                        "en" !== r.a.locale ? "".concat(r.a.locale, "/") : "",
                        "profile/?id="
                      )
                      .concat(f, "#orders"),
                    "deliveryOrder"
                  ),
              a.find("form").each(function (e, t) {
                Object(n.a)($(t));
              }),
              o.addClass("hidden"),
              r.a.$body
                .on("click.pages", "#couponApply", function (e) {
                  e.preventDefault(), P($(e.currentTarget));
                })
                .on(
                  "submit.pages",
                  ".js-payment-method-form-coupon",
                  function (e) {
                    e.preventDefault();
                  }
                )
                .on("click.pages", "#closeCoupon", T)
                .on("click.pages", ".js-select-page", function (e) {
                  var t = $(e.currentTarget),
                    o = $(e.currentTarget).data("id");
                  if (!t.hasClass("is-active")) {
                    var n = a.filter(".is-active");
                    if (
                      ("amount" === o &&
                        (r.a.platformName
                          ? barba.history.add(
                              "/"
                                .concat(
                                  "en" !== r.a.locale
                                    ? "".concat(r.a.locale, "/")
                                    : "",
                                  "order/"
                                )
                                .concat(r.a.platformName, "/"),
                              "changeStep"
                            )
                          : barba.history.add(
                              "/".concat(
                                "en" !== r.a.locale
                                  ? "".concat(r.a.locale, "/")
                                  : "",
                                "order/#amount"
                              ),
                              "changeStep"
                            )),
                      "payment-method" === n.data("id"))
                    ) {
                      var s = r.a.calculator.getCoins(),
                        l = r.a.calculator.getAmount();
                      $('.site__page[data-id="amount"]')
                        .find(".site__tab-value")
                        .html(
                          ""
                            .concat(r.a.numberWithCommasForArabic(s), " ")
                            .concat(i.c[r.a.locale].coinsFor, " <nobr>")
                            .concat(r.a.currency, " ")
                            .concat(
                              r.a.numberWithCommasForArabic(l),
                              '</nobr><div class="okay"><svg><use xlink:href="'
                            )
                            .concat(
                              window.location.origin,
                              '/images/sprites.svg#okay"></use></svg></div>'
                            )
                        ),
                        c.a.closeCoupon();
                    }
                    n.find(".site__content").slideUp(function () {
                      n.removeClass("is-active"),
                        "payment-method" === n.data("id") &&
                          $(".payment-method__total-coupon-addon").length > 0 &&
                          T(),
                        y(t, o);
                    });
                  }
                })
                .on("click.pages", ".js-platform-link", function (e) {
                  e.preventDefault(),
                    e.stopPropagation(),
                    r.a.secureEasy.set("user_order_id", f),
                    $(e.currentTarget)
                      .closest(".site__content")
                      .slideUp(function () {
                        $(e.currentTarget)
                          .closest(".site__page")
                          .removeClass("is-active"),
                          barba.go(
                            $(e.currentTarget).attr("href"),
                            "localeChange"
                          );
                      });
                })
                .on("click.pages", ".js-select-platform", function (e) {
                  e.preventDefault(), e.stopPropagation();
                  var t = $(e.currentTarget).closest(".platform");
                  if (
                    (v(t.find(".platform__grid")),
                    0 !== t.find(":checked").length)
                  ) {
                    d.a.choosePlatform();
                    var a = $(e.currentTarget).closest(".site__page"),
                      o = t.find(":checked").data("id"),
                      n = t.find(":checked").data("name");
                    r.a.secureEasy.set("user_order_id", f),
                      r.a.calculator.setPlatform(o),
                      a.attr("data-platform", o),
                      a
                        .find(".site__tab-value")
                        .html(
                          ""
                            .concat(n, '<svg><use xlink:href="')
                            .concat(
                              window.location.origin,
                              "/images/sprites.svg#platform-"
                            )
                            .concat(
                              o,
                              '"></use></svg><div class="okay"><svg><use xlink:href="'
                            )
                            .concat(
                              window.location.origin,
                              '/images/sprites.svg#okay"></use></svg></div>'
                            )
                        ),
                      r.a.secureEasy.set(
                        "user_order",
                        r.a.calculator.getFullInfo()
                      ),
                      O(a);
                  } else h(t.find(".platform__grid"));
                })
                .on("click.pages", ".js-select-amount", function (e) {
                  r.a.fixInputMin($(".js-calculator-coins")),
                    r.a.fixInputMin($(".js-calculator-amount"));
                  var t = $(e.currentTarget).closest(".site__page"),
                    a = r.a.calculator.getCoins(),
                    o = r.a.calculator.getAmount();
                  t
                    .find(".site__tab-value")
                    .html(
                      ""
                        .concat(r.a.numberWithCommasForArabic(a), " ")
                        .concat(i.c[r.a.locale].coinsFor, " <nobr>")
                        .concat(r.a.currency, " ")
                        .concat(
                          r.a.numberWithCommasForArabic(o),
                          '</nobr><div class="okay"><svg><use xlink:href="'
                        )
                        .concat(
                          window.location.origin,
                          '/images/sprites.svg#okay"></use></svg></div>'
                        )
                    ),
                    r.a.secureEasy.set(
                      "user_order",
                      r.a.calculator.getFullInfo()
                    ),
                    d.a.chooseCoinsAmount(),
                    O(t);
                })
                .on("click.pages", ".js-select-method", function (e) {
                  var t = r.a.calculator.getMethod(),
                    a = $(e.currentTarget).closest(".method"),
                    o = a.find(":checked");
                  if ((v(a.find(".method__grid")), o.length)) {
                    if (!r.a.secure.get("_secure_meta_user"))
                      return (
                        l.a.open("sign-in"),
                        r.a.setCookie("click_buy", !0),
                        $('.js-tabs-btn[data-id="sign-up"]').trigger("click"),
                        void r.a.secureEasy.set(
                          "user_order",
                          r.a.calculator.getFullInfo()
                        )
                      );
                    d.a.chooseDeliveryMethod();
                    var n = $(e.currentTarget).closest(".site__page");
                    r.a.secureEasy.set(
                      "user_order",
                      r.a.calculator.getFullInfo()
                    ),
                      O(n, "method", t, $(e.currentTarget));
                  } else h(a.find(".method__grid"));
                })
                .on("click.pages", ".js-select-payment", function () {
                  var e = $(".js-payment-method-input:checked").val();
                  void 0 !== e &&
                    C(e)
                      .done(function (t) {
                        r.a.secureEasy.set(
                          "user_order",
                          r.a.calculator.getFullInfo()
                        ),
                          r.a.secureEasy.set("user_order_id", f),
                          r.a.secureEasy.set("is-pay", {
                            coupon: r.a.coupon,
                            discount: r.a.promoCodeDiscount
                              ? r.a.promoCodeDiscount
                              : r.a.calculator.discount,
                            paymentName: e,
                          }),
                          d.a.choosePaymentMethod(),
                          t.acquiringLink && S(t.acquiringLink);
                      })
                      .fail(function (e) {
                        w(e.statusText);
                      });
                });
          }
        },
        destroy: function () {
          var e =
            !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          r.a.$body.off("click.pages"),
            r.a.$body.off("submit.pages"),
            u.a.destroy(),
            !1,
            $(".js-payment-method-form-coupon").removeData("order"),
            e &&
              (r.a.secureEasy.remove("user_order"),
              r.a.secureEasy.remove("user_order_id"),
              (f = ""),
              (p = !1),
              (g = !1),
              { email: r.a.secure.get("_secure_meta_user").email });
        },
        openNextPage: b,
        changeCurrency: function () {
          var e = window.location.hash;
          "#method" === e &&
            ($('[data-id="method"]').find(".method__card-price").html(""),
            $('[data-id="method"]')
              .find('[data-method="Manual"] .method__card-price')
              .html(
                "+"
                  .concat(r.a.currency, " ")
                  .concat(
                    r.a.numberWithCommasForArabic(
                      r.a.calculator.getManualPrice()
                    )
                  )
              ),
            $('[data-id="amount"]')
              .find(".site__tab-value")
              .html(
                ""
                  .concat(
                    r.a.numberWithCommasForArabic(r.a.calculator.getCoins()),
                    " "
                  )
                  .concat(i.c[r.a.locale].coinsFor, " <nobr>")
                  .concat(r.a.currency, " ")
                  .concat(
                    r.a.numberWithCommasForArabic(r.a.calculator.getAmount()),
                    '</nobr><div class="okay"><svg><use xlink:href="'
                  )
                  .concat(
                    window.location.origin,
                    '/images/sprites.svg#okay"></use></svg></div>'
                  )
              )),
            "#payment-method" === e &&
              A($('[data-id="method"]')).then(function () {
                g && P($('[data-id="payment-method"]').find("#couponApply"));
              });
        },
        createOrder: k,
        updateOrder: A,
      };
    }.call(this, a(487).setImmediate));
  },
  38: function (e, t, a) {
    "use strict";
    a.d(t, "a", function () {
      return d;
    }),
      a.d(t, "b", function () {
        return u;
      });
    var o = a(22),
      r = a.n(o),
      n = a(23),
      i = a.n(n),
      s = a(0),
      c = a(13),
      l = a(3);
    var d = (function () {
      function e(t) {
        r()(this, e),
          (this.$input = t),
          (this.$label = t.closest(".input__label")),
          (this.$group = t.closest(".input__group")),
          (this.$labelPlaceholder = this.$label.find(
            ".input__label-placeholder"
          )),
          (this.$labelError = this.$group.find(".error")),
          (this.$viewBtn = this.$group.find(".js-password-view")),
          (this.codesCounter = 0),
          (this.setLabelWidthStyleProperty =
            this.setLabelWidthStyleProperty.bind(this)),
          (this.setLabelErrorWidthStyleProperty =
            this.setLabelErrorWidthStyleProperty.bind(this)),
          (this.viewPassword = this.viewPassword.bind(this)),
          this.init();
      }
      return (
        i()(e, [
          {
            key: "init",
            value: function () {
              var e = this;
              this.render(),
                this.setLabelWidthStyleProperty(),
                window.addEventListener(
                  "resize",
                  this.setLabelWidthStyleProperty
                ),
                this.$input.on("mouseenter.inputs", function (e) {
                  $(e.currentTarget).addClass("has-hovered");
                }),
                this.$input.on("mouseleave.inputs", function (e) {
                  $(e.currentTarget).removeClass("has-hovered");
                }),
                s.a.$body.on("click.inputs", ".input__code-btn", function (e) {
                  $(e.currentTarget)
                    .closest(".input__label")
                    .find(".input__input")
                    .removeClass("is-disabled")
                    .attr("disabled", !1),
                    $(e.currentTarget).closest(".input__code").remove();
                }),
                this.$input.on("input.inputs", function (e) {
                  e.target.value.length < e.target.minLength
                    ? $(e.target)
                        .parent()
                        .next(".input__least")
                        .addClass("input__least--error")
                        .removeClass("input__least--success")
                    : $(e.target)
                        .parent()
                        .next(".input__least")
                        .addClass("input__least--success")
                        .removeClass("input__least--error");
                }),
                this.$input.on("update.inputs", function (t) {
                  e.setLabelWidthStyleProperty(),
                    setTimeout(function () {
                      e.setLabelErrorWidthStyleProperty(t.target);
                    }, 300);
                }),
                this.$input
                  .on("focus.inputs", function (e) {
                    $(e.target)
                      .closest(".input__group")
                      .addClass("has-focused");
                  })
                  .on("blur.inputs", function (t) {
                    $(t.target)
                      .closest(".input__group")
                      .removeClass("has-focused"),
                      e.setLabelErrorWidthStyleProperty(t.target);
                  }),
                this.$input.on("input.inputs", function (t) {
                  if ($(t.target).closest(".input__label--codes").length) {
                    var a = t.target,
                      o = $(a).siblings(".input__input--masked");
                    if (null === a.value.match(/^[0-9]+$/))
                      return (
                        (a.value = a.value.slice(0, -1)),
                        a.value.length < 1
                          ? (o
                              .addClass("is-placeholder")
                              .html($(a).attr("placeholder")),
                            void $(a).attr("required", !1))
                          : void 0
                      );
                    if (
                      ($(a).attr("required") && $(a).attr("required", !1),
                      !(a.value.length > 0))
                    )
                      return (
                        o
                          .addClass("is-placeholder")
                          .html($(a).attr("placeholder")),
                        void $(a).attr("required", !0)
                      );
                    if ((o.removeClass("is-placeholder"), 8 === a.value.length))
                      return (
                        $(a).closest(".input__group").removeClass("has-error"),
                        $(a).siblings(".error").remove(),
                        $(a)
                          .siblings(".js-input-codes")
                          .append(
                            c.a.inputCode(
                              a.value,
                              s.a.numberWithCommas4(a.value)
                            )
                          ),
                        $(a).trigger("focus"),
                        (a.value = ""),
                        o
                          .html($(a).attr("placeholder"))
                          .addClass("is-placeholder"),
                        void (e.codesCounter += 1)
                      );
                    $(a).closest(".input__label--codes").data("length") <=
                      e.codesCounter &&
                      ($(a).addClass("is-disabled").attr("disabled", !0),
                      (a.value = "")),
                      o.html(s.a.numberWithCommas4(a.value));
                  }
                }),
                this.$viewBtn.length &&
                  this.$viewBtn.on("click.inputs", function (t) {
                    e.viewPassword($(t.currentTarget));
                  });
            },
          },
          {
            key: "destroy",
            value: function () {
              s.a.$body.off(".inputs"),
                this.$input.off(".inputs"),
                $("#amountAmount").off(".inputs"),
                $("#amountCoins").off(".inputs"),
                this.$label
                  .find(".input__label-placeholder--reference, .input__borders")
                  .remove();
            },
          },
          {
            key: "setLabelWidthStyleProperty",
            value: function () {
              if (this.$label) {
                var e = this.$labelPlaceholder.width();
                this.$group.css("--label-active-width", "".concat(e, "px"));
              } else this.$group.css("--label-active-width", "0px");
            },
          },
          {
            key: "setLabelErrorWidthStyleProperty",
            value: function (e) {
              var t = $(e).closest(".input__label"),
                a = t.closest(".input__group");
              if (t.find(".error").length) {
                var o = t.find(".error").width();
                o < 1 && (o = -16),
                  a.css("--label-error-width", "".concat(o, "px"));
              } else a.css("--label-error-width", "-16px");
            },
          },
          {
            key: "render",
            value: function () {
              return this.$label.append(
                '\n\t\t\t<span class="input__label-placeholder input__label-placeholder--reference">'.concat(
                  this.$labelPlaceholder.text(),
                  '</span>\n\t\t\t<div class="input__borders">\n\t\t\t\t<div class="input__border input__border-left"></div>\n\t\t\t\t<div class="input__border input__border-middle">\n\t\t\t\t\t<div class="input-top__borders">\n\t\t\t\t\t\t<div class="input__border input__border-start"></div>\n\t\t\t\t\t\t<div class="input__border input__border-end"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="input-bottom__borders">\n\t\t\t\t\t\t<div class="input__border input__border-start"></div>\n\t\t\t\t\t\t<div class="input__border input__border-end"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="input__border input__border-right"></div>\n\t\t\t</div>\n\t\t'
                )
              );
            },
          },
          {
            key: "viewPassword",
            value: function (e) {
              var t = e.closest("fieldset").find("input");
              "password" === t.attr("type")
                ? (t.attr("type", "text"),
                  e
                    .addClass("is-active")
                    .attr("title", l.c[s.a.locale].hidePassword))
                : (t.attr("type", "password"),
                  e
                    .removeClass("is-active")
                    .attr("title", l.c[s.a.locale].seePassword));
            },
          },
        ]),
        e
      );
    })();
    function u() {
      var e = $(".js-calculator-amount");
      if (e) {
        var t = (function (e) {
          var t = document.createElement("div");
          t.classList.add("fakeInput"),
            (t.textContent = e),
            document.body.appendChild(t);
          var a = t.getBoundingClientRect().width;
          return (
            setTimeout(function () {
              t.parentNode.removeChild(t);
            }, 300),
            a
          );
        })(e.val());
        e.closest(".input__group").css(
          "--input-text-width",
          "".concat(t, "px")
        );
      } else e.closest(".input__group").css("--input-text-width", "0px");
    }
  },
  486: function (e, t, a) {
    var o = {
      "./af": 148,
      "./af.js": 148,
      "./ar": 149,
      "./ar-dz": 150,
      "./ar-dz.js": 150,
      "./ar-kw": 151,
      "./ar-kw.js": 151,
      "./ar-ly": 152,
      "./ar-ly.js": 152,
      "./ar-ma": 153,
      "./ar-ma.js": 153,
      "./ar-sa": 154,
      "./ar-sa.js": 154,
      "./ar-tn": 155,
      "./ar-tn.js": 155,
      "./ar.js": 149,
      "./az": 156,
      "./az.js": 156,
      "./be": 157,
      "./be.js": 157,
      "./bg": 158,
      "./bg.js": 158,
      "./bm": 159,
      "./bm.js": 159,
      "./bn": 160,
      "./bn-bd": 161,
      "./bn-bd.js": 161,
      "./bn.js": 160,
      "./bo": 162,
      "./bo.js": 162,
      "./br": 163,
      "./br.js": 163,
      "./bs": 164,
      "./bs.js": 164,
      "./ca": 165,
      "./ca.js": 165,
      "./cs": 166,
      "./cs.js": 166,
      "./cv": 167,
      "./cv.js": 167,
      "./cy": 168,
      "./cy.js": 168,
      "./da": 169,
      "./da.js": 169,
      "./de": 170,
      "./de-at": 171,
      "./de-at.js": 171,
      "./de-ch": 172,
      "./de-ch.js": 172,
      "./de.js": 170,
      "./dv": 173,
      "./dv.js": 173,
      "./el": 174,
      "./el.js": 174,
      "./en-au": 175,
      "./en-au.js": 175,
      "./en-ca": 176,
      "./en-ca.js": 176,
      "./en-gb": 177,
      "./en-gb.js": 177,
      "./en-ie": 178,
      "./en-ie.js": 178,
      "./en-il": 179,
      "./en-il.js": 179,
      "./en-in": 180,
      "./en-in.js": 180,
      "./en-nz": 181,
      "./en-nz.js": 181,
      "./en-sg": 182,
      "./en-sg.js": 182,
      "./eo": 183,
      "./eo.js": 183,
      "./es": 184,
      "./es-do": 185,
      "./es-do.js": 185,
      "./es-mx": 186,
      "./es-mx.js": 186,
      "./es-us": 187,
      "./es-us.js": 187,
      "./es.js": 184,
      "./et": 188,
      "./et.js": 188,
      "./eu": 189,
      "./eu.js": 189,
      "./fa": 190,
      "./fa.js": 190,
      "./fi": 191,
      "./fi.js": 191,
      "./fil": 192,
      "./fil.js": 192,
      "./fo": 193,
      "./fo.js": 193,
      "./fr": 194,
      "./fr-ca": 195,
      "./fr-ca.js": 195,
      "./fr-ch": 196,
      "./fr-ch.js": 196,
      "./fr.js": 194,
      "./fy": 197,
      "./fy.js": 197,
      "./ga": 198,
      "./ga.js": 198,
      "./gd": 199,
      "./gd.js": 199,
      "./gl": 200,
      "./gl.js": 200,
      "./gom-deva": 201,
      "./gom-deva.js": 201,
      "./gom-latn": 202,
      "./gom-latn.js": 202,
      "./gu": 203,
      "./gu.js": 203,
      "./he": 204,
      "./he.js": 204,
      "./hi": 205,
      "./hi.js": 205,
      "./hr": 206,
      "./hr.js": 206,
      "./hu": 207,
      "./hu.js": 207,
      "./hy-am": 208,
      "./hy-am.js": 208,
      "./id": 209,
      "./id.js": 209,
      "./is": 210,
      "./is.js": 210,
      "./it": 211,
      "./it-ch": 212,
      "./it-ch.js": 212,
      "./it.js": 211,
      "./ja": 213,
      "./ja.js": 213,
      "./jv": 214,
      "./jv.js": 214,
      "./ka": 215,
      "./ka.js": 215,
      "./kk": 216,
      "./kk.js": 216,
      "./km": 217,
      "./km.js": 217,
      "./kn": 218,
      "./kn.js": 218,
      "./ko": 219,
      "./ko.js": 219,
      "./ku": 220,
      "./ku.js": 220,
      "./ky": 221,
      "./ky.js": 221,
      "./lb": 222,
      "./lb.js": 222,
      "./lo": 223,
      "./lo.js": 223,
      "./lt": 224,
      "./lt.js": 224,
      "./lv": 225,
      "./lv.js": 225,
      "./me": 226,
      "./me.js": 226,
      "./mi": 227,
      "./mi.js": 227,
      "./mk": 228,
      "./mk.js": 228,
      "./ml": 229,
      "./ml.js": 229,
      "./mn": 230,
      "./mn.js": 230,
      "./mr": 231,
      "./mr.js": 231,
      "./ms": 232,
      "./ms-my": 233,
      "./ms-my.js": 233,
      "./ms.js": 232,
      "./mt": 234,
      "./mt.js": 234,
      "./my": 235,
      "./my.js": 235,
      "./nb": 236,
      "./nb.js": 236,
      "./ne": 237,
      "./ne.js": 237,
      "./nl": 238,
      "./nl-be": 239,
      "./nl-be.js": 239,
      "./nl.js": 238,
      "./nn": 240,
      "./nn.js": 240,
      "./oc-lnc": 241,
      "./oc-lnc.js": 241,
      "./pa-in": 242,
      "./pa-in.js": 242,
      "./pl": 243,
      "./pl.js": 243,
      "./pt": 244,
      "./pt-br": 245,
      "./pt-br.js": 245,
      "./pt.js": 244,
      "./ro": 246,
      "./ro.js": 246,
      "./ru": 247,
      "./ru.js": 247,
      "./sd": 248,
      "./sd.js": 248,
      "./se": 249,
      "./se.js": 249,
      "./si": 250,
      "./si.js": 250,
      "./sk": 251,
      "./sk.js": 251,
      "./sl": 252,
      "./sl.js": 252,
      "./sq": 253,
      "./sq.js": 253,
      "./sr": 254,
      "./sr-cyrl": 255,
      "./sr-cyrl.js": 255,
      "./sr.js": 254,
      "./ss": 256,
      "./ss.js": 256,
      "./sv": 257,
      "./sv.js": 257,
      "./sw": 258,
      "./sw.js": 258,
      "./ta": 259,
      "./ta.js": 259,
      "./te": 260,
      "./te.js": 260,
      "./tet": 261,
      "./tet.js": 261,
      "./tg": 262,
      "./tg.js": 262,
      "./th": 263,
      "./th.js": 263,
      "./tk": 264,
      "./tk.js": 264,
      "./tl-ph": 265,
      "./tl-ph.js": 265,
      "./tlh": 266,
      "./tlh.js": 266,
      "./tr": 267,
      "./tr.js": 267,
      "./tzl": 268,
      "./tzl.js": 268,
      "./tzm": 269,
      "./tzm-latn": 270,
      "./tzm-latn.js": 270,
      "./tzm.js": 269,
      "./ug-cn": 271,
      "./ug-cn.js": 271,
      "./uk": 272,
      "./uk.js": 272,
      "./ur": 273,
      "./ur.js": 273,
      "./uz": 274,
      "./uz-latn": 275,
      "./uz-latn.js": 275,
      "./uz.js": 274,
      "./vi": 276,
      "./vi.js": 276,
      "./x-pseudo": 277,
      "./x-pseudo.js": 277,
      "./yo": 278,
      "./yo.js": 278,
      "./zh-cn": 279,
      "./zh-cn.js": 279,
      "./zh-hk": 280,
      "./zh-hk.js": 280,
      "./zh-mo": 281,
      "./zh-mo.js": 281,
      "./zh-tw": 282,
      "./zh-tw.js": 282,
    };
    function r(e) {
      var t = n(e);
      return a(t);
    }
    function n(e) {
      if (!a.o(o, e)) {
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = "MODULE_NOT_FOUND"), t);
      }
      return o[e];
    }
    (r.keys = function () {
      return Object.keys(o);
    }),
      (r.resolve = n),
      (e.exports = r),
      (r.id = 486);
  },
  49: function (e, t, a) {
    "use strict";
    a.d(t, "a", function () {
      return n;
    });
    a(22), a(23), a(283);
    var o = a(0),
      r = (a(13), a(3));
    function n(e) {
      $.extend(
        $.validator.messages,
        r.e[o.a.locale],
        $.validator.messages,
        window.LOCALES && window.LOCALES.errors
      );
      var t = function (e) {
        return $(e).closest(".input__label");
      };
      e.validate(
        $.extend(
          {
            debug: !0,
            highlight: function (a) {
              var o = t(a).closest(".input__group");
              e
                .find('[type="submit"]')
                .addClass("is-disabled")
                .attr("disabled", !0)
                .attr("title", "Please fill in details"),
                o.removeClass("has-success").addClass("has-error");
            },
            unhighlight: function (a) {
              var o = t(a).closest(".input__group");
              e
                .find('[type="submit"]')
                .removeClass("is-disabled")
                .attr("disabled", !1)
                .removeAttr("title"),
                o.removeClass("has-error").addClass("has-success");
            },
          },
          { rules: {} }
        )
      );
    }
  },
  490: function (e, t, a) {
    "use strict";
    a.r(t);
    a(291);
    var o = a(284),
      r = a.n(o),
      n = a(63),
      i = a.n(n),
      s = a(285),
      c = a.n(s),
      l = a(286),
      d = a.n(l),
      u = a(287),
      m = a.n(u),
      p = a(288),
      f = a.n(p),
      g = a(290);
    a(483);
    r()(),
      (window.$ = i.a),
      (window.jQuery = i.a),
      (window.barba = m.a),
      (window.SecureLS = d.a),
      (window.barbaRouter = f.a),
      (window.objectFitImages = c.a),
      (window.Scrollbar = g.a),
      a(484);
    var h = a(0),
      v = a(22),
      _ = a.n(v),
      y = a(23),
      b = a.n(y);
    function C(e, t) {
      var a =
        ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
      if (!a) {
        if (
          Array.isArray(e) ||
          (a = (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return w(e, t);
            var a = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === a && e.constructor && (a = e.constructor.name);
            if ("Map" === a || "Set" === a) return Array.from(e);
            if (
              "Arguments" === a ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
            )
              return w(e, t);
          })(e)) ||
          (t && e && "number" == typeof e.length)
        ) {
          a && (e = a);
          var o = 0,
            r = function () {};
          return {
            s: r,
            n: function () {
              return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] };
            },
            e: function (e) {
              throw e;
            },
            f: r,
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      var n,
        i = !0,
        s = !1;
      return {
        s: function () {
          a = a.call(e);
        },
        n: function () {
          var e = a.next();
          return (i = e.done), e;
        },
        e: function (e) {
          (s = !0), (n = e);
        },
        f: function () {
          try {
            i || null == a.return || a.return();
          } finally {
            if (s) throw n;
          }
        },
      };
    }
    function w(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var a = 0, o = new Array(t); a < t; a++) o[a] = e[a];
      return o;
    }
    var E = (function () {
        function e(t, a) {
          _()(this, e);
          var o = (this.options = $.extend({}, this.constructor.Defaults, a));
          (this.$container = t),
            (this.$headings = t.find(o.headingSelector)),
            (this.$contents = t.find(o.contentSelector)),
            this.enable();
        }
        return (
          b()(
            e,
            [
              {
                key: "destroy",
                value: function () {
                  this.disable();
                },
              },
              {
                key: "enable",
                value: function () {
                  var e = this.options;
                  h.a.$body.on(
                    "click.accordion",
                    e.headingSelector,
                    this.handleHeadingClick.bind(this)
                  );
                },
              },
              {
                key: "disable",
                value: function () {
                  h.a.$body.off(".accordion");
                },
              },
              {
                key: "handleHeadingClick",
                value: function (e) {
                  var t = $(e.target)
                      .closest(this.options.headingSelector)
                      .not(this.options.contentSelector),
                    a = t.attr("aria-controls");
                  this.getContent(a).length &&
                    ($(e.target).closest(this.options.ignoreSelector).parents(t)
                      .length ||
                      (this.toggle(a),
                      (("submit" ===
                        $(e.target).parent("button").attr("type") ||
                        $(e.target).is("button")) &&
                        ("submit" === $(e.target).attr("type") ||
                          $(e.target).parent("button").length)) ||
                        e.preventDefault()));
                },
              },
              {
                key: "getAllIds",
                value: function () {
                  var e = this.$headings.toArray().map(function (e) {
                      return $(e).attr("aria-controls");
                    }),
                    t = this.$contents.toArray().map(function (e) {
                      return $(e).attr("id");
                    });
                  return this.unique(e.concat(t));
                },
              },
              {
                key: "unique",
                value: function (e) {
                  var t,
                    a = [],
                    o = C(e);
                  try {
                    for (o.s(); !(t = o.n()).done; ) {
                      var r = t.value;
                      a.includes(r) || a.push(r);
                    }
                  } catch (e) {
                    o.e(e);
                  } finally {
                    o.f();
                  }
                  return a;
                },
              },
              {
                key: "getAllActiveIds",
                value: function () {
                  var e = this;
                  return this.getAllIds().filter(function (t) {
                    return e.isActive(t);
                  });
                },
              },
              {
                key: "getContent",
                value: function (e) {
                  return this.$container.find("#".concat(e));
                },
              },
              {
                key: "getHeading",
                value: function (e) {
                  return this.$container.find(
                    '[aria-controls="'.concat(e, '"]')
                  );
                },
              },
              {
                key: "isActive",
                value: function (e) {
                  var t = this.options,
                    a = this.getHeading(e),
                    o = this.getContent(e);
                  if (t.activeHeadingClassName && a.length)
                    return a.hasClass(t.activeHeadingClassName);
                  if (t.hiddenAttribute && o.length) {
                    var r = o.attr(t.hiddenAttribute);
                    return !r || "false" === r;
                  }
                  if (t.expandedAttribute && a.length) {
                    var n = a.attr(t.expandedAttribute);
                    return n && "true" === n;
                  }
                  return !1;
                },
              },
              {
                key: "open",
                value: function (e) {
                  var t = this;
                  if (void 0 === e)
                    this.options.onlyOne ||
                      $.each(this.getAllIds(), this.open.bind(this));
                  else {
                    if (this.options.onlyOne) {
                      var a = this.getAllActiveIds();
                      -1 === a.indexOf(e) &&
                        $.each(a, function (e, a) {
                          return t.animateContent(a, "out");
                        });
                    }
                    e && !this.isActive(e) && this.animateContent(e, "in");
                  }
                },
              },
              {
                key: "close",
                value: function (e) {
                  void 0 === e
                    ? this.options.atLeastOne ||
                      $.each(this.getAllIds(), this.close.bind(this))
                    : (!this.options.atLeastOne ||
                        this.getAllActiveIds().length > 1) &&
                      e &&
                      this.isActive(e) &&
                      this.animateContent(e, "out");
                },
              },
              {
                key: "toggle",
                value: function (e) {
                  this.isActive(e) ? this.close(e) : this.open(e);
                },
              },
              {
                key: "animateHeading",
                value: function (e, t) {
                  var a = this.getHeading(e),
                    o = this.options.activeHeadingClassName,
                    r = this.options.expandedAttribute;
                  "in" === t
                    ? a.addClass(o).attr(r, "false")
                    : a.removeClass(o).attr(r, "true");
                },
              },
              {
                key: "animateContent",
                value: function (e, t) {
                  var a = this,
                    o = this.getContent(e);
                  "in" === t
                    ? (o.addClass(this.options.activeContentClassName),
                      o
                        .parent()
                        .addClass(this.options.activeAccordionClassName),
                      this.animateHeading(e, t),
                      o.slideDown(400, function () {
                        o.attr(a.options.hiddenAttribute, !1),
                          h.a.scrollTo(
                            o.parent(),
                            500,
                            h.a.isMobile() ? -80 : -140
                          );
                      }),
                      o.find("input").length &&
                        o.find("input").trigger("update"))
                    : (o
                        .parent()
                        .removeClass(this.options.activeAccordionClassName),
                      o.slideUp(400, function () {
                        o.attr(a.options.hiddenAttribute, !0),
                          o.removeClass(a.options.activeContentClassName),
                          a.animateHeading(e, t);
                      }));
                },
              },
            ],
            [
              {
                key: "Defaults",
                get: function () {
                  return {
                    headingSelector: "[aria-controls]",
                    contentSelector: '[role="region"]',
                    activeAccordionClassName: "",
                    activeHeadingClassName: "is-active",
                    activeContentClassName: "is-active",
                    ignoreSelector: "label, input",
                    hiddenAttribute: "aria-hidden",
                    expandedAttribute: "aria-expanded",
                    onlyOne: !1,
                  };
                },
              },
            ]
          ),
          e
        );
      })(),
      k = a(38),
      A = a(9),
      T = a(12),
      P = a(35),
      S = h.a.$window.innerWidth(),
      O = "",
      I = "",
      N = "",
      x = "",
      j = "",
      L = "",
      R = "",
      F = "",
      D = "",
      M = "",
      U = "";
    function B(e) {
      U.fadeOut().addClass("hide"), e.removeClass("is-active");
    }
    function z(e) {
      U.fadeIn().removeClass("hide"), e.addClass("is-active");
    }
    function G() {
      h.a.saveScrollPosition(),
        h.a.$html
          .css({ top: "-".concat(h.b, "px") })
          .addClass("is-lock-scroll"),
        h.a.$body.css({
          paddingRight: "".concat(h.a.getScrollbarWidth(), "px"),
        }),
        h.a.$header.css({
          transition: "0s",
          right: "".concat(h.a.getScrollbarWidth(), "px"),
        }),
        O.addClass("is-active"),
        I.addClass("is-active"),
        h.a.$header.addClass("is-active");
    }
    function W() {
      O.hasClass("is-active") &&
        (h.a.$html.css({ top: "" }).removeClass("is-lock-scroll"),
        h.a.$body.css({ paddingRight: "" }),
        h.a.$header.css({ right: "" }),
        h.a.restoreScrollPosition(),
        O.removeClass("is-active"),
        I.removeClass("is-active"),
        h.a.$header.removeClass("is-active"),
        B(M),
        setTimeout(function () {
          h.a.$header.css({ transition: "" });
        }, 400));
    }
    function H(e) {
      $(e.currentTarget).hasClass("is-active") ? W() : G();
    }
    function K(e) {
      L.fadeOut().removeClass("is-active"), e.removeClass("is-active");
    }
    function q(e) {
      L.fadeIn().addClass("is-active"), e.addClass("is-active");
    }
    function V(e) {
      h.a.isMobile() ||
        (j.hasClass("is-active") ? K(j) : "mouseleave" !== e.type && q(j));
    }
    function Z(e) {
      $(e.currentTarget).hasClass("is-active")
        ? K($(e.currentTarget))
        : q($(e.currentTarget));
    }
    function Y() {
      $(".js-tabs-btn[data-id=sign-in]").trigger("click");
    }
    function J(e) {
      h.a.isMobile() ||
        (U.hasClass("hide") ? "mouseleave" !== e.type && z(M) : B(M));
    }
    function Q() {
      U.hasClass("hide") ? z(M) : B(M);
    }
    h.a.$window.on("resize", function () {
      h.a.debounce(function () {
        S !== h.a.$window.innerWidth() && (W(), (S = h.a.$window.innerWidth()));
      }, 300);
    });
    var X,
      ee = {
        init: function () {
          (h.a.$header = $(".header")),
            (O = $(".js-burger-btn")),
            (I = $(".js-burger-menu")),
            (N = $(".menu__link, .footer__link")),
            (x = $(".header__language")),
            (j = $(".header__language-btn")),
            (L = $(".header__dropdown")),
            (R = $(".js-signin-btn")),
            (F = $(".js-buy-header-hover")),
            (D = $(".js-buy-header-hover .menu__buy-btn")),
            (M = $(".js-buy")),
            (U = $(".js-buy-console-hover")),
            O.on("click.burger", H),
            x.on("mouseenter.header mouseleave.header", V),
            j.on("click.header", Z),
            R.on("click", Y),
            F.on("mouseenter.header mouseleave.header", J),
            D.on("click.header", Q),
            N.each(function (e, t) {
              window.location.pathname === $(t).attr("href") &&
                $(t).addClass("is-active");
            }),
            I.click(function (e) {
              "button" !== e.target.tagName.toLowerCase() && W(),
                x.off(".header"),
                N.removeClass("is-active"),
                $(".header__dropdown-link").off(".header"),
                $(".js-buy").off(".header");
            }),
            $(".header__currency")
              .on("mouseover.header", function (e) {
                $(e.currentTarget)
                  .find(".header__dropdown--curr")
                  .stop()
                  .fadeIn();
              })
              .on("mouseleave.header", function (e) {
                $(e.currentTarget)
                  .find(".header__dropdown--curr")
                  .stop()
                  .fadeOut();
              })
              .on("click.header", ".currency-select", function (e) {
                e.preventDefault(),
                  $(".currency-select").removeClass("curr-active"),
                  $(e.currentTarget).addClass("curr-active");
                var t = $(e.currentTarget).data("currency");
                h.a.calculator.changeCurrency(h.a.currencyList[t], t),
                  T.a.setAllFields(),
                  $(e.currentTarget)
                    .closest(".header__dropdown--curr")
                    .stop()
                    .fadeOut(),
                  window.location.pathname.indexOf("order") > -1 &&
                    P.a.changeCurrency(),
                  window.location.hash.indexOf("method") > -1 &&
                    0 !== h.a.calculator.getManualPrice() &&
                    h.a.deliveryBage(
                      $('[for="order-method-manual"] .method__card-price'),
                      $('[for="order-method-easy"] .method__card-recomend')
                    );
              }),
            $(".header__dropdown-link")
              .each(function (e, t) {
                var a =
                    "en" === $(t).data("locale")
                      ? ""
                      : "/".concat($(t).data("locale")),
                  o =
                    window.location.pathname.slice(3, 4).indexOf("/") >= 0
                      ? window.location.pathname.substring(3)
                      : window.location.pathname;
                $(t).attr("href", a + o);
              })
              .on("click.header", function (e) {
                e.preventDefault(),
                  e.stopPropagation(),
                  (h.a.locale = $(e.currentTarget).data("locale"));
                var t = window.location.hash;
                h.a.secureEasy.set(
                  "user_order_id",
                  $(".js-payment-method-form-coupon").data("order")
                ),
                  barba.go($(e.currentTarget).attr("href") + t, "localeChange"),
                  K(j);
              });
        },
        destroy: function () {
          W(),
            O.off(".burger"),
            j.off(".header"),
            x.off(".header"),
            N.removeClass("is-active"),
            $(".header__dropdown-link").off(".header"),
            $(".js-buy").off(".header"),
            $(".header__currency").off(".header");
        },
        openMenu: G,
        closeMenu: W,
      },
      te = a(34),
      ae = a(49),
      oe = a(13),
      re = a(3),
      ne = "",
      ie = "",
      se = "",
      ce = "",
      le = "",
      de = [];
    function ue() {
      var e = "#payment-method";
      A.a.buyMain(),
        location.pathname.indexOf("order") > -1
          ? P.a.createOrder($('[data-id="method"]')).then(function () {
              P.a.openNextPage($('[data-id="method"]'));
            })
          : barba.go(
              "/".concat(
                "en" === h.a.locale
                  ? "order".concat(e)
                  : "".concat(h.a.locale, "/order").concat(e)
              ),
              "barba calculator"
            );
    }
    function me(e) {
      var t = $(".header__notify:not(.header__notify--error)");
      t.find(".header__notify-text").html(oe.a.headerUserNotify(e)),
        t.removeClass("is-hidden").show(),
        clearTimeout(X),
        (X = setTimeout(function () {
          h.a.secure.set("showSuccessMesage", null), t.fadeOut();
        }, 5e3));
    }
    function pe(e, t) {
      if (!h.a.loginSetData) {
        h.a.loginSetData = !0;
        var a = {};
        if (
          (se.add(ce).addClass("is-hidden"),
          ne.addClass("is-hidden"),
          te.a.close(),
          e.money && (a.money = e.money),
          e.currency &&
            ((a.currency = e.currency), (h.a.currency = e.currency)),
          e.email && (a.email = e.email),
          ie.removeClass("is-hidden").html("").html(oe.a.headerUser(a)),
          (h.a.secure.get("_secure_meta_token") &&
            e.token === !h.a.secure.get("_secure_meta_token")) ||
            h.a.secure.set("_secure_meta_token", e.token),
          h.a.secure.get("_secure_meta_user") ||
            h.a.secure.set("_secure_meta_user", e),
          h.a.secure.get("location"))
        ) {
          var o = h.a.secure.get("location");
          (h.a.locale = h.a.secure.get("location_locale")),
            h.a.secure.set("location_locale", null),
            h.a.secure.set("location", null),
            o.indexOf("order") > -1
              ? barba.force(o)
              : (h.a.secure.set("needPlatform", !1),
                barba.go(o, "localeChange")),
            h.a.secure.set("showSuccessMesage", a);
        } else t && (google && google.accounts.id.storeCredential(a), me(a));
        h.a.secure.get("showSuccessMesage") && me(a);
      }
    }
    var fe = (function () {
      function e(t, a) {
        var o = this;
        _()(this, e),
          (this.ns = a),
          (this.$form = t),
          (this.$errorMessage = t.find(".js-form-error-message")),
          (this.$formBtn = t.find(".js-form-submit")),
          (this.$formBtnSpan = this.$formBtn.find(".btn__content")),
          (this.customValidators = []),
          (this.customResponseHandlers = []),
          (this.isLoading = !1),
          t
            .on("submit.".concat(this.ns), function (e) {
              e.preventDefault(), e.stopPropagation(), o.submit();
            })
            .on("change.".concat(this.ns), "#signUpCheck", function (e) {
              var t = $(e.currentTarget);
              o.$formBtn.toggleClass("is-disabled", !t.is(":checked"));
            });
      }
      return (
        b()(e, [
          {
            key: "destroy",
            value: function () {
              this.$formBtn.off(".".concat(this.ns)),
                this.$form.off(".".concat(this.ns)),
                h.a.$body.off(".".concat(this.ns));
            },
          },
          {
            key: "getValues",
            value: function () {
              var e = this.$form.find("input"),
                t = { user: { userLocale: h.a.locale, region: h.a.region } };
              return (
                e.each(function (e, a) {
                  t.user[$(a).attr("name")] = $(a).val();
                }),
                (le = t.user.email),
                h.a.secure.set("_secure_meta_password", t.user.password),
                JSON.stringify(t)
              );
            },
          },
          {
            key: "reset",
            value: function () {
              this.$form[0].reset(),
                this.$form
                  .find(".input__group")
                  .removeClass("has-success has-error"),
                this.$form
                  .find(".input__least")
                  .removeClass("input__least--success input__least--error"),
                this.enable();
            },
          },
          {
            key: "disable",
            value: function () {
              this.isLoading = !0;
              var e = this.$form;
              (this.submitBtnText = this.$formBtnSpan.text()),
                e
                  .find("input, select, textarea")
                  .prop("readonly", !0)
                  .addClass("readonly"),
                e
                  .find('button[type="submit"], input[type="submit"]')
                  .prop("disabled", !0),
                this.$formBtnSpan.text(re.c[h.a.locale].loading);
            },
          },
          {
            key: "enable",
            value: function () {
              this.isLoading = !1;
              var e = this.$form;
              e
                .find("input, select, textarea")
                .prop("readonly", !1)
                .removeClass("readonly"),
                e
                  .find('button[type="submit"], input[type="submit"]')
                  .prop("disabled", !1),
                this.$formBtnSpan.text(this.submitBtnText);
            },
          },
          {
            key: "submit",
            value: function () {
              var e = this.$form,
                t = this.getValues(),
                a = "".concat(window.url).concat(e.attr("action")),
                o = e.attr("method");
              e.valid() || !e.find(".has-error").length
                ? (this.disable(),
                  $.ajax({
                    url: a,
                    method: o,
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: "Token ".concat(
                        h.a.secure.get("_secure_meta_token")
                      ),
                    },
                    data: t,
                  })
                    .always(this.handleResponseComplete.bind(this))
                    .done(this.handleResponseSuccess.bind(this))
                    .fail(this.handleResponseFailure.bind(this, t)))
                : e.find("input").length && e.find("input").trigger("update");
            },
          },
          {
            key: "handleResponseComplete",
            value: function (e, t) {
              this.enable();
            },
          },
          {
            key: "handleResponseSuccess",
            value: function (e, t) {
              var a = this;
              if (
                (this.reset(),
                this.$form.find(".js-form-error").addClass("is-hidden"),
                "login" === this.$form.data("form")
                  ? (A.a.logIn(le), A.a.step2())
                  : (A.a.registration(), A.a.step1()),
                t.status || "success" === t)
              ) {
                var o = this.$form.find(".js-password-view"),
                  r = o.siblings("input");
                pe(e.user, !0),
                  this.$form.find("input").each(function (e, t) {
                    $(t).val(""),
                      $(t)
                        .closest(".input__group")
                        .removeClass("has-success has-active has-hovered");
                  }),
                  r.attr("type", "password"),
                  o
                    .removeClass("is-active")
                    .attr("title", "".concat(re.c[h.a.locale].seePassword)),
                  h.a.getCookie("click_buy") &&
                    (ue(), h.a.eraseCookie("click_buy"));
              } else {
                var n = t.errors || t.error || [];
                "string" == typeof n && (n = [{ message: n }]),
                  $.each(this.customResponseHandlers, function (o) {
                    o(e, t, n, a);
                  }),
                  this.showGenericErrorMessage(n);
              }
            },
          },
          {
            key: "handleResponseFailure",
            value: function (e, t) {
              var a = this,
                o = "";
              if (!t.responseJSON)
                return (o = t.statusText), void this.showGenericErrorMessage(o);
              var r = Object.entries(t.responseJSON.errors);
              if (t.responseJSON.code)
                for (
                  var n = Object.entries(t.responseJSON.code), i = 0;
                  i < n.length;
                  i++
                ) {
                  "MissingOrInvalidCredentialsCode" === n[i][1] &&
                    (o += ""
                      .concat(re.c[h.a.locale].MissingOrInvalidCredentialsCode)
                      .concat(i === r.length - 1 ? "" : ", "));
                }
              $.each(this.customResponseHandlers, function (o) {
                o(e, t, null, a);
              });
              for (var s = 0; s < r.length; s++) {
                var c = r[s],
                  l = !1;
                if (c[0].indexOf("email or password") >= 0) {
                  o += re.c[h.a.locale].emailOrPassword;
                  break;
                }
                c[0].indexOf("email") >= 0 &&
                  ((c[0] = re.c[h.a.locale].email),
                  "ru" !== h.a.locale || l || (l = !0)),
                  c[0].indexOf("password") >= 0 &&
                    (c[0] = re.c[h.a.locale].password),
                  c[1][0].indexOf("is invalid") >= 0 &&
                    (c[1] = re.c[h.a.locale].isInvalid),
                  c[1][0].indexOf("is already taken") >= 0 &&
                    ((c[1] = re.c[h.a.locale].isAlreadyTaken),
                    "ru" === h.a.locale &&
                      l &&
                      (c[1] = re.c[h.a.locale].isAlreadyTaken1)),
                  (o += ""
                    .concat(c[0], " ")
                    .concat(c[1])
                    .concat(s === r.length - 1 ? "" : ", "));
              }
              this.showGenericErrorMessage(o);
            },
          },
          {
            key: "showGenericErrorMessage",
            value: function (e) {
              var t = oe.a.errorTemplate(e);
              h.a.$body.append(t.html),
                $('[data-id="error-'.concat(t.num, '"]'))
                  .last()
                  .removeClass("is-hidden"),
                setTimeout(function () {
                  $('[data-id="error-'.concat(t.num, '"]')).fadeOut();
                }, 5e3);
            },
          },
        ]),
        e
      );
    })();
    function ge(e, t) {
      var a = "".concat(urlForLoginCode, "/").concat(t, "?code=").concat(e);
      $.ajax({
        url: a,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token ".concat(h.a.secure.get("_secure_meta_token")),
        },
      })
        .done(function (e) {
          pe(e.user, !0),
            e.user.email && A.a.logIn(e.user.email),
            h.a.getCookie("click_buy") && (ue(), h.a.eraseCookie("click_buy"));
        })
        .fail(function (e) {
          var t = oe.a.errorTemplate(e.responseText);
          h.a.$body.append(t.html),
            $('[data-id="error-'.concat(t.num, '"]'))
              .last()
              .removeClass("is-hidden"),
            setTimeout(function () {
              $('[data-id="error-'.concat(t.num, '"]')).fadeOut();
            }, 5e3);
        });
    }
    var he = {
        init: function () {
          (ne = $(".js-login-btn")),
            (ie = $(".js-state-header-user")),
            (se = $(".js-state-signin-btn")),
            (ce = $(".js-state-signin-link"));
          var e = $(".js-form-login");
          if (
            (h.a.secure.get("_secure_meta_user")
              ? pe(h.a.secure.get("_secure_meta_user"))
              : se.add(ce).removeClass("is-hidden"),
            h.a.getCookie("click_buy"))
          ) {
            var t = "#payment-method";
            A.a.buyMain(),
              barba.go(
                "/".concat(
                  "en" === h.a.locale
                    ? "order".concat(t)
                    : "".concat(h.a.locale, "/order").concat(t)
                ),
                "barba"
              ),
              h.a.eraseCookie("click_buy");
          }
          e.each(function (e, t) {
            var a = new fe($(t), $(t).data("form"));
            de.push(a), Object(ae.a)($(t));
          }),
            h.a.$body
              .on("click.login", ".js-notify-btn", function (e) {
                $(e.currentTarget).closest(".header__notify").fadeOut(),
                  h.a.secure.set("showSuccessMesage", null);
              })
              .on("click.login", ".js-order-notify-btn", function (e) {
                $(e.currentTarget)
                  .closest(".header-order__notify-item")
                  .fadeOut();
              })
              .on("click.login", ".js-logout-btn", function (e) {
                e.preventDefault(),
                  FB && FB.logout(function (e) {}),
                  google && google.accounts.id.disableAutoSelect(),
                  h.a.secure.remove("_secure_meta_user"),
                  h.a.secure.remove("_secure_meta_token"),
                  h.a.secure.remove("_secure_meta_password"),
                  h.a.secureEasy.remove("_secure__ls__metadata"),
                  h.a.secureEasy.remove("user_order"),
                  h.a.secureEasy.remove("user_order_id"),
                  ie.addClass("is-hidden").html(""),
                  se.add(ce).removeClass("is-hidden"),
                  $(".header__notify").fadeOut(),
                  h.a.eraseCookie("click_buy"),
                  (document.location = "/".concat(
                    "en" === h.a.locale ? "" : "".concat(h.a.locale, "/")
                  ));
              });
        },
        destroy: function () {
          (ne = ""),
            (ie = ""),
            (se = ""),
            (ce = ""),
            h.a.$body.off(".login"),
            (h.a.loginSetData = !1);
          for (var e = 0; e < de.length; e++) {
            de[e].destroy();
          }
          de = [];
        },
        setUserData: pe,
        fbAuth: function () {
          var e = document.createElement("script");
          (e.onload = function () {
            FB.init({
              appId: "498453708184424",
              status: !0,
              cookie: !0,
              xfbml: !0,
              version: "v12.0",
            }),
              h.a.secure.get("_secure_meta_token") ||
                (FB.getLoginStatus(function (e) {
                  !(function (e) {
                    "connected" === e.status &&
                      ((window.dataLayer = window.dataLayer || []),
                      window.dataLayer.push({
                        action: "Registration",
                        category: "SignUp",
                        event: "CustomEvent",
                      }));
                  })(e);
                }),
                $(".js-fb-login").on("click", function () {
                  FB.login(
                    function (e) {
                      "connected" === e.status &&
                        ge(e.authResponse.accessToken, "facebook");
                    },
                    { scope: "public_profile,email" }
                  );
                }));
          }),
            (e.src = "https://connect.facebook.net/".concat(
              re.c[h.a.locale].paymentsLanguage,
              "/sdk.js"
            )),
            (e.defer = !0),
            (e.crossOrigin = "anonymous"),
            document.head.appendChild(e);
        },
        googleAuth: function () {
          function e(e) {
            ge(e.credential, "google");
          }
          var t = document.createElement("script");
          (t.onload = function () {
            google.accounts.id.initialize({
              client_id:
                "754137399246-qabm6770ckoo0puec4pibpbsh79pvi44.apps.googleusercontent.com",
              ux_mode: "popup",
              select_by: "btn",
              callback: e,
            }),
              h.a.secure.get("_secure_meta_token") ||
                ($(".js-google-login").each(function (e, t) {
                  google.accounts.id.renderButton(t, {
                    theme: "outline",
                    size: "large",
                    type: "standard",
                    shape: "rectangular",
                    text:
                      "signup" === t.dataset.text
                        ? "".concat(t.dataset.text, "_with")
                        : t.dataset.text,
                    context: t.dataset.text,
                    locale: re.c[h.a.locale].paymentsLanguage,
                    logo_alignment: "center",
                  });
                }),
                google.accounts.id.prompt());
          }),
            (t.src = "https://accounts.google.com/gsi/client"),
            (t.defer = !0),
            document.head.appendChild(t);
        },
      },
      ve = [],
      _e = "",
      ye = "",
      be = "",
      Ce = "",
      we = "",
      Ee = "";
    function $e(e, t) {
      return e * h.a.coinsInfo[t].pricePerCurrencyMap.EUR;
    }
    function ke(e, t) {
      if (h.a.secure.get("_secure_meta_user")) {
        var a = e || h.a.secure.get("_secure_meta_user");
        if (
          (_e.each(function (e, t) {
            var o = $(t).find("input");
            $(t).is('[name="origin"]') && a.origin
              ? o.each(function (e, t) {
                  a.origin[$(t).attr("name")] &&
                    ($(t).val(a.origin[$(t).attr("name")]),
                    $(t).closest(".input__group").addClass("has-success"));
                })
              : $(t).is('[name="origin"]') ||
                o.each(function (e, t) {
                  a[$(t).attr("name")] &&
                    ($(t).val(a[$(t).attr("name")]),
                    $(t).closest(".input__group").addClass("has-success")),
                    $(t).is('[name="password"]') &&
                      h.a.secure.get("_secure_meta_password") &&
                      ($(t).val(h.a.secure.get("_secure_meta_password")),
                      $(t).closest(".input__group").addClass("has-success"));
                });
          }),
          $(".profile__title").text(a.email),
          a.image
            ? (be.attr("src", a.image).fadeIn(), Ce.hide())
            : Ce.text(a.email.charAt(0)),
          h.a.secure.get("_secure_meta_token"))
        ) {
          var o = {
            url: urlForOrder,
            method: "GET",
            headers: {
              Authorization: "Token ".concat(
                h.a.secure.get("_secure_meta_token")
              ),
            },
          };
          $('[type="submit"]').prop("disabled", !0).addClass("is-disabled"),
            $.ajax(o)
              .done(function (e) {
                $('[type="submit"]')
                  .prop("disabled", !1)
                  .removeClass("is-disabled"),
                  h.a.isMobile() || we.show();
                for (var t = "", a = 0; a < e.orders.length; a++) {
                  var o = e.orders[a];
                  "created" !== o.status.toLowerCase() &&
                    (t +=
                      '\n\t\t\t\t\t\t\t<div class="profile-order-table__container">\n\t\t\t\t\t\t\t\t'
                        .concat(
                          oe.a.profileTableHeading(o),
                          "\n\t\t\t\t\t\t\t\t"
                        )
                        .concat(
                          oe.a.profileTableBody(o),
                          "\n\t\t\t\t\t\t\t</div>"
                        ));
                }
                Ee.html(t),
                  setTimeout(function () {
                    var t = new URLSearchParams(window.location.search),
                      a = Object.fromEntries(t.entries());
                    if (a.id) {
                      if (h.a.secureEasy.get("is-pay")) {
                        var o = h.a.secureEasy.get("is-pay");
                        h.a.secureEasy.remove("is-pay");
                        for (var r = {}, n = 0; n < e.orders.length; n++) {
                          var i = e.orders[n];
                          if (parseInt(i.id) === parseInt(a.id)) {
                            r = i;
                            break;
                          }
                        }
                        var s = $e(r.coinCount, r.platform);
                        o.discount > 1 && (s -= s * (o.discount / 100)),
                          (s = s.toFixed(2)),
                          A.a.paymentSuccess(),
                          A.a.sendPaySuccess({
                            id: r.id,
                            platform: r.platform,
                            amount: r.coinCount,
                            method: r.deliveryMethod,
                            paymentName: o.paymentName,
                            coupon: o.coupon,
                            revenue: s,
                            price: $e(1, r.platform),
                          });
                      }
                      Ee.find(
                        '.js-accordion-btn[id="accordion-heading-'.concat(
                          a.id,
                          '"]'
                        )
                      ).trigger("click");
                      var c = re.c[h.a.locale].profileNotify
                          .split("xxxxx")
                          .join(a.id),
                        l = oe.a.profileNotifyTemplate(c);
                      h.a.$body.append(l.html),
                        $('[data-id="profile-'.concat(l.num, '"]'))
                          .last()
                          .removeClass("is-hidden"),
                        setTimeout(function () {
                          $('[data-id="profile-'.concat(l.num, '"]')).fadeOut();
                        }, 5e3);
                    }
                    Ee.find(".input__group").each(function (e, t) {
                      var a = h.a.getSpecialAttributes(t, "input");
                      new k.a($(t), a);
                    }),
                      Ee.find(".js-profile-continue").each(function (e, t) {
                        $(t).on("click.profile", function (e) {
                          !(function (e, t, a) {
                            t
                              ? a
                                  .find(".profile-order-table__frame")
                                  .addClass("is-hidden")
                              : a
                                  .find(
                                    ".profile-order-table__content, .profile-order-table__frame"
                                  )
                                  .addClass("is-hidden");
                            var o = {
                              url: ""
                                .concat(urlForOrder, "/")
                                .concat(e, "/place/pa"),
                              method: "POST",
                              headers: {
                                "Content-Type": "application/json",
                                Authorization: "Token ".concat(
                                  h.a.secure.get("_secure_meta_token")
                                ),
                              },
                            };
                            t
                              ? (a.find("iframe").attr("src", t),
                                a
                                  .find(".profile-order-table__content")
                                  .addClass("is-hidden"),
                                a
                                  .find(".profile-order-table__frame")
                                  .removeClass("is-hidden"))
                              : $.ajax(o)
                                  .done(function (e) {
                                    console.debug("response", e),
                                      a
                                        .find("iframe")
                                        .attr("src", e.acquiringLink),
                                      a
                                        .find(".profile-order-table__content")
                                        .addClass("is-hidden"),
                                      a
                                        .find(".profile-order-table__frame")
                                        .removeClass("is-hidden");
                                  })
                                  .fail(function (e) {
                                    console.debug("error", e),
                                      a
                                        .find(".profile-order-table__content")
                                        .removeClass("is-hidden");
                                  });
                          })(
                            $(e.currentTarget).data("id"),
                            $(e.currentTarget).data("link"),
                            $(e.currentTarget).closest(
                              ".profile-order-table__body"
                            )
                          );
                        });
                      }),
                      Ee.find(".js-form-order-profile").each(function (e, t) {
                        $(t)
                          .find(".js-form-submit")
                          .on("click.profile", function (e) {
                            e.preventDefault(),
                              e.stopPropagation(),
                              (function (e) {
                                var t = e.closest("form"),
                                  a = ""
                                    .concat(urlForOrder)
                                    .concat(t.attr("action")),
                                  o = t.attr("method"),
                                  r = {
                                    mail: t.find('[name="email"]').val(),
                                    password: t.find('[name="password"]').val(),
                                  },
                                  n = t.find(".js-form-content"),
                                  i = t.find(".js-form-error-message"),
                                  s = t.find(".js-form-success-message");
                                if (
                                  (i.addClass("is-hidden").html(""),
                                  0 !==
                                    t
                                      .find(".js-profile-codes .input__input")
                                      .val().length ||
                                    t
                                      .find(".js-profile-codes .input__input")
                                      .val().length > 8)
                                )
                                  return (
                                    t
                                      .find(".js-profile-codes .input__input")
                                      .attr("required", !0),
                                    t
                                      .find(".js-profile-codes")
                                      .removeClass("has-success")
                                      .addClass("has-error"),
                                    t
                                      .find(".js-profile-codes .input__label")
                                      .append(
                                        '<label id="'
                                          .concat(
                                            t
                                              .find(
                                                ".js-profile-codes .input__label"
                                              )
                                              .attr("for"),
                                            '-error" class="error" for="'
                                          )
                                          .concat(
                                            t
                                              .find(
                                                ".js-profile-codes .input__label"
                                              )
                                              .attr("for"),
                                            '">'
                                          )
                                          .concat(
                                            re.c[h.a.locale].profileCodesErrors,
                                            "</label>"
                                          )
                                      ),
                                    void (
                                      t.find("input").length &&
                                      t.find("input").trigger("update")
                                    )
                                  );
                                if (!t.find(".input__code").length)
                                  return (
                                    t
                                      .find(".js-profile-codes .input__input")
                                      .attr("required", !0),
                                    t
                                      .find(".js-profile-codes")
                                      .removeClass("has-success")
                                      .addClass("has-error"),
                                    t
                                      .find(".js-profile-codes .input__label")
                                      .append(
                                        '<label id="'
                                          .concat(
                                            t
                                              .find(
                                                ".js-profile-codes .input__label"
                                              )
                                              .attr("for"),
                                            '-error" class="error" for="'
                                          )
                                          .concat(
                                            t
                                              .find(
                                                ".js-profile-codes .input__label"
                                              )
                                              .attr("for"),
                                            '">'
                                          )
                                          .concat(
                                            re.c[h.a.locale].profileCodesErrors,
                                            "</label>"
                                          )
                                      ),
                                    void (
                                      t.find("input").length &&
                                      t.find("input").trigger("update")
                                    )
                                  );
                                if (
                                  (t
                                    .find(".js-profile-codes")
                                    .removeClass("has-error")
                                    .addClass("has-success"),
                                  t
                                    .find(
                                      ".js-profile-codes .input__label .error"
                                    )
                                    .remove(),
                                  t.valid() || !t.find(".has-error").length)
                                ) {
                                  t.find(".input__code").each(function (e, t) {
                                    r["backupCode".concat(e + 1)] = $(t)
                                      .data("value")
                                      .toString();
                                  });
                                  var c = {
                                    url: a,
                                    method: o,
                                    headers: {
                                      "Content-Type": "application/json",
                                      Authorization: "Token ".concat(
                                        h.a.secure.get("_secure_meta_token")
                                      ),
                                    },
                                    data: JSON.stringify(r),
                                  };
                                  $('[type="submit"]')
                                    .prop("disabled", !0)
                                    .addClass("is-disabled"),
                                    $.ajax(c)
                                      .done(function (e) {
                                        $('[type="submit"]')
                                          .prop("disabled", !1)
                                          .removeClass("is-disabled"),
                                          n.slideUp(),
                                          s
                                            .removeClass("is-hidden")
                                            .find(".text .status")
                                            .text(
                                              e.status
                                                .toLowerCase()
                                                .split("_")
                                                .join(" ")
                                            );
                                      })
                                      .fail(function (e) {
                                        if (
                                          ($('[type="submit"]')
                                            .prop("disabled", !1)
                                            .removeClass("is-disabled"),
                                          e.responseJSON.code)
                                        ) {
                                          for (
                                            var t = Object.entries(
                                                e.responseJSON.code
                                              ),
                                              a = "",
                                              o = 0;
                                            o < t.length;
                                            o++
                                          )
                                            "MissingOrInvalidCredentialsCode" ===
                                              t[o][1] &&
                                              (a =
                                                re.c[h.a.locale]
                                                  .MissingOrInvalidCredentialsCode);
                                          var r = oe.a.errorTemplate(a);
                                          h.a.$body.append(r.html),
                                            $(
                                              '[data-id="error-'.concat(
                                                r.num,
                                                '"]'
                                              )
                                            )
                                              .last()
                                              .removeClass("is-hidden"),
                                            setTimeout(function () {
                                              $(
                                                '[data-id="error-'.concat(
                                                  r.num,
                                                  '"]'
                                                )
                                              ).fadeOut();
                                            }, 5e3);
                                        } else {
                                          var n = oe.a.errorTemplate(
                                            e.responseText
                                          );
                                          h.a.$body.append(n.html),
                                            $(
                                              '[data-id="error-'.concat(
                                                n.num,
                                                '"]'
                                              )
                                            )
                                              .last()
                                              .removeClass("is-hidden"),
                                            setTimeout(function () {
                                              $(
                                                '[data-id="error-'.concat(
                                                  n.num,
                                                  '"]'
                                                )
                                              ).fadeOut();
                                            }, 5e3);
                                        }
                                      });
                                } else
                                  t.find("input").length &&
                                    t.find("input").trigger("update");
                              })($(e.currentTarget));
                          }),
                          Object(ae.a)($(t));
                      });
                  }, 500);
              })
              .fail(function (e) {
                $('[type="submit"]')
                  .prop("disabled", !1)
                  .removeClass("is-disabled");
                var t = oe.a.errorTemplate(e.statusText);
                h.a.$body.append(t.html),
                  $('[data-id="error-'.concat(t.num, '"]'))
                    .last()
                    .removeClass("is-hidden"),
                  setTimeout(function () {
                    $('[data-id="error-'.concat(t.num, '"]')).fadeOut();
                  }, 5e3);
              });
        }
      } else h.a.$body.find(".profile").length && (document.location = "/");
    }
    var Ae = (function () {
      function e(t, a) {
        var o = this;
        _()(this, e),
          (this.ns = a),
          (this.$form = t),
          (this.$errorMessage = t.find(".js-form-error-message")),
          (this.$formInput = t.find("input")),
          (this.$formBtn = t.find(".js-form-submit")),
          (this.$formBtnSpan = this.$formBtn.find(".btn__content")),
          (this.customValidators = []),
          (this.customResponseHandlers = []),
          (this.isLoading = !1),
          (this.userImage =
            h.a.secure.get("_secure_meta_user").image || be.attr("src")),
          t.on("submit.".concat(this.ns), function (e) {
            e.preventDefault(), e.stopPropagation(), o.submit();
          }),
          this.$formInput.on("change.".concat(this.ns), function (e) {
            0 !== $(e.currentTarget).val().length
              ? o.$formBtn.removeClass("is-hidden")
              : o.$formBtn.addClass("is-hidden");
          }),
          this.updateImage();
      }
      return (
        b()(e, [
          {
            key: "destroy",
            value: function () {
              this.$formBtn.off(".".concat(this.ns)),
                this.$form.off(".".concat(this.ns)),
                this.$formInput.off(".".concat(this.ns)),
                ye.off(".".concat(this.ns));
            },
          },
          {
            key: "getValues",
            value: function () {
              var e = this.$form,
                t = e.find("input"),
                a = {
                  user: {
                    image: this.userImage,
                    userLocale: h.a.locale,
                    region: h.a.region,
                    origin: {},
                  },
                };
              return (
                t.each(function (t, o) {
                  e.is('[name="origin"]')
                    ? (a.user.origin[$(o).attr("name")] = $(o).val())
                    : (a.user[$(o).attr("name")] = $(o).val()),
                    $(o).is('[name="password"]') &&
                      h.a.secure.get("_secure_meta_password") &&
                      h.a.secure.set("_secure_meta_password", $(o).val());
                }),
                JSON.stringify(a)
              );
            },
          },
          {
            key: "reset",
            value: function () {
              this.$form[0].reset(),
                this.$form
                  .find(".input__group")
                  .removeClass("has-success has-error"),
                this.$form
                  .find(".input__least")
                  .removeClass("input__least--success input__least--error"),
                this.enable();
            },
          },
          {
            key: "disable",
            value: function () {
              this.isLoading = !0;
              var e = this.$form;
              (this.submitBtnText = this.$formBtnSpan.text()),
                e
                  .find("input, select, textarea")
                  .prop("readonly", !0)
                  .addClass("readonly"),
                e
                  .find('button[type="submit"], input[type="submit"]')
                  .prop("disabled", !0),
                this.$formBtnSpan.text(re.c[h.a.locale].loading);
            },
          },
          {
            key: "enable",
            value: function () {
              this.isLoading = !1;
              var e = this.$form;
              e
                .find("input, select, textarea")
                .prop("readonly", !1)
                .removeClass("readonly"),
                e
                  .find('button[type="submit"], input[type="submit"]')
                  .prop("disabled", !1),
                this.$formBtnSpan.text(this.submitBtnText);
            },
          },
          {
            key: "submit",
            value: function () {
              var e = this.$form,
                t = this.getValues(),
                a = e.attr("action"),
                o = e.attr("method");
              e.find(".has-error").length ||
                (this.disable(),
                $.ajax({
                  url: a,
                  method: o,
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: "Token ".concat(
                      h.a.secure.get("_secure_meta_token")
                    ),
                  },
                  data: t,
                })
                  .always(this.handleResponseComplete.bind(this))
                  .done(this.handleResponseSuccess.bind(this))
                  .fail(this.handleResponseFailure.bind(this, t)));
            },
          },
          {
            key: "handleResponseComplete",
            value: function (e, t) {
              this.enable();
            },
          },
          {
            key: "handleResponseSuccess",
            value: function (e, t) {
              var a = this;
              if ((this.reset(), t.status || "success" === t))
                ke(e.user), he.setUserData(e.user);
              else {
                var o = t.errors || t.error || [];
                "string" == typeof o && (o = [{ message: o }]),
                  $.each(this.customResponseHandlers, function (r) {
                    r(e, t, o, a);
                  }),
                  this.showGenericErrorMessage(o);
              }
            },
          },
          {
            key: "handleResponseFailure",
            value: function (e, t) {
              var a = this,
                o = "";
              if (!t.responseJSON)
                return (o = t.statusText), void this.showGenericErrorMessage(o);
              var r = Object.entries(t.responseJSON.errors);
              $.each(this.customResponseHandlers, function (o) {
                o(e, t, null, a);
              });
              for (var n = 0; n < r.length; n++) {
                var i = r[n],
                  s = !1;
                if (i[0].indexOf("email or password") >= 0) {
                  o += re.c[h.a.locale].emailOrPassword;
                  break;
                }
                i[0].indexOf("email") >= 0 &&
                  ((i[0] = re.c[h.a.locale].email),
                  "ru" !== h.a.locale || s || (s = !0)),
                  i[0].indexOf("password") >= 0 &&
                    (i[0] = re.c[h.a.locale].password),
                  i[1][0].indexOf("is invalid") >= 0 &&
                    (i[1] = re.c[h.a.locale].isInvalid),
                  i[1][0].indexOf("is already taken") >= 0 &&
                    ((i[1] = re.c[h.a.locale].isAlreadyTaken),
                    "ru" === h.a.locale &&
                      s &&
                      (i[1] = re.c[h.a.locale].isAlreadyTaken1)),
                  (o += ""
                    .concat(i[0], " ")
                    .concat(i[1])
                    .concat(n === r.length - 1 ? "" : ", "));
              }
              this.showGenericErrorMessage(o);
            },
          },
          {
            key: "showGenericErrorMessage",
            value: function (e) {
              var t = oe.a.errorTemplate(e);
              h.a.$body.append(t.html),
                $('[data-id="error-'.concat(t.num, '"]'))
                  .last()
                  .removeClass("is-hidden"),
                setTimeout(function () {
                  $('[data-id="error-'.concat(t.num, '"]')).fadeOut();
                }, 5e3);
            },
          },
          {
            key: "updateImage",
            value: function () {
              var e = this;
              ye.on("change.".concat(this.ns), function (t) {
                var a = new FileReader(),
                  o = t.currentTarget.files.item(0);
                if (o)
                  return (
                    be.removeClass("is-active"),
                    t.currentTarget.files.size >
                    Number($(t.currentTarget).data("size"))
                      ? ((t.currentTarget.files = null),
                        alert("The file is too large."))
                      : ((a.onload = function (t) {
                          be.attr({ src: t.target.result }).fadeIn(),
                            Ce.hide(),
                            (e.userImage = t.target.result);
                        }),
                        a.readAsDataURL(o),
                        e.$formBtn.removeClass("is-hidden")),
                    !0
                  );
              });
            },
          },
        ]),
        e
      );
    })();
    var Te = {
      init: function (e) {
        (_e = $(".js-form-profile")),
          (ye = $(".js-add-photo")),
          (be = $(".profile__media img")),
          (Ce = $(".profile__media-text")),
          (we = $(".profile-order-table__top")),
          (Ee = $(".js-profile-order-table-body")),
          _e.each(function (e, t) {
            var a = new Ae($(t), "form-".concat(e));
            ve.push(a), Object(ae.a)($(t));
          }),
          ke(null);
      },
      destroy: function () {
        ye.off(".profile");
        for (var e = 0; e < ve.length; e++) {
          ve[e].destroy();
        }
        (ve = []),
          (_e = ""),
          (ye = ""),
          (be = ""),
          (Ce = ""),
          (we = ""),
          (Ee = ""),
          h.a.secureEasy.remove("acquiringLink");
      },
    };
    var Pe = {
        init: function () {
          var e = $(".js-tabs-btn").filter(
              '[data-id="'.concat(window.location.hash.substr(1), '"]')
            ),
            t = $(".js-tabs-content").filter(
              '[data-id="'.concat(window.location.hash.substr(1), '"]')
            );
          e.length &&
            ($(".js-tabs-btn").removeClass("is-active"),
            $(".js-tabs-content")
              .removeClass("is-active")
              .addClass("is-hidden"),
            e.addClass("is-active"),
            t.removeClass("is-hidden").addClass("is-active")),
            h.a.$body.on("click.tabs", ".js-tabs-btn", function (e) {
              var t = $(e.currentTarget),
                a = t.data("id"),
                o = t.data("scroll"),
                r = t.data("set-url"),
                n = t.closest(".js-tabs").find(".js-tabs-btn"),
                i = t.closest(".js-tabs").find(".js-tabs-content"),
                s = i.filter('[data-id="'.concat(a, '"]')),
                c = n.filter('[data-id="'.concat(a, '"]'));
              if (
                (n.each(function (e, t) {
                  $(t).data("always-active") ||
                    "true" === o ||
                    $(t).removeClass("is-active");
                }),
                !i.not(".is-hidden").closest("form").length ||
                  i.not(".is-hidden").closest("form").valid())
              ) {
                if (
                  (r && "false" !== r && (window.location.hash = a),
                  c.addClass("is-active"),
                  i.removeClass("is-active").addClass("is-hidden"),
                  s.removeClass("is-hidden").addClass("is-active"),
                  o &&
                    "false" !== o &&
                    h.a.scrollTo(t, 500, h.a.isMobile() ? 0 : -140),
                  i.data("youtube"))
                )
                  YT.get(
                    i.find(".main__delivery-video").attr("id")
                  ).stopVideo();
                i.not(".is-hidden").find("input").length &&
                  i
                    .not(".is-hidden")
                    .find("input")
                    .each(function (e, t) {
                      $(t).trigger("update");
                    });
              } else
                i.not(".is-hidden")
                  .find("input")
                  .each(function (e, t) {
                    $(t).trigger("update");
                  });
            });
        },
        destroy: function () {
          h.a.$body.off(".tabs");
        },
      },
      Se = a(50),
      Oe = {
        name: "default",
        once: function () {},
        leave: function (e) {
          var t = e.next,
            a = this.async();
          "page" === t.namespace || "profile" === t.namespace
            ? $(t.container)
                .find(".sidebar")
                .fadeOut("slow", function () {
                  a();
                })
            : setTimeout(function () {
                a();
              }, 500);
        },
        enter: function (e) {
          var t = e.next;
          $(".site").removeClass("is-hidden").css({ opacity: 1 }),
            -1 === t.url.path.indexOf("404") &&
              $(".site__media").removeClass("is-hidden").css({ opacity: 0.2 }),
            "page" !== t.namespace &&
              "profile" !== t.namespace &&
              $(t.container).find(".sidebar").show();
        },
      };
    var Ie,
      Ne,
      xe = {
        init: function () {
          var e = $(".sidebar"),
            t = $(".sidebar__slider"),
            a = $(".sidebar__item"),
            o = $(".sidebar__dots"),
            r = $("html").attr("dir"),
            n = $(".review__title"),
            i = $(".review__text");
          e.removeClass("is-fade"),
            a.each(function () {
              o.append('<div class="sidebar__dot"></div>');
            }),
            t.length > 0 &&
              (t.attr("dir", r),
              t.slick({
                infinite: !0,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: 0,
                variableWidth: !1,
                adaptiveHeight: !0,
                arrows: !1,
                asNavFor: ".sidebar__dots",
                autoplay: !0,
                autoplaySpeed: 5e3,
                rtl: "rtl" === r,
                responsive: [{ breakpoint: 1024 }],
              })),
            o.length > 0 &&
              (o.attr("dir", r),
              o.slick({
                infinite: !0,
                slidesToShow: 5,
                slidesToScroll: 1,
                asNavFor: ".sidebar__slider",
                arrows: !1,
                centerMode: !0,
                variableWidth: !0,
                focusOnSelect: !0,
                swipe: !1,
                rtl: "rtl" === r,
                responsive: [{ breakpoint: 1024 }],
              })),
            $(".sidebar__dots button").text(""),
            "rtl" === r &&
              (n.each(function (e, t) {
                $(t).wrapInner("<bdi></bdi>");
              }),
              i.each(function (e, t) {
                $(t).wrapInner("<bdi></bdi>");
              }));
        },
        destroy: function () {
          var e = $(".sidebar"),
            t = $(".sidebar__slider"),
            a = $(".sidebar__dots");
          t.hasClass("slick-initialized") &&
            (e.addClass("is-fade"), t.slick("unslick"), a.slick("unslick"));
        },
      },
      je = a(59),
      Le = [];
    function Re(e, t) {
      e.forEach(function (e) {
        e.isIntersecting && (Le.addClass("is-active"), t.unobserve(Ne));
      });
    }
    var Fe,
      De = function () {
        (Le = h.a.$body.find(".back-top")),
          (Ne = h.a.$body.find(".main__delivery-container").get(0)),
          0 !== Le.length &&
            ((Ie = new IntersectionObserver(Re, { threshold: 0.5 })).observe(
              Ne
            ),
            Le.on("click", function () {
              h.a.scrollTo(h.a.$body);
            }));
      },
      Me = function () {
        0 !== Le.length && (Le.off("click"), Ie.disconnect());
      },
      Ue = function () {
        Fe = $('.site[data-barba-namespace="coins"]');
      },
      Be = function () {
        Fe.off(".coins", "**"),
          h.a.$body.off("click.coins", ".currency-select"),
          [];
      },
      ze = [],
      Ge = [];
    function We() {
      var e = $(".input__input"),
        t = $(".js-accordion");
      e.each(function (e, t) {
        var a = new k.a($(t));
        ze.push(a);
      }),
        t.each(function (e, t) {
          var a = h.a.getSpecialAttributes(t, "accordion"),
            o = new E($(t), a);
          Ge.push(o);
        });
    }
    function He() {
      return new Promise(function (e) {
        var t = {
            url: urlForStock,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            data: '{"ip": ""}',
          },
          a = h.a.locale;
        $.ajax(t).done(function (t) {
          (h.a.paypalEnabled = t.paypalEnabled),
            (h.a.rate = t.rate),
            (h.a.reviews = t.reviews),
            (h.a.region = t.region),
            (h.a.discounts = t.discount),
            (h.a.currency = t.currency),
            (h.a.currencyName = t.currency);
          var o = h.a.secureEasy.get("user_method");
          (h.a.easyCoinsInfo = {
            ps4: t.deliveryMethods[0].data[1],
            ps5: t.deliveryMethods[0].data[1],
            xbox: t.deliveryMethods[0].data[0],
            xboxs: t.deliveryMethods[0].data[0],
          }),
            (h.a.manualCoinsInfo = {
              ps4: t.deliveryMethods[1].data[1],
              ps5: t.deliveryMethods[1].data[1],
              xbox: t.deliveryMethods[1].data[0],
              xboxs: t.deliveryMethods[1].data[0],
            }),
            (h.a.coinsInfo =
              "Manual" === o ? h.a.manualCoinsInfo : h.a.easyCoinsInfo),
            o &&
              $(".js-select-method-button").each(function (e, t) {
                $(t).data("id") === o
                  ? $(t).addClass("method-active")
                  : $(t).removeClass("method-active");
              }),
            (h.a.limits = { min: t.minLimitSumCoins, max: t.maxLimitSumCoins }),
            barba.init({ sync: !0, transitions: [Oe], views: [], debug: !0 });
          var r =
            window.location.pathname.slice(3, 4).indexOf("/") >= 0
              ? window.location.pathname.substring(1, 3)
              : "en";
          if (a !== r) {
            var n = window.location.pathname;
            n.slice(3, 4).indexOf("/") >= 0 && (n = n.substring(3, n.length)),
              barba.go(
                "/".concat(
                  "en" === a
                    ? ""
                    : ""
                        .concat(a)
                        .concat(n)
                        .concat(window.location.search)
                        .concat(window.location.hash)
                ),
                "localeChange"
              );
          }
          var i = re.c[a];
          (h.a.currency = i.currency),
            (h.a.currencyName = i.currencyName),
            h.a.$html
              .attr("data-lang", a)
              .attr("lang", a)
              .attr("dir", "ar" === a ? "rtl" : "ltr")
              .attr("data-currency", h.a.currencyName),
            (paymentsLanguage = i.paymentsLanguage),
            h.a.getCookie("currencyCookie") ||
              h.a.getCookie("currencyNameCookie") ||
              T.a.setCurrency(h.a.currency, h.a.currencyName),
            e();
        });
      });
    }
    barba.use(barbaRouter, {
      routes: [
        { path: "/404", name: "404" },
        { path: "/profile/:type", name: "profile" },
        { path: "/order/:page", name: "order" },
        { path: "/:page", name: "page" },
        { path: "/", name: "home" },
      ],
    }),
      barba.hooks.afterLeave(function (e) {
        ee.destroy(),
          te.a.destroy(),
          Pe.destroy(),
          Se.a.destroy(),
          he.destroy(),
          xe.destroy(),
          Me(),
          Be();
        for (var t = 0; t < ze.length; t++) {
          ze[t].destroy();
        }
        ze = [];
        for (var a = 0; a < Ge.length; a++) {
          Ge[a].destroy();
        }
        (Ge = []),
          ("order" !== e.current.namespace && "home" !== e.current.namespace) ||
            ("localeChange" === e.trigger || "home" === e.current.namespace
              ? P.a.destroy(!1)
              : P.a.destroy()),
          "profile" === e.current.namespace && Te.destroy(),
          e.current.namespace && A.a.virtualHit(e.next.url.path),
          h.a.$body.off("click.router");
      }),
      barba.hooks.beforeEnter(function (e) {
        if (
          (e.next.url.path.indexOf("404") > -1
            ? ($(".site__media").addClass("is-hidden"),
              $(".not-found__background").removeClass("is-hidden"))
            : ($(".site__media").removeClass("is-hidden"),
              $(".not-found__background").addClass("is-hidden")),
          h.a.getCookie("currencyCookie") && h.a.getCookie("currencyNameCookie")
            ? T.a.setCurrency(
                h.a.getCookie("currencyCookie"),
                h.a.getCookie("currencyNameCookie")
              )
            : $(".header__currency-btn").removeClass("is-hide"),
          ("home" !== e.next.namespace && "order" !== e.next.namespace) ||
            T.a.renderDiscountButtons(h.a.discounts),
          ["home", "order", "coins"].indexOf(e.next.namespace) > -1 &&
            h.a.$sidebar.show(),
          "home" === e.next.namespace && je.a.init(e.next.container),
          "page" === e.next.namespace && $(".header__currency").hide(),
          "localeChange" === e.trigger &&
            (h.a.secureEasy.set("user_locale", h.a.locale),
            (h.a.currency = re.c[h.a.locale].currency),
            (h.a.currencyName = re.c[h.a.locale].currencyName),
            h.a.$html
              .attr("data-lang", h.a.locale)
              .attr("lang", h.a.locale)
              .attr("dir", "ar" === h.a.locale ? "rtl" : "ltr")),
          h.a.scrollTo(h.a.$html, 0),
          h.a.secure.get("_secure_meta_token"))
        ) {
          var t = {
              url: urlForUser,
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Token ".concat(
                  h.a.secure.get("_secure_meta_token")
                ),
              },
            },
            a = {
              url: urlForUserLogin,
              method: "POST",
              headers: { "Content-Type": "application/json" },
              data: JSON.stringify({
                user: {
                  email: h.a.secure.get("_secure_meta_user").email,
                  password: h.a.secure.get("_secure_meta_password"),
                },
              }),
            };
          $.ajax(t)
            .done(function (e) {
              h.a.secure.get("_secure_meta_user") !== e.user &&
                h.a.secure.set("_secure_meta_user", e.user),
                (h.a.secure.get("_secure_meta_token") &&
                  e.token === !h.a.secure.get("_secure_meta_token")) ||
                  h.a.secure.set("_secure_meta_token", e.user.token);
            })
            .fail(function (e) {
              401 === e.status &&
                ((h.a.loginSetData = !1),
                $.ajax(a)
                  .done(function (e, t) {
                    (t.status || "success" === t) && he.setUserData(e.user);
                  })
                  .fail(function (e) {
                    401 === e.status && $(".js-logout-btn").trigger("click");
                  }));
            });
        }
      }),
      barba.hooks.enter(function () {
        objectFitImages();
      }),
      barba.hooks.afterOnce(function () {
        We(),
          De(),
          $("body")
            .on("click", "a[href]", function (e) {
              e.currentTarget.href === window.location.href &&
                (e.preventDefault(), e.stopPropagation());
            })
            .on("click", ".menu__link", function (e) {
              e.currentTarget.href && A.a.choosePlatform();
            });
      }),
      barba.hooks.after(function () {
        We(), De();
      }),
      barba.hooks.afterEnter(function (e) {
        if (
          (h.a.getCookie("currencyCookie") &&
          h.a.getCookie("currencyNameCookie")
            ? T.a.setCurrency(
                h.a.getCookie("currencyCookie"),
                h.a.getCookie("currencyNameCookie")
              )
            : $(".header__currency-btn").removeClass("is-hide"),
          ee.init(),
          te.a.init(),
          Pe.init(),
          Se.a.init(),
          he.init(),
          xe.init(),
          he.fbAuth(),
          he.googleAuth(),
          Ue(),
          !h.a.paypalEnabled &&
            $('.js-payment-method-input[value="paypal"]').length > 0 &&
            $('.js-payment-method-input[value="paypal"]')
              .closest(".payment-method__fieldset")
              .remove(),
          h.a.rate &&
            $(".review__score .js-set-rate").length > 0 &&
            $(".js-set-rate").html("".concat(h.a.rate, " ")),
          h.a.reviews &&
            $(".review__score .js-set-reviews").length > 0 &&
            $(".js-set-reviews").html("".concat(h.a.reviews, " ")),
          (h.a.clientID = h.a.getCookie("_ga")),
          !h.a.clientID &&
            window.ga &&
            ga(function () {
              ga.getAll().forEach(function (e) {
                var t = e.get("clientId");
                h.a.clientID = t;
              });
            }),
          "order" === e.next.namespace)
        ) {
          var t = e.next.url.hash;
          !t &&
            e.next.container.dataset.barbaSubname &&
            (t = e.next.container.dataset.barbaSubname),
            P.a.init(t, "localeChange" === e.trigger);
        }
        if (
          ("profile" === e.next.namespace &&
            (Te.init("goToProfile" === e.trigger),
            $(".header__currency").hide()),
          $("#trustbox").length && window.Trustpilot)
        ) {
          var a = $("#trustbox").last()[0];
          window.Trustpilot.loadFromElement(a);
        }
        h.a.secure.get("cookie") ||
          ($(".cookie").removeClass("is-hidden"),
          h.a.$body.on("click.router", ".cookie__button", function () {
            $(".cookie").addClass("is-hidden"), h.a.secure.set("cookie", !0);
          })),
          "localeChange" === e.trigger &&
            (h.a.secure.get("_secure_meta_user")
              ? he.setUserData(h.a.secure.get("_secure_meta_user"))
              : $(".js-state-signin-btn")
                  .add($(".js-state-signin-link"))
                  .removeClass("is-hidden"));
      }),
      new Promise(function (e) {
        h.a.locale = h.a.secureEasy.get("user_locale");
        var t = "";
        h.a.locale ||
          ((t = window.navigator.userLanguage || window.navigator.language),
          (h.a.locale = t.split("-")[0]),
          h.a.secureEasy.set("user_locale", h.a.locale)),
          e();
      }).then(He);
    var Ke = h.a.secureEasy.get("user_order_id") || "";
    document
      .querySelector(".apple-pay-button")
      .addEventListener("click", function () {
        !(function () {
          if (ApplePaySession) {
            console.log("button clicked");
            var e = {
              countryCode: "US",
              currencyCode: "USD",
              merchantCapabilities: ["supports3DS"],
              supportedNetworks: ["visa", "masterCard", "amex", "discover"],
              total: { label: "Royalfut.com", type: "final", amount: "1" },
            };
            console.log(e);
            var t = new ApplePaySession(3, e);
            console.log("begin", t, ApplePaySession),
              (t.onvalidatemerchant = function (e) {
                console.log("onvalidatemerchant", e.validationURL);
                var a = "".concat(urlForOrder, "/prepay/appletoken"),
                  o = JSON.stringify({ url: e.validationURL });
                fetch(a, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: "Token ".concat(
                      h.a.secure.get("_secure_meta_token")
                    ),
                  },
                  body: o,
                })
                  .then(function (e) {
                    return e.json();
                  })
                  .then(function (e) {
                    console.log("getMerchantSession", e),
                      t.completeMerchantValidation(JSON.parse(e));
                  })
                  .catch(function (e) {
                    console.error("Error fetching merchant session", e);
                  });
              }),
              (t.onpaymentmethodselected = function (e) {
                console.log("onpaymentmethodselected");
                t.completePaymentMethodSelection({});
              }),
              (t.onshippingmethodselected = function (e) {
                console.log("onshippingmethodselected");
                t.completeShippingMethodSelection({});
              }),
              (t.onshippingcontactselected = function (e) {
                console.log("onshippingcontactselected");
                t.completeShippingContactSelection({});
              }),
              (t.onpaymentauthorized = function (e) {
                console.log("onpaymentauthorized", e.payment),
                  (url = "".concat(urlForOrder, "/").concat(Ke, "/prepay")),
                  (suburl = "/applepay"),
                  (settings.url = "".concat(url).concat(suburl)),
                  (settings.data = JSON.stringify({ data: e.payment }));
                $.ajax(settings).done(function (e) {
                  console.log(e);
                }),
                  t.completePayment({});
              }),
              (t.oncancel = function (e) {}),
              t.begin();
          }
        })();
      });
  },
  50: function (e, t, a) {
    "use strict";
    var o = a(0),
      r = "",
      n = "";
    function i() {
      o.a.isMobile()
        ? n.slideDown(400, function () {
            n.removeClass("hidden");
          })
        : n.fadeIn(200, function () {
            n.removeClass("hidden");
          }),
        n.find("input").length && n.find("input").trigger("update");
    }
    function s() {
      o.a.isMobile()
        ? n.slideUp(400, function () {
            n.addClass("hidden");
          })
        : n.fadeOut(200, function () {
            n.addClass("hidden");
          });
    }
    t.a = {
      init: function () {
        (r = $(".payment-method")),
          (n = $(".payment-method__coupon-content")),
          r.length &&
            (n.addClass("hidden"),
            o.a.$document
              .on("click.coupon", function (e) {
                n.hasClass("hidden") ||
                  n.is(e.target) ||
                  0 !== n.has(e.target).length ||
                  s();
              })
              .on(
                "click.coupon",
                ".payment-method__total-coupon .btn",
                function () {
                  n.hasClass("hidden") ? i() : s();
                }
              ));
      },
      destroy: function () {
        o.a.$document.off(".coupon"), (r = ""), (n = "");
      },
      openCoupon: i,
      closeCoupon: s,
    };
  },
  59: function (e, t, a) {
    "use strict";
    a.d(t, "b", function () {
      return s;
    });
    var o = a(0),
      r = a(34),
      n = a(9),
      i = a(12);
    function s(e) {
      function t() {
        $(e)
          .find(".main__delivery-content")
          .each(function (e, t) {
            if ($(t).find(".main__delivery-video").length) {
              var a = new YT.Player(
                t.querySelector(".main__delivery-video").id,
                { videoId: t.querySelector(".main__delivery-video").dataset.id }
              );
              $(t)
                .find(".js-main-delivery-arrow")
                .on("click.pages", function (e) {
                  var t = $(e.currentTarget).siblings(
                      ".main__delivery-buttons-counter"
                    ),
                    o = Number(t.data("max")),
                    r = Number(t.find("span").text());
                  $(".main__delivery-info").addClass("is-hidden"),
                    (r = $(e.currentTarget).data("prev")
                      ? r > 1
                        ? r - 1
                        : 4
                      : r < o
                      ? r + 1
                      : 1),
                    t.find("span").html(r);
                  var n = $(e.currentTarget)
                    .parent()
                    .siblings(".main__delivery-video")
                    .data("time-".concat(r));
                  $(
                    '.main__delivery-info[data-id="'.concat(r, '"]')
                  ).removeClass("is-hidden"),
                    a.seekTo(n);
                });
            } else
              $(t)
                .find(".js-main-delivery-arrow")
                .on("click.pages", function (e) {
                  var t = $(e.currentTarget).siblings(
                      ".main__delivery-buttons-counter"
                    ),
                    a = Number(t.data("max")),
                    o = Number(t.find("span").text());
                  $(".main__delivery-info").addClass("is-hidden"),
                    (o = $(e.currentTarget).data("prev")
                      ? o > 1
                        ? o - 1
                        : 4
                      : o < a
                      ? o + 1
                      : 1),
                    t.find("span").html(o),
                    $(
                      '.main__delivery-info[data-id="'.concat(o, '"]')
                    ).removeClass("is-hidden");
                });
          });
      }
      new IntersectionObserver(
        function (e, a) {
          e.forEach(function (e) {
            e.isIntersecting &&
              (!(function () {
                if ("undefined" == typeof YT || void 0 === YT.Player) {
                  var e = document.createElement("script");
                  e.src = "https://www.youtube.com/iframe_api";
                  var a = document.getElementsByTagName("script")[0];
                  a.parentNode.insertBefore(e, a),
                    (window.onYouTubePlayerAPIReady = function () {
                      t();
                    });
                } else
                  setTimeout(function () {
                    t();
                  }, 500);
              })(),
              a.disconnect());
          });
        },
        { threshold: 0.5 }
      ).observe($(e).find(".main__delivery-content").get(0));
    }
    t.a = {
      init: function (e) {
        o.a.secureEasy.get("user_order_id") &&
          (o.a.secureEasy.remove("user_order_id"),
          o.a.secureEasy.remove("user_order")),
          i.a.init(),
          o.a.calculator.setMethod("Easy"),
          i.a.setAllFields(),
          i.a.calculatorEvents(e),
          $(e)
            .find(".js-buy-main")
            .on("click.home", function (e) {
              if (
                (e.preventDefault(),
                o.a.fixInputMin($(".js-calculator-coins")),
                o.a.fixInputMin($(".js-calculator-amount")),
                o.a.secureEasy.set("user_order", o.a.calculator.getFullInfo()),
                o.a.secure.get("_secure_meta_user"))
              ) {
                $(".loader:not(.loader-content)").addClass("loader-custom"),
                  setTimeout(function () {
                    $(".loader:not(.loader-content)").removeClass(
                      "loader-custom"
                    );
                  }, 3e3);
                n.a.buyMain(),
                  o.a.secureEasy.set("analytics", "step-1"),
                  barba.go(
                    $(e.currentTarget).data("href") + "#payment-method",
                    "barba calculator main"
                  );
              } else r.a.open("sign-in"), o.a.setCookie("click_buy", !0), $('.js-tabs-btn[data-id="sign-up"]').trigger("click");
            }),
          $(e)
            .find(".js-calculator-help")
            .on("click.pages", function (e) {
              e.preventDefault(),
                o.a.scrollTo($($(e.currentTarget).attr("href")));
            }),
          s(e);
      },
      destroy: function (e) {
        $(e).off(".home"),
          $(".js-buy-main").off(".home"),
          $(".js-calculator-help").off(".home"),
          $(".calculator-help__close").off(".home"),
          $(".js-main-delivery-arrow").off(".pages");
      },
    };
  },
  9: function (e, t, a) {
    "use strict";
    var o = a(0),
      r = {
        virtualHit: function (e) {
          window.ga && (ga("set", "page", e), ga("send", "pageview", e));
        },
        step1: function () {
          window.analyticsLocal ||
            ((window.dataLayer = window.dataLayer || []),
            window.dataLayer.push({
              event: "CustomEvent",
              category: "Auth",
              action: "Login",
              userId: o.a.getCookie("_ga"),
            }));
        },
        step2: function () {
          window.analyticsLocal ||
            ((window.dataLayer = window.dataLayer || []),
            window.dataLayer.push({
              event: "CustomEvent",
              category: "Auth",
              action: "Reg",
              userId: o.a.getCookie("_ga"),
            }));
        },
        choosePlatform: function () {
          window.analyticsLocal ||
            ((window.dataLayer = window.dataLayer || []),
            dataLayer.push({
              event: "CustomEvent",
              category: "Full funnel",
              action: "Step-1 choose platform",
            }));
        },
        chooseCoinsAmount: function () {
          window.analyticsLocal ||
            ((window.dataLayer = window.dataLayer || []),
            dataLayer.push({
              event: "CustomEvent",
              category: "Full funnel",
              action: "Step-2 coins amount",
            }));
        },
        chooseDeliveryMethod: function () {
          window.analyticsLocal ||
            ((window.dataLayer = window.dataLayer || []),
            dataLayer.push({
              event: "CustomEvent",
              category: "Full funnel",
              action: "Step-3 choose delivery",
            }));
        },
      };
    (r.chooseDeliveryMethod = function () {
      window.analyticsLocal ||
        ((window.dataLayer = window.dataLayer || []),
        dataLayer.push({
          event: "CustomEvent",
          category: "Full funnel",
          action: "Step-3 choose delivery",
        }));
    }),
      (r.chooseDeliveryMethod = function () {
        window.analyticsLocal ||
          ((window.dataLayer = window.dataLayer || []),
          dataLayer.push({
            event: "CustomEvent",
            category: "Full funnel",
            action: "Step-3 choose delivery",
          }));
      }),
      (r.choosePaymentMethod = function () {
        window.analyticsLocal ||
          ((window.dataLayer = window.dataLayer || []),
          dataLayer.push({
            event: "CustomEvent",
            category: "Full funnel",
            action: "Step-4 choose payment method",
          }));
      }),
      (r.paymentSuccess = function () {
        window.analyticsLocal ||
          ((window.dataLayer = window.dataLayer || []),
          dataLayer.push({
            event: "CustomEvent",
            category: "Full funnel",
            action: "Step-5 successful payment",
          }));
      }),
      (r.paymentSuccess = function () {
        window.analyticsLocal ||
          ((window.dataLayer = window.dataLayer || []),
          dataLayer.push({
            event: "CustomEvent",
            category: "Full funnel",
            action: "Step-6 backup codes",
          }));
      }),
      (r.buyMain = function () {
        window.analyticsLocal ||
          ((window.dataLayer = window.dataLayer || []),
          window.dataLayer.push({
            ecommerce: {
              currencyCode: o.a.currencyName,
              click: {
                actionField: { list: "Form" },
                products: [{ name: "Coins", id: "FUT" }],
              },
            },
            event: "CustomEvent",
            category: "FormOnIndex",
            action: "SendForm",
            "non-interaction": "False",
            userId: o.a.getCookie("_ga"),
            Timestamp: +new Date(),
          }));
      }),
      (r.registration = function () {
        window.analyticsLocal ||
          ((window.dataLayer = window.dataLayer || []),
          window.dataLayer.push({
            action: "Registration",
            category: "SignUp",
            event: "CustomEvent",
          }));
      }),
      (r.sendOrder = function (e) {
        window.analyticsLocal ||
          ((window.dataLayer = window.dataLayer || []),
          window.dataLayer.push({
            ecommerce: {
              currencyCode: "EUR",
              checkout: {
                actionField: { step: 1, option: "Choice" },
                products: [
                  {
                    name: "Coins",
                    id: e.id,
                    brand: e.platform,
                    category: e.method,
                    price: e.price,
                    quantity: e.amount,
                  },
                ],
              },
            },
            event: "CustomEvent",
            category: "BuyCoins",
            action: "1",
            "non-interaction": "False",
            platform: e.platform,
            coins: e.amount,
            product: e.method,
            userId: o.a.getCookie("_ga"),
          }));
      }),
      (r.sendPayment = function (e) {
        window.analyticsLocal ||
          ((window.dataLayer = window.dataLayer || []),
          window.dataLayer.push({
            ecommerce: {
              currencyCode: "EUR",
              checkout: {
                actionField: { step: 2, option: "Payment" },
                products: [
                  {
                    name: "Coins",
                    id: e.id,
                    brand: e.platform,
                    category: e.method,
                    variant: e.paymentName,
                    price: e.price,
                    quantity: e.amount,
                    coupon: e.coupon,
                  },
                ],
              },
            },
            event: "CustomEvent",
            category: "BuyCoins",
            action: "2",
            "non-interaction": "False",
            platform: e.platform,
            coins: e.amount,
            product: e.method,
            "payment method": e.paymentName,
            coupon: e.coupon,
            "payment amount": e.price,
            userId: o.a.getCookie("_ga"),
          }));
      }),
      (r.sendPaySuccess = function (e) {
        window.analyticsLocal ||
          ((window.dataLayer = window.dataLayer || []),
          window.dataLayer.push({
            ecommerce: {
              currencyCode: "EUR",
              purchase: {
                actionField: {
                  name: "Coins",
                  id: e.id,
                  affiliation: "royalfut.com",
                  revenue: e.revenue,
                  tax: "",
                  shipping: "",
                  coupon: e.coupon,
                },
                products: [
                  {
                    name: "Coins",
                    id: e.id,
                    brand: e.platform,
                    category: e.method,
                    variant: e.paymentName,
                    price: e.price,
                    quantity: e.amount,
                    coupon: e.coupon,
                  },
                ],
              },
            },
            event: "CustomEvent",
            category: "BuyCoins",
            action: "3",
            platform: e.platform,
            "coins amount": e.amount,
            product: e.method,
            "payment method": e.paymentName,
            coupon: e.coupon,
            "payment amount": e.price,
            userId: o.a.getCookie("_ga"),
          }));
      }),
      (r.logIn = function (e) {
        window.analyticsLocal ||
          ((window.dataLayer = window.dataLayer || []),
          window.dataLayer.push({
            event: "CustomEvent",
            category: "login",
            action: "succeslogin",
            "User ID": e,
          }));
      }),
      (t.a = r);
  },
});
//# sourceMappingURL=main.js.map
