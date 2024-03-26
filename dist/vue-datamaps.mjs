var Oh = "4.2.2";
function Pn(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function ya(t) {
  return t.length === 1 && (t = Dh(t)), {
    left: function(n, e, i, r) {
      for (i == null && (i = 0), r == null && (r = n.length); i < r; ) {
        var o = i + r >>> 1;
        t(n[o], e) < 0 ? i = o + 1 : r = o;
      }
      return i;
    },
    right: function(n, e, i, r) {
      for (i == null && (i = 0), r == null && (r = n.length); i < r; ) {
        var o = i + r >>> 1;
        t(n[o], e) > 0 ? r = o : i = o + 1;
      }
      return i;
    }
  };
}
function Dh(t) {
  return function(n, e) {
    return Pn(t(n), e);
  };
}
var bl = ya(Pn), Sn = bl.right, zh = bl.left;
function Lh(t, n) {
  return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function ln(t) {
  return t === null ? NaN : +t;
}
function xl(t, n) {
  var e = t.length, i = 0, r, o, a = 0, u = -1, s = 0;
  if (n == null)
    for (; ++u < e; )
      isNaN(r = ln(t[u])) || (o = r - i, i += o / ++s, a += o * (r - i));
  else
    for (; ++u < e; )
      isNaN(r = ln(n(t[u], u, t))) || (o = r - i, i += o / ++s, a += o * (r - i));
  if (s > 1)
    return a / (s - 1);
}
function Ml(t, n) {
  var e = xl(t, n);
  return e && Math.sqrt(e);
}
function Cl(t, n) {
  var e = -1, i = t.length, r, o, a;
  if (n == null) {
    for (; ++e < i; )
      if ((o = t[e]) != null && o >= o) {
        r = a = o;
        break;
      }
    for (; ++e < i; )
      (o = t[e]) != null && (r > o && (r = o), a < o && (a = o));
  } else {
    for (; ++e < i; )
      if ((o = n(t[e], e, t)) != null && o >= o) {
        r = a = o;
        break;
      }
    for (; ++e < i; )
      (o = n(t[e], e, t)) != null && (r > o && (r = o), a < o && (a = o));
  }
  return [r, a];
}
var Sl = Array.prototype, Ih = Sl.slice, Fh = Sl.map;
function ci(t) {
  return function() {
    return t;
  };
}
function Uh(t) {
  return t;
}
function zt(t, n, e) {
  t = +t, n = +n, e = (r = arguments.length) < 2 ? (n = t, t = 0, 1) : r < 3 ? 1 : +e;
  for (var i = -1, r = Math.max(0, Math.ceil((n - t) / e)) | 0, o = new Array(r); ++i < r; )
    o[i] = t + i * e;
  return o;
}
var Yh = Math.sqrt(50), Hh = Math.sqrt(10), Bh = Math.sqrt(2);
function Sr(t, n, e) {
  var i = kn(t, n, e);
  return zt(
    Math.ceil(t / i) * i,
    Math.floor(n / i) * i + i / 2,
    i
  );
}
function kn(t, n, e) {
  var i = Math.abs(n - t) / Math.max(0, e), r = Math.pow(10, Math.floor(Math.log(i) / Math.LN10)), o = i / r;
  return o >= Yh ? r *= 10 : o >= Hh ? r *= 5 : o >= Bh && (r *= 2), n < t ? -r : r;
}
function kl(t) {
  return Math.ceil(Math.log(t.length) / Math.LN2) + 1;
}
function Xh() {
  var t = Uh, n = Cl, e = kl;
  function i(r) {
    var o, a = r.length, u, s = new Array(a);
    for (o = 0; o < a; ++o)
      s[o] = t(r[o], o, r);
    var l = n(s), f = l[0], h = l[1], c = e(s, f, h);
    Array.isArray(c) || (c = Sr(f, h, c));
    for (var p = c.length; c[0] <= f; )
      c.shift(), --p;
    for (; c[p - 1] >= h; )
      c.pop(), --p;
    var g = new Array(p + 1), d;
    for (o = 0; o <= p; ++o)
      d = g[o] = [], d.x0 = o > 0 ? c[o - 1] : f, d.x1 = o < p ? c[o] : h;
    for (o = 0; o < a; ++o)
      u = s[o], f <= u && u <= h && g[Sn(c, u, 0, p)].push(r[o]);
    return g;
  }
  return i.value = function(r) {
    return arguments.length ? (t = typeof r == "function" ? r : ci(r), i) : t;
  }, i.domain = function(r) {
    return arguments.length ? (n = typeof r == "function" ? r : ci([r[0], r[1]]), i) : n;
  }, i.thresholds = function(r) {
    return arguments.length ? (e = typeof r == "function" ? r : Array.isArray(r) ? ci(Ih.call(r)) : ci(r), i) : e;
  }, i;
}
function Ue(t, n, e) {
  if (e == null && (e = ln), !!(i = t.length)) {
    if ((n = +n) <= 0 || i < 2)
      return +e(t[0], 0, t);
    if (n >= 1)
      return +e(t[i - 1], i - 1, t);
    var i, r = (i - 1) * n, o = Math.floor(r), a = +e(t[o], o, t), u = +e(t[o + 1], o + 1, t);
    return a + (u - a) * (r - o);
  }
}
function Wh(t, n, e) {
  return t = Fh.call(t, ln).sort(Pn), Math.ceil((e - n) / (2 * (Ue(t, 0.75) - Ue(t, 0.25)) * Math.pow(t.length, -1 / 3)));
}
function qh(t, n, e) {
  return Math.ceil((e - n) / (3.5 * Ml(t) * Math.pow(t.length, -1 / 3)));
}
function Gh(t, n) {
  var e = -1, i = t.length, r, o;
  if (n == null) {
    for (; ++e < i; )
      if ((o = t[e]) != null && o >= o) {
        r = o;
        break;
      }
    for (; ++e < i; )
      (o = t[e]) != null && o > r && (r = o);
  } else {
    for (; ++e < i; )
      if ((o = n(t[e], e, t)) != null && o >= o) {
        r = o;
        break;
      }
    for (; ++e < i; )
      (o = n(t[e], e, t)) != null && o > r && (r = o);
  }
  return r;
}
function Vh(t, n) {
  var e = 0, i = t.length, r, o = -1, a = i;
  if (n == null)
    for (; ++o < i; )
      isNaN(r = ln(t[o])) ? --a : e += r;
  else
    for (; ++o < i; )
      isNaN(r = ln(n(t[o], o, t))) ? --a : e += r;
  if (a)
    return e / a;
}
function Kh(t, n) {
  var e = [], i = t.length, r, o = -1;
  if (n == null)
    for (; ++o < i; )
      isNaN(r = ln(t[o])) || e.push(r);
  else
    for (; ++o < i; )
      isNaN(r = ln(n(t[o], o, t))) || e.push(r);
  return Ue(e.sort(Pn), 0.5);
}
function _a(t) {
  for (var n = t.length, e, i = -1, r = 0, o, a; ++i < n; )
    r += t[i].length;
  for (o = new Array(r); --n >= 0; )
    for (a = t[n], e = a.length; --e >= 0; )
      o[--r] = a[e];
  return o;
}
function Tl(t, n) {
  var e = -1, i = t.length, r, o;
  if (n == null) {
    for (; ++e < i; )
      if ((o = t[e]) != null && o >= o) {
        r = o;
        break;
      }
    for (; ++e < i; )
      (o = t[e]) != null && r > o && (r = o);
  } else {
    for (; ++e < i; )
      if ((o = n(t[e], e, t)) != null && o >= o) {
        r = o;
        break;
      }
    for (; ++e < i; )
      (o = n(t[e], e, t)) != null && r > o && (r = o);
  }
  return r;
}
function Zh(t) {
  for (var n = 0, e = t.length - 1, i = t[0], r = new Array(e < 0 ? 0 : e); n < e; )
    r[n] = [i, i = t[++n]];
  return r;
}
function Jh(t, n) {
  for (var e = n.length, i = new Array(e); e--; )
    i[e] = t[n[e]];
  return i;
}
function Qh(t, n) {
  if (!!(i = t.length)) {
    var e = 0, i, r = 0, o, a = t[r];
    for (n || (n = Pn); ++e < i; )
      (n(o = t[e], a) < 0 || n(a, a) !== 0) && (a = o, r = e);
    if (n(a, a) === 0)
      return r;
  }
}
function jh(t, n, e) {
  for (var i = (e == null ? t.length : e) - (n = n == null ? 0 : +n), r, o; i; )
    o = Math.random() * i-- | 0, r = t[i + n], t[i + n] = t[o + n], t[o + n] = r;
  return t;
}
function t0(t, n) {
  var e = 0, i = t.length, r, o = -1;
  if (n == null)
    for (; ++o < i; )
      (r = +t[o]) && (e += r);
  else
    for (; ++o < i; )
      (r = +n(t[o], o, t)) && (e += r);
  return e;
}
function Al(t) {
  if (!(o = t.length))
    return [];
  for (var n = -1, e = Tl(t, n0), i = new Array(e); ++n < e; )
    for (var r = -1, o, a = i[n] = new Array(o); ++r < o; )
      a[r] = t[r][n];
  return i;
}
function n0(t) {
  return t.length;
}
function e0() {
  return Al(arguments);
}
var Pt = "$";
function Ii() {
}
Ii.prototype = Gt.prototype = {
  constructor: Ii,
  has: function(t) {
    return Pt + t in this;
  },
  get: function(t) {
    return this[Pt + t];
  },
  set: function(t, n) {
    return this[Pt + t] = n, this;
  },
  remove: function(t) {
    var n = Pt + t;
    return n in this && delete this[n];
  },
  clear: function() {
    for (var t in this)
      t[0] === Pt && delete this[t];
  },
  keys: function() {
    var t = [];
    for (var n in this)
      n[0] === Pt && t.push(n.slice(1));
    return t;
  },
  values: function() {
    var t = [];
    for (var n in this)
      n[0] === Pt && t.push(this[n]);
    return t;
  },
  entries: function() {
    var t = [];
    for (var n in this)
      n[0] === Pt && t.push({ key: n.slice(1), value: this[n] });
    return t;
  },
  size: function() {
    var t = 0;
    for (var n in this)
      n[0] === Pt && ++t;
    return t;
  },
  empty: function() {
    for (var t in this)
      if (t[0] === Pt)
        return !1;
    return !0;
  },
  each: function(t) {
    for (var n in this)
      n[0] === Pt && t(this[n], n.slice(1), this);
  }
};
function Gt(t, n) {
  var e = new Ii();
  if (t instanceof Ii)
    t.each(function(u, s) {
      e.set(s, u);
    });
  else if (Array.isArray(t)) {
    var i = -1, r = t.length, o;
    if (n == null)
      for (; ++i < r; )
        e.set(i, t[i]);
    else
      for (; ++i < r; )
        e.set(n(o = t[i], i, t), o);
  } else if (t)
    for (var a in t)
      e.set(a, t[a]);
  return e;
}
function i0() {
  var t = [], n = [], e, i, r;
  function o(u, s, l, f) {
    if (s >= t.length)
      return i != null ? i(u) : e != null ? u.sort(e) : u;
    for (var h = -1, c = u.length, p = t[s++], g, d, v = Gt(), y, m = l(); ++h < c; )
      (y = v.get(g = p(d = u[h]) + "")) ? y.push(d) : v.set(g, [d]);
    return v.each(function(_, M) {
      f(m, M, o(_, s, l, f));
    }), m;
  }
  function a(u, s) {
    if (++s > t.length)
      return u;
    var l, f = n[s - 1];
    return i != null && s >= t.length ? l = u.entries() : (l = [], u.each(function(h, c) {
      l.push({ key: c, values: a(h, s) });
    })), f != null ? l.sort(function(h, c) {
      return f(h.key, c.key);
    }) : l;
  }
  return r = {
    object: function(u) {
      return o(u, 0, r0, o0);
    },
    map: function(u) {
      return o(u, 0, Pu, Ou);
    },
    entries: function(u) {
      return a(o(u, 0, Pu, Ou), 0);
    },
    key: function(u) {
      return t.push(u), r;
    },
    sortKeys: function(u) {
      return n[t.length - 1] = u, r;
    },
    sortValues: function(u) {
      return e = u, r;
    },
    rollup: function(u) {
      return i = u, r;
    }
  };
}
function r0() {
  return {};
}
function o0(t, n, e) {
  t[n] = e;
}
function Pu() {
  return Gt();
}
function Ou(t, n, e) {
  t.set(n, e);
}
function Fi() {
}
var mn = Gt.prototype;
Fi.prototype = El.prototype = {
  constructor: Fi,
  has: mn.has,
  add: function(t) {
    return t += "", this[Pt + t] = t, this;
  },
  remove: mn.remove,
  clear: mn.clear,
  values: mn.keys,
  size: mn.size,
  empty: mn.empty,
  each: mn.each
};
function El(t, n) {
  var e = new Fi();
  if (t instanceof Fi)
    t.each(function(o) {
      e.add(o);
    });
  else if (t) {
    var i = -1, r = t.length;
    if (n == null)
      for (; ++i < r; )
        e.add(t[i]);
    else
      for (; ++i < r; )
        e.add(n(t[i], i, t));
  }
  return e;
}
function a0(t) {
  var n = [];
  for (var e in t)
    n.push(e);
  return n;
}
function u0(t) {
  var n = [];
  for (var e in t)
    n.push(t[e]);
  return n;
}
function s0(t) {
  var n = [];
  for (var e in t)
    n.push({ key: e, value: t[e] });
  return n;
}
function l0(t, n) {
  return t = t == null ? 0 : +t, n = n == null ? 1 : +n, arguments.length === 1 ? (n = t, t = 0) : n -= t, function() {
    return Math.random() * n + t;
  };
}
function Nl(t, n) {
  var e, i;
  return t = t == null ? 0 : +t, n = n == null ? 1 : +n, function() {
    var r;
    if (e != null)
      r = e, e = null;
    else
      do
        e = Math.random() * 2 - 1, r = Math.random() * 2 - 1, i = e * e + r * r;
      while (!i || i > 1);
    return t + n * r * Math.sqrt(-2 * Math.log(i) / i);
  };
}
function c0() {
  var t = Nl.apply(this, arguments);
  return function() {
    return Math.exp(t());
  };
}
function $l(t) {
  return function() {
    for (var n = 0, e = 0; e < t; ++e)
      n += Math.random();
    return n;
  };
}
function f0(t) {
  var n = $l(t);
  return function() {
    return n() / t;
  };
}
function h0(t) {
  return function() {
    return -Math.log(1 - Math.random()) / t;
  };
}
function p0(t) {
  return +t;
}
function g0(t) {
  return t * t;
}
function d0(t) {
  return t * (2 - t);
}
function Du(t) {
  return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
}
function v0(t) {
  return t * t * t;
}
function y0(t) {
  return --t * t * t + 1;
}
function $o(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var ma = 3, _0 = function t(n) {
  n = +n;
  function e(i) {
    return Math.pow(i, n);
  }
  return e.exponent = t, e;
}(ma), m0 = function t(n) {
  n = +n;
  function e(i) {
    return 1 - Math.pow(1 - i, n);
  }
  return e.exponent = t, e;
}(ma), zu = function t(n) {
  n = +n;
  function e(i) {
    return ((i *= 2) <= 1 ? Math.pow(i, n) : 2 - Math.pow(2 - i, n)) / 2;
  }
  return e.exponent = t, e;
}(ma), Rl = Math.PI, Pl = Rl / 2;
function w0(t) {
  return 1 - Math.cos(t * Pl);
}
function b0(t) {
  return Math.sin(t * Pl);
}
function Lu(t) {
  return (1 - Math.cos(Rl * t)) / 2;
}
function x0(t) {
  return Math.pow(2, 10 * t - 10);
}
function M0(t) {
  return 1 - Math.pow(2, -10 * t);
}
function Iu(t) {
  return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2;
}
function C0(t) {
  return 1 - Math.sqrt(1 - t * t);
}
function S0(t) {
  return Math.sqrt(1 - --t * t);
}
function Fu(t) {
  return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
}
var Ro = 4 / 11, k0 = 6 / 11, T0 = 8 / 11, A0 = 3 / 4, E0 = 9 / 11, N0 = 10 / 11, $0 = 15 / 16, R0 = 21 / 22, P0 = 63 / 64, fi = 1 / Ro / Ro;
function O0(t) {
  return 1 - Ye(1 - t);
}
function Ye(t) {
  return (t = +t) < Ro ? fi * t * t : t < T0 ? fi * (t -= k0) * t + A0 : t < N0 ? fi * (t -= E0) * t + $0 : fi * (t -= R0) * t + P0;
}
function D0(t) {
  return ((t *= 2) <= 1 ? 1 - Ye(1 - t) : Ye(t - 1) + 1) / 2;
}
var wa = 1.70158, z0 = function t(n) {
  n = +n;
  function e(i) {
    return i * i * ((n + 1) * i - n);
  }
  return e.overshoot = t, e;
}(wa), L0 = function t(n) {
  n = +n;
  function e(i) {
    return --i * i * ((n + 1) * i + n) + 1;
  }
  return e.overshoot = t, e;
}(wa), Uu = function t(n) {
  n = +n;
  function e(i) {
    return ((i *= 2) < 1 ? i * i * ((n + 1) * i - n) : (i -= 2) * i * ((n + 1) * i + n) + 2) / 2;
  }
  return e.overshoot = t, e;
}(wa), ie = 2 * Math.PI, ba = 1, xa = 0.3, I0 = function t(n, e) {
  var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= ie);
  function r(o) {
    return n * Math.pow(2, 10 * --o) * Math.sin((i - o) / e);
  }
  return r.amplitude = function(o) {
    return t(o, e * ie);
  }, r.period = function(o) {
    return t(n, o);
  }, r;
}(ba, xa), Yu = function t(n, e) {
  var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= ie);
  function r(o) {
    return 1 - n * Math.pow(2, -10 * (o = +o)) * Math.sin((o + i) / e);
  }
  return r.amplitude = function(o) {
    return t(o, e * ie);
  }, r.period = function(o) {
    return t(n, o);
  }, r;
}(ba, xa), F0 = function t(n, e) {
  var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= ie);
  function r(o) {
    return ((o = o * 2 - 1) < 0 ? n * Math.pow(2, 10 * o) * Math.sin((i - o) / e) : 2 - n * Math.pow(2, -10 * o) * Math.sin((i + o) / e)) / 2;
  }
  return r.amplitude = function(o) {
    return t(o, e * ie);
  }, r.period = function(o) {
    return t(n, o);
  }, r;
}(ba, xa);
function U0(t) {
  for (var n = -1, e = t.length, i, r = t[e - 1], o = 0; ++n < e; )
    i = r, r = t[n], o += i[1] * r[0] - i[0] * r[1];
  return o / 2;
}
function Y0(t) {
  for (var n = -1, e = t.length, i = 0, r = 0, o, a = t[e - 1], u, s = 0; ++n < e; )
    o = a, a = t[n], s += u = o[0] * a[1] - a[0] * o[1], i += (o[0] + a[0]) * u, r += (o[1] + a[1]) * u;
  return s *= 3, [i / s, r / s];
}
function H0(t, n, e) {
  return (n[0] - t[0]) * (e[1] - t[1]) - (n[1] - t[1]) * (e[0] - t[0]);
}
function B0(t, n) {
  return t[0] - n[0] || t[1] - n[1];
}
function Hu(t) {
  for (var n = t.length, e = [0, 1], i = 2, r = 2; r < n; ++r) {
    for (; i > 1 && H0(t[e[i - 2]], t[e[i - 1]], t[r]) <= 0; )
      --i;
    e[i++] = r;
  }
  return e.slice(0, i);
}
function X0(t) {
  if ((e = t.length) < 3)
    return null;
  var n, e, i = new Array(e), r = new Array(e);
  for (n = 0; n < e; ++n)
    i[n] = [+t[n][0], +t[n][1], n];
  for (i.sort(B0), n = 0; n < e; ++n)
    r[n] = [i[n][0], -i[n][1]];
  var o = Hu(i), a = Hu(r), u = a[0] === o[0], s = a[a.length - 1] === o[o.length - 1], l = [];
  for (n = o.length - 1; n >= 0; --n)
    l.push(t[i[o[n]][2]]);
  for (n = +u; n < a.length - s; ++n)
    l.push(t[i[a[n]][2]]);
  return l;
}
function W0(t, n) {
  for (var e = t.length, i = t[e - 1], r = n[0], o = n[1], a = i[0], u = i[1], s, l, f = !1, h = 0; h < e; ++h)
    i = t[h], s = i[0], l = i[1], l > o != u > o && r < (a - s) * (o - l) / (u - l) + s && (f = !f), a = s, u = l;
  return f;
}
function q0(t) {
  for (var n = -1, e = t.length, i = t[e - 1], r, o, a = i[0], u = i[1], s = 0; ++n < e; )
    r = a, o = u, i = t[n], a = i[0], u = i[1], r -= a, o -= u, s += Math.sqrt(r * r + o * o);
  return s;
}
var Po = Math.PI, Oo = 2 * Po, Vn = 1e-6, G0 = Oo - Vn;
function Do() {
  this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = [];
}
function On() {
  return new Do();
}
Do.prototype = On.prototype = {
  constructor: Do,
  moveTo: function(t, n) {
    this._.push("M", this._x0 = this._x1 = +t, ",", this._y0 = this._y1 = +n);
  },
  closePath: function() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._.push("Z"));
  },
  lineTo: function(t, n) {
    this._.push("L", this._x1 = +t, ",", this._y1 = +n);
  },
  quadraticCurveTo: function(t, n, e, i) {
    this._.push("Q", +t, ",", +n, ",", this._x1 = +e, ",", this._y1 = +i);
  },
  bezierCurveTo: function(t, n, e, i, r, o) {
    this._.push("C", +t, ",", +n, ",", +e, ",", +i, ",", this._x1 = +r, ",", this._y1 = +o);
  },
  arcTo: function(t, n, e, i, r) {
    t = +t, n = +n, e = +e, i = +i, r = +r;
    var o = this._x1, a = this._y1, u = e - t, s = i - n, l = o - t, f = a - n, h = l * l + f * f;
    if (r < 0)
      throw new Error("negative radius: " + r);
    if (this._x1 === null)
      this._.push(
        "M",
        this._x1 = t,
        ",",
        this._y1 = n
      );
    else if (h > Vn)
      if (!(Math.abs(f * u - s * l) > Vn) || !r)
        this._.push(
          "L",
          this._x1 = t,
          ",",
          this._y1 = n
        );
      else {
        var c = e - o, p = i - a, g = u * u + s * s, d = c * c + p * p, v = Math.sqrt(g), y = Math.sqrt(h), m = r * Math.tan((Po - Math.acos((g + h - d) / (2 * v * y))) / 2), _ = m / y, M = m / v;
        Math.abs(_ - 1) > Vn && this._.push(
          "L",
          t + _ * l,
          ",",
          n + _ * f
        ), this._.push(
          "A",
          r,
          ",",
          r,
          ",0,0,",
          +(f * c > l * p),
          ",",
          this._x1 = t + M * u,
          ",",
          this._y1 = n + M * s
        );
      }
  },
  arc: function(t, n, e, i, r, o) {
    t = +t, n = +n, e = +e;
    var a = e * Math.cos(i), u = e * Math.sin(i), s = t + a, l = n + u, f = 1 ^ o, h = o ? i - r : r - i;
    if (e < 0)
      throw new Error("negative radius: " + e);
    this._x1 === null ? this._.push(
      "M",
      s,
      ",",
      l
    ) : (Math.abs(this._x1 - s) > Vn || Math.abs(this._y1 - l) > Vn) && this._.push(
      "L",
      s,
      ",",
      l
    ), e && (h > G0 ? this._.push(
      "A",
      e,
      ",",
      e,
      ",0,1,",
      f,
      ",",
      t - a,
      ",",
      n - u,
      "A",
      e,
      ",",
      e,
      ",0,1,",
      f,
      ",",
      this._x1 = s,
      ",",
      this._y1 = l
    ) : (h < 0 && (h = h % Oo + Oo), this._.push(
      "A",
      e,
      ",",
      e,
      ",0,",
      +(h >= Po),
      ",",
      f,
      ",",
      this._x1 = t + e * Math.cos(r),
      ",",
      this._y1 = n + e * Math.sin(r)
    )));
  },
  rect: function(t, n, e, i) {
    this._.push("M", this._x0 = this._x1 = +t, ",", this._y0 = this._y1 = +n, "h", +e, "v", +i, "h", -e, "Z");
  },
  toString: function() {
    return this._.join("");
  }
};
function V0(t) {
  var n = +this._x.call(null, t), e = +this._y.call(null, t);
  return Ol(this.cover(n, e), n, e, t);
}
function Ol(t, n, e, i) {
  if (isNaN(n) || isNaN(e))
    return t;
  var r, o = t._root, a = { data: i }, u = t._x0, s = t._y0, l = t._x1, f = t._y1, h, c, p, g, d, v, y, m;
  if (!o)
    return t._root = a, t;
  for (; o.length; )
    if ((d = n >= (h = (u + l) / 2)) ? u = h : l = h, (v = e >= (c = (s + f) / 2)) ? s = c : f = c, r = o, !(o = o[y = v << 1 | d]))
      return r[y] = a, t;
  if (p = +t._x.call(null, o.data), g = +t._y.call(null, o.data), n === p && e === g)
    return a.next = o, r ? r[y] = a : t._root = a, t;
  do
    r = r ? r[y] = new Array(4) : t._root = new Array(4), (d = n >= (h = (u + l) / 2)) ? u = h : l = h, (v = e >= (c = (s + f) / 2)) ? s = c : f = c;
  while ((y = v << 1 | d) === (m = (g >= c) << 1 | p >= h));
  return r[m] = o, r[y] = a, t;
}
function K0(t) {
  var n, e, i = t.length, r, o, a = new Array(i), u = new Array(i), s = 1 / 0, l = 1 / 0, f = -1 / 0, h = -1 / 0;
  for (e = 0; e < i; ++e)
    isNaN(r = +this._x.call(null, n = t[e])) || isNaN(o = +this._y.call(null, n)) || (a[e] = r, u[e] = o, r < s && (s = r), r > f && (f = r), o < l && (l = o), o > h && (h = o));
  for (f < s && (s = this._x0, f = this._x1), h < l && (l = this._y0, h = this._y1), this.cover(s, l).cover(f, h), e = 0; e < i; ++e)
    Ol(this, a[e], u[e], t[e]);
  return this;
}
function Z0(t, n) {
  if (isNaN(t = +t) || isNaN(n = +n))
    return this;
  var e = this._x0, i = this._y0, r = this._x1, o = this._y1;
  if (isNaN(e))
    r = (e = Math.floor(t)) + 1, o = (i = Math.floor(n)) + 1;
  else if (e > t || t > r || i > n || n > o) {
    var a = r - e, u = this._root, s, l;
    switch (l = (n < (i + o) / 2) << 1 | t < (e + r) / 2) {
      case 0: {
        do
          s = new Array(4), s[l] = u, u = s;
        while (a *= 2, r = e + a, o = i + a, t > r || n > o);
        break;
      }
      case 1: {
        do
          s = new Array(4), s[l] = u, u = s;
        while (a *= 2, e = r - a, o = i + a, e > t || n > o);
        break;
      }
      case 2: {
        do
          s = new Array(4), s[l] = u, u = s;
        while (a *= 2, r = e + a, i = o - a, t > r || i > n);
        break;
      }
      case 3: {
        do
          s = new Array(4), s[l] = u, u = s;
        while (a *= 2, e = r - a, i = o - a, e > t || i > n);
        break;
      }
    }
    this._root && this._root.length && (this._root = u);
  } else
    return this;
  return this._x0 = e, this._y0 = i, this._x1 = r, this._y1 = o, this;
}
function J0() {
  var t = [];
  return this.visit(function(n) {
    if (!n.length)
      do
        t.push(n.data);
      while (n = n.next);
  }), t;
}
function Q0(t) {
  return arguments.length ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
}
function bt(t, n, e, i, r) {
  this.node = t, this.x0 = n, this.y0 = e, this.x1 = i, this.y1 = r;
}
function j0(t, n, e) {
  var i, r = this._x0, o = this._y0, a, u, s, l, f = this._x1, h = this._y1, c = [], p = this._root, g, d;
  for (p && c.push(new bt(p, r, o, f, h)), e == null ? e = 1 / 0 : (r = t - e, o = n - e, f = t + e, h = n + e, e *= e); g = c.pop(); )
    if (!(!(p = g.node) || (a = g.x0) > f || (u = g.y0) > h || (s = g.x1) < r || (l = g.y1) < o))
      if (p.length) {
        var v = (a + s) / 2, y = (u + l) / 2;
        c.push(
          new bt(p[3], v, y, s, l),
          new bt(p[2], a, y, v, l),
          new bt(p[1], v, u, s, y),
          new bt(p[0], a, u, v, y)
        ), (d = (n >= y) << 1 | t >= v) && (g = c[c.length - 1], c[c.length - 1] = c[c.length - 1 - d], c[c.length - 1 - d] = g);
      } else {
        var m = t - +this._x.call(null, p.data), _ = n - +this._y.call(null, p.data), M = m * m + _ * _;
        if (M < e) {
          var b = Math.sqrt(e = M);
          r = t - b, o = n - b, f = t + b, h = n + b, i = p.data;
        }
      }
  return i;
}
function tp(t) {
  if (isNaN(f = +this._x.call(null, t)) || isNaN(h = +this._y.call(null, t)))
    return this;
  var n, e = this._root, i, r, o, a = this._x0, u = this._y0, s = this._x1, l = this._y1, f, h, c, p, g, d, v, y;
  if (!e)
    return this;
  if (e.length)
    for (; ; ) {
      if ((g = f >= (c = (a + s) / 2)) ? a = c : s = c, (d = h >= (p = (u + l) / 2)) ? u = p : l = p, n = e, !(e = e[v = d << 1 | g]))
        return this;
      if (!e.length)
        break;
      (n[v + 1 & 3] || n[v + 2 & 3] || n[v + 3 & 3]) && (i = n, y = v);
    }
  for (; e.data !== t; )
    if (r = e, !(e = e.next))
      return this;
  return (o = e.next) && delete e.next, r ? (o ? r.next = o : delete r.next, this) : n ? (o ? n[v] = o : delete n[v], (e = n[0] || n[1] || n[2] || n[3]) && e === (n[3] || n[2] || n[1] || n[0]) && !e.length && (i ? i[y] = e : this._root = e), this) : (this._root = o, this);
}
function np(t) {
  for (var n = 0, e = t.length; n < e; ++n)
    this.remove(t[n]);
  return this;
}
function ep() {
  return this._root;
}
function ip() {
  var t = 0;
  return this.visit(function(n) {
    if (!n.length)
      do
        ++t;
      while (n = n.next);
  }), t;
}
function rp(t) {
  var n = [], e, i = this._root, r, o, a, u, s;
  for (i && n.push(new bt(i, this._x0, this._y0, this._x1, this._y1)); e = n.pop(); )
    if (!t(i = e.node, o = e.x0, a = e.y0, u = e.x1, s = e.y1) && i.length) {
      var l = (o + u) / 2, f = (a + s) / 2;
      (r = i[3]) && n.push(new bt(r, l, f, u, s)), (r = i[2]) && n.push(new bt(r, o, f, l, s)), (r = i[1]) && n.push(new bt(r, l, a, u, f)), (r = i[0]) && n.push(new bt(r, o, a, l, f));
    }
  return this;
}
function op(t) {
  var n = [], e = [], i;
  for (this._root && n.push(new bt(this._root, this._x0, this._y0, this._x1, this._y1)); i = n.pop(); ) {
    var r = i.node;
    if (r.length) {
      var o, a = i.x0, u = i.y0, s = i.x1, l = i.y1, f = (a + s) / 2, h = (u + l) / 2;
      (o = r[0]) && n.push(new bt(o, a, u, f, h)), (o = r[1]) && n.push(new bt(o, f, u, s, h)), (o = r[2]) && n.push(new bt(o, a, h, f, l)), (o = r[3]) && n.push(new bt(o, f, h, s, l));
    }
    e.push(i);
  }
  for (; i = e.pop(); )
    t(i.node, i.x0, i.y0, i.x1, i.y1);
  return this;
}
function ap(t) {
  return t[0];
}
function up(t) {
  return arguments.length ? (this._x = t, this) : this._x;
}
function sp(t) {
  return t[1];
}
function lp(t) {
  return arguments.length ? (this._y = t, this) : this._y;
}
function kr(t, n, e) {
  var i = new Ma(n == null ? ap : n, e == null ? sp : e, NaN, NaN, NaN, NaN);
  return t == null ? i : i.addAll(t);
}
function Ma(t, n, e, i, r, o) {
  this._x = t, this._y = n, this._x0 = e, this._y0 = i, this._x1 = r, this._y1 = o, this._root = void 0;
}
function Bu(t) {
  for (var n = { data: t.data }, e = n; t = t.next; )
    e = e.next = { data: t.data };
  return n;
}
var Ct = kr.prototype = Ma.prototype;
Ct.copy = function() {
  var t = new Ma(this._x, this._y, this._x0, this._y0, this._x1, this._y1), n = this._root, e, i;
  if (!n)
    return t;
  if (!n.length)
    return t._root = Bu(n), t;
  for (e = [{ source: n, target: t._root = new Array(4) }]; n = e.pop(); )
    for (var r = 0; r < 4; ++r)
      (i = n.source[r]) && (i.length ? e.push({ source: i, target: n.target[r] = new Array(4) }) : n.target[r] = Bu(i));
  return t;
};
Ct.add = V0;
Ct.addAll = K0;
Ct.cover = Z0;
Ct.data = J0;
Ct.extent = Q0;
Ct.find = j0;
Ct.remove = tp;
Ct.removeAll = np;
Ct.root = ep;
Ct.size = ip;
Ct.visit = rp;
Ct.visitAfter = op;
Ct.x = up;
Ct.y = lp;
var cp = [].slice, fp = {};
function zo(t) {
  if (!(t >= 1))
    throw new Error();
  this._size = t, this._call = this._error = null, this._tasks = [], this._data = [], this._waiting = this._active = this._ended = this._start = 0;
}
zo.prototype = zl.prototype = {
  constructor: zo,
  defer: function(t) {
    if (typeof t != "function" || this._call)
      throw new Error();
    if (this._error != null)
      return this;
    var n = cp.call(arguments, 1);
    return n.push(t), ++this._waiting, this._tasks.push(n), Dl(this), this;
  },
  abort: function() {
    return this._error == null && Ca(this, new Error("abort")), this;
  },
  await: function(t) {
    if (typeof t != "function" || this._call)
      throw new Error();
    return this._call = function(n, e) {
      t.apply(null, [n].concat(e));
    }, Ui(this), this;
  },
  awaitAll: function(t) {
    if (typeof t != "function" || this._call)
      throw new Error();
    return this._call = t, Ui(this), this;
  }
};
function Dl(t) {
  if (!t._start)
    try {
      hp(t);
    } catch (n) {
      t._tasks[t._ended + t._active - 1] && Ca(t, n);
    }
}
function hp(t) {
  for (; t._start = t._waiting && t._active < t._size; ) {
    var n = t._ended + t._active, e = t._tasks[n], i = e.length - 1, r = e[i];
    e[i] = pp(t, n), --t._waiting, ++t._active, e = r.apply(null, e), t._tasks[n] && (t._tasks[n] = e || fp);
  }
}
function pp(t, n) {
  return function(e, i) {
    !t._tasks[n] || (--t._active, ++t._ended, t._tasks[n] = null, t._error == null && (e != null ? Ca(t, e) : (t._data[n] = i, t._waiting ? Dl(t) : Ui(t))));
  };
}
function Ca(t, n) {
  var e = t._tasks.length, i;
  for (t._error = n, t._data = void 0, t._waiting = NaN; --e >= 0; )
    if ((i = t._tasks[e]) && (t._tasks[e] = null, i.abort))
      try {
        i.abort();
      } catch {
      }
  t._active = NaN, Ui(t);
}
function Ui(t) {
  !t._active && t._call && t._call(t._error, t._data);
}
function zl(t) {
  return new zo(arguments.length ? +t : 1 / 0);
}
function W(t) {
  return function() {
    return t;
  };
}
var gt = 1e-12, Tn = Math.PI, Yi = Tn / 2, un = 2 * Tn;
function gp(t) {
  return t.innerRadius;
}
function dp(t) {
  return t.outerRadius;
}
function vp(t) {
  return t.startAngle;
}
function yp(t) {
  return t.endAngle;
}
function _p(t) {
  return t && t.padAngle;
}
function Xu(t) {
  return t >= 1 ? Yi : t <= -1 ? -Yi : Math.asin(t);
}
function mp(t, n, e, i, r, o, a, u) {
  var s = e - t, l = i - n, f = a - r, h = u - o, c = (f * (n - o) - h * (t - r)) / (h * s - f * l);
  return [t + c * s, n + c * l];
}
function hi(t, n, e, i, r, o, a) {
  var u = t - e, s = n - i, l = (a ? o : -o) / Math.sqrt(u * u + s * s), f = l * s, h = -l * u, c = t + f, p = n + h, g = e + f, d = i + h, v = (c + g) / 2, y = (p + d) / 2, m = g - c, _ = d - p, M = m * m + _ * _, b = r - o, x = c * d - g * p, C = (_ < 0 ? -1 : 1) * Math.sqrt(Math.max(0, b * b * M - x * x)), k = (x * _ - m * C) / M, T = (-x * m - _ * C) / M, $ = (x * _ + m * C) / M, E = (-x * m + _ * C) / M, A = k - v, w = T - y, S = $ - v, N = E - y;
  return A * A + w * w > S * S + N * N && (k = $, T = E), {
    cx: k,
    cy: T,
    x01: -f,
    y01: -h,
    x11: k * (r / b - 1),
    y11: T * (r / b - 1)
  };
}
function wp() {
  var t = gp, n = dp, e = W(0), i = null, r = vp, o = yp, a = _p, u = null;
  function s() {
    var l, f, h = +t.apply(this, arguments), c = +n.apply(this, arguments), p = r.apply(this, arguments) - Yi, g = o.apply(this, arguments) - Yi, d = Math.abs(g - p), v = g > p;
    if (u || (u = l = On()), c < h && (f = c, c = h, h = f), !(c > gt))
      u.moveTo(0, 0);
    else if (d > un - gt)
      u.moveTo(c * Math.cos(p), c * Math.sin(p)), u.arc(0, 0, c, p, g, !v), h > gt && (u.moveTo(h * Math.cos(g), h * Math.sin(g)), u.arc(0, 0, h, g, p, v));
    else {
      var y = p, m = g, _ = p, M = g, b = d, x = d, C = a.apply(this, arguments) / 2, k = C > gt && (i ? +i.apply(this, arguments) : Math.sqrt(h * h + c * c)), T = Math.min(Math.abs(c - h) / 2, +e.apply(this, arguments)), $ = T, E = T, A, w;
      if (k > gt) {
        var S = Xu(k / h * Math.sin(C)), N = Xu(k / c * Math.sin(C));
        (b -= S * 2) > gt ? (S *= v ? 1 : -1, _ += S, M -= S) : (b = 0, _ = M = (p + g) / 2), (x -= N * 2) > gt ? (N *= v ? 1 : -1, y += N, m -= N) : (x = 0, y = m = (p + g) / 2);
      }
      var R = c * Math.cos(y), P = c * Math.sin(y), H = h * Math.cos(M), X = h * Math.sin(M);
      if (T > gt) {
        var Q = c * Math.cos(m), V = c * Math.sin(m), j = h * Math.cos(_), K = h * Math.sin(_);
        if (d < Tn) {
          var tt = b > gt ? mp(R, P, j, K, Q, V, H, X) : [H, X], Z = R - tt[0], wt = P - tt[1], O = Q - tt[0], Y = V - tt[1], B = 1 / Math.sin(Math.acos((Z * O + wt * Y) / (Math.sqrt(Z * Z + wt * wt) * Math.sqrt(O * O + Y * Y))) / 2), D = Math.sqrt(tt[0] * tt[0] + tt[1] * tt[1]);
          $ = Math.min(T, (h - D) / (B - 1)), E = Math.min(T, (c - D) / (B + 1));
        }
      }
      x > gt ? E > gt ? (A = hi(j, K, R, P, c, E, v), w = hi(Q, V, H, X, c, E, v), u.moveTo(A.cx + A.x01, A.cy + A.y01), E < T ? u.arc(A.cx, A.cy, E, Math.atan2(A.y01, A.x01), Math.atan2(w.y01, w.x01), !v) : (u.arc(A.cx, A.cy, E, Math.atan2(A.y01, A.x01), Math.atan2(A.y11, A.x11), !v), u.arc(0, 0, c, Math.atan2(A.cy + A.y11, A.cx + A.x11), Math.atan2(w.cy + w.y11, w.cx + w.x11), !v), u.arc(w.cx, w.cy, E, Math.atan2(w.y11, w.x11), Math.atan2(w.y01, w.x01), !v))) : (u.moveTo(R, P), u.arc(0, 0, c, y, m, !v)) : u.moveTo(R, P), !(h > gt) || !(b > gt) ? u.lineTo(H, X) : $ > gt ? (A = hi(H, X, Q, V, h, -$, v), w = hi(R, P, j, K, h, -$, v), u.lineTo(A.cx + A.x01, A.cy + A.y01), $ < T ? u.arc(A.cx, A.cy, $, Math.atan2(A.y01, A.x01), Math.atan2(w.y01, w.x01), !v) : (u.arc(A.cx, A.cy, $, Math.atan2(A.y01, A.x01), Math.atan2(A.y11, A.x11), !v), u.arc(0, 0, h, Math.atan2(A.cy + A.y11, A.cx + A.x11), Math.atan2(w.cy + w.y11, w.cx + w.x11), v), u.arc(w.cx, w.cy, $, Math.atan2(w.y11, w.x11), Math.atan2(w.y01, w.x01), !v))) : u.arc(0, 0, h, M, _, v);
    }
    if (u.closePath(), l)
      return u = null, l + "" || null;
  }
  return s.centroid = function() {
    var l = (+t.apply(this, arguments) + +n.apply(this, arguments)) / 2, f = (+r.apply(this, arguments) + +o.apply(this, arguments)) / 2 - Tn / 2;
    return [Math.cos(f) * l, Math.sin(f) * l];
  }, s.innerRadius = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : W(+l), s) : t;
  }, s.outerRadius = function(l) {
    return arguments.length ? (n = typeof l == "function" ? l : W(+l), s) : n;
  }, s.cornerRadius = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : W(+l), s) : e;
  }, s.padRadius = function(l) {
    return arguments.length ? (i = l == null ? null : typeof l == "function" ? l : W(+l), s) : i;
  }, s.startAngle = function(l) {
    return arguments.length ? (r = typeof l == "function" ? l : W(+l), s) : r;
  }, s.endAngle = function(l) {
    return arguments.length ? (o = typeof l == "function" ? l : W(+l), s) : o;
  }, s.padAngle = function(l) {
    return arguments.length ? (a = typeof l == "function" ? l : W(+l), s) : a;
  }, s.context = function(l) {
    return arguments.length ? (u = l == null ? null : l, s) : u;
  }, s;
}
function Ll(t) {
  this._context = t;
}
Ll.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, n) {
    switch (t = +t, n = +n, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(t, n);
        break;
    }
  }
};
function Tr(t) {
  return new Ll(t);
}
function Il(t) {
  return t[0];
}
function Fl(t) {
  return t[1];
}
function Sa() {
  var t = Il, n = Fl, e = W(!0), i = null, r = Tr, o = null;
  function a(u) {
    var s, l = u.length, f, h = !1, c;
    for (i == null && (o = r(c = On())), s = 0; s <= l; ++s)
      !(s < l && e(f = u[s], s, u)) === h && ((h = !h) ? o.lineStart() : o.lineEnd()), h && o.point(+t(f, s, u), +n(f, s, u));
    if (c)
      return o = null, c + "" || null;
  }
  return a.x = function(u) {
    return arguments.length ? (t = typeof u == "function" ? u : W(+u), a) : t;
  }, a.y = function(u) {
    return arguments.length ? (n = typeof u == "function" ? u : W(+u), a) : n;
  }, a.defined = function(u) {
    return arguments.length ? (e = typeof u == "function" ? u : W(!!u), a) : e;
  }, a.curve = function(u) {
    return arguments.length ? (r = u, i != null && (o = r(i)), a) : r;
  }, a.context = function(u) {
    return arguments.length ? (u == null ? i = o = null : o = r(i = u), a) : i;
  }, a;
}
function Ul() {
  var t = Il, n = null, e = W(0), i = Fl, r = W(!0), o = null, a = Tr, u = null;
  function s(f) {
    var h, c, p, g = f.length, d, v = !1, y, m = new Array(g), _ = new Array(g);
    for (o == null && (u = a(y = On())), h = 0; h <= g; ++h) {
      if (!(h < g && r(d = f[h], h, f)) === v)
        if (v = !v)
          c = h, u.areaStart(), u.lineStart();
        else {
          for (u.lineEnd(), u.lineStart(), p = h - 1; p >= c; --p)
            u.point(m[p], _[p]);
          u.lineEnd(), u.areaEnd();
        }
      v && (m[h] = +t(d, h, f), _[h] = +e(d, h, f), u.point(n ? +n(d, h, f) : m[h], i ? +i(d, h, f) : _[h]));
    }
    if (y)
      return u = null, y + "" || null;
  }
  function l() {
    return Sa().defined(r).curve(a).context(o);
  }
  return s.x = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : W(+f), n = null, s) : t;
  }, s.x0 = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : W(+f), s) : t;
  }, s.x1 = function(f) {
    return arguments.length ? (n = f == null ? null : typeof f == "function" ? f : W(+f), s) : n;
  }, s.y = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : W(+f), i = null, s) : e;
  }, s.y0 = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : W(+f), s) : e;
  }, s.y1 = function(f) {
    return arguments.length ? (i = f == null ? null : typeof f == "function" ? f : W(+f), s) : i;
  }, s.lineX0 = s.lineY0 = function() {
    return l().x(t).y(e);
  }, s.lineY1 = function() {
    return l().x(t).y(i);
  }, s.lineX1 = function() {
    return l().x(n).y(e);
  }, s.defined = function(f) {
    return arguments.length ? (r = typeof f == "function" ? f : W(!!f), s) : r;
  }, s.curve = function(f) {
    return arguments.length ? (a = f, o != null && (u = a(o)), s) : a;
  }, s.context = function(f) {
    return arguments.length ? (f == null ? o = u = null : u = a(o = f), s) : o;
  }, s;
}
function bp(t, n) {
  return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function xp(t) {
  return t;
}
function Mp() {
  var t = xp, n = bp, e = null, i = W(0), r = W(un), o = W(0);
  function a(u) {
    var s, l = u.length, f, h, c = 0, p = new Array(l), g = new Array(l), d = +i.apply(this, arguments), v = Math.min(un, Math.max(-un, r.apply(this, arguments) - d)), y, m = Math.min(Math.abs(v) / l, o.apply(this, arguments)), _ = m * (v < 0 ? -1 : 1), M;
    for (s = 0; s < l; ++s)
      (M = g[p[s] = s] = +t(u[s], s, u)) > 0 && (c += M);
    for (n != null ? p.sort(function(b, x) {
      return n(g[b], g[x]);
    }) : e != null && p.sort(function(b, x) {
      return e(u[b], u[x]);
    }), s = 0, h = c ? (v - l * _) / c : 0; s < l; ++s, d = y)
      f = p[s], M = g[f], y = d + (M > 0 ? M * h : 0) + _, g[f] = {
        data: u[f],
        index: s,
        value: M,
        startAngle: d,
        endAngle: y,
        padAngle: m
      };
    return g;
  }
  return a.value = function(u) {
    return arguments.length ? (t = typeof u == "function" ? u : W(+u), a) : t;
  }, a.sortValues = function(u) {
    return arguments.length ? (n = u, e = null, a) : n;
  }, a.sort = function(u) {
    return arguments.length ? (e = u, n = null, a) : e;
  }, a.startAngle = function(u) {
    return arguments.length ? (i = typeof u == "function" ? u : W(+u), a) : i;
  }, a.endAngle = function(u) {
    return arguments.length ? (r = typeof u == "function" ? u : W(+u), a) : r;
  }, a.padAngle = function(u) {
    return arguments.length ? (o = typeof u == "function" ? u : W(+u), a) : o;
  }, a;
}
var Yl = ka(Tr);
function Hl(t) {
  this._curve = t;
}
Hl.prototype = {
  areaStart: function() {
    this._curve.areaStart();
  },
  areaEnd: function() {
    this._curve.areaEnd();
  },
  lineStart: function() {
    this._curve.lineStart();
  },
  lineEnd: function() {
    this._curve.lineEnd();
  },
  point: function(t, n) {
    this._curve.point(n * Math.sin(t), n * -Math.cos(t));
  }
};
function ka(t) {
  function n(e) {
    return new Hl(t(e));
  }
  return n._curve = t, n;
}
function Te(t) {
  var n = t.curve;
  return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t.curve = function(e) {
    return arguments.length ? n(ka(e)) : n()._curve;
  }, t;
}
function Cp() {
  return Te(Sa().curve(Yl));
}
function Sp() {
  var t = Ul().curve(Yl), n = t.curve, e = t.lineX0, i = t.lineX1, r = t.lineY0, o = t.lineY1;
  return t.angle = t.x, delete t.x, t.startAngle = t.x0, delete t.x0, t.endAngle = t.x1, delete t.x1, t.radius = t.y, delete t.y, t.innerRadius = t.y0, delete t.y0, t.outerRadius = t.y1, delete t.y1, t.lineStartAngle = function() {
    return Te(e());
  }, delete t.lineX0, t.lineEndAngle = function() {
    return Te(i());
  }, delete t.lineX1, t.lineInnerRadius = function() {
    return Te(r());
  }, delete t.lineY0, t.lineOuterRadius = function() {
    return Te(o());
  }, delete t.lineY1, t.curve = function(a) {
    return arguments.length ? n(ka(a)) : n()._curve;
  }, t;
}
const Ta = {
  draw: function(t, n) {
    var e = Math.sqrt(n / Tn);
    t.moveTo(e, 0), t.arc(0, 0, e, 0, un);
  }
}, Bl = {
  draw: function(t, n) {
    var e = Math.sqrt(n / 5) / 2;
    t.moveTo(-3 * e, -e), t.lineTo(-e, -e), t.lineTo(-e, -3 * e), t.lineTo(e, -3 * e), t.lineTo(e, -e), t.lineTo(3 * e, -e), t.lineTo(3 * e, e), t.lineTo(e, e), t.lineTo(e, 3 * e), t.lineTo(-e, 3 * e), t.lineTo(-e, e), t.lineTo(-3 * e, e), t.closePath();
  }
};
var Xl = Math.sqrt(1 / 3), kp = Xl * 2;
const Wl = {
  draw: function(t, n) {
    var e = Math.sqrt(n / kp), i = e * Xl;
    t.moveTo(0, -e), t.lineTo(i, 0), t.lineTo(0, e), t.lineTo(-i, 0), t.closePath();
  }
};
var Tp = 0.8908130915292852, ql = Math.sin(Tn / 10) / Math.sin(7 * Tn / 10), Ap = Math.sin(un / 10) * ql, Ep = -Math.cos(un / 10) * ql;
const Gl = {
  draw: function(t, n) {
    var e = Math.sqrt(n * Tp), i = Ap * e, r = Ep * e;
    t.moveTo(0, -e), t.lineTo(i, r);
    for (var o = 1; o < 5; ++o) {
      var a = un * o / 5, u = Math.cos(a), s = Math.sin(a);
      t.lineTo(s * e, -u * e), t.lineTo(u * i - s * r, s * i + u * r);
    }
    t.closePath();
  }
}, Vl = {
  draw: function(t, n) {
    var e = Math.sqrt(n), i = -e / 2;
    t.rect(i, i, e, e);
  }
};
var Qr = Math.sqrt(3);
const Kl = {
  draw: function(t, n) {
    var e = -Math.sqrt(n / (Qr * 3));
    t.moveTo(0, e * 2), t.lineTo(-Qr * e, -e), t.lineTo(Qr * e, -e), t.closePath();
  }
};
var $t = -0.5, Rt = Math.sqrt(3) / 2, Lo = 1 / Math.sqrt(12), Np = (Lo / 2 + 1) * 3;
const Zl = {
  draw: function(t, n) {
    var e = Math.sqrt(n / Np), i = e / 2, r = e * Lo, o = i, a = e * Lo + e, u = -o, s = a;
    t.moveTo(i, r), t.lineTo(o, a), t.lineTo(u, s), t.lineTo($t * i - Rt * r, Rt * i + $t * r), t.lineTo($t * o - Rt * a, Rt * o + $t * a), t.lineTo($t * u - Rt * s, Rt * u + $t * s), t.lineTo($t * i + Rt * r, $t * r - Rt * i), t.lineTo($t * o + Rt * a, $t * a - Rt * o), t.lineTo($t * u + Rt * s, $t * s - Rt * u), t.closePath();
  }
};
var $p = [
  Ta,
  Bl,
  Wl,
  Vl,
  Gl,
  Kl,
  Zl
];
function Rp() {
  var t = W(Ta), n = W(64), e = null;
  function i() {
    var r;
    if (e || (e = r = On()), t.apply(this, arguments).draw(e, +n.apply(this, arguments)), r)
      return e = null, r + "" || null;
  }
  return i.type = function(r) {
    return arguments.length ? (t = typeof r == "function" ? r : W(r), i) : t;
  }, i.size = function(r) {
    return arguments.length ? (n = typeof r == "function" ? r : W(+r), i) : n;
  }, i.context = function(r) {
    return arguments.length ? (e = r == null ? null : r, i) : e;
  }, i;
}
function cn() {
}
function Hi(t, n, e) {
  t._context.bezierCurveTo(
    (2 * t._x0 + t._x1) / 3,
    (2 * t._y0 + t._y1) / 3,
    (t._x0 + 2 * t._x1) / 3,
    (t._y0 + 2 * t._y1) / 3,
    (t._x0 + 4 * t._x1 + n) / 6,
    (t._y0 + 4 * t._y1 + e) / 6
  );
}
function Ar(t) {
  this._context = t;
}
Ar.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        Hi(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, n) {
    switch (t = +t, n = +n, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      default:
        Hi(this, t, n);
        break;
    }
    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n;
  }
};
function Pp(t) {
  return new Ar(t);
}
function Jl(t) {
  this._context = t;
}
Jl.prototype = {
  areaStart: cn,
  areaEnd: cn,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(t, n) {
    switch (t = +t, n = +n, this._point) {
      case 0:
        this._point = 1, this._x2 = t, this._y2 = n;
        break;
      case 1:
        this._point = 2, this._x3 = t, this._y3 = n;
        break;
      case 2:
        this._point = 3, this._x4 = t, this._y4 = n, this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + n) / 6);
        break;
      default:
        Hi(this, t, n);
        break;
    }
    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n;
  }
};
function Op(t) {
  return new Jl(t);
}
function Ql(t) {
  this._context = t;
}
Ql.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, n) {
    switch (t = +t, n = +n, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var e = (this._x0 + 4 * this._x1 + t) / 6, i = (this._y0 + 4 * this._y1 + n) / 6;
        this._line ? this._context.lineTo(e, i) : this._context.moveTo(e, i);
        break;
      case 3:
        this._point = 4;
      default:
        Hi(this, t, n);
        break;
    }
    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n;
  }
};
function Dp(t) {
  return new Ql(t);
}
function jl(t, n) {
  this._basis = new Ar(t), this._beta = n;
}
jl.prototype = {
  lineStart: function() {
    this._x = [], this._y = [], this._basis.lineStart();
  },
  lineEnd: function() {
    var t = this._x, n = this._y, e = t.length - 1;
    if (e > 0)
      for (var i = t[0], r = n[0], o = t[e] - i, a = n[e] - r, u = -1, s; ++u <= e; )
        s = u / e, this._basis.point(
          this._beta * t[u] + (1 - this._beta) * (i + s * o),
          this._beta * n[u] + (1 - this._beta) * (r + s * a)
        );
    this._x = this._y = null, this._basis.lineEnd();
  },
  point: function(t, n) {
    this._x.push(+t), this._y.push(+n);
  }
};
const zp = function t(n) {
  function e(i) {
    return n === 1 ? new Ar(i) : new jl(i, n);
  }
  return e.beta = function(i) {
    return t(+i);
  }, e;
}(0.85);
function Bi(t, n, e) {
  t._context.bezierCurveTo(
    t._x1 + t._k * (t._x2 - t._x0),
    t._y1 + t._k * (t._y2 - t._y0),
    t._x2 + t._k * (t._x1 - n),
    t._y2 + t._k * (t._y1 - e),
    t._x2,
    t._y2
  );
}
function Aa(t, n) {
  this._context = t, this._k = (1 - n) / 6;
}
Aa.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        Bi(this, this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, n) {
    switch (t = +t, n = +n, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
        break;
      case 1:
        this._point = 2, this._x1 = t, this._y1 = n;
        break;
      case 2:
        this._point = 3;
      default:
        Bi(this, t, n);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n;
  }
};
const Lp = function t(n) {
  function e(i) {
    return new Aa(i, n);
  }
  return e.tension = function(i) {
    return t(+i);
  }, e;
}(0);
function Ea(t, n) {
  this._context = t, this._k = (1 - n) / 6;
}
Ea.prototype = {
  areaStart: cn,
  areaEnd: cn,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(t, n) {
    switch (t = +t, n = +n, this._point) {
      case 0:
        this._point = 1, this._x3 = t, this._y3 = n;
        break;
      case 1:
        this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);
        break;
      case 2:
        this._point = 3, this._x5 = t, this._y5 = n;
        break;
      default:
        Bi(this, t, n);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n;
  }
};
const Ip = function t(n) {
  function e(i) {
    return new Ea(i, n);
  }
  return e.tension = function(i) {
    return t(+i);
  }, e;
}(0);
function Na(t, n) {
  this._context = t, this._k = (1 - n) / 6;
}
Na.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, n) {
    switch (t = +t, n = +n, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        Bi(this, t, n);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n;
  }
};
const Fp = function t(n) {
  function e(i) {
    return new Na(i, n);
  }
  return e.tension = function(i) {
    return t(+i);
  }, e;
}(0);
function $a(t, n, e) {
  var i = t._x1, r = t._y1, o = t._x2, a = t._y2;
  if (t._l01_a > gt) {
    var u = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a, s = 3 * t._l01_a * (t._l01_a + t._l12_a);
    i = (i * u - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / s, r = (r * u - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / s;
  }
  if (t._l23_a > gt) {
    var l = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a, f = 3 * t._l23_a * (t._l23_a + t._l12_a);
    o = (o * l + t._x1 * t._l23_2a - n * t._l12_2a) / f, a = (a * l + t._y1 * t._l23_2a - e * t._l12_2a) / f;
  }
  t._context.bezierCurveTo(i, r, o, a, t._x2, t._y2);
}
function tc(t, n) {
  this._context = t, this._alpha = n;
}
tc.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        this.point(this, this._x2, this._y2);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, n) {
    if (t = +t, n = +n, this._point) {
      var e = this._x2 - t, i = this._y2 - n;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + i * i, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
      default:
        $a(this, t, n);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n;
  }
};
const Up = function t(n) {
  function e(i) {
    return n ? new tc(i, n) : new Aa(i, 0);
  }
  return e.alpha = function(i) {
    return t(+i);
  }, e;
}(0.5);
function nc(t, n) {
  this._context = t, this._alpha = n;
}
nc.prototype = {
  areaStart: cn,
  areaEnd: cn,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(t, n) {
    if (t = +t, n = +n, this._point) {
      var e = this._x2 - t, i = this._y2 - n;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + i * i, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1, this._x3 = t, this._y3 = n;
        break;
      case 1:
        this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);
        break;
      case 2:
        this._point = 3, this._x5 = t, this._y5 = n;
        break;
      default:
        $a(this, t, n);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n;
  }
};
const Yp = function t(n) {
  function e(i) {
    return n ? new nc(i, n) : new Ea(i, 0);
  }
  return e.alpha = function(i) {
    return t(+i);
  }, e;
}(0.5);
function ec(t, n) {
  this._context = t, this._alpha = n;
}
ec.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, n) {
    if (t = +t, n = +n, this._point) {
      var e = this._x2 - t, i = this._y2 - n;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + i * i, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        $a(this, t, n);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n;
  }
};
const Hp = function t(n) {
  function e(i) {
    return n ? new ec(i, n) : new Na(i, 0);
  }
  return e.alpha = function(i) {
    return t(+i);
  }, e;
}(0.5);
function ic(t) {
  this._context = t;
}
ic.prototype = {
  areaStart: cn,
  areaEnd: cn,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._point && this._context.closePath();
  },
  point: function(t, n) {
    t = +t, n = +n, this._point ? this._context.lineTo(t, n) : (this._point = 1, this._context.moveTo(t, n));
  }
};
function Bp(t) {
  return new ic(t);
}
function Wu(t) {
  return t < 0 ? -1 : 1;
}
function qu(t, n, e) {
  var i = t._x1 - t._x0, r = n - t._x1, o = (t._y1 - t._y0) / (i || r < 0 && -0), a = (e - t._y1) / (r || i < 0 && -0), u = (o * r + a * i) / (i + r);
  return (Wu(o) + Wu(a)) * Math.min(Math.abs(o), Math.abs(a), 0.5 * Math.abs(u)) || 0;
}
function Gu(t, n) {
  var e = t._x1 - t._x0;
  return e ? (3 * (t._y1 - t._y0) / e - n) / 2 : n;
}
function jr(t, n, e) {
  var i = t._x0, r = t._y0, o = t._x1, a = t._y1, u = (o - i) / 3;
  t._context.bezierCurveTo(i + u, r + u * n, o - u, a - u * e, o, a);
}
function Xi(t) {
  this._context = t;
}
Xi.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        jr(this, this._t0, Gu(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, n) {
    var e = NaN;
    if (t = +t, n = +n, !(t === this._x1 && n === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, jr(this, Gu(this, e = qu(this, t, n)), e);
          break;
        default:
          jr(this, this._t0, e = qu(this, t, n));
          break;
      }
      this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n, this._t0 = e;
    }
  }
};
function rc(t) {
  this._context = new oc(t);
}
(rc.prototype = Object.create(Xi.prototype)).point = function(t, n) {
  Xi.prototype.point.call(this, n, t);
};
function oc(t) {
  this._context = t;
}
oc.prototype = {
  moveTo: function(t, n) {
    this._context.moveTo(n, t);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(t, n) {
    this._context.lineTo(n, t);
  },
  bezierCurveTo: function(t, n, e, i, r, o) {
    this._context.bezierCurveTo(n, t, i, e, o, r);
  }
};
function Xp(t) {
  return new Xi(t);
}
function Wp(t) {
  return new rc(t);
}
function ac(t) {
  this._context = t;
}
ac.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [], this._y = [];
  },
  lineEnd: function() {
    var t = this._x, n = this._y, e = t.length;
    if (e)
      if (this._line ? this._context.lineTo(t[0], n[0]) : this._context.moveTo(t[0], n[0]), e === 2)
        this._context.lineTo(t[1], n[1]);
      else
        for (var i = Vu(t), r = Vu(n), o = 0, a = 1; a < e; ++o, ++a)
          this._context.bezierCurveTo(i[0][o], r[0][o], i[1][o], r[1][o], t[a], n[a]);
    (this._line || this._line !== 0 && e === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(t, n) {
    this._x.push(+t), this._y.push(+n);
  }
};
function Vu(t) {
  var n, e = t.length - 1, i, r = new Array(e), o = new Array(e), a = new Array(e);
  for (r[0] = 0, o[0] = 2, a[0] = t[0] + 2 * t[1], n = 1; n < e - 1; ++n)
    r[n] = 1, o[n] = 4, a[n] = 4 * t[n] + 2 * t[n + 1];
  for (r[e - 1] = 2, o[e - 1] = 7, a[e - 1] = 8 * t[e - 1] + t[e], n = 1; n < e; ++n)
    i = r[n] / o[n - 1], o[n] -= i, a[n] -= i * a[n - 1];
  for (r[e - 1] = a[e - 1] / o[e - 1], n = e - 2; n >= 0; --n)
    r[n] = (a[n] - r[n + 1]) / o[n];
  for (o[e - 1] = (t[e] + r[e - 1]) / 2, n = 0; n < e - 1; ++n)
    o[n] = 2 * t[n + 1] - r[n + 1];
  return [r, o];
}
function qp(t) {
  return new ac(t);
}
function Er(t, n) {
  this._context = t, this._t = n;
}
Er.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN, this._point = 0;
  },
  lineEnd: function() {
    0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
  },
  point: function(t, n) {
    switch (t = +t, n = +n, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, n), this._context.lineTo(t, n);
        else {
          var e = this._x * (1 - this._t) + t * this._t;
          this._context.lineTo(e, this._y), this._context.lineTo(e, n);
        }
        break;
      }
    }
    this._x = t, this._y = n;
  }
};
function Gp(t) {
  return new Er(t, 0.5);
}
function Vp(t) {
  return new Er(t, 0);
}
function Kp(t) {
  return new Er(t, 1);
}
var Ku = Array.prototype.slice;
function re(t, n) {
  if ((o = t.length) > 1)
    for (var e = 1, i, r = t[n[0]], o, a = r.length; e < o; ++e) {
      i = r, r = t[n[e]];
      for (var u = 0; u < a; ++u)
        r[u][1] += r[u][0] = isNaN(i[u][1]) ? i[u][0] : i[u][1];
    }
}
function oe(t) {
  for (var n = t.length, e = new Array(n); --n >= 0; )
    e[n] = n;
  return e;
}
function Zp(t, n) {
  return t[n];
}
function Jp() {
  var t = W([]), n = oe, e = re, i = Zp;
  function r(o) {
    var a = t.apply(this, arguments), u, s = o.length, l = a.length, f = new Array(l), h;
    for (u = 0; u < l; ++u) {
      for (var c = a[u], p = f[u] = new Array(s), g = 0, d; g < s; ++g)
        p[g] = d = [0, +i(o[g], c, g, o)], d.data = o[g];
      p.key = c;
    }
    for (u = 0, h = n(f); u < l; ++u)
      f[h[u]].index = u;
    return e(f, h), f;
  }
  return r.keys = function(o) {
    return arguments.length ? (t = typeof o == "function" ? o : W(Ku.call(o)), r) : t;
  }, r.value = function(o) {
    return arguments.length ? (i = typeof o == "function" ? o : W(+o), r) : i;
  }, r.order = function(o) {
    return arguments.length ? (n = o == null ? oe : typeof o == "function" ? o : W(Ku.call(o)), r) : n;
  }, r.offset = function(o) {
    return arguments.length ? (e = o == null ? re : o, r) : e;
  }, r;
}
function Qp(t, n) {
  if ((i = t.length) > 0) {
    for (var e, i, r = 0, o = t[0].length, a; r < o; ++r) {
      for (a = e = 0; e < i; ++e)
        a += t[e][r][1] || 0;
      if (a)
        for (e = 0; e < i; ++e)
          t[e][r][1] /= a;
    }
    re(t, n);
  }
}
function jp(t, n) {
  if ((r = t.length) > 0) {
    for (var e = 0, i = t[n[0]], r, o = i.length; e < o; ++e) {
      for (var a = 0, u = 0; a < r; ++a)
        u += t[a][e][1] || 0;
      i[e][1] += i[e][0] = -u / 2;
    }
    re(t, n);
  }
}
function t1(t, n) {
  if (!(!((a = t.length) > 0) || !((o = (r = t[n[0]]).length) > 0))) {
    for (var e = 0, i = 1, r, o, a; i < o; ++i) {
      for (var u = 0, s = 0, l = 0; u < a; ++u) {
        for (var f = t[n[u]], h = f[i][1] || 0, c = f[i - 1][1] || 0, p = (h - c) / 2, g = 0; g < u; ++g) {
          var d = t[n[g]], v = d[i][1] || 0, y = d[i - 1][1] || 0;
          p += v - y;
        }
        s += h, l += p * h;
      }
      r[i - 1][1] += r[i - 1][0] = e, s && (e -= l / s);
    }
    r[i - 1][1] += r[i - 1][0] = e, re(t, n);
  }
}
function uc(t) {
  var n = t.map(sc);
  return oe(t).sort(function(e, i) {
    return n[e] - n[i];
  });
}
function sc(t) {
  for (var n = 0, e = -1, i = t.length, r; ++e < i; )
    (r = +t[e][1]) && (n += r);
  return n;
}
function n1(t) {
  return uc(t).reverse();
}
function e1(t) {
  var n = t.length, e, i, r = t.map(sc), o = oe(t).sort(function(f, h) {
    return r[h] - r[f];
  }), a = 0, u = 0, s = [], l = [];
  for (e = 0; e < n; ++e)
    i = o[e], a < u ? (a += r[i], s.push(i)) : (u += r[i], l.push(i));
  return l.reverse().concat(s);
}
function i1(t) {
  return oe(t).reverse();
}
function pe(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function ei(t, n) {
  var e = Object.create(t.prototype);
  for (var i in n)
    e[i] = n[i];
  return e;
}
function gn() {
}
var An = 0.7, ae = 1 / An, r1 = /^#([0-9a-f]{3})$/, o1 = /^#([0-9a-f]{6})$/, a1 = /^rgb\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*\)$/, u1 = /^rgb\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/, s1 = /^rgba\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/, l1 = /^rgba\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/, c1 = /^hsl\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/, f1 = /^hsla\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/, Zu = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
pe(gn, fn, {
  displayable: function() {
    return this.rgb().displayable();
  },
  toString: function() {
    return this.rgb() + "";
  }
});
function fn(t) {
  var n;
  return t = (t + "").trim().toLowerCase(), (n = r1.exec(t)) ? (n = parseInt(n[1], 16), new ct(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1)) : (n = o1.exec(t)) ? Ju(parseInt(n[1], 16)) : (n = a1.exec(t)) ? new ct(n[1], n[2], n[3], 1) : (n = u1.exec(t)) ? new ct(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = s1.exec(t)) ? Qu(n[1], n[2], n[3], n[4]) : (n = l1.exec(t)) ? Qu(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = c1.exec(t)) ? ju(n[1], n[2] / 100, n[3] / 100, 1) : (n = f1.exec(t)) ? ju(n[1], n[2] / 100, n[3] / 100, n[4]) : Zu.hasOwnProperty(t) ? Ju(Zu[t]) : t === "transparent" ? new ct(NaN, NaN, NaN, 0) : null;
}
function Ju(t) {
  return new ct(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Qu(t, n, e, i) {
  return i <= 0 && (t = n = e = NaN), new ct(t, n, e, i);
}
function Ra(t) {
  return t instanceof gn || (t = fn(t)), t ? (t = t.rgb(), new ct(t.r, t.g, t.b, t.opacity)) : new ct();
}
function He(t, n, e, i) {
  return arguments.length === 1 ? Ra(t) : new ct(t, n, e, i == null ? 1 : i);
}
function ct(t, n, e, i) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +i;
}
pe(ct, He, ei(gn, {
  brighter: function(t) {
    return t = t == null ? ae : Math.pow(ae, t), new ct(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker: function(t) {
    return t = t == null ? An : Math.pow(An, t), new ct(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1;
  },
  toString: function() {
    var t = this.opacity;
    return t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t)), (t === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (t === 1 ? ")" : ", " + t + ")");
  }
}));
function ju(t, n, e, i) {
  return i <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new Ht(t, n, e, i);
}
function h1(t) {
  if (t instanceof Ht)
    return new Ht(t.h, t.s, t.l, t.opacity);
  if (t instanceof gn || (t = fn(t)), !t)
    return new Ht();
  if (t instanceof Ht)
    return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, i = t.b / 255, r = Math.min(n, e, i), o = Math.max(n, e, i), a = NaN, u = o - r, s = (o + r) / 2;
  return u ? (n === o ? a = (e - i) / u + (e < i) * 6 : e === o ? a = (i - n) / u + 2 : a = (n - e) / u + 4, u /= s < 0.5 ? o + r : 2 - o - r, a *= 60) : u = s > 0 && s < 1 ? 0 : a, new Ht(a, u, s, t.opacity);
}
function Wi(t, n, e, i) {
  return arguments.length === 1 ? h1(t) : new Ht(t, n, e, i == null ? 1 : i);
}
function Ht(t, n, e, i) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +i;
}
pe(Ht, Wi, ei(gn, {
  brighter: function(t) {
    return t = t == null ? ae : Math.pow(ae, t), new Ht(this.h, this.s, this.l * t, this.opacity);
  },
  darker: function(t) {
    return t = t == null ? An : Math.pow(An, t), new Ht(this.h, this.s, this.l * t, this.opacity);
  },
  rgb: function() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, i = e + (e < 0.5 ? e : 1 - e) * n, r = 2 * e - i;
    return new ct(
      to(t >= 240 ? t - 240 : t + 120, r, i),
      to(t, r, i),
      to(t < 120 ? t + 240 : t - 120, r, i),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  }
}));
function to(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
var lc = Math.PI / 180, cc = 180 / Math.PI, qi = 18, fc = 0.95047, hc = 1, pc = 1.08883, gc = 4 / 29, Qn = 6 / 29, dc = 3 * Qn * Qn, p1 = Qn * Qn * Qn;
function Pa(t) {
  if (t instanceof jt)
    return new jt(t.l, t.a, t.b, t.opacity);
  if (t instanceof sn) {
    var n = t.h * lc;
    return new jt(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity);
  }
  t instanceof ct || (t = Ra(t));
  var e = ro(t.r), i = ro(t.g), r = ro(t.b), o = no((0.4124564 * e + 0.3575761 * i + 0.1804375 * r) / fc), a = no((0.2126729 * e + 0.7151522 * i + 0.072175 * r) / hc), u = no((0.0193339 * e + 0.119192 * i + 0.9503041 * r) / pc);
  return new jt(116 * a - 16, 500 * (o - a), 200 * (a - u), t.opacity);
}
function Gi(t, n, e, i) {
  return arguments.length === 1 ? Pa(t) : new jt(t, n, e, i == null ? 1 : i);
}
function jt(t, n, e, i) {
  this.l = +t, this.a = +n, this.b = +e, this.opacity = +i;
}
pe(jt, Gi, ei(gn, {
  brighter: function(t) {
    return new jt(this.l + qi * (t == null ? 1 : t), this.a, this.b, this.opacity);
  },
  darker: function(t) {
    return new jt(this.l - qi * (t == null ? 1 : t), this.a, this.b, this.opacity);
  },
  rgb: function() {
    var t = (this.l + 16) / 116, n = isNaN(this.a) ? t : t + this.a / 500, e = isNaN(this.b) ? t : t - this.b / 200;
    return t = hc * eo(t), n = fc * eo(n), e = pc * eo(e), new ct(
      io(3.2404542 * n - 1.5371385 * t - 0.4985314 * e),
      io(-0.969266 * n + 1.8760108 * t + 0.041556 * e),
      io(0.0556434 * n - 0.2040259 * t + 1.0572252 * e),
      this.opacity
    );
  }
}));
function no(t) {
  return t > p1 ? Math.pow(t, 1 / 3) : t / dc + gc;
}
function eo(t) {
  return t > Qn ? t * t * t : dc * (t - gc);
}
function io(t) {
  return 255 * (t <= 31308e-7 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055);
}
function ro(t) {
  return (t /= 255) <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4);
}
function g1(t) {
  if (t instanceof sn)
    return new sn(t.h, t.c, t.l, t.opacity);
  t instanceof jt || (t = Pa(t));
  var n = Math.atan2(t.b, t.a) * cc;
  return new sn(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity);
}
function Vi(t, n, e, i) {
  return arguments.length === 1 ? g1(t) : new sn(t, n, e, i == null ? 1 : i);
}
function sn(t, n, e, i) {
  this.h = +t, this.c = +n, this.l = +e, this.opacity = +i;
}
pe(sn, Vi, ei(gn, {
  brighter: function(t) {
    return new sn(this.h, this.c, this.l + qi * (t == null ? 1 : t), this.opacity);
  },
  darker: function(t) {
    return new sn(this.h, this.c, this.l - qi * (t == null ? 1 : t), this.opacity);
  },
  rgb: function() {
    return Pa(this).rgb();
  }
}));
var vc = -0.14861, Oa = 1.78277, Da = -0.29227, Nr = -0.90649, Be = 1.97294, ts = Be * Nr, ns = Be * Oa, es = Oa * Da - Nr * vc;
function d1(t) {
  if (t instanceof Mn)
    return new Mn(t.h, t.s, t.l, t.opacity);
  t instanceof ct || (t = Ra(t));
  var n = t.r / 255, e = t.g / 255, i = t.b / 255, r = (es * i + ts * n - ns * e) / (es + ts - ns), o = i - r, a = (Be * (e - r) - Da * o) / Nr, u = Math.sqrt(a * a + o * o) / (Be * r * (1 - r)), s = u ? Math.atan2(a, o) * cc - 120 : NaN;
  return new Mn(s < 0 ? s + 360 : s, u, r, t.opacity);
}
function Ft(t, n, e, i) {
  return arguments.length === 1 ? d1(t) : new Mn(t, n, e, i == null ? 1 : i);
}
function Mn(t, n, e, i) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +i;
}
pe(Mn, Ft, ei(gn, {
  brighter: function(t) {
    return t = t == null ? ae : Math.pow(ae, t), new Mn(this.h, this.s, this.l * t, this.opacity);
  },
  darker: function(t) {
    return t = t == null ? An : Math.pow(An, t), new Mn(this.h, this.s, this.l * t, this.opacity);
  },
  rgb: function() {
    var t = isNaN(this.h) ? 0 : (this.h + 120) * lc, n = +this.l, e = isNaN(this.s) ? 0 : this.s * n * (1 - n), i = Math.cos(t), r = Math.sin(t);
    return new ct(
      255 * (n + e * (vc * i + Oa * r)),
      255 * (n + e * (Da * i + Nr * r)),
      255 * (n + e * (Be * i)),
      this.opacity
    );
  }
}));
function yc(t, n, e, i, r) {
  var o = t * t, a = o * t;
  return ((1 - 3 * t + 3 * o - a) * n + (4 - 6 * o + 3 * a) * e + (1 + 3 * t + 3 * o - 3 * a) * i + a * r) / 6;
}
function _c(t) {
  var n = t.length - 1;
  return function(e) {
    var i = e <= 0 ? e = 0 : e >= 1 ? (e = 1, n - 1) : Math.floor(e * n), r = t[i], o = t[i + 1], a = i > 0 ? t[i - 1] : 2 * r - o, u = i < n - 1 ? t[i + 2] : 2 * o - r;
    return yc((e - i / n) * n, a, r, o, u);
  };
}
function mc(t) {
  var n = t.length;
  return function(e) {
    var i = Math.floor(((e %= 1) < 0 ? ++e : e) * n), r = t[(i + n - 1) % n], o = t[i % n], a = t[(i + 1) % n], u = t[(i + 2) % n];
    return yc((e - i / n) * n, r, o, a, u);
  };
}
function $r(t) {
  return function() {
    return t;
  };
}
function wc(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function v1(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(i) {
    return Math.pow(t + i * n, e);
  };
}
function za(t, n) {
  var e = n - t;
  return e ? wc(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : $r(isNaN(t) ? n : t);
}
function y1(t) {
  return (t = +t) == 1 ? ft : function(n, e) {
    return e - n ? v1(n, e, t) : $r(isNaN(n) ? e : n);
  };
}
function ft(t, n) {
  var e = n - t;
  return e ? wc(t, e) : $r(isNaN(t) ? n : t);
}
const Xe = function t(n) {
  var e = y1(n);
  function i(r, o) {
    var a = e((r = He(r)).r, (o = He(o)).r), u = e(r.g, o.g), s = e(r.b, o.b), l = e(r.opacity, o.opacity);
    return function(f) {
      return r.r = a(f), r.g = u(f), r.b = s(f), r.opacity = l(f), r + "";
    };
  }
  return i.gamma = t, i;
}(1);
function bc(t) {
  return function(n) {
    var e = n.length, i = new Array(e), r = new Array(e), o = new Array(e), a, u;
    for (a = 0; a < e; ++a)
      u = He(n[a]), i[a] = u.r || 0, r[a] = u.g || 0, o[a] = u.b || 0;
    return i = t(i), r = t(r), o = t(o), u.opacity = 1, function(s) {
      return u.r = i(s), u.g = r(s), u.b = o(s), u + "";
    };
  };
}
var _1 = bc(_c), m1 = bc(mc);
function xc(t, n) {
  var e = n ? n.length : 0, i = t ? Math.min(e, t.length) : 0, r = new Array(e), o = new Array(e), a;
  for (a = 0; a < i; ++a)
    r[a] = ii(t[a], n[a]);
  for (; a < e; ++a)
    o[a] = n[a];
  return function(u) {
    for (a = 0; a < i; ++a)
      o[a] = r[a](u);
    return o;
  };
}
function Mc(t, n) {
  var e = new Date();
  return t = +t, n -= t, function(i) {
    return e.setTime(t + n * i), e;
  };
}
function At(t, n) {
  return t = +t, n -= t, function(e) {
    return t + n * e;
  };
}
function Cc(t, n) {
  var e = {}, i = {}, r;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (r in n)
    r in t ? e[r] = ii(t[r], n[r]) : i[r] = n[r];
  return function(o) {
    for (r in e)
      i[r] = e[r](o);
    return i;
  };
}
var Io = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, oo = new RegExp(Io.source, "g");
function w1(t) {
  return function() {
    return t;
  };
}
function b1(t) {
  return function(n) {
    return t(n) + "";
  };
}
function La(t, n) {
  var e = Io.lastIndex = oo.lastIndex = 0, i, r, o, a = -1, u = [], s = [];
  for (t = t + "", n = n + ""; (i = Io.exec(t)) && (r = oo.exec(n)); )
    (o = r.index) > e && (o = n.slice(e, o), u[a] ? u[a] += o : u[++a] = o), (i = i[0]) === (r = r[0]) ? u[a] ? u[a] += r : u[++a] = r : (u[++a] = null, s.push({ i: a, x: At(i, r) })), e = oo.lastIndex;
  return e < n.length && (o = n.slice(e), u[a] ? u[a] += o : u[++a] = o), u.length < 2 ? s[0] ? b1(s[0].x) : w1(n) : (n = s.length, function(l) {
    for (var f = 0, h; f < n; ++f)
      u[(h = s[f]).i] = h.x(l);
    return u.join("");
  });
}
function ii(t, n) {
  var e = typeof n, i;
  return n == null || e === "boolean" ? $r(n) : (e === "number" ? At : e === "string" ? (i = fn(n)) ? (n = i, Xe) : La : n instanceof fn ? Xe : n instanceof Date ? Mc : Array.isArray(n) ? xc : isNaN(n) ? Cc : At)(t, n);
}
function Sc(t, n) {
  return t = +t, n -= t, function(e) {
    return Math.round(t + n * e);
  };
}
var is = 180 / Math.PI, Fo = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function kc(t, n, e, i, r, o) {
  var a, u, s;
  return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (s = t * e + n * i) && (e -= t * s, i -= n * s), (u = Math.sqrt(e * e + i * i)) && (e /= u, i /= u, s /= u), t * i < n * e && (t = -t, n = -n, s = -s, a = -a), {
    translateX: r,
    translateY: o,
    rotate: Math.atan2(n, t) * is,
    skewX: Math.atan(s) * is,
    scaleX: a,
    scaleY: u
  };
}
var ye, ao, rs, pi;
function x1(t) {
  return t === "none" ? Fo : (ye || (ye = document.createElement("DIV"), ao = document.documentElement, rs = document.defaultView), ye.style.transform = t, t = rs.getComputedStyle(ao.appendChild(ye), null).getPropertyValue("transform"), ao.removeChild(ye), t = t.slice(7, -1).split(","), kc(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]));
}
function M1(t) {
  return t == null || (pi || (pi = document.createElementNS("http://www.w3.org/2000/svg", "g")), pi.setAttribute("transform", t), !(t = pi.transform.baseVal.consolidate())) ? Fo : (t = t.matrix, kc(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Tc(t, n, e, i) {
  function r(l) {
    return l.length ? l.pop() + " " : "";
  }
  function o(l, f, h, c, p, g) {
    if (l !== h || f !== c) {
      var d = p.push("translate(", null, n, null, e);
      g.push({ i: d - 4, x: At(l, h) }, { i: d - 2, x: At(f, c) });
    } else
      (h || c) && p.push("translate(" + h + n + c + e);
  }
  function a(l, f, h, c) {
    l !== f ? (l - f > 180 ? f += 360 : f - l > 180 && (l += 360), c.push({ i: h.push(r(h) + "rotate(", null, i) - 2, x: At(l, f) })) : f && h.push(r(h) + "rotate(" + f + i);
  }
  function u(l, f, h, c) {
    l !== f ? c.push({ i: h.push(r(h) + "skewX(", null, i) - 2, x: At(l, f) }) : f && h.push(r(h) + "skewX(" + f + i);
  }
  function s(l, f, h, c, p, g) {
    if (l !== h || f !== c) {
      var d = p.push(r(p) + "scale(", null, ",", null, ")");
      g.push({ i: d - 4, x: At(l, h) }, { i: d - 2, x: At(f, c) });
    } else
      (h !== 1 || c !== 1) && p.push(r(p) + "scale(" + h + "," + c + ")");
  }
  return function(l, f) {
    var h = [], c = [];
    return l = t(l), f = t(f), o(l.translateX, l.translateY, f.translateX, f.translateY, h, c), a(l.rotate, f.rotate, h, c), u(l.skewX, f.skewX, h, c), s(l.scaleX, l.scaleY, f.scaleX, f.scaleY, h, c), l = f = null, function(p) {
      for (var g = -1, d = c.length, v; ++g < d; )
        h[(v = c[g]).i] = v.x(p);
      return h.join("");
    };
  };
}
var Ac = Tc(x1, "px, ", "px)", "deg)"), Ec = Tc(M1, ", ", ")", ")"), _e = Math.SQRT2, uo = 2, os = 4, C1 = 1e-12;
function as(t) {
  return ((t = Math.exp(t)) + 1 / t) / 2;
}
function S1(t) {
  return ((t = Math.exp(t)) - 1 / t) / 2;
}
function k1(t) {
  return ((t = Math.exp(2 * t)) - 1) / (t + 1);
}
function Nc(t, n) {
  var e = t[0], i = t[1], r = t[2], o = n[0], a = n[1], u = n[2], s = o - e, l = a - i, f = s * s + l * l, h, c;
  if (f < C1)
    c = Math.log(u / r) / _e, h = function(m) {
      return [
        e + m * s,
        i + m * l,
        r * Math.exp(_e * m * c)
      ];
    };
  else {
    var p = Math.sqrt(f), g = (u * u - r * r + os * f) / (2 * r * uo * p), d = (u * u - r * r - os * f) / (2 * u * uo * p), v = Math.log(Math.sqrt(g * g + 1) - g), y = Math.log(Math.sqrt(d * d + 1) - d);
    c = (y - v) / _e, h = function(m) {
      var _ = m * c, M = as(v), b = r / (uo * p) * (M * k1(_e * _ + v) - S1(v));
      return [
        e + b * s,
        i + b * l,
        r * M / as(_e * _ + v)
      ];
    };
  }
  return h.duration = c * 1e3, h;
}
function $c(t) {
  return function(n, e) {
    var i = t((n = Wi(n)).h, (e = Wi(e)).h), r = ft(n.s, e.s), o = ft(n.l, e.l), a = ft(n.opacity, e.opacity);
    return function(u) {
      return n.h = i(u), n.s = r(u), n.l = o(u), n.opacity = a(u), n + "";
    };
  };
}
const T1 = $c(za);
var A1 = $c(ft);
function E1(t, n) {
  var e = ft((t = Gi(t)).l, (n = Gi(n)).l), i = ft(t.a, n.a), r = ft(t.b, n.b), o = ft(t.opacity, n.opacity);
  return function(a) {
    return t.l = e(a), t.a = i(a), t.b = r(a), t.opacity = o(a), t + "";
  };
}
function Rc(t) {
  return function(n, e) {
    var i = t((n = Vi(n)).h, (e = Vi(e)).h), r = ft(n.c, e.c), o = ft(n.l, e.l), a = ft(n.opacity, e.opacity);
    return function(u) {
      return n.h = i(u), n.c = r(u), n.l = o(u), n.opacity = a(u), n + "";
    };
  };
}
const N1 = Rc(za);
var $1 = Rc(ft);
function Pc(t) {
  return function n(e) {
    e = +e;
    function i(r, o) {
      var a = t((r = Ft(r)).h, (o = Ft(o)).h), u = ft(r.s, o.s), s = ft(r.l, o.l), l = ft(r.opacity, o.opacity);
      return function(f) {
        return r.h = a(f), r.s = u(f), r.l = s(Math.pow(f, e)), r.opacity = l(f), r + "";
      };
    }
    return i.gamma = n, i;
  }(1);
}
const R1 = Pc(za);
var Rr = Pc(ft);
function P1(t, n) {
  for (var e = new Array(n), i = 0; i < n; ++i)
    e[i] = t(i / (n - 1));
  return e;
}
var O1 = { value: function() {
} };
function dn() {
  for (var t = 0, n = arguments.length, e = {}, i; t < n; ++t) {
    if (!(i = arguments[t] + "") || i in e)
      throw new Error("illegal type: " + i);
    e[i] = [];
  }
  return new Ti(e);
}
function Ti(t) {
  this._ = t;
}
function D1(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var i = "", r = e.indexOf(".");
    if (r >= 0 && (i = e.slice(r + 1), e = e.slice(0, r)), e && !n.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    return { type: e, name: i };
  });
}
Ti.prototype = dn.prototype = {
  constructor: Ti,
  on: function(t, n) {
    var e = this._, i = D1(t + "", e), r, o = -1, a = i.length;
    if (arguments.length < 2) {
      for (; ++o < a; )
        if ((r = (t = i[o]).type) && (r = z1(e[r], t.name)))
          return r;
      return;
    }
    if (n != null && typeof n != "function")
      throw new Error("invalid callback: " + n);
    for (; ++o < a; )
      if (r = (t = i[o]).type)
        e[r] = us(e[r], t.name, n);
      else if (n == null)
        for (r in e)
          e[r] = us(e[r], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n)
      t[e] = n[e].slice();
    return new Ti(t);
  },
  call: function(t, n) {
    if ((r = arguments.length - 2) > 0)
      for (var e = new Array(r), i = 0, r, o; i < r; ++i)
        e[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (o = this._[t], i = 0, r = o.length; i < r; ++i)
      o[i].value.apply(n, e);
  },
  apply: function(t, n, e) {
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (var i = this._[t], r = 0, o = i.length; r < o; ++r)
      i[r].value.apply(n, e);
  }
};
function z1(t, n) {
  for (var e = 0, i = t.length, r; e < i; ++e)
    if ((r = t[e]).name === n)
      return r.value;
}
function us(t, n, e) {
  for (var i = 0, r = t.length; i < r; ++i)
    if (t[i].name === n) {
      t[i] = O1, t = t.slice(0, i).concat(t.slice(i + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
function Oc(t) {
  return new Function("d", "return {" + t.map(function(n, e) {
    return JSON.stringify(n) + ": d[" + e + "]";
  }).join(",") + "}");
}
function L1(t, n) {
  var e = Oc(t);
  return function(i, r) {
    return n(e(i), r, t);
  };
}
function I1(t) {
  var n = /* @__PURE__ */ Object.create(null), e = [];
  return t.forEach(function(i) {
    for (var r in i)
      r in n || e.push(n[r] = r);
  }), e;
}
function Ia(t) {
  var n = new RegExp('["' + t + `
]`), e = t.charCodeAt(0);
  function i(l, f) {
    var h, c, p = r(l, function(g, d) {
      if (h)
        return h(g, d - 1);
      c = g, h = f ? L1(g, f) : Oc(g);
    });
    return p.columns = c, p;
  }
  function r(l, f) {
    var h = {}, c = {}, p = [], g = l.length, d = 0, v = 0, y, m;
    function _() {
      if (d >= g)
        return c;
      if (m)
        return m = !1, h;
      var b = d, x;
      if (l.charCodeAt(b) === 34) {
        for (var C = b; C++ < g; )
          if (l.charCodeAt(C) === 34) {
            if (l.charCodeAt(C + 1) !== 34)
              break;
            ++C;
          }
        return d = C + 2, x = l.charCodeAt(C + 1), x === 13 ? (m = !0, l.charCodeAt(C + 2) === 10 && ++d) : x === 10 && (m = !0), l.slice(b + 1, C).replace(/""/g, '"');
      }
      for (; d < g; ) {
        var k = 1;
        if (x = l.charCodeAt(d++), x === 10)
          m = !0;
        else if (x === 13)
          m = !0, l.charCodeAt(d) === 10 && (++d, ++k);
        else if (x !== e)
          continue;
        return l.slice(b, d - k);
      }
      return l.slice(b);
    }
    for (; (y = _()) !== c; ) {
      for (var M = []; y !== h && y !== c; )
        M.push(y), y = _();
      f && (M = f(M, v++)) == null || p.push(M);
    }
    return p;
  }
  function o(l, f) {
    return f == null && (f = I1(l)), [f.map(s).join(t)].concat(l.map(function(h) {
      return f.map(function(c) {
        return s(h[c]);
      }).join(t);
    })).join(`
`);
  }
  function a(l) {
    return l.map(u).join(`
`);
  }
  function u(l) {
    return l.map(s).join(t);
  }
  function s(l) {
    return l == null ? "" : n.test(l += "") ? '"' + l.replace(/\"/g, '""') + '"' : l;
  }
  return {
    parse: i,
    parseRows: r,
    format: o,
    formatRows: a
  };
}
var Pr = Ia(","), Dc = Pr.parse, F1 = Pr.parseRows, U1 = Pr.format, Y1 = Pr.formatRows, Or = Ia("	"), zc = Or.parse, H1 = Or.parseRows, B1 = Or.format, X1 = Or.formatRows;
function Fa(t, n) {
  var e, i = dn("beforesend", "progress", "load", "error"), r, o = Gt(), a = new XMLHttpRequest(), u = null, s = null, l, f, h = 0;
  typeof XDomainRequest < "u" && !("withCredentials" in a) && /^(http(s)?:)?\/\//.test(t) && (a = new XDomainRequest()), "onload" in a ? a.onload = a.onerror = a.ontimeout = c : a.onreadystatechange = function(p) {
    a.readyState > 3 && c(p);
  };
  function c(p) {
    var g = a.status, d;
    if (!g && q1(a) || g >= 200 && g < 300 || g === 304) {
      if (l)
        try {
          d = l.call(e, a);
        } catch (v) {
          i.call("error", e, v);
          return;
        }
      else
        d = a;
      i.call("load", e, d);
    } else
      i.call("error", e, p);
  }
  if (a.onprogress = function(p) {
    i.call("progress", e, p);
  }, e = {
    header: function(p, g) {
      return p = (p + "").toLowerCase(), arguments.length < 2 ? o.get(p) : (g == null ? o.remove(p) : o.set(p, g + ""), e);
    },
    mimeType: function(p) {
      return arguments.length ? (r = p == null ? null : p + "", e) : r;
    },
    responseType: function(p) {
      return arguments.length ? (f = p, e) : f;
    },
    timeout: function(p) {
      return arguments.length ? (h = +p, e) : h;
    },
    user: function(p) {
      return arguments.length < 1 ? u : (u = p == null ? null : p + "", e);
    },
    password: function(p) {
      return arguments.length < 1 ? s : (s = p == null ? null : p + "", e);
    },
    response: function(p) {
      return l = p, e;
    },
    get: function(p, g) {
      return e.send("GET", p, g);
    },
    post: function(p, g) {
      return e.send("POST", p, g);
    },
    send: function(p, g, d) {
      return a.open(p, t, !0, u, s), r != null && !o.has("accept") && o.set("accept", r + ",*/*"), a.setRequestHeader && o.each(function(v, y) {
        a.setRequestHeader(y, v);
      }), r != null && a.overrideMimeType && a.overrideMimeType(r), f != null && (a.responseType = f), h > 0 && (a.timeout = h), d == null && typeof g == "function" && (d = g, g = null), d != null && d.length === 1 && (d = W1(d)), d != null && e.on("error", d).on("load", function(v) {
        d(null, v);
      }), i.call("beforesend", e, a), a.send(g == null ? null : g), e;
    },
    abort: function() {
      return a.abort(), e;
    },
    on: function() {
      var p = i.on.apply(i, arguments);
      return p === i ? e : p;
    }
  }, n != null) {
    if (typeof n != "function")
      throw new Error("invalid callback: " + n);
    return e.get(n);
  }
  return e;
}
function W1(t) {
  return function(n, e) {
    t(n == null ? e : null);
  };
}
function q1(t) {
  var n = t.responseType;
  return n && n !== "text" ? t.response : t.responseText;
}
function Dr(t, n) {
  return function(e, i) {
    var r = Fa(e).mimeType(t).response(n);
    if (i != null) {
      if (typeof i != "function")
        throw new Error("invalid callback: " + i);
      return r.get(i);
    }
    return r;
  };
}
const G1 = Dr("text/html", function(t) {
  return document.createRange().createContextualFragment(t.responseText);
}), V1 = Dr("application/json", function(t) {
  return JSON.parse(t.responseText);
}), K1 = Dr("text/plain", function(t) {
  return t.responseText;
}), Z1 = Dr("application/xml", function(t) {
  var n = t.responseXML;
  if (!n)
    throw new Error("parse error");
  return n;
});
function Lc(t, n) {
  return function(e, i, r) {
    arguments.length < 3 && (r = i, i = null);
    var o = Fa(e).mimeType(t);
    return o.row = function(a) {
      return arguments.length ? o.response(J1(n, i = a)) : i;
    }, o.row(i), r ? o.get(r) : o;
  };
}
function J1(t, n) {
  return function(e) {
    return t(e.responseText, n);
  };
}
const Q1 = Lc("text/csv", Dc), j1 = Lc("text/tab-separated-values", zc);
var ue = 0, Ae = 0, me = 0, Ic = 1e3, Ki, Ee, Uo = 0, En = 0, Ua = 0, We = typeof performance == "object" && performance.now ? performance : Date, Fc = typeof requestAnimationFrame == "function" ? We === Date ? function(t) {
  requestAnimationFrame(function() {
    t(We.now());
  });
} : requestAnimationFrame : function(t) {
  setTimeout(t, 17);
};
function ge() {
  return En || (Fc(tg), En = We.now() + Ua);
}
function tg() {
  En = 0;
}
function qe() {
  this._call = this._time = this._next = null;
}
qe.prototype = zr.prototype = {
  constructor: qe,
  restart: function(t, n, e) {
    if (typeof t != "function")
      throw new TypeError("callback is not a function");
    e = (e == null ? ge() : +e) + (n == null ? 0 : +n), !this._next && Ee !== this && (Ee ? Ee._next = this : Ki = this, Ee = this), this._call = t, this._time = e, Yo();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Yo());
  }
};
function zr(t, n, e) {
  var i = new qe();
  return i.restart(t, n, e), i;
}
function Uc() {
  ge(), ++ue;
  for (var t = Ki, n; t; )
    (n = En - t._time) >= 0 && t._call.call(null, n), t = t._next;
  --ue;
}
function ss(t) {
  En = (Uo = t || We.now()) + Ua, ue = Ae = 0;
  try {
    Uc();
  } finally {
    ue = 0, eg(), En = 0;
  }
}
function ng() {
  var t = We.now(), n = t - Uo;
  n > Ic && (Ua -= n, Uo = t);
}
function eg() {
  for (var t, n = Ki, e, i = 1 / 0; n; )
    n._call ? (i > n._time && (i = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : Ki = e);
  Ee = t, Yo(i);
}
function Yo(t) {
  if (!ue) {
    Ae && (Ae = clearTimeout(Ae));
    var n = t - En;
    n > 24 ? (t < 1 / 0 && (Ae = setTimeout(ss, n)), me && (me = clearInterval(me))) : (me || (me = setInterval(ng, Ic)), ue = 1, Fc(ss));
  }
}
function Yc(t, n, e) {
  var i = new qe();
  return n = n == null ? 0 : +n, i.restart(function(r) {
    i.stop(), t(r + n);
  }, n, e), i;
}
function ig(t, n, e) {
  var i = new qe(), r = n;
  return n == null ? (i.restart(t, n, e), i) : (n = +n, e = e == null ? ge() : +e, i.restart(function o(a) {
    a += r, i.restart(o, r += n, e), t(a);
  }, n, e), i);
}
var so = new Date(), lo = new Date();
function st(t, n, e, i) {
  function r(o) {
    return t(o = new Date(+o)), o;
  }
  return r.floor = r, r.ceil = function(o) {
    return t(o = new Date(o - 1)), n(o, 1), t(o), o;
  }, r.round = function(o) {
    var a = r(o), u = r.ceil(o);
    return o - a < u - o ? a : u;
  }, r.offset = function(o, a) {
    return n(o = new Date(+o), a == null ? 1 : Math.floor(a)), o;
  }, r.range = function(o, a, u) {
    var s = [];
    if (o = r.ceil(o), u = u == null ? 1 : Math.floor(u), !(o < a) || !(u > 0))
      return s;
    do
      s.push(new Date(+o));
    while (n(o, u), t(o), o < a);
    return s;
  }, r.filter = function(o) {
    return st(function(a) {
      for (; t(a), !o(a); )
        a.setTime(a - 1);
    }, function(a, u) {
      for (; --u >= 0; )
        for (; n(a, 1), !o(a); )
          ;
    });
  }, e && (r.count = function(o, a) {
    return so.setTime(+o), lo.setTime(+a), t(so), t(lo), Math.floor(e(so, lo));
  }, r.every = function(o) {
    return o = Math.floor(o), !isFinite(o) || !(o > 0) ? null : o > 1 ? r.filter(i ? function(a) {
      return i(a) % o === 0;
    } : function(a) {
      return r.count(0, a) % o === 0;
    }) : r;
  }), r;
}
var Nn = st(function() {
}, function(t, n) {
  t.setTime(+t + n);
}, function(t, n) {
  return n - t;
});
Nn.every = function(t) {
  return t = Math.floor(t), !isFinite(t) || !(t > 0) ? null : t > 1 ? st(function(n) {
    n.setTime(Math.floor(n / t) * t);
  }, function(n, e) {
    n.setTime(+n + e * t);
  }, function(n, e) {
    return (e - n) / t;
  }) : Nn;
};
var ls = Nn.range, gi = 1e3, tn = 6e4, rn = 36e5, Hc = 864e5, Bc = 6048e5, Ge = st(function(t) {
  t.setTime(Math.floor(t / gi) * gi);
}, function(t, n) {
  t.setTime(+t + n * gi);
}, function(t, n) {
  return (n - t) / gi;
}, function(t) {
  return t.getUTCSeconds();
}), cs = Ge.range, Ya = st(function(t) {
  t.setTime(Math.floor(t / tn) * tn);
}, function(t, n) {
  t.setTime(+t + n * tn);
}, function(t, n) {
  return (n - t) / tn;
}, function(t) {
  return t.getMinutes();
}), rg = Ya.range, Ha = st(function(t) {
  var n = t.getTimezoneOffset() * tn % rn;
  n < 0 && (n += rn), t.setTime(Math.floor((+t - n) / rn) * rn + n);
}, function(t, n) {
  t.setTime(+t + n * rn);
}, function(t, n) {
  return (n - t) / rn;
}, function(t) {
  return t.getHours();
}), og = Ha.range, Lr = st(function(t) {
  t.setHours(0, 0, 0, 0);
}, function(t, n) {
  t.setDate(t.getDate() + n);
}, function(t, n) {
  return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * tn) / Hc;
}, function(t) {
  return t.getDate() - 1;
}), ag = Lr.range;
function Dn(t) {
  return st(function(n) {
    n.setDate(n.getDate() - (n.getDay() + 7 - t) % 7), n.setHours(0, 0, 0, 0);
  }, function(n, e) {
    n.setDate(n.getDate() + e * 7);
  }, function(n, e) {
    return (e - n - (e.getTimezoneOffset() - n.getTimezoneOffset()) * tn) / Bc;
  });
}
var Ve = Dn(0), Ba = Dn(1), Xc = Dn(2), Wc = Dn(3), qc = Dn(4), Gc = Dn(5), Vc = Dn(6), fs = Ve.range, ug = Ba.range, sg = Xc.range, lg = Wc.range, cg = qc.range, fg = Gc.range, hg = Vc.range, Xa = st(function(t) {
  t.setDate(1), t.setHours(0, 0, 0, 0);
}, function(t, n) {
  t.setMonth(t.getMonth() + n);
}, function(t, n) {
  return n.getMonth() - t.getMonth() + (n.getFullYear() - t.getFullYear()) * 12;
}, function(t) {
  return t.getMonth();
}), pg = Xa.range, zn = st(function(t) {
  t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, function(t, n) {
  t.setFullYear(t.getFullYear() + n);
}, function(t, n) {
  return n.getFullYear() - t.getFullYear();
}, function(t) {
  return t.getFullYear();
});
zn.every = function(t) {
  return !isFinite(t = Math.floor(t)) || !(t > 0) ? null : st(function(n) {
    n.setFullYear(Math.floor(n.getFullYear() / t) * t), n.setMonth(0, 1), n.setHours(0, 0, 0, 0);
  }, function(n, e) {
    n.setFullYear(n.getFullYear() + e * t);
  });
};
var gg = zn.range, Wa = st(function(t) {
  t.setUTCSeconds(0, 0);
}, function(t, n) {
  t.setTime(+t + n * tn);
}, function(t, n) {
  return (n - t) / tn;
}, function(t) {
  return t.getUTCMinutes();
}), dg = Wa.range, qa = st(function(t) {
  t.setUTCMinutes(0, 0, 0);
}, function(t, n) {
  t.setTime(+t + n * rn);
}, function(t, n) {
  return (n - t) / rn;
}, function(t) {
  return t.getUTCHours();
}), vg = qa.range, Ir = st(function(t) {
  t.setUTCHours(0, 0, 0, 0);
}, function(t, n) {
  t.setUTCDate(t.getUTCDate() + n);
}, function(t, n) {
  return (n - t) / Hc;
}, function(t) {
  return t.getUTCDate() - 1;
}), yg = Ir.range;
function Ln(t) {
  return st(function(n) {
    n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - t) % 7), n.setUTCHours(0, 0, 0, 0);
  }, function(n, e) {
    n.setUTCDate(n.getUTCDate() + e * 7);
  }, function(n, e) {
    return (e - n) / Bc;
  });
}
var Ke = Ln(0), Ga = Ln(1), Kc = Ln(2), Zc = Ln(3), Jc = Ln(4), Qc = Ln(5), jc = Ln(6), hs = Ke.range, _g = Ga.range, mg = Kc.range, wg = Zc.range, bg = Jc.range, xg = Qc.range, Mg = jc.range, Va = st(function(t) {
  t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
}, function(t, n) {
  t.setUTCMonth(t.getUTCMonth() + n);
}, function(t, n) {
  return n.getUTCMonth() - t.getUTCMonth() + (n.getUTCFullYear() - t.getUTCFullYear()) * 12;
}, function(t) {
  return t.getUTCMonth();
}), Cg = Va.range, In = st(function(t) {
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, function(t, n) {
  t.setUTCFullYear(t.getUTCFullYear() + n);
}, function(t, n) {
  return n.getUTCFullYear() - t.getUTCFullYear();
}, function(t) {
  return t.getUTCFullYear();
});
In.every = function(t) {
  return !isFinite(t = Math.floor(t)) || !(t > 0) ? null : st(function(n) {
    n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t), n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0);
  }, function(n, e) {
    n.setUTCFullYear(n.getUTCFullYear() + e * t);
  });
};
var Sg = In.range;
function Zi(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0)
    return null;
  var e, i = t.slice(0, e);
  return [
    i.length > 1 ? i[0] + i.slice(2) : i,
    +t.slice(e + 1)
  ];
}
function se(t) {
  return t = Zi(Math.abs(t)), t ? t[1] : NaN;
}
function kg(t, n) {
  return function(e, i) {
    for (var r = e.length, o = [], a = 0, u = t[0], s = 0; r > 0 && u > 0 && (s + u + 1 > i && (u = Math.max(1, i - s)), o.push(e.substring(r -= u, r + u)), !((s += u + 1) > i)); )
      u = t[a = (a + 1) % t.length];
    return o.reverse().join(n);
  };
}
function Tg(t, n) {
  t = t.toPrecision(n);
  t:
    for (var e = t.length, i = 1, r = -1, o; i < e; ++i)
      switch (t[i]) {
        case ".":
          r = o = i;
          break;
        case "0":
          r === 0 && (r = i), o = i;
          break;
        case "e":
          break t;
        default:
          r > 0 && (r = 0);
          break;
      }
  return r > 0 ? t.slice(0, r) + t.slice(o + 1) : t;
}
var tf;
function Ag(t, n) {
  var e = Zi(t, n);
  if (!e)
    return t + "";
  var i = e[0], r = e[1], o = r - (tf = Math.max(-8, Math.min(8, Math.floor(r / 3))) * 3) + 1, a = i.length;
  return o === a ? i : o > a ? i + new Array(o - a + 1).join("0") : o > 0 ? i.slice(0, o) + "." + i.slice(o) : "0." + new Array(1 - o).join("0") + Zi(t, Math.max(0, n + o - 1))[0];
}
function ps(t, n) {
  var e = Zi(t, n);
  if (!e)
    return t + "";
  var i = e[0], r = e[1];
  return r < 0 ? "0." + new Array(-r).join("0") + i : i.length > r + 1 ? i.slice(0, r + 1) + "." + i.slice(r + 1) : i + new Array(r - i.length + 2).join("0");
}
const nf = {
  "": Tg,
  "%": function(t, n) {
    return (t * 100).toFixed(n);
  },
  b: function(t) {
    return Math.round(t).toString(2);
  },
  c: function(t) {
    return t + "";
  },
  d: function(t) {
    return Math.round(t).toString(10);
  },
  e: function(t, n) {
    return t.toExponential(n);
  },
  f: function(t, n) {
    return t.toFixed(n);
  },
  g: function(t, n) {
    return t.toPrecision(n);
  },
  o: function(t) {
    return Math.round(t).toString(8);
  },
  p: function(t, n) {
    return ps(t * 100, n);
  },
  r: ps,
  s: Ag,
  X: function(t) {
    return Math.round(t).toString(16).toUpperCase();
  },
  x: function(t) {
    return Math.round(t).toString(16);
  }
};
var Eg = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;
function Ji(t) {
  return new ef(t);
}
function ef(t) {
  if (!(n = Eg.exec(t)))
    throw new Error("invalid format: " + t);
  var n, e = n[1] || " ", i = n[2] || ">", r = n[3] || "-", o = n[4] || "", a = !!n[5], u = n[6] && +n[6], s = !!n[7], l = n[8] && +n[8].slice(1), f = n[9] || "";
  f === "n" ? (s = !0, f = "g") : nf[f] || (f = ""), (a || e === "0" && i === "=") && (a = !0, e = "0", i = "="), this.fill = e, this.align = i, this.sign = r, this.symbol = o, this.zero = a, this.width = u, this.comma = s, this.precision = l, this.type = f;
}
ef.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width == null ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision == null ? "" : "." + Math.max(0, this.precision | 0)) + this.type;
};
var gs = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Ng(t) {
  return t;
}
function rf(t) {
  var n = t.grouping && t.thousands ? kg(t.grouping, t.thousands) : Ng, e = t.currency, i = t.decimal;
  function r(a) {
    a = Ji(a);
    var u = a.fill, s = a.align, l = a.sign, f = a.symbol, h = a.zero, c = a.width, p = a.comma, g = a.precision, d = a.type, v = f === "$" ? e[0] : f === "#" && /[boxX]/.test(d) ? "0" + d.toLowerCase() : "", y = f === "$" ? e[1] : /[%p]/.test(d) ? "%" : "", m = nf[d], _ = !d || /[defgprs%]/.test(d);
    g = g == null ? d ? 6 : 12 : /[gprs]/.test(d) ? Math.max(1, Math.min(21, g)) : Math.max(0, Math.min(20, g));
    function M(b) {
      var x = v, C = y, k, T, $;
      if (d === "c")
        C = m(b) + C, b = "";
      else {
        b = +b;
        var E = (b < 0 || 1 / b < 0) && (b *= -1, !0);
        if (b = m(b, g), E) {
          for (k = -1, T = b.length, E = !1; ++k < T; )
            if ($ = b.charCodeAt(k), 48 < $ && $ < 58 || d === "x" && 96 < $ && $ < 103 || d === "X" && 64 < $ && $ < 71) {
              E = !0;
              break;
            }
        }
        if (x = (E ? l === "(" ? l : "-" : l === "-" || l === "(" ? "" : l) + x, C = C + (d === "s" ? gs[8 + tf / 3] : "") + (E && l === "(" ? ")" : ""), _) {
          for (k = -1, T = b.length; ++k < T; )
            if ($ = b.charCodeAt(k), 48 > $ || $ > 57) {
              C = ($ === 46 ? i + b.slice(k + 1) : b.slice(k)) + C, b = b.slice(0, k);
              break;
            }
        }
      }
      p && !h && (b = n(b, 1 / 0));
      var A = x.length + b.length + C.length, w = A < c ? new Array(c - A + 1).join(u) : "";
      switch (p && h && (b = n(w + b, w.length ? c - C.length : 1 / 0), w = ""), s) {
        case "<":
          return x + b + C + w;
        case "=":
          return x + w + b + C;
        case "^":
          return w.slice(0, A = w.length >> 1) + x + b + C + w.slice(A);
      }
      return w + x + b + C;
    }
    return M.toString = function() {
      return a + "";
    }, M;
  }
  function o(a, u) {
    var s = r((a = Ji(a), a.type = "f", a)), l = Math.max(-8, Math.min(8, Math.floor(se(u) / 3))) * 3, f = Math.pow(10, -l), h = gs[8 + l / 3];
    return function(c) {
      return s(f * c) + h;
    };
  }
  return {
    format: r,
    formatPrefix: o
  };
}
var di, Fr, Ka;
of({
  decimal: ".",
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function of(t) {
  return di = rf(t), Fr = di.format, Ka = di.formatPrefix, di;
}
function af(t) {
  return Math.max(0, -se(Math.abs(t)));
}
function uf(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(se(n) / 3))) * 3 - se(Math.abs(t)));
}
function sf(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, se(n) - se(t)) + 1;
}
function $g(t) {
  if (0 <= t.y && t.y < 100) {
    var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
    return n.setFullYear(t.y), n;
  }
  return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
}
function co(t) {
  if (0 <= t.y && t.y < 100) {
    var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
    return n.setUTCFullYear(t.y), n;
  }
  return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
}
function fo(t) {
  return { y: t, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0 };
}
function lf(t) {
  var n = t.dateTime, e = t.date, i = t.time, r = t.periods, o = t.days, a = t.shortDays, u = t.months, s = t.shortMonths, l = we(r), f = be(r), h = we(o), c = be(o), p = we(a), g = be(a), d = we(u), v = be(u), y = we(s), m = be(s), _ = {
    a: P,
    A: H,
    b: X,
    B: Q,
    c: null,
    d: _s,
    e: _s,
    H: Gg,
    I: Vg,
    j: Kg,
    L: Zg,
    m: Jg,
    M: Qg,
    p: V,
    S: jg,
    U: td,
    w: nd,
    W: ed,
    x: null,
    X: null,
    y: id,
    Y: rd,
    Z: od,
    "%": ws
  }, M = {
    a: j,
    A: K,
    b: tt,
    B: Z,
    c: null,
    d: ms,
    e: ms,
    H: ad,
    I: ud,
    j: sd,
    L: ld,
    m: cd,
    M: fd,
    p: wt,
    S: hd,
    U: pd,
    w: gd,
    W: dd,
    x: null,
    X: null,
    y: vd,
    Y: yd,
    Z: _d,
    "%": ws
  }, b = {
    a: $,
    A: E,
    b: A,
    B: w,
    c: S,
    d: vs,
    e: vs,
    H: ys,
    I: ys,
    j: Hg,
    L: Wg,
    m: Yg,
    M: Bg,
    p: T,
    S: Xg,
    U: zg,
    w: Dg,
    W: Lg,
    x: N,
    X: R,
    y: Fg,
    Y: Ig,
    Z: Ug,
    "%": qg
  };
  _.x = x(e, _), _.X = x(i, _), _.c = x(n, _), M.x = x(e, M), M.X = x(i, M), M.c = x(n, M);
  function x(O, Y) {
    return function(B) {
      var D = [], ht = -1, Yt = 0, pt = O.length, kt, _n, Ru;
      for (B instanceof Date || (B = new Date(+B)); ++ht < pt; )
        O.charCodeAt(ht) === 37 && (D.push(O.slice(Yt, ht)), (_n = ds[kt = O.charAt(++ht)]) != null ? kt = O.charAt(++ht) : _n = kt === "e" ? " " : "0", (Ru = Y[kt]) && (kt = Ru(B, _n)), D.push(kt), Yt = ht + 1);
      return D.push(O.slice(Yt, ht)), D.join("");
    };
  }
  function C(O, Y) {
    return function(B) {
      var D = fo(1900), ht = k(D, O, B += "", 0);
      if (ht != B.length)
        return null;
      if ("p" in D && (D.H = D.H % 12 + D.p * 12), "W" in D || "U" in D) {
        "w" in D || (D.w = "W" in D ? 1 : 0);
        var Yt = "Z" in D ? co(fo(D.y)).getUTCDay() : Y(fo(D.y)).getDay();
        D.m = 0, D.d = "W" in D ? (D.w + 6) % 7 + D.W * 7 - (Yt + 5) % 7 : D.w + D.U * 7 - (Yt + 6) % 7;
      }
      return "Z" in D ? (D.H += D.Z / 100 | 0, D.M += D.Z % 100, co(D)) : Y(D);
    };
  }
  function k(O, Y, B, D) {
    for (var ht = 0, Yt = Y.length, pt = B.length, kt, _n; ht < Yt; ) {
      if (D >= pt)
        return -1;
      if (kt = Y.charCodeAt(ht++), kt === 37) {
        if (kt = Y.charAt(ht++), _n = b[kt in ds ? Y.charAt(ht++) : kt], !_n || (D = _n(O, B, D)) < 0)
          return -1;
      } else if (kt != B.charCodeAt(D++))
        return -1;
    }
    return D;
  }
  function T(O, Y, B) {
    var D = l.exec(Y.slice(B));
    return D ? (O.p = f[D[0].toLowerCase()], B + D[0].length) : -1;
  }
  function $(O, Y, B) {
    var D = p.exec(Y.slice(B));
    return D ? (O.w = g[D[0].toLowerCase()], B + D[0].length) : -1;
  }
  function E(O, Y, B) {
    var D = h.exec(Y.slice(B));
    return D ? (O.w = c[D[0].toLowerCase()], B + D[0].length) : -1;
  }
  function A(O, Y, B) {
    var D = y.exec(Y.slice(B));
    return D ? (O.m = m[D[0].toLowerCase()], B + D[0].length) : -1;
  }
  function w(O, Y, B) {
    var D = d.exec(Y.slice(B));
    return D ? (O.m = v[D[0].toLowerCase()], B + D[0].length) : -1;
  }
  function S(O, Y, B) {
    return k(O, n, Y, B);
  }
  function N(O, Y, B) {
    return k(O, e, Y, B);
  }
  function R(O, Y, B) {
    return k(O, i, Y, B);
  }
  function P(O) {
    return a[O.getDay()];
  }
  function H(O) {
    return o[O.getDay()];
  }
  function X(O) {
    return s[O.getMonth()];
  }
  function Q(O) {
    return u[O.getMonth()];
  }
  function V(O) {
    return r[+(O.getHours() >= 12)];
  }
  function j(O) {
    return a[O.getUTCDay()];
  }
  function K(O) {
    return o[O.getUTCDay()];
  }
  function tt(O) {
    return s[O.getUTCMonth()];
  }
  function Z(O) {
    return u[O.getUTCMonth()];
  }
  function wt(O) {
    return r[+(O.getUTCHours() >= 12)];
  }
  return {
    format: function(O) {
      var Y = x(O += "", _);
      return Y.toString = function() {
        return O;
      }, Y;
    },
    parse: function(O) {
      var Y = C(O += "", $g);
      return Y.toString = function() {
        return O;
      }, Y;
    },
    utcFormat: function(O) {
      var Y = x(O += "", M);
      return Y.toString = function() {
        return O;
      }, Y;
    },
    utcParse: function(O) {
      var Y = C(O, co);
      return Y.toString = function() {
        return O;
      }, Y;
    }
  };
}
var ds = { "-": "", _: " ", 0: "0" }, Dt = /^\s*\d+/, Rg = /^%/, Pg = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
function et(t, n, e) {
  var i = t < 0 ? "-" : "", r = (i ? -t : t) + "", o = r.length;
  return i + (o < e ? new Array(e - o + 1).join(n) + r : r);
}
function Og(t) {
  return t.replace(Pg, "\\$&");
}
function we(t) {
  return new RegExp("^(?:" + t.map(Og).join("|") + ")", "i");
}
function be(t) {
  for (var n = {}, e = -1, i = t.length; ++e < i; )
    n[t[e].toLowerCase()] = e;
  return n;
}
function Dg(t, n, e) {
  var i = Dt.exec(n.slice(e, e + 1));
  return i ? (t.w = +i[0], e + i[0].length) : -1;
}
function zg(t, n, e) {
  var i = Dt.exec(n.slice(e));
  return i ? (t.U = +i[0], e + i[0].length) : -1;
}
function Lg(t, n, e) {
  var i = Dt.exec(n.slice(e));
  return i ? (t.W = +i[0], e + i[0].length) : -1;
}
function Ig(t, n, e) {
  var i = Dt.exec(n.slice(e, e + 4));
  return i ? (t.y = +i[0], e + i[0].length) : -1;
}
function Fg(t, n, e) {
  var i = Dt.exec(n.slice(e, e + 2));
  return i ? (t.y = +i[0] + (+i[0] > 68 ? 1900 : 2e3), e + i[0].length) : -1;
}
function Ug(t, n, e) {
  var i = /^(Z)|([+-]\d\d)(?:\:?(\d\d))?/.exec(n.slice(e, e + 6));
  return i ? (t.Z = i[1] ? 0 : -(i[2] + (i[3] || "00")), e + i[0].length) : -1;
}
function Yg(t, n, e) {
  var i = Dt.exec(n.slice(e, e + 2));
  return i ? (t.m = i[0] - 1, e + i[0].length) : -1;
}
function vs(t, n, e) {
  var i = Dt.exec(n.slice(e, e + 2));
  return i ? (t.d = +i[0], e + i[0].length) : -1;
}
function Hg(t, n, e) {
  var i = Dt.exec(n.slice(e, e + 3));
  return i ? (t.m = 0, t.d = +i[0], e + i[0].length) : -1;
}
function ys(t, n, e) {
  var i = Dt.exec(n.slice(e, e + 2));
  return i ? (t.H = +i[0], e + i[0].length) : -1;
}
function Bg(t, n, e) {
  var i = Dt.exec(n.slice(e, e + 2));
  return i ? (t.M = +i[0], e + i[0].length) : -1;
}
function Xg(t, n, e) {
  var i = Dt.exec(n.slice(e, e + 2));
  return i ? (t.S = +i[0], e + i[0].length) : -1;
}
function Wg(t, n, e) {
  var i = Dt.exec(n.slice(e, e + 3));
  return i ? (t.L = +i[0], e + i[0].length) : -1;
}
function qg(t, n, e) {
  var i = Rg.exec(n.slice(e, e + 1));
  return i ? e + i[0].length : -1;
}
function _s(t, n) {
  return et(t.getDate(), n, 2);
}
function Gg(t, n) {
  return et(t.getHours(), n, 2);
}
function Vg(t, n) {
  return et(t.getHours() % 12 || 12, n, 2);
}
function Kg(t, n) {
  return et(1 + Lr.count(zn(t), t), n, 3);
}
function Zg(t, n) {
  return et(t.getMilliseconds(), n, 3);
}
function Jg(t, n) {
  return et(t.getMonth() + 1, n, 2);
}
function Qg(t, n) {
  return et(t.getMinutes(), n, 2);
}
function jg(t, n) {
  return et(t.getSeconds(), n, 2);
}
function td(t, n) {
  return et(Ve.count(zn(t), t), n, 2);
}
function nd(t) {
  return t.getDay();
}
function ed(t, n) {
  return et(Ba.count(zn(t), t), n, 2);
}
function id(t, n) {
  return et(t.getFullYear() % 100, n, 2);
}
function rd(t, n) {
  return et(t.getFullYear() % 1e4, n, 4);
}
function od(t) {
  var n = t.getTimezoneOffset();
  return (n > 0 ? "-" : (n *= -1, "+")) + et(n / 60 | 0, "0", 2) + et(n % 60, "0", 2);
}
function ms(t, n) {
  return et(t.getUTCDate(), n, 2);
}
function ad(t, n) {
  return et(t.getUTCHours(), n, 2);
}
function ud(t, n) {
  return et(t.getUTCHours() % 12 || 12, n, 2);
}
function sd(t, n) {
  return et(1 + Ir.count(In(t), t), n, 3);
}
function ld(t, n) {
  return et(t.getUTCMilliseconds(), n, 3);
}
function cd(t, n) {
  return et(t.getUTCMonth() + 1, n, 2);
}
function fd(t, n) {
  return et(t.getUTCMinutes(), n, 2);
}
function hd(t, n) {
  return et(t.getUTCSeconds(), n, 2);
}
function pd(t, n) {
  return et(Ke.count(In(t), t), n, 2);
}
function gd(t) {
  return t.getUTCDay();
}
function dd(t, n) {
  return et(Ga.count(In(t), t), n, 2);
}
function vd(t, n) {
  return et(t.getUTCFullYear() % 100, n, 2);
}
function yd(t, n) {
  return et(t.getUTCFullYear() % 1e4, n, 4);
}
function _d() {
  return "+0000";
}
function ws() {
  return "%";
}
var Hn, Za, cf, Ur, Ja;
ff({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function ff(t) {
  return Hn = lf(t), Za = Hn.format, cf = Hn.parse, Ur = Hn.utcFormat, Ja = Hn.utcParse, Hn;
}
var hf = "%Y-%m-%dT%H:%M:%S.%LZ";
function md(t) {
  return t.toISOString();
}
var wd = Date.prototype.toISOString ? md : Ur(hf);
function bd(t) {
  var n = new Date(t);
  return isNaN(n) ? null : n;
}
var xd = +new Date("2000-01-01T00:00:00.000Z") ? bd : Ja(hf), pf = Array.prototype, Qa = pf.map, hn = pf.slice, Ho = { name: "implicit" };
function ja(t) {
  var n = Gt(), e = [], i = Ho;
  t = t == null ? [] : hn.call(t);
  function r(o) {
    var a = o + "", u = n.get(a);
    if (!u) {
      if (i !== Ho)
        return i;
      n.set(a, u = e.push(o));
    }
    return t[(u - 1) % t.length];
  }
  return r.domain = function(o) {
    if (!arguments.length)
      return e.slice();
    e = [], n = Gt();
    for (var a = -1, u = o.length, s, l; ++a < u; )
      n.has(l = (s = o[a]) + "") || n.set(l, e.push(s));
    return r;
  }, r.range = function(o) {
    return arguments.length ? (t = hn.call(o), r) : t.slice();
  }, r.unknown = function(o) {
    return arguments.length ? (i = o, r) : i;
  }, r.copy = function() {
    return ja().domain(e).range(t).unknown(i);
  }, r;
}
function tu() {
  var t = ja().unknown(void 0), n = t.domain, e = t.range, i = [0, 1], r, o, a = !1, u = 0, s = 0, l = 0.5;
  delete t.unknown;
  function f() {
    var h = n().length, c = i[1] < i[0], p = i[c - 0], g = i[1 - c];
    r = (g - p) / Math.max(1, h - u + s * 2), a && (r = Math.floor(r)), p += (g - p - r * (h - u)) * l, o = r * (1 - u), a && (p = Math.round(p), o = Math.round(o));
    var d = zt(h).map(function(v) {
      return p + r * v;
    });
    return e(c ? d.reverse() : d);
  }
  return t.domain = function(h) {
    return arguments.length ? (n(h), f()) : n();
  }, t.range = function(h) {
    return arguments.length ? (i = [+h[0], +h[1]], f()) : i.slice();
  }, t.rangeRound = function(h) {
    return i = [+h[0], +h[1]], a = !0, f();
  }, t.bandwidth = function() {
    return o;
  }, t.step = function() {
    return r;
  }, t.round = function(h) {
    return arguments.length ? (a = !!h, f()) : a;
  }, t.padding = function(h) {
    return arguments.length ? (u = s = Math.max(0, Math.min(1, h)), f()) : u;
  }, t.paddingInner = function(h) {
    return arguments.length ? (u = Math.max(0, Math.min(1, h)), f()) : u;
  }, t.paddingOuter = function(h) {
    return arguments.length ? (s = Math.max(0, Math.min(1, h)), f()) : s;
  }, t.align = function(h) {
    return arguments.length ? (l = Math.max(0, Math.min(1, h)), f()) : l;
  }, t.copy = function() {
    return tu().domain(n()).range(i).round(a).paddingInner(u).paddingOuter(s).align(l);
  }, f();
}
function gf(t) {
  var n = t.copy;
  return t.padding = t.paddingOuter, delete t.paddingInner, delete t.paddingOuter, t.copy = function() {
    return gf(n());
  }, t;
}
function Md() {
  return gf(tu().paddingInner(1));
}
function nu(t) {
  return function() {
    return t;
  };
}
function df(t) {
  return +t;
}
var bs = [0, 1];
function eu(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : nu(n);
}
function Cd(t) {
  return function(n, e) {
    var i = t(n = +n, e = +e);
    return function(r) {
      return r <= n ? 0 : r >= e ? 1 : i(r);
    };
  };
}
function Sd(t) {
  return function(n, e) {
    var i = t(n = +n, e = +e);
    return function(r) {
      return r <= 0 ? n : r >= 1 ? e : i(r);
    };
  };
}
function kd(t, n, e, i) {
  var r = t[0], o = t[1], a = n[0], u = n[1];
  return o < r ? (r = e(o, r), a = i(u, a)) : (r = e(r, o), a = i(a, u)), function(s) {
    return a(r(s));
  };
}
function Td(t, n, e, i) {
  var r = Math.min(t.length, n.length) - 1, o = new Array(r), a = new Array(r), u = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++u < r; )
    o[u] = e(t[u], t[u + 1]), a[u] = i(n[u], n[u + 1]);
  return function(s) {
    var l = Sn(t, s, 1, r) - 1;
    return a[l](o[l](s));
  };
}
function Yr(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp());
}
function Hr(t, n) {
  var e = bs, i = bs, r = ii, o = !1, a, u, s;
  function l() {
    return a = Math.min(e.length, i.length) > 2 ? Td : kd, u = s = null, f;
  }
  function f(h) {
    return (u || (u = a(e, i, o ? Cd(t) : t, r)))(+h);
  }
  return f.invert = function(h) {
    return (s || (s = a(i, e, eu, o ? Sd(n) : n)))(+h);
  }, f.domain = function(h) {
    return arguments.length ? (e = Qa.call(h, df), l()) : e.slice();
  }, f.range = function(h) {
    return arguments.length ? (i = hn.call(h), l()) : i.slice();
  }, f.rangeRound = function(h) {
    return i = hn.call(h), r = Sc, l();
  }, f.clamp = function(h) {
    return arguments.length ? (o = !!h, l()) : o;
  }, f.interpolate = function(h) {
    return arguments.length ? (r = h, l()) : r;
  }, l();
}
function Ad(t, n, e) {
  var i = t[0], r = t[t.length - 1], o = kn(i, r, n == null ? 10 : n), a;
  switch (e = Ji(e == null ? ",f" : e), e.type) {
    case "s": {
      var u = Math.max(Math.abs(i), Math.abs(r));
      return e.precision == null && !isNaN(a = uf(o, u)) && (e.precision = a), Ka(e, u);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      e.precision == null && !isNaN(a = sf(o, Math.max(Math.abs(i), Math.abs(r)))) && (e.precision = a - (e.type === "e"));
      break;
    }
    case "f":
    case "%": {
      e.precision == null && !isNaN(a = af(o)) && (e.precision = a - (e.type === "%") * 2);
      break;
    }
  }
  return Fr(e);
}
function ri(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var i = n();
    return Sr(i[0], i[i.length - 1], e == null ? 10 : e);
  }, t.tickFormat = function(e, i) {
    return Ad(n(), e, i);
  }, t.nice = function(e) {
    var i = n(), r = i.length - 1, o = e == null ? 10 : e, a = i[0], u = i[r], s = kn(a, u, o);
    return s && (s = kn(Math.floor(a / s) * s, Math.ceil(u / s) * s, o), i[0] = Math.floor(a / s) * s, i[r] = Math.ceil(u / s) * s, n(i)), t;
  }, t;
}
function vf() {
  var t = Hr(eu, At);
  return t.copy = function() {
    return Yr(t, vf());
  }, ri(t);
}
function yf() {
  var t = [0, 1];
  function n(e) {
    return +e;
  }
  return n.invert = n, n.domain = n.range = function(e) {
    return arguments.length ? (t = Qa.call(e, df), n) : t.slice();
  }, n.copy = function() {
    return yf().domain(t);
  }, ri(n);
}
function _f(t, n) {
  t = t.slice();
  var e = 0, i = t.length - 1, r = t[e], o = t[i], a;
  return o < r && (a = e, e = i, i = a, a = r, r = o, o = a), t[e] = n.floor(r), t[i] = n.ceil(o), t;
}
function Ed(t, n) {
  return (n = Math.log(n / t)) ? function(e) {
    return Math.log(e / t) / n;
  } : nu(n);
}
function Nd(t, n) {
  return t < 0 ? function(e) {
    return -Math.pow(-n, e) * Math.pow(-t, 1 - e);
  } : function(e) {
    return Math.pow(n, e) * Math.pow(t, 1 - e);
  };
}
function $d(t) {
  return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t;
}
function xs(t) {
  return t === 10 ? $d : t === Math.E ? Math.exp : function(n) {
    return Math.pow(t, n);
  };
}
function Ms(t) {
  return t === Math.E ? Math.log : t === 10 && Math.log10 || t === 2 && Math.log2 || (t = Math.log(t), function(n) {
    return Math.log(n) / t;
  });
}
function Cs(t) {
  return function(n) {
    return -t(-n);
  };
}
function mf() {
  var t = Hr(Ed, Nd).domain([1, 10]), n = t.domain, e = 10, i = Ms(10), r = xs(10);
  function o() {
    return i = Ms(e), r = xs(e), n()[0] < 0 && (i = Cs(i), r = Cs(r)), t;
  }
  return t.base = function(a) {
    return arguments.length ? (e = +a, o()) : e;
  }, t.domain = function(a) {
    return arguments.length ? (n(a), o()) : n();
  }, t.ticks = function(a) {
    var u = n(), s = u[0], l = u[u.length - 1], f;
    (f = l < s) && (h = s, s = l, l = h);
    var h = i(s), c = i(l), p, g, d, v = a == null ? 10 : +a, y = [];
    if (!(e % 1) && c - h < v) {
      if (h = Math.round(h) - 1, c = Math.round(c) + 1, s > 0) {
        for (; h < c; ++h)
          for (g = 1, p = r(h); g < e; ++g)
            if (d = p * g, !(d < s)) {
              if (d > l)
                break;
              y.push(d);
            }
      } else
        for (; h < c; ++h)
          for (g = e - 1, p = r(h); g >= 1; --g)
            if (d = p * g, !(d < s)) {
              if (d > l)
                break;
              y.push(d);
            }
    } else
      y = Sr(h, c, Math.min(c - h, v)).map(r);
    return f ? y.reverse() : y;
  }, t.tickFormat = function(a, u) {
    if (u == null && (u = e === 10 ? ".0e" : ","), typeof u != "function" && (u = Fr(u)), a === 1 / 0)
      return u;
    a == null && (a = 10);
    var s = Math.max(1, e * a / t.ticks().length);
    return function(l) {
      var f = l / r(Math.round(i(l)));
      return f * e < e - 0.5 && (f *= e), f <= s ? u(l) : "";
    };
  }, t.nice = function() {
    return n(_f(n(), {
      floor: function(a) {
        return r(Math.floor(i(a)));
      },
      ceil: function(a) {
        return r(Math.ceil(i(a)));
      }
    }));
  }, t.copy = function() {
    return Yr(t, mf().base(e));
  }, t;
}
function Bn(t, n) {
  return t < 0 ? -Math.pow(-t, n) : Math.pow(t, n);
}
function iu() {
  var t = 1, n = Hr(i, r), e = n.domain;
  function i(o, a) {
    return (a = Bn(a, t) - (o = Bn(o, t))) ? function(u) {
      return (Bn(u, t) - o) / a;
    } : nu(a);
  }
  function r(o, a) {
    return a = Bn(a, t) - (o = Bn(o, t)), function(u) {
      return Bn(o + a * u, 1 / t);
    };
  }
  return n.exponent = function(o) {
    return arguments.length ? (t = +o, e(e())) : t;
  }, n.copy = function() {
    return Yr(n, iu().exponent(t));
  }, ri(n);
}
function Rd() {
  return iu().exponent(0.5);
}
function wf() {
  var t = [], n = [], e = [];
  function i() {
    var o = 0, a = Math.max(1, n.length);
    for (e = new Array(a - 1); ++o < a; )
      e[o - 1] = Ue(t, o / a);
    return r;
  }
  function r(o) {
    if (!isNaN(o = +o))
      return n[Sn(e, o)];
  }
  return r.invertExtent = function(o) {
    var a = n.indexOf(o);
    return a < 0 ? [NaN, NaN] : [
      a > 0 ? e[a - 1] : t[0],
      a < e.length ? e[a] : t[t.length - 1]
    ];
  }, r.domain = function(o) {
    if (!arguments.length)
      return t.slice();
    t = [];
    for (var a = 0, u = o.length, s; a < u; ++a)
      s = o[a], s != null && !isNaN(s = +s) && t.push(s);
    return t.sort(Pn), i();
  }, r.range = function(o) {
    return arguments.length ? (n = hn.call(o), i()) : n.slice();
  }, r.quantiles = function() {
    return e.slice();
  }, r.copy = function() {
    return wf().domain(t).range(n);
  }, r;
}
function bf() {
  var t = 0, n = 1, e = 1, i = [0.5], r = [0, 1];
  function o(u) {
    if (u <= u)
      return r[Sn(i, u, 0, e)];
  }
  function a() {
    var u = -1;
    for (i = new Array(e); ++u < e; )
      i[u] = ((u + 1) * n - (u - e) * t) / (e + 1);
    return o;
  }
  return o.domain = function(u) {
    return arguments.length ? (t = +u[0], n = +u[1], a()) : [t, n];
  }, o.range = function(u) {
    return arguments.length ? (e = (r = hn.call(u)).length - 1, a()) : r.slice();
  }, o.invertExtent = function(u) {
    var s = r.indexOf(u);
    return s < 0 ? [NaN, NaN] : s < 1 ? [t, i[0]] : s >= e ? [i[e - 1], n] : [i[s - 1], i[s]];
  }, o.copy = function() {
    return bf().domain([t, n]).range(r);
  }, ri(o);
}
function xf() {
  var t = [0.5], n = [0, 1], e = 1;
  function i(r) {
    if (r <= r)
      return n[Sn(t, r, 0, e)];
  }
  return i.domain = function(r) {
    return arguments.length ? (t = hn.call(r), e = Math.min(t.length, n.length - 1), i) : t.slice();
  }, i.range = function(r) {
    return arguments.length ? (n = hn.call(r), e = Math.min(t.length, n.length - 1), i) : n.slice();
  }, i.invertExtent = function(r) {
    var o = n.indexOf(r);
    return [t[o - 1], t[o]];
  }, i.copy = function() {
    return xf().domain(t).range(n);
  }, i;
}
var Ne = 1e3, $e = Ne * 60, Re = $e * 60, Ze = Re * 24, Pd = Ze * 7, Ss = Ze * 30, ho = Ze * 365;
function Od(t) {
  return new Date(t);
}
function Dd(t) {
  return t instanceof Date ? +t : +new Date(+t);
}
function ru(t, n, e, i, r, o, a, u, s) {
  var l = Hr(eu, At), f = l.invert, h = l.domain, c = s(".%L"), p = s(":%S"), g = s("%I:%M"), d = s("%I %p"), v = s("%a %d"), y = s("%b %d"), m = s("%B"), _ = s("%Y"), M = [
    [a, 1, Ne],
    [a, 5, 5 * Ne],
    [a, 15, 15 * Ne],
    [a, 30, 30 * Ne],
    [o, 1, $e],
    [o, 5, 5 * $e],
    [o, 15, 15 * $e],
    [o, 30, 30 * $e],
    [r, 1, Re],
    [r, 3, 3 * Re],
    [r, 6, 6 * Re],
    [r, 12, 12 * Re],
    [i, 1, Ze],
    [i, 2, 2 * Ze],
    [e, 1, Pd],
    [n, 1, Ss],
    [n, 3, 3 * Ss],
    [t, 1, ho]
  ];
  function b(C) {
    return (a(C) < C ? c : o(C) < C ? p : r(C) < C ? g : i(C) < C ? d : n(C) < C ? e(C) < C ? v : y : t(C) < C ? m : _)(C);
  }
  function x(C, k, T, $) {
    if (C == null && (C = 10), typeof C == "number") {
      var E = Math.abs(T - k) / C, A = ya(function(w) {
        return w[2];
      }).right(M, E);
      A === M.length ? ($ = kn(k / ho, T / ho, C), C = t) : A ? (A = M[E / M[A - 1][2] < M[A][2] / E ? A - 1 : A], $ = A[1], C = A[0]) : ($ = kn(k, T, C), C = u);
    }
    return $ == null ? C : C.every($);
  }
  return l.invert = function(C) {
    return new Date(f(C));
  }, l.domain = function(C) {
    return arguments.length ? h(Qa.call(C, Dd)) : h().map(Od);
  }, l.ticks = function(C, k) {
    var T = h(), $ = T[0], E = T[T.length - 1], A = E < $, w;
    return A && (w = $, $ = E, E = w), w = x(C, $, E, k), w = w ? w.range($, E + 1) : [], A ? w.reverse() : w;
  }, l.tickFormat = function(C, k) {
    return k == null ? b : s(k);
  }, l.nice = function(C, k) {
    var T = h();
    return (C = x(C, T[0], T[T.length - 1], k)) ? h(_f(T, C)) : l;
  }, l.copy = function() {
    return Yr(l, ru(t, n, e, i, r, o, a, u, s));
  }, l;
}
function zd() {
  return ru(zn, Xa, Ve, Lr, Ha, Ya, Ge, Nn, Za).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]);
}
function Ld() {
  return ru(In, Va, Ke, Ir, qa, Wa, Ge, Nn, Ur).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]);
}
function vn(t) {
  return t.match(/.{6}/g).map(function(n) {
    return "#" + n;
  });
}
const Id = vn("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), Fd = vn("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"), Ud = vn("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"), Yd = vn("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"), Hd = Rr(Ft(300, 0.5, 0), Ft(-240, 0.5, 1));
var Bd = Rr(Ft(-100, 0.75, 0.35), Ft(80, 1.5, 0.8)), Xd = Rr(Ft(260, 0.75, 0.35), Ft(80, 1.5, 0.8)), vi = Ft();
function Wd(t) {
  (t < 0 || t > 1) && (t -= Math.floor(t));
  var n = Math.abs(t - 0.5);
  return vi.h = 360 * t - 100, vi.s = 1.5 - 1.5 * n, vi.l = 0.8 - 0.9 * n, vi + "";
}
function Br(t) {
  var n = t.length;
  return function(e) {
    return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))];
  };
}
const qd = Br(vn("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
var Gd = Br(vn("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")), Vd = Br(vn("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")), Kd = Br(vn("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
function Mf(t) {
  var n = 0, e = 1, i = !1;
  function r(o) {
    var a = (o - n) / (e - n);
    return t(i ? Math.max(0, Math.min(1, a)) : a);
  }
  return r.domain = function(o) {
    return arguments.length ? (n = +o[0], e = +o[1], r) : [n, e];
  }, r.clamp = function(o) {
    return arguments.length ? (i = !!o, r) : i;
  }, r.interpolator = function(o) {
    return arguments.length ? (t = o, r) : t;
  }, r.copy = function() {
    return Mf(t).domain([n, e]).clamp(i);
  }, ri(r);
}
var Bo = "http://www.w3.org/1999/xhtml";
const Xo = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Bo,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function oi(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), Xo.hasOwnProperty(n) ? { space: Xo[n], local: t } : t;
}
function Zd(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === Bo && n.documentElement.namespaceURI === Bo ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function Jd(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function ou(t) {
  var n = oi(t);
  return (n.local ? Jd : Zd)(n);
}
var Qd = 0;
function Cf() {
  return new Wo();
}
function Wo() {
  this._ = "@" + (++Qd).toString(36);
}
Wo.prototype = Cf.prototype = {
  constructor: Wo,
  get: function(t) {
    for (var n = this._; !(n in t); )
      if (!(t = t.parentNode))
        return;
    return t[n];
  },
  set: function(t, n) {
    return t[this._] = n;
  },
  remove: function(t) {
    return this._ in t && delete t[this._];
  },
  toString: function() {
    return this._;
  }
};
var Sf = function(t) {
  return function() {
    return this.matches(t);
  };
};
if (typeof document < "u") {
  var xe = document.documentElement;
  if (!xe.matches) {
    var jd = xe.webkitMatchesSelector || xe.msMatchesSelector || xe.mozMatchesSelector || xe.oMatchesSelector;
    Sf = function(t) {
      return function() {
        return jd.call(this, t);
      };
    };
  }
}
const au = Sf;
var kf = {}, L = null;
if (typeof document < "u") {
  var tv = document.documentElement;
  "onmouseenter" in tv || (kf = { mouseenter: "mouseover", mouseleave: "mouseout" });
}
function nv(t, n, e) {
  return t = Tf(t, n, e), function(i) {
    var r = i.relatedTarget;
    (!r || r !== this && !(r.compareDocumentPosition(this) & 8)) && t.call(this, i);
  };
}
function Tf(t, n, e) {
  return function(i) {
    var r = L;
    L = i;
    try {
      t.call(this, this.__data__, n, e);
    } finally {
      L = r;
    }
  };
}
function ev(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", i = n.indexOf(".");
    return i >= 0 && (e = n.slice(i + 1), n = n.slice(0, i)), { type: n, name: e };
  });
}
function iv(t) {
  return function() {
    var n = this.__on;
    if (!!n) {
      for (var e = 0, i = -1, r = n.length, o; e < r; ++e)
        o = n[e], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.capture) : n[++i] = o;
      ++i ? n.length = i : delete this.__on;
    }
  };
}
function rv(t, n, e) {
  var i = kf.hasOwnProperty(t.type) ? nv : Tf;
  return function(r, o, a) {
    var u = this.__on, s, l = i(n, o, a);
    if (u) {
      for (var f = 0, h = u.length; f < h; ++f)
        if ((s = u[f]).type === t.type && s.name === t.name) {
          this.removeEventListener(s.type, s.listener, s.capture), this.addEventListener(s.type, s.listener = l, s.capture = e), s.value = n;
          return;
        }
    }
    this.addEventListener(t.type, l, e), s = { type: t.type, name: t.name, value: n, listener: l, capture: e }, u ? u.push(s) : this.__on = [s];
  };
}
function ov(t, n, e) {
  var i = ev(t + ""), r, o = i.length, a;
  if (arguments.length < 2) {
    var u = this.node().__on;
    if (u) {
      for (var s = 0, l = u.length, f; s < l; ++s)
        for (r = 0, f = u[s]; r < o; ++r)
          if ((a = i[r]).type === f.type && a.name === f.name)
            return f.value;
    }
    return;
  }
  for (u = n ? rv : iv, e == null && (e = !1), r = 0; r < o; ++r)
    this.each(u(i[r], n, e));
  return this;
}
function Je(t, n, e, i) {
  var r = L;
  t.sourceEvent = L, L = t;
  try {
    return n.apply(e, i);
  } finally {
    L = r;
  }
}
function uu() {
  for (var t = L, n; n = t.sourceEvent; )
    t = n;
  return t;
}
function su(t, n) {
  var e = t.ownerSVGElement || t;
  if (e.createSVGPoint) {
    var i = e.createSVGPoint();
    return i.x = n.clientX, i.y = n.clientY, i = i.matrixTransform(t.getScreenCTM().inverse()), [i.x, i.y];
  }
  var r = t.getBoundingClientRect();
  return [n.clientX - r.left - t.clientLeft, n.clientY - r.top - t.clientTop];
}
function on(t) {
  var n = uu();
  return n.changedTouches && (n = n.changedTouches[0]), su(t, n);
}
function av() {
}
function Xr(t) {
  return t == null ? av : function() {
    return this.querySelector(t);
  };
}
function uv(t) {
  typeof t != "function" && (t = Xr(t));
  for (var n = this._groups, e = n.length, i = new Array(e), r = 0; r < e; ++r)
    for (var o = n[r], a = o.length, u = i[r] = new Array(a), s, l, f = 0; f < a; ++f)
      (s = o[f]) && (l = t.call(s, s.__data__, f, o)) && ("__data__" in s && (l.__data__ = s.__data__), u[f] = l);
  return new Mt(i, this._parents);
}
function sv() {
  return [];
}
function lu(t) {
  return t == null ? sv : function() {
    return this.querySelectorAll(t);
  };
}
function lv(t) {
  typeof t != "function" && (t = lu(t));
  for (var n = this._groups, e = n.length, i = [], r = [], o = 0; o < e; ++o)
    for (var a = n[o], u = a.length, s, l = 0; l < u; ++l)
      (s = a[l]) && (i.push(t.call(s, s.__data__, l, a)), r.push(s));
  return new Mt(i, r);
}
function cv(t) {
  typeof t != "function" && (t = au(t));
  for (var n = this._groups, e = n.length, i = new Array(e), r = 0; r < e; ++r)
    for (var o = n[r], a = o.length, u = i[r] = [], s, l = 0; l < a; ++l)
      (s = o[l]) && t.call(s, s.__data__, l, o) && u.push(s);
  return new Mt(i, this._parents);
}
function Af(t) {
  return new Array(t.length);
}
function fv() {
  return new Mt(this._enter || this._groups.map(Af), this._parents);
}
function Qi(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
Qi.prototype = {
  constructor: Qi,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, n) {
    return this._parent.insertBefore(t, n);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function hv(t) {
  return function() {
    return t;
  };
}
var ks = "$";
function pv(t, n, e, i, r, o) {
  for (var a = 0, u, s = n.length, l = o.length; a < l; ++a)
    (u = n[a]) ? (u.__data__ = o[a], i[a] = u) : e[a] = new Qi(t, o[a]);
  for (; a < s; ++a)
    (u = n[a]) && (r[a] = u);
}
function gv(t, n, e, i, r, o, a) {
  var u, s, l = {}, f = n.length, h = o.length, c = new Array(f), p;
  for (u = 0; u < f; ++u)
    (s = n[u]) && (c[u] = p = ks + a.call(s, s.__data__, u, n), p in l ? r[u] = s : l[p] = s);
  for (u = 0; u < h; ++u)
    p = ks + a.call(t, o[u], u, o), (s = l[p]) ? (i[u] = s, s.__data__ = o[u], l[p] = null) : e[u] = new Qi(t, o[u]);
  for (u = 0; u < f; ++u)
    (s = n[u]) && l[c[u]] === s && (r[u] = s);
}
function dv(t, n) {
  if (!t)
    return p = new Array(this.size()), l = -1, this.each(function(x) {
      p[++l] = x;
    }), p;
  var e = n ? gv : pv, i = this._parents, r = this._groups;
  typeof t != "function" && (t = hv(t));
  for (var o = r.length, a = new Array(o), u = new Array(o), s = new Array(o), l = 0; l < o; ++l) {
    var f = i[l], h = r[l], c = h.length, p = t.call(f, f && f.__data__, l, i), g = p.length, d = u[l] = new Array(g), v = a[l] = new Array(g), y = s[l] = new Array(c);
    e(f, h, d, v, y, p, n);
    for (var m = 0, _ = 0, M, b; m < g; ++m)
      if (M = d[m]) {
        for (m >= _ && (_ = m + 1); !(b = v[_]) && ++_ < g; )
          ;
        M._next = b || null;
      }
  }
  return a = new Mt(a, i), a._enter = u, a._exit = s, a;
}
function vv() {
  return new Mt(this._exit || this._groups.map(Af), this._parents);
}
function yv(t) {
  for (var n = this._groups, e = t._groups, i = n.length, r = e.length, o = Math.min(i, r), a = new Array(i), u = 0; u < o; ++u)
    for (var s = n[u], l = e[u], f = s.length, h = a[u] = new Array(f), c, p = 0; p < f; ++p)
      (c = s[p] || l[p]) && (h[p] = c);
  for (; u < i; ++u)
    a[u] = n[u];
  return new Mt(a, this._parents);
}
function _v() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var i = t[n], r = i.length - 1, o = i[r], a; --r >= 0; )
      (a = i[r]) && (o && o !== a.nextSibling && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function mv(t) {
  t || (t = wv);
  function n(h, c) {
    return h && c ? t(h.__data__, c.__data__) : !h - !c;
  }
  for (var e = this._groups, i = e.length, r = new Array(i), o = 0; o < i; ++o) {
    for (var a = e[o], u = a.length, s = r[o] = new Array(u), l, f = 0; f < u; ++f)
      (l = a[f]) && (s[f] = l);
    s.sort(n);
  }
  return new Mt(r, this._parents).order();
}
function wv(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function bv() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function xv() {
  var t = new Array(this.size()), n = -1;
  return this.each(function() {
    t[++n] = this;
  }), t;
}
function Mv() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var i = t[n], r = 0, o = i.length; r < o; ++r) {
      var a = i[r];
      if (a)
        return a;
    }
  return null;
}
function Cv() {
  var t = 0;
  return this.each(function() {
    ++t;
  }), t;
}
function Sv() {
  return !this.node();
}
function kv(t) {
  for (var n = this._groups, e = 0, i = n.length; e < i; ++e)
    for (var r = n[e], o = 0, a = r.length, u; o < a; ++o)
      (u = r[o]) && t.call(u, u.__data__, o, r);
  return this;
}
function Tv(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Av(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Ev(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function Nv(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function $v(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function Rv(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function Pv(t, n) {
  var e = oi(t);
  if (arguments.length < 2) {
    var i = this.node();
    return e.local ? i.getAttributeNS(e.space, e.local) : i.getAttribute(e);
  }
  return this.each((n == null ? e.local ? Av : Tv : typeof n == "function" ? e.local ? Rv : $v : e.local ? Nv : Ev)(e, n));
}
function de(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Ov(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Dv(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function zv(t, n, e) {
  return function() {
    var i = n.apply(this, arguments);
    i == null ? this.style.removeProperty(t) : this.style.setProperty(t, i, e);
  };
}
function Lv(t, n, e) {
  var i;
  return arguments.length > 1 ? this.each((n == null ? Ov : typeof n == "function" ? zv : Dv)(t, n, e == null ? "" : e)) : de(i = this.node()).getComputedStyle(i, null).getPropertyValue(t);
}
function Iv(t) {
  return function() {
    delete this[t];
  };
}
function Fv(t, n) {
  return function() {
    this[t] = n;
  };
}
function Uv(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function Yv(t, n) {
  return arguments.length > 1 ? this.each((n == null ? Iv : typeof n == "function" ? Uv : Fv)(t, n)) : this.node()[t];
}
function Ef(t) {
  return t.trim().split(/^|\s+/);
}
function cu(t) {
  return t.classList || new Nf(t);
}
function Nf(t) {
  this._node = t, this._names = Ef(t.getAttribute("class") || "");
}
Nf.prototype = {
  add: function(t) {
    var n = this._names.indexOf(t);
    n < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var n = this._names.indexOf(t);
    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function $f(t, n) {
  for (var e = cu(t), i = -1, r = n.length; ++i < r; )
    e.add(n[i]);
}
function Rf(t, n) {
  for (var e = cu(t), i = -1, r = n.length; ++i < r; )
    e.remove(n[i]);
}
function Hv(t) {
  return function() {
    $f(this, t);
  };
}
function Bv(t) {
  return function() {
    Rf(this, t);
  };
}
function Xv(t, n) {
  return function() {
    (n.apply(this, arguments) ? $f : Rf)(this, t);
  };
}
function Wv(t, n) {
  var e = Ef(t + "");
  if (arguments.length < 2) {
    for (var i = cu(this.node()), r = -1, o = e.length; ++r < o; )
      if (!i.contains(e[r]))
        return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? Xv : n ? Hv : Bv)(e, n));
}
function qv() {
  this.textContent = "";
}
function Gv(t) {
  return function() {
    this.textContent = t;
  };
}
function Vv(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n == null ? "" : n;
  };
}
function Kv(t) {
  return arguments.length ? this.each(t == null ? qv : (typeof t == "function" ? Vv : Gv)(t)) : this.node().textContent;
}
function Zv() {
  this.innerHTML = "";
}
function Jv(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Qv(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n == null ? "" : n;
  };
}
function jv(t) {
  return arguments.length ? this.each(t == null ? Zv : (typeof t == "function" ? Qv : Jv)(t)) : this.node().innerHTML;
}
function ty() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function ny() {
  return this.each(ty);
}
function ey() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function iy() {
  return this.each(ey);
}
function ry(t) {
  var n = typeof t == "function" ? t : ou(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function oy() {
  return null;
}
function ay(t, n) {
  var e = typeof t == "function" ? t : ou(t), i = n == null ? oy : typeof n == "function" ? n : Xr(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), i.apply(this, arguments) || null);
  });
}
function uy() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function sy() {
  return this.each(uy);
}
function ly(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Pf(t, n, e) {
  var i = de(t), r = i.CustomEvent;
  r ? r = new r(n, e) : (r = i.document.createEvent("Event"), e ? (r.initEvent(n, e.bubbles, e.cancelable), r.detail = e.detail) : r.initEvent(n, !1, !1)), t.dispatchEvent(r);
}
function cy(t, n) {
  return function() {
    return Pf(this, t, n);
  };
}
function fy(t, n) {
  return function() {
    return Pf(this, t, n.apply(this, arguments));
  };
}
function hy(t, n) {
  return this.each((typeof n == "function" ? fy : cy)(t, n));
}
var fu = [null];
function Mt(t, n) {
  this._groups = t, this._parents = n;
}
function Fn() {
  return new Mt([[document.documentElement]], fu);
}
Mt.prototype = Fn.prototype = {
  constructor: Mt,
  select: uv,
  selectAll: lv,
  filter: cv,
  data: dv,
  enter: fv,
  exit: vv,
  merge: yv,
  order: _v,
  sort: mv,
  call: bv,
  nodes: xv,
  node: Mv,
  size: Cv,
  empty: Sv,
  each: kv,
  attr: Pv,
  style: Lv,
  property: Yv,
  classed: Wv,
  text: Kv,
  html: jv,
  raise: ny,
  lower: iy,
  append: ry,
  insert: ay,
  remove: sy,
  datum: ly,
  on: ov,
  dispatch: hy
};
function Nt(t) {
  return typeof t == "string" ? new Mt([[document.querySelector(t)]], [document.documentElement]) : new Mt([[t]], fu);
}
function py(t) {
  return typeof t == "string" ? new Mt([document.querySelectorAll(t)], [document.documentElement]) : new Mt([t == null ? [] : t], fu);
}
function ji(t, n, e) {
  arguments.length < 3 && (e = n, n = uu().changedTouches);
  for (var i = 0, r = n ? n.length : 0, o; i < r; ++i)
    if ((o = n[i]).identifier === e)
      return su(t, o);
  return null;
}
function gy(t, n) {
  n == null && (n = uu().touches);
  for (var e = 0, i = n ? n.length : 0, r = new Array(i); e < i; ++e)
    r[e] = su(t, n[e]);
  return r;
}
var dy = dn("start", "end", "interrupt"), vy = [], Of = 0, Df = 1, qo = 2, Ai = 3, Ts = 4, Ei = 5;
function Wr(t, n, e, i, r, o) {
  var a = t.__transition;
  if (!a)
    t.__transition = {};
  else if (e in a)
    return;
  yy(t, e, {
    name: n,
    index: i,
    group: r,
    on: dy,
    tween: vy,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: Of
  });
}
function hu(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n]) || e.state > Of)
    throw new Error("too late");
  return e;
}
function Un(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n]) || e.state > qo)
    throw new Error("too late");
  return e;
}
function en(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n]))
    throw new Error("too late");
  return e;
}
function yy(t, n, e) {
  var i = t.__transition, r;
  i[n] = e, e.timer = zr(o, 0, e.time);
  function o(s) {
    e.state = Df, e.delay <= s ? a(s - e.delay) : e.timer.restart(a, e.delay, e.time);
  }
  function a(s) {
    var l, f, h, c;
    for (l in i)
      c = i[l], c.name === e.name && (c.state === Ai ? (c.state = Ei, c.timer.stop(), c.on.call("interrupt", t, t.__data__, c.index, c.group), delete i[l]) : +l < n && (c.state = Ei, c.timer.stop(), delete i[l]));
    if (Yc(function() {
      e.state === Ai && (e.timer.restart(u, e.delay, e.time), u(s));
    }), e.state = qo, e.on.call("start", t, t.__data__, e.index, e.group), e.state === qo) {
      for (e.state = Ai, r = new Array(h = e.tween.length), l = 0, f = -1; l < h; ++l)
        (c = e.tween[l].value.call(t, t.__data__, e.index, e.group)) && (r[++f] = c);
      r.length = f + 1;
    }
  }
  function u(s) {
    for (var l = s < e.duration ? e.ease.call(null, s / e.duration) : (e.state = Ts, 1), f = -1, h = r.length; ++f < h; )
      r[f].call(null, l);
    if (e.state === Ts) {
      e.state = Ei, e.timer.stop(), e.on.call("end", t, t.__data__, e.index, e.group);
      for (f in i)
        if (+f !== n)
          return void delete i[n];
      delete t.__transition;
    }
  }
}
function Cn(t, n) {
  var e = t.__transition, i, r, o = !0, a;
  if (!!e) {
    n = n == null ? null : n + "";
    for (a in e) {
      if ((i = e[a]).name !== n) {
        o = !1;
        continue;
      }
      r = i.state === Ai, i.state = Ei, i.timer.stop(), r && i.on.call("interrupt", t, t.__data__, i.index, i.group), delete e[a];
    }
    o && delete t.__transition;
  }
}
function _y(t) {
  return this.each(function() {
    Cn(this, t);
  });
}
function my(t, n) {
  var e, i;
  return function() {
    var r = Un(this, t), o = r.tween;
    if (o !== e) {
      i = e = o;
      for (var a = 0, u = i.length; a < u; ++a)
        if (i[a].name === n) {
          i = i.slice(), i.splice(a, 1);
          break;
        }
    }
    r.tween = i;
  };
}
function wy(t, n, e) {
  var i, r;
  if (typeof e != "function")
    throw new Error();
  return function() {
    var o = Un(this, t), a = o.tween;
    if (a !== i) {
      r = (i = a).slice();
      for (var u = { name: n, value: e }, s = 0, l = r.length; s < l; ++s)
        if (r[s].name === n) {
          r[s] = u;
          break;
        }
      s === l && r.push(u);
    }
    o.tween = r;
  };
}
function by(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var i = en(this.node(), e).tween, r = 0, o = i.length, a; r < o; ++r)
      if ((a = i[r]).name === t)
        return a.value;
    return null;
  }
  return this.each((n == null ? my : wy)(e, t, n));
}
function pu(t, n, e) {
  var i = t._id;
  return t.each(function() {
    var r = Un(this, i);
    (r.value || (r.value = {}))[n] = e.apply(this, arguments);
  }), function(r) {
    return en(r, i).value[n];
  };
}
function zf(t, n) {
  var e;
  return (typeof n == "number" ? At : n instanceof fn ? Xe : (e = fn(n)) ? (n = e, Xe) : La)(t, n);
}
function xy(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function My(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Cy(t, n, e) {
  var i, r;
  return function() {
    var o = this.getAttribute(t);
    return o === e ? null : o === i ? r : r = n(i = o, e);
  };
}
function Sy(t, n, e) {
  var i, r;
  return function() {
    var o = this.getAttributeNS(t.space, t.local);
    return o === e ? null : o === i ? r : r = n(i = o, e);
  };
}
function ky(t, n, e) {
  var i, r, o;
  return function() {
    var a, u = e(this);
    return u == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), a === u ? null : a === i && u === r ? o : o = n(i = a, r = u));
  };
}
function Ty(t, n, e) {
  var i, r, o;
  return function() {
    var a, u = e(this);
    return u == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), a === u ? null : a === i && u === r ? o : o = n(i = a, r = u));
  };
}
function Ay(t, n) {
  var e = oi(t), i = e === "transform" ? Ec : zf;
  return this.attrTween(t, typeof n == "function" ? (e.local ? Ty : ky)(e, i, pu(this, "attr." + t, n)) : n == null ? (e.local ? My : xy)(e) : (e.local ? Sy : Cy)(e, i, n));
}
function Ey(t, n) {
  function e() {
    var i = this, r = n.apply(i, arguments);
    return r && function(o) {
      i.setAttributeNS(t.space, t.local, r(o));
    };
  }
  return e._value = n, e;
}
function Ny(t, n) {
  function e() {
    var i = this, r = n.apply(i, arguments);
    return r && function(o) {
      i.setAttribute(t, r(o));
    };
  }
  return e._value = n, e;
}
function $y(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2)
    return (e = this.tween(e)) && e._value;
  if (n == null)
    return this.tween(e, null);
  if (typeof n != "function")
    throw new Error();
  var i = oi(t);
  return this.tween(e, (i.local ? Ey : Ny)(i, n));
}
function Ry(t, n) {
  return function() {
    hu(this, t).delay = +n.apply(this, arguments);
  };
}
function Py(t, n) {
  return n = +n, function() {
    hu(this, t).delay = n;
  };
}
function Oy(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Ry : Py)(n, t)) : en(this.node(), n).delay;
}
function Dy(t, n) {
  return function() {
    Un(this, t).duration = +n.apply(this, arguments);
  };
}
function zy(t, n) {
  return n = +n, function() {
    Un(this, t).duration = n;
  };
}
function Ly(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Dy : zy)(n, t)) : en(this.node(), n).duration;
}
function Iy(t, n) {
  if (typeof n != "function")
    throw new Error();
  return function() {
    Un(this, t).ease = n;
  };
}
function Fy(t) {
  var n = this._id;
  return arguments.length ? this.each(Iy(n, t)) : en(this.node(), n).ease;
}
function Uy(t) {
  typeof t != "function" && (t = au(t));
  for (var n = this._groups, e = n.length, i = new Array(e), r = 0; r < e; ++r)
    for (var o = n[r], a = o.length, u = i[r] = [], s, l = 0; l < a; ++l)
      (s = o[l]) && t.call(s, s.__data__, l, o) && u.push(s);
  return new Vt(i, this._parents, this._name, this._id);
}
function Yy(t) {
  if (t._id !== this._id)
    throw new Error();
  for (var n = this._groups, e = t._groups, i = n.length, r = e.length, o = Math.min(i, r), a = new Array(i), u = 0; u < o; ++u)
    for (var s = n[u], l = e[u], f = s.length, h = a[u] = new Array(f), c, p = 0; p < f; ++p)
      (c = s[p] || l[p]) && (h[p] = c);
  for (; u < i; ++u)
    a[u] = n[u];
  return new Vt(a, this._parents, this._name, this._id);
}
function Hy(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function By(t, n, e) {
  var i, r, o = Hy(n) ? hu : Un;
  return function() {
    var a = o(this, t), u = a.on;
    u !== i && (r = (i = u).copy()).on(n, e), a.on = r;
  };
}
function Xy(t, n) {
  var e = this._id;
  return arguments.length < 2 ? en(this.node(), e).on.on(t) : this.each(By(e, t, n));
}
function Wy(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition)
      if (+e !== t)
        return;
    n && n.removeChild(this);
  };
}
function qy() {
  return this.on("end.remove", Wy(this._id));
}
function Gy(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Xr(t));
  for (var i = this._groups, r = i.length, o = new Array(r), a = 0; a < r; ++a)
    for (var u = i[a], s = u.length, l = o[a] = new Array(s), f, h, c = 0; c < s; ++c)
      (f = u[c]) && (h = t.call(f, f.__data__, c, u)) && ("__data__" in f && (h.__data__ = f.__data__), l[c] = h, Wr(l[c], n, e, c, l, en(f, e)));
  return new Vt(o, this._parents, n, e);
}
function Vy(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = lu(t));
  for (var i = this._groups, r = i.length, o = [], a = [], u = 0; u < r; ++u)
    for (var s = i[u], l = s.length, f, h = 0; h < l; ++h)
      if (f = s[h]) {
        for (var c = t.call(f, f.__data__, h, s), p, g = en(f, e), d = 0, v = c.length; d < v; ++d)
          (p = c[d]) && Wr(p, n, e, d, c, g);
        o.push(c), a.push(f);
      }
  return new Vt(o, a, n, e);
}
var Ky = Fn.prototype.constructor;
function Zy() {
  return new Ky(this._groups, this._parents);
}
function Jy(t, n) {
  var e, i, r;
  return function() {
    var o = de(this).getComputedStyle(this, null), a = o.getPropertyValue(t), u = (this.style.removeProperty(t), o.getPropertyValue(t));
    return a === u ? null : a === e && u === i ? r : r = n(e = a, i = u);
  };
}
function Qy(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function jy(t, n, e) {
  var i, r;
  return function() {
    var o = de(this).getComputedStyle(this, null).getPropertyValue(t);
    return o === e ? null : o === i ? r : r = n(i = o, e);
  };
}
function t2(t, n, e) {
  var i, r, o;
  return function() {
    var a = de(this).getComputedStyle(this, null), u = a.getPropertyValue(t), s = e(this);
    return s == null && (s = (this.style.removeProperty(t), a.getPropertyValue(t))), u === s ? null : u === i && s === r ? o : o = n(i = u, r = s);
  };
}
function n2(t, n, e) {
  var i = (t += "") == "transform" ? Ac : zf;
  return n == null ? this.styleTween(t, Jy(t, i)).on("end.style." + t, Qy(t)) : this.styleTween(t, typeof n == "function" ? t2(t, i, pu(this, "style." + t, n)) : jy(t, i, n), e);
}
function e2(t, n, e) {
  function i() {
    var r = this, o = n.apply(r, arguments);
    return o && function(a) {
      r.style.setProperty(t, o(a), e);
    };
  }
  return i._value = n, i;
}
function i2(t, n, e) {
  var i = "style." + (t += "");
  if (arguments.length < 2)
    return (i = this.tween(i)) && i._value;
  if (n == null)
    return this.tween(i, null);
  if (typeof n != "function")
    throw new Error();
  return this.tween(i, e2(t, n, e == null ? "" : e));
}
function r2(t) {
  return function() {
    this.textContent = t;
  };
}
function o2(t) {
  return function() {
    var n = t(this);
    this.textContent = n == null ? "" : n;
  };
}
function a2(t) {
  return this.tween("text", typeof t == "function" ? o2(pu(this, "text", t)) : r2(t == null ? "" : t + ""));
}
function u2() {
  for (var t = this._name, n = this._id, e = If(), i = this._groups, r = i.length, o = 0; o < r; ++o)
    for (var a = i[o], u = a.length, s, l = 0; l < u; ++l)
      if (s = a[l]) {
        var f = en(s, n);
        Wr(s, t, e, l, a, {
          time: f.time + f.delay + f.duration,
          delay: 0,
          duration: f.duration,
          ease: f.ease
        });
      }
  return new Vt(i, this._parents, t, e);
}
var s2 = 0;
function Vt(t, n, e, i) {
  this._groups = t, this._parents = n, this._name = e, this._id = i;
}
function Lf(t) {
  return Fn().transition(t);
}
function If() {
  return ++s2;
}
var Xn = Fn.prototype;
Vt.prototype = Lf.prototype = {
  constructor: Vt,
  select: Gy,
  selectAll: Vy,
  filter: Uy,
  merge: Yy,
  selection: Zy,
  transition: u2,
  call: Xn.call,
  nodes: Xn.nodes,
  node: Xn.node,
  size: Xn.size,
  empty: Xn.empty,
  each: Xn.each,
  on: Xy,
  attr: Ay,
  attrTween: $y,
  style: n2,
  styleTween: i2,
  text: a2,
  remove: qy,
  tween: by,
  delay: Oy,
  duration: Ly,
  ease: Fy
};
var Go = {
  time: null,
  delay: 0,
  duration: 250,
  ease: $o
};
function l2(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      return Go.time = ge(), Go;
  return e;
}
function c2(t) {
  var n, e;
  t instanceof Vt ? (n = t._id, t = t._name) : (n = If(), (e = Go).time = ge(), t = t == null ? null : t + "");
  for (var i = this._groups, r = i.length, o = 0; o < r; ++o)
    for (var a = i[o], u = a.length, s, l = 0; l < u; ++l)
      (s = a[l]) && Wr(s, t, n, l, a, e || l2(s, n));
  return new Vt(i, this._parents, t, n);
}
Fn.prototype.interrupt = _y;
Fn.prototype.transition = c2;
var f2 = [null];
function h2(t, n) {
  var e = t.__transition, i, r;
  if (e) {
    n = n == null ? null : n + "";
    for (r in e)
      if ((i = e[r]).state > Df && i.name === n)
        return new Vt([[t]], f2, n, +r);
  }
  return null;
}
var po = Array.prototype.slice;
function As(t) {
  return t;
}
var Ni = 1, $i = 2, Vo = 3, Pe = 4, Es = 1e-6;
function p2(t, n, e) {
  var i = t(e);
  return "translate(" + (isFinite(i) ? i : n(e)) + ",0)";
}
function g2(t, n, e) {
  var i = t(e);
  return "translate(0," + (isFinite(i) ? i : n(e)) + ")";
}
function d2(t) {
  var n = t.bandwidth() / 2;
  return t.round() && (n = Math.round(n)), function(e) {
    return t(e) + n;
  };
}
function v2() {
  return !this.__axis;
}
function qr(t, n) {
  var e = [], i = null, r = null, o = 6, a = 6, u = 3;
  function s(l) {
    var f = i == null ? n.ticks ? n.ticks.apply(n, e) : n.domain() : i, h = r == null ? n.tickFormat ? n.tickFormat.apply(n, e) : As : r, c = Math.max(o, 0) + u, p = t === Ni || t === Vo ? p2 : g2, g = n.range(), d = g[0] + 0.5, v = g[g.length - 1] + 0.5, y = (n.bandwidth ? d2 : As)(n.copy()), m = l.selection ? l.selection() : l, _ = m.selectAll(".domain").data([null]), M = m.selectAll(".tick").data(f, n).order(), b = M.exit(), x = M.enter().append("g").attr("class", "tick"), C = M.select("line"), k = M.select("text"), T = t === Ni || t === Pe ? -1 : 1, $, E = t === Pe || t === $i ? ($ = "x", "y") : ($ = "y", "x");
    _ = _.merge(_.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "#000")), M = M.merge(x), C = C.merge(x.append("line").attr("stroke", "#000").attr($ + "2", T * o).attr(E + "1", 0.5).attr(E + "2", 0.5)), k = k.merge(x.append("text").attr("fill", "#000").attr($, T * c).attr(E, 0.5).attr("dy", t === Ni ? "0em" : t === Vo ? "0.71em" : "0.32em")), l !== m && (_ = _.transition(l), M = M.transition(l), C = C.transition(l), k = k.transition(l), b = b.transition(l).attr("opacity", Es).attr("transform", function(A) {
      return p(y, this.parentNode.__axis || y, A);
    }), x.attr("opacity", Es).attr("transform", function(A) {
      return p(this.parentNode.__axis || y, y, A);
    })), b.remove(), _.attr("d", t === Pe || t == $i ? "M" + T * a + "," + d + "H0.5V" + v + "H" + T * a : "M" + d + "," + T * a + "V0.5H" + v + "V" + T * a), M.attr("opacity", 1).attr("transform", function(A) {
      return p(y, y, A);
    }), C.attr($ + "2", T * o), k.attr($, T * c).text(h), m.filter(v2).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === $i ? "start" : t === Pe ? "end" : "middle"), m.each(function() {
      this.__axis = y;
    });
  }
  return s.scale = function(l) {
    return arguments.length ? (n = l, s) : n;
  }, s.ticks = function() {
    return e = po.call(arguments), s;
  }, s.tickArguments = function(l) {
    return arguments.length ? (e = l == null ? [] : po.call(l), s) : e.slice();
  }, s.tickValues = function(l) {
    return arguments.length ? (i = l == null ? null : po.call(l), s) : i && i.slice();
  }, s.tickFormat = function(l) {
    return arguments.length ? (r = l, s) : r;
  }, s.tickSize = function(l) {
    return arguments.length ? (o = a = +l, s) : o;
  }, s.tickSizeInner = function(l) {
    return arguments.length ? (o = +l, s) : o;
  }, s.tickSizeOuter = function(l) {
    return arguments.length ? (a = +l, s) : a;
  }, s.tickPadding = function(l) {
    return arguments.length ? (u = +l, s) : u;
  }, s;
}
function y2(t) {
  return qr(Ni, t);
}
function _2(t) {
  return qr($i, t);
}
function m2(t) {
  return qr(Vo, t);
}
function w2(t) {
  return qr(Pe, t);
}
function b2(t, n) {
  return t.parent === n.parent ? 1 : 2;
}
function x2(t) {
  return t.reduce(M2, 0) / t.length;
}
function M2(t, n) {
  return t + n.x;
}
function C2(t) {
  return 1 + t.reduce(S2, 0);
}
function S2(t, n) {
  return Math.max(t, n.y);
}
function k2(t) {
  for (var n; n = t.children; )
    t = n[0];
  return t;
}
function T2(t) {
  for (var n; n = t.children; )
    t = n[n.length - 1];
  return t;
}
function A2() {
  var t = b2, n = 1, e = 1, i = !1;
  function r(o) {
    var a, u = 0;
    o.eachAfter(function(c) {
      var p = c.children;
      p ? (c.x = x2(p), c.y = C2(p)) : (c.x = a ? u += t(c, a) : 0, c.y = 0, a = c);
    });
    var s = k2(o), l = T2(o), f = s.x - t(s, l) / 2, h = l.x + t(l, s) / 2;
    return o.eachAfter(i ? function(c) {
      c.x = (c.x - o.x) * n, c.y = (o.y - c.y) * e;
    } : function(c) {
      c.x = (c.x - f) / (h - f) * n, c.y = (1 - (o.y ? c.y / o.y : 1)) * e;
    });
  }
  return r.separation = function(o) {
    return arguments.length ? (t = o, r) : t;
  }, r.size = function(o) {
    return arguments.length ? (i = !1, n = +o[0], e = +o[1], r) : i ? null : [n, e];
  }, r.nodeSize = function(o) {
    return arguments.length ? (i = !0, n = +o[0], e = +o[1], r) : i ? [n, e] : null;
  }, r;
}
function E2(t) {
  var n = this, e, i = [n], r, o, a;
  do
    for (e = i.reverse(), i = []; n = e.pop(); )
      if (t(n), r = n.children, r)
        for (o = 0, a = r.length; o < a; ++o)
          i.push(r[o]);
  while (i.length);
  return this;
}
function N2(t) {
  for (var n = this, e = [n], i, r; n = e.pop(); )
    if (t(n), i = n.children, i)
      for (r = i.length - 1; r >= 0; --r)
        e.push(i[r]);
  return this;
}
function $2(t) {
  for (var n = this, e = [n], i = [], r, o, a; n = e.pop(); )
    if (i.push(n), r = n.children, r)
      for (o = 0, a = r.length; o < a; ++o)
        e.push(r[o]);
  for (; n = i.pop(); )
    t(n);
  return this;
}
function R2(t) {
  return this.eachAfter(function(n) {
    for (var e = +t(n.data) || 0, i = n.children, r = i && i.length; --r >= 0; )
      e += i[r].value;
    n.value = e;
  });
}
function P2(t) {
  return this.eachBefore(function(n) {
    n.children && n.children.sort(t);
  });
}
function O2(t) {
  for (var n = this, e = D2(n, t), i = [n]; n !== e; )
    n = n.parent, i.push(n);
  for (var r = i.length; t !== e; )
    i.splice(r, 0, t), t = t.parent;
  return i;
}
function D2(t, n) {
  if (t === n)
    return t;
  var e = t.ancestors(), i = n.ancestors(), r = null;
  for (t = e.pop(), n = i.pop(); t === n; )
    r = t, t = e.pop(), n = i.pop();
  return r;
}
function z2() {
  for (var t = this, n = [t]; t = t.parent; )
    n.push(t);
  return n;
}
function L2() {
  var t = [];
  return this.each(function(n) {
    t.push(n);
  }), t;
}
function I2() {
  var t = [];
  return this.eachBefore(function(n) {
    n.children || t.push(n);
  }), t;
}
function F2() {
  var t = this, n = [];
  return t.each(function(e) {
    e !== t && n.push({ source: e.parent, target: e });
  }), n;
}
function gu(t, n) {
  var e = new le(t), i = +t.value && (e.value = t.value), r, o = [e], a, u, s, l;
  for (n == null && (n = Y2); r = o.pop(); )
    if (i && (r.value = +r.data.value), (u = n(r.data)) && (l = u.length))
      for (r.children = new Array(l), s = l - 1; s >= 0; --s)
        o.push(a = r.children[s] = new le(u[s])), a.parent = r, a.depth = r.depth + 1;
  return e.eachBefore(Ff);
}
function U2() {
  return gu(this).eachBefore(H2);
}
function Y2(t) {
  return t.children;
}
function H2(t) {
  t.data = t.data.data;
}
function Ff(t) {
  var n = 0;
  do
    t.height = n;
  while ((t = t.parent) && t.height < ++n);
}
function le(t) {
  this.data = t, this.depth = this.height = 0, this.parent = null;
}
le.prototype = gu.prototype = {
  constructor: le,
  each: E2,
  eachAfter: $2,
  eachBefore: N2,
  sum: R2,
  sort: P2,
  path: O2,
  ancestors: z2,
  descendants: L2,
  leaves: I2,
  links: F2,
  copy: U2
};
function B2(t) {
  this._ = t, this.next = null;
}
function X2(t) {
  for (var n, e = (t = t.slice()).length, i = null, r = i; e; ) {
    var o = new B2(t[e - 1]);
    r ? r = r.next = o : r = i = o, t[n] = t[--e];
  }
  return {
    head: i,
    tail: r
  };
}
function Uf(t) {
  return Yf(X2(t), []);
}
function W2(t, n) {
  var e = n.x - t.x, i = n.y - t.y, r = t.r - n.r;
  return r * r + 1e-6 > e * e + i * i;
}
function Yf(t, n) {
  var e, i = null, r = t.head, o, a;
  switch (n.length) {
    case 1:
      e = q2(n[0]);
      break;
    case 2:
      e = G2(n[0], n[1]);
      break;
    case 3:
      e = V2(n[0], n[1], n[2]);
      break;
  }
  for (; r; )
    a = r._, o = r.next, !e || !W2(e, a) ? (i ? (t.tail = i, i.next = null) : t.head = t.tail = null, n.push(a), e = Yf(t, n), n.pop(), t.head ? (r.next = t.head, t.head = r) : (r.next = null, t.head = t.tail = r), i = t.tail, i.next = o) : i = r, r = o;
  return t.tail = i, e;
}
function q2(t) {
  return {
    x: t.x,
    y: t.y,
    r: t.r
  };
}
function G2(t, n) {
  var e = t.x, i = t.y, r = t.r, o = n.x, a = n.y, u = n.r, s = o - e, l = a - i, f = u - r, h = Math.sqrt(s * s + l * l);
  return {
    x: (e + o + s / h * f) / 2,
    y: (i + a + l / h * f) / 2,
    r: (h + r + u) / 2
  };
}
function V2(t, n, e) {
  var i = t.x, r = t.y, o = t.r, a = n.x, u = n.y, s = n.r, l = e.x, f = e.y, h = e.r, c = 2 * (i - a), p = 2 * (r - u), g = 2 * (s - o), d = i * i + r * r - o * o - a * a - u * u + s * s, v = 2 * (i - l), y = 2 * (r - f), m = 2 * (h - o), _ = i * i + r * r - o * o - l * l - f * f + h * h, M = v * p - c * y, b = (p * _ - y * d) / M - i, x = (y * g - p * m) / M, C = (v * d - c * _) / M - r, k = (c * m - v * g) / M, T = x * x + k * k - 1, $ = 2 * (b * x + C * k + o), E = b * b + C * C - o * o, A = (-$ - Math.sqrt($ * $ - 4 * T * E)) / (2 * T);
  return {
    x: b + x * A + i,
    y: C + k * A + r,
    r: A
  };
}
function Ns(t, n, e) {
  var i = t.x, r = t.y, o = n.r + e.r, a = t.r + e.r, u = n.x - i, s = n.y - r, l = u * u + s * s;
  if (l) {
    var f = 0.5 + ((a *= a) - (o *= o)) / (2 * l), h = Math.sqrt(Math.max(0, 2 * o * (a + l) - (a -= l) * a - o * o)) / (2 * l);
    e.x = i + f * u + h * s, e.y = r + f * s - h * u;
  } else
    e.x = i + a, e.y = r;
}
function go(t, n) {
  var e = n.x - t.x, i = n.y - t.y, r = t.r + n.r;
  return r * r > e * e + i * i;
}
function $s(t, n, e) {
  var i = t.x - n, r = t.y - e;
  return i * i + r * r;
}
function yi(t) {
  this._ = t, this.next = null, this.previous = null;
}
function Hf(t) {
  if (!(r = t.length))
    return 0;
  var n, e, i, r;
  if (n = t[0], n.x = 0, n.y = 0, !(r > 1))
    return n.r;
  if (e = t[1], n.x = -e.r, e.x = n.r, e.y = 0, !(r > 2))
    return n.r + e.r;
  Ns(e, n, i = t[2]);
  var o = n.r * n.r, a = e.r * e.r, u = i.r * i.r, s = o + a + u, l = o * n.x + a * e.x + u * i.x, f = o * n.y + a * e.y + u * i.y, h, c, p, g, d, v, y;
  n = new yi(n), e = new yi(e), i = new yi(i), n.next = i.previous = e, e.next = n.previous = i, i.next = e.previous = n;
  t:
    for (p = 3; p < r; ++p) {
      if (Ns(n._, e._, i = t[p]), i = new yi(i), (d = n.previous) === (g = e.next)) {
        if (go(g._, i._)) {
          n = e, e = g, --p;
          continue t;
        }
      } else {
        v = g._.r, y = d._.r;
        do
          if (v <= y) {
            if (go(g._, i._)) {
              e = g, n.next = e, e.previous = n, --p;
              continue t;
            }
            g = g.next, v += g._.r;
          } else {
            if (go(d._, i._)) {
              n = d, n.next = e, e.previous = n, --p;
              continue t;
            }
            d = d.previous, y += d._.r;
          }
        while (g !== d.next);
      }
      for (i.previous = n, i.next = e, n.next = e.previous = e = i, s += u = i._.r * i._.r, l += u * i._.x, f += u * i._.y, o = $s(n._, h = l / s, c = f / s); (i = i.next) !== e; )
        (u = $s(i._, h, c)) < o && (n = i, o = u);
      e = n.next;
    }
  for (n = [e._], i = e; (i = i.next) !== e; )
    n.push(i._);
  for (i = Uf(n), p = 0; p < r; ++p)
    n = t[p], n.x -= i.x, n.y -= i.y;
  return i.r;
}
function K2(t) {
  return Hf(t), t;
}
function Z2(t) {
  return t == null ? null : tr(t);
}
function tr(t) {
  if (typeof t != "function")
    throw new Error();
  return t;
}
function xn() {
  return 0;
}
function Kn(t) {
  return function() {
    return t;
  };
}
function J2(t) {
  return Math.sqrt(t.value);
}
function Q2() {
  var t = null, n = 1, e = 1, i = xn;
  function r(o) {
    return o.x = n / 2, o.y = e / 2, t ? o.eachBefore(Rs(t)).eachAfter(vo(i, 0.5)).eachBefore(Ps(1)) : o.eachBefore(Rs(J2)).eachAfter(vo(xn, 1)).eachAfter(vo(i, o.r / Math.min(n, e))).eachBefore(Ps(Math.min(n, e) / (2 * o.r))), o;
  }
  return r.radius = function(o) {
    return arguments.length ? (t = Z2(o), r) : t;
  }, r.size = function(o) {
    return arguments.length ? (n = +o[0], e = +o[1], r) : [n, e];
  }, r.padding = function(o) {
    return arguments.length ? (i = typeof o == "function" ? o : Kn(+o), r) : i;
  }, r;
}
function Rs(t) {
  return function(n) {
    n.children || (n.r = Math.max(0, +t(n) || 0));
  };
}
function vo(t, n) {
  return function(e) {
    if (i = e.children) {
      var i, r, o = i.length, a = t(e) * n || 0, u;
      if (a)
        for (r = 0; r < o; ++r)
          i[r].r += a;
      if (u = Hf(i), a)
        for (r = 0; r < o; ++r)
          i[r].r -= a;
      e.r = u + a;
    }
  };
}
function Ps(t) {
  return function(n) {
    var e = n.parent;
    n.r *= t, e && (n.x = e.x + t * n.x, n.y = e.y + t * n.y);
  };
}
function Bf(t) {
  t.x0 = Math.round(t.x0), t.y0 = Math.round(t.y0), t.x1 = Math.round(t.x1), t.y1 = Math.round(t.y1);
}
function ai(t, n, e, i, r) {
  for (var o = t.children, a, u = -1, s = o.length, l = t.value && (i - n) / t.value; ++u < s; )
    a = o[u], a.y0 = e, a.y1 = r, a.x0 = n, a.x1 = n += a.value * l;
}
function j2() {
  var t = 1, n = 1, e = 0, i = !1;
  function r(a) {
    var u = a.height + 1;
    return a.x0 = a.y0 = e, a.x1 = t, a.y1 = n / u, a.eachBefore(o(n, u)), i && a.eachBefore(Bf), a;
  }
  function o(a, u) {
    return function(s) {
      s.children && ai(s, s.x0, a * (s.depth + 1) / u, s.x1, a * (s.depth + 2) / u);
      var l = s.x0, f = s.y0, h = s.x1 - e, c = s.y1 - e;
      h < l && (l = h = (l + h) / 2), c < f && (f = c = (f + c) / 2), s.x0 = l, s.y0 = f, s.x1 = h, s.y1 = c;
    };
  }
  return r.round = function(a) {
    return arguments.length ? (i = !!a, r) : i;
  }, r.size = function(a) {
    return arguments.length ? (t = +a[0], n = +a[1], r) : [t, n];
  }, r.padding = function(a) {
    return arguments.length ? (e = +a, r) : e;
  }, r;
}
var Os = "$", t_ = { depth: -1 }, Ds = {};
function n_(t) {
  return t.id;
}
function e_(t) {
  return t.parentId;
}
function i_() {
  var t = n_, n = e_;
  function e(i) {
    var r, o, a = i.length, u, s, l, f = new Array(a), h, c, p = {};
    for (o = 0; o < a; ++o)
      r = i[o], l = f[o] = new le(r), (h = t(r, o, i)) != null && (h += "") && (c = Os + (l.id = h), p[c] = c in p ? Ds : l);
    for (o = 0; o < a; ++o)
      if (l = f[o], h = n(i[o], o, i), h == null || !(h += "")) {
        if (u)
          throw new Error("multiple roots");
        u = l;
      } else {
        if (s = p[Os + h], !s)
          throw new Error("missing: " + h);
        if (s === Ds)
          throw new Error("ambiguous: " + h);
        s.children ? s.children.push(l) : s.children = [l], l.parent = s;
      }
    if (!u)
      throw new Error("no root");
    if (u.parent = t_, u.eachBefore(function(g) {
      g.depth = g.parent.depth + 1, --a;
    }).eachBefore(Ff), u.parent = null, a > 0)
      throw new Error("cycle");
    return u;
  }
  return e.id = function(i) {
    return arguments.length ? (t = tr(i), e) : t;
  }, e.parentId = function(i) {
    return arguments.length ? (n = tr(i), e) : n;
  }, e;
}
function r_(t, n) {
  return t.parent === n.parent ? 1 : 2;
}
function yo(t) {
  var n = t.children;
  return n ? n[0] : t.t;
}
function _o(t) {
  var n = t.children;
  return n ? n[n.length - 1] : t.t;
}
function o_(t, n, e) {
  var i = e / (n.i - t.i);
  n.c -= i, n.s += e, t.c += i, n.z += e, n.m += e;
}
function a_(t) {
  for (var n = 0, e = 0, i = t.children, r = i.length, o; --r >= 0; )
    o = i[r], o.z += n, o.m += n, n += o.s + (e += o.c);
}
function u_(t, n, e) {
  return t.a.parent === n.parent ? t.a : e;
}
function Ri(t, n) {
  this._ = t, this.parent = null, this.children = null, this.A = null, this.a = this, this.z = 0, this.m = 0, this.c = 0, this.s = 0, this.t = null, this.i = n;
}
Ri.prototype = Object.create(le.prototype);
function s_(t) {
  for (var n = new Ri(t, 0), e, i = [n], r, o, a, u; e = i.pop(); )
    if (o = e._.children)
      for (e.children = new Array(u = o.length), a = u - 1; a >= 0; --a)
        i.push(r = e.children[a] = new Ri(o[a], a)), r.parent = e;
  return (n.parent = new Ri(null, 0)).children = [n], n;
}
function l_() {
  var t = r_, n = 1, e = 1, i = null;
  function r(l) {
    var f = s_(l);
    if (f.eachAfter(o), f.parent.m = -f.z, f.eachBefore(a), i)
      l.eachBefore(s);
    else {
      var h = l, c = l, p = l;
      l.eachBefore(function(m) {
        m.x < h.x && (h = m), m.x > c.x && (c = m), m.depth > p.depth && (p = m);
      });
      var g = h === c ? 1 : t(h, c) / 2, d = g - h.x, v = n / (c.x + g + d), y = e / (p.depth || 1);
      l.eachBefore(function(m) {
        m.x = (m.x + d) * v, m.y = m.depth * y;
      });
    }
    return l;
  }
  function o(l) {
    var f = l.children, h = l.parent.children, c = l.i ? h[l.i - 1] : null;
    if (f) {
      a_(l);
      var p = (f[0].z + f[f.length - 1].z) / 2;
      c ? (l.z = c.z + t(l._, c._), l.m = l.z - p) : l.z = p;
    } else
      c && (l.z = c.z + t(l._, c._));
    l.parent.A = u(l, c, l.parent.A || h[0]);
  }
  function a(l) {
    l._.x = l.z + l.parent.m, l.m += l.parent.m;
  }
  function u(l, f, h) {
    if (f) {
      for (var c = l, p = l, g = f, d = c.parent.children[0], v = c.m, y = p.m, m = g.m, _ = d.m, M; g = _o(g), c = yo(c), g && c; )
        d = yo(d), p = _o(p), p.a = l, M = g.z + m - c.z - v + t(g._, c._), M > 0 && (o_(u_(g, l, h), l, M), v += M, y += M), m += g.m, v += c.m, _ += d.m, y += p.m;
      g && !_o(p) && (p.t = g, p.m += m - y), c && !yo(d) && (d.t = c, d.m += v - _, h = l);
    }
    return h;
  }
  function s(l) {
    l.x *= n, l.y = l.depth * e;
  }
  return r.separation = function(l) {
    return arguments.length ? (t = l, r) : t;
  }, r.size = function(l) {
    return arguments.length ? (i = !1, n = +l[0], e = +l[1], r) : i ? null : [n, e];
  }, r.nodeSize = function(l) {
    return arguments.length ? (i = !0, n = +l[0], e = +l[1], r) : i ? [n, e] : null;
  }, r;
}
function Gr(t, n, e, i, r) {
  for (var o = t.children, a, u = -1, s = o.length, l = t.value && (r - e) / t.value; ++u < s; )
    a = o[u], a.x0 = n, a.x1 = i, a.y0 = e, a.y1 = e += a.value * l;
}
var Xf = (1 + Math.sqrt(5)) / 2;
function Wf(t, n, e, i, r, o) {
  for (var a = [], u = n.children, s, l, f = 0, h, c = u.length, p, g, d = n.value, v, y, m, _, M, b, x; f < c; ) {
    for (p = r - e, g = o - i, y = m = v = u[f].value, b = Math.max(g / p, p / g) / (d * t), x = v * v * b, M = Math.max(m / x, x / y), h = f + 1; h < c; ++h) {
      if (v += l = u[h].value, l < y && (y = l), l > m && (m = l), x = v * v * b, _ = Math.max(m / x, x / y), _ > M) {
        v -= l;
        break;
      }
      M = _;
    }
    a.push(s = { value: v, dice: p < g, children: u.slice(f, h) }), s.dice ? ai(s, e, i, r, d ? i += g * v / d : o) : Gr(s, e, i, d ? e += p * v / d : r, o), d -= v, f = h;
  }
  return a;
}
const qf = function t(n) {
  function e(i, r, o, a, u) {
    Wf(n, i, r, o, a, u);
  }
  return e.ratio = function(i) {
    return t((i = +i) > 1 ? i : 1);
  }, e;
}(Xf);
function c_() {
  var t = qf, n = !1, e = 1, i = 1, r = [0], o = xn, a = xn, u = xn, s = xn, l = xn;
  function f(c) {
    return c.x0 = c.y0 = 0, c.x1 = e, c.y1 = i, c.eachBefore(h), r = [0], n && c.eachBefore(Bf), c;
  }
  function h(c) {
    var p = r[c.depth], g = c.x0 + p, d = c.y0 + p, v = c.x1 - p, y = c.y1 - p;
    v < g && (g = v = (g + v) / 2), y < d && (d = y = (d + y) / 2), c.x0 = g, c.y0 = d, c.x1 = v, c.y1 = y, c.children && (p = r[c.depth + 1] = o(c) / 2, g += l(c) - p, d += a(c) - p, v -= u(c) - p, y -= s(c) - p, v < g && (g = v = (g + v) / 2), y < d && (d = y = (d + y) / 2), t(c, g, d, v, y));
  }
  return f.round = function(c) {
    return arguments.length ? (n = !!c, f) : n;
  }, f.size = function(c) {
    return arguments.length ? (e = +c[0], i = +c[1], f) : [e, i];
  }, f.tile = function(c) {
    return arguments.length ? (t = tr(c), f) : t;
  }, f.padding = function(c) {
    return arguments.length ? f.paddingInner(c).paddingOuter(c) : f.paddingInner();
  }, f.paddingInner = function(c) {
    return arguments.length ? (o = typeof c == "function" ? c : Kn(+c), f) : o;
  }, f.paddingOuter = function(c) {
    return arguments.length ? f.paddingTop(c).paddingRight(c).paddingBottom(c).paddingLeft(c) : f.paddingTop();
  }, f.paddingTop = function(c) {
    return arguments.length ? (a = typeof c == "function" ? c : Kn(+c), f) : a;
  }, f.paddingRight = function(c) {
    return arguments.length ? (u = typeof c == "function" ? c : Kn(+c), f) : u;
  }, f.paddingBottom = function(c) {
    return arguments.length ? (s = typeof c == "function" ? c : Kn(+c), f) : s;
  }, f.paddingLeft = function(c) {
    return arguments.length ? (l = typeof c == "function" ? c : Kn(+c), f) : l;
  }, f;
}
function f_(t, n, e, i, r) {
  var o = t.children, a, u = o.length, s, l = new Array(u + 1);
  for (l[0] = s = a = 0; a < u; ++a)
    l[a + 1] = s += o[a].value;
  f(0, u, t.value, n, e, i, r);
  function f(h, c, p, g, d, v, y) {
    if (h >= c - 1) {
      var m = o[h];
      m.x0 = g, m.y0 = d, m.x1 = v, m.y1 = y;
      return;
    }
    for (var _ = l[h], M = p / 2 + _, b = h + 1, x = c - 1; b < x; ) {
      var C = b + x >>> 1;
      l[C] < M ? b = C + 1 : x = C;
    }
    var k = l[b] - _, T = p - k;
    if (y - d > v - g) {
      var $ = (d * T + y * k) / p;
      f(h, b, k, g, d, v, $), f(b, c, T, g, $, v, y);
    } else {
      var E = (g * T + v * k) / p;
      f(h, b, k, g, d, E, y), f(b, c, T, E, d, v, y);
    }
  }
}
function h_(t, n, e, i, r) {
  (t.depth & 1 ? Gr : ai)(t, n, e, i, r);
}
const p_ = function t(n) {
  function e(i, r, o, a, u) {
    if ((s = i._squarify) && s.ratio === n)
      for (var s, l, f, h, c = -1, p, g = s.length, d = i.value; ++c < g; ) {
        for (l = s[c], f = l.children, h = l.value = 0, p = f.length; h < p; ++h)
          l.value += f[h].value;
        l.dice ? ai(l, r, o, a, o += (u - o) * l.value / d) : Gr(l, r, o, r += (a - r) * l.value / d, u), d -= l.value;
      }
    else
      i._squarify = s = Wf(n, i, r, o, a, u), s.ratio = n;
  }
  return e.ratio = function(i) {
    return t((i = +i) > 1 ? i : 1);
  }, e;
}(Xf);
function g_(t, n) {
  var e;
  t == null && (t = 0), n == null && (n = 0);
  function i() {
    var r, o = e.length, a, u = 0, s = 0;
    for (r = 0; r < o; ++r)
      a = e[r], u += a.x, s += a.y;
    for (u = u / o - t, s = s / o - n, r = 0; r < o; ++r)
      a = e[r], a.x -= u, a.y -= s;
  }
  return i.initialize = function(r) {
    e = r;
  }, i.x = function(r) {
    return arguments.length ? (t = +r, i) : t;
  }, i.y = function(r) {
    return arguments.length ? (n = +r, i) : n;
  }, i;
}
function xt(t) {
  return function() {
    return t;
  };
}
function an() {
  return (Math.random() - 0.5) * 1e-6;
}
function d_(t) {
  return t.x + t.vx;
}
function v_(t) {
  return t.y + t.vy;
}
function y_(t) {
  var n, e, i = 1, r = 1;
  typeof t != "function" && (t = xt(t == null ? 1 : +t));
  function o() {
    for (var u, s = n.length, l, f, h, c, p, g, d = 0; d < r; ++d)
      for (l = kr(n, d_, v_).visitAfter(a), u = 0; u < s; ++u)
        f = n[u], p = e[u], g = p * p, h = f.x + f.vx, c = f.y + f.vy, l.visit(v);
    function v(y, m, _, M, b) {
      var x = y.data, C = y.r, k = p + C;
      if (x) {
        if (x.index > u) {
          var T = h - x.x - x.vx, $ = c - x.y - x.vy, E = T * T + $ * $;
          E < k * k && (T === 0 && (T = an(), E += T * T), $ === 0 && ($ = an(), E += $ * $), E = (k - (E = Math.sqrt(E))) / E * i, f.vx += (T *= E) * (k = (C *= C) / (g + C)), f.vy += ($ *= E) * k, x.vx -= T * (k = 1 - k), x.vy -= $ * k);
        }
        return;
      }
      return m > h + k || M < h - k || _ > c + k || b < c - k;
    }
  }
  function a(u) {
    if (u.data)
      return u.r = e[u.data.index];
    for (var s = u.r = 0; s < 4; ++s)
      u[s] && u[s].r > u.r && (u.r = u[s].r);
  }
  return o.initialize = function(u) {
    var s, l = (n = u).length;
    for (e = new Array(l), s = 0; s < l; ++s)
      e[s] = +t(n[s], s, n);
  }, o.iterations = function(u) {
    return arguments.length ? (r = +u, o) : r;
  }, o.strength = function(u) {
    return arguments.length ? (i = +u, o) : i;
  }, o.radius = function(u) {
    return arguments.length ? (t = typeof u == "function" ? u : xt(+u), o) : t;
  }, o;
}
function __(t, n) {
  return n;
}
function m_(t) {
  var n = __, e = f, i, r = xt(30), o, a, u, s, l = 1;
  t == null && (t = []);
  function f(d) {
    return 1 / Math.min(u[d.source.index], u[d.target.index]);
  }
  function h(d) {
    for (var v = 0, y = t.length; v < l; ++v)
      for (var m = 0, _, M, b, x, C, k, T; m < y; ++m)
        _ = t[m], M = _.source, b = _.target, x = b.x + b.vx - M.x - M.vx || an(), C = b.y + b.vy - M.y - M.vy || an(), k = Math.sqrt(x * x + C * C), k = (k - o[m]) / k * d * i[m], x *= k, C *= k, b.vx -= x * (T = s[m]), b.vy -= C * T, M.vx += x * (T = 1 - T), M.vy += C * T;
  }
  function c() {
    if (!!a) {
      var d, v = a.length, y = t.length, m = Gt(a, n), _;
      for (d = 0, u = new Array(v); d < v; ++d)
        u[d] = 0;
      for (d = 0; d < y; ++d)
        _ = t[d], _.index = d, typeof _.source != "object" && (_.source = m.get(_.source)), typeof _.target != "object" && (_.target = m.get(_.target)), ++u[_.source.index], ++u[_.target.index];
      for (d = 0, s = new Array(y); d < y; ++d)
        _ = t[d], s[d] = u[_.source.index] / (u[_.source.index] + u[_.target.index]);
      i = new Array(y), p(), o = new Array(y), g();
    }
  }
  function p() {
    if (!!a)
      for (var d = 0, v = t.length; d < v; ++d)
        i[d] = +e(t[d], d, t);
  }
  function g() {
    if (!!a)
      for (var d = 0, v = t.length; d < v; ++d)
        o[d] = +r(t[d], d, t);
  }
  return h.initialize = function(d) {
    a = d, c();
  }, h.links = function(d) {
    return arguments.length ? (t = d, c(), h) : t;
  }, h.id = function(d) {
    return arguments.length ? (n = d, h) : n;
  }, h.iterations = function(d) {
    return arguments.length ? (l = +d, h) : l;
  }, h.strength = function(d) {
    return arguments.length ? (e = typeof d == "function" ? d : xt(+d), p(), h) : e;
  }, h.distance = function(d) {
    return arguments.length ? (r = typeof d == "function" ? d : xt(+d), g(), h) : r;
  }, h;
}
function w_(t) {
  return t.x;
}
function b_(t) {
  return t.y;
}
var x_ = 10, M_ = Math.PI * (3 - Math.sqrt(5));
function C_(t) {
  var n, e = 1, i = 1e-3, r = 1 - Math.pow(i, 1 / 300), o = 0, a = 0.6, u = Gt(), s = zr(f), l = dn("tick", "end");
  t == null && (t = []);
  function f() {
    h(), l.call("tick", n), e < i && (s.stop(), l.call("end", n));
  }
  function h() {
    var g, d = t.length, v;
    for (e += (o - e) * r, u.each(function(y) {
      y(e);
    }), g = 0; g < d; ++g)
      v = t[g], v.fx == null ? v.x += v.vx *= a : (v.x = v.fx, v.vx = 0), v.fy == null ? v.y += v.vy *= a : (v.y = v.fy, v.vy = 0);
  }
  function c() {
    for (var g = 0, d = t.length, v; g < d; ++g) {
      if (v = t[g], v.index = g, isNaN(v.x) || isNaN(v.y)) {
        var y = x_ * Math.sqrt(g), m = g * M_;
        v.x = y * Math.cos(m), v.y = y * Math.sin(m);
      }
      (isNaN(v.vx) || isNaN(v.vy)) && (v.vx = v.vy = 0);
    }
  }
  function p(g) {
    return g.initialize && g.initialize(t), g;
  }
  return c(), n = {
    tick: h,
    restart: function() {
      return s.restart(f), n;
    },
    stop: function() {
      return s.stop(), n;
    },
    nodes: function(g) {
      return arguments.length ? (t = g, c(), u.each(p), n) : t;
    },
    alpha: function(g) {
      return arguments.length ? (e = +g, n) : e;
    },
    alphaMin: function(g) {
      return arguments.length ? (i = +g, n) : i;
    },
    alphaDecay: function(g) {
      return arguments.length ? (r = +g, n) : +r;
    },
    alphaTarget: function(g) {
      return arguments.length ? (o = +g, n) : o;
    },
    velocityDecay: function(g) {
      return arguments.length ? (a = 1 - g, n) : 1 - a;
    },
    force: function(g, d) {
      return arguments.length > 1 ? (d == null ? u.remove(g) : u.set(g, p(d)), n) : u.get(g);
    },
    find: function(g, d, v) {
      var y = 0, m = t.length, _, M, b, x, C;
      for (v == null ? v = 1 / 0 : v *= v, y = 0; y < m; ++y)
        x = t[y], _ = g - x.x, M = d - x.y, b = _ * _ + M * M, b < v && (C = x, v = b);
      return C;
    },
    on: function(g, d) {
      return arguments.length > 1 ? (l.on(g, d), n) : l.on(g);
    }
  };
}
function S_() {
  var t, n, e, i = xt(-30), r, o = 1, a = 1 / 0, u = 0.81;
  function s(c) {
    var p, g = t.length, d = kr(t, w_, b_).visitAfter(f);
    for (e = c, p = 0; p < g; ++p)
      n = t[p], d.visit(h);
  }
  function l() {
    if (!!t) {
      var c, p = t.length;
      for (r = new Array(p), c = 0; c < p; ++c)
        r[c] = +i(t[c], c, t);
    }
  }
  function f(c) {
    var p = 0, g, d, v, y, m;
    if (c.length) {
      for (v = y = m = 0; m < 4; ++m)
        (g = c[m]) && (d = g.value) && (p += d, v += d * g.x, y += d * g.y);
      c.x = v / p, c.y = y / p;
    } else {
      g = c, g.x = g.data.x, g.y = g.data.y;
      do
        p += r[g.data.index];
      while (g = g.next);
    }
    c.value = p;
  }
  function h(c, p, g, d) {
    if (!c.value)
      return !0;
    var v = c.x - n.x, y = c.y - n.y, m = d - p, _ = v * v + y * y;
    if (m * m / u < _)
      return _ < a && (v === 0 && (v = an(), _ += v * v), y === 0 && (y = an(), _ += y * y), _ < o && (_ = Math.sqrt(o * _)), n.vx += v * c.value * e / _, n.vy += y * c.value * e / _), !0;
    if (c.length || _ >= a)
      return;
    (c.data !== n || c.next) && (v === 0 && (v = an(), _ += v * v), y === 0 && (y = an(), _ += y * y), _ < o && (_ = Math.sqrt(o * _)));
    do
      c.data !== n && (m = r[c.data.index] * e / _, n.vx += v * m, n.vy += y * m);
    while (c = c.next);
  }
  return s.initialize = function(c) {
    t = c, l();
  }, s.strength = function(c) {
    return arguments.length ? (i = typeof c == "function" ? c : xt(+c), l(), s) : i;
  }, s.distanceMin = function(c) {
    return arguments.length ? (o = c * c, s) : Math.sqrt(o);
  }, s.distanceMax = function(c) {
    return arguments.length ? (a = c * c, s) : Math.sqrt(a);
  }, s.theta = function(c) {
    return arguments.length ? (u = c * c, s) : Math.sqrt(u);
  }, s;
}
function k_(t) {
  var n = xt(0.1), e, i, r;
  typeof t != "function" && (t = xt(t == null ? 0 : +t));
  function o(u) {
    for (var s = 0, l = e.length, f; s < l; ++s)
      f = e[s], f.vx += (r[s] - f.x) * i[s] * u;
  }
  function a() {
    if (!!e) {
      var u, s = e.length;
      for (i = new Array(s), r = new Array(s), u = 0; u < s; ++u)
        i[u] = isNaN(r[u] = +t(e[u], u, e)) ? 0 : +n(e[u], u, e);
    }
  }
  return o.initialize = function(u) {
    e = u, a();
  }, o.strength = function(u) {
    return arguments.length ? (n = typeof u == "function" ? u : xt(+u), a(), o) : n;
  }, o.x = function(u) {
    return arguments.length ? (t = typeof u == "function" ? u : xt(+u), a(), o) : t;
  }, o;
}
function T_(t) {
  var n = xt(0.1), e, i, r;
  typeof t != "function" && (t = xt(t == null ? 0 : +t));
  function o(u) {
    for (var s = 0, l = e.length, f; s < l; ++s)
      f = e[s], f.vy += (r[s] - f.y) * i[s] * u;
  }
  function a() {
    if (!!e) {
      var u, s = e.length;
      for (i = new Array(s), r = new Array(s), u = 0; u < s; ++u)
        i[u] = isNaN(r[u] = +t(e[u], u, e)) ? 0 : +n(e[u], u, e);
    }
  }
  return o.initialize = function(u) {
    e = u, a();
  }, o.strength = function(u) {
    return arguments.length ? (n = typeof u == "function" ? u : xt(+u), a(), o) : n;
  }, o.y = function(u) {
    return arguments.length ? (t = typeof u == "function" ? u : xt(+u), a(), o) : t;
  }, o;
}
function mo() {
  L.stopImmediatePropagation();
}
function jn() {
  L.preventDefault(), L.stopImmediatePropagation();
}
function Vr(t) {
  var n = t.document.documentElement, e = Nt(t).on("dragstart.drag", jn, !0);
  "onselectstart" in n ? e.on("selectstart.drag", jn, !0) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
}
function Kr(t, n) {
  var e = t.document.documentElement, i = Nt(t).on("dragstart.drag", null);
  n && (i.on("click.drag", jn, !0), setTimeout(function() {
    i.on("click.drag", null);
  }, 0)), "onselectstart" in e ? i.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
}
function wo(t) {
  return function() {
    return t;
  };
}
function Ko(t, n, e, i, r, o, a, u, s, l) {
  this.target = t, this.type = n, this.subject = e, this.identifier = i, this.active = r, this.x = o, this.y = a, this.dx = u, this.dy = s, this._ = l;
}
Ko.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function A_() {
  return !L.button;
}
function E_() {
  return this.parentNode;
}
function N_(t) {
  return t == null ? { x: L.x, y: L.y } : t;
}
function $_() {
  var t = A_, n = E_, e = N_, i = {}, r = dn("start", "drag", "end"), o = 0, a, u;
  function s(v) {
    v.on("mousedown.drag", l).on("touchstart.drag", c).on("touchmove.drag", p).on("touchend.drag touchcancel.drag", g).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function l() {
    if (!(u || !t.apply(this, arguments))) {
      var v = d("mouse", n.apply(this, arguments), on, this, arguments);
      !v || (Nt(L.view).on("mousemove.drag", f, !0).on("mouseup.drag", h, !0), Vr(L.view), mo(), a = !1, v("start"));
    }
  }
  function f() {
    jn(), a = !0, i.mouse("drag");
  }
  function h() {
    Nt(L.view).on("mousemove.drag mouseup.drag", null), Kr(L.view, a), jn(), i.mouse("end");
  }
  function c() {
    if (!!t.apply(this, arguments)) {
      var v = L.changedTouches, y = n.apply(this, arguments), m = v.length, _, M;
      for (_ = 0; _ < m; ++_)
        (M = d(v[_].identifier, y, ji, this, arguments)) && (mo(), M("start"));
    }
  }
  function p() {
    var v = L.changedTouches, y = v.length, m, _;
    for (m = 0; m < y; ++m)
      (_ = i[v[m].identifier]) && (jn(), _("drag"));
  }
  function g() {
    var v = L.changedTouches, y = v.length, m, _;
    for (u && clearTimeout(u), u = setTimeout(function() {
      u = null;
    }, 500), m = 0; m < y; ++m)
      (_ = i[v[m].identifier]) && (mo(), _("end"));
  }
  function d(v, y, m, _, M) {
    var b = m(y, v), x, C, k, T = r.copy();
    if (!!Je(new Ko(s, "beforestart", x, v, o, b[0], b[1], 0, 0, T), function() {
      return (L.subject = x = e.apply(_, M)) == null ? !1 : (C = x.x - b[0] || 0, k = x.y - b[1] || 0, !0);
    }))
      return function $(E) {
        var A = b, w;
        switch (E) {
          case "start":
            i[v] = $, w = o++;
            break;
          case "end":
            delete i[v], --o;
          case "drag":
            b = m(y, v), w = o;
            break;
        }
        Je(new Ko(s, E, x, v, w, b[0] + C, b[1] + k, b[0] - A[0], b[1] - A[1], T), T.apply, T, [E, _, M]);
      };
  }
  return s.filter = function(v) {
    return arguments.length ? (t = typeof v == "function" ? v : wo(!!v), s) : t;
  }, s.container = function(v) {
    return arguments.length ? (n = typeof v == "function" ? v : wo(v), s) : n;
  }, s.subject = function(v) {
    return arguments.length ? (e = typeof v == "function" ? v : wo(v), s) : e;
  }, s.on = function() {
    var v = r.on.apply(r, arguments);
    return v === r ? s : v;
  }, s;
}
function zs(t) {
  return function() {
    return t;
  };
}
function R_(t) {
  return t[0];
}
function P_(t) {
  return t[1];
}
function nr() {
  this._ = null;
}
function Zr(t) {
  t.U = t.C = t.L = t.R = t.P = t.N = null;
}
nr.prototype = {
  constructor: nr,
  insert: function(t, n) {
    var e, i, r;
    if (t) {
      if (n.P = t, n.N = t.N, t.N && (t.N.P = n), t.N = n, t.R) {
        for (t = t.R; t.L; )
          t = t.L;
        t.L = n;
      } else
        t.R = n;
      e = t;
    } else
      this._ ? (t = Ls(this._), n.P = null, n.N = t, t.P = t.L = n, e = t) : (n.P = n.N = null, this._ = n, e = null);
    for (n.L = n.R = null, n.U = e, n.C = !0, t = n; e && e.C; )
      i = e.U, e === i.L ? (r = i.R, r && r.C ? (e.C = r.C = !1, i.C = !0, t = i) : (t === e.R && (Me(this, e), t = e, e = t.U), e.C = !1, i.C = !0, Ce(this, i))) : (r = i.L, r && r.C ? (e.C = r.C = !1, i.C = !0, t = i) : (t === e.L && (Ce(this, e), t = e, e = t.U), e.C = !1, i.C = !0, Me(this, i))), e = t.U;
    this._.C = !1;
  },
  remove: function(t) {
    t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), t.N = t.P = null;
    var n = t.U, e, i = t.L, r = t.R, o, a;
    if (i ? r ? o = Ls(r) : o = i : o = r, n ? n.L === t ? n.L = o : n.R = o : this._ = o, i && r ? (a = o.C, o.C = t.C, o.L = i, i.U = o, o !== r ? (n = o.U, o.U = t.U, t = o.R, n.L = t, o.R = r, r.U = o) : (o.U = n, n = o, t = o.R)) : (a = t.C, t = o), t && (t.U = n), !a) {
      if (t && t.C) {
        t.C = !1;
        return;
      }
      do {
        if (t === this._)
          break;
        if (t === n.L) {
          if (e = n.R, e.C && (e.C = !1, n.C = !0, Me(this, n), e = n.R), e.L && e.L.C || e.R && e.R.C) {
            (!e.R || !e.R.C) && (e.L.C = !1, e.C = !0, Ce(this, e), e = n.R), e.C = n.C, n.C = e.R.C = !1, Me(this, n), t = this._;
            break;
          }
        } else if (e = n.L, e.C && (e.C = !1, n.C = !0, Ce(this, n), e = n.L), e.L && e.L.C || e.R && e.R.C) {
          (!e.L || !e.L.C) && (e.R.C = !1, e.C = !0, Me(this, e), e = n.L), e.C = n.C, n.C = e.L.C = !1, Ce(this, n), t = this._;
          break;
        }
        e.C = !0, t = n, n = n.U;
      } while (!t.C);
      t && (t.C = !1);
    }
  }
};
function Me(t, n) {
  var e = n, i = n.R, r = e.U;
  r ? r.L === e ? r.L = i : r.R = i : t._ = i, i.U = r, e.U = i, e.R = i.L, e.R && (e.R.U = e), i.L = e;
}
function Ce(t, n) {
  var e = n, i = n.L, r = e.U;
  r ? r.L === e ? r.L = i : r.R = i : t._ = i, i.U = r, e.U = i, e.L = i.R, e.L && (e.L.U = e), i.R = e;
}
function Ls(t) {
  for (; t.L; )
    t = t.L;
  return t;
}
function Oe(t, n, e, i) {
  var r = [null, null], o = dt.push(r) - 1;
  return r.left = t, r.right = n, e && er(r, t, n, e), i && er(r, n, t, i), Et[t.index].halfedges.push(o), Et[n.index].halfedges.push(o), r;
}
function Se(t, n, e) {
  var i = [n, e];
  return i.left = t, i;
}
function er(t, n, e, i) {
  !t[0] && !t[1] ? (t[0] = i, t.left = n, t.right = e) : t.left === e ? t[1] = i : t[0] = i;
}
function O_(t, n, e, i, r) {
  var o = t[0], a = t[1], u = o[0], s = o[1], l = a[0], f = a[1], h = 0, c = 1, p = l - u, g = f - s, d;
  if (d = n - u, !(!p && d > 0)) {
    if (d /= p, p < 0) {
      if (d < h)
        return;
      d < c && (c = d);
    } else if (p > 0) {
      if (d > c)
        return;
      d > h && (h = d);
    }
    if (d = i - u, !(!p && d < 0)) {
      if (d /= p, p < 0) {
        if (d > c)
          return;
        d > h && (h = d);
      } else if (p > 0) {
        if (d < h)
          return;
        d < c && (c = d);
      }
      if (d = e - s, !(!g && d > 0)) {
        if (d /= g, g < 0) {
          if (d < h)
            return;
          d < c && (c = d);
        } else if (g > 0) {
          if (d > c)
            return;
          d > h && (h = d);
        }
        if (d = r - s, !(!g && d < 0)) {
          if (d /= g, g < 0) {
            if (d > c)
              return;
            d > h && (h = d);
          } else if (g > 0) {
            if (d < h)
              return;
            d < c && (c = d);
          }
          return !(h > 0) && !(c < 1) || (h > 0 && (t[0] = [u + h * p, s + h * g]), c < 1 && (t[1] = [u + c * p, s + c * g])), !0;
        }
      }
    }
  }
}
function D_(t, n, e, i, r) {
  var o = t[1];
  if (o)
    return !0;
  var a = t[0], u = t.left, s = t.right, l = u[0], f = u[1], h = s[0], c = s[1], p = (l + h) / 2, g = (f + c) / 2, d, v;
  if (c === f) {
    if (p < n || p >= i)
      return;
    if (l > h) {
      if (!a)
        a = [p, e];
      else if (a[1] >= r)
        return;
      o = [p, r];
    } else {
      if (!a)
        a = [p, r];
      else if (a[1] < e)
        return;
      o = [p, e];
    }
  } else if (d = (l - h) / (c - f), v = g - d * p, d < -1 || d > 1)
    if (l > h) {
      if (!a)
        a = [(e - v) / d, e];
      else if (a[1] >= r)
        return;
      o = [(r - v) / d, r];
    } else {
      if (!a)
        a = [(r - v) / d, r];
      else if (a[1] < e)
        return;
      o = [(e - v) / d, e];
    }
  else if (f < c) {
    if (!a)
      a = [n, d * n + v];
    else if (a[0] >= i)
      return;
    o = [i, d * i + v];
  } else {
    if (!a)
      a = [i, d * i + v];
    else if (a[0] < n)
      return;
    o = [n, d * n + v];
  }
  return t[0] = a, t[1] = o, !0;
}
function z_(t, n, e, i) {
  for (var r = dt.length, o; r--; )
    (!D_(o = dt[r], t, n, e, i) || !O_(o, t, n, e, i) || !(Math.abs(o[0][0] - o[1][0]) > J || Math.abs(o[0][1] - o[1][1]) > J)) && delete dt[r];
}
function L_(t) {
  return Et[t.index] = {
    site: t,
    halfedges: []
  };
}
function I_(t, n) {
  var e = t.site, i = n.left, r = n.right;
  return e === r && (r = i, i = e), r ? Math.atan2(r[1] - i[1], r[0] - i[0]) : (e === i ? (i = n[1], r = n[0]) : (i = n[0], r = n[1]), Math.atan2(i[0] - r[0], r[1] - i[1]));
}
function Gf(t, n) {
  return n[+(n.left !== t.site)];
}
function F_(t, n) {
  return n[+(n.left === t.site)];
}
function U_() {
  for (var t = 0, n = Et.length, e, i, r, o; t < n; ++t)
    if ((e = Et[t]) && (o = (i = e.halfedges).length)) {
      var a = new Array(o), u = new Array(o);
      for (r = 0; r < o; ++r)
        a[r] = r, u[r] = I_(e, dt[i[r]]);
      for (a.sort(function(s, l) {
        return u[l] - u[s];
      }), r = 0; r < o; ++r)
        u[r] = i[a[r]];
      for (r = 0; r < o; ++r)
        i[r] = u[r];
    }
}
function Y_(t, n, e, i) {
  var r = Et.length, o, a, u, s, l, f, h, c, p, g, d, v, y = !0;
  for (o = 0; o < r; ++o)
    if (a = Et[o]) {
      for (u = a.site, l = a.halfedges, s = l.length; s--; )
        dt[l[s]] || l.splice(s, 1);
      for (s = 0, f = l.length; s < f; )
        g = F_(a, dt[l[s]]), d = g[0], v = g[1], h = Gf(a, dt[l[++s % f]]), c = h[0], p = h[1], (Math.abs(d - c) > J || Math.abs(v - p) > J) && (l.splice(s, 0, dt.push(Se(
          u,
          g,
          Math.abs(d - t) < J && i - v > J ? [t, Math.abs(c - t) < J ? p : i] : Math.abs(v - i) < J && e - d > J ? [Math.abs(p - i) < J ? c : e, i] : Math.abs(d - e) < J && v - n > J ? [e, Math.abs(c - e) < J ? p : n] : Math.abs(v - n) < J && d - t > J ? [Math.abs(p - n) < J ? c : t, n] : null
        )) - 1), ++f);
      f && (y = !1);
    }
  if (y) {
    var m, _, M, b = 1 / 0;
    for (o = 0, y = null; o < r; ++o)
      (a = Et[o]) && (u = a.site, m = u[0] - t, _ = u[1] - n, M = m * m + _ * _, M < b && (b = M, y = a));
    if (y) {
      var x = [t, n], C = [t, i], k = [e, i], T = [e, n];
      y.halfedges.push(
        dt.push(Se(u = y.site, x, C)) - 1,
        dt.push(Se(u, C, k)) - 1,
        dt.push(Se(u, k, T)) - 1,
        dt.push(Se(u, T, x)) - 1
      );
    }
  }
  for (o = 0; o < r; ++o)
    (a = Et[o]) && (a.halfedges.length || delete Et[o]);
}
var Vf = [], du;
function H_() {
  Zr(this), this.x = this.y = this.arc = this.site = this.cy = null;
}
function Zn(t) {
  var n = t.P, e = t.N;
  if (!(!n || !e)) {
    var i = n.site, r = t.site, o = e.site;
    if (i !== o) {
      var a = r[0], u = r[1], s = i[0] - a, l = i[1] - u, f = o[0] - a, h = o[1] - u, c = 2 * (s * h - l * f);
      if (!(c >= -G_)) {
        var p = s * s + l * l, g = f * f + h * h, d = (h * p - l * g) / c, v = (s * g - f * p) / c, y = Vf.pop() || new H_();
        y.arc = t, y.site = r, y.x = d + a, y.y = (y.cy = v + u) + Math.sqrt(d * d + v * v), t.circle = y;
        for (var m = null, _ = Qe._; _; )
          if (y.y < _.y || y.y === _.y && y.x <= _.x)
            if (_.L)
              _ = _.L;
            else {
              m = _.P;
              break;
            }
          else if (_.R)
            _ = _.R;
          else {
            m = _;
            break;
          }
        Qe.insert(m, y), m || (du = y);
      }
    }
  }
}
function te(t) {
  var n = t.circle;
  n && (n.P || (du = n.N), Qe.remove(n), Vf.push(n), Zr(n), t.circle = null);
}
var Kf = [];
function B_() {
  Zr(this), this.edge = this.site = this.circle = null;
}
function Is(t) {
  var n = Kf.pop() || new B_();
  return n.site = t, n;
}
function bo(t) {
  te(t), ne.remove(t), Kf.push(t), Zr(t);
}
function X_(t) {
  var n = t.circle, e = n.x, i = n.cy, r = [e, i], o = t.P, a = t.N, u = [t];
  bo(t);
  for (var s = o; s.circle && Math.abs(e - s.circle.x) < J && Math.abs(i - s.circle.cy) < J; )
    o = s.P, u.unshift(s), bo(s), s = o;
  u.unshift(s), te(s);
  for (var l = a; l.circle && Math.abs(e - l.circle.x) < J && Math.abs(i - l.circle.cy) < J; )
    a = l.N, u.push(l), bo(l), l = a;
  u.push(l), te(l);
  var f = u.length, h;
  for (h = 1; h < f; ++h)
    l = u[h], s = u[h - 1], er(l.edge, s.site, l.site, r);
  s = u[0], l = u[f - 1], l.edge = Oe(s.site, l.site, null, r), Zn(s), Zn(l);
}
function W_(t) {
  for (var n = t[0], e = t[1], i, r, o, a, u = ne._; u; )
    if (o = Zf(u, e) - n, o > J)
      u = u.L;
    else if (a = n - q_(u, e), a > J) {
      if (!u.R) {
        i = u;
        break;
      }
      u = u.R;
    } else {
      o > -J ? (i = u.P, r = u) : a > -J ? (i = u, r = u.N) : i = r = u;
      break;
    }
  L_(t);
  var s = Is(t);
  if (ne.insert(i, s), !(!i && !r)) {
    if (i === r) {
      te(i), r = Is(i.site), ne.insert(s, r), s.edge = r.edge = Oe(i.site, s.site), Zn(i), Zn(r);
      return;
    }
    if (!r) {
      s.edge = Oe(i.site, s.site);
      return;
    }
    te(i), te(r);
    var l = i.site, f = l[0], h = l[1], c = t[0] - f, p = t[1] - h, g = r.site, d = g[0] - f, v = g[1] - h, y = 2 * (c * v - p * d), m = c * c + p * p, _ = d * d + v * v, M = [(v * m - p * _) / y + f, (c * _ - d * m) / y + h];
    er(r.edge, l, g, M), s.edge = Oe(l, t, null, M), r.edge = Oe(t, g, null, M), Zn(i), Zn(r);
  }
}
function Zf(t, n) {
  var e = t.site, i = e[0], r = e[1], o = r - n;
  if (!o)
    return i;
  var a = t.P;
  if (!a)
    return -1 / 0;
  e = a.site;
  var u = e[0], s = e[1], l = s - n;
  if (!l)
    return u;
  var f = u - i, h = 1 / o - 1 / l, c = f / l;
  return h ? (-c + Math.sqrt(c * c - 2 * h * (f * f / (-2 * l) - s + l / 2 + r - o / 2))) / h + i : (i + u) / 2;
}
function q_(t, n) {
  var e = t.N;
  if (e)
    return Zf(e, n);
  var i = t.site;
  return i[1] === n ? i[0] : 1 / 0;
}
var J = 1e-6, G_ = 1e-12, ne, Et, Qe, dt;
function V_(t, n, e) {
  return (t[0] - e[0]) * (n[1] - t[1]) - (t[0] - n[0]) * (e[1] - t[1]);
}
function K_(t, n) {
  return n[1] - t[1] || n[0] - t[0];
}
function Zo(t, n) {
  var e = t.sort(K_).pop(), i, r, o;
  for (dt = [], Et = new Array(t.length), ne = new nr(), Qe = new nr(); ; )
    if (o = du, e && (!o || e[1] < o.y || e[1] === o.y && e[0] < o.x))
      (e[0] !== i || e[1] !== r) && (W_(e), i = e[0], r = e[1]), e = t.pop();
    else if (o)
      X_(o.arc);
    else
      break;
  if (U_(), n) {
    var a = +n[0][0], u = +n[0][1], s = +n[1][0], l = +n[1][1];
    z_(a, u, s, l), Y_(a, u, s, l);
  }
  this.edges = dt, this.cells = Et, ne = Qe = dt = Et = null;
}
Zo.prototype = {
  constructor: Zo,
  polygons: function() {
    var t = this.edges;
    return this.cells.map(function(n) {
      var e = n.halfedges.map(function(i) {
        return Gf(n, t[i]);
      });
      return e.data = n.site.data, e;
    });
  },
  triangles: function() {
    var t = [], n = this.edges;
    return this.cells.forEach(function(e, i) {
      for (var r = e.site, o = e.halfedges, a = -1, u = o.length, s, l = n[o[u - 1]], f = l.left === r ? l.right : l.left; ++a < u; )
        s = f, l = n[o[a]], f = l.left === r ? l.right : l.left, i < s.index && i < f.index && V_(r, s, f) < 0 && t.push([r.data, s.data, f.data]);
    }), t;
  },
  links: function() {
    return this.edges.filter(function(t) {
      return t.right;
    }).map(function(t) {
      return {
        source: t.left.data,
        target: t.right.data
      };
    });
  }
};
function Z_() {
  var t = R_, n = P_, e = null;
  function i(r) {
    return new Zo(r.map(function(o, a) {
      var u = [Math.round(t(o, a, r) / J) * J, Math.round(n(o, a, r) / J) * J];
      return u.index = a, u.data = o, u;
    }), e);
  }
  return i.polygons = function(r) {
    return i(r).polygons();
  }, i.links = function(r) {
    return i(r).links();
  }, i.triangles = function(r) {
    return i(r).triangles();
  }, i.x = function(r) {
    return arguments.length ? (t = typeof r == "function" ? r : zs(+r), i) : t;
  }, i.y = function(r) {
    return arguments.length ? (n = typeof r == "function" ? r : zs(+r), i) : n;
  }, i.extent = function(r) {
    return arguments.length ? (e = r == null ? null : [[+r[0][0], +r[0][1]], [+r[1][0], +r[1][1]]], i) : e && [[e[0][0], e[0][1]], [e[1][0], e[1][1]]];
  }, i.size = function(r) {
    return arguments.length ? (e = r == null ? null : [[0, 0], [+r[0], +r[1]]], i) : e && [e[1][0] - e[0][0], e[1][1] - e[0][1]];
  }, i;
}
function Fs(t) {
  return function() {
    return t;
  };
}
function J_(t, n, e) {
  this.target = t, this.type = n, this.transform = e;
}
function nn(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
nn.prototype = {
  constructor: nn,
  scale: function(t) {
    return t === 1 ? this : new nn(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new nn(this.k, this.x + this.k * t, this.y + this.k * n);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var vu = new nn(1, 0, 0);
Jf.prototype = nn.prototype;
function Jf(t) {
  return t.__zoom || vu;
}
function xo() {
  L.stopImmediatePropagation();
}
function ke() {
  L.preventDefault(), L.stopImmediatePropagation();
}
function Q_() {
  return !L.button;
}
function j_() {
  var t = this, n, e;
  return t instanceof SVGElement ? (t = t.ownerSVGElement || t, n = t.width.baseVal.value, e = t.height.baseVal.value) : (n = t.clientWidth, e = t.clientHeight), [[0, 0], [n, e]];
}
function Us() {
  return this.__zoom || vu;
}
function tm() {
  var t = Q_, n = j_, e = 0, i = 1 / 0, r = -i, o = i, a = r, u = o, s = 250, l = [], f = dn("start", "zoom", "end"), h, c, p = 500, g = 150;
  function d(w) {
    w.on("wheel.zoom", C).on("mousedown.zoom", k).on("dblclick.zoom", T).on("touchstart.zoom", $).on("touchmove.zoom", E).on("touchend.zoom touchcancel.zoom", A).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").property("__zoom", Us);
  }
  d.transform = function(w, S) {
    var N = w.selection ? w.selection() : w;
    N.property("__zoom", Us), w !== N ? M(w, S) : N.interrupt().each(function() {
      b(this, arguments).start().zoom(null, typeof S == "function" ? S.apply(this, arguments) : S).end();
    });
  }, d.scaleBy = function(w, S) {
    d.scaleTo(w, function() {
      var N = this.__zoom.k, R = typeof S == "function" ? S.apply(this, arguments) : S;
      return N * R;
    });
  }, d.scaleTo = function(w, S) {
    d.transform(w, function() {
      var N = n.apply(this, arguments), R = this.__zoom, P = _(N), H = R.invert(P), X = typeof S == "function" ? S.apply(this, arguments) : S;
      return m(y(v(R, X), P, H), N);
    });
  }, d.translateBy = function(w, S, N) {
    d.transform(w, function() {
      return m(this.__zoom.translate(
        typeof S == "function" ? S.apply(this, arguments) : S,
        typeof N == "function" ? N.apply(this, arguments) : N
      ), n.apply(this, arguments));
    });
  };
  function v(w, S) {
    return S = Math.max(e, Math.min(i, S)), S === w.k ? w : new nn(S, w.x, w.y);
  }
  function y(w, S, N) {
    var R = S[0] - N[0] * w.k, P = S[1] - N[1] * w.k;
    return R === w.x && P === w.y ? w : new nn(w.k, R, P);
  }
  function m(w, S) {
    var N = Math.min(0, w.invertX(S[0][0]) - r) || Math.max(0, w.invertX(S[1][0]) - o), R = Math.min(0, w.invertY(S[0][1]) - a) || Math.max(0, w.invertY(S[1][1]) - u);
    return N || R ? w.translate(N, R) : w;
  }
  function _(w) {
    return [(+w[0][0] + +w[1][0]) / 2, (+w[0][1] + +w[1][1]) / 2];
  }
  function M(w, S, N) {
    w.on("start.zoom", function() {
      b(this, arguments).start();
    }).on("interrupt.zoom end.zoom", function() {
      b(this, arguments).end();
    }).tween("zoom", function() {
      var R = this, P = arguments, H = b(R, P), X = n.apply(R, P), Q = N || _(X), V = Math.max(X[1][0] - X[0][0], X[1][1] - X[0][1]), j = R.__zoom, K = typeof S == "function" ? S.apply(R, P) : S, tt = Nc(j.invert(Q).concat(V / j.k), K.invert(Q).concat(V / K.k));
      return function(Z) {
        if (Z === 1)
          Z = K;
        else {
          var wt = tt(Z), O = V / wt[2];
          Z = new nn(O, Q[0] - wt[0] * O, Q[1] - wt[1] * O);
        }
        H.zoom(null, Z);
      };
    });
  }
  function b(w, S) {
    for (var N = 0, R = l.length, P; N < R; ++N)
      if ((P = l[N]).that === w)
        return P;
    return new x(w, S);
  }
  function x(w, S) {
    this.that = w, this.args = S, this.index = -1, this.active = 0, this.extent = n.apply(w, S);
  }
  x.prototype = {
    start: function() {
      return ++this.active === 1 && (this.index = l.push(this) - 1, this.emit("start")), this;
    },
    zoom: function(w, S) {
      return this.mouse && w !== "mouse" && (this.mouse[1] = S.invert(this.mouse[0])), this.touch0 && w !== "touch" && (this.touch0[1] = S.invert(this.touch0[0])), this.touch1 && w !== "touch" && (this.touch1[1] = S.invert(this.touch1[0])), this.that.__zoom = S, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (l.splice(this.index, 1), this.index = -1, this.emit("end")), this;
    },
    emit: function(w) {
      Je(new J_(d, w, this.that.__zoom), f.apply, f, [w, this.that, this.args]);
    }
  };
  function C() {
    if (!t.apply(this, arguments))
      return;
    var w = b(this, arguments), S = this.__zoom, N = Math.max(e, Math.min(i, S.k * Math.pow(2, -L.deltaY * (L.deltaMode ? 120 : 1) / 500))), R = on(this);
    if (w.wheel)
      (w.mouse[0][0] !== R[0] || w.mouse[0][1] !== R[1]) && (w.mouse[1] = S.invert(w.mouse[0] = R)), clearTimeout(w.wheel);
    else {
      if (S.k === N)
        return;
      w.mouse = [R, S.invert(R)], Cn(this), w.start();
    }
    ke(), w.wheel = setTimeout(P, g), w.zoom("mouse", m(y(v(S, N), w.mouse[0], w.mouse[1]), w.extent));
    function P() {
      w.wheel = null, w.end();
    }
  }
  function k() {
    if (c || !t.apply(this, arguments))
      return;
    var w = b(this, arguments), S = Nt(L.view).on("mousemove.zoom", R, !0).on("mouseup.zoom", P, !0), N = on(this);
    Vr(L.view), xo(), w.mouse = [N, this.__zoom.invert(N)], Cn(this), w.start();
    function R() {
      ke(), w.moved = !0, w.zoom("mouse", m(y(w.that.__zoom, w.mouse[0] = on(w.that), w.mouse[1]), w.extent));
    }
    function P() {
      S.on("mousemove.zoom mouseup.zoom", null), Kr(L.view, w.moved), ke(), w.end();
    }
  }
  function T() {
    if (!!t.apply(this, arguments)) {
      var w = this.__zoom, S = on(this), N = w.invert(S), R = w.k * (L.shiftKey ? 0.5 : 2), P = m(y(v(w, R), S, N), n.apply(this, arguments));
      ke(), s > 0 ? Nt(this).transition().duration(s).call(M, P, S) : Nt(this).call(d.transform, P);
    }
  }
  function $() {
    if (!!t.apply(this, arguments)) {
      var w = b(this, arguments), S = L.changedTouches, N = S.length, R, P, H;
      for (xo(), R = 0; R < N; ++R)
        P = S[R], H = ji(this, S, P.identifier), H = [H, this.__zoom.invert(H), P.identifier], w.touch0 ? w.touch1 || (w.touch1 = H) : w.touch0 = H;
      if (h && (h = clearTimeout(h), !w.touch1))
        return w.end(), T.apply(this, arguments);
      L.touches.length === N && (h = setTimeout(function() {
        h = null;
      }, p), Cn(this), w.start());
    }
  }
  function E() {
    var w = b(this, arguments), S = L.changedTouches, N = S.length, R, P, H, X;
    for (ke(), h && (h = clearTimeout(h)), R = 0; R < N; ++R)
      P = S[R], H = ji(this, S, P.identifier), w.touch0 && w.touch0[2] === P.identifier ? w.touch0[0] = H : w.touch1 && w.touch1[2] === P.identifier && (w.touch1[0] = H);
    if (P = w.that.__zoom, w.touch1) {
      var Q = w.touch0[0], V = w.touch0[1], j = w.touch1[0], K = w.touch1[1], tt = (tt = j[0] - Q[0]) * tt + (tt = j[1] - Q[1]) * tt, Z = (Z = K[0] - V[0]) * Z + (Z = K[1] - V[1]) * Z;
      P = v(P, Math.sqrt(tt / Z)), H = [(Q[0] + j[0]) / 2, (Q[1] + j[1]) / 2], X = [(V[0] + K[0]) / 2, (V[1] + K[1]) / 2];
    } else if (w.touch0)
      H = w.touch0[0], X = w.touch0[1];
    else
      return;
    w.zoom("touch", m(y(P, H, X), w.extent));
  }
  function A() {
    var w = b(this, arguments), S = L.changedTouches, N = S.length, R, P;
    for (xo(), c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, p), R = 0; R < N; ++R)
      P = S[R], w.touch0 && w.touch0[2] === P.identifier ? delete w.touch0 : w.touch1 && w.touch1[2] === P.identifier && delete w.touch1;
    w.touch1 && !w.touch0 && (w.touch0 = w.touch1, delete w.touch1), w.touch0 || w.end();
  }
  return d.filter = function(w) {
    return arguments.length ? (t = typeof w == "function" ? w : Fs(!!w), d) : t;
  }, d.extent = function(w) {
    return arguments.length ? (n = typeof w == "function" ? w : Fs([[+w[0][0], +w[0][1]], [+w[1][0], +w[1][1]]]), d) : n;
  }, d.scaleExtent = function(w) {
    return arguments.length ? (e = +w[0], i = +w[1], d) : [e, i];
  }, d.translateExtent = function(w) {
    return arguments.length ? (r = +w[0][0], o = +w[1][0], a = +w[0][1], u = +w[1][1], d) : [[r, a], [o, u]];
  }, d.duration = function(w) {
    return arguments.length ? (s = +w, d) : s;
  }, d.on = function() {
    var w = f.on.apply(f, arguments);
    return w === f ? d : w;
  }, d;
}
function Ys(t) {
  return function() {
    return t;
  };
}
function nm(t, n, e) {
  this.target = t, this.type = n, this.selection = e;
}
function Hs() {
  L.stopImmediatePropagation();
}
function _i() {
  L.preventDefault(), L.stopImmediatePropagation();
}
var Bs = { name: "drag" }, Mo = { name: "space" }, Wn = { name: "handle" }, qn = { name: "center" }, Pi = {
  name: "x",
  handles: ["e", "w"].map(je),
  input: function(t, n) {
    return t && [[t[0], n[0][1]], [t[1], n[1][1]]];
  },
  output: function(t) {
    return t && [t[0][0], t[1][0]];
  }
}, Oi = {
  name: "y",
  handles: ["n", "s"].map(je),
  input: function(t, n) {
    return t && [[n[0][0], t[0]], [n[1][0], t[1]]];
  },
  output: function(t) {
    return t && [t[0][1], t[1][1]];
  }
}, em = {
  name: "xy",
  handles: ["n", "e", "s", "w", "nw", "ne", "se", "sw"].map(je),
  input: function(t) {
    return t;
  },
  output: function(t) {
    return t;
  }
}, Zt = {
  overlay: "crosshair",
  selection: "move",
  n: "ns-resize",
  e: "ew-resize",
  s: "ns-resize",
  w: "ew-resize",
  nw: "nwse-resize",
  ne: "nesw-resize",
  se: "nwse-resize",
  sw: "nesw-resize"
}, Xs = {
  e: "w",
  w: "e",
  nw: "ne",
  ne: "nw",
  se: "sw",
  sw: "se"
}, Ws = {
  n: "s",
  s: "n",
  nw: "sw",
  ne: "se",
  se: "ne",
  sw: "nw"
}, im = {
  overlay: 1,
  selection: 1,
  n: null,
  e: 1,
  s: null,
  w: -1,
  nw: -1,
  ne: 1,
  se: 1,
  sw: -1
}, rm = {
  overlay: 1,
  selection: 1,
  n: -1,
  e: null,
  s: 1,
  w: null,
  nw: -1,
  ne: -1,
  se: 1,
  sw: 1
};
function je(t) {
  return { type: t };
}
function om() {
  return !L.button;
}
function am() {
  var t = this.ownerSVGElement || this;
  return [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]];
}
function Co(t) {
  for (; !t.__brush; )
    if (!(t = t.parentNode))
      return;
  return t.__brush;
}
function So(t) {
  return t[0][0] === t[1][0] || t[0][1] === t[1][1];
}
function um(t) {
  var n = t.__brush;
  return n ? n.dim.output(n.selection) : null;
}
function sm() {
  return yu(Pi);
}
function lm() {
  return yu(Oi);
}
function cm() {
  return yu(em);
}
function yu(t) {
  var n = am, e = om, i = dn(a, "start", "brush", "end"), r = 6, o;
  function a(c) {
    var p = c.property("__brush", h).selectAll(".overlay").data([je("overlay")]);
    p.enter().append("rect").attr("class", "overlay").attr("pointer-events", "all").attr("cursor", Zt.overlay).merge(p).each(function() {
      var d = Co(this).extent;
      Nt(this).attr("x", d[0][0]).attr("y", d[0][1]).attr("width", d[1][0] - d[0][0]).attr("height", d[1][1] - d[0][1]);
    }), c.selectAll(".selection").data([je("selection")]).enter().append("rect").attr("class", "selection").attr("cursor", Zt.selection).attr("fill", "#777").attr("fill-opacity", 0.3).attr("stroke", "#fff").attr("shape-rendering", "crispEdges");
    var g = c.selectAll(".handle").data(t.handles, function(d) {
      return d.type;
    });
    g.exit().remove(), g.enter().append("rect").attr("class", function(d) {
      return "handle handle--" + d.type;
    }).attr("cursor", function(d) {
      return Zt[d.type];
    }), c.each(u).attr("fill", "none").attr("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush touchstart.brush", f);
  }
  a.move = function(c, p) {
    c.selection ? c.on("start.brush", function() {
      s(this, arguments).beforestart().start();
    }).on("interrupt.brush end.brush", function() {
      s(this, arguments).end();
    }).tween("brush", function() {
      var g = this, d = g.__brush, v = s(g, arguments), y = d.selection, m = t.input(typeof p == "function" ? p.apply(this, arguments) : p, d.extent), _ = ii(y, m);
      function M(b) {
        d.selection = b === 1 && So(m) ? null : _(b), u.call(g), v.brush();
      }
      return y && m ? M : M(1);
    }) : c.each(function() {
      var g = this, d = arguments, v = g.__brush, y = t.input(typeof p == "function" ? p.apply(g, d) : p, v.extent), m = s(g, d).beforestart();
      Cn(g), v.selection = y == null || So(y) ? null : y, u.call(g), m.start().brush().end();
    });
  };
  function u() {
    var c = Nt(this), p = Co(this).selection;
    p ? (c.selectAll(".selection").style("display", null).attr("x", p[0][0]).attr("y", p[0][1]).attr("width", p[1][0] - p[0][0]).attr("height", p[1][1] - p[0][1]), c.selectAll(".handle").style("display", null).attr("x", function(g) {
      return g.type[g.type.length - 1] === "e" ? p[1][0] - r / 2 : p[0][0] - r / 2;
    }).attr("y", function(g) {
      return g.type[0] === "s" ? p[1][1] - r / 2 : p[0][1] - r / 2;
    }).attr("width", function(g) {
      return g.type === "n" || g.type === "s" ? p[1][0] - p[0][0] + r : r;
    }).attr("height", function(g) {
      return g.type === "e" || g.type === "w" ? p[1][1] - p[0][1] + r : r;
    })) : c.selectAll(".selection,.handle").style("display", "none").attr("x", null).attr("y", null).attr("width", null).attr("height", null);
  }
  function s(c, p) {
    return c.__brush.emitter || new l(c, p);
  }
  function l(c, p) {
    this.that = c, this.args = p, this.state = c.__brush, this.active = 0;
  }
  l.prototype = {
    beforestart: function() {
      return ++this.active === 1 && (this.state.emitter = this, this.starting = !0), this;
    },
    start: function() {
      return this.starting && (this.starting = !1, this.emit("start")), this;
    },
    brush: function() {
      return this.emit("brush"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.state.emitter, this.emit("end")), this;
    },
    emit: function(c) {
      Je(new nm(a, c, t.output(this.state.selection)), i.apply, i, [c, this.that, this.args]);
    }
  };
  function f() {
    if (L.touches) {
      if (L.changedTouches.length < L.touches.length)
        return _i();
    } else if (o)
      return;
    if (!e.apply(this, arguments))
      return;
    var c = this, p = L.target.__data__.type, g = (L.metaKey ? p = "overlay" : p) === "selection" ? Bs : L.altKey ? qn : Wn, d = t === Oi ? null : im[p], v = t === Pi ? null : rm[p], y = Co(c), m = y.extent, _ = y.selection, M = m[0][0], b, x, C = m[0][1], k, T, $ = m[1][0], E, A, w = m[1][1], S, N, R, P, H, X = d && v && L.shiftKey, Q, V, j = on(c), K = j, tt = s(c, arguments).beforestart();
    p === "overlay" ? y.selection = _ = [
      [b = t === Oi ? M : j[0], k = t === Pi ? C : j[1]],
      [E = t === Oi ? $ : b, S = t === Pi ? w : k]
    ] : (b = _[0][0], k = _[0][1], E = _[1][0], S = _[1][1]), x = b, T = k, A = E, N = S;
    var Z = Nt(c).attr("pointer-events", "none"), wt = Z.selectAll(".overlay").attr("cursor", Zt[p]);
    if (L.touches)
      Z.on("touchmove.brush", Y, !0).on("touchend.brush touchcancel.brush", D, !0);
    else {
      var O = Nt(L.view).on("keydown.brush", ht, !0).on("keyup.brush", Yt, !0).on("mousemove.brush", Y, !0).on("mouseup.brush", D, !0);
      Vr(L.view);
    }
    Hs(), Cn(c), u.call(c), tt.start();
    function Y() {
      var pt = on(c);
      X && !Q && !V && (Math.abs(pt[0] - K[0]) > Math.abs(pt[1] - K[1]) ? V = !0 : Q = !0), K = pt, H = !0, _i(), B();
    }
    function B() {
      var pt;
      switch (R = K[0] - j[0], P = K[1] - j[1], g) {
        case Mo:
        case Bs: {
          d && (R = Math.max(M - b, Math.min($ - E, R)), x = b + R, A = E + R), v && (P = Math.max(C - k, Math.min(w - S, P)), T = k + P, N = S + P);
          break;
        }
        case Wn: {
          d < 0 ? (R = Math.max(M - b, Math.min($ - b, R)), x = b + R, A = E) : d > 0 && (R = Math.max(M - E, Math.min($ - E, R)), x = b, A = E + R), v < 0 ? (P = Math.max(C - k, Math.min(w - k, P)), T = k + P, N = S) : v > 0 && (P = Math.max(C - S, Math.min(w - S, P)), T = k, N = S + P);
          break;
        }
        case qn: {
          d && (x = Math.max(M, Math.min($, b - R * d)), A = Math.max(M, Math.min($, E + R * d))), v && (T = Math.max(C, Math.min(w, k - P * v)), N = Math.max(C, Math.min(w, S + P * v)));
          break;
        }
      }
      A < x && (d *= -1, pt = b, b = E, E = pt, pt = x, x = A, A = pt, p in Xs && wt.attr("cursor", Zt[p = Xs[p]])), N < T && (v *= -1, pt = k, k = S, S = pt, pt = T, T = N, N = pt, p in Ws && wt.attr("cursor", Zt[p = Ws[p]])), _ = y.selection, Q && (x = _[0][0], A = _[1][0]), V && (T = _[0][1], N = _[1][1]), (_[0][0] !== x || _[0][1] !== T || _[1][0] !== A || _[1][1] !== N) && (y.selection = [[x, T], [A, N]], u.call(c), tt.brush());
    }
    function D() {
      if (Hs(), L.touches) {
        if (L.touches.length)
          return;
        o && clearTimeout(o), o = setTimeout(function() {
          o = null;
        }, 500), Z.on("touchmove.brush touchend.brush touchcancel.brush", null);
      } else
        Kr(L.view, H), O.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
      Z.attr("pointer-events", "all"), wt.attr("cursor", Zt.overlay), So(_) && (y.selection = null, u.call(c)), tt.end();
    }
    function ht() {
      switch (L.keyCode) {
        case 16: {
          X = d && v;
          break;
        }
        case 18: {
          g === Wn && (d && (E = A - R * d, b = x + R * d), v && (S = N - P * v, k = T + P * v), g = qn, B());
          break;
        }
        case 32: {
          (g === Wn || g === qn) && (d < 0 ? E = A - R : d > 0 && (b = x - R), v < 0 ? S = N - P : v > 0 && (k = T - P), g = Mo, wt.attr("cursor", Zt.selection), B());
          break;
        }
        default:
          return;
      }
      _i();
    }
    function Yt() {
      switch (L.keyCode) {
        case 16: {
          X && (Q = V = X = !1, B());
          break;
        }
        case 18: {
          g === qn && (d < 0 ? E = A : d > 0 && (b = x), v < 0 ? S = N : v > 0 && (k = T), g = Wn, B());
          break;
        }
        case 32: {
          g === Mo && (L.altKey ? (d && (E = A - R * d, b = x + R * d), v && (S = N - P * v, k = T + P * v), g = qn) : (d < 0 ? E = A : d > 0 && (b = x), v < 0 ? S = N : v > 0 && (k = T), g = Wn), wt.attr("cursor", Zt[p]), B());
          break;
        }
        default:
          return;
      }
      _i();
    }
  }
  function h() {
    var c = this.__brush || { selection: null };
    return c.extent = n.apply(this, arguments), c.dim = t, c;
  }
  return a.extent = function(c) {
    return arguments.length ? (n = typeof c == "function" ? c : Ys([[+c[0][0], +c[0][1]], [+c[1][0], +c[1][1]]]), a) : n;
  }, a.filter = function(c) {
    return arguments.length ? (e = typeof c == "function" ? c : Ys(!!c), a) : e;
  }, a.handleSize = function(c) {
    return arguments.length ? (r = +c, a) : r;
  }, a.on = function() {
    var c = i.on.apply(i, arguments);
    return c === i ? a : c;
  }, a;
}
var qs = Math.cos, Gs = Math.sin, Qf = Math.PI, mi = Qf / 2, Vs = Qf * 2, Ks = Math.max;
function fm(t) {
  return function(n, e) {
    return t(
      n.source.value + n.target.value,
      e.source.value + e.target.value
    );
  };
}
function hm() {
  var t = 0, n = null, e = null, i = null;
  function r(o) {
    var a = o.length, u = [], s = zt(a), l = [], f = [], h = f.groups = new Array(a), c = new Array(a * a), p, g, d, v, y, m;
    for (p = 0, y = -1; ++y < a; ) {
      for (g = 0, m = -1; ++m < a; )
        g += o[y][m];
      u.push(g), l.push(zt(a)), p += g;
    }
    for (n && s.sort(function($, E) {
      return n(u[$], u[E]);
    }), e && l.forEach(function($, E) {
      $.sort(function(A, w) {
        return e(o[E][A], o[E][w]);
      });
    }), p = Ks(0, Vs - t * a) / p, v = p ? t : Vs / a, g = 0, y = -1; ++y < a; ) {
      for (d = g, m = -1; ++m < a; ) {
        var _ = s[y], M = l[_][m], b = o[_][M], x = g, C = g += b * p;
        c[M * a + _] = {
          index: _,
          subindex: M,
          startAngle: x,
          endAngle: C,
          value: b
        };
      }
      h[_] = {
        index: _,
        startAngle: d,
        endAngle: g,
        value: u[_]
      }, g += v;
    }
    for (y = -1; ++y < a; )
      for (m = y - 1; ++m < a; ) {
        var k = c[m * a + y], T = c[y * a + m];
        (k.value || T.value) && f.push(k.value < T.value ? { source: T, target: k } : { source: k, target: T });
      }
    return i ? f.sort(i) : f;
  }
  return r.padAngle = function(o) {
    return arguments.length ? (t = Ks(0, o), r) : t;
  }, r.sortGroups = function(o) {
    return arguments.length ? (n = o, r) : n;
  }, r.sortSubgroups = function(o) {
    return arguments.length ? (e = o, r) : e;
  }, r.sortChords = function(o) {
    return arguments.length ? (o == null ? i = null : (i = fm(o))._ = o, r) : i && i._;
  }, r;
}
var pm = Array.prototype.slice;
function ko(t) {
  return function() {
    return t;
  };
}
function gm(t) {
  return t.source;
}
function dm(t) {
  return t.target;
}
function vm(t) {
  return t.radius;
}
function ym(t) {
  return t.startAngle;
}
function _m(t) {
  return t.endAngle;
}
function mm() {
  var t = gm, n = dm, e = vm, i = ym, r = _m, o = null;
  function a() {
    var u, s = pm.call(arguments), l = t.apply(this, s), f = n.apply(this, s), h = +e.apply(this, (s[0] = l, s)), c = i.apply(this, s) - mi, p = r.apply(this, s) - mi, g = h * qs(c), d = h * Gs(c), v = +e.apply(this, (s[0] = f, s)), y = i.apply(this, s) - mi, m = r.apply(this, s) - mi;
    if (o || (o = u = On()), o.moveTo(g, d), o.arc(0, 0, h, c, p), (c !== y || p !== m) && (o.quadraticCurveTo(0, 0, v * qs(y), v * Gs(y)), o.arc(0, 0, v, y, m)), o.quadraticCurveTo(0, 0, g, d), o.closePath(), u)
      return o = null, u + "" || null;
  }
  return a.radius = function(u) {
    return arguments.length ? (e = typeof u == "function" ? u : ko(+u), a) : e;
  }, a.startAngle = function(u) {
    return arguments.length ? (i = typeof u == "function" ? u : ko(+u), a) : i;
  }, a.endAngle = function(u) {
    return arguments.length ? (r = typeof u == "function" ? u : ko(+u), a) : r;
  }, a.source = function(u) {
    return arguments.length ? (t = u, a) : t;
  }, a.target = function(u) {
    return arguments.length ? (n = u, a) : n;
  }, a.context = function(u) {
    return arguments.length ? (o = u == null ? null : u, a) : o;
  }, a;
}
function Yn() {
  return new ir();
}
function ir() {
  this.reset();
}
ir.prototype = {
  constructor: ir,
  reset: function() {
    this.s = this.t = 0;
  },
  add: function(t) {
    Zs(wi, t, this.t), Zs(this, wi.s, this.s), this.s ? this.t += wi.t : this.s = wi.t;
  },
  valueOf: function() {
    return this.s;
  }
};
var wi = new ir();
function Zs(t, n, e) {
  var i = t.s = n + e, r = i - n, o = i - r;
  t.t = n - o + (e - r);
}
var F = 1e-6, Js = 1e-12, q = Math.PI, ut = q / 2, rr = q / 4, St = q * 2, it = 180 / q, U = q / 180, nt = Math.abs, ve = Math.atan, mt = Math.atan2, I = Math.cos, bi = Math.ceil, jf = Math.exp, or = Math.log, To = Math.pow, z = Math.sin, th = Math.sign || function(t) {
  return t > 0 ? 1 : t < 0 ? -1 : 0;
}, lt = Math.sqrt, _u = Math.tan;
function mu(t) {
  return t > 1 ? 0 : t < -1 ? q : Math.acos(t);
}
function Ut(t) {
  return t > 1 ? ut : t < -1 ? -ut : Math.asin(t);
}
function Qs(t) {
  return (t = z(t / 2)) * t;
}
function ot() {
}
function ar(t, n) {
  t && tl.hasOwnProperty(t.type) && tl[t.type](t, n);
}
var js = {
  Feature: function(t, n) {
    ar(t.geometry, n);
  },
  FeatureCollection: function(t, n) {
    for (var e = t.features, i = -1, r = e.length; ++i < r; )
      ar(e[i].geometry, n);
  }
}, tl = {
  Sphere: function(t, n) {
    n.sphere();
  },
  Point: function(t, n) {
    t = t.coordinates, n.point(t[0], t[1], t[2]);
  },
  MultiPoint: function(t, n) {
    for (var e = t.coordinates, i = -1, r = e.length; ++i < r; )
      t = e[i], n.point(t[0], t[1], t[2]);
  },
  LineString: function(t, n) {
    Jo(t.coordinates, n, 0);
  },
  MultiLineString: function(t, n) {
    for (var e = t.coordinates, i = -1, r = e.length; ++i < r; )
      Jo(e[i], n, 0);
  },
  Polygon: function(t, n) {
    nl(t.coordinates, n);
  },
  MultiPolygon: function(t, n) {
    for (var e = t.coordinates, i = -1, r = e.length; ++i < r; )
      nl(e[i], n);
  },
  GeometryCollection: function(t, n) {
    for (var e = t.geometries, i = -1, r = e.length; ++i < r; )
      ar(e[i], n);
  }
};
function Jo(t, n, e) {
  var i = -1, r = t.length - e, o;
  for (n.lineStart(); ++i < r; )
    o = t[i], n.point(o[0], o[1], o[2]);
  n.lineEnd();
}
function nl(t, n) {
  var e = -1, i = t.length;
  for (n.polygonStart(); ++e < i; )
    Jo(t[e], n, 1);
  n.polygonEnd();
}
function Wt(t, n) {
  t && js.hasOwnProperty(t.type) ? js[t.type](t, n) : ar(t, n);
}
var ur = Yn(), sr = Yn(), nh, eh, Qo, jo, ta, Kt = {
  point: ot,
  lineStart: ot,
  lineEnd: ot,
  polygonStart: function() {
    ur.reset(), Kt.lineStart = wm, Kt.lineEnd = bm;
  },
  polygonEnd: function() {
    var t = +ur;
    sr.add(t < 0 ? St + t : t), this.lineStart = this.lineEnd = this.point = ot;
  },
  sphere: function() {
    sr.add(St);
  }
};
function wm() {
  Kt.point = xm;
}
function bm() {
  ih(nh, eh);
}
function xm(t, n) {
  Kt.point = ih, nh = t, eh = n, t *= U, n *= U, Qo = t, jo = I(n = n / 2 + rr), ta = z(n);
}
function ih(t, n) {
  t *= U, n *= U, n = n / 2 + rr;
  var e = t - Qo, i = e >= 0 ? 1 : -1, r = i * e, o = I(n), a = z(n), u = ta * a, s = jo * o + u * I(r), l = u * i * z(r);
  ur.add(mt(l, s)), Qo = t, jo = o, ta = a;
}
function Mm(t) {
  return sr.reset(), Wt(t, Kt), sr * 2;
}
function lr(t) {
  return [mt(t[1], t[0]), Ut(t[2])];
}
function $n(t) {
  var n = t[0], e = t[1], i = I(e);
  return [i * I(n), i * z(n), z(e)];
}
function xi(t, n) {
  return t[0] * n[0] + t[1] * n[1] + t[2] * n[2];
}
function ce(t, n) {
  return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]];
}
function Ao(t, n) {
  t[0] += n[0], t[1] += n[1], t[2] += n[2];
}
function Mi(t, n) {
  return [t[0] * n, t[1] * n, t[2] * n];
}
function cr(t) {
  var n = lt(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
  t[0] /= n, t[1] /= n, t[2] /= n;
}
var rt, Lt, at, qt, wn, rh, oh, ee, Fe = Yn(), bn, pn, Jt = {
  point: fr,
  lineStart: el,
  lineEnd: il,
  polygonStart: function() {
    Jt.point = uh, Jt.lineStart = Cm, Jt.lineEnd = Sm, Fe.reset(), Kt.polygonStart();
  },
  polygonEnd: function() {
    Kt.polygonEnd(), Jt.point = fr, Jt.lineStart = el, Jt.lineEnd = il, ur < 0 ? (rt = -(at = 180), Lt = -(qt = 90)) : Fe > F ? qt = 90 : Fe < -F && (Lt = -90), pn[0] = rt, pn[1] = at;
  }
};
function fr(t, n) {
  bn.push(pn = [rt = t, at = t]), n < Lt && (Lt = n), n > qt && (qt = n);
}
function ah(t, n) {
  var e = $n([t * U, n * U]);
  if (ee) {
    var i = ce(ee, e), r = [i[1], -i[0], 0], o = ce(r, i);
    cr(o), o = lr(o);
    var a = t - wn, u = a > 0 ? 1 : -1, s = o[0] * it * u, l, f = nt(a) > 180;
    f ^ (u * wn < s && s < u * t) ? (l = o[1] * it, l > qt && (qt = l)) : (s = (s + 360) % 360 - 180, f ^ (u * wn < s && s < u * t) ? (l = -o[1] * it, l < Lt && (Lt = l)) : (n < Lt && (Lt = n), n > qt && (qt = n))), f ? t < wn ? Tt(rt, t) > Tt(rt, at) && (at = t) : Tt(t, at) > Tt(rt, at) && (rt = t) : at >= rt ? (t < rt && (rt = t), t > at && (at = t)) : t > wn ? Tt(rt, t) > Tt(rt, at) && (at = t) : Tt(t, at) > Tt(rt, at) && (rt = t);
  } else
    fr(t, n);
  ee = e, wn = t;
}
function el() {
  Jt.point = ah;
}
function il() {
  pn[0] = rt, pn[1] = at, Jt.point = fr, ee = null;
}
function uh(t, n) {
  if (ee) {
    var e = t - wn;
    Fe.add(nt(e) > 180 ? e + (e > 0 ? 360 : -360) : e);
  } else
    rh = t, oh = n;
  Kt.point(t, n), ah(t, n);
}
function Cm() {
  Kt.lineStart();
}
function Sm() {
  uh(rh, oh), Kt.lineEnd(), nt(Fe) > F && (rt = -(at = 180)), pn[0] = rt, pn[1] = at, ee = null;
}
function Tt(t, n) {
  return (n -= t) < 0 ? n + 360 : n;
}
function km(t, n) {
  return t[0] - n[0];
}
function rl(t, n) {
  return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n;
}
function Tm(t) {
  var n, e, i, r, o, a, u;
  if (qt = at = -(rt = Lt = 1 / 0), bn = [], Wt(t, Jt), e = bn.length) {
    for (bn.sort(km), n = 1, i = bn[0], o = [i]; n < e; ++n)
      r = bn[n], rl(i, r[0]) || rl(i, r[1]) ? (Tt(i[0], r[1]) > Tt(i[0], i[1]) && (i[1] = r[1]), Tt(r[0], i[1]) > Tt(i[0], i[1]) && (i[0] = r[0])) : o.push(i = r);
    for (a = -1 / 0, e = o.length - 1, n = 0, i = o[e]; n <= e; i = r, ++n)
      r = o[n], (u = Tt(i[1], r[0])) > a && (a = u, rt = r[0], at = i[1]);
  }
  return bn = pn = null, rt === 1 / 0 || Lt === 1 / 0 ? [[NaN, NaN], [NaN, NaN]] : [[rt, Lt], [at, qt]];
}
var De, hr, pr, gr, dr, vr, yr, _r, na, ea, ia, sh, lh, vt, yt, _t, It = {
  sphere: ot,
  point: wu,
  lineStart: ol,
  lineEnd: al,
  polygonStart: function() {
    It.lineStart = Nm, It.lineEnd = $m;
  },
  polygonEnd: function() {
    It.lineStart = ol, It.lineEnd = al;
  }
};
function wu(t, n) {
  t *= U, n *= U;
  var e = I(n);
  ui(e * I(t), e * z(t), z(n));
}
function ui(t, n, e) {
  ++De, pr += (t - pr) / De, gr += (n - gr) / De, dr += (e - dr) / De;
}
function ol() {
  It.point = Am;
}
function Am(t, n) {
  t *= U, n *= U;
  var e = I(n);
  vt = e * I(t), yt = e * z(t), _t = z(n), It.point = Em, ui(vt, yt, _t);
}
function Em(t, n) {
  t *= U, n *= U;
  var e = I(n), i = e * I(t), r = e * z(t), o = z(n), a = mt(lt((a = yt * o - _t * r) * a + (a = _t * i - vt * o) * a + (a = vt * r - yt * i) * a), vt * i + yt * r + _t * o);
  hr += a, vr += a * (vt + (vt = i)), yr += a * (yt + (yt = r)), _r += a * (_t + (_t = o)), ui(vt, yt, _t);
}
function al() {
  It.point = wu;
}
function Nm() {
  It.point = Rm;
}
function $m() {
  ch(sh, lh), It.point = wu;
}
function Rm(t, n) {
  sh = t, lh = n, t *= U, n *= U, It.point = ch;
  var e = I(n);
  vt = e * I(t), yt = e * z(t), _t = z(n), ui(vt, yt, _t);
}
function ch(t, n) {
  t *= U, n *= U;
  var e = I(n), i = e * I(t), r = e * z(t), o = z(n), a = yt * o - _t * r, u = _t * i - vt * o, s = vt * r - yt * i, l = lt(a * a + u * u + s * s), f = vt * i + yt * r + _t * o, h = l && -mu(f) / l, c = mt(l, f);
  na += h * a, ea += h * u, ia += h * s, hr += c, vr += c * (vt + (vt = i)), yr += c * (yt + (yt = r)), _r += c * (_t + (_t = o)), ui(vt, yt, _t);
}
function Pm(t) {
  De = hr = pr = gr = dr = vr = yr = _r = na = ea = ia = 0, Wt(t, It);
  var n = na, e = ea, i = ia, r = n * n + e * e + i * i;
  return r < Js && (n = vr, e = yr, i = _r, hr < F && (n = pr, e = gr, i = dr), r = n * n + e * e + i * i, r < Js) ? [NaN, NaN] : [mt(e, n) * it, Ut(i / lt(r)) * it];
}
function Gn(t) {
  return function() {
    return t;
  };
}
function fh(t, n) {
  function e(i, r) {
    return i = t(i, r), n(i[0], i[1]);
  }
  return t.invert && n.invert && (e.invert = function(i, r) {
    return i = n.invert(i, r), i && t.invert(i[0], i[1]);
  }), e;
}
function ra(t, n) {
  return [t > q ? t - St : t < -q ? t + St : t, n];
}
ra.invert = ra;
function bu(t, n, e) {
  return (t %= St) ? n || e ? fh(sl(t), ll(n, e)) : sl(t) : n || e ? ll(n, e) : ra;
}
function ul(t) {
  return function(n, e) {
    return n += t, [n > q ? n - St : n < -q ? n + St : n, e];
  };
}
function sl(t) {
  var n = ul(t);
  return n.invert = ul(-t), n;
}
function ll(t, n) {
  var e = I(t), i = z(t), r = I(n), o = z(n);
  function a(u, s) {
    var l = I(s), f = I(u) * l, h = z(u) * l, c = z(s), p = c * e + f * i;
    return [
      mt(h * r - p * o, f * e - c * i),
      Ut(p * r + h * o)
    ];
  }
  return a.invert = function(u, s) {
    var l = I(s), f = I(u) * l, h = z(u) * l, c = z(s), p = c * r - h * o;
    return [
      mt(h * r + c * o, f * e + p * i),
      Ut(p * e - f * i)
    ];
  }, a;
}
function Om(t) {
  t = bu(t[0] * U, t[1] * U, t.length > 2 ? t[2] * U : 0);
  function n(e) {
    return e = t(e[0] * U, e[1] * U), e[0] *= it, e[1] *= it, e;
  }
  return n.invert = function(e) {
    return e = t.invert(e[0] * U, e[1] * U), e[0] *= it, e[1] *= it, e;
  }, n;
}
function hh(t, n, e, i, r, o) {
  if (!!e) {
    var a = I(n), u = z(n), s = i * e;
    r == null ? (r = n + i * St, o = n - s / 2) : (r = cl(a, r), o = cl(a, o), (i > 0 ? r < o : r > o) && (r += i * St));
    for (var l, f = r; i > 0 ? f > o : f < o; f -= s)
      l = lr([a, -u * I(f), -u * z(f)]), t.point(l[0], l[1]);
  }
}
function cl(t, n) {
  n = $n(n), n[0] -= t, cr(n);
  var e = mu(-n[1]);
  return ((-n[2] < 0 ? -e : e) + St - F) % St;
}
function Dm() {
  var t = Gn([0, 0]), n = Gn(90), e = Gn(6), i, r, o = { point: a };
  function a(s, l) {
    i.push(s = r(s, l)), s[0] *= it, s[1] *= it;
  }
  function u() {
    var s = t.apply(this, arguments), l = n.apply(this, arguments) * U, f = e.apply(this, arguments) * U;
    return i = [], r = bu(-s[0] * U, -s[1] * U, 0).invert, hh(o, l, f, 1), s = { type: "Polygon", coordinates: [i] }, i = r = null, s;
  }
  return u.center = function(s) {
    return arguments.length ? (t = typeof s == "function" ? s : Gn([+s[0], +s[1]]), u) : t;
  }, u.radius = function(s) {
    return arguments.length ? (n = typeof s == "function" ? s : Gn(+s), u) : n;
  }, u.precision = function(s) {
    return arguments.length ? (e = typeof s == "function" ? s : Gn(+s), u) : e;
  }, u;
}
function ph() {
  var t = [], n;
  return {
    point: function(e, i) {
      n.push([e, i]);
    },
    lineStart: function() {
      t.push(n = []);
    },
    lineEnd: ot,
    rejoin: function() {
      t.length > 1 && t.push(t.pop().concat(t.shift()));
    },
    result: function() {
      var e = t;
      return t = [], n = null, e;
    }
  };
}
function zm(t, n, e, i, r, o) {
  var a = t[0], u = t[1], s = n[0], l = n[1], f = 0, h = 1, c = s - a, p = l - u, g;
  if (g = e - a, !(!c && g > 0)) {
    if (g /= c, c < 0) {
      if (g < f)
        return;
      g < h && (h = g);
    } else if (c > 0) {
      if (g > h)
        return;
      g > f && (f = g);
    }
    if (g = r - a, !(!c && g < 0)) {
      if (g /= c, c < 0) {
        if (g > h)
          return;
        g > f && (f = g);
      } else if (c > 0) {
        if (g < f)
          return;
        g < h && (h = g);
      }
      if (g = i - u, !(!p && g > 0)) {
        if (g /= p, p < 0) {
          if (g < f)
            return;
          g < h && (h = g);
        } else if (p > 0) {
          if (g > h)
            return;
          g > f && (f = g);
        }
        if (g = o - u, !(!p && g < 0)) {
          if (g /= p, p < 0) {
            if (g > h)
              return;
            g > f && (f = g);
          } else if (p > 0) {
            if (g < f)
              return;
            g < h && (h = g);
          }
          return f > 0 && (t[0] = a + f * c, t[1] = u + f * p), h < 1 && (n[0] = a + h * c, n[1] = u + h * p), !0;
        }
      }
    }
  }
}
function Di(t, n) {
  return nt(t[0] - n[0]) < F && nt(t[1] - n[1]) < F;
}
function Ci(t, n, e, i) {
  this.x = t, this.z = n, this.o = e, this.e = i, this.v = !1, this.n = this.p = null;
}
function gh(t, n, e, i, r) {
  var o = [], a = [], u, s;
  if (t.forEach(function(g) {
    if (!((d = g.length - 1) <= 0)) {
      var d, v = g[0], y = g[d], m;
      if (Di(v, y)) {
        for (r.lineStart(), u = 0; u < d; ++u)
          r.point((v = g[u])[0], v[1]);
        r.lineEnd();
        return;
      }
      o.push(m = new Ci(v, g, null, !0)), a.push(m.o = new Ci(v, null, m, !1)), o.push(m = new Ci(y, g, null, !1)), a.push(m.o = new Ci(y, null, m, !0));
    }
  }), !!o.length) {
    for (a.sort(n), fl(o), fl(a), u = 0, s = a.length; u < s; ++u)
      a[u].e = e = !e;
    for (var l = o[0], f, h; ; ) {
      for (var c = l, p = !0; c.v; )
        if ((c = c.n) === l)
          return;
      f = c.z, r.lineStart();
      do {
        if (c.v = c.o.v = !0, c.e) {
          if (p)
            for (u = 0, s = f.length; u < s; ++u)
              r.point((h = f[u])[0], h[1]);
          else
            i(c.x, c.n.x, 1, r);
          c = c.n;
        } else {
          if (p)
            for (f = c.p.z, u = f.length - 1; u >= 0; --u)
              r.point((h = f[u])[0], h[1]);
          else
            i(c.x, c.p.x, -1, r);
          c = c.p;
        }
        c = c.o, f = c.z, p = !p;
      } while (!c.v);
      r.lineEnd();
    }
  }
}
function fl(t) {
  if (!!(n = t.length)) {
    for (var n, e = 0, i = t[0], r; ++e < n; )
      i.n = r = t[e], r.p = i, i = r;
    i.n = r = t[0], r.p = i;
  }
}
var ze = 1e9, Si = -ze;
function dh(t, n, e, i) {
  function r(l, f) {
    return t <= l && l <= e && n <= f && f <= i;
  }
  function o(l, f, h, c) {
    var p = 0, g = 0;
    if (l == null || (p = a(l, h)) !== (g = a(f, h)) || s(l, f) < 0 ^ h > 0)
      do
        c.point(p === 0 || p === 3 ? t : e, p > 1 ? i : n);
      while ((p = (p + h + 4) % 4) !== g);
    else
      c.point(f[0], f[1]);
  }
  function a(l, f) {
    return nt(l[0] - t) < F ? f > 0 ? 0 : 3 : nt(l[0] - e) < F ? f > 0 ? 2 : 1 : nt(l[1] - n) < F ? f > 0 ? 1 : 0 : f > 0 ? 3 : 2;
  }
  function u(l, f) {
    return s(l.x, f.x);
  }
  function s(l, f) {
    var h = a(l, 1), c = a(f, 1);
    return h !== c ? h - c : h === 0 ? f[1] - l[1] : h === 1 ? l[0] - f[0] : h === 2 ? l[1] - f[1] : f[0] - l[0];
  }
  return function(l) {
    var f = l, h = ph(), c, p, g, d, v, y, m, _, M, b, x, C = {
      point: k,
      lineStart: A,
      lineEnd: w,
      polygonStart: $,
      polygonEnd: E
    };
    function k(N, R) {
      r(N, R) && f.point(N, R);
    }
    function T() {
      for (var N = 0, R = 0, P = p.length; R < P; ++R)
        for (var H = p[R], X = 1, Q = H.length, V = H[0], j, K, tt = V[0], Z = V[1]; X < Q; ++X)
          j = tt, K = Z, V = H[X], tt = V[0], Z = V[1], K <= i ? Z > i && (tt - j) * (i - K) > (Z - K) * (t - j) && ++N : Z <= i && (tt - j) * (i - K) < (Z - K) * (t - j) && --N;
      return N;
    }
    function $() {
      f = h, c = [], p = [], x = !0;
    }
    function E() {
      var N = T(), R = x && N, P = (c = _a(c)).length;
      (R || P) && (l.polygonStart(), R && (l.lineStart(), o(null, null, 1, l), l.lineEnd()), P && gh(c, u, N, o, l), l.polygonEnd()), f = l, c = p = g = null;
    }
    function A() {
      C.point = S, p && p.push(g = []), b = !0, M = !1, m = _ = NaN;
    }
    function w() {
      c && (S(d, v), y && M && h.rejoin(), c.push(h.result())), C.point = k, M && f.lineEnd();
    }
    function S(N, R) {
      var P = r(N, R);
      if (p && g.push([N, R]), b)
        d = N, v = R, y = P, b = !1, P && (f.lineStart(), f.point(N, R));
      else if (P && M)
        f.point(N, R);
      else {
        var H = [m = Math.max(Si, Math.min(ze, m)), _ = Math.max(Si, Math.min(ze, _))], X = [N = Math.max(Si, Math.min(ze, N)), R = Math.max(Si, Math.min(ze, R))];
        zm(H, X, t, n, e, i) ? (M || (f.lineStart(), f.point(H[0], H[1])), f.point(X[0], X[1]), P || f.lineEnd(), x = !1) : P && (f.lineStart(), f.point(N, R), x = !1);
      }
      m = N, _ = R, M = P;
    }
    return C;
  };
}
function Lm() {
  var t = 0, n = 0, e = 960, i = 500, r, o, a;
  return a = {
    stream: function(u) {
      return r && o === u ? r : r = dh(t, n, e, i)(o = u);
    },
    extent: function(u) {
      return arguments.length ? (t = +u[0][0], n = +u[0][1], e = +u[1][0], i = +u[1][1], r = o = null, a) : [[t, n], [e, i]];
    }
  };
}
var oa = Yn(), aa, zi, Li, fe = {
  sphere: ot,
  point: ot,
  lineStart: Im,
  lineEnd: ot,
  polygonStart: ot,
  polygonEnd: ot
};
function Im() {
  fe.point = Um, fe.lineEnd = Fm;
}
function Fm() {
  fe.point = fe.lineEnd = ot;
}
function Um(t, n) {
  t *= U, n *= U, aa = t, zi = z(n), Li = I(n), fe.point = Ym;
}
function Ym(t, n) {
  t *= U, n *= U;
  var e = z(n), i = I(n), r = nt(t - aa), o = I(r), a = z(r), u = i * a, s = Li * e - zi * i * o, l = zi * e + Li * i * o;
  oa.add(mt(lt(u * u + s * s), l)), aa = t, zi = e, Li = i;
}
function vh(t) {
  return oa.reset(), Wt(t, fe), +oa;
}
var ua = [null, null], Hm = { type: "LineString", coordinates: ua };
function Bm(t, n) {
  return ua[0] = t, ua[1] = n, vh(Hm);
}
function hl(t, n, e) {
  var i = zt(t, n - F, e).concat(n);
  return function(r) {
    return i.map(function(o) {
      return [r, o];
    });
  };
}
function pl(t, n, e) {
  var i = zt(t, n - F, e).concat(n);
  return function(r) {
    return i.map(function(o) {
      return [o, r];
    });
  };
}
function Xm() {
  var t, n, e, i, r, o, a, u, s = 10, l = s, f = 90, h = 360, c, p, g, d, v = 2.5;
  function y() {
    return { type: "MultiLineString", coordinates: m() };
  }
  function m() {
    return zt(bi(i / f) * f, e, f).map(g).concat(zt(bi(u / h) * h, a, h).map(d)).concat(zt(bi(n / s) * s, t, s).filter(function(_) {
      return nt(_ % f) > F;
    }).map(c)).concat(zt(bi(o / l) * l, r, l).filter(function(_) {
      return nt(_ % h) > F;
    }).map(p));
  }
  return y.lines = function() {
    return m().map(function(_) {
      return { type: "LineString", coordinates: _ };
    });
  }, y.outline = function() {
    return {
      type: "Polygon",
      coordinates: [
        g(i).concat(
          d(a).slice(1),
          g(e).reverse().slice(1),
          d(u).reverse().slice(1)
        )
      ]
    };
  }, y.extent = function(_) {
    return arguments.length ? y.extentMajor(_).extentMinor(_) : y.extentMinor();
  }, y.extentMajor = function(_) {
    return arguments.length ? (i = +_[0][0], e = +_[1][0], u = +_[0][1], a = +_[1][1], i > e && (_ = i, i = e, e = _), u > a && (_ = u, u = a, a = _), y.precision(v)) : [[i, u], [e, a]];
  }, y.extentMinor = function(_) {
    return arguments.length ? (n = +_[0][0], t = +_[1][0], o = +_[0][1], r = +_[1][1], n > t && (_ = n, n = t, t = _), o > r && (_ = o, o = r, r = _), y.precision(v)) : [[n, o], [t, r]];
  }, y.step = function(_) {
    return arguments.length ? y.stepMajor(_).stepMinor(_) : y.stepMinor();
  }, y.stepMajor = function(_) {
    return arguments.length ? (f = +_[0], h = +_[1], y) : [f, h];
  }, y.stepMinor = function(_) {
    return arguments.length ? (s = +_[0], l = +_[1], y) : [s, l];
  }, y.precision = function(_) {
    return arguments.length ? (v = +_, c = hl(o, r, 90), p = pl(n, t, v), g = hl(u, a, 90), d = pl(i, e, v), y) : v;
  }, y.extentMajor([[-180, -90 + F], [180, 90 - F]]).extentMinor([[-180, -80 - F], [180, 80 + F]]);
}
function Wm(t, n) {
  var e = t[0] * U, i = t[1] * U, r = n[0] * U, o = n[1] * U, a = I(i), u = z(i), s = I(o), l = z(o), f = a * I(e), h = a * z(e), c = s * I(r), p = s * z(r), g = 2 * Ut(lt(Qs(o - i) + a * s * Qs(r - e))), d = z(g), v = g ? function(y) {
    var m = z(y *= g) / d, _ = z(g - y) / d, M = _ * f + m * c, b = _ * h + m * p, x = _ * u + m * l;
    return [
      mt(b, M) * it,
      mt(x, lt(M * M + b * b)) * it
    ];
  } : function() {
    return [e * it, i * it];
  };
  return v.distance = g, v;
}
function sa(t) {
  return t;
}
var Eo = Yn(), la = Yn(), yh, _h, ca, fa, Qt = {
  point: ot,
  lineStart: ot,
  lineEnd: ot,
  polygonStart: function() {
    Qt.lineStart = qm, Qt.lineEnd = Vm;
  },
  polygonEnd: function() {
    Qt.lineStart = Qt.lineEnd = Qt.point = ot, Eo.add(nt(la)), la.reset();
  },
  result: function() {
    var t = Eo / 2;
    return Eo.reset(), t;
  }
};
function qm() {
  Qt.point = Gm;
}
function Gm(t, n) {
  Qt.point = mh, yh = ca = t, _h = fa = n;
}
function mh(t, n) {
  la.add(fa * t - ca * n), ca = t, fa = n;
}
function Vm() {
  mh(yh, _h);
}
var he = 1 / 0, mr = he, ti = -he, wr = ti, br = {
  point: Km,
  lineStart: ot,
  lineEnd: ot,
  polygonStart: ot,
  polygonEnd: ot,
  result: function() {
    var t = [[he, mr], [ti, wr]];
    return ti = wr = -(mr = he = 1 / 0), t;
  }
};
function Km(t, n) {
  t < he && (he = t), t > ti && (ti = t), n < mr && (mr = n), n > wr && (wr = n);
}
var ha = 0, pa = 0, Le = 0, xr = 0, Mr = 0, Jn = 0, ga = 0, da = 0, Ie = 0, wh, bh, Bt, Xt, Ot = {
  point: Rn,
  lineStart: gl,
  lineEnd: dl,
  polygonStart: function() {
    Ot.lineStart = Qm, Ot.lineEnd = jm;
  },
  polygonEnd: function() {
    Ot.point = Rn, Ot.lineStart = gl, Ot.lineEnd = dl;
  },
  result: function() {
    var t = Ie ? [ga / Ie, da / Ie] : Jn ? [xr / Jn, Mr / Jn] : Le ? [ha / Le, pa / Le] : [NaN, NaN];
    return ha = pa = Le = xr = Mr = Jn = ga = da = Ie = 0, t;
  }
};
function Rn(t, n) {
  ha += t, pa += n, ++Le;
}
function gl() {
  Ot.point = Zm;
}
function Zm(t, n) {
  Ot.point = Jm, Rn(Bt = t, Xt = n);
}
function Jm(t, n) {
  var e = t - Bt, i = n - Xt, r = lt(e * e + i * i);
  xr += r * (Bt + t) / 2, Mr += r * (Xt + n) / 2, Jn += r, Rn(Bt = t, Xt = n);
}
function dl() {
  Ot.point = Rn;
}
function Qm() {
  Ot.point = tw;
}
function jm() {
  xh(wh, bh);
}
function tw(t, n) {
  Ot.point = xh, Rn(wh = Bt = t, bh = Xt = n);
}
function xh(t, n) {
  var e = t - Bt, i = n - Xt, r = lt(e * e + i * i);
  xr += r * (Bt + t) / 2, Mr += r * (Xt + n) / 2, Jn += r, r = Xt * t - Bt * n, ga += r * (Bt + t), da += r * (Xt + n), Ie += r * 3, Rn(Bt = t, Xt = n);
}
function nw(t) {
  var n = 4.5, e = {
    point: i,
    lineStart: function() {
      e.point = r;
    },
    lineEnd: a,
    polygonStart: function() {
      e.lineEnd = u;
    },
    polygonEnd: function() {
      e.lineEnd = a, e.point = i;
    },
    pointRadius: function(s) {
      return n = s, e;
    },
    result: ot
  };
  function i(s, l) {
    t.moveTo(s + n, l), t.arc(s, l, n, 0, St);
  }
  function r(s, l) {
    t.moveTo(s, l), e.point = o;
  }
  function o(s, l) {
    t.lineTo(s, l);
  }
  function a() {
    e.point = i;
  }
  function u() {
    t.closePath();
  }
  return e;
}
function ew() {
  var t = vl(4.5), n = [], e = {
    point: i,
    lineStart: a,
    lineEnd: u,
    polygonStart: function() {
      e.lineEnd = s;
    },
    polygonEnd: function() {
      e.lineEnd = u, e.point = i;
    },
    pointRadius: function(l) {
      return t = vl(l), e;
    },
    result: function() {
      if (n.length) {
        var l = n.join("");
        return n = [], l;
      }
    }
  };
  function i(l, f) {
    n.push("M", l, ",", f, t);
  }
  function r(l, f) {
    n.push("M", l, ",", f), e.point = o;
  }
  function o(l, f) {
    n.push("L", l, ",", f);
  }
  function a() {
    e.point = r;
  }
  function u() {
    e.point = i;
  }
  function s() {
    n.push("Z");
  }
  return e;
}
function vl(t) {
  return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z";
}
function iw() {
  var t = 4.5, n, e, i, r;
  function o(a) {
    return a && (typeof t == "function" && r.pointRadius(+t.apply(this, arguments)), Wt(a, e(r))), r.result();
  }
  return o.area = function(a) {
    return Wt(a, e(Qt)), Qt.result();
  }, o.bounds = function(a) {
    return Wt(a, e(br)), br.result();
  }, o.centroid = function(a) {
    return Wt(a, e(Ot)), Ot.result();
  }, o.projection = function(a) {
    return arguments.length ? (e = (n = a) == null ? sa : a.stream, o) : n;
  }, o.context = function(a) {
    return arguments.length ? (r = (i = a) == null ? new ew() : new nw(a), typeof t != "function" && r.pointRadius(t), o) : i;
  }, o.pointRadius = function(a) {
    return arguments.length ? (t = typeof a == "function" ? a : (r.pointRadius(+a), +a), o) : t;
  }, o.projection(null).context(null);
}
var No = Yn();
function rw(t, n) {
  var e = n[0], i = n[1], r = [z(e), -I(e), 0], o = 0, a = 0;
  No.reset();
  for (var u = 0, s = t.length; u < s; ++u)
    if (!!(f = (l = t[u]).length))
      for (var l, f, h = l[f - 1], c = h[0], p = h[1] / 2 + rr, g = z(p), d = I(p), v = 0; v < f; ++v, c = m, g = M, d = b, h = y) {
        var y = l[v], m = y[0], _ = y[1] / 2 + rr, M = z(_), b = I(_), x = m - c, C = x >= 0 ? 1 : -1, k = C * x, T = k > q, $ = g * M;
        if (No.add(mt($ * C * z(k), d * b + $ * I(k))), o += T ? x + C * St : x, T ^ c >= e ^ m >= e) {
          var E = ce($n(h), $n(y));
          cr(E);
          var A = ce(r, E);
          cr(A);
          var w = (T ^ x >= 0 ? -1 : 1) * Ut(A[2]);
          (i > w || i === w && (E[0] || E[1])) && (a += T ^ x >= 0 ? 1 : -1);
        }
      }
  return (o < -F || o < F && No < -F) ^ a & 1;
}
function Mh(t, n, e, i) {
  return function(r, o) {
    var a = n(o), u = r.invert(i[0], i[1]), s = ph(), l = n(s), f = !1, h, c, p, g = {
      point: d,
      lineStart: y,
      lineEnd: m,
      polygonStart: function() {
        g.point = _, g.lineStart = M, g.lineEnd = b, c = [], h = [];
      },
      polygonEnd: function() {
        g.point = d, g.lineStart = y, g.lineEnd = m, c = _a(c);
        var x = rw(h, u);
        c.length ? (f || (o.polygonStart(), f = !0), gh(c, aw, x, e, o)) : x && (f || (o.polygonStart(), f = !0), o.lineStart(), e(null, null, 1, o), o.lineEnd()), f && (o.polygonEnd(), f = !1), c = h = null;
      },
      sphere: function() {
        o.polygonStart(), o.lineStart(), e(null, null, 1, o), o.lineEnd(), o.polygonEnd();
      }
    };
    function d(x, C) {
      var k = r(x, C);
      t(x = k[0], C = k[1]) && o.point(x, C);
    }
    function v(x, C) {
      var k = r(x, C);
      a.point(k[0], k[1]);
    }
    function y() {
      g.point = v, a.lineStart();
    }
    function m() {
      g.point = d, a.lineEnd();
    }
    function _(x, C) {
      p.push([x, C]);
      var k = r(x, C);
      l.point(k[0], k[1]);
    }
    function M() {
      l.lineStart(), p = [];
    }
    function b() {
      _(p[0][0], p[0][1]), l.lineEnd();
      var x = l.clean(), C = s.result(), k, T = C.length, $, E, A;
      if (p.pop(), h.push(p), p = null, !!T) {
        if (x & 1) {
          if (E = C[0], ($ = E.length - 1) > 0) {
            for (f || (o.polygonStart(), f = !0), o.lineStart(), k = 0; k < $; ++k)
              o.point((A = E[k])[0], A[1]);
            o.lineEnd();
          }
          return;
        }
        T > 1 && x & 2 && C.push(C.pop().concat(C.shift())), c.push(C.filter(ow));
      }
    }
    return g;
  };
}
function ow(t) {
  return t.length > 1;
}
function aw(t, n) {
  return ((t = t.x)[0] < 0 ? t[1] - ut - F : ut - t[1]) - ((n = n.x)[0] < 0 ? n[1] - ut - F : ut - n[1]);
}
const yl = Mh(
  function() {
    return !0;
  },
  uw,
  lw,
  [-q, -ut]
);
function uw(t) {
  var n = NaN, e = NaN, i = NaN, r;
  return {
    lineStart: function() {
      t.lineStart(), r = 1;
    },
    point: function(o, a) {
      var u = o > 0 ? q : -q, s = nt(o - n);
      nt(s - q) < F ? (t.point(n, e = (e + a) / 2 > 0 ? ut : -ut), t.point(i, e), t.lineEnd(), t.lineStart(), t.point(u, e), t.point(o, e), r = 0) : i !== u && s >= q && (nt(n - i) < F && (n -= i * F), nt(o - u) < F && (o -= u * F), e = sw(n, e, o, a), t.point(i, e), t.lineEnd(), t.lineStart(), t.point(u, e), r = 0), t.point(n = o, e = a), i = u;
    },
    lineEnd: function() {
      t.lineEnd(), n = e = NaN;
    },
    clean: function() {
      return 2 - r;
    }
  };
}
function sw(t, n, e, i) {
  var r, o, a = z(t - e);
  return nt(a) > F ? ve((z(n) * (o = I(i)) * z(e) - z(i) * (r = I(n)) * z(t)) / (r * o * a)) : (n + i) / 2;
}
function lw(t, n, e, i) {
  var r;
  if (t == null)
    r = e * ut, i.point(-q, r), i.point(0, r), i.point(q, r), i.point(q, 0), i.point(q, -r), i.point(0, -r), i.point(-q, -r), i.point(-q, 0), i.point(-q, r);
  else if (nt(t[0] - n[0]) > F) {
    var o = t[0] < n[0] ? q : -q;
    r = e * o / 2, i.point(-o, r), i.point(0, r), i.point(o, r);
  } else
    i.point(n[0], n[1]);
}
function cw(t, n) {
  var e = I(t), i = e > 0, r = nt(e) > F;
  function o(f, h, c, p) {
    hh(p, t, n, c, f, h);
  }
  function a(f, h) {
    return I(f) * I(h) > e;
  }
  function u(f) {
    var h, c, p, g, d;
    return {
      lineStart: function() {
        g = p = !1, d = 1;
      },
      point: function(v, y) {
        var m = [v, y], _, M = a(v, y), b = i ? M ? 0 : l(v, y) : M ? l(v + (v < 0 ? q : -q), y) : 0;
        if (!h && (g = p = M) && f.lineStart(), M !== p && (_ = s(h, m), (Di(h, _) || Di(m, _)) && (m[0] += F, m[1] += F, M = a(m[0], m[1]))), M !== p)
          d = 0, M ? (f.lineStart(), _ = s(m, h), f.point(_[0], _[1])) : (_ = s(h, m), f.point(_[0], _[1]), f.lineEnd()), h = _;
        else if (r && h && i ^ M) {
          var x;
          !(b & c) && (x = s(m, h, !0)) && (d = 0, i ? (f.lineStart(), f.point(x[0][0], x[0][1]), f.point(x[1][0], x[1][1]), f.lineEnd()) : (f.point(x[1][0], x[1][1]), f.lineEnd(), f.lineStart(), f.point(x[0][0], x[0][1])));
        }
        M && (!h || !Di(h, m)) && f.point(m[0], m[1]), h = m, p = M, c = b;
      },
      lineEnd: function() {
        p && f.lineEnd(), h = null;
      },
      clean: function() {
        return d | (g && p) << 1;
      }
    };
  }
  function s(f, h, c) {
    var p = $n(f), g = $n(h), d = [1, 0, 0], v = ce(p, g), y = xi(v, v), m = v[0], _ = y - m * m;
    if (!_)
      return !c && f;
    var M = e * y / _, b = -e * m / _, x = ce(d, v), C = Mi(d, M), k = Mi(v, b);
    Ao(C, k);
    var T = x, $ = xi(C, T), E = xi(T, T), A = $ * $ - E * (xi(C, C) - 1);
    if (!(A < 0)) {
      var w = lt(A), S = Mi(T, (-$ - w) / E);
      if (Ao(S, C), S = lr(S), !c)
        return S;
      var N = f[0], R = h[0], P = f[1], H = h[1], X;
      R < N && (X = N, N = R, R = X);
      var Q = R - N, V = nt(Q - q) < F, j = V || Q < F;
      if (!V && H < P && (X = P, P = H, H = X), j ? V ? P + H > 0 ^ S[1] < (nt(S[0] - N) < F ? P : H) : P <= S[1] && S[1] <= H : Q > q ^ (N <= S[0] && S[0] <= R)) {
        var K = Mi(T, (-$ + w) / E);
        return Ao(K, C), [S, lr(K)];
      }
    }
  }
  function l(f, h) {
    var c = i ? t : q - t, p = 0;
    return f < -c ? p |= 1 : f > c && (p |= 2), h < -c ? p |= 4 : h > c && (p |= 8), p;
  }
  return Mh(a, u, o, i ? [0, -t] : [-q, t - q]);
}
function fw(t) {
  return {
    stream: xu(t)
  };
}
function xu(t) {
  function n() {
  }
  var e = n.prototype = Object.create(Ch.prototype);
  for (var i in t)
    e[i] = t[i];
  return function(r) {
    var o = new n();
    return o.stream = r, o;
  };
}
function Ch() {
}
Ch.prototype = {
  point: function(t, n) {
    this.stream.point(t, n);
  },
  sphere: function() {
    this.stream.sphere();
  },
  lineStart: function() {
    this.stream.lineStart();
  },
  lineEnd: function() {
    this.stream.lineEnd();
  },
  polygonStart: function() {
    this.stream.polygonStart();
  },
  polygonEnd: function() {
    this.stream.polygonEnd();
  }
};
function Sh(t, n, e) {
  var i = n[1][0] - n[0][0], r = n[1][1] - n[0][1], o = t.clipExtent && t.clipExtent();
  t.scale(150).translate([0, 0]), o != null && t.clipExtent(null), Wt(e, t.stream(br));
  var a = br.result(), u = Math.min(i / (a[1][0] - a[0][0]), r / (a[1][1] - a[0][1])), s = +n[0][0] + (i - u * (a[1][0] + a[0][0])) / 2, l = +n[0][1] + (r - u * (a[1][1] + a[0][1])) / 2;
  return o != null && t.clipExtent(o), t.scale(u * 150).translate([s, l]);
}
function kh(t) {
  return function(n, e) {
    return Sh(t, [[0, 0], n], e);
  };
}
function Th(t) {
  return function(n, e) {
    return Sh(t, n, e);
  };
}
var _l = 16, hw = I(30 * U);
function ml(t, n) {
  return +n ? gw(t, n) : pw(t);
}
function pw(t) {
  return xu({
    point: function(n, e) {
      n = t(n, e), this.stream.point(n[0], n[1]);
    }
  });
}
function gw(t, n) {
  function e(i, r, o, a, u, s, l, f, h, c, p, g, d, v) {
    var y = l - i, m = f - r, _ = y * y + m * m;
    if (_ > 4 * n && d--) {
      var M = a + c, b = u + p, x = s + g, C = lt(M * M + b * b + x * x), k = Ut(x /= C), T = nt(nt(x) - 1) < F || nt(o - h) < F ? (o + h) / 2 : mt(b, M), $ = t(T, k), E = $[0], A = $[1], w = E - i, S = A - r, N = m * w - y * S;
      (N * N / _ > n || nt((y * w + m * S) / _ - 0.5) > 0.3 || a * c + u * p + s * g < hw) && (e(i, r, o, a, u, s, E, A, T, M /= C, b /= C, x, d, v), v.point(E, A), e(E, A, T, M, b, x, l, f, h, c, p, g, d, v));
    }
  }
  return function(i) {
    var r, o, a, u, s, l, f, h, c, p, g, d, v = {
      point: y,
      lineStart: m,
      lineEnd: M,
      polygonStart: function() {
        i.polygonStart(), v.lineStart = b;
      },
      polygonEnd: function() {
        i.polygonEnd(), v.lineStart = m;
      }
    };
    function y(k, T) {
      k = t(k, T), i.point(k[0], k[1]);
    }
    function m() {
      h = NaN, v.point = _, i.lineStart();
    }
    function _(k, T) {
      var $ = $n([k, T]), E = t(k, T);
      e(h, c, f, p, g, d, h = E[0], c = E[1], f = k, p = $[0], g = $[1], d = $[2], _l, i), i.point(h, c);
    }
    function M() {
      v.point = y, i.lineEnd();
    }
    function b() {
      m(), v.point = x, v.lineEnd = C;
    }
    function x(k, T) {
      _(r = k, T), o = h, a = c, u = p, s = g, l = d, v.point = _;
    }
    function C() {
      e(h, c, f, p, g, d, o, a, r, u, s, l, _l, i), v.lineEnd = M, M();
    }
    return v;
  };
}
var dw = xu({
  point: function(t, n) {
    this.stream.point(t * U, n * U);
  }
});
function yn(t) {
  return Mu(function() {
    return t;
  })();
}
function Mu(t) {
  var n, e = 150, i = 480, r = 250, o, a, u = 0, s = 0, l = 0, f = 0, h = 0, c, p, g = null, d = yl, v = null, y, m, _, M = sa, b = 0.5, x = ml(E, b), C, k;
  function T(S) {
    return S = p(S[0] * U, S[1] * U), [S[0] * e + o, a - S[1] * e];
  }
  function $(S) {
    return S = p.invert((S[0] - o) / e, (a - S[1]) / e), S && [S[0] * it, S[1] * it];
  }
  function E(S, N) {
    return S = n(S, N), [S[0] * e + o, a - S[1] * e];
  }
  T.stream = function(S) {
    return C && k === S ? C : C = dw(d(c, x(M(k = S))));
  }, T.clipAngle = function(S) {
    return arguments.length ? (d = +S ? cw(g = S * U, 6 * U) : (g = null, yl), w()) : g * it;
  }, T.clipExtent = function(S) {
    return arguments.length ? (M = S == null ? (v = y = m = _ = null, sa) : dh(v = +S[0][0], y = +S[0][1], m = +S[1][0], _ = +S[1][1]), w()) : v == null ? null : [[v, y], [m, _]];
  }, T.scale = function(S) {
    return arguments.length ? (e = +S, A()) : e;
  }, T.translate = function(S) {
    return arguments.length ? (i = +S[0], r = +S[1], A()) : [i, r];
  }, T.center = function(S) {
    return arguments.length ? (u = S[0] % 360 * U, s = S[1] % 360 * U, A()) : [u * it, s * it];
  }, T.rotate = function(S) {
    return arguments.length ? (l = S[0] % 360 * U, f = S[1] % 360 * U, h = S.length > 2 ? S[2] % 360 * U : 0, A()) : [l * it, f * it, h * it];
  }, T.precision = function(S) {
    return arguments.length ? (x = ml(E, b = S * S), w()) : lt(b);
  }, T.fitExtent = Th(T), T.fitSize = kh(T);
  function A() {
    p = fh(c = bu(l, f, h), n);
    var S = n(u, s);
    return o = i - S[0] * e, a = r + S[1] * e, w();
  }
  function w() {
    return C = k = null, T;
  }
  return function() {
    return n = t.apply(this, arguments), T.invert = n.invert && $, A();
  };
}
function Cu(t) {
  var n = 0, e = q / 3, i = Mu(t), r = i(n, e);
  return r.parallels = function(o) {
    return arguments.length ? i(n = o[0] * U, e = o[1] * U) : [n * it, e * it];
  }, r;
}
function Ah(t, n) {
  var e = z(t), i = (e + z(n)) / 2, r = 1 + e * (2 * i - e), o = lt(r) / i;
  function a(u, s) {
    var l = lt(r - 2 * i * z(s)) / i;
    return [l * z(u *= i), o - l * I(u)];
  }
  return a.invert = function(u, s) {
    var l = o - s;
    return [mt(u, l) / i, Ut((r - (u * u + l * l) * i * i) / (2 * i))];
  }, a;
}
function Cr() {
  return Cu(Ah).scale(155.424).center([0, 33.6442]);
}
function Eh() {
  return Cr().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-0.6, 38.7]);
}
function vw(t) {
  var n = t.length;
  return {
    point: function(e, i) {
      for (var r = -1; ++r < n; )
        t[r].point(e, i);
    },
    sphere: function() {
      for (var e = -1; ++e < n; )
        t[e].sphere();
    },
    lineStart: function() {
      for (var e = -1; ++e < n; )
        t[e].lineStart();
    },
    lineEnd: function() {
      for (var e = -1; ++e < n; )
        t[e].lineEnd();
    },
    polygonStart: function() {
      for (var e = -1; ++e < n; )
        t[e].polygonStart();
    },
    polygonEnd: function() {
      for (var e = -1; ++e < n; )
        t[e].polygonEnd();
    }
  };
}
function yw() {
  var t, n, e = Eh(), i, r = Cr().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), o, a = Cr().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), u, s, l = { point: function(h, c) {
    s = [h, c];
  } };
  function f(h) {
    var c = h[0], p = h[1];
    return s = null, i.point(c, p), s || (o.point(c, p), s) || (u.point(c, p), s);
  }
  return f.invert = function(h) {
    var c = e.scale(), p = e.translate(), g = (h[0] - p[0]) / c, d = (h[1] - p[1]) / c;
    return (d >= 0.12 && d < 0.234 && g >= -0.425 && g < -0.214 ? r : d >= 0.166 && d < 0.234 && g >= -0.214 && g < -0.115 ? a : e).invert(h);
  }, f.stream = function(h) {
    return t && n === h ? t : t = vw([e.stream(n = h), r.stream(h), a.stream(h)]);
  }, f.precision = function(h) {
    return arguments.length ? (e.precision(h), r.precision(h), a.precision(h), f) : e.precision();
  }, f.scale = function(h) {
    return arguments.length ? (e.scale(h), r.scale(h * 0.35), a.scale(h), f.translate(e.translate())) : e.scale();
  }, f.translate = function(h) {
    if (!arguments.length)
      return e.translate();
    var c = e.scale(), p = +h[0], g = +h[1];
    return i = e.translate(h).clipExtent([[p - 0.455 * c, g - 0.238 * c], [p + 0.455 * c, g + 0.238 * c]]).stream(l), o = r.translate([p - 0.307 * c, g + 0.201 * c]).clipExtent([[p - 0.425 * c + F, g + 0.12 * c + F], [p - 0.214 * c - F, g + 0.234 * c - F]]).stream(l), u = a.translate([p - 0.205 * c, g + 0.212 * c]).clipExtent([[p - 0.214 * c + F, g + 0.166 * c + F], [p - 0.115 * c - F, g + 0.234 * c - F]]).stream(l), f;
  }, f.fitExtent = Th(f), f.fitSize = kh(f), f.scale(1070);
}
function Nh(t) {
  return function(n, e) {
    var i = I(n), r = I(e), o = t(i * r);
    return [
      o * r * z(n),
      o * z(e)
    ];
  };
}
function si(t) {
  return function(n, e) {
    var i = lt(n * n + e * e), r = t(i), o = z(r), a = I(r);
    return [
      mt(n * o, i * a),
      Ut(i && e * o / i)
    ];
  };
}
var Su = Nh(function(t) {
  return lt(2 / (1 + t));
});
Su.invert = si(function(t) {
  return 2 * Ut(t / 2);
});
function _w() {
  return yn(Su).scale(124.75).clipAngle(180 - 1e-3);
}
var ku = Nh(function(t) {
  return (t = mu(t)) && t / z(t);
});
ku.invert = si(function(t) {
  return t;
});
function mw() {
  return yn(ku).scale(79.4188).clipAngle(180 - 1e-3);
}
function Jr(t, n) {
  return [t, or(_u((ut + n) / 2))];
}
Jr.invert = function(t, n) {
  return [t, 2 * ve(jf(n)) - ut];
};
function ww() {
  return $h(Jr).scale(961 / St);
}
function $h(t) {
  var n = yn(t), e = n.scale, i = n.translate, r = n.clipExtent, o;
  return n.scale = function(a) {
    return arguments.length ? (e(a), o && n.clipExtent(null), n) : e();
  }, n.translate = function(a) {
    return arguments.length ? (i(a), o && n.clipExtent(null), n) : i();
  }, n.clipExtent = function(a) {
    if (!arguments.length)
      return o ? null : r();
    if (o = a == null) {
      var u = q * e(), s = i();
      a = [[s[0] - u, s[1] - u], [s[0] + u, s[1] + u]];
    }
    return r(a), n;
  }, n.clipExtent(null);
}
function ki(t) {
  return _u((ut + t) / 2);
}
function Rh(t, n) {
  var e = I(t), i = t === n ? z(t) : or(e / I(n)) / or(ki(n) / ki(t)), r = e * To(ki(t), i) / i;
  if (!i)
    return Jr;
  function o(a, u) {
    r > 0 ? u < -ut + F && (u = -ut + F) : u > ut - F && (u = ut - F);
    var s = r / To(ki(u), i);
    return [s * z(i * a), r - s * I(i * a)];
  }
  return o.invert = function(a, u) {
    var s = r - u, l = th(i) * lt(a * a + s * s);
    return [mt(a, s) / i, 2 * ve(To(r / l, 1 / i)) - ut];
  }, o;
}
function bw() {
  return Cu(Rh).scale(109.5).parallels([30, 30]);
}
function ni(t, n) {
  return [t, n];
}
ni.invert = ni;
function xw() {
  return yn(ni).scale(152.63);
}
function Ph(t, n) {
  var e = I(t), i = t === n ? z(t) : (e - I(n)) / (n - t), r = e / i + t;
  if (nt(i) < F)
    return ni;
  function o(a, u) {
    var s = r - u, l = i * a;
    return [s * z(l), r - s * I(l)];
  }
  return o.invert = function(a, u) {
    var s = r - u;
    return [mt(a, s) / i, r - th(i) * lt(a * a + s * s)];
  }, o;
}
function Mw() {
  return Cu(Ph).scale(131.154).center([0, 13.9389]);
}
function Tu(t, n) {
  var e = I(n), i = I(t) * e;
  return [e * z(t) / i, z(n) / i];
}
Tu.invert = si(ve);
function Cw() {
  return yn(Tu).scale(144.049).clipAngle(60);
}
function Au(t, n) {
  return [I(n) * z(t), z(n)];
}
Au.invert = si(Ut);
function Sw() {
  return yn(Au).scale(249.5).clipAngle(90 + F);
}
function Eu(t, n) {
  var e = I(n), i = 1 + I(t) * e;
  return [e * z(t) / i, z(n) / i];
}
Eu.invert = si(function(t) {
  return 2 * ve(t);
});
function kw() {
  return yn(Eu).scale(250).clipAngle(142);
}
function Nu(t, n) {
  return [or(_u((ut + n) / 2)), -t];
}
Nu.invert = function(t, n) {
  return [-n, 2 * ve(jf(t)) - ut];
};
function Tw() {
  var t = $h(Nu), n = t.center, e = t.rotate;
  return t.center = function(i) {
    return arguments.length ? n([-i[1], i[0]]) : (i = n(), [i[1], -i[0]]);
  }, t.rotate = function(i) {
    return arguments.length ? e([i[0], i[1], i.length > 2 ? i[2] + 90 : 90]) : (i = e(), [i[0], i[1], i[2] - 90]);
  }, e([0, 0, 90]).scale(159.155);
}
const wl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  version: Oh,
  bisect: Sn,
  bisectRight: Sn,
  bisectLeft: zh,
  ascending: Pn,
  bisector: ya,
  descending: Lh,
  deviation: Ml,
  extent: Cl,
  histogram: Xh,
  thresholdFreedmanDiaconis: Wh,
  thresholdScott: qh,
  thresholdSturges: kl,
  max: Gh,
  mean: Vh,
  median: Kh,
  merge: _a,
  min: Tl,
  pairs: Zh,
  permute: Jh,
  quantile: Ue,
  range: zt,
  scan: Qh,
  shuffle: jh,
  sum: t0,
  ticks: Sr,
  tickStep: kn,
  transpose: Al,
  variance: xl,
  zip: e0,
  entries: s0,
  keys: a0,
  values: u0,
  map: Gt,
  set: El,
  nest: i0,
  randomUniform: l0,
  randomNormal: Nl,
  randomLogNormal: c0,
  randomBates: f0,
  randomIrwinHall: $l,
  randomExponential: h0,
  easeLinear: p0,
  easeQuad: Du,
  easeQuadIn: g0,
  easeQuadOut: d0,
  easeQuadInOut: Du,
  easeCubic: $o,
  easeCubicIn: v0,
  easeCubicOut: y0,
  easeCubicInOut: $o,
  easePoly: zu,
  easePolyIn: _0,
  easePolyOut: m0,
  easePolyInOut: zu,
  easeSin: Lu,
  easeSinIn: w0,
  easeSinOut: b0,
  easeSinInOut: Lu,
  easeExp: Iu,
  easeExpIn: x0,
  easeExpOut: M0,
  easeExpInOut: Iu,
  easeCircle: Fu,
  easeCircleIn: C0,
  easeCircleOut: S0,
  easeCircleInOut: Fu,
  easeBounce: Ye,
  easeBounceIn: O0,
  easeBounceOut: Ye,
  easeBounceInOut: D0,
  easeBack: Uu,
  easeBackIn: z0,
  easeBackOut: L0,
  easeBackInOut: Uu,
  easeElastic: Yu,
  easeElasticIn: I0,
  easeElasticOut: Yu,
  easeElasticInOut: F0,
  polygonArea: U0,
  polygonCentroid: Y0,
  polygonHull: X0,
  polygonContains: W0,
  polygonLength: q0,
  path: On,
  quadtree: kr,
  queue: zl,
  arc: wp,
  area: Ul,
  line: Sa,
  pie: Mp,
  radialArea: Sp,
  radialLine: Cp,
  symbol: Rp,
  symbols: $p,
  symbolCircle: Ta,
  symbolCross: Bl,
  symbolDiamond: Wl,
  symbolSquare: Vl,
  symbolStar: Gl,
  symbolTriangle: Kl,
  symbolWye: Zl,
  curveBasisClosed: Op,
  curveBasisOpen: Dp,
  curveBasis: Pp,
  curveBundle: zp,
  curveCardinalClosed: Ip,
  curveCardinalOpen: Fp,
  curveCardinal: Lp,
  curveCatmullRomClosed: Yp,
  curveCatmullRomOpen: Hp,
  curveCatmullRom: Up,
  curveLinearClosed: Bp,
  curveLinear: Tr,
  curveMonotoneX: Xp,
  curveMonotoneY: Wp,
  curveNatural: qp,
  curveStep: Gp,
  curveStepAfter: Kp,
  curveStepBefore: Vp,
  stack: Jp,
  stackOffsetExpand: Qp,
  stackOffsetNone: re,
  stackOffsetSilhouette: jp,
  stackOffsetWiggle: t1,
  stackOrderAscending: uc,
  stackOrderDescending: n1,
  stackOrderInsideOut: e1,
  stackOrderNone: oe,
  stackOrderReverse: i1,
  color: fn,
  rgb: He,
  hsl: Wi,
  lab: Gi,
  hcl: Vi,
  cubehelix: Ft,
  interpolate: ii,
  interpolateArray: xc,
  interpolateDate: Mc,
  interpolateNumber: At,
  interpolateObject: Cc,
  interpolateRound: Sc,
  interpolateString: La,
  interpolateTransformCss: Ac,
  interpolateTransformSvg: Ec,
  interpolateZoom: Nc,
  interpolateRgb: Xe,
  interpolateRgbBasis: _1,
  interpolateRgbBasisClosed: m1,
  interpolateHsl: T1,
  interpolateHslLong: A1,
  interpolateLab: E1,
  interpolateHcl: N1,
  interpolateHclLong: $1,
  interpolateCubehelix: R1,
  interpolateCubehelixLong: Rr,
  interpolateBasis: _c,
  interpolateBasisClosed: mc,
  quantize: P1,
  dispatch: dn,
  dsvFormat: Ia,
  csvParse: Dc,
  csvParseRows: F1,
  csvFormat: U1,
  csvFormatRows: Y1,
  tsvParse: zc,
  tsvParseRows: H1,
  tsvFormat: B1,
  tsvFormatRows: X1,
  request: Fa,
  html: G1,
  json: V1,
  text: K1,
  xml: Z1,
  csv: Q1,
  tsv: j1,
  now: ge,
  timer: zr,
  timerFlush: Uc,
  timeout: Yc,
  interval: ig,
  timeInterval: st,
  timeMillisecond: Nn,
  timeMilliseconds: ls,
  timeSecond: Ge,
  timeSeconds: cs,
  timeMinute: Ya,
  timeMinutes: rg,
  timeHour: Ha,
  timeHours: og,
  timeDay: Lr,
  timeDays: ag,
  timeWeek: Ve,
  timeWeeks: fs,
  timeSunday: Ve,
  timeSundays: fs,
  timeMonday: Ba,
  timeMondays: ug,
  timeTuesday: Xc,
  timeTuesdays: sg,
  timeWednesday: Wc,
  timeWednesdays: lg,
  timeThursday: qc,
  timeThursdays: cg,
  timeFriday: Gc,
  timeFridays: fg,
  timeSaturday: Vc,
  timeSaturdays: hg,
  timeMonth: Xa,
  timeMonths: pg,
  timeYear: zn,
  timeYears: gg,
  utcMillisecond: Nn,
  utcMilliseconds: ls,
  utcSecond: Ge,
  utcSeconds: cs,
  utcMinute: Wa,
  utcMinutes: dg,
  utcHour: qa,
  utcHours: vg,
  utcDay: Ir,
  utcDays: yg,
  utcWeek: Ke,
  utcWeeks: hs,
  utcSunday: Ke,
  utcSundays: hs,
  utcMonday: Ga,
  utcMondays: _g,
  utcTuesday: Kc,
  utcTuesdays: mg,
  utcWednesday: Zc,
  utcWednesdays: wg,
  utcThursday: Jc,
  utcThursdays: bg,
  utcFriday: Qc,
  utcFridays: xg,
  utcSaturday: jc,
  utcSaturdays: Mg,
  utcMonth: Va,
  utcMonths: Cg,
  utcYear: In,
  utcYears: Sg,
  get format() {
    return Fr;
  },
  get formatPrefix() {
    return Ka;
  },
  formatLocale: rf,
  formatDefaultLocale: of,
  formatSpecifier: Ji,
  precisionFixed: af,
  precisionPrefix: uf,
  precisionRound: sf,
  get timeFormat() {
    return Za;
  },
  get timeParse() {
    return cf;
  },
  get utcFormat() {
    return Ur;
  },
  get utcParse() {
    return Ja;
  },
  isoFormat: wd,
  isoParse: xd,
  timeFormatLocale: lf,
  timeFormatDefaultLocale: ff,
  scaleBand: tu,
  scalePoint: Md,
  scaleIdentity: yf,
  scaleLinear: vf,
  scaleLog: mf,
  scaleOrdinal: ja,
  scaleImplicit: Ho,
  scalePow: iu,
  scaleSqrt: Rd,
  scaleQuantile: wf,
  scaleQuantize: bf,
  scaleThreshold: xf,
  scaleTime: zd,
  scaleUtc: Ld,
  schemeCategory10: Id,
  schemeCategory20b: Fd,
  schemeCategory20c: Ud,
  schemeCategory20: Yd,
  scaleSequential: Mf,
  interpolateCubehelixDefault: Hd,
  interpolateRainbow: Wd,
  interpolateWarm: Bd,
  interpolateCool: Xd,
  interpolateViridis: qd,
  interpolateMagma: Gd,
  interpolateInferno: Vd,
  interpolatePlasma: Kd,
  creator: ou,
  customEvent: Je,
  get event() {
    return L;
  },
  local: Cf,
  matcher: au,
  mouse: on,
  namespace: oi,
  namespaces: Xo,
  select: Nt,
  selectAll: py,
  selection: Fn,
  selector: Xr,
  selectorAll: lu,
  touch: ji,
  touches: gy,
  window: de,
  active: h2,
  interrupt: Cn,
  transition: Lf,
  axisTop: y2,
  axisRight: _2,
  axisBottom: m2,
  axisLeft: w2,
  cluster: A2,
  hierarchy: gu,
  pack: Q2,
  packSiblings: K2,
  packEnclose: Uf,
  partition: j2,
  stratify: i_,
  tree: l_,
  treemap: c_,
  treemapBinary: f_,
  treemapDice: ai,
  treemapSlice: Gr,
  treemapSliceDice: h_,
  treemapSquarify: qf,
  treemapResquarify: p_,
  forceCenter: g_,
  forceCollide: y_,
  forceLink: m_,
  forceManyBody: S_,
  forceSimulation: C_,
  forceX: k_,
  forceY: T_,
  drag: $_,
  dragDisable: Vr,
  dragEnable: Kr,
  voronoi: Z_,
  zoom: tm,
  zoomIdentity: vu,
  zoomTransform: Jf,
  brush: cm,
  brushX: sm,
  brushY: lm,
  brushSelection: um,
  chord: hm,
  ribbon: mm,
  geoAlbers: Eh,
  geoAlbersUsa: yw,
  geoArea: Mm,
  geoAzimuthalEqualArea: _w,
  geoAzimuthalEqualAreaRaw: Su,
  geoAzimuthalEquidistant: mw,
  geoAzimuthalEquidistantRaw: ku,
  geoBounds: Tm,
  geoCentroid: Pm,
  geoCircle: Dm,
  geoClipExtent: Lm,
  geoConicConformal: bw,
  geoConicConformalRaw: Rh,
  geoConicEqualArea: Cr,
  geoConicEqualAreaRaw: Ah,
  geoConicEquidistant: Mw,
  geoConicEquidistantRaw: Ph,
  geoDistance: Bm,
  geoEquirectangular: xw,
  geoEquirectangularRaw: ni,
  geoGnomonic: Cw,
  geoGnomonicRaw: Tu,
  geoGraticule: Xm,
  geoInterpolate: Wm,
  geoLength: vh,
  geoMercator: ww,
  geoMercatorRaw: Jr,
  geoOrthographic: Sw,
  geoOrthographicRaw: Au,
  geoPath: iw,
  geoProjection: yn,
  geoProjectionMutator: Mu,
  geoRotation: Om,
  geoStereographic: kw,
  geoStereographicRaw: Eu,
  geoStream: Wt,
  geoTransform: fw,
  geoTransverseMercator: Tw,
  geoTransverseMercatorRaw: Nu
}, Symbol.toStringTag, { value: "Module" }));
function G(t, n, e) {
  typeof e > "u" && (e = n, n = void 0);
  var i = typeof t < "u" ? t : n;
  if (typeof i > "u")
    return null;
  if (typeof i == "function") {
    var r = [e];
    return e.geography && (r = [e.geography, e.data]), i.apply(null, r);
  } else
    return i;
}
const $u = [
  {
    name: "N. Virginia",
    full_name: "US East (N. Virginia)",
    code: "us-east-1",
    key: "USE1",
    public: !0,
    zones: [
      "us-east-1a",
      "us-east-1b",
      "us-east-1c",
      "us-east-1d",
      "us-east-1e",
      "us-east-1f"
    ],
    coordinates: {
      longitude: -90.20607,
      latitude: 39.946
    }
  },
  {
    name: "Ohio",
    full_name: "US East (Ohio)",
    key: "USE2",
    code: "us-east-2",
    public: !0,
    zones: [
      "us-east-2a",
      "us-east-2b",
      "us-east-2c"
    ],
    coordinates: {
      longitude: -89.46344,
      latitude: 41.50396
    }
  },
  {
    name: "N. California",
    full_name: "US West (N. California)",
    key: "USW1",
    code: "us-west-1",
    public: !0,
    zone_limit: 2,
    zones: [
      "us-west-1a",
      "us-west-1b",
      "us-west-1c"
    ],
    coordinates: {
      longitude: -92.57275,
      latitude: 38.62998
    }
  },
  {
    name: "Oregon",
    full_name: "US West (Oregon)",
    key: "USW2",
    code: "us-west-2",
    public: !0,
    zones: [
      "us-west-2a",
      "us-west-2b",
      "us-west-2c",
      "us-west-2d"
    ],
    coordinates: {
      longitude: -122.62206,
      latitude: 45.32745
    }
  },
  {
    name: "GovCloud West",
    full_name: "AWS GovCloud (US)",
    key: "UGW1",
    code: "us-gov-west-1",
    public: !1,
    zones: [
      "us-gov-west-1a",
      "us-gov-west-1b",
      "us-gov-west-1c"
    ],
    coordinates: {
      longitude: -97.09434,
      latitude: 31.78395
    }
  },
  {
    name: "GovCloud East",
    full_name: "AWS GovCloud (US-East)",
    key: "UGE1",
    code: "us-gov-east-1",
    public: !1,
    zones: [
      "us-gov-east-1a",
      "us-gov-east-1b",
      "us-gov-east-1c"
    ],
    coordinates: {
      longitude: -109.99673,
      latitude: 53.2663
    }
  },
  {
    name: "Canada",
    full_name: "Canada (Central)",
    key: "CAN1",
    code: "ca-central-1",
    public: !0,
    zones: [
      "ca-central-1a",
      "ca-central-1b"
    ],
    coordinates: {
      longitude: -105.53215,
      latitude: 50.40277
    }
  },
  {
    name: "Stockholm",
    full_name: "EU (Stockholm)",
    key: "EUN1",
    code: "eu-north-1",
    public: !0,
    zones: [
      "eu-north-1a",
      "eu-north-1b",
      "eu-north-1c"
    ],
    coordinates: {
      longitude: 18.04856,
      latitude: 59.33097
    }
  },
  {
    name: "Ireland",
    full_name: "EU (Ireland)",
    key: "EU",
    code: "eu-west-1",
    public: !0,
    zones: [
      "eu-west-1a",
      "eu-west-1b",
      "eu-west-1c"
    ],
    coordinates: {
      longitude: -6.266155,
      latitude: 53.35014
    }
  },
  {
    name: "London",
    full_name: "EU (London)",
    key: "EUW2",
    code: "eu-west-2",
    public: !0,
    zones: [
      "eu-west-2a",
      "eu-west-2b",
      "eu-west-2c"
    ],
    coordinates: {
      longitude: -0.11362,
      latitude: 51.51768
    }
  },
  {
    name: "Paris",
    full_name: "EU (Paris)",
    key: "EUW3",
    code: "eu-west-3",
    public: !0,
    zones: [
      "eu-west-3a",
      "eu-west-3b",
      "eu-west-3c"
    ],
    coordinates: {
      longitude: 2.34293,
      latitude: 48.85717
    }
  },
  {
    name: "Frankfurt",
    full_name: "EU (Frankfurt)",
    key: "EUC1",
    code: "eu-central-1",
    public: !0,
    zones: [
      "eu-central-1a",
      "eu-central-1b",
      "eu-central-1c"
    ],
    coordinates: {
      longitude: 8.65399,
      latitude: 50.12581
    }
  },
  {
    name: "Tokyo",
    full_name: "Asia Pacific (Tokyo)",
    key: "APN1",
    code: "ap-northeast-1",
    public: !0,
    zone_limit: 3,
    zones: [
      "ap-northeast-1a",
      "ap-northeast-1b",
      "ap-northeast-1c",
      "ap-northeast-1d"
    ],
    coordinates: {
      longitude: 139.68872,
      latitude: 35.68052
    }
  },
  {
    name: "Seoul",
    full_name: "Asia Pacific (Seoul)",
    key: "APN2",
    code: "ap-northeast-2",
    public: !0,
    zones: [
      "ap-northeast-2a",
      "ap-northeast-2b",
      "ap-northeast-2c"
    ],
    coordinates: {
      longitude: 126.99272,
      latitude: 37.57444
    }
  },
  {
    name: "Osaka",
    full_name: "Asia Pacific (Osaka-Local)",
    key: "APN3",
    code: "ap-northeast-3",
    public: !1,
    zones: [
      "ap-northeast-3a"
    ],
    coordinates: {
      longitude: 135.50674,
      latitude: 34.69857
    }
  },
  {
    name: "Singapore",
    full_name: "Asia Pacific (Singapore)",
    key: "APS1",
    code: "ap-southeast-1",
    public: !0,
    zones: [
      "ap-southeast-1a",
      "ap-southeast-1b",
      "ap-southeast-1c"
    ],
    coordinates: {
      longitude: 103.851959,
      latitude: 1.29027
    }
  },
  {
    name: "Sydney",
    full_name: "Asia Pacific (Sydney)",
    key: "APS2",
    code: "ap-southeast-2",
    public: !0,
    zones: [
      "ap-southeast-2a",
      "ap-southeast-2b",
      "ap-southeast-2c"
    ],
    coordinates: {
      longitude: -60.1856,
      latitude: 46.13527
    }
  },
  {
    name: "Hong Kong",
    full_name: "Asia Pacific (Hong Kong)",
    key: "APE1",
    code: "ap-east-1",
    public: !0,
    zones: [
      "ap-east-1a",
      "ap-east-1b",
      "ap-east-1c"
    ],
    coordinates: {
      longitude: 114.13624,
      latitude: 22.25424
    }
  },
  {
    name: "Mumbai",
    full_name: "Asia Pacific (Mumbai)",
    key: "APS3",
    code: "ap-south-1",
    public: !0,
    zones: [
      "ap-south-1a",
      "ap-south-1b",
      "ap-south-1c"
    ],
    coordinates: {
      longitude: 72.8673,
      latitude: 19.07257
    }
  },
  {
    name: "S\xE3o Paulo",
    full_name: "South America (S\xE3o Paulo)",
    key: "SAE1",
    code: "sa-east-1",
    public: !0,
    zone_limit: 2,
    zones: [
      "sa-east-1a",
      "sa-east-1b",
      "sa-east-1c"
    ],
    coordinates: {
      longitude: -37.54154,
      latitude: -10.5442
    }
  },
  {
    name: "Bahrain",
    full_name: "Middle East (Bahrain)",
    key: "MES1",
    code: "me-south-1",
    public: !0,
    zones: [
      "me-south-1a",
      "me-south-1b",
      "me-south-1c"
    ],
    coordinates: {
      longitude: 25.9304142,
      latitude: 50.6377716
    }
  },
  {
    name: "Beijing",
    full_name: "China (Beijing)",
    key: "CNN1",
    code: "cn-north-1",
    public: !1,
    zones: [
      "cn-north-1a",
      "cn-north-1b"
    ],
    coordinates: {
      longitude: 116.3857,
      latitude: 39.90388
    }
  },
  {
    name: "Ningxia",
    full_name: "China (Ningxia)",
    key: "CNN1",
    code: "cn-northwest-1",
    public: !1,
    zones: [
      "cn-northwest-1a",
      "cn-northwest-1b",
      "cn-northwest-1c"
    ],
    coordinates: {
      longitude: 106.24929,
      latitude: 38.4888
    }
  }
], Aw = {
  props: {
    scope: {
      type: String,
      default: "world"
    },
    setProjection: {
      type: Function,
      default: function(t, n) {
        let e = null, i = null;
        return this.scope === "usa" ? e = t.geoAlbersUsa().scale(this.svgWidth).translate([this.svgWidth / 2, this.svgHeight / 2]) : this.scope === "world" && (e = t[`geo${this.projection}`]().scale((this.svgWidth + 1) / 2 / Math.PI).translate([this.svgWidth / 2, this.svgHeight / (this.projection === "Mercator" ? 1.45 : 1.8)])), this.projection === "Orthographic" && (this.svg.append("defs").append("path").datum({ type: "Sphere" }).attr("id", "sphere").attr("d", i), this.svg.append("use").attr("class", "stroke").attr("xlink:href", "#sphere"), this.svg.append("use").attr("class", "fill").attr("xlink:href", "#sphere"), e.scale(this.svgWidth / Math.PI * 0.9).clipAngle(90).rotate(this.projectionConfigOptions.rotation)), i = t.geoPath().projection(e), { projection: e, path: i };
      }
    },
    projection: {
      type: String,
      default: "Equirectangular"
    },
    dataType: {
      type: String,
      default: "json"
    },
    data: {
      type: Object,
      default: function() {
        return {};
      }
    },
    done: {
      type: Function,
      default: function() {
        return {};
      }
    },
    fills: {
      type: Object,
      default: function() {
        return {
          authorHasTraveledTo: "#fa0fa0",
          defaultFill: "#ABDDA4"
        };
      }
    },
    geographyConfig: {
      type: Object
    },
    projectionConfig: {
      type: Object
    },
    bubblesConfig: {
      type: Object
    },
    bubbles: {
      type: Boolean,
      default: !1
    },
    arcConfig: {
      type: Object
    },
    arc: {
      type: Boolean,
      default: !1
    },
    disableDefaultStyles: {
      type: Boolean,
      default: !1
    },
    labelsConfig: {
      type: Object
    },
    labels: {
      type: Boolean,
      default: !1
    },
    awsRegions: {
      type: Boolean,
      default: !1
    },
    awsRegionsConfig: {
      type: Object
    },
    popupTemplate: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      defaultFill: "#ABDDA4",
      default: {
        geographyConfig: {
          dataUrl: null,
          hideAntarctica: !0,
          hideHawaiiAndAlaska: !1,
          borderWidth: 1,
          borderOpacity: 1,
          borderColor: "#FDFDFD",
          popupOnHover: !0,
          highlightOnHover: !0,
          highlightFillColor: "#FC8D59",
          highlightBorderColor: "rgba(250, 15, 160, 0.2)",
          highlightBorderWidth: 2,
          highlightBorderOpacity: 1,
          highlightFillOpacity: 0.85
        },
        projectionConfig: {
          rotation: [97, 0]
        },
        bubblesConfig: {
          borderWidth: 2,
          borderOpacity: 1,
          borderColor: "#FFFFFF",
          popupOnHover: !0,
          radius: null,
          fillOpacity: 0.75,
          animate: !0,
          highlightOnHover: !0,
          highlightFillColor: "#FC8D59",
          highlightBorderColor: "rgba(250, 15, 160, 0.2)",
          highlightBorderWidth: 2,
          highlightBorderOpacity: 1,
          highlightFillOpacity: 0.85,
          exitDelay: 100,
          key: JSON.stringify,
          data: []
        },
        arcConfig: {
          strokeColor: "#DD1C77",
          strokeWidth: 1,
          arcSharpness: 1,
          animationSpeed: 600,
          popupOnHover: !1,
          data: []
        },
        labelsConfig: {
          fontSize: 10,
          fontFamily: "Verdana",
          labelColor: "#000",
          lineWidth: 1
        },
        awsRegionsConfig: {
          borderWidth: 1.5,
          borderOpacity: 1,
          borderColor: "#0b5fd6",
          popupOnHover: !1,
          fillOpacity: 1,
          showPrivateRegions: !1,
          data: [],
          region: null
        }
      }
    };
  },
  computed: {
    regionsMap: function() {
      return $u.reduce((t, n) => (t[n.code] = n, t), {});
    },
    geograpphyConfigOptions() {
      return {
        ...this.default.geographyConfig,
        ...this.geographyConfig
      };
    },
    projectionConfigOptions() {
      return {
        ...this.default.projectionConfig,
        ...this.projectionConfig
      };
    },
    bubblesConfigOptions() {
      return {
        ...this.default.bubblesConfig,
        ...this.bubblesConfig,
        fills: this.fills
      };
    },
    arcConfigOptions() {
      return {
        ...this.default.arcConfig,
        ...this.arcConfig
      };
    },
    labelsConfigOptions() {
      return {
        ...this.default.labelsConfig,
        ...this.labelsConfig
      };
    },
    awsRegionsConfigOptions() {
      return {
        ...this.default.awsRegionsConfig,
        ...this.awsRegionsConfig,
        fills: this.fills
      };
    }
  }
};
function li(t, n, e, i, r, o, a, u) {
  var s = typeof t == "function" ? t.options : t;
  n && (s.render = n, s.staticRenderFns = e, s._compiled = !0), i && (s.functional = !0), o && (s._scopeId = "data-v-" + o);
  var l;
  if (a ? (l = function(c) {
    c = c || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !c && typeof __VUE_SSR_CONTEXT__ < "u" && (c = __VUE_SSR_CONTEXT__), r && r.call(this, c), c && c._registeredComponents && c._registeredComponents.add(a);
  }, s._ssrRegister = l) : r && (l = u ? function() {
    r.call(
      this,
      (s.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : r), l)
    if (s.functional) {
      s._injectStyles = l;
      var f = s.render;
      s.render = function(p, g) {
        return l.call(g), f(p, g);
      };
    } else {
      var h = s.beforeCreate;
      s.beforeCreate = h ? [].concat(h, l) : [l];
    }
  return {
    exports: t,
    options: s
  };
}
const Ew = {
  name: "layer-label",
  props: ["labelsConfig", "data", "projection", "path"],
  computed: {
    labelStartCoodinates() {
      return this.projection([-67.707617, 42.722131]);
    }
  },
  methods: {
    x(t) {
      const n = ["FL", "KY", "MI"].indexOf(t.id) > -1 ? -2.5 : t.id === "NY" ? -1 : t.id === "LA" ? 13 : 7.5;
      return this.smallStateIndex(t) > -1 ? this.labelStartCoodinates[0] : this.center(t)[0] - n;
    },
    y(t) {
      const n = t.id === "MI" ? 18 : 5;
      return this.smallStateIndex(t) > -1 ? this.labelStartCoodinates[1] + this.smallStateIndex(t) * (2 + this.labelsConfig.fontSize) : this.center(t)[1] + n;
    },
    smallStateIndex(t) {
      return ["VT", "NH", "MA", "RI", "CT", "NJ", "DE", "MD", "DC"].indexOf(t.id);
    },
    center(t) {
      return t.properties.iso === "USA" ? this.projection([-98.58333, 39.83333]) : this.path.centroid(t);
    }
  }
};
var Nw = function() {
  var n = this, e = n._self._c;
  return e("g", { staticClass: "labels" }, [n._l(n.data, function(i, r) {
    return [n.smallStateIndex(i) > -1 ? e("line", { key: `line-${r}`, style: `stroke:${n.labelsConfig.labelColor};stroke-width:${n.labelsConfig.lineWidth};`, attrs: { x1: n.x(i) - 3, y1: n.y(i) - 5, x2: n.center(i)[0], y2: n.center(i)[1] } }) : n._e(), [e("text", { key: `text-${r}`, style: `font-size:${n.labelsConfig.fontSize}px;font-family:${n.labelsConfig.fontFamily};fill:${n.labelsConfig.labelColor}`, attrs: { x: n.x(i), y: n.y(i) } }, [n._v(" " + n._s(i.id) + " ")])]];
  })], 2);
}, $w = [], Rw = /* @__PURE__ */ li(
  Ew,
  Nw,
  $w,
  !1,
  null,
  null,
  null,
  null
);
const Pw = Rw.exports;
const Ow = {
  name: "layer-bubble",
  props: ["bubblesConfig", "path", "projection", "data"],
  data() {
    return {
      name: "datamaps-bubble",
      styleAttributes: {},
      previousAttributes: {}
    };
  },
  computed: {
    bubbles() {
      return this.$refs[`${this.name}`];
    },
    options() {
      return this.bubblesConfig;
    },
    bubblesData() {
      return this.options.data;
    }
  },
  methods: {
    styles(t, n) {
      const e = {
        stroke: G(t.borderColor, this.options.borderColor, t),
        strokeWidth: G(t.borderWidth, this.options.borderWidth, t),
        strokeOpacity: G(t.borderOpacity, this.options.highlightBorderOpacity, t),
        fill: this.options.fills[G(t.fillKey, this.options.fillKey, t)] || this.options.fills.defaultFill,
        fillOpacity: G(t.fillOpacity, this.options.highlightFillOpacity, t)
      };
      this.$set(this.styleAttributes, n, e);
    },
    radius(t) {
      return G(t.radius, this.options.radius, t);
    },
    datumHasCoords(t) {
      return typeof t < "u" && typeof t.latitude < "u" && typeof t.longitude < "u";
    },
    latLngToXY(t, n) {
      return this.projection([n, t]);
    },
    latLng(t) {
      return t.region && this.data[t.region] ? this.latLngToXY(this.data[t.region].coordinates.latitude, this.data[t.region].coordinates.longitude) : t.region && !this.data[t.region] ? this.latLngToXY(t.coordinates.latitude, t.coordinates.longitude) : this.datumHasCoords(t) ? this.latLngToXY(t.latitude, t.longitude) : t.centered === "USA" ? this.projection([-98.58333, 39.83333]) : this.path.centroid(this.data[t.centered]);
    },
    handleMouseOver(t, n, e) {
      const i = t.target, r = {
        fill: i.style.fill,
        stroke: i.style.stroke,
        strokeWidth: i.style.strokeWidth,
        fillOpacity: i.style.fillOpacity
      };
      this.$set(this.previousAttributes, e, r);
      const { highlightOnHover: o, popupOnHover: a, highlightFillColor: u, highlightBorderColor: s, highlightBorderWidth: l, highlightBorderOpacity: f, highlightFillOpacity: h } = this.options;
      if (o || a) {
        const c = {
          fill: G(n.highlightFillColor, u, n),
          stroke: G(n.highlightBorderColor, s, n),
          strokeWidth: G(n.highlightBorderWidth, l, n),
          strokeOpacity: G(n.highlightBorderOpacity, f, n),
          fillOpacity: G(n.highlightFillOpacity, h, n)
        };
        this.$set(this.styleAttributes, e, c);
      }
      a && this.$emit("show:popup", { event: t, datum: n });
    },
    handleMouseOut(t) {
      const { highlightOnHover: n, popupOnHover: e } = this.options;
      if (n) {
        const i = this.previousAttributes[t];
        this.$set(this.styleAttributes, t, i);
      }
      e && this.$emit("hide:popup");
    },
    handleClickCallback(t, n, e) {
      this.$emit("click:bubble", { event: t, item: n, index: e });
    }
  },
  watch: {
    bubblesData: {
      handler(t, n) {
        t.forEach((e, i) => {
          this.styles(e, i);
        });
      },
      immediate: !0
    }
  }
};
var Dw = function() {
  var n = this, e = n._self._c;
  return e("g", { staticClass: "bubbles" }, n._l(n.bubblesData, function(i, r) {
    return e("circle", { key: r, ref: `${n.name}`, refInFor: !0, class: n.name, staticStyle: { cursor: "pointer" }, style: n.styleAttributes[r], attrs: { cx: n.latLng(i)[0], cy: n.latLng(i)[1], r: n.radius(i) }, on: { click: function(o) {
      return n.handleClickCallback(o, i, r);
    }, mouseover: function(o) {
      return n.handleMouseOver(o, i, r);
    }, mouseout: function(o) {
      return n.handleMouseOut(r);
    } } }, [e("animate", { attrs: { attributeName: "r", begin: "0s", dur: "400ms", from: "0", to: n.radius(i) } })]);
  }), 0);
}, zw = [], Lw = /* @__PURE__ */ li(
  Ow,
  Dw,
  zw,
  !1,
  null,
  null,
  null,
  null
);
const Iw = Lw.exports;
const Fw = {
  name: "layer-arc",
  props: ["arcConfig", "path", "projection", "data", "awsRegions"],
  data() {
    return {
      name: "datamaps-arc",
      styleAttributes: {}
    };
  },
  computed: {
    options() {
      return this.arcConfig;
    },
    arcData() {
      return this.options.data.map((t) => ({
        origin: t.origin,
        destination: t.destination,
        color: t.color,
        ...t.options
      }));
    }
  },
  mounted() {
    this.arcData.forEach((t, n) => {
      this.styles(t, n);
    });
  },
  methods: {
    styles(t, n) {
      const e = {
        strokeLinecap: "round",
        stroke: t.color || G(t.strokeColor, this.options.strokeColor, t),
        fill: "none",
        strokeWidth: G(t.strokeWidth, this.options.strokeWidth, t)
      };
      this.$set(this.styleAttributes, n, e);
    },
    latLngToXY(t, n) {
      return this.projection([n, t]);
    },
    pathData(t) {
      let n = [], e = [];
      if (this.awsRegions && typeof t.origin == "string")
        n = this.latLngToXY(this.data[t.origin].coordinates.latitude, this.data[t.origin].coordinates.longitude);
      else if (typeof t.origin == "string")
        switch (t.origin) {
          case "CAN":
            n = this.latLngToXY(56.624472, -114.665293);
            break;
          case "CHL":
            n = this.latLngToXY(-33.44889, -70.669265);
            break;
          case "HRV":
            n = this.latLngToXY(45.815011, 15.981919);
            break;
          case "IDN":
            n = this.latLngToXY(-6.208763, 106.845599);
            break;
          case "JPN":
            n = this.latLngToXY(35.689487, 139.691706);
            break;
          case "MYS":
            n = this.latLngToXY(3.139003, 101.686855);
            break;
          case "NOR":
            n = this.latLngToXY(59.913869, 10.752245);
            break;
          case "USA":
            n = this.latLngToXY(41.140276, -100.760145);
            break;
          case "VNM":
            n = this.latLngToXY(21.027764, 105.83416);
            break;
          default:
            n = this.path.centroid(this.data[t.origin]);
        }
      else
        n = this.latLngToXY(G(t.origin.latitude, t), G(t.origin.longitude, t));
      if (this.awsRegions && typeof t.destination == "string")
        e = this.latLngToXY(this.data[t.destination].coordinates.latitude, this.data[t.destination].coordinates.longitude);
      else if (typeof t.destination == "string")
        switch (t.destination) {
          case "CAN":
            e = this.latLngToXY(56.624472, -114.665293);
            break;
          case "CHL":
            e = this.latLngToXY(-33.44889, -70.669265);
            break;
          case "HRV":
            e = this.latLngToXY(45.815011, 15.981919);
            break;
          case "IDN":
            e = this.latLngToXY(-6.208763, 106.845599);
            break;
          case "JPN":
            e = this.latLngToXY(35.689487, 139.691706);
            break;
          case "MYS":
            e = this.latLngToXY(3.139003, 101.686855);
            break;
          case "NOR":
            e = this.latLngToXY(59.913869, 10.752245);
            break;
          case "USA":
            e = this.latLngToXY(41.140276, -100.760145);
            break;
          case "VNM":
            e = this.latLngToXY(21.027764, 105.83416);
            break;
          default:
            e = this.path.centroid(this.data[t.destination]);
        }
      else
        e = this.latLngToXY(G(t.destination.latitude, t), G(t.destination.longitude, t));
      const i = [(n[0] + e[0]) / 2, (n[1] + e[1]) / 2], r = G(t.arcSharpness, this.options.arcSharpness, t);
      return `M${n[0]}, ${n[1]}S ${i[0] + (n[0] > e[0] ? 40 : -40 * r)}, ${i[1] - 75 * r}, ${e[0]}, ${e[1]}`;
    },
    handleMouseOver(t, n, e) {
      if (this.options.popupOnHover) {
        const i = n.origin || n.id, r = n.destination || n.id;
        this.$emit("show:popup", { event: t, datum: n, origin: this.data[i], destination: this.data[r] });
      }
    },
    handleMouseOut() {
      this.options.popupOnHover && this.$emit("hide:popup");
    }
  },
  watch: {
    arcData: {
      immediate: !0,
      handler(t) {
        this.$nextTick(() => {
          (this.$refs.arc || []).forEach((e, i) => {
            const r = e.getTotalLength();
            e.style.transition = "none", e.style.strokeDasharray = r + " " + r, e.style.strokeDashoffset = r, e.getBoundingClientRect(), e.style.transition = `stroke-dashoffset ${G(t[i].animationSpeed, this.options.animationSpeed, t[i])}ms ease-out 1s`, e.style.strokeDashoffset = 0;
          });
        });
      }
    }
  }
};
var Uw = function() {
  var n = this, e = n._self._c;
  return e("g", { staticClass: "arc" }, n._l(n.arcData, function(i, r) {
    return e("path", { key: r, ref: "arc", refInFor: !0, class: n.name, style: n.styleAttributes[r], attrs: { d: n.pathData(i) }, on: { mouseover: function(o) {
      return n.handleMouseOver(o, i, r);
    }, mouseout: n.handleMouseOut } });
  }), 0);
}, Yw = [], Hw = /* @__PURE__ */ li(
  Fw,
  Uw,
  Yw,
  !1,
  null,
  null,
  null,
  null
);
const Bw = Hw.exports;
const Xw = {
  name: "layer-aws-regions",
  props: ["awsRegionsConfig", "path", "projection", "data"],
  data() {
    return {};
  },
  computed: {
    options() {
      return this.awsRegionsConfig;
    },
    regionData() {
      return this.options.region || $u;
    },
    activeKeys() {
      return this.options.data.map((t) => t.code);
    },
    filterdData() {
      const t = (i) => i.public, n = (i) => i.coordinates && this.activeKeys.includes(i.code);
      return (this.options.showPrivateRegions ? this.regionData : this.regionData.filter(t)).filter(n).map((i) => ({
        ...i,
        ...this.awsRegionsData[i.code]
      }));
    },
    awsRegionsData() {
      return this.options.data.reduce((t, n) => (t[n.code] = n, t), {});
    }
  },
  methods: {
    useClass(t) {
      return {
        use: !!this.awsRegionsData[t.code]
      };
    },
    innerStyles(t, n) {
      return {
        stroke: t.color || G(t.borderColor, this.options.borderColor, t),
        strokeWidth: G(t.borderWidth, this.options.borderWidth, t),
        fill: t.color || this.options.fills[G(t.fillKey, this.options.fillKey, t)] || "transparent",
        fillOpacity: G(t.borderOpacity, this.options.borderOpacity, t)
      };
    },
    outerStyles(t, n) {
      return {
        stroke: this.options.borderColor || t.color || G(t.borderColor, this.options.borderColor, t),
        strokeWidth: G(t.borderWidth, this.options.borderWidth, t),
        fill: "transparent",
        fillOpacity: G(t.borderOpacity, this.options.borderOpacity, t)
      };
    },
    latLngToXY(t, n) {
      return this.projection([n, t]);
    },
    latLng(t) {
      return this.latLngToXY(t.latitude, t.longitude);
    },
    handleMouseOver(t, n) {
      this.options.popupOnHover && this.$emit("show:popup", { event: t, datum: n });
    },
    handleMouseOut() {
      this.options.popupOnHover && this.$emit("hide:popup");
    }
  }
};
var Ww = function() {
  var n = this, e = n._self._c;
  return n.projection ? e("g", { staticClass: "bubbles-aws-regions" }, [n._l(n.filterdData, function(i, r) {
    return e("circle", { key: `${r}-inner`, staticClass: "circle-inner", class: n.useClass(i), style: n.innerStyles(i, r), attrs: { cx: n.latLng(i.coordinates)[0], cy: n.latLng(i.coordinates)[1], r: 3 } }, [e("animate", { attrs: { attributeName: "r", begin: "200ms", dur: "600ms", from: "0", to: "3" } })]);
  }), n._l(n.filterdData, function(i, r) {
    return e("circle", { key: `${r}-outer`, staticClass: "circle-outer", class: n.useClass(i), style: n.outerStyles(i, r), attrs: { cx: n.latLng(i.coordinates)[0], cy: n.latLng(i.coordinates)[1], r: 6 }, on: { mouseover: function(o) {
      return n.handleMouseOver(o, i);
    }, mouseout: n.handleMouseOut } }, [e("animate", { attrs: { attributeName: "r", begin: "200ms", dur: "600ms", from: "0", to: "11" } })]);
  })], 2) : n._e();
}, qw = [], Gw = /* @__PURE__ */ li(
  Xw,
  Ww,
  qw,
  !1,
  null,
  null,
  null,
  null
);
const Vw = Gw.exports;
const Kw = {
  name: "vue-datamaps",
  components: {
    LayerLabel: Pw,
    LayerBubble: Iw,
    LayerArc: Bw,
    LayerAwsRegions: Vw
  },
  data() {
    return {
      geoData: {},
      setProjectionData: {
        path: null,
        projection: null
      },
      showHoverInfo: !1,
      showHoverBubbleInfo: !1,
      showHoverArcInfo: !1,
      showHoverRegionInfo: !1,
      popupText: {
        title: "",
        name: "",
        origin: "",
        destination: "",
        value: ""
      },
      popupPosition: {},
      viewbox: {
        width: 0,
        height: 0
      },
      pathData: [],
      bubbleGeoData: {},
      awsRegionData: {},
      arcGeoData: {},
      styleAttributes: {},
      previousAttributes: {},
      propsData: {
        arcConfig: {},
        arcGeoData: {},
        bubblesConfig: {},
        bubbleGeoData: {}
      }
    };
  },
  mixins: [Aw],
  props: {
    localData: {
      type: Object,
      default: function() {
        return {};
      }
    },
    width: {
      type: Number,
      default: 750
    },
    height: {
      type: Number,
      default: 500
    }
  },
  computed: {
    regions() {
      return this.awsRegionsConfig.region || $u;
    },
    isPopupOn() {
      return (this.geograpphyConfigOptions.popupOnHover || this.bubblesConfigOptions.popupOnHover) && (this.showHoverInfo || this.showHoverBubbleInfo || this.showHoverArcInfo || this.showHoverRegionInfo);
    },
    svg() {
      return Nt(this.$refs.svg);
    },
    svgWidth: {
      get() {
        return this.viewbox.width;
      },
      set(t) {
        this.viewbox.width = t.getBoundingClientRect().width;
      }
    },
    svgHeight: {
      get() {
        return this.viewbox.height;
      },
      set(t) {
        this.viewbox.height = t.getBoundingClientRect().height;
      }
    },
    pathStyle() {
      return Object.keys(this.styleAttributes).length > 0 ? this.styleAttributes : {
        "stroke-width": this.geograpphyConfigOptions.borderWidth,
        "stroke-opacity": this.geograpphyConfigOptions.borderOpacity,
        stroke: this.geograpphyConfigOptions.borderColor
      };
    },
    pathAndProjection: {
      get() {
        return this.setProjectionData;
      },
      set(t) {
        this.setProjectionData = {
          path: this.setProjection(wl, t).path,
          projection: this.setProjection(wl, t).projection
        };
      }
    }
  },
  mounted() {
    this.resize(), this.draw(), window.addEventListener("resize", this.resize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resize);
  },
  methods: {
    handleClickCallback({ event: t, item: n, index: e }) {
      this.$emit("click:bubble", { event: t, item: n, index: e });
    },
    resize() {
      this.svgWidth = this.$el, this.svgHeight = this.$el, this.pathAndProjection = this.$el;
    },
    fillColor(t) {
      let { data: n, fills: e, defaultFill: i } = this;
      e = { defaultFill: i, ...e };
      const r = n[t.id || t.properties.code_hasc];
      let o;
      return r && r.fillKey && (o = e[G(r.fillKey, { data: n[t.id || t.properties.code_hasc], geography: t })]), typeof o > "u" && (o = G(r && r.fillColor, e.defaultFill, { data: n[t.id || t.properties.code_hasc], geography: t })), o;
    },
    draw() {
      if (this.localData.type)
        this.geoData = this.localData, this.drawSubunits(this.geoData);
      else if (this.geograpphyConfigOptions.dataUrl && this.dataType === "csv" && this.geoData && this.geoData.slice) {
        let t = {};
        this.geoData.forEach((n) => (e) => {
          t[e.id || e.properties.code_hasc] = e;
        }), this.geoData = t, this.drawSubunits(this.geoData);
      } else
        fetch(this.geograpphyConfigOptions.dataUrl || `/data/${this.scope}.${this.dataType}`).then((t) => t.json()).then((t) => {
          this.geoData = t, this.drawSubunits(this.geoData);
        });
    },
    drawSubunits(t) {
      if (this.geograpphyConfigOptions.hideAntarctica && (this.pathData = t.features.slice().filter(function(n) {
        return n.id !== "ATA";
      })), this.geograpphyConfigOptions.hideHawaiiAndAlaska && (this.pathData = t.features.slice().filter(function(n) {
        return n.id !== "HI" && n.id !== "AK";
      })), this.bubbles && this.bubblesConfigOptions.data) {
        const n = this.bubblesConfigOptions.data.filter((e) => e.centered || e.region).map((e) => e.centered || e.region);
        this.bubbleGeoData = t.features.slice().reduce((e, i) => (n.includes(i.id) && (e[i.id] = i), e), {}), this.awsRegionData = this.regions.slice().reduce((e, i) => (n.includes(i.key) && (e[i.key] = i), e), {}), this.propsData.bubbleGeoData = { ...this.bubbleGeoData, ...this.awsRegionData }, this.propsData.bubblesConfig = this.bubblesConfigOptions;
      }
      if (this.arc && this.arcConfigOptions.data) {
        const n = this.arcConfigOptions.data.filter((i) => typeof i.origin == "string" || typeof i.destination == "string"), e = /* @__PURE__ */ new Set([...n.slice().map((i) => i.origin), ...n.slice().map((i) => i.destination)]);
        this.arcGeoData = t.features.slice().reduce((i, r) => (e.has(r.id) && (i[r.id] = r), i), {}), this.awsRegionData = this.regions.slice().reduce((i, r) => (e.has(r.code) ? i[r.code] = r : e.has(r.key) && (i[r.key] = r), i), {}), this.propsData.arcConfig = this.arcConfigOptions, this.propsData.arcGeoData = { ...this.arcGeoData, ...this.awsRegionData };
      }
    },
    handleMouseOver(t, n) {
      const e = t.target, i = {
        fill: e.style.fill,
        stroke: e.style.stroke,
        "stroke-width": e.style["stroke-width"],
        "fill-opacity": e.style["fill-opacity"]
      };
      this.$set(this.previousAttributes, n.id || n.properties.code_hasc, i);
      const { highlightOnHover: r, popupOnHover: o, highlightFillColor: a, highlightBorderColor: u, highlightBorderWidth: s, highlightBorderOpacity: l, highlightFillOpacity: f } = this.geograpphyConfigOptions, h = this.data[n.id || n.properties.code_hasc] || {};
      if (r) {
        const c = {
          fill: G(h.highlightFillColor, a, h),
          stroke: G(h.highlightBorderColor, u, h),
          "stroke-width": G(h.highlightBorderWidth, s, h),
          "stroke-opacity": G(h.highlightBorderOpacity, l, h),
          "fill-opacity": G(h.highlightFillOpacity, f, h)
        };
        this.$set(this.styleAttributes, n.id || n.properties.code_hasc, c);
      }
      o && this.showPopup({ event: t, geography: n, datum: this.data[n.id || n.properties.code_hasc] });
    },
    handleMouseOut(t, n) {
      const { highlightOnHover: e, popupOnHover: i } = this.geograpphyConfigOptions;
      if (e || i) {
        const r = this.previousAttributes[n.id || n.properties.code_hasc];
        this.$set(this.styleAttributes, n.id || n.properties.code_hasc, r);
      }
      i && this.hidePopup();
    },
    showPopup({ event: t, geography: n, datum: e }) {
      this.popupPosition = {
        left: `${t.layerX}px`,
        top: `${t.layerY + 30}px`
      }, this.popupTemplate ? this.$emit("custom:popup", { geography: n, datum: e }) : this.popupText.title = n.properties.name, this.showHoverInfo = !0;
    },
    hidePopup() {
      this.showHoverInfo = !1, this.showHoverBubbleInfo = !1, this.showHoverArcInfo = !1, this.showHoverRegionInfo = !1;
    },
    showPopupBubble({ event: t, datum: n }) {
      this.popupPosition = {
        left: `${t.layerX}px`,
        top: `${t.layerY + 30}px`
      }, this.bubblesConfigOptions.popupTemplate ? this.$emit("custom:popup-bubble", { datum: n }) : this.popupText.title = n.name, this.showHoverBubbleInfo = !0;
    },
    showPopupRegion({ event: t, datum: n }) {
      this.popupPosition = {
        left: `${t.layerX}px`,
        top: `${t.layerY + 30}px`
      }, this.awsRegionsConfigOptions.popupTemplate ? this.$emit("custom:popup-region", { datum: n }) : this.popupText.title = n.full_name, this.showHoverRegionInfo = !0;
    },
    showPopupArc({ event: t, datum: n, origin: e, destination: i }) {
      this.popupPosition = {
        left: `${t.layerX}px`,
        top: `${t.layerY + 30}px`
      }, this.arcConfigOptions.popupTemplate ? this.$emit("custom:popup-arc", { origin: e, destination: i }) : (this.popupText.title = "Arc", this.popupText.origin = e ? e.name || e.properties.name : `Lat Long (${n.origin.latitude}, ${n.origin.longitude})`, this.popupText.destination = i ? i.name || i.properties.name : `Lat Long (${n.destination.latitude}, ${n.destination.longitude})`, this.popupText.value = n.value), this.showHoverArcInfo = !0;
    }
  },
  watch: {
    awsRegionsConfig: {
      handler(t) {
        this.draw();
      },
      deep: !0
    },
    bubblesConfig: {
      handler(t) {
        this.draw();
      },
      deep: !0
    }
  }
};
var Zw = function() {
  var n = this, e = n._self._c;
  return e("div", { staticClass: "map" }, [e("svg", { ref: "svg", staticClass: "datamap" }, [e("g", n._l(n.pathData, function(i, r) {
    return e("path", { key: r, class: `datamaps-styleAttributes ${i.id || i.properties.code_hasc}`, style: n.pathStyle[i.id || i.properties.code_hasc] || n.pathStyle, attrs: { d: n.pathAndProjection.path(i), fill: n.fillColor(i) }, on: { mouseover: function(o) {
      return n.handleMouseOver(o, i);
    }, mouseout: function(o) {
      return n.handleMouseOut(o, i);
    } } });
  }), 0), n.labels && n.pathData.length > 0 ? e("layer-label", { attrs: { labelsConfig: n.labelsConfigOptions, data: n.pathData, projection: n.pathAndProjection.projection, path: n.pathAndProjection.path } }) : n._e(), n.awsRegions ? e("layer-aws-regions", { attrs: { awsRegionsConfig: n.awsRegionsConfigOptions, projection: n.pathAndProjection.projection, path: n.pathAndProjection.path, data: n.awsRegionData }, on: { "show:popup": n.showPopupRegion, "hide:popup": n.hidePopup } }) : n._e(), n.bubbles && n.pathData.length > 0 ? e("layer-bubble", { attrs: { bubblesConfig: n.propsData.bubblesConfig, data: n.propsData.bubbleGeoData, projection: n.pathAndProjection.projection, path: n.pathAndProjection.path }, on: { "click:bubble": n.handleClickCallback, "show:popup": n.showPopupBubble, "hide:popup": n.hidePopup } }) : n._e(), n.arc && n.pathData.length > 0 ? e("layer-arc", { attrs: { arcConfig: n.propsData.arcConfig, data: n.propsData.arcGeoData, projection: n.pathAndProjection.projection, path: n.pathAndProjection.path, awsRegions: n.awsRegions }, on: { "show:popup": n.showPopupArc, "hide:popup": n.hidePopup } }) : n._e()], 1), n.isPopupOn ? e("div", { staticClass: "datamaps-hoverover", staticStyle: { "z-index": "10001", position: "absolute" }, style: n.popupPosition }, [n.showHoverInfo ? n._t("hoverinfo") : n._e(), n.showHoverBubbleInfo ? n._t("hoverBubbleInfo") : n._e(), n.showHoverArcInfo ? n._t("hoverArcInfo") : n._e(), n.showHoverRegionInfo ? n._t("hoverRegionInfo") : n._e()], 2) : n._e()]);
}, Jw = [], Qw = /* @__PURE__ */ li(
  Kw,
  Zw,
  Jw,
  !1,
  null,
  null,
  null,
  null
);
const va = Qw.exports;
typeof window < "u" && window.Vue && window.Vue.use(va);
const jw = (t) => {
  t.component(va.name, va);
};
export {
  va as VueDatamaps,
  jw as default
};
