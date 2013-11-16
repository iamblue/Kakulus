(function(){
  var ka;
  ka = {
    init: function(x){
      return x.toLowerCase();
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
      x = this.init(x);
      _tmpDiffVar = '';
      if (this.x(x)) {
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
    zigma: function(n, k, f){},
    maxvalue: function(x, min, max){}
  };
  console.log(ka.diffAlgo('2x^6+x^2+3x+7'));
  console.log(ka.diff('2x^6+x^2+3x+7'));
}).call(this);
