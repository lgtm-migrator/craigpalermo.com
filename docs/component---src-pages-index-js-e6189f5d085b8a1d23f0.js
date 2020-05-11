;(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    MTYL: function(e, t, n) {
      var a = n("q1tI")
      function r(e) {
        return a.createElement("svg", e, [
          a.createElement("path", { d: "M0 0h24v24H0z", fill: "none", key: 0 }),
          a.createElement("path", {
            d:
              "M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z",
            key: 1,
          }),
        ])
      }
      ;(r.defaultProps = {
        viewBox: "0 0 24 24",
        fill: "black",
        width: "18px",
        height: "18px",
      }),
        (e.exports = r),
        (r.default = r)
    },
    N8DM: function(e, t, n) {
      "use strict"
      var a = n("TqRt")
      t.__esModule = !0
      var r = a(n("QL1J"))
      t.ThemeToggler = r.default
    },
    P3O2: function(e, t, n) {
      var a = n("q1tI")
      function r(e) {
        return a.createElement("svg", e, [
          a.createElement("path", {
            d:
              "M10 2c-1.82 0-3.53.5-5 1.35C7.99 5.08 10 8.3 10 12s-2.01 6.92-5 8.65C6.47 21.5 8.18 22 10 22c5.52 0 10-4.48 10-10S15.52 2 10 2z",
            key: 0,
          }),
          a.createElement("path", { d: "M0 0h24v24H0z", fill: "none", key: 1 }),
        ])
      }
      ;(r.defaultProps = { height: "24", viewBox: "0 0 24 24", width: "24" }),
        (e.exports = r),
        (r.default = r)
    },
    QL1J: function(e, t, n) {
      "use strict"
      var a = n("TqRt")
      ;(t.__esModule = !0), (t.default = void 0)
      var r = a(n("PJYZ")),
        l = a(n("VbXa")),
        o = a(n("lSNA")),
        i = a(n("q1tI")),
        u = a(n("17x9")),
        c = (function(e) {
          function t() {
            for (
              var t, n = arguments.length, a = new Array(n), l = 0;
              l < n;
              l++
            )
              a[l] = arguments[l]
            return (
              (t = e.call.apply(e, [this].concat(a)) || this),
              (0, o.default)((0, r.default)(t), "state", { theme: null }),
              t
            )
          }
          ;(0, l.default)(t, e)
          var n = t.prototype
          return (
            (n.componentDidMount = function() {
              var e = this
              this.setState({ theme: window.__theme }),
                (window.__onThemeChange = function() {
                  e.setState({ theme: window.__theme })
                })
            }),
            (n.toggleTheme = function(e) {
              window.__setPreferredTheme(e)
            }),
            (n.render = function() {
              return i.default.createElement(this.props.children, {
                theme: this.state.theme,
                toggleTheme: this.toggleTheme,
              })
            }),
            t
          )
        })(i.default.Component)
      c.propTypes = { children: u.default.func.isRequired }
      var d = c
      t.default = d
    },
    RXBc: function(e, t, n) {
      "use strict"
      n.r(t)
      var a = n("q1tI"),
        r = n.n(a),
        l = n("Wbzz"),
        o = n("6Gk8"),
        i = n("Bl7J"),
        u = n("vrFN"),
        c = n("p3AD"),
        d = n("N8DM"),
        s = n("P3O2"),
        p = n.n(s),
        h = n("MTYL"),
        m = n.n(h)
      var f = (function(e) {
        var t, n
        function a() {
          return e.apply(this, arguments) || this
        }
        return (
          (n = e),
          ((t = a).prototype = Object.create(n.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = n),
          (a.prototype.render = function() {
            return r.a.createElement(
              "button",
              {
                title: "Toggle dark mode",
                style: {
                  position: "absolute",
                  top: "4px",
                  right: "4px",
                  "border-radius": "4px",
                  padding: "8px",
                  height: "42px",
                  width: "42px",
                  "padding-bottom": "0px",
                },
              },
              r.a.createElement(d.ThemeToggler, null, function(e) {
                var t = e.theme,
                  n = e.toggleTheme
                return r.a.createElement(
                  "label",
                  null,
                  r.a.createElement("input", {
                    style: { display: "none" },
                    type: "checkbox",
                    onChange: function(e) {
                      return n(e.target.checked ? "dark" : "light")
                    },
                    checked: "dark" === t,
                  }),
                  " ",
                  "dark" !== t
                    ? r.a.createElement(m.a, null)
                    : r.a.createElement(p.a, null)
                )
              })
            )
          }),
          a
        )
      })(r.a.Component)
      n.d(t, "pageQuery", function() {
        return g
      })
      t.default = function(e) {
        var t = e.data,
          n = e.location,
          a = t.site.siteMetadata.title,
          d = t.allMarkdownRemark.edges
        return r.a.createElement(
          i.a,
          {
            location: n,
            title: a,
            style: {
              backgroundColor: "var(--bg)",
              color: "var(--textNormal)",
              transition: "color 0.2s ease-out, background 0.2s ease-out",
              position: "relative",
            },
          },
          r.a.createElement(u.a, { title: "All posts" }),
          r.a.createElement(f, null),
          r.a.createElement(o.a, null),
          d.map(function(e) {
            var t = e.node,
              n = t.frontmatter.title || t.fields.slug
            return r.a.createElement(
              "article",
              { key: t.fields.slug },
              r.a.createElement(
                "header",
                null,
                r.a.createElement(
                  "h3",
                  { style: { marginBottom: Object(c.a)(0.25) } },
                  r.a.createElement(
                    l.Link,
                    { style: { boxShadow: "none" }, to: t.fields.slug },
                    n
                  )
                ),
                r.a.createElement("small", null, t.frontmatter.date)
              )
            )
          })
        )
      }
      var g = "1623555389"
    },
  },
])
//# sourceMappingURL=component---src-pages-index-js-e6189f5d085b8a1d23f0.js.map
