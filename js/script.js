"use strict";
var opening = function() {
    $(window).delay(100).queue(function() {
        $("#page").addClass("is-act"),
        $(".js-opening").addClass("is-view")
    })
}
  , slick = function() {
    $(".js-slick_training").slick({
        dots: !0,
        responsive: [{
            breakpoint: 767,
            settings: {}
        }]
    }),
    window.matchMedia("(max-width:767px)").matches && $(".p-index_feature__list").slick({
        dots: !0
    })
}
  , modal = function() {
    $(".js-modal").modaal({
        background: "#fff",
        overlay_opacity: .95
    }),
    $(".modal_close").click(function() {
        $(".js-modal").modaal("close")
    })
}
  , drawer = function() {
    $(".js-menu").on("click", function(a) {
        var n = $(a.currentTarget);
        n.find(".bar").toggleClass("hidden"),
        n.toggleClass("is-act"),
        $(".js-navi").stop(!0, !0).fadeToggle(500)
    }),
    $(".js-navi").find("a").not(".entry").on("click", function(a) {
        $(".js-navi").fadeOut(500),
        $(".js-menu").find(".bar").removeClass("hidden"),
        $(".js-menu").removeClass("is-act")
    })
}
  , entryBtn = function() {
    $(window).on("scroll", function(a) {
        150 < $(a.currentTarget).scrollTop() ? ($(".l-header").addClass("is-fixed"),
        $(".c-entry").addClass("is-fixed")) : ($(".l-header").removeClass("is-fixed"),
        $(".c-entry").removeClass("is-fixed"))
    })
}
  , pallarax = function() {
    var d = $(window).scrollTop()
      , l = $(window).height();
    $(".animation").each(function(a, n) {
        var i = $(n)
          , e = i.offset()
          , o = parseInt(.6 * l);
        if (d + o > e.top)
            for (var t = 0; t < i.find(".anim_elm").length; t++) {
                var s = i.find(".anim_elm").eq(t);
                anim(s, t)
            }
    })
}
  , anim = function(n, a) {
    var i = n.data("delay") ? parseInt(n.data("delay")) : 200
      , e = n.data("ease") ? n.data("ease") : "easing";
    n.delay(i * a).queue(function(a) {
        n.addClass(e).addClass("is-act"),
        a()
    })
};
!function(a) {
    a(function() {
        slick(),
        modal(),
        entryBtn(),
        window.matchMedia("(max-width:767px)").matches && drawer()
    }),
    a(window).on("load", function() {
        opening()
    }),
    a(window).on("load resize", function() {
        a(".p-index_training__card").tile(),
        window.matchMedia("(min-width:767px)").matches ? a(".p-index_feature__box").tile(3) : a(".p-index_feature__box").tile()
    }),
    a(window).on("scroll", function() {
        pallarax()
    })
}(jQuery);
"use strict";
jQuery.easing.jswing = jQuery.easing.swing,
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(e, n, t, i, u) {
        return jQuery.easing[jQuery.easing.def](e, n, t, i, u)
    },
    easeInQuad: function(e, n, t, i, u) {
        return i * (n /= u) * n + t
    },
    easeOutQuad: function(e, n, t, i, u) {
        return -i * (n /= u) * (n - 2) + t
    },
    easeInOutQuad: function(e, n, t, i, u) {
        return (n /= u / 2) < 1 ? i / 2 * n * n + t : -i / 2 * (--n * (n - 2) - 1) + t
    },
    easeInCubic: function(e, n, t, i, u) {
        return i * (n /= u) * n * n + t
    },
    easeOutCubic: function(e, n, t, i, u) {
        return i * ((n = n / u - 1) * n * n + 1) + t
    },
    easeInOutCubic: function(e, n, t, i, u) {
        return (n /= u / 2) < 1 ? i / 2 * n * n * n + t : i / 2 * ((n -= 2) * n * n + 2) + t
    },
    easeInQuart: function(e, n, t, i, u) {
        return i * (n /= u) * n * n * n + t
    },
    easeOutQuart: function(e, n, t, i, u) {
        return -i * ((n = n / u - 1) * n * n * n - 1) + t
    },
    easeInOutQuart: function(e, n, t, i, u) {
        return (n /= u / 2) < 1 ? i / 2 * n * n * n * n + t : -i / 2 * ((n -= 2) * n * n * n - 2) + t
    },
    easeInQuint: function(e, n, t, i, u) {
        return i * (n /= u) * n * n * n * n + t
    },
    easeOutQuint: function(e, n, t, i, u) {
        return i * ((n = n / u - 1) * n * n * n * n + 1) + t
    },
    easeInOutQuint: function(e, n, t, i, u) {
        return (n /= u / 2) < 1 ? i / 2 * n * n * n * n * n + t : i / 2 * ((n -= 2) * n * n * n * n + 2) + t
    },
    easeInSine: function(e, n, t, i, u) {
        return -i * Math.cos(n / u * (Math.PI / 2)) + i + t
    },
    easeOutSine: function(e, n, t, i, u) {
        return i * Math.sin(n / u * (Math.PI / 2)) + t
    },
    easeInOutSine: function(e, n, t, i, u) {
        return -i / 2 * (Math.cos(Math.PI * n / u) - 1) + t
    },
    easeInExpo: function(e, n, t, i, u) {
        return 0 == n ? t : i * Math.pow(2, 10 * (n / u - 1)) + t
    },
    easeOutExpo: function(e, n, t, i, u) {
        return n == u ? t + i : i * (1 - Math.pow(2, -10 * n / u)) + t
    },
    easeInOutExpo: function(e, n, t, i, u) {
        return 0 == n ? t : n == u ? t + i : (n /= u / 2) < 1 ? i / 2 * Math.pow(2, 10 * (n - 1)) + t : i / 2 * (2 - Math.pow(2, -10 * --n)) + t
    },
    easeInCirc: function(e, n, t, i, u) {
        return -i * (Math.sqrt(1 - (n /= u) * n) - 1) + t
    },
    easeOutCirc: function(e, n, t, i, u) {
        return i * Math.sqrt(1 - (n = n / u - 1) * n) + t
    },
    easeInOutCirc: function(e, n, t, i, u) {
        return (n /= u / 2) < 1 ? -i / 2 * (Math.sqrt(1 - n * n) - 1) + t : i / 2 * (Math.sqrt(1 - (n -= 2) * n) + 1) + t
    },
    easeInElastic: function(e, n, t, i, u) {
        var r = 1.70158
          , a = 0
          , o = i;
        if (0 == n)
            return t;
        if (1 == (n /= u))
            return t + i;
        if (a = a || .3 * u,
        o < Math.abs(i)) {
            o = i;
            r = a / 4
        } else
            r = a / (2 * Math.PI) * Math.asin(i / o);
        return -(o * Math.pow(2, 10 * --n) * Math.sin(2 * (n * u - r) * Math.PI / a)) + t
    },
    easeOutElastic: function(e, n, t, i, u) {
        var r = 1.70158
          , a = 0
          , o = i;
        if (0 == n)
            return t;
        if (1 == (n /= u))
            return t + i;
        if (a = a || .3 * u,
        o < Math.abs(i)) {
            o = i;
            r = a / 4
        } else
            r = a / (2 * Math.PI) * Math.asin(i / o);
        return o * Math.pow(2, -10 * n) * Math.sin(2 * (n * u - r) * Math.PI / a) + i + t
    },
    easeInOutElastic: function(e, n, t, i, u) {
        var r = 1.70158
          , a = 0
          , o = i;
        if (0 == n)
            return t;
        if (2 == (n /= u / 2))
            return t + i;
        if (a = a || .3 * u * 1.5,
        o < Math.abs(i)) {
            o = i;
            r = a / 4
        } else
            r = a / (2 * Math.PI) * Math.asin(i / o);
        return n < 1 ? -.5 * o * Math.pow(2, 10 * --n) * Math.sin(2 * (n * u - r) * Math.PI / a) + t : o * Math.pow(2, -10 * --n) * Math.sin(2 * (n * u - r) * Math.PI / a) * .5 + i + t
    },
    easeInBack: function(e, n, t, i, u, r) {
        return null == r && (r = 1.70158),
        i * (n /= u) * n * ((r + 1) * n - r) + t
    },
    easeOutBack: function(e, n, t, i, u, r) {
        return null == r && (r = 1.70158),
        i * ((n = n / u - 1) * n * ((r + 1) * n + r) + 1) + t
    },
    easeInOutBack: function(e, n, t, i, u, r) {
        return null == r && (r = 1.70158),
        (n /= u / 2) < 1 ? i / 2 * n * n * ((1 + (r *= 1.525)) * n - r) + t : i / 2 * ((n -= 2) * n * ((1 + (r *= 1.525)) * n + r) + 2) + t
    },
    easeInBounce: function(e, n, t, i, u) {
        return i - jQuery.easing.easeOutBounce(e, u - n, 0, i, u) + t
    },
    easeOutBounce: function(e, n, t, i, u) {
        return (n /= u) < 1 / 2.75 ? 7.5625 * i * n * n + t : n < 2 / 2.75 ? i * (7.5625 * (n -= 1.5 / 2.75) * n + .75) + t : n < 2.5 / 2.75 ? i * (7.5625 * (n -= 2.25 / 2.75) * n + .9375) + t : i * (7.5625 * (n -= 2.625 / 2.75) * n + .984375) + t
    },
    easeInOutBounce: function(e, n, t, i, u) {
        return n < u / 2 ? .5 * jQuery.easing.easeInBounce(e, 2 * n, 0, i, u) + t : .5 * jQuery.easing.easeOutBounce(e, 2 * n - u, 0, i, u) + .5 * i + t
    }
}),
function(o) {
    o.fn.tile = function(n) {
        var t, i, u, r, e, a = this.length - 1;
        return n = n || this.length,
        this.each(function() {
            (e = this.style).removeProperty && e.removeProperty("height"),
            e.removeAttribute && e.removeAttribute("height")
        }),
        this.each(function(e) {
            0 == (u = e % n) && (t = []),
            t[u] = o(this),
            r = t[u].height(),
            (0 == u || i < r) && (i = r),
            e != a && u != n - 1 || o.each(t, function() {
                this.height(i)
            })
        })
    }
}(jQuery);
var _ua = function(e) {
    return {
        ltIE6: void 0 === window.addEventListener && void 0 === document.documentElement.style.maxHeight,
        ltIE7: void 0 === window.addEventListener && void 0 === document.querySelectorAll,
        ltIE8: void 0 === window.addEventListener && void 0 === document.getElementsByClassName,
        Tablet: -1 != e.indexOf("windows") && -1 != e.indexOf("touch") && -1 == e.indexOf("tablet pc") || -1 != e.indexOf("ipad") || -1 != e.indexOf("android") && -1 == e.indexOf("mobile") || -1 != e.indexOf("firefox") && -1 != e.indexOf("tablet") || -1 != e.indexOf("kindle") || -1 != e.indexOf("silk") || -1 != e.indexOf("playbook"),
        Mobile: -1 != e.indexOf("windows") && -1 != e.indexOf("phone") || -1 != e.indexOf("iphone") || -1 != e.indexOf("ipod") || -1 != e.indexOf("android") && -1 != e.indexOf("mobile") || -1 != e.indexOf("firefox") && -1 != e.indexOf("mobile") || -1 != e.indexOf("blackberry")
    }
}(window.navigator.userAgent.toLowerCase());
!function(i) {
    i(function() {
        e(),
        n(),
        t(),
        u(),
        r(),
        a("width=1040"),
        i(window).on("load resize", function() {}),
        i(window).scroll(function() {})
    });
    var e = function() {
        _ua.Tablet || _ua.Mobile || i(".js-hover").on({
            mouseenter: function(e) {
                i(e.currentTarget).addClass("is-hover")
            },
            mouseleave: function(e) {
                i(e.currentTarget).removeClass("is-hover")
            }
        })
    }
      , n = function() {
        i(".hover").on({
            mouseenter: function(e) {
                i(e.currentTarget).stop(!0, !0).fadeTo(200, .75)
            },
            mouseleave: function(e) {
                i(e.currentTarget).stop(!0, !0).fadeTo(200, 1)
            }
        })
    }
      , t = function() {
        var n = i(".pagetop");
        n.hide(),
        i(window).on("scroll", function(e) {
            100 < i(e.currentTarget).scrollTop() ? n.fadeIn() : n.fadeOut()
        }),
        n.on("click", function(e) {
            return i("body,html").animate({
                scrollTop: 0
            }, 500),
            !1
        })
    }
      , u = function() {
        i('a[href^="#"]').not(".js-modal").on("click", function(e) {
            var n = i(e.currentTarget).attr("href")
              , t = i("#" == n || "" == n ? "html" : n).offset().top;
            return i("body,html").animate({
                scrollTop: t
            }, 400, "swing"),
            !1
        })
    }
      , r = function() {
        _ua.Mobile && i("span[data-action=call]").each(function(e, n) {
            var t = i(n);
            t.wrap('<a href="tel:' + t.data("tel") + '"></a>')
        })
    }
      , a = function(e) {
        _ua.Tablet && i('meta[name="viewport"]').attr("content", e)
    }
}(jQuery);
"use strict";
!function(l) {
    l.fn.inertiaScroll = function(t) {
        function h(t, i, e, o) {
            this.elm = t,
            this.offset = void 0 !== i ? i : 0,
            this.speed = void 0 !== e ? e : 1,
            this.margin = void 0 !== o ? o : 0
        }
        var e = l.extend({
            parent: "",
            childDelta1: .02,
            childDelta2: .1,
            parentDelta: .08
        }, t)
          , o = l(window)
          , i = l("body")
          , s = e.parent
          , n = this;
        h.prototype.update = function(t, i) {
            this.offset += (t * e.childDelta1 * Number(this.speed) - this.offset) * e.childDelta2,
            this.elm.css({
                transform: "translate3d(0," + (Number(this.margin) - Number(this.offset)) + "px ,0)"
            })
        }
        ;
        function r(t, i, e, o) {
            h.apply(this, arguments)
        }
        (r.prototype = Object.create(h.prototype, {
            constructor: {
                value: r
            }
        })).update = function(t) {
            this.offset += (t - this.offset) * e.parentDelta,
            this.elm.css({
                transform: "translate3d(0," + -this.offset + "px ,0)"
            })
        }
        ,
        r.prototype.setcss = function() {
            this.elm.css({
                width: "100%",
                position: "fixed"
            })
        }
        ;
        function a() {
            this.ChildBox = [],
            this.ChildBoxLength = 0,
            this.ParentBox = "",
            this.windowHeight = 0
        }
        return a.prototype = {
            init: function() {
                this.createElm(n, s),
                this.loop()
            },
            createElm: function(t, i) {
                this.ParentBox = new r(i,0,1),
                this.ParentBox.setcss(),
                this.boxArrayLength = t.length;
                for (var e = 0; e < this.boxArrayLength; e++) {
                    var o = t.eq(e)
                      , s = o.data("speed")
                      , n = o.data("margin");
                    this.ChildBox.push(new h(o,0,s,n))
                }
            },
            smoothScroll: function() {
                var t = o.scrollTop()
                  , i = t + this.windowHeight;
                this.ParentBox.update(t);
                for (var e = 0; e < this.boxArrayLength; e++)
                    this.ChildBox[e].update(t, i)
            },
            loop: function() {
                this.smoothScroll(),
                window.requestAnimationFrame(this.loop.bind(this))
            }
        },
        l(function() {
            i.height(s.height()),
            (new a).init()
        }),
        this
    }
}(jQuery);
"use strict";
!function(u) {
    var i = {
        init: function(a, t) {
            var o = this;
            if (o.dom = u("body"),
            o.$elem = u(t),
            o.options = u.extend({}, u.fn.modaal.options, o.$elem.data(), a),
            o.xhr = null,
            o.scope = {
                is_open: !1,
                id: "modaal_" + (new Date).getTime() + Math.random().toString(16).substring(2),
                source: o.options.content_source ? o.options.content_source : o.$elem.attr("href")
            },
            o.$elem.attr("data-modaal-scope", o.scope.id),
            o.private_options = {
                active_class: "is_active"
            },
            o.lastFocus = null,
            o.options.is_locked || "confirm" == o.options.type || o.options.hide_close ? o.scope.close_btn = "" : o.scope.close_btn = '<button type="button" class="modaal-close" id="modaal-close" aria-label="' + o.options.close_aria_label + '"><span>' + o.options.close_text + "</span></button>",
            "none" === o.options.animation && (o.options.animation_speed = 0,
            o.options.after_callback_delay = 0),
            u(t).on("click.Modaal", function(a) {
                a.preventDefault(),
                o.create_modaal(o, a)
            }),
            !0 === o.options.outer_controls)
                var e = "outer";
            else
                e = "inner";
            o.scope.prev_btn = '<button type="button" class="modaal-gallery-control modaal-gallery-prev modaal-gallery-prev-' + e + '" id="modaal-gallery-prev" aria-label="Previous image (use left arrow to change)"><span>Previous Image</span></button>',
            o.scope.next_btn = '<button type="button" class="modaal-gallery-control modaal-gallery-next modaal-gallery-next-' + e + '" id="modaal-gallery-next" aria-label="Next image (use right arrow to change)"><span>Next Image</span></button>',
            !0 === o.options.start_open && o.create_modaal(o)
        },
        create_modaal: function(a, t) {
            var o;
            if ((a = this).lastFocus = a.$elem,
            !1 !== a.options.should_open && ("function" != typeof a.options.should_open || !1 !== a.options.should_open())) {
                switch (a.options.before_open.call(a, t),
                a.options.type) {
                case "inline":
                    a.create_basic();
                    break;
                case "ajax":
                    o = a.options.source(a.$elem, a.scope.source),
                    a.fetch_ajax(o);
                    break;
                case "confirm":
                    a.options.is_locked = !0,
                    a.create_confirm();
                    break;
                case "image":
                    a.create_image();
                    break;
                case "iframe":
                    o = a.options.source(a.$elem, a.scope.source),
                    a.create_iframe(o);
                    break;
                case "video":
                    a.create_video(a.scope.source);
                    break;
                case "instagram":
                    a.create_instagram()
                }
                a.watch_events()
            }
        },
        watch_events: function() {
            var e = this;
            e.dom.off("click.Modaal keyup.Modaal keydown.Modaal"),
            e.dom.on("keydown.Modaal", function(a) {
                var t = a.keyCode
                  , o = a.target;
                9 == t && e.scope.is_open && (u.contains(document.getElementById(e.scope.id), o) || u("#" + e.scope.id).find('*[tabindex="0"]').focus())
            }),
            e.dom.on("keyup.Modaal", function(a) {
                var t = a.keyCode
                  , o = a.target;
                return a.shiftKey && 9 == a.keyCode && e.scope.is_open && (u.contains(document.getElementById(e.scope.id), o) || u("#" + e.scope.id).find(".modaal-close").focus()),
                !e.options.is_locked && 27 == t && e.scope.is_open ? !u(document.activeElement).is("input:not(:checkbox):not(:radio)") && void e.modaal_close() : "image" == e.options.type ? (37 == t && e.scope.is_open && !u("#" + e.scope.id + " .modaal-gallery-prev").hasClass("is_hidden") && e.gallery_update("prev"),
                void (39 == t && e.scope.is_open && !u("#" + e.scope.id + " .modaal-gallery-next").hasClass("is_hidden") && e.gallery_update("next"))) : void 0
            }),
            e.dom.on("click.Modaal", function(a) {
                var t = u(a.target);
                if (e.options.is_locked || !(e.options.overlay_close && t.is(".modaal-inner-wrapper") || t.is(".modaal-close") || t.closest(".modaal-close").length)) {
                    if (t.is(".modaal-confirm-btn"))
                        return t.is(".modaal-ok") && e.options.confirm_callback.call(e, e.lastFocus),
                        t.is(".modaal-cancel") && e.options.confirm_cancel_callback.call(e, e.lastFocus),
                        void e.modaal_close();
                    if (t.is(".modaal-gallery-control")) {
                        if (t.hasClass("is_hidden"))
                            return;
                        return t.is(".modaal-gallery-prev") && e.gallery_update("prev"),
                        void (t.is(".modaal-gallery-next") && e.gallery_update("next"))
                    }
                } else
                    e.modaal_close()
            })
        },
        build_modal: function(a) {
            var t = this
              , o = "";
            "instagram" == t.options.type && (o = " modaal-instagram");
            var e, i = "video" == t.options.type ? "modaal-video-wrap" : "modaal-content";
            switch (t.options.animation) {
            case "fade":
                e = " modaal-start_fade";
                break;
            case "slide-down":
                e = " modaal-start_slidedown";
                break;
            default:
                e = " modaal-start_none"
            }
            var l = "";
            t.options.fullscreen && (l = " modaal-fullscreen"),
            "" === t.options.custom_class && void 0 === t.options.custom_class || (t.options.custom_class = " " + t.options.custom_class);
            var n = "";
            t.options.width && t.options.height && "number" == typeof t.options.width && "number" == typeof t.options.height ? n = ' style="max-width:' + t.options.width + "px;height:" + t.options.height + 'px;overflow:auto;"' : t.options.width && "number" == typeof t.options.width ? n = ' style="max-width:' + t.options.width + 'px;"' : t.options.height && "number" == typeof t.options.height && (n = ' style="height:' + t.options.height + 'px;overflow:auto;"'),
            "image" != t.options.type && "video" != t.options.type && "instagram" != t.options.type && !t.options.fullscreen || (n = "");
            var s = "";
            t.is_touch() && (s = ' style="cursor:pointer;"');
            var d = '<div class="modaal-wrapper modaal-' + t.options.type + e + o + l + t.options.custom_class + '" id="' + t.scope.id + '"><div class="modaal-outer-wrapper"><div class="modaal-inner-wrapper"' + s + ">";
            "video" != t.options.type && (d += '<div class="modaal-container"' + n + ">"),
            d += '<div class="' + i + ' modaal-focus" aria-hidden="false" aria-label="' + t.options.accessible_title + " - " + t.options.close_aria_label + '" role="dialog">',
            "inline" == t.options.type ? d += '<div class="modaal-content-container" role="document"></div>' : d += a,
            d += "</div>" + t.scope.close_btn,
            "video" != t.options.type && (d += "</div>"),
            d += "</div>",
            "image" == t.options.type && !0 === t.options.outer_controls && (d += t.scope.prev_btn + t.scope.next_btn),
            d += "</div></div>",
            u("#" + t.scope.id + "_overlay").length < 1 && t.dom.append(d),
            "inline" == t.options.type && a.appendTo("#" + t.scope.id + " .modaal-content-container"),
            t.modaal_overlay("show")
        },
        create_basic: function() {
            var a = u(this.scope.source)
              , t = "";
            a.length ? (t = a.contents().detach(),
            a.empty()) : t = "Content could not be loaded. Please check the source and try again.",
            this.build_modal(t)
        },
        create_instagram: function() {
            var o = this
              , a = o.options.instagram_id
              , t = ""
              , e = "Instagram photo couldn't be loaded, please check the embed code and try again.";
            if (o.build_modal('<div class="modaal-content-container' + ("" != o.options.loading_class ? " " + o.options.loading_class : "") + '">' + o.options.loading_content + "</div>"),
            "" != a && null != a) {
                var i = "https://api.instagram.com/oembed?url=http://instagr.am/p/" + a + "/";
                u.ajax({
                    url: i,
                    dataType: "jsonp",
                    cache: !1,
                    success: function(a) {
                        o.dom.append('<div id="temp-ig" style="width:0;height:0;overflow:hidden;">' + a.html + "</div>"),
                        o.dom.attr("data-igloaded") ? window.instgrm.Embeds.process() : o.dom.attr("data-igloaded", "true");
                        var t = "#" + o.scope.id + " .modaal-content-container";
                        0 < u(t).length && setTimeout(function() {
                            u("#temp-ig").contents().clone().appendTo(t),
                            u("#temp-ig").remove()
                        }, 1e3)
                    },
                    error: function() {
                        t = e;
                        var a = u("#" + o.scope.id + " .modaal-content-container");
                        0 < a.length && (a.removeClass(o.options.loading_class).addClass(o.options.ajax_error_class),
                        a.html(t))
                    }
                })
            } else
                t = e;
            return !1
        },
        fetch_ajax: function(a) {
            var o = this;
            null == o.options.accessible_title && (o.options.accessible_title = "Dialog Window"),
            null !== o.xhr && (o.xhr.abort(),
            o.xhr = null),
            o.build_modal('<div class="modaal-content-container' + ("" != o.options.loading_class ? " " + o.options.loading_class : "") + '">' + o.options.loading_content + "</div>"),
            o.xhr = u.ajax(a, {
                success: function(a) {
                    var t = u("#" + o.scope.id).find(".modaal-content-container");
                    0 < t.length && (t.removeClass(o.options.loading_class),
                    t.html(a),
                    o.options.ajax_success.call(o, t))
                },
                error: function(a) {
                    if ("abort" != a.statusText) {
                        var t = u("#" + o.scope.id + " .modaal-content-container");
                        0 < t.length && (t.removeClass(o.options.loading_class).addClass(o.options.ajax_error_class),
                        t.html("Content could not be loaded. Please check the source and try again."))
                    }
                }
            })
        },
        create_confirm: function() {
            var a, t = this;
            a = '<div class="modaal-content-container"><h1 id="modaal-title">' + t.options.confirm_title + '</h1><div class="modaal-confirm-content">' + t.options.confirm_content + '</div><div class="modaal-confirm-wrap"><button type="button" class="modaal-confirm-btn modaal-ok" aria-label="Confirm">' + t.options.confirm_button_text + '</button><button type="button" class="modaal-confirm-btn modaal-cancel" aria-label="Cancel">' + t.options.confirm_cancel_button_text + "</button></div></div></div>",
            t.build_modal(a)
        },
        create_image: function() {
            var a, t = this, o = "";
            if (t.$elem.is("[data-group]") || t.$elem.is("[rel]")) {
                var e = t.$elem.is("[data-group]")
                  , i = e ? t.$elem.attr("data-group") : t.$elem.attr("rel")
                  , l = u(e ? '[data-group="' + i + '"]' : '[rel="' + i + '"]');
                l.removeAttr("data-gallery-active", "is_active"),
                t.$elem.attr("data-gallery-active", "is_active"),
                a = l.length - 1;
                var c = [];
                o = '<div class="modaal-gallery-item-wrap">',
                l.each(function(a, t) {
                    var o = ""
                      , e = ""
                      , i = ""
                      , l = !1
                      , n = !1
                      , s = t.getAttribute("data-modaal-desc")
                      , d = t.getAttribute("data-gallery-active");
                    u(t).attr("data-modaal-content-source") ? o = u(t).attr("data-modaal-content-source") : u(t).attr("href") ? o = u(t).attr("href") : u(t).attr("src") ? o = u(t).attr("src") : (o = "trigger requires href or data-modaal-content-source attribute",
                    n = !0),
                    i = "" != s && null != s ? '<div class="modaal-gallery-label"><span class="modaal-accessible-hide">Image ' + (a + 1) + " - </span>" + (e = s).replace(/</g, "&lt;").replace(/>/g, "&gt;") + "</div>" : '<div class="modaal-gallery-label"><span class="modaal-accessible-hide">Image ' + (a + 1) + "</span></div>",
                    d && (l = !0);
                    var r = {
                        url: o,
                        alt: e,
                        rawdesc: s,
                        desc: i,
                        active: l,
                        src_error: n
                    };
                    c.push(r)
                });
                for (var n = 0; n < c.length; n++) {
                    var s = ""
                      , d = c[n].rawdesc ? "Image: " + c[n].rawdesc : "Image " + n + " no description";
                    c[n].active && (s = " " + t.private_options.active_class),
                    o += '<div class="modaal-gallery-item gallery-item-' + n + s + '" aria-label="' + d + '">' + (c[n].src_error ? c[n].url : '<img src="' + c[n].url + '" alt=" " style="width:100%">') + c[n].desc + "</div>"
                }
                o += "</div>",
                1 != t.options.outer_controls && (o += t.scope.prev_btn + t.scope.next_btn)
            } else {
                var r, m = !1;
                t.$elem.attr("data-modaal-content-source") ? r = t.$elem.attr("data-modaal-content-source") : t.$elem.attr("href") ? r = t.$elem.attr("href") : t.$elem.attr("src") ? r = t.$elem.attr("src") : (r = "trigger requires href or data-modaal-content-source attribute",
                m = !0);
                var p = "";
                d = "";
                t.$elem.attr("data-modaal-desc") ? (d = t.$elem.attr("data-modaal-desc"),
                p = '<div class="modaal-gallery-label"><span class="modaal-accessible-hide">Image - </span>' + t.$elem.attr("data-modaal-desc").replace(/</g, "&lt;").replace(/>/g, "&gt;") + "</div>") : d = "Image with no description",
                o = '<div class="modaal-gallery-item is_active" aria-label="' + d + '">' + (m ? r : '<img src="' + r + '" alt=" " style="width:100%">') + p + "</div>"
            }
            t.build_modal(o),
            u(".modaal-gallery-item.is_active").is(".gallery-item-0") && u(".modaal-gallery-prev").hide(),
            u(".modaal-gallery-item.is_active").is(".gallery-item-" + a) && u(".modaal-gallery-next").hide()
        },
        gallery_update: function(a) {
            var i = this
              , l = u("#" + i.scope.id)
              , n = l.find(".modaal-gallery-item").length - 1;
            if (0 == n)
                return !1;
            var s = l.find(".modaal-gallery-prev")
              , d = l.find(".modaal-gallery-next")
              , r = 0
              , c = 0
              , m = l.find(".modaal-gallery-item." + i.private_options.active_class)
              , p = "next" == a ? m.next(".modaal-gallery-item") : m.prev(".modaal-gallery-item");
            return i.options.before_image_change.call(i, m, p),
            ("prev" != a || !l.find(".gallery-item-0").hasClass("is_active")) && (("next" != a || !l.find(".gallery-item-" + n).hasClass("is_active")) && void m.stop().animate({
                opacity: 0
            }, 250, function() {
                p.addClass("is_next").css({
                    position: "absolute",
                    display: "block",
                    opacity: 0
                });
                var a = u(document).width()
                  , t = 1140 < a ? 280 : 50;
                r = l.find(".modaal-gallery-item.is_next").width(),
                c = l.find(".modaal-gallery-item.is_next").height();
                var o = l.find(".modaal-gallery-item.is_next img").prop("naturalWidth")
                  , e = l.find(".modaal-gallery-item.is_next img").prop("naturalHeight");
                c = a - t < o ? (r = a - t,
                l.find(".modaal-gallery-item.is_next").css({
                    width: r
                }),
                l.find(".modaal-gallery-item.is_next img").css({
                    width: r
                }),
                l.find(".modaal-gallery-item.is_next").find("img").height()) : (r = o,
                e),
                l.find(".modaal-gallery-item-wrap").stop().animate({
                    width: r,
                    height: c
                }, 250, function() {
                    m.removeClass(i.private_options.active_class + " " + i.options.gallery_active_class).removeAttr("style"),
                    m.find("img").removeAttr("style"),
                    p.addClass(i.private_options.active_class + " " + i.options.gallery_active_class).removeClass("is_next").css("position", ""),
                    p.stop().animate({
                        opacity: 1
                    }, 250, function() {
                        u(this).removeAttr("style").css({
                            width: "100%"
                        }),
                        u(this).find("img").css("width", "100%"),
                        l.find(".modaal-gallery-item-wrap").removeAttr("style"),
                        i.options.after_image_change.call(i, p)
                    }),
                    l.find(".modaal-gallery-item").removeAttr("tabindex"),
                    l.find(".modaal-gallery-item." + i.private_options.active_class).attr("tabindex", "0").focus(),
                    l.find(".modaal-gallery-item." + i.private_options.active_class).is(".gallery-item-0") ? s.stop().animate({
                        opacity: 0
                    }, 150, function() {
                        u(this).hide()
                    }) : s.stop().css({
                        display: "block",
                        opacity: s.css("opacity")
                    }).animate({
                        opacity: 1
                    }, 150),
                    l.find(".modaal-gallery-item." + i.private_options.active_class).is(".gallery-item-" + n) ? d.stop().animate({
                        opacity: 0
                    }, 150, function() {
                        u(this).hide()
                    }) : d.stop().css({
                        display: "block",
                        opacity: s.css("opacity")
                    }).animate({
                        opacity: 1
                    }, 150)
                })
            }))
        },
        create_video: function(a) {
            var t;
            t = '<iframe src="' + a + '" class="modaal-video-frame" frameborder="0" allowfullscreen></iframe>',
            this.build_modal('<div class="modaal-video-container">' + t + "</div>")
        },
        create_iframe: function(a) {
            var t, o = this;
            t = null !== o.options.width || void 0 !== o.options.width || null !== o.options.height || void 0 !== o.options.height ? '<iframe src="' + a + '" class="modaal-iframe-elem" frameborder="0" allowfullscreen></iframe>' : '<div class="modaal-content-container">Please specify a width and height for your iframe</div>',
            o.build_modal(t)
        },
        modaal_open: function() {
            var a = this
              , t = u("#" + a.scope.id)
              , o = a.options.animation;
            "none" === o && (t.removeClass("modaal-start_none"),
            a.options.after_open.call(a, t)),
            "fade" === o && t.removeClass("modaal-start_fade"),
            "slide-down" === o && t.removeClass("modaal-start_slide_down");
            u(".modaal-wrapper *[tabindex=0]").removeAttr("tabindex"),
            ("image" == a.options.type ? u("#" + a.scope.id).find(".modaal-gallery-item." + a.private_options.active_class) : t.find(".modaal-iframe-elem").length ? t.find(".modaal-iframe-elem") : t.find(".modaal-video-wrap").length ? t.find(".modaal-video-wrap") : t.find(".modaal-focus")).attr("tabindex", "0").focus(),
            "none" !== o && setTimeout(function() {
                a.options.after_open.call(a, t)
            }, a.options.after_callback_delay)
        },
        modaal_close: function() {
            var a = this
              , t = u("#" + a.scope.id);
            a.options.before_close.call(a, t),
            null !== a.xhr && (a.xhr.abort(),
            a.xhr = null),
            "none" === a.options.animation && t.addClass("modaal-start_none"),
            "fade" === a.options.animation && t.addClass("modaal-start_fade"),
            "slide-down" === a.options.animation && t.addClass("modaal-start_slide_down"),
            setTimeout(function() {
                "inline" == a.options.type && u("#" + a.scope.id + " .modaal-content-container").contents().detach().appendTo(a.scope.source),
                t.remove(),
                a.options.after_close.call(a),
                a.scope.is_open = !1
            }, a.options.after_callback_delay),
            a.modaal_overlay("hide"),
            null != a.lastFocus && a.lastFocus.focus()
        },
        modaal_overlay: function(a) {
            var t = this;
            "show" == a ? (t.scope.is_open = !0,
            t.options.background_scroll || t.dom.addClass("modaal-noscroll"),
            u("#" + t.scope.id + "_overlay").length < 1 && t.dom.append('<div class="modaal-overlay" id="' + t.scope.id + '_overlay"></div>'),
            u("#" + t.scope.id + "_overlay").css("background", t.options.background).stop().animate({
                opacity: t.options.overlay_opacity
            }, t.options.animation_speed, function() {
                t.modaal_open()
            })) : "hide" == a && u("#" + t.scope.id + "_overlay").stop().animate({
                opacity: 0
            }, t.options.animation_speed, function() {
                u(this).remove(),
                t.dom.removeClass("modaal-noscroll")
            })
        },
        is_touch: function() {
            return "ontouchstart"in window || navigator.maxTouchPoints
        }
    }
      , l = [];
    function e(a) {
        var t = {}
          , o = !1;
        a.attr("data-modaal-type") && (o = !0,
        t.type = a.attr("data-modaal-type")),
        a.attr("data-modaal-content-source") && (o = !0,
        t.content_source = a.attr("data-modaal-content-source")),
        a.attr("data-modaal-animation") && (o = !0,
        t.animation = a.attr("data-modaal-animation")),
        a.attr("data-modaal-animation-speed") && (o = !0,
        t.animation_speed = a.attr("data-modaal-animation-speed")),
        a.attr("data-modaal-after-callback-delay") && (o = !0,
        t.after_callback_delay = a.attr("data-modaal-after-callback-delay")),
        a.attr("data-modaal-is-locked") && (o = !0,
        t.is_locked = "true" === a.attr("data-modaal-is-locked")),
        a.attr("data-modaal-hide-close") && (o = !0,
        t.hide_close = "true" === a.attr("data-modaal-hide-close")),
        a.attr("data-modaal-background") && (o = !0,
        t.background = a.attr("data-modaal-background")),
        a.attr("data-modaal-overlay-opacity") && (o = !0,
        t.overlay_opacity = a.attr("data-modaal-overlay-opacity")),
        a.attr("data-modaal-overlay-close") && (o = !0,
        t.overlay_close = "false" !== a.attr("data-modaal-overlay-close")),
        a.attr("data-modaal-accessible-title") && (o = !0,
        t.accessible_title = a.attr("data-modaal-accessible-title")),
        a.attr("data-modaal-start-open") && (o = !0,
        t.start_open = "true" === a.attr("data-modaal-start-open")),
        a.attr("data-modaal-fullscreen") && (o = !0,
        t.fullscreen = "true" === a.attr("data-modaal-fullscreen")),
        a.attr("data-modaal-custom-class") && (o = !0,
        t.custom_class = a.attr("data-modaal-custom-class")),
        a.attr("data-modaal-close-text") && (o = !0,
        t.close_text = a.attr("data-modaal-close-text")),
        a.attr("data-modaal-close-aria-label") && (o = !0,
        t.close_aria_label = a.attr("data-modaal-close-aria-label")),
        a.attr("data-modaal-background-scroll") && (o = !0,
        t.background_scroll = "true" === a.attr("data-modaal-background-scroll")),
        a.attr("data-modaal-width") && (o = !0,
        t.width = parseInt(a.attr("data-modaal-width"))),
        a.attr("data-modaal-height") && (o = !0,
        t.height = parseInt(a.attr("data-modaal-height"))),
        a.attr("data-modaal-confirm-button-text") && (o = !0,
        t.confirm_button_text = a.attr("data-modaal-confirm-button-text")),
        a.attr("data-modaal-confirm-cancel-button-text") && (o = !0,
        t.confirm_cancel_button_text = a.attr("data-modaal-confirm-cancel-button-text")),
        a.attr("data-modaal-confirm-title") && (o = !0,
        t.confirm_title = a.attr("data-modaal-confirm-title")),
        a.attr("data-modaal-confirm-content") && (o = !0,
        t.confirm_content = a.attr("data-modaal-confirm-content")),
        a.attr("data-modaal-gallery-active-class") && (o = !0,
        t.gallery_active_class = a.attr("data-modaal-gallery-active-class")),
        a.attr("data-modaal-loading-content") && (o = !0,
        t.loading_content = a.attr("data-modaal-loading-content")),
        a.attr("data-modaal-loading-class") && (o = !0,
        t.loading_class = a.attr("data-modaal-loading-class")),
        a.attr("data-modaal-ajax-error-class") && (o = !0,
        t.ajax_error_class = a.attr("data-modaal-ajax-error-class")),
        a.attr("data-modaal-instagram-id") && (o = !0,
        t.instagram_id = a.attr("data-modaal-instagram-id")),
        o && a.modaal(t)
    }
    u.fn.modaal = function(e) {
        return this.each(function(a) {
            var t = u(this).data("modaal");
            if (t) {
                if ("string" == typeof e)
                    switch (e) {
                    case "open":
                        t.create_modaal(t);
                        break;
                    case "close":
                        t.modaal_close()
                    }
            } else {
                var o = Object.create(i);
                o.init(e, this),
                u.data(this, "modaal", o),
                l.push({
                    element: u(this).attr("class"),
                    options: e
                })
            }
        })
    }
    ,
    u.fn.modaal.options = {
        type: "inline",
        content_source: null,
        animation: "fade",
        animation_speed: 300,
        after_callback_delay: 350,
        is_locked: !1,
        hide_close: !1,
        background: "#000",
        overlay_opacity: "0.8",
        overlay_close: !0,
        accessible_title: "Dialog Window",
        start_open: !1,
        fullscreen: !1,
        custom_class: "",
        background_scroll: !1,
        should_open: !0,
        close_text: "Close",
        close_aria_label: "Close (Press escape to close)",
        width: null,
        height: null,
        before_open: function() {},
        after_open: function() {},
        before_close: function() {},
        after_close: function() {},
        source: function(a, t) {
            return t
        },
        confirm_button_text: "Confirm",
        confirm_cancel_button_text: "Cancel",
        confirm_title: "Confirm Title",
        confirm_content: "<p>This is the default confirm dialog content. Replace me through the options</p>",
        confirm_callback: function() {},
        confirm_cancel_callback: function() {},
        gallery_active_class: "gallery_active_item",
        outer_controls: !1,
        before_image_change: function() {},
        after_image_change: function() {},
        loading_content: '<div class="modaal-loading-spinner"><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div></div>',
        loading_class: "is_loading",
        ajax_error_class: "modaal-error",
        ajax_success: function() {},
        instagram_id: null
    },
    u(function() {
        var a = u(".modaal");
        a.length && a.each(function() {
            e(u(this))
        });
        var t = new MutationObserver(function(a) {
            a.forEach(function(a) {
                if (a.addedNodes && 0 < a.addedNodes.length)
                    [].some.call(a.addedNodes, function(a) {
                        var t = u(a);
                        (t.is("a") || t.is("button")) && (t.hasClass("modaal") ? e(t) : l.forEach(function(a) {
                            if (a.element == t.attr("class"))
                                return u(t).modaal(a.options),
                                !1
                        }))
                    })
            })
        }
        )
          , o = {
            subtree: !0,
            attributes: !0,
            childList: !0,
            characterData: !0
        };
        setTimeout(function() {
            t.observe(document.body, o)
        }, 500)
    })
}(jQuery, (window,
document));
"use strict";
function _typeof(i) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(i) {
        return typeof i
    }
    : function(i) {
        return i && "function" == typeof Symbol && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i
    }
    )(i)
}
!function(i) {
    "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery)
}(function(a) {
    var s, r = window.Slick || {};
    s = 0,
    (r = function(i, e) {
        var t, o = this;
        o.defaults = {
            accessibility: !0,
            adaptiveHeight: !1,
            appendArrows: a(i),
            appendDots: a(i),
            arrows: !0,
            asNavFor: null,
            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
            nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
            autoplay: !1,
            autoplaySpeed: 3e3,
            centerMode: !1,
            centerPadding: "50px",
            cssEase: "ease",
            customPaging: function(i, e) {
                return a('<button type="button" />').text(e + 1)
            },
            dots: !1,
            dotsClass: "slick-dots",
            draggable: !0,
            easing: "linear",
            edgeFriction: .35,
            fade: !1,
            focusOnSelect: !1,
            focusOnChange: !1,
            infinite: !0,
            initialSlide: 0,
            lazyLoad: "ondemand",
            mobileFirst: !1,
            pauseOnHover: !0,
            pauseOnFocus: !0,
            pauseOnDotsHover: !1,
            respondTo: "window",
            responsive: null,
            rows: 1,
            rtl: !1,
            slide: "",
            slidesPerRow: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            swipe: !0,
            swipeToSlide: !1,
            touchMove: !0,
            touchThreshold: 5,
            useCSS: !0,
            useTransform: !0,
            variableWidth: !1,
            vertical: !1,
            verticalSwiping: !1,
            waitForAnimate: !0,
            zIndex: 1e3
        },
        o.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            scrolling: !1,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            swiping: !1,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1
        },
        a.extend(o, o.initials),
        o.activeBreakpoint = null,
        o.animType = null,
        o.animProp = null,
        o.breakpoints = [],
        o.breakpointSettings = [],
        o.cssTransitions = !1,
        o.focussed = !1,
        o.interrupted = !1,
        o.hidden = "hidden",
        o.paused = !0,
        o.positionProp = null,
        o.respondTo = null,
        o.rowCount = 1,
        o.shouldClick = !0,
        o.$slider = a(i),
        o.$slidesCache = null,
        o.transformType = null,
        o.transitionType = null,
        o.visibilityChange = "visibilitychange",
        o.windowWidth = 0,
        o.windowTimer = null,
        t = a(i).data("slick") || {},
        o.options = a.extend({}, o.defaults, e, t),
        o.currentSlide = o.options.initialSlide,
        o.originalSettings = o.options,
        void 0 !== document.mozHidden ? (o.hidden = "mozHidden",
        o.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (o.hidden = "webkitHidden",
        o.visibilityChange = "webkitvisibilitychange"),
        o.autoPlay = a.proxy(o.autoPlay, o),
        o.autoPlayClear = a.proxy(o.autoPlayClear, o),
        o.autoPlayIterator = a.proxy(o.autoPlayIterator, o),
        o.changeSlide = a.proxy(o.changeSlide, o),
        o.clickHandler = a.proxy(o.clickHandler, o),
        o.selectHandler = a.proxy(o.selectHandler, o),
        o.setPosition = a.proxy(o.setPosition, o),
        o.swipeHandler = a.proxy(o.swipeHandler, o),
        o.dragHandler = a.proxy(o.dragHandler, o),
        o.keyHandler = a.proxy(o.keyHandler, o),
        o.instanceUid = s++,
        o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
        o.registerBreakpoints(),
        o.init(!0)
    }
    ).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }
    ,
    r.prototype.addSlide = r.prototype.slickAdd = function(i, e, t) {
        var o = this;
        if ("boolean" == typeof e)
            t = e,
            e = null;
        else if (e < 0 || e >= o.slideCount)
            return !1;
        o.unload(),
        "number" == typeof e ? 0 === e && 0 === o.$slides.length ? a(i).appendTo(o.$slideTrack) : t ? a(i).insertBefore(o.$slides.eq(e)) : a(i).insertAfter(o.$slides.eq(e)) : !0 === t ? a(i).prependTo(o.$slideTrack) : a(i).appendTo(o.$slideTrack),
        o.$slides = o.$slideTrack.children(this.options.slide),
        o.$slideTrack.children(this.options.slide).detach(),
        o.$slideTrack.append(o.$slides),
        o.$slides.each(function(i, e) {
            a(e).attr("data-slick-index", i)
        }),
        o.$slidesCache = o.$slides,
        o.reinit()
    }
    ,
    r.prototype.animateHeight = function() {
        var i = this;
        if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.animate({
                height: e
            }, i.options.speed)
        }
    }
    ,
    r.prototype.animateSlide = function(i, e) {
        var t = {}
          , o = this;
        o.animateHeight(),
        !0 === o.options.rtl && !1 === o.options.vertical && (i = -i),
        !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
            left: i
        }, o.options.speed, o.options.easing, e) : o.$slideTrack.animate({
            top: i
        }, o.options.speed, o.options.easing, e) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft),
        a({
            animStart: o.currentLeft
        }).animate({
            animStart: i
        }, {
            duration: o.options.speed,
            easing: o.options.easing,
            step: function(i) {
                i = Math.ceil(i),
                !1 === o.options.vertical ? t[o.animType] = "translate(" + i + "px, 0px)" : t[o.animType] = "translate(0px," + i + "px)",
                o.$slideTrack.css(t)
            },
            complete: function() {
                e && e.call()
            }
        })) : (o.applyTransition(),
        i = Math.ceil(i),
        !1 === o.options.vertical ? t[o.animType] = "translate3d(" + i + "px, 0px, 0px)" : t[o.animType] = "translate3d(0px," + i + "px, 0px)",
        o.$slideTrack.css(t),
        e && setTimeout(function() {
            o.disableTransition(),
            e.call()
        }, o.options.speed))
    }
    ,
    r.prototype.getNavTarget = function() {
        var i = this.options.asNavFor;
        return i && null !== i && (i = a(i).not(this.$slider)),
        i
    }
    ,
    r.prototype.asNavFor = function(e) {
        var i = this.getNavTarget();
        null !== i && "object" === _typeof(i) && i.each(function() {
            var i = a(this).slick("getSlick");
            i.unslicked || i.slideHandler(e, !0)
        })
    }
    ,
    r.prototype.applyTransition = function(i) {
        var e = this
          , t = {};
        !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase,
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }
    ,
    r.prototype.autoPlay = function() {
        var i = this;
        i.autoPlayClear(),
        i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed))
    }
    ,
    r.prototype.autoPlayClear = function() {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer)
    }
    ,
    r.prototype.autoPlayIterator = function() {
        var i = this
          , e = i.currentSlide + i.options.slidesToScroll;
        i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll,
        i.currentSlide - 1 == 0 && (i.direction = 1))),
        i.slideHandler(e))
    }
    ,
    r.prototype.buildArrows = function() {
        var i = this;
        !0 === i.options.arrows && (i.$prevArrow = a(i.options.prevArrow).addClass("slick-arrow"),
        i.$nextArrow = a(i.options.nextArrow).addClass("slick-arrow"),
        i.slideCount > i.options.slidesToShow ? (i.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        i.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.prependTo(i.options.appendArrows),
        i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.appendTo(i.options.appendArrows),
        !0 !== i.options.infinite && i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : i.$prevArrow.add(i.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }
    ,
    r.prototype.buildDots = function() {
        var i, e, t = this;
        if (!0 === t.options.dots && t.slideCount > t.options.slidesToShow) {
            for (t.$slider.addClass("slick-dotted"),
            e = a("<ul />").addClass(t.options.dotsClass),
            i = 0; i <= t.getDotCount(); i += 1)
                e.append(a("<li />").append(t.options.customPaging.call(this, t, i)));
            t.$dots = e.appendTo(t.options.appendDots),
            t.$dots.find("li").first().addClass("slick-active")
        }
    }
    ,
    r.prototype.buildOut = function() {
        var i = this;
        i.$slides = i.$slider.children(i.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
        i.slideCount = i.$slides.length,
        i.$slides.each(function(i, e) {
            a(e).attr("data-slick-index", i).data("originalStyling", a(e).attr("style") || "")
        }),
        i.$slider.addClass("slick-slider"),
        i.$slideTrack = 0 === i.slideCount ? a('<div class="slick-track"/>').appendTo(i.$slider) : i.$slides.wrapAll('<div class="slick-track"/>').parent(),
        i.$list = i.$slideTrack.wrap('<div class="slick-list"/>').parent(),
        i.$slideTrack.css("opacity", 0),
        !0 !== i.options.centerMode && !0 !== i.options.swipeToSlide || (i.options.slidesToScroll = 1),
        a("img[data-lazy]", i.$slider).not("[src]").addClass("slick-loading"),
        i.setupInfinite(),
        i.buildArrows(),
        i.buildDots(),
        i.updateDots(),
        i.setSlideClasses("number" == typeof i.currentSlide ? i.currentSlide : 0),
        !0 === i.options.draggable && i.$list.addClass("draggable")
    }
    ,
    r.prototype.buildRows = function() {
        var i, e, t, o, s, n, r, l = this;
        if (o = document.createDocumentFragment(),
        n = l.$slider.children(),
        0 < l.options.rows) {
            for (r = l.options.slidesPerRow * l.options.rows,
            s = Math.ceil(n.length / r),
            i = 0; i < s; i++) {
                var d = document.createElement("div");
                for (e = 0; e < l.options.rows; e++) {
                    var a = document.createElement("div");
                    for (t = 0; t < l.options.slidesPerRow; t++) {
                        var c = i * r + (e * l.options.slidesPerRow + t);
                        n.get(c) && a.appendChild(n.get(c))
                    }
                    d.appendChild(a)
                }
                o.appendChild(d)
            }
            l.$slider.empty().append(o),
            l.$slider.children().children().children().css({
                width: 100 / l.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }
    ,
    r.prototype.checkResponsive = function(i, e) {
        var t, o, s, n = this, r = !1, l = n.$slider.width(), d = window.innerWidth || a(window).width();
        if ("window" === n.respondTo ? s = d : "slider" === n.respondTo ? s = l : "min" === n.respondTo && (s = Math.min(d, l)),
        n.options.responsive && n.options.responsive.length && null !== n.options.responsive) {
            for (t in o = null,
            n.breakpoints)
                n.breakpoints.hasOwnProperty(t) && (!1 === n.originalSettings.mobileFirst ? s < n.breakpoints[t] && (o = n.breakpoints[t]) : s > n.breakpoints[t] && (o = n.breakpoints[t]));
            null !== o ? null !== n.activeBreakpoint && o === n.activeBreakpoint && !e || (n.activeBreakpoint = o,
            "unslick" === n.breakpointSettings[o] ? n.unslick(o) : (n.options = a.extend({}, n.originalSettings, n.breakpointSettings[o]),
            !0 === i && (n.currentSlide = n.options.initialSlide),
            n.refresh(i)),
            r = o) : null !== n.activeBreakpoint && (n.activeBreakpoint = null,
            n.options = n.originalSettings,
            !0 === i && (n.currentSlide = n.options.initialSlide),
            n.refresh(i),
            r = o),
            i || !1 === r || n.$slider.trigger("breakpoint", [n, r])
        }
    }
    ,
    r.prototype.changeSlide = function(i, e) {
        var t, o, s = this, n = a(i.currentTarget);
        switch (n.is("a") && i.preventDefault(),
        n.is("li") || (n = n.closest("li")),
        t = s.slideCount % s.options.slidesToScroll != 0 ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll,
        i.data.message) {
        case "previous":
            o = 0 == t ? s.options.slidesToScroll : s.options.slidesToShow - t,
            s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - o, !1, e);
            break;
        case "next":
            o = 0 == t ? s.options.slidesToScroll : t,
            s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + o, !1, e);
            break;
        case "index":
            var r = 0 === i.data.index ? 0 : i.data.index || n.index() * s.options.slidesToScroll;
            s.slideHandler(s.checkNavigable(r), !1, e),
            n.children().trigger("focus");
            break;
        default:
            return
        }
    }
    ,
    r.prototype.checkNavigable = function(i) {
        var e, t;
        if (t = 0,
        i > (e = this.getNavigableIndexes())[e.length - 1])
            i = e[e.length - 1];
        else
            for (var o in e) {
                if (i < e[o]) {
                    i = t;
                    break
                }
                t = e[o]
            }
        return i
    }
    ,
    r.prototype.cleanUpEvents = function() {
        var i = this;
        i.options.dots && null !== i.$dots && (a("li", i.$dots).off("click.slick", i.changeSlide).off("mouseenter.slick", a.proxy(i.interrupt, i, !0)).off("mouseleave.slick", a.proxy(i.interrupt, i, !1)),
        !0 === i.options.accessibility && i.$dots.off("keydown.slick", i.keyHandler)),
        i.$slider.off("focus.slick blur.slick"),
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow && i.$prevArrow.off("click.slick", i.changeSlide),
        i.$nextArrow && i.$nextArrow.off("click.slick", i.changeSlide),
        !0 === i.options.accessibility && (i.$prevArrow && i.$prevArrow.off("keydown.slick", i.keyHandler),
        i.$nextArrow && i.$nextArrow.off("keydown.slick", i.keyHandler))),
        i.$list.off("touchstart.slick mousedown.slick", i.swipeHandler),
        i.$list.off("touchmove.slick mousemove.slick", i.swipeHandler),
        i.$list.off("touchend.slick mouseup.slick", i.swipeHandler),
        i.$list.off("touchcancel.slick mouseleave.slick", i.swipeHandler),
        i.$list.off("click.slick", i.clickHandler),
        a(document).off(i.visibilityChange, i.visibility),
        i.cleanUpSlideEvents(),
        !0 === i.options.accessibility && i.$list.off("keydown.slick", i.keyHandler),
        !0 === i.options.focusOnSelect && a(i.$slideTrack).children().off("click.slick", i.selectHandler),
        a(window).off("orientationchange.slick.slick-" + i.instanceUid, i.orientationChange),
        a(window).off("resize.slick.slick-" + i.instanceUid, i.resize),
        a("[draggable!=true]", i.$slideTrack).off("dragstart", i.preventDefault),
        a(window).off("load.slick.slick-" + i.instanceUid, i.setPosition)
    }
    ,
    r.prototype.cleanUpSlideEvents = function() {
        var i = this;
        i.$list.off("mouseenter.slick", a.proxy(i.interrupt, i, !0)),
        i.$list.off("mouseleave.slick", a.proxy(i.interrupt, i, !1))
    }
    ,
    r.prototype.cleanUpRows = function() {
        var i;
        0 < this.options.rows && ((i = this.$slides.children().children()).removeAttr("style"),
        this.$slider.empty().append(i))
    }
    ,
    r.prototype.clickHandler = function(i) {
        !1 === this.shouldClick && (i.stopImmediatePropagation(),
        i.stopPropagation(),
        i.preventDefault())
    }
    ,
    r.prototype.destroy = function(i) {
        var e = this;
        e.autoPlayClear(),
        e.touchObject = {},
        e.cleanUpEvents(),
        a(".slick-cloned", e.$slider).detach(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow && e.$prevArrow.length && (e.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove()),
        e.$nextArrow && e.$nextArrow.length && (e.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove()),
        e.$slides && (e.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            a(this).attr("style", a(this).data("originalStyling"))
        }),
        e.$slideTrack.children(this.options.slide).detach(),
        e.$slideTrack.detach(),
        e.$list.detach(),
        e.$slider.append(e.$slides)),
        e.cleanUpRows(),
        e.$slider.removeClass("slick-slider"),
        e.$slider.removeClass("slick-initialized"),
        e.$slider.removeClass("slick-dotted"),
        e.unslicked = !0,
        i || e.$slider.trigger("destroy", [e])
    }
    ,
    r.prototype.disableTransition = function(i) {
        var e = {};
        e[this.transitionType] = "",
        !1 === this.options.fade ? this.$slideTrack.css(e) : this.$slides.eq(i).css(e)
    }
    ,
    r.prototype.fadeSlide = function(i, e) {
        var t = this;
        !1 === t.cssTransitions ? (t.$slides.eq(i).css({
            zIndex: t.options.zIndex
        }),
        t.$slides.eq(i).animate({
            opacity: 1
        }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i),
        t.$slides.eq(i).css({
            opacity: 1,
            zIndex: t.options.zIndex
        }),
        e && setTimeout(function() {
            t.disableTransition(i),
            e.call()
        }, t.options.speed))
    }
    ,
    r.prototype.fadeSlideOut = function(i) {
        var e = this;
        !1 === e.cssTransitions ? e.$slides.eq(i).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(i),
        e.$slides.eq(i).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }))
    }
    ,
    r.prototype.filterSlides = r.prototype.slickFilter = function(i) {
        var e = this;
        null !== i && (e.$slidesCache = e.$slides,
        e.unload(),
        e.$slideTrack.children(this.options.slide).detach(),
        e.$slidesCache.filter(i).appendTo(e.$slideTrack),
        e.reinit())
    }
    ,
    r.prototype.focusHandler = function() {
        var t = this;
        t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(i) {
            i.stopImmediatePropagation();
            var e = a(this);
            setTimeout(function() {
                t.options.pauseOnFocus && (t.focussed = e.is(":focus"),
                t.autoPlay())
            }, 0)
        })
    }
    ,
    r.prototype.getCurrent = r.prototype.slickCurrentSlide = function() {
        return this.currentSlide
    }
    ,
    r.prototype.getDotCount = function() {
        var i = this
          , e = 0
          , t = 0
          , o = 0;
        if (!0 === i.options.infinite)
            if (i.slideCount <= i.options.slidesToShow)
                ++o;
            else
                for (; e < i.slideCount; )
                    ++o,
                    e = t + i.options.slidesToScroll,
                    t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
        else if (!0 === i.options.centerMode)
            o = i.slideCount;
        else if (i.options.asNavFor)
            for (; e < i.slideCount; )
                ++o,
                e = t + i.options.slidesToScroll,
                t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
        else
            o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
        return o - 1
    }
    ,
    r.prototype.getLeft = function(i) {
        var e, t, o, s, n = this, r = 0;
        return n.slideOffset = 0,
        t = n.$slides.first().outerHeight(!0),
        !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1,
        s = -1,
        !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)),
        r = t * n.options.slidesToShow * s),
        n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (r = i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1,
        (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1,
        n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth,
        r = (i + n.options.slidesToShow - n.slideCount) * t),
        n.slideCount <= n.options.slidesToShow && (r = n.slideOffset = 0),
        !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0,
        n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)),
        e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r,
        !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow),
        e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0,
        !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1),
        e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0,
        e += (n.$list.width() - o.outerWidth()) / 2)),
        e
    }
    ,
    r.prototype.getOption = r.prototype.slickGetOption = function(i) {
        return this.options[i]
    }
    ,
    r.prototype.getNavigableIndexes = function() {
        var i, e = this, t = 0, o = 0, s = [];
        for (i = !1 === e.options.infinite ? e.slideCount : (t = -1 * e.options.slidesToScroll,
        o = -1 * e.options.slidesToScroll,
        2 * e.slideCount); t < i; )
            s.push(t),
            t = o + e.options.slidesToScroll,
            o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return s
    }
    ,
    r.prototype.getSlick = function() {
        return this
    }
    ,
    r.prototype.getSlideCount = function() {
        var t, o, s = this;
        return o = !0 === s.options.centerMode ? s.slideWidth * Math.floor(s.options.slidesToShow / 2) : 0,
        !0 === s.options.swipeToSlide ? (s.$slideTrack.find(".slick-slide").each(function(i, e) {
            if (e.offsetLeft - o + a(e).outerWidth() / 2 > -1 * s.swipeLeft)
                return t = e,
                !1
        }),
        Math.abs(a(t).attr("data-slick-index") - s.currentSlide) || 1) : s.options.slidesToScroll
    }
    ,
    r.prototype.goTo = r.prototype.slickGoTo = function(i, e) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(i)
            }
        }, e)
    }
    ,
    r.prototype.init = function(i) {
        var e = this;
        a(e.$slider).hasClass("slick-initialized") || (a(e.$slider).addClass("slick-initialized"),
        e.buildRows(),
        e.buildOut(),
        e.setProps(),
        e.startLoad(),
        e.loadSlider(),
        e.initializeEvents(),
        e.updateArrows(),
        e.updateDots(),
        e.checkResponsive(!0),
        e.focusHandler()),
        i && e.$slider.trigger("init", [e]),
        !0 === e.options.accessibility && e.initADA(),
        e.options.autoplay && (e.paused = !1,
        e.autoPlay())
    }
    ,
    r.prototype.initADA = function() {
        var o = this
          , t = Math.ceil(o.slideCount / o.options.slidesToShow)
          , s = o.getNavigableIndexes().filter(function(i) {
            return 0 <= i && i < o.slideCount
        });
        o.$slides.add(o.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }),
        null !== o.$dots && (o.$slides.not(o.$slideTrack.find(".slick-cloned")).each(function(i) {
            var e = s.indexOf(i);
            if (a(this).attr({
                role: "tabpanel",
                id: "slick-slide" + o.instanceUid + i,
                tabindex: -1
            }),
            -1 !== e) {
                var t = "slick-slide-control" + o.instanceUid + e;
                a("#" + t).length && a(this).attr({
                    "aria-describedby": t
                })
            }
        }),
        o.$dots.attr("role", "tablist").find("li").each(function(i) {
            var e = s[i];
            a(this).attr({
                role: "presentation"
            }),
            a(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + o.instanceUid + i,
                "aria-controls": "slick-slide" + o.instanceUid + e,
                "aria-label": i + 1 + " of " + t,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(o.currentSlide).find("button").attr({
            "aria-selected": "true",
            tabindex: "0"
        }).end());
        for (var i = o.currentSlide, e = i + o.options.slidesToShow; i < e; i++)
            o.options.focusOnChange ? o.$slides.eq(i).attr({
                tabindex: "0"
            }) : o.$slides.eq(i).removeAttr("tabindex");
        o.activateADA()
    }
    ,
    r.prototype.initArrowEvents = function() {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, i.changeSlide),
        i.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, i.changeSlide),
        !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler),
        i.$nextArrow.on("keydown.slick", i.keyHandler)))
    }
    ,
    r.prototype.initDotEvents = function() {
        var i = this;
        !0 === i.options.dots && i.slideCount > i.options.slidesToShow && (a("li", i.$dots).on("click.slick", {
            message: "index"
        }, i.changeSlide),
        !0 === i.options.accessibility && i.$dots.on("keydown.slick", i.keyHandler)),
        !0 === i.options.dots && !0 === i.options.pauseOnDotsHover && i.slideCount > i.options.slidesToShow && a("li", i.$dots).on("mouseenter.slick", a.proxy(i.interrupt, i, !0)).on("mouseleave.slick", a.proxy(i.interrupt, i, !1))
    }
    ,
    r.prototype.initSlideEvents = function() {
        var i = this;
        i.options.pauseOnHover && (i.$list.on("mouseenter.slick", a.proxy(i.interrupt, i, !0)),
        i.$list.on("mouseleave.slick", a.proxy(i.interrupt, i, !1)))
    }
    ,
    r.prototype.initializeEvents = function() {
        var i = this;
        i.initArrowEvents(),
        i.initDotEvents(),
        i.initSlideEvents(),
        i.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, i.swipeHandler),
        i.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, i.swipeHandler),
        i.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, i.swipeHandler),
        i.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, i.swipeHandler),
        i.$list.on("click.slick", i.clickHandler),
        a(document).on(i.visibilityChange, a.proxy(i.visibility, i)),
        !0 === i.options.accessibility && i.$list.on("keydown.slick", i.keyHandler),
        !0 === i.options.focusOnSelect && a(i.$slideTrack).children().on("click.slick", i.selectHandler),
        a(window).on("orientationchange.slick.slick-" + i.instanceUid, a.proxy(i.orientationChange, i)),
        a(window).on("resize.slick.slick-" + i.instanceUid, a.proxy(i.resize, i)),
        a("[draggable!=true]", i.$slideTrack).on("dragstart", i.preventDefault),
        a(window).on("load.slick.slick-" + i.instanceUid, i.setPosition),
        a(i.setPosition)
    }
    ,
    r.prototype.initUI = function() {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(),
        i.$nextArrow.show()),
        !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show()
    }
    ,
    r.prototype.keyHandler = function(i) {
        var e = this;
        i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "next" : "previous"
            }
        }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "previous" : "next"
            }
        }))
    }
    ,
    r.prototype.lazyLoad = function() {
        var i, e, t, n = this;
        function o(i) {
            a("img[data-lazy]", i).each(function() {
                var i = a(this)
                  , e = a(this).attr("data-lazy")
                  , t = a(this).attr("data-srcset")
                  , o = a(this).attr("data-sizes") || n.$slider.attr("data-sizes")
                  , s = document.createElement("img");
                s.onload = function() {
                    i.animate({
                        opacity: 0
                    }, 100, function() {
                        t && (i.attr("srcset", t),
                        o && i.attr("sizes", o)),
                        i.attr("src", e).animate({
                            opacity: 1
                        }, 200, function() {
                            i.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }),
                        n.$slider.trigger("lazyLoaded", [n, i, e])
                    })
                }
                ,
                s.onerror = function() {
                    i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                    n.$slider.trigger("lazyLoadError", [n, i, e])
                }
                ,
                s.src = e
            })
        }
        if (!0 === n.options.centerMode ? t = !0 === n.options.infinite ? (e = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (e = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)),
        n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (e = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide,
        t = Math.ceil(e + n.options.slidesToShow),
        !0 === n.options.fade && (0 < e && e--,
        t <= n.slideCount && t++)),
        i = n.$slider.find(".slick-slide").slice(e, t),
        "anticipated" === n.options.lazyLoad)
            for (var s = e - 1, r = t, l = n.$slider.find(".slick-slide"), d = 0; d < n.options.slidesToScroll; d++)
                s < 0 && (s = n.slideCount - 1),
                i = (i = i.add(l.eq(s))).add(l.eq(r)),
                s--,
                r++;
        o(i),
        n.slideCount <= n.options.slidesToShow ? o(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? o(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && o(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
    }
    ,
    r.prototype.loadSlider = function() {
        var i = this;
        i.setPosition(),
        i.$slideTrack.css({
            opacity: 1
        }),
        i.$slider.removeClass("slick-loading"),
        i.initUI(),
        "progressive" === i.options.lazyLoad && i.progressiveLazyLoad()
    }
    ,
    r.prototype.next = r.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }
    ,
    r.prototype.orientationChange = function() {
        this.checkResponsive(),
        this.setPosition()
    }
    ,
    r.prototype.pause = r.prototype.slickPause = function() {
        this.autoPlayClear(),
        this.paused = !0
    }
    ,
    r.prototype.play = r.prototype.slickPlay = function() {
        var i = this;
        i.autoPlay(),
        i.options.autoplay = !0,
        i.paused = !1,
        i.focussed = !1,
        i.interrupted = !1
    }
    ,
    r.prototype.postSlide = function(i) {
        var e = this;
        e.unslicked || (e.$slider.trigger("afterChange", [e, i]),
        e.animating = !1,
        e.slideCount > e.options.slidesToShow && e.setPosition(),
        e.swipeLeft = null,
        e.options.autoplay && e.autoPlay(),
        !0 === e.options.accessibility && (e.initADA(),
        e.options.focusOnChange && a(e.$slides.get(e.currentSlide)).attr("tabindex", 0).focus()))
    }
    ,
    r.prototype.prev = r.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }
    ,
    r.prototype.preventDefault = function(i) {
        i.preventDefault()
    }
    ,
    r.prototype.progressiveLazyLoad = function(i) {
        i = i || 1;
        var e, t, o, s, n, r = this, l = a("img[data-lazy]", r.$slider);
        l.length ? (e = l.first(),
        t = e.attr("data-lazy"),
        o = e.attr("data-srcset"),
        s = e.attr("data-sizes") || r.$slider.attr("data-sizes"),
        (n = document.createElement("img")).onload = function() {
            o && (e.attr("srcset", o),
            s && e.attr("sizes", s)),
            e.attr("src", t).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),
            !0 === r.options.adaptiveHeight && r.setPosition(),
            r.$slider.trigger("lazyLoaded", [r, e, t]),
            r.progressiveLazyLoad()
        }
        ,
        n.onerror = function() {
            i < 3 ? setTimeout(function() {
                r.progressiveLazyLoad(i + 1)
            }, 500) : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
            r.$slider.trigger("lazyLoadError", [r, e, t]),
            r.progressiveLazyLoad())
        }
        ,
        n.src = t) : r.$slider.trigger("allImagesLoaded", [r])
    }
    ,
    r.prototype.refresh = function(i) {
        var e, t, o = this;
        t = o.slideCount - o.options.slidesToShow,
        !o.options.infinite && o.currentSlide > t && (o.currentSlide = t),
        o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0),
        e = o.currentSlide,
        o.destroy(!0),
        a.extend(o, o.initials, {
            currentSlide: e
        }),
        o.init(),
        i || o.changeSlide({
            data: {
                message: "index",
                index: e
            }
        }, !1)
    }
    ,
    r.prototype.registerBreakpoints = function() {
        var i, e, t, o = this, s = o.options.responsive || null;
        if ("array" === a.type(s) && s.length) {
            for (i in o.respondTo = o.options.respondTo || "window",
            s)
                if (t = o.breakpoints.length - 1,
                s.hasOwnProperty(i)) {
                    for (e = s[i].breakpoint; 0 <= t; )
                        o.breakpoints[t] && o.breakpoints[t] === e && o.breakpoints.splice(t, 1),
                        t--;
                    o.breakpoints.push(e),
                    o.breakpointSettings[e] = s[i].settings
                }
            o.breakpoints.sort(function(i, e) {
                return o.options.mobileFirst ? i - e : e - i
            })
        }
    }
    ,
    r.prototype.reinit = function() {
        var i = this;
        i.$slides = i.$slideTrack.children(i.options.slide).addClass("slick-slide"),
        i.slideCount = i.$slides.length,
        i.currentSlide >= i.slideCount && 0 !== i.currentSlide && (i.currentSlide = i.currentSlide - i.options.slidesToScroll),
        i.slideCount <= i.options.slidesToShow && (i.currentSlide = 0),
        i.registerBreakpoints(),
        i.setProps(),
        i.setupInfinite(),
        i.buildArrows(),
        i.updateArrows(),
        i.initArrowEvents(),
        i.buildDots(),
        i.updateDots(),
        i.initDotEvents(),
        i.cleanUpSlideEvents(),
        i.initSlideEvents(),
        i.checkResponsive(!1, !0),
        !0 === i.options.focusOnSelect && a(i.$slideTrack).children().on("click.slick", i.selectHandler),
        i.setSlideClasses("number" == typeof i.currentSlide ? i.currentSlide : 0),
        i.setPosition(),
        i.focusHandler(),
        i.paused = !i.options.autoplay,
        i.autoPlay(),
        i.$slider.trigger("reInit", [i])
    }
    ,
    r.prototype.resize = function() {
        var i = this;
        a(window).width() !== i.windowWidth && (clearTimeout(i.windowDelay),
        i.windowDelay = window.setTimeout(function() {
            i.windowWidth = a(window).width(),
            i.checkResponsive(),
            i.unslicked || i.setPosition()
        }, 50))
    }
    ,
    r.prototype.removeSlide = r.prototype.slickRemove = function(i, e, t) {
        var o = this;
        if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i,
        o.slideCount < 1 || i < 0 || i > o.slideCount - 1)
            return !1;
        o.unload(),
        !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(),
        o.$slides = o.$slideTrack.children(this.options.slide),
        o.$slideTrack.children(this.options.slide).detach(),
        o.$slideTrack.append(o.$slides),
        o.$slidesCache = o.$slides,
        o.reinit()
    }
    ,
    r.prototype.setCSS = function(i) {
        var e, t, o = this, s = {};
        !0 === o.options.rtl && (i = -i),
        e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px",
        t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px",
        s[o.positionProp] = i,
        !1 === o.transformsEnabled || (!(s = {}) === o.cssTransitions ? s[o.animType] = "translate(" + e + ", " + t + ")" : s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)"),
        o.$slideTrack.css(s)
    }
    ,
    r.prototype.setDimensions = function() {
        var i = this;
        !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({
            padding: "0px " + i.options.centerPadding
        }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow),
        !0 === i.options.centerMode && i.$list.css({
            padding: i.options.centerPadding + " 0px"
        })),
        i.listWidth = i.$list.width(),
        i.listHeight = i.$list.height(),
        !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow),
        i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth),
        i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
        var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
        !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e)
    }
    ,
    r.prototype.setFade = function() {
        var t, o = this;
        o.$slides.each(function(i, e) {
            t = o.slideWidth * i * -1,
            !0 === o.options.rtl ? a(e).css({
                position: "relative",
                right: t,
                top: 0,
                zIndex: o.options.zIndex - 2,
                opacity: 0
            }) : a(e).css({
                position: "relative",
                left: t,
                top: 0,
                zIndex: o.options.zIndex - 2,
                opacity: 0
            })
        }),
        o.$slides.eq(o.currentSlide).css({
            zIndex: o.options.zIndex - 1,
            opacity: 1
        })
    }
    ,
    r.prototype.setHeight = function() {
        var i = this;
        if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.css("height", e)
        }
    }
    ,
    r.prototype.setOption = r.prototype.slickSetOption = function() {
        var i, e, t, o, s, n = this, r = !1;
        if ("object" === a.type(arguments[0]) ? (t = arguments[0],
        r = arguments[1],
        s = "multiple") : "string" === a.type(arguments[0]) && (o = arguments[1],
        r = arguments[2],
        "responsive" === (t = arguments[0]) && "array" === a.type(arguments[1]) ? s = "responsive" : void 0 !== arguments[1] && (s = "single")),
        "single" === s)
            n.options[t] = o;
        else if ("multiple" === s)
            a.each(t, function(i, e) {
                n.options[i] = e
            });
        else if ("responsive" === s)
            for (e in o)
                if ("array" !== a.type(n.options.responsive))
                    n.options.responsive = [o[e]];
                else {
                    for (i = n.options.responsive.length - 1; 0 <= i; )
                        n.options.responsive[i].breakpoint === o[e].breakpoint && n.options.responsive.splice(i, 1),
                        i--;
                    n.options.responsive.push(o[e])
                }
        r && (n.unload(),
        n.reinit())
    }
    ,
    r.prototype.setPosition = function() {
        var i = this;
        i.setDimensions(),
        i.setHeight(),
        !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(),
        i.$slider.trigger("setPosition", [i])
    }
    ,
    r.prototype.setProps = function() {
        var i = this
          , e = document.body.style;
        i.positionProp = !0 === i.options.vertical ? "top" : "left",
        "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"),
        void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0),
        i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex),
        void 0 !== e.OTransform && (i.animType = "OTransform",
        i.transformType = "-o-transform",
        i.transitionType = "OTransition",
        void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)),
        void 0 !== e.MozTransform && (i.animType = "MozTransform",
        i.transformType = "-moz-transform",
        i.transitionType = "MozTransition",
        void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)),
        void 0 !== e.webkitTransform && (i.animType = "webkitTransform",
        i.transformType = "-webkit-transform",
        i.transitionType = "webkitTransition",
        void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)),
        void 0 !== e.msTransform && (i.animType = "msTransform",
        i.transformType = "-ms-transform",
        i.transitionType = "msTransition",
        void 0 === e.msTransform && (i.animType = !1)),
        void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform",
        i.transformType = "transform",
        i.transitionType = "transition"),
        i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType
    }
    ,
    r.prototype.setSlideClasses = function(i) {
        var e, t, o, s, n = this;
        if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"),
        n.$slides.eq(i).addClass("slick-current"),
        !0 === n.options.centerMode) {
            var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
            e = Math.floor(n.options.slidesToShow / 2),
            !0 === n.options.infinite && (e <= i && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i,
            t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")),
            0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")),
            n.$slides.eq(i).addClass("slick-center")
        } else
            0 <= i && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow,
            o = !0 === n.options.infinite ? n.options.slidesToShow + i : i,
            n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad()
    }
    ,
    r.prototype.setupInfinite = function() {
        var i, e, t, o = this;
        if (!0 === o.options.fade && (o.options.centerMode = !1),
        !0 === o.options.infinite && !1 === o.options.fade && (e = null,
        o.slideCount > o.options.slidesToShow)) {
            for (t = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow,
            i = o.slideCount; i > o.slideCount - t; --i)
                e = i - 1,
                a(o.$slides[e]).clone(!0).attr("id", "").attr("data-slick-index", e - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
            for (i = 0; i < t + o.slideCount; i += 1)
                e = i,
                a(o.$slides[e]).clone(!0).attr("id", "").attr("data-slick-index", e + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
            o.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                a(this).attr("id", "")
            })
        }
    }
    ,
    r.prototype.interrupt = function(i) {
        i || this.autoPlay(),
        this.interrupted = i
    }
    ,
    r.prototype.selectHandler = function(i) {
        var e = a(i.target).is(".slick-slide") ? a(i.target) : a(i.target).parents(".slick-slide")
          , t = parseInt(e.attr("data-slick-index"));
        t = t || 0,
        this.slideCount <= this.options.slidesToShow ? this.slideHandler(t, !1, !0) : this.slideHandler(t)
    }
    ,
    r.prototype.slideHandler = function(i, e, t) {
        var o, s, n, r, l, d, a = this;
        if (e = e || !1,
        !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i))
            if (!1 === e && a.asNavFor(i),
            o = i,
            l = a.getLeft(o),
            r = a.getLeft(a.currentSlide),
            a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft,
            !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll))
                !1 === a.options.fade && (o = a.currentSlide,
                !0 !== t && a.slideCount > a.options.slidesToShow ? a.animateSlide(r, function() {
                    a.postSlide(o)
                }) : a.postSlide(o));
            else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll))
                !1 === a.options.fade && (o = a.currentSlide,
                !0 !== t && a.slideCount > a.options.slidesToShow ? a.animateSlide(r, function() {
                    a.postSlide(o)
                }) : a.postSlide(o));
            else {
                if (a.options.autoplay && clearInterval(a.autoPlayTimer),
                s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o,
                a.animating = !0,
                a.$slider.trigger("beforeChange", [a, a.currentSlide, s]),
                n = a.currentSlide,
                a.currentSlide = s,
                a.setSlideClasses(a.currentSlide),
                a.options.asNavFor && (d = (d = a.getNavTarget()).slick("getSlick")).slideCount <= d.options.slidesToShow && d.setSlideClasses(a.currentSlide),
                a.updateDots(),
                a.updateArrows(),
                !0 === a.options.fade)
                    return !0 !== t ? (a.fadeSlideOut(n),
                    a.fadeSlide(s, function() {
                        a.postSlide(s)
                    })) : a.postSlide(s),
                    void a.animateHeight();
                !0 !== t && a.slideCount > a.options.slidesToShow ? a.animateSlide(l, function() {
                    a.postSlide(s)
                }) : a.postSlide(s)
            }
    }
    ,
    r.prototype.startLoad = function() {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(),
        i.$nextArrow.hide()),
        !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(),
        i.$slider.addClass("slick-loading")
    }
    ,
    r.prototype.swipeDirection = function() {
        var i, e, t, o, s = this;
        return i = s.touchObject.startX - s.touchObject.curX,
        e = s.touchObject.startY - s.touchObject.curY,
        t = Math.atan2(e, i),
        (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)),
        o <= 45 && 0 <= o || o <= 360 && 315 <= o ? !1 === s.options.rtl ? "left" : "right" : 135 <= o && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? 35 <= o && o <= 135 ? "down" : "up" : "vertical"
    }
    ,
    r.prototype.swipeEnd = function(i) {
        var e, t, o = this;
        if (o.dragging = !1,
        o.swiping = !1,
        o.scrolling)
            return o.scrolling = !1;
        if (o.interrupted = !1,
        o.shouldClick = !(10 < o.touchObject.swipeLength),
        void 0 === o.touchObject.curX)
            return !1;
        if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]),
        o.touchObject.swipeLength >= o.touchObject.minSwipe) {
            switch (t = o.swipeDirection()) {
            case "left":
            case "down":
                e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(),
                o.currentDirection = 0;
                break;
            case "right":
            case "up":
                e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(),
                o.currentDirection = 1
            }
            "vertical" != t && (o.slideHandler(e),
            o.touchObject = {},
            o.$slider.trigger("swipe", [o, t]))
        } else
            o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide),
            o.touchObject = {})
    }
    ,
    r.prototype.swipeHandler = function(i) {
        var e = this;
        if (!(!1 === e.options.swipe || "ontouchend"in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse")))
            switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1,
            e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold,
            !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
            i.data.action) {
            case "start":
                e.swipeStart(i);
                break;
            case "move":
                e.swipeMove(i);
                break;
            case "end":
                e.swipeEnd(i)
            }
    }
    ,
    r.prototype.swipeMove = function(i) {
        var e, t, o, s, n, r, l = this;
        return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null,
        !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide),
        l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX,
        l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY,
        l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))),
        r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))),
        !l.options.verticalSwiping && !l.swiping && 4 < r ? !(l.scrolling = !0) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r),
        t = l.swipeDirection(),
        void 0 !== i.originalEvent && 4 < l.touchObject.swipeLength && (l.swiping = !0,
        i.preventDefault()),
        s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1),
        !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1),
        o = l.touchObject.swipeLength,
        (l.touchObject.edgeHit = !1) === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction,
        l.touchObject.edgeHit = !0),
        !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s,
        !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s),
        !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null,
        !1) : void l.setCSS(l.swipeLeft))))
    }
    ,
    r.prototype.swipeStart = function(i) {
        var e, t = this;
        if (t.interrupted = !0,
        1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow)
            return !(t.touchObject = {});
        void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]),
        t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX,
        t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY,
        t.dragging = !0
    }
    ,
    r.prototype.unfilterSlides = r.prototype.slickUnfilter = function() {
        var i = this;
        null !== i.$slidesCache && (i.unload(),
        i.$slideTrack.children(this.options.slide).detach(),
        i.$slidesCache.appendTo(i.$slideTrack),
        i.reinit())
    }
    ,
    r.prototype.unload = function() {
        var i = this;
        a(".slick-cloned", i.$slider).remove(),
        i.$dots && i.$dots.remove(),
        i.$prevArrow && i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove(),
        i.$nextArrow && i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove(),
        i.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }
    ,
    r.prototype.unslick = function(i) {
        this.$slider.trigger("unslick", [this, i]),
        this.destroy()
    }
    ,
    r.prototype.updateArrows = function() {
        var i = this;
        Math.floor(i.options.slidesToShow / 2),
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode || i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode) && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }
    ,
    r.prototype.updateDots = function() {
        var i = this;
        null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(),
        i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"))
    }
    ,
    r.prototype.visibility = function() {
        this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
    }
    ,
    a.fn.slick = function() {
        var i, e, t = this, o = arguments[0], s = Array.prototype.slice.call(arguments, 1), n = t.length;
        for (i = 0; i < n; i++)
            if ("object" == _typeof(o) || void 0 === o ? t[i].slick = new r(t[i],o) : e = t[i].slick[o].apply(t[i].slick, s),
            void 0 !== e)
                return e;
        return t
    }
});
