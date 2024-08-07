(window.$build = { swiper: [] }), (window.$wind = jQuery(window)), (window.$body = jQuery("body")), (window.$controller = new ScrollMagic.Controller()), (window.$scene = []);
const dsnGrid = {
    isMobile: function (e = !0) {
        let t = !1;
        var n;
        return (
            (n = navigator.userAgent || navigator.vendor || window.opera),
            (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
                n
            ) ||
                /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                    n.substr(0, 4)
                )) &&
                (t = !0),
            t || (e && window.$wind.width() <= 991)
        );
    },
    convertToJQuery: function (e) {
        return e instanceof jQuery == !1 ? jQuery(e) : e;
    },
    convertTextLine: function (e, t = "chars", n = !1) {
        return (
            (e = this.convertToJQuery(e)),
            Splitting({ target: e, by: t }),
            e
                .find(".word")
                .addClass("dsn-word-wrapper")
                .each(function (e) {
                    $(this).attr("style", "--word-dsn-index:" + e);
                }),
            e
                .find(".char")
                .addClass("dsn-chars-wrapper")
                .each(function (e) {
                    $(this).attr("style", "--char-dsn-index:" + e);
                }),
            !n && e.find(".whitespace").length && (e.find(".whitespace").get(0).outerHTML = " "),
            { el: e, word: e.find(".word"), char: e.find(".char") }
        );
    },
    cutterHtml: function (e) {
        (e = this.convertToJQuery(e)).children().each(function (e) {
            $(this)
                .addClass("dsn-html")
                .attr("style", "--html-dsn-index:" + e + ";" + ($(this).attr("style") || ""));
        }),
            (e = null);
    },
    removeAttr: function (e, t) {
        if (void 0 === e || void 0 === t) return;
        let n = e.data(t);
        return void 0 !== n && e.removeAttr("data-" + t), n;
    },
    getData: function (e, t, n) {
        if ((e = this.convertToJQuery(e)).length <= 0) return n;
        let i = this.removeAttr(e, "dsn-" + t);
        return void 0 !== i ? i : n;
    },
    tweenMaxParallax: function (e) {
        if (void 0 === $effectScroll || null === $effectScroll) return !1;
        null == e && (e = new ScrollMagic.Controller());
        let t = this;
        return {
            addParrlax: function (n) {
                if (void 0 === n.tween || void 0 === n.id) return !1;
                if (n.tween._totalDuration <= 0) return !1;
                n = $.extend(!0, { triggerHook: 0, duration: "100%", offset: 0, reverse: !0, refreshParallax: !1 }, n);
                let i = t.convertToJQuery(n.id),
                    o = new ScrollMagic.Scene({ triggerElement: i.get(0), triggerHook: n.triggerHook, duration: n.duration, offset: n.offset, reverse: n.reverse });
                var r = !1;
                return (
                    !0 === n.reverse && o.setTween(n.tween),
                    o.addTo(e),
                    !0 === n._fixed &&
                        (o.setPin(i.get(0)),
                        o.on("enter", function () {
                            r = !0;
                        }),
                        o.on("leave", function () {
                            (r = !1), i.css("transform", "");
                        }),
                        $effectScroll.getListener(function () {
                            r && i.css("transform", "translateY(" + $effectScroll.getScrollbar().offset.y + "px)");
                        }, !1)),
                    !0 === n.refreshParallax &&
                        !0 === n.reverse &&
                        $effectScroll.getListener(function () {
                            o && o.refresh();
                        }, !0),
                    !1 === n.reverse &&
                        o.on("enter", function () {
                            void 0 !== n.tween && n.tween.play(),
                                e.removeScene(o),
                                setTimeout(function () {
                                    o.destroy(!0), e.destroy(!0), (o = null), (e = null), (n.tween = null), (n = null);
                                }, 300);
                        }),
                    (t = null),
                    !0 !== n._fixed && (i = null),
                    !1 !== n.reverse && (n = null),
                    o
                );
            },
        };
    },
    endAnimate: function (e, t) {
        null != t && (e.one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", t), (e = t = null));
    },
    elementHover: function (e, t, n, i, o) {
        (e = this.convertToJQuery(e)),
            (t = this.convertToJQuery(t))
                .on("mouseenter", function (t) {
                    i ? i.bind(this, t)() : e.addClass(n);
                })
                .on("mouseleave", function (t) {
                    o ? o.bind(this, t)() : e.removeClass(n);
                });
    },
    mouseMove: function (e, t) {
        if (this.isMobile() || null == e) return;
        e = this.convertToJQuery(e);
        let n = !1;
        $body.on("mousemove", function (i) {
            gsap.to(e, t.speed || 0.5, { left: i.clientX, top: i.clientY }),
                void 0 !== t && void 0 !== t.onUpdate && t.onUpdate(i, i.pageX, i.pageY, e),
                void 0 !== t &&
                    void 0 !== t.onComplete &&
                    ((n = !0),
                    dsnGrid.endAnimate(e, function (i) {
                        n && t.onComplete(i, e), (n = !1);
                    }));
        });
    },
    moveIcon: function (e, t) {
        (e = this.convertToJQuery(e)).off("mousemove"),
            e.on("mousemove", function (e) {
                TweenLite.to($(this).find(t), 1, { left: e.pageX, top: e.pageY - jQuery(this).offset().top });
            });
    },
    numberText: function (e) {
        return e < 10 && e > 0 ? "0" + e : e;
    },
    scrollTop: function (e, t, n, i) {
        n = n || 0;
        let o = 0;
        "number" == typeof e ? (o = e) : (e = this.convertToJQuery(e)).length && (o = e.get(0).offsetTop),
            gsap.to(window.Scrollbar.get(document.querySelector("#dsn-scrollbar")) || $wind, t || 1, { scrollTo: { y: o + (n || 0) }, onComplete: i }),
            (o = t = e = null);
    },
    pageLoad: function (e, t, n, i) {
        let o = window.performance.timing,
            r = (((-1 * (o.loadEventEnd - o.navigationStart)) / 1e3) % 50) * 10,
            s = e,
            a = t > e ? 1 : -1,
            d = Math.abs(Math.floor((r + n) / 100)),
            l = setInterval(function () {
                (s += a), i(s), s >= t && clearInterval(l);
            }, d);
        return l;
    },
    randomObjectArray: function (e, t) {
        return (
            (t = t || 100),
            e.sort(function () {
                return Math.round(Math.random()) * t;
            })
        );
    },
    parallaxIt: function (e, t, n, i) {
        if (t.length <= 0) return void (e = t = n = i = null);
        let o = t[0].getBoundingClientRect(),
            r = e.pageX - o.left,
            s = e.pageY - o.top,
            a = window.pageYOffset || document.documentElement.scrollTop;
        (i = i || 0.5), (n = n || -1), TweenMax.to(t, i, { x: ((r - o.width / 2) / o.width) * n, y: ((s - o.height / 2 - a) / o.width) * n, ease: Power0.easeOut }), (o = r = s = a = i = n = null);
    },
    parallaxMoveElement: function (e, t, n, i, o) {
        let r = e.target || e,
            s = e.element || e.target || e;
        if (!s.length) return;
        (n = void 0 === n ? 0.5 : parseFloat(n)), (t = void 0 === t ? 20 : parseFloat(t));
        let a = $('<div class="icon-circle"></div>');
        r.append(a),
            r.off("mouseleave"),
            r.off("mouseenter"),
            r.off("mousemove"),
            r
                .on("mouseleave", function (e) {
                    let t = { x: 0, y: 0, ease: Back.easeOut.config(4) };
                    o && (t.scale = 1);
                    let n = [s, a];
                    i && n.push(i), TweenLite.to(n, 1, t), (t = null), (n = null);
                })
                .on("mouseenter", function (e) {
                    let t = { transformOrigin: "0 0" };
                    o && (t.scale = "1.03"), TweenLite.to([s, a], 0.3, t), (t = null);
                })
                .on("mousemove", function (e) {
                    dsnGrid.parallaxIt(e, s, t, n), dsnGrid.parallaxIt(e, a, 2 * t, n), void 0 !== i && dsnGrid.parallaxIt(e, i, -5, 0.5);
                });
    },
    removeWhiteSpace: function (e) {
        (e = this.convertToJQuery(e))
            .contents()
            .filter(function () {
                return 3 === this.nodeType;
            })
            .remove(),
            (e = null);
    },
    WebGLDistortionHoverEffects: function (e, t) {
        let n = this.convertToJQuery(t.parent);
        if (!(n.length <= 0) || e.imgs.length)
            return (
                delete t.parent,
                (e.parent = n.get(0)),
                (n = null),
                new (function (e, t, n) {
                    var i,
                        o = t.parent || console.warn("no parent"),
                        r = t.displacement || console.warn("displacement image missing"),
                        s = [],
                        a = this,
                        d = !1,
                        l = e.convertToJQuery(n.nextEl),
                        c = e.convertToJQuery(n.prevEl),
                        h = 0,
                        u = 0;
                    function f(e = 0, t) {
                        let n, i;
                        (this.width = o.offsetWidth),
                            (this.height = o.offsetHeight),
                            this.renderer.setSize(this.width, this.height),
                            (this.camera.aspect = this.width / this.height),
                            (this.imageAspect = !0 === t ? s[e].image.height / s[e].image.width : this.mat.uniforms.texture.value.image.height / this.mat.uniforms.texture.value.image.width),
                            this.height / this.width > this.imageAspect ? ((n = (this.width / this.height) * this.imageAspect), (i = 1)) : ((n = 1), (i = this.height / this.width / this.imageAspect));
                        const r = this.camera.position.z;
                        (this.camera.fov = (180 / Math.PI) * 2 * Math.atan(1 / (2 * r))),
                            (this.plane.scale.x = this.camera.aspect),
                            (this.plane.scale.y = 1),
                            gsap.to(this.mat.uniforms.resolution.value, 0.2, {
                                x: this.width,
                                y: this.height,
                                z: n,
                                w: i,
                                delay: 0.5,
                                yoyo: !0,
                                onUpdate: function () {
                                    this.camera.updateProjectionMatrix(), this.animate();
                                }.bind(this),
                                ease: "none",
                            });
                    }
                    function p() {
                        let e = "";
                        return (
                            (e = n.vertical
                                ? "vec2 distortedPosition = vec2(uv.x, uv.y - dispFactor * (disp.r*effectFactor));\n\t\t\t\t\tvec2 distortedPosition2 = vec2(uv.x, uv.y + (1.0 - dispFactor) * (disp.r*effectFactor));"
                                : " vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*effectFactor), uv.y);\n            vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*effectFactor), uv.y);\n\n            "),
                            `\n        varying vec2 vUv;\n\n        uniform sampler2D texture;\n        uniform sampler2D texture2;\n        uniform sampler2D disp;\n\n        uniform float dispFactor;\n        uniform float effectFactor;\n\t\tuniform vec4 resolution;\n\n\n\n        void main() {\n\n            vec2 uv = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);\n            \n\n            vec4 disp = texture2D(disp, uv);\n\n            ${e}\n\n            vec4 _texture = texture2D(texture, distortedPosition);\n            vec4 _texture2 = texture2D(texture2, distortedPosition2);\n\n            vec4 finalTexture = mix(_texture, _texture2, dispFactor);\n\n            gl_FragColor = finalTexture;\n\n        }\n    `
                        );
                    }
                    function v(e, t) {
                        (d = !0), void 0 !== n.onStart && n.onStart.bind(this, e, t)(), f.bind(this)(e, !0);
                    }
                    function m() {
                        this.animate(), void 0 !== n.onUpdate && n.onUpdate.bind(this)();
                    }
                    function g() {
                        (this.mat.uniforms.texture.value = s[u]), (this.mat.uniforms.dispFactor.value = 0), (d = !1), void 0 !== n.onEnd && n.onEnd.bind(this)();
                    }
                    $(o).addClass("three-js-loader"),
                        (t = $.extend(!0, { imgs: [], intensity: 1, speedIn: 1.6, speedOut: 1.2, hover: !1, easing: Expo.easeOut }, t)),
                        (this.scene = new THREE.Scene()),
                        (this.width = window.innerWidth),
                        (this.height = window.innerHeight),
                        (async function () {
                            return (this.ratio = window.devicePixelRatio), new THREE.WebGLRenderer({ canvas: this.canvas, powerPreference: "high-performance" });
                        })()
                            .then(
                                (e) => (
                                    (this.renderer = e),
                                    this.renderer.setPixelRatio(window.devicePixelRatio),
                                    this.renderer.setClearColor(16777215, 0),
                                    this.renderer.setSize(this.width, this.height),
                                    (this.width = o.offsetWidth),
                                    (this.height = o.offsetHeight),
                                    o.appendChild(this.renderer.domElement),
                                    this.renderer
                                )
                            )
                            .then(() => {
                                (this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.001, 1e3)), this.camera.position.set(0, 0, 2);
                            })
                            .then(() => {
                                this.manager = new THREE.LoadingManager();
                            })
                            .then(() => {
                                (this.loader = new THREE.TextureLoader(this.manager)),
                                    ((i = this.loader.load(r)).wrapS = i.wrapT = THREE.RepeatWrapping),
                                    t.imgs.forEach((e, t) => {
                                        let n = this.loader.load(e);
                                        (n.magFilter = THREE.LinearFilter), (n.minFilter = THREE.LinearFilter), (n.anisotropy = this.renderer.capabilities.getMaxAnisotropy()), (s[t] = n), (n = null);
                                    });
                            })
                            .then(() => {})
                            .then(() => {
                                this.mat = new THREE.ShaderMaterial({
                                    extensions: { derivatives: "#extension GL_OES_standard_derivatives : enable" },
                                    side: THREE.DoubleSide,
                                    uniforms: {
                                        effectFactor: { type: "f", value: t.intensity },
                                        dispFactor: { type: "f", value: 0 },
                                        texture: { type: "t", value: s[0] },
                                        texture2: { type: "t", value: s.length > 1 ? s[1] : s[0] },
                                        disp: { type: "t", value: i },
                                        resolution: { type: "v4", value: new THREE.Vector4() },
                                    },
                                    vertexShader: "\n\t\t\tvarying vec2 vUv;\n\t\t\tvoid main() {\n\t\t\t\tvUv = uv;\n\t\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\t\t\t}",
                                    fragmentShader: p(),
                                    transparent: !0,
                                    opacity: 1,
                                });
                            })
                            .then(() => {
                                (this.geometry = new THREE.PlaneGeometry(1, 1, 2, 2)), (this.plane = new THREE.Mesh(this.geometry, this.mat));
                            })
                            .then(() => {
                                this.scene.add(this.plane);
                            })
                            .then(() => {
                                (this.animate = function () {
                                    this.renderer.render(this.scene, this.camera);
                                }),
                                    (this.manager.onLoad = function () {
                                        $(o).removeClass("three-js-loader"), !0, f.bind(a, 0)(), window.addEventListener("resize", f.bind(a, 0));
                                    });
                            })
                            .then(() => {
                                l.length &&
                                    l.on("click", function () {
                                        a.next();
                                    }),
                                    c.length &&
                                        c.on("click", function () {
                                            a.prev();
                                        });
                            })
                            .then(() => {
                                void 0 !== n.onComplete && n.onComplete.bind(this)();
                            }),
                        (this.next = function () {
                            void 0 === this.renderer || d || ((this.mat.uniforms.effectFactor.value = t.intensity), (h = u), (u = (u + 1) % s.length), this.changeTo(u));
                        }),
                        (this.prev = function () {
                            void 0 === this.renderer || d || ((this.mat.uniforms.effectFactor.value = -1 * t.intensity), (h = u), (u = 0 === u ? s.length - 1 : Math.abs((u - 1) % s.length)), this.changeTo(u));
                        }),
                        (this.changeTo = function (e) {
                            (this.mat.uniforms.texture2.value = s[e]),
                                gsap.to(this.mat.uniforms.dispFactor, t.speedIn, { value: 1, ease: t.easing, onStart: v.bind(this, u, h), onUpdate: m.bind(this, u, h), onComplete: g.bind(this, u, h) });
                        });
                })(this, e, t)
            );
    },
    addSwiper: function (e) {
        $build.swiper.push(e);
    },
    addIso: function (e) {
        $build.isotope.push(e);
    },
    destoryBuild: function () {
        for (let e of $build.swiper) {
            if ("function" == typeof e.destroy)
                try {
                    e.destroy();
                } catch (e) {
                    console.log(e);
                }
            e = null;
        }
        $build.swiper = [];
    },
    loadData: function (e) {
        $(document)
            .find("[data-dsn-" + e + "]")
            .each(function () {
                let t = $(this),
                    n = dsnGrid.getData(t, "srcset", ""),
                    i = $("<img>");
                i.attr("src", dsnGrid.getData(t, e, "")),
                    n && i.attr("srcset", n),
                    i.load(function () {
                        t.attr(e, $(this).attr(e)), n && i.attr("srcset", n);
                    });
            });
    },
    setTitle: function (e) {
        let t = e.match(/<title[^>]*>(.+)<\/title>/);
        t && $("head title").html(t[1]), (t = null);
    },
    setBodyClass: function (e) {
        let t = e.match(/<body[^>]*class="(.+)">/);
        t && $body.attr("class", t[1]), (t = null);
    },
    initAjax: function (e) {
        this.setTitle(e), this.setBodyClass(e);
    },
    cookie: function () {
        return {
            set: function (e, t, n) {
                let i = new Date();
                i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3);
                let o = "expires=" + i.toUTCString();
                (document.cookie = e + "=" + t + ";" + o + ";path=/"), (i = o = e = t = n = null);
            },
            get: function (e) {
                let t = e + "=",
                    n = decodeURIComponent(document.cookie),
                    i = n.split(";");
                for (let e = 0; e < i.length; e++) {
                    let o = i[e];
                    for (; " " === o.charAt(0); ) o = o.substring(1);
                    if (0 === o.indexOf(t)) {
                        let e = o.substring(t.length, o.length);
                        return (o = i = n = t = null), e;
                    }
                }
                return (i = n = t = null), !1;
            },
            remove: function (e) {
                this.set(e, "", -1);
            },
        };
    },
    backgroundPosition: function (e, t, n) {
        var i, o, r, s, a;
        return (
            e instanceof jQuery == !1 && (e = jQuery(e)),
            (n = this.getUndefinedVal(n, {})),
            (i = this.getUndefinedVal(n.sizeX, "105%")),
            (o = this.getUndefinedVal(n.sizeY, "105%")),
            (s = this.getUndefinedVal(n.left, "-5%")),
            (a = this.getUndefinedVal(n.top, "-5%")),
            (r = this.getUndefinedVal(n.move, 100)),
            e.css({ width: i, height: o, left: s, top: a, backgroundPositionX: "calc(50% - " + -2 * r + "px)", backgroundPositionY: "calc(50% - " + -2 * r + "px)" }),
            (t = this.getUndefinedVal(t, 1)),
            e
                .parent()
                .on("mousemove", function (i) {
                    if (void 0 !== n.dataActive && jQuery(this).find(e).hasClass(n.dataActive)) return !1;
                    var o = i.clientX / jQuery(this).width() - 0.5,
                        s = i.clientY / jQuery(this).height() - 0.5;
                    TweenLite.to(jQuery(this).find(e), t, { transformPerspective: 100, x: r * o + r + " ", y: r * s + r + "" }), void 0 !== n.onEnter && n.onEnter(jQuery(this), i);
                })
                .on("mouseleave", function (i) {
                    TweenMax.to(jQuery(this).find(e), t, { x: r, y: r, ease: Back.easeOut.config(4) }), void 0 !== n.onLeave && n.onLeave(jQuery(this), i);
                }),
            dsnGrid
        );
    },
    scaleIt: function (e, t, n) {
        if (void 0 === t) return !1;
        var i,
            o,
            r,
            s = 0;
        (s = body.hasClass("dsn-effect-scroll") ? window.$wind.scrollTop : window.$wind.scrollTop()), (r = this.getUndefinedVal(n.plus, 0)), (i = this.getUndefinedVal(n.position, !1));
        var a = t.offset();
        return (o = void 0 === a || body.hasClass("dsn-effect-scroll") ? 0 : a.top), i && (o -= s), s / (t.height() + o + r);
    },
    scrollerIt: function (e, t, n) {
        if (void 0 === t) return !1;
        var i,
            o,
            r,
            s = window.$wind.scrollTop();
        (r = this.getUndefinedVal(n.duration, 0)), (o = this.getUndefinedVal(n.plus, 0));
        var a = t.offset();
        (i = void 0 !== a ? a.top : 0), (i += r);
        var d = t.height() + i + o;
        if (i <= s && void 0 !== n.action) {
            var l = i - s,
                c = l / d,
                h = s / (t.height() + i + o);
            n.action({ scroll: l, position: c, targetEnd: d, ScrollTop: s, num: h });
        }
        return h;
    },
    setPositionMoveSection: function (e, t, n) {
        if (void 0 !== e) {
            var i = e.offset(),
                o = void 0 === i ? 0 : i.top;
            (t = dsnGrid.getUndefinedVal(t, 2)), (n = dsnGrid.getUndefinedVal(n, 0));
            var r = (e.innerHeight() + o + n) / 2;
            e.css({ marginBottom: (r / t) * -1 });
        }
    },
    mouseWheel: function (e, t, n) {
        e.bind("mousewheel DOMMouseScroll", function (e) {
            e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0 ? void 0 !== n && n(e) : void 0 !== t && t(e);
        });
    },
    convertTextWord: function (e, t, n) {
        var i = e.html().trim().split(" "),
            o = "";
        e.html("");
        for (var r = 0; r < i.length; r++)
            if (i[r].length > 0) {
                if (((o += '<span class="dsn-wrapper">'), n)) {
                    o += '<span class="dsn-word-wrapper">';
                    for (var s = 0; s < i[r].length; s++) o += '<span class="dsn-chars-wrapper">' + i[r].charAt(s) + "</span>";
                    o += "</span>";
                } else o += '<span class="dsn-word-wrapper">' + i[r] + "</span>";
                o += "</span>";
            }
        t.append(o);
    },
    getRndInteger: function (e, t) {
        return Math.floor(Math.random() * (t - e)) + e;
    },
    parallaxMoveElemntCir: function (e, t, n, i, o) {
        var r = e,
            s = this;
        (n = void 0 === n ? 0.5 : parseFloat(n)), (t = void 0 === t ? 20 : parseFloat(t)), (o = void 0 !== o && o);
        var a = r.html(),
            d = $('<div class="icon-circle"></div>'),
            l = $('<div class="dsn-grid-parallax">' + a + "</div>");
        r.html(""),
            r.append(d),
            r.append(l),
            r
                .on("mouseleave", function (e) {
                    TweenMax.to(r, n, { scale: 1 }), TweenMax.to(l, 0.3, { scale: 1, x: 0, y: 0 }), TweenMax.to(d, n, { scale: 1, x: 0, y: 0 });
                })
                .on("mouseenter", function (e) {
                    TweenMax.to(r, n, { transformOrigin: "0 0", scale: 1 }), TweenMax.to(d, n, { scale: 1.2 });
                })
                .on("mousemove", function (e) {
                    s.parallaxIt(e, l, t), dsnGrid.parallaxIt(e, d, t);
                });
    },
    changeSizeText: function (e, t) {
        e instanceof jQuery == !1 && (e = jQuery(e)),
            e.each(function () {
                var e = jQuery(this);
                for (var n in t) e.text().length >= parseInt(n) && (console.log(t[n]), e.css(t[n]));
            });
    },
    animateText: function (e, t, n, i) {
        (t = this.convertToJQuery(t)).each(function () {
            let e = $(this);
            dsnGrid.convertTextWord(e, e), void 0 !== n && e.attr(n, "animate"), void 0 !== i && e.removeClass(i), e.addClass("dsn-has-animate-text");
        });
        var o = 0;
        function r() {
            t.each(function () {
                let e = $(this);
                if (e.hasClass("dsn-animate")) return;
                let t = e.offset().top;
                void 0 !== t && o > t - (window.$wind.height() - 100) && (e.hasClass("dsn-animate") || e.addClass("dsn-animate"));
            });
        }
        var s = null;
        _window.$wind.getListener(function (e) {
            (o = void 0 === e.offset ? window.$wind.scrollTop() : 0), s && clearTimeout(s), (s = setTimeout(r, 10));
        });
    },
    getBoundingClientRect: function (e) {
        const t = e.getBoundingClientRect();
        return { top: t.top, right: t.right, bottom: t.bottom, left: t.left, width: t.width, height: t.height, x: t.x, y: t.y, position: "fixed" };
    },
    progressCircle: function (e) {
        const t = $('[data-dsn-grid="progress-circle"]'),
            n = this.removeAttr(t, "data-dsn-grid-stroke");
        var i = void 0 === n ? "" : 'stroke="' + n + '"';
        t.css({ position: "fixed", right: "-60px", bottom: "60px", width: "52px", height: "52px", "z-index": "99999999" }),
            t.append(
                '<svg class="dsn-progress-circle-up" width="100%" height="100%" ' +
                    i +
                    ' viewBox="0 0 100 100" preserveAspectRatio="xMinYMin meet" fill="none">\n        <path class="dsn-progress-path" d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" style="transition:  stroke-dashoffset 300ms linear 0s;stroke-dasharray: 307.919, 307.919; stroke-dashoffset: 309;"></path>    </svg>'
            );
        var o = wind;
        e.isScroller(!0) && (o = e.getScrollbar()),
            e.getListener(function (e) {
                let n = 0,
                    i = $(document).height() - window.$wind.height();
                void 0 === e.offset ? (n = window.$wind.scrollTop()) : ((n = e.offset.y), (i = $(document).height() - o.getSize().content.height + 100)),
                    n > 70
                        ? (TweenMax.to(t, 1, { ease: Back.easeOut.config(4), right: 60 }), t.find(".dsn-progress-path").css("stroke-dashoffset", 300 - Math.round((300 * n) / i) + "%"))
                        : TweenMax.to(t, 1, { ease: Back.easeIn.config(4), right: -60 });
            }),
            t.on("click", function () {
                e.isScroller(!0) ? o.scrollTo(0, 0, 600) : $("body,html").animate({ scrollTop: 0 }, 300);
            });
    },
};
jQuery.fn.dsnGridStyleObject = function () {
    return this.css(["font-size", "font-style", "font-weight", "line-height", "letter-spacing", "color"]);
};
//# sourceMappingURL=tacnix.min.js.map
