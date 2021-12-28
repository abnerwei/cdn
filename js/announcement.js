(function() {
    var e, n;
    if (null != window.BetterUptimeAnnouncementWidget)
        return window.BetterUptimeAnnouncementWidget.initialize();
    window.BetterUptimeAnnouncementWidget = {
        current_script: document.currentScript,
        cookie_name: "betteruptime_announcement_bar_dismissed",
        announcement_bar_wrapper: null,
        announcement_bar: null,
        announcement_bar_placeholder: null,
        announcement_link: null,
        announcement_digest: null,
        initialize: function() {
            var e, n, i;
            if (null != (null != (e = this.current_script) && null != (n = e.dataset) ? n.id : void 0))
                return this.load_stylesheet((i = this,
                function() {
                    return i.load_announcement_bar(i.current_script.dataset.id, function(e, n) {
                        var t;
                        if (!n.hidden && (document.querySelectorAll(".betteruptime-announcement").forEach(function(e) {
                            return e.remove()
                        }),
                        i.announcement_bar_wrapper = i.html_to_element(n.html),
                        i.announcement_bar = i.announcement_bar_wrapper.querySelector(".betteruptime-announcement"),
                        i.announcement_digest = n.digest,
                        i.announcement_link = n.link,
                        i.announcement_digest !== i.get_cookie(i.cookie_name)))
                            return i.announcement_bar_placeholder = document.createElement("div"),
                            i.announcement_bar_placeholder.classList.add("betteruptime-announcement__placeholder"),
                            t = document.body.firstChild,
                            document.body.insertBefore(i.announcement_bar_wrapper, t),
                            document.body.insertBefore(i.announcement_bar_placeholder, t),
                            i.resize_placeholder(),
                            i.add_event_handlers()
                    })
                }
                ))
        },
        html_to_element: function(e) {
            var n;
            return n = document.createElement("template"),
            e = e.trim(),
            n.innerHTML = e,
            n.content.firstChild
        },
        load_announcement_bar: function(t, i) {
            var e;
            return i || (i = function() {}
            ),
            e = "https://betteruptime.com/widgets/announcement?id=" + t,
            this.load_async(e, function(e) {
                var n;
                return (n = JSON.parse(e)).success ? i(null, n) : console.error("[Better Uptime] Error loading Announcement Bar, used id: " + t)
            })
        },
        load_async: function(e, n) {
            var t;
            return n || (n = function() {}
            ),
            (t = new XMLHttpRequest).onreadystatechange = function() {
                if (this.readyState === XMLHttpRequest.DONE && 200 === this.status)
                    return n(this.responseText)
            }
            ,
            t.open("GET", e),
            t.send()
        },
        load_stylesheet: function(e) {
            var n;
            return (n = document.createElement("style")).innerText = '.betteruptime-announcement{--betteruptime-announcement-bg: #1F1F20;--betteruptime-announcement-color: #FFFFFF;--betteruptime-annoncement-font-family: SF Pro Display, -apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Helvetica Neue, sans-serif;--betteruptime-annoncement-font-size: 14px;--betteruptime-annoncement-line-height: 1.5;--betteruptime-announcement-padding-x: 16px;--betteruptime-announcement-padding-y: 14px;--betteruptime-announcement-max-width: 970px;position:fixed;top:0;left:0;width:100%;z-index:999999;background:var(--betteruptime-announcement-bg, #1F1F20);color:var(--betteruptime-announcement-color, #fff);padding:var(--betteruptime-announcement-padding-y, 14px) var(--betteruptime-announcement-padding-x, 16px);font-family:var(--betteruptime-annoncement-font-family, "SF Pro Display", -apple-system, "BlinkMacSystemFont", "San Francisco", "Roboto", "Segoe UI", "Helvetica Neue", sans-serif);font-size:var(--betteruptime-annoncement-font-size, 14px);line-height:var(--betteruptime-annoncement-line-height, 1.5)}.betteruptime-announcement,.betteruptime-announcement *{box-sizing:border-box}.betteruptime-announcement__placeholder{position:relative;width:100%;z-index:-1}.betteruptime-announcement__placeholder::after{display:block;clear:both;content:""}.betteruptime-announcement--clickable{cursor:pointer}.betteruptime-announcement__message{width:100%;max-width:var(--betteruptime-announcement-max-width, 970px);margin:0 auto;text-align:center;padding-left:32px;padding-right:32px}.betteruptime-announcement__message p{margin:0}.betteruptime-announcement__message a{color:inherit}.betteruptime-announcement__close{position:absolute;top:0;right:0;padding:var(--betteruptime-announcement-padding-y, 14px) var(--betteruptime-announcement-padding-x, 16px);z-index:10;text-decoration:none;display:block}.betteruptime-announcement__close svg{width:20px;height:20px;fill:var(--betteruptime-announcement-color, #fff)}',
            this.style = document.head.appendChild(n),
            e()
        },
        add_event_handlers: function() {
            var n, t;
            return this.announcement_bar.querySelector("[data-announcement-dismiss]").addEventListener("click", (n = this,
            function(e) {
                return e.preventDefault(),
                e.stopPropagation(),
                n.dismiss_announcement_bar()
            }
            )),
            this.announcement_bar.addEventListener("click", (t = this,
            function(e) {
                return e.preventDefault(),
                t.open_announcement_link()
            }
            ))
        },
        open_announcement_link: function() {
            if (this.announcement_link)
                return window.open(this.announcement_link, "_blank")
        },
        dismiss_announcement_bar: function() {
            return document.cookie = this.cookie_name + "=" + this.announcement_digest,
            this.announcement_bar.remove(),
            this.announcement_bar_wrapper.remove(),
            this.announcement_bar_placeholder.remove(),
            this.style.remove()
        },
        resize_placeholder: function() {
            return this.announcement_bar_placeholder.style.height = this.announcement_bar.offsetHeight + "px"
        },
        get_cookie: function(e) {
            var n, t, i, o;
            for (o = e + "=",
            t = decodeURIComponent(document.cookie).split(";"),
            i = 0; i < t.length; ) {
                for (n = t[i]; " " === n.charAt(0); )
                    n = n.substring(1);
                if (0 === n.indexOf(o))
                    return n.substring(o.length, n.length);
                i++
            }
        }
    },
    n = !1,
    (e = function() {
        if ("loading" !== document.readyState && !n)
            return window.BetterUptimeAnnouncementWidget.initialize(),
            n = !0
    }
    )(),
    document.onreadystatechange = e,
    document.addEventListener("turbolinks:load", function() {
        return n = !1,
        e()
    })
}
).call(this);
