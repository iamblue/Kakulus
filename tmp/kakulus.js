(function(){
  var validator, generator, ka, Zigma, Limit, Arr, det, analysis, arr_tmp, io, Arr2, Arr3;
  validator = {
    types: function(){
      return {};
    },
    msg: function(){
      return [];
    },
    check: function(data){
      return this.error();
    },
    error: function(){
      return !deepEq$(this.msg.length, 0, '===');
    }
  };
  generator = {
    msg: function(){},
    _xfunc: function(x){
      var _tmparr, i$, i;
      _tmparr = [];
      for (i$ = x.length - 1; i$ >= 0; --i$) {
        i = i$;
        if (i === 0) {
          _tmparr.push('');
        } else {
          if (i === 1) {
            _tmparr.push('x');
          } else {
            _tmparr.push('x^' + i);
          }
        }
      }
      return _tmparr;
    },
    func: function(x){
      var _x, _output, i$, to$, i;
      _x = this._xfunc(x);
      _output = '';
      for (i$ = 0, to$ = x.length - 1; i$ <= to$; ++i$) {
        i = i$;
        if (x[i] !== 0) {
          if (i === x.length - 1) {
            _output += x[i] + _x[i];
          } else {
            if (x[i] !== 1) {
              _output += x[i] + _x[i] + '+';
            } else {
              _output += _x[i] + '+';
            }
          }
        }
      }
      return _output;
    },
    arr: function(x){
      var _tmpX, _maxtime, _tmpmaxtime, _output, i$, len$, i, _arr, to$, item;
      _tmpX = x.split('+');
      _maxtime = 0;
      _tmpmaxtime = 0;
      _output = [];
      for (i$ = 0, len$ = _tmpX.length; i$ < len$; ++i$) {
        i = _tmpX[i$];
        _arr = i.split('^');
        if (!_arr[1]) {
          _arr[1] = 0;
        }
        if (_tmpmaxtime < _arr[1]) {
          _tmpmaxtime = _arr[1];
        }
      }
      for (i$ = 0; i$ <= _tmpmaxtime; ++i$) {
        i = i$;
        _output.push('0');
      }
      for (i$ = 0, to$ = _tmpX.length - 1; i$ <= to$; ++i$) {
        i = i$;
        item = _tmpX[i].split('^');
        if (!item[1]) {
          item[1] = 0;
        }
        if (item[1] === 0 && item[0] !== 0) {
          _output[Number(_tmpmaxtime)] = item[0];
        }
        if (Number(item[1]) !== 0) {
          _output[Number(_tmpmaxtime) - Number(item[1])] = item[0].replace('x', '');
        }
      }
      return _output;
    }
  };
  ka = {
    _x: function(x){
      return x.toLowerCase();
    },
    init: function(x){
      return this.x(x);
    },
    x: function(x){
      var _x;
      _x = /x/g;
      return _x.test(x);
    },
    o: function(x){
      var _o;
      _o = /\^/g;
      return _o.test(x);
    },
    diff: function(x, t, f){
      var i$, to$, i, _tmpX, _tmp, _tmpMultiFinal, len$, _tmpMulti;
      if (t) {
        for (i$ = 1, to$ = Number(t) - 1; i$ <= to$; ++i$) {
          i = i$;
          _tmpX = this.diffAlgo(x);
        }
        if (f) {
          _tmp = _tmpX.split('+');
          _tmpMultiFinal = 0;
          for (i$ = 0, len$ = _tmp.length; i$ < len$; ++i$) {
            i = _tmp[i$];
            if (this.x(i)) {
              if (this.o(i)) {
                _tmpMulti = i.split('x^');
                _tmpMultiFinal = _tmpMultiFinal + Number(_tmpMulti[0]) * Math(f, Number(_tmpMulti[1]));
              } else {
                _tmpMultiFinal = _tmpMultiFinal + Number(i.split('x')[0]) * Number(f);
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
    diffAlgo: function(x){
      var _tmpDiffVar, _tmp, i$, len$, i, _tmpDiff, _f;
      x = this._x(x);
      _tmpDiffVar = '';
      if (this.init(x)) {
        _tmp = x.split('+');
        for (i$ = 0, len$ = _tmp.length; i$ < len$; ++i$) {
          i = _tmp[i$];
          if (this.x(i)) {
            if (this.o(i)) {
              _tmpDiff = i.split('x^');
              _f = String(Number(_tmpDiff[0]) * Number(_tmpDiff[1]));
              if (_tmpDiff[1] - 1 === 1) {
                if (_f === 0) {
                  _tmpDiffVar += _f + 'x';
                } else {
                  _tmpDiffVar += 'x';
                }
              } else {
                if (_f === 0) {
                  _tmpDiffVar += 'x^' + String(Number(_tmpDiff[1]) - 1) + '+';
                } else {
                  _tmpDiffVar += _f + 'x^' + String(Number(_tmpDiff[1]) - 1) + '+';
                }
              }
            } else {
              if (i.split('x')[0] !== '') {
                _tmpDiffVar += '+' + i.split('x')[0];
              } else {
                _tmpDiffVar += '+1';
              }
            }
          }
        }
      } else {
        x = 0;
      }
      return _tmpDiffVar;
    },
    inte: function(x, t, f){},
    inteAlgo: function(x){
      var _tmpInteVar;
      x = this._x(x);
      return _tmpInteVar = '';
    },
    maxvalue: function(x, min, max){}
  };
  Zigma = {
    algo: function(n, k, f){}
  };
  Limit = {
    algo: function(){}
  };
  Arr = {
    _array: function(x){
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
    _init: function(x){
      return Object.keys(x).length;
    },
    equal: function(x, y){
      return JSON.stringify(x) === JSON.stringify(y);
    },
    abAlgo: function(x, y, type){
      var _value, _x, _y, i$, to$, i;
      _value = [];
      if (this._init(x) === this._init(y)) {
        _x = new this._array(x);
        _y = new this._array(y);
        for (i$ = 0, to$ = _x.length - 1; i$ <= to$; ++i$) {
          i = i$;
          switch (type) {
          case 'add':
            _value.push(Number(_x[i]) + Number(_y[i]));
            break;
          case 'sub':
            _value.push(Number(_x[i]) - Number(_y[i]));
          }
        }
      }
      return _value;
    },
    add: function(x, y){
      return this.abAlgo(x, y, 'add');
    },
    subtract: function(x, y){
      return this.abAlgo(x, y, 'sub');
    },
    multiple: function(x, time){
      var _x;
      return _x = new this._array(x);
    }
  };
  det = {
    _init: function(){},
    algo: function(){}
  };
  analysis = {
    _init: function(){},
    _lsmInit: function(arr, number){
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
    lsm: function(arr, number){
      var m;
      return m = number(-2);
    }
  };
  arr_tmp = [5, 0, 0, 0, 3, 1];
  console.log(generator.func(arr_tmp));
  io = [
    {
      x: -1.3,
      y: 0.103
    }, {
      x: -0.1,
      y: 1.099
    }, {
      x: 0.2,
      y: 0.808
    }, {
      x: 1.3,
      y: 1.897
    }
  ];
  console.log(ka.diffAlgo(generator.func([100, 0, 3, 4, 2, 0, 4])));
  Arr2 = {
    a1: ['1', '2', '3'],
    a2: ['2', '3', '4'],
    a3: ['5', '6', '7']
  };
  Arr3 = {
    a1: ['0', '0', '0'],
    a2: ['1', '1', '1'],
    a3: ['1', '1', '1']
  };
  console.log(Arr.add(Arr2, Arr3));
  console.log(generator.arr('4x^8+4x^7+7x^4+3x^2+1'));
  console.log(ka.diffAlgo('2x^6+x^2+3x+7'));
  function deepEq$(x, y, type){
    var toString = {}.toString, hasOwnProperty = {}.hasOwnProperty,
        has = function (obj, key) { return hasOwnProperty.call(obj, key); };
    var first = true;
    return eq(x, y, []);
    function eq(a, b, stack) {
      var className, length, size, result, alength, blength, r, key, ref, sizeB;
      if (a == null || b == null) { return a === b; }
      if (a.__placeholder__ || b.__placeholder__) { return true; }
      if (a === b) { return a !== 0 || 1 / a == 1 / b; }
      className = toString.call(a);
      if (toString.call(b) != className) { return false; }
      switch (className) {
        case '[object String]': return a == String(b);
        case '[object Number]':
          return a != +a ? b != +b : (a == 0 ? 1 / a == 1 / b : a == +b);
        case '[object Date]':
        case '[object Boolean]':
          return +a == +b;
        case '[object RegExp]':
          return a.source == b.source &&
                 a.global == b.global &&
                 a.multiline == b.multiline &&
                 a.ignoreCase == b.ignoreCase;
      }
      if (typeof a != 'object' || typeof b != 'object') { return false; }
      length = stack.length;
      while (length--) { if (stack[length] == a) { return true; } }
      stack.push(a);
      size = 0;
      result = true;
      if (className == '[object Array]') {
        alength = a.length;
        blength = b.length;
        if (first) { 
          switch (type) {
          case '===': result = alength === blength; break;
          case '<==': result = alength <= blength; break;
          case '<<=': result = alength < blength; break;
          }
          size = alength;
          first = false;
        } else {
          result = alength === blength;
          size = alength;
        }
        if (result) {
          while (size--) {
            if (!(result = size in a == size in b && eq(a[size], b[size], stack))){ break; }
          }
        }
      } else {
        if ('constructor' in a != 'constructor' in b || a.constructor != b.constructor) {
          return false;
        }
        for (key in a) {
          if (has(a, key)) {
            size++;
            if (!(result = has(b, key) && eq(a[key], b[key], stack))) { break; }
          }
        }
        if (result) {
          sizeB = 0;
          for (key in b) {
            if (has(b, key)) { ++sizeB; }
          }
          if (first) {
            if (type === '<<=') {
              result = size < sizeB;
            } else if (type === '<==') {
              result = size <= sizeB
            } else {
              result = size === sizeB;
            }
          } else {
            first = false;
            result = size === sizeB;
          }
        }
      }
      stack.pop();
      return result;
    }
  }
}).call(this);
