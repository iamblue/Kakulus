(function(){
  var validator, generator, ka, Zigma, Limit, Arr, Arr2, Arr3;
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
    output: function(){}
  };
  ka = {
    _x: function(x){
      return x.toLowerCase();
    },
    init: function(x){
      return this.x(x);
    },
    _funtion: function(){
      var _length, _output, i$, len$, i;
      _length = arguments.length;
      _output = '';
      for (i$ = 0, len$ = arguments.length; i$ < len$; ++i$) {
        i = arguments[i$];
        if (i !== 0 && _length - 1 > 1) {
          if (i !== 1) {
            _output += i + 'x^' + (_length - 1) + '+';
          } else {
            _output += 'x^' + (_length - 1) + '+';
          }
        } else {
          if (_length - 1 === 1) {
            if (i !== 1) {
              if (i !== 0) {
                _output += i + 'x' + '+';
              }
            } else {
              _output += 'x' + '+';
            }
          } else if (_length - 1 === 0) {
            _output += i;
          }
        }
        _length = _length - 1;
      }
      return _output;
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
                  _tmpDiffVar += _f + 'x+';
                } else {
                  _tmpDiffVar += 'x+';
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
                _tmpDiffVar += i.split('x')[0] + '';
              } else {
                _tmpDiffVar += '1';
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
    _equal: function(x, y){
      return JSON.stringify(x) === JSON.stringify(y);
    },
    _add: function(x, y){
      var _x, _y;
      _x = new this._array(x);
      _y = new this._array(y);
      console.log(_x);
      console.log(_y);
      if (this._init(x) === this._init(y)) {
        return console.log('=======');
      }
    }
  };
  console.log(ka._funtion(4, 0, 3, 4, 2, 0, 4));
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
  Arr._add(Arr2, Arr3);
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
