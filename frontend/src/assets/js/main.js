(function () {
  function rt() {
    n.postData(
      b,
      {
        session_type: l,
        active_session: it,
        store_id: f,
        session_id: s,
        visitor_id: h,
        reference_site: e,
        origin_reference_site: o,
        current_site: c,
        landing_type: i,
        landing_page: r,
        landing_full_page: t,
      },
      a,
      u
    );
  }
  function ut() {
    rt();
    n.postData(
      v,
      {
        store_id: f,
        session_id: s,
        visitor_id: h,
        product_alias: d,
        action: "view",
        reference_site: e,
        origin_reference_site: o,
        current_site: c,
        landing_type: i,
        landing_page: r,
        landing_full_page: t,
      },
      null,
      u
    );
  }
  function ot() {
    ut();
    n.postData(
      v,
      {
        store_id: f,
        session_id: s,
        visitor_id: h,
        product_alias: d,
        action: "search",
        reference_site: e,
        origin_reference_site: o,
        current_site: c,
        landing_type: i,
        landing_page: r,
        landing_full_page: t,
      },
      null,
      u
    );
  }
  function st() {
    var l = Bizweb.checkout.line_items;
    n.postData(
      b,
      {
        session_type: "thank_you_view",
        active_session: it,
        store_id: f,
        session_id: s,
        visitor_id: h,
        reference_site: e,
        origin_reference_site: o,
        current_site: c,
        landing_type: i,
        landing_page: r,
        landing_full_page: t,
        from_product_view: k,
      },
      a,
      u
    );
    l.forEach(function (l) {
      n.postData(
        v,
        {
          store_id: f,
          session_id: s,
          visitor_id: h,
          product_id: l.product_id,
          variant_id: l.variant_id,
          action: "purchase",
          reference_site: e,
          origin_reference_site: o,
          current_site: c,
          landing_type: i,
          landing_page: r,
          landing_full_page: t,
        },
        null,
        u
      );
    });
  }
  function g(n, t, i, r) {
    this.xhr = n;
    this.url = t;
    this.method = i;
    this.body = r;
  }
  var n = (function () {
      function n(n) {
        for (
          var t, r = n + "=", u = document.cookie.split(";"), i = 0;
          i < u.length;
          i++
        ) {
          for (t = u[i]; t.charAt(0) == " "; ) t = t.substring(1);
          if (t.indexOf(r) == 0) return t.substring(r.length, t.length);
        }
      }
      function t(n, t) {
        var i = new URLSearchParams(t.toLowerCase());
        return i.get(n.toLowerCase());
      }
      function i(n, t, i) {
        var r = new Date(),
          u;
        r.setTime(r.getTime() + i * 6e4);
        u = "expires=" + r.toUTCString();
        document.cookie = n + "=" + t + ";" + u + ";path=/";
      }
      function r() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
          /[xy]/g,
          function (n) {
            var t = (Math.random() * 16) | 0,
              i = n == "x" ? t : (t & 3) | 8;
            return i.toString(16);
          }
        );
      }
      function u(n, t, i, r) {
        fetch(n, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(t),
        })
          .then(function (n) {
            return n.json();
          })
          .then(function (n) {
            i(n);
          })
          .catch(function (n) {
            r(n);
          });
      }
      return {
        getCookie: n,
        setCookie: i,
        getUUID: r,
        postData: u,
        getParamValue: t,
      };
    })(),
    ft,
    et,
    nt;
  n.getCookie("_landing_full_page") ||
    n.getCookie("_landing_type") ||
    !Bizweb.template ||
    (n.setCookie("_landing_full_page", location.href, 21600),
    n.setCookie("_landing_type", Bizweb.template, 21600));
  var tt = window.BizwebAnalytics.tracking_url,
    y = n.getCookie("_s"),
    p = n.getCookie("_v"),
    it = !!sessionStorage.getItem("active"),
    t = n.getCookie("_landing_full_page"),
    i = n.getCookie("_landing_type"),
    r = unescape(n.getCookie("_landing_page")),
    w = n.getCookie("_origin_reference_site"),
    b = tt + "/api/v1/page-views",
    v = tt + "/api/v1/product-actions",
    a = function () {
      n.setCookie("_s", y, 30);
      n.setCookie("_v", p, 1576800);
      n.setCookie("_origin_reference_site", w, 43200);
    },
    u = function (n) {
      console.log(n);
    };
  y || (y = n.getUUID());
  p || (p = n.getUUID());
  w === undefined && (w = document.referrer);
  var f = Bizweb ? Bizweb.id : 0,
    e = document.referrer,
    o = w,
    s = y,
    h = p,
    c = location.href,
    k = !1,
    l,
    d;
  switch (Bizweb.template) {
    case "collection":
      l =
        location.pathname !== "/collections/all"
          ? "collection_view"
          : "page_view";
      break;
    case "product":
      k = !0;
      d = location.pathname;
      l = "product_view";
      document.referrer !== "" &&
        new URL(document.referrer).pathname === "/search" &&
        (l = "product_view_from_search");
      break;
    case "cart":
      l = "cart_view";
      break;
    case "checkout":
      if (Bizweb.Checkout)
        switch (n.getParamValue("step", location.search)) {
          case "contact_information":
            l = "checkout_contact_view";
            break;
          case "shipping_method":
            l = "checkout_shipping_view";
            break;
          case "payment_method":
            l = "checkout_payment_view";
            break;
          default:
            l = "checkout_all_view";
        }
      break;
    case "thankyou":
      Bizweb.checkout && (l = "thank_you_view");
      break;
    default:
      l = "page_view";
  }
  sessionStorage.setItem("active", "active");
  switch (l) {
    case "page_view":
    case "cart_view":
    case "checkout_contact_view":
    case "checkout_shipping_view":
    case "checkout_payment_view":
    case "checkout_all_view":
    case "collection_view":
      rt();
      break;
    case "product_view":
      ut();
      break;
    case "product_view_from_search":
      ot();
      break;
    case "thank_you_view":
      st();
  }
  g.prototype.onReadyStateChange = function () {
    this.xhr.readyState === XMLHttpRequest.DONE &&
      this.handleXhrDone({
        method: this.method,
        url: this.url,
        body: this.body,
        xhr: this.xhr,
      });
    this.oldOnReadyStateChange && this.oldOnReadyStateChange(this.xhr);
  };
  g.prototype.handleXhrDone = function (l) {
    try {
      switch (l.url) {
        case "/cart/add.js":
          l.xhr.responseText &&
            (n.postData(
              b,
              {
                session_type: "add_to_cart",
                active_session: !0,
                store_id: f,
                session_id: s,
                visitor_id: h,
                reference_site: e,
                origin_reference_site: o,
                current_site: c,
                landing_type: i,
                landing_page: r,
                landing_full_page: t,
                from_product_view: k,
              },
              a,
              u
            ),
            n.postData(
              v,
              {
                store_id: f,
                session_id: s,
                visitor_id: h,
                variant_id: n.getParamValue("variantId", l.body),
                action: "add_to_cart",
                reference_site: e,
                origin_reference_site: o,
                current_site: c,
                landing_type: i,
                landing_page: r,
                landing_full_page: t,
              },
              a,
              u
            ),
            new URL(location.href).pathname === "/search" &&
              n.postData(
                v,
                {
                  store_id: f,
                  session_id: s,
                  visitor_id: h,
                  variant_id: n.getParamValue("variantId", l.body),
                  action: "search",
                  reference_site: e,
                  origin_reference_site: o,
                  current_site: c,
                  landing_type: i,
                  landing_page: r,
                  landing_full_page: t,
                },
                a,
                u
              ));
          break;
        case "/cart/change.js":
          n.getParamValue("quantity", l.body) === "0" &&
            n.postData(
              v,
              {
                store_id: f,
                session_id: s,
                visitor_id: h,
                variant_id: n.getParamValue("variantId", l.body),
                action: "remove_from_cart",
                reference_site: e,
                origin_reference_site: o,
                current_site: c,
                landing_type: i,
                landing_page: r,
                landing_full_page: t,
              },
              a,
              u
            );
      }
    } catch (y) {
      console.log(y.message);
    }
    return l;
  };
  ft = XMLHttpRequest.prototype.open;
  et = XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.open = function (n, t) {
    return (this._url = t), (this._method = n), ft.apply(this, arguments);
  };
  XMLHttpRequest.prototype.send = function (n) {
    var t = new g(this, this._url, this._method, n);
    return (
      this.addEventListener
        ? this.addEventListener(
            "readystatechange",
            t.onReadyStateChange.bind(t),
            !1
          )
        : ((t.oldOnReadyStateChange = this.onreadystatechange),
          (this.onreadystatechange = t.onReadyStateChange)),
      et.call(this, n)
    );
  };
  nt = window.fetch;
  "function" == typeof nt &&
    (window.fetch = function () {
      return nt
        .apply(window, Array.prototype.slice.call(arguments))
        .then(function (l) {
          if (!l.ok) return l;
          try {
            switch (data.url) {
              case "/cart/add.js":
                n.postData(
                  b,
                  {
                    session_type: "add_to_cart",
                    active_session: !0,
                    store_id: f,
                    session_id: s,
                    visitor_id: h,
                    reference_site: e,
                    origin_reference_site: o,
                    current_site: c,
                    landing_type: i,
                    landing_page: r,
                    landing_full_page: t,
                    from_product_view: k,
                  },
                  a,
                  u
                );
                n.postData(
                  v,
                  {
                    store_id: f,
                    session_id: s,
                    visitor_id: h,
                    variant_id: n.getParamValue("variantId", data.body),
                    action: "add_to_cart",
                    reference_site: e,
                    origin_reference_site: o,
                    current_site: c,
                    landing_type: i,
                    landing_page: r,
                    landing_full_page: t,
                  },
                  a,
                  u
                );
                new URL(location.href).pathname === "/search" &&
                  n.postData(
                    v,
                    {
                      store_id: f,
                      session_id: s,
                      visitor_id: h,
                      variant_id: n.getParamValue("variantId", data.body),
                      action: "search",
                      reference_site: e,
                      origin_reference_site: o,
                      current_site: c,
                      landing_type: i,
                      landing_page: r,
                      landing_full_page: t,
                    },
                    a,
                    u
                  );
                break;
              case "/cart/change.js":
                n.getParamValue("quantity", query) === "0" &&
                  n.postData(
                    v,
                    {
                      store_id: f,
                      session_id: s,
                      visitor_id: h,
                      variant_id: n.getParamValue("variantId", data.body),
                      action: "remove_from_cart",
                      reference_site: e,
                      origin_reference_site: o,
                      current_site: c,
                      landing_type: i,
                      landing_page: r,
                      landing_full_page: t,
                    },
                    a,
                    u
                  );
            }
          } catch (y) {
            console.log(y.message);
          }
          return l;
        });
    });
})();
