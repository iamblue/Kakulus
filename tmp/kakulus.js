(function(){
  var check, init;
  check = {
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
      var _tmp, i$, len$, i, _tmpDiff, _f, _tmpDiffVar, results$ = [];
      x = this.init(x);
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
                  results$.push(_tmpDiffVar = _f + 'x');
                } else {
                  results$.push(_tmpDiffVar = 'x');
                }
              } else {
                if (_f === 0) {
                  results$.push(_tmpDiffVar = 'x^' + String(Number(_tmpDiff[1]) - 1));
                } else {
                  results$.push(_tmpDiffVar = _f + 'x^' + String(Number(_tmpDiff[1]) - 1));
                }
              }
            } else {
              results$.push(_tmpDiffVar = i.split('x')[0]);
            }
          }
        }
        return results$;
      } else {
        return x = 0;
      }
    },
    inte: function(x, t, f){}
  };
  check.diff('2x^3+x^2+x+7');
  init = {
    arrayformat: {}
  };
}).call(this);
