/*! kakulus - v0.0.1 - 2013-12-10 | Copyright (c) 2013 Po-Ju Chen <tonyone0902@gmail.com> */

(function() {
    var Kakulus, kakulus, _main, _Arr, _det, _generator, _Limit, _Zigma, _analysis, _validator;
    Kakulus = function() {
        var _define;
        _define = {};
        this._algo = function(argu, _this) {
            var _fn, fn, invoke;
            _fn = argu[0].toString();
            fn = _fn.replace(/\s/g, "").split("function(")[1].split(")")[0].split(",");
            invoke = function() {
                var obj, objarr, i$, ref$, len$, i;
                obj = {};
                objarr = [];
                for (i$ = 0, len$ = (ref$ = fn).length; i$ < len$; ++i$) {
                    i = ref$[i$];
                    obj[i] = kakulus[i.replace("$", "")];
                    objarr.push(kakulus[i.replace("$", "")]);
                }
                return argu[0].apply(argu[0], objarr);
            };
            invoke.apply(argu[0], fn);
            return new _this.Define(argu, _this);
        };
        this._factory = function(argu, _this) {
            return new _this.Define(argu, _this);
        };
        this.Define = function(argu, _this) {
            this.algo = function() {
                var argu;
                argu = arguments;
                return new _this._algo(argu, _this);
            };
            this.factory = function() {
                return new _this._factory(argu, _this);
            };
            return this.Define;
        };
        this.define = function() {
            var argu;
            argu = arguments;
            _define[argu[0]] = function() {
                return argu[0]();
            };
            return new this.Define(argu, this);
        };
        if (!(this instanceof Kakulus)) {
            throw new SyntaxError("ka constructor must be called with the new operator");
        }
    };
    kakulus = new Kakulus();
    _main = {
        _x: function(x) {
            return x.toLowerCase();
        },
        init: function(x) {
            return this.x(x);
        },
        x: function(x) {
            var _x;
            _x = /x/g;
            return _x.test(x);
        },
        o: function(x) {
            var _o;
            _o = /\^/g;
            return _o.test(x);
        },
        slope: function(x) {
            var _tmp, regx, regy, _x, _y, i$, len$, i;
            switch (typeof x) {
              case "string":
                x = this._x(x);
                _tmp = x.split("+");
                regx = /x/;
                regy = /y/;
                _x = 0;
                _y = 0;
                for (i$ = 0, len$ = _tmp.length; i$ < len$; ++i$) {
                    i = _tmp[i$];
                    if (regx.test(i)) {
                        _x = i.split("x")[0];
                    }
                    if (regy.test(i)) {
                        _y = i.split("y")[0];
                    }
                }
                return Number(_y) / Number(_x);

              case "object":
                if (Array.isArray(x)) {
                    return console.log("array!!!");
                }
            }
        },
        diff: function(x, t, f) {
            var i$, to$, i, _tmpX, _tmp, _tmpMultiFinal, len$, _tmpMulti;
            if (t) {
                for (i$ = 1, to$ = Number(t) - 1; i$ <= to$; ++i$) {
                    i = i$;
                    _tmpX = this.diffAlgo(x);
                }
                if (f) {
                    _tmp = _tmpX.split("+");
                    _tmpMultiFinal = 0;
                    for (i$ = 0, len$ = _tmp.length; i$ < len$; ++i$) {
                        i = _tmp[i$];
                        if (this.x(i)) {
                            if (this.o(i)) {
                                _tmpMulti = i.split("x^");
                                _tmpMultiFinal = _tmpMultiFinal + Number(_tmpMulti[0]) * Math(f, Number(_tmpMulti[1]));
                            } else {
                                _tmpMultiFinal = _tmpMultiFinal + Number(i.split("x")[0]) * Number(f);
                            }
                        } else {
                            _tmpMultiFinal = _tmpMultiFinal + i;
                        }
                    }
                    return _tmpMultiFinal;
                } else {
                    return _tmpX;
                }
            }
        },
        diffAlgo: function(x) {
            var _tmpDiffVar, _tmp, i$, len$, i, _tmpDiff, _f;
            x = this._x(x);
            _tmpDiffVar = "";
            if (this.init(x)) {
                _tmp = x.split("+");
                for (i$ = 0, len$ = _tmp.length; i$ < len$; ++i$) {
                    i = _tmp[i$];
                    if (this.x(i)) {
                        if (this.o(i)) {
                            _tmpDiff = i.split("x^");
                            _f = String(Number(_tmpDiff[0]) * Number(_tmpDiff[1]));
                            if (_tmpDiff[1] - 1 === 1) {
                                if (_f === 0) {
                                    _tmpDiffVar += _f + "x";
                                } else {
                                    _tmpDiffVar += "x";
                                }
                            } else {
                                if (_f === 0) {
                                    _tmpDiffVar += "x^" + String(Number(_tmpDiff[1]) - 1) + "+";
                                } else {
                                    _tmpDiffVar += _f + "x^" + String(Number(_tmpDiff[1]) - 1) + "+";
                                }
                            }
                        } else {
                            if (i.split("x")[0] !== "") {
                                _tmpDiffVar += "+" + i.split("x")[0];
                            } else {
                                _tmpDiffVar += "+1";
                            }
                        }
                    }
                }
            } else {
                x = 0;
            }
            return _tmpDiffVar;
        },
        inte: function(x, t, f) {},
        inteAlgo: function(x) {
            var _tmpInteVar;
            x = this._x(x);
            return _tmpInteVar = "";
        },
        maxvalue: function(x, min, max) {}
    };
    Kakulus.prototype.main = _main;
    _Arr = {
        _array: function(x) {
            var _tmpA, i$, ref$, len$, i, j$, ref1$, len1$, _i;
            _tmpA = [];
            for (i$ = 0, len$ = (ref$ = Object.keys(x)).length; i$ < len$; ++i$) {
                i = ref$[i$];
                for (j$ = 0, len1$ = (ref1$ = x[i]).length; j$ < len1$; ++j$) {
                    _i = ref1$[j$];
                    _tmpA.push(_i);
                }
            }
            return _tmpA;
        },
        _init: function(x) {
            return Object.keys(x).length;
        },
        equal: function(x, y) {
            return JSON.stringify(x) === JSON.stringify(y);
        },
        abAlgo: function(x, y, type) {
            var _value, _x, _y, i$, to$, i;
            _value = [];
            if (this._init(x) === this._init(y)) {
                _x = new this._array(x);
                _y = new this._array(y);
                for (i$ = 0, to$ = _x.length - 1; i$ <= to$; ++i$) {
                    i = i$;
                    switch (type) {
                      case "add":
                        _value.push(Number(_x[i]) + Number(_y[i]));
                        break;

                      case "sub":
                        _value.push(Number(_x[i]) - Number(_y[i]));
                    }
                }
            }
            return _value;
        },
        add: function(x, y) {
            return this.abAlgo(x, y, "add");
        },
        subtract: function(x, y) {
            return this.abAlgo(x, y, "sub");
        },
        multiple: function(x, time) {
            var _x;
            return _x = new this._array(x);
        },
        array2formula: function(arr, n, m) {
            var l, _obj, _t, _n, i$, to$, y;
            l = arr.length;
            n = Number(n);
            m = Number(m);
            console.log(m);
            _obj = {};
            _t = 1;
            _n = 0;
            _obj[0] = [];
            for (i$ = 0, to$ = l - 1; i$ <= to$; ++i$) {
                y = i$;
                if (_t <= m) {
                    if (_t === m) {
                        _t = 1;
                        _n = _n + 1;
                        _obj[_n] = [];
                    } else {
                        if (_obj[0].length === 0) {
                            _t = 1;
                        } else {
                            _t = _t + 1;
                        }
                    }
                    _obj[_n].push(arr[y]);
                }
            }
            return _obj;
        },
        arraySimplified: function(arr, num) {},
        _multiplied: function(arr, n, m) {
            var l, _obj, i$, to$, y, j$, to1$, i;
            l = arr.length;
            n = Number(n);
            m = Number(m);
            _obj = {};
            for (i$ = 0, to$ = m - 1; i$ <= to$; ++i$) {
                y = i$;
                _obj[y] = [];
                for (j$ = 0, to1$ = n - 1; j$ <= to1$; ++j$) {
                    i = j$;
                    _obj[y].push(arr[i * m + y]);
                }
            }
            return _obj;
        },
        multiplied: function(a1, n, a2, m) {
            var _a1, _a2;
            console.log(a1);
            n = n.split("x");
            m = m.split("x");
            _a1 = this.array2formula(a1, n[0], n[1]);
            _a2 = this._multiplied(a2, m[0], m[1]);
            console.log(_a1);
            return console.log(_a2);
        }
    };
    Kakulus.prototype.Arr = _Arr;
    _det = {
        _init: function(x) {},
        algo: function(x) {
            return this._init(x);
        }
    };
    Kakulus.prototype.det = _det;
    _generator = {
        msg: function() {},
        detect: function(x) {
            var _reg, _output;
            _reg = /x/;
            _reg.test(x);
            _output = "";
            if (_reg.test(x)) {
                _output = this.arr(x);
            } else {
                _output = this.func(x);
            }
            return _output;
        },
        _xfunc: function(x) {
            var _tmparr, i$, i;
            _tmparr = [];
            for (i$ = x.length - 1; i$ >= 0; --i$) {
                i = i$;
                if (i === 0) {
                    _tmparr.push("");
                } else {
                    if (i === 1) {
                        _tmparr.push("x");
                    } else {
                        _tmparr.push("x^" + i);
                    }
                }
            }
            return _tmparr;
        },
        func: function(x) {
            var _x, _output, i$, to$, i;
            _x = this._xfunc(x);
            _output = "";
            for (i$ = 0, to$ = x.length - 1; i$ <= to$; ++i$) {
                i = i$;
                if (x[i] !== 0) {
                    if (i === x.length - 1) {
                        _output += x[i] + _x[i];
                    } else {
                        if (x[i] !== 1) {
                            _output += x[i] + _x[i] + "+";
                        } else {
                            _output += _x[i] + "+";
                        }
                    }
                }
            }
            return _output;
        },
        arr: function(x) {
            var _tmpX, _maxtime, _tmpmaxtime, _output, i$, len$, i, _arr, to$, item;
            _tmpX = x.split("+");
            _maxtime = 0;
            _tmpmaxtime = 0;
            _output = [];
            for (i$ = 0, len$ = _tmpX.length; i$ < len$; ++i$) {
                i = _tmpX[i$];
                _arr = i.split("^");
                if (!_arr[1]) {
                    _arr[1] = 0;
                }
                if (_tmpmaxtime < _arr[1]) {
                    _tmpmaxtime = _arr[1];
                }
            }
            for (i$ = 0; i$ <= _tmpmaxtime; ++i$) {
                i = i$;
                _output.push("0");
            }
            for (i$ = 0, to$ = _tmpX.length - 1; i$ <= to$; ++i$) {
                i = i$;
                item = _tmpX[i].split("^");
                if (!item[1]) {
                    item[1] = 0;
                }
                if (item[1] === 0 && item[0] !== 0) {
                    _output[Number(_tmpmaxtime)] = item[0];
                }
                if (Number(item[1]) !== 0) {
                    _output[Number(_tmpmaxtime) - Number(item[1])] = item[0].replace("x", "");
                }
            }
            return _output;
        }
    };
    Kakulus.prototype.generator = _generator;
    _Limit = {
        algo: function() {}
    };
    Kakulus.prototype.Limit = _Limit;
    _Zigma = {
        algo: function(n, k, f) {}
    };
    Kakulus.prototype.Zigma = _Zigma;
    _analysis = {
        _init: function() {},
        _lsmInit: function(arr, number) {
            var zigmax, zigmax2, zigmay, zigmay2, i$, len$, i, results$ = [];
            zigmax = 0;
            zigmax2 = 0;
            zigmay = 0;
            zigmay2 = 0;
            for (i$ = 0, len$ = arr.length; i$ < len$; ++i$) {
                i = arr[i$];
                results$.push(zigmax += i.x);
            }
            return results$;
        },
        lsm: function(arr) {
            var n, m, _map, _map2, o, i$, to$, i, j$, to1$, _i, x, x2, y, xy, len$;
            n = arr.length;
            m = n - 2;
            _map = [];
            _map.push(n);
            _map2 = [];
            o = {};
            for (i$ = 0, to$ = m - 1; i$ <= to$; ++i$) {
                i = i$;
                o[i] = [];
                for (j$ = 0, to1$ = m - 1; j$ <= to1$; ++j$) {
                    _i = j$;
                    o[i].push(_i + i);
                }
            }
            console.log(o);
            x = 0;
            x2 = 0;
            y = 0;
            xy = 0;
            for (i$ = 0, len$ = arr.length; i$ < len$; ++i$) {
                i = arr[i$];
                x += i.x;
                x2 += i.x * i.x;
                y += i.y;
                xy += i.x * i.y;
            }
            console.log(x);
            console.log(x2);
            console.log(y);
            console.log(xy);
            _map.push(x);
            _map.push(x2);
            _map2.push(y);
            _map2.push(xy);
            console.log(_map);
            console.log(_map2);
            _map.push(y);
            return _map.push(xy);
        }
    };
    Kakulus.prototype.analysis = _analysis;
    _validator = {
        types: function() {
            return {};
        },
        msg: function() {
            return [];
        },
        check: function(data) {
            return this.error();
        },
        error: function() {
            return !this.msg.length;
        }
    };
    Kakulus.prototype.validator = _validator;
    _Arr.multiplied([ 2, 3, 4, 5, 6, 6 ], "3x2", [ 2, 3, 4, 5, 6, 6 ], "2x3");
}).call(this);