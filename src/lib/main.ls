_main =
  #主程式 
  #也就是說要先call new ka() 才能叫function
    
  _x : (x)->
    x.toLowerCase()  

  init:(x)->
    this.x(x) 

  x:(x)->
    #檢查是否為常數
    _x = /x/g 
    _x.test(x)  
 
  o:(x)->
    #檢查是否有指數  
    _o = /\^/g
    _o.test(x)

  slope:(x) ->
    #@x => function 
    #2x+3y+4 = 0
    #tanx
    #/ m:+ , \ m:-
    switch typeof x
    case \string
      x = this._x(x)
      _tmp = x.split('+')
      regx = /x/
      regy = /y/
      _x = 0;
      _y = 0;
      for i in _tmp
        if regx.test(i)
          _x = i.split('x')[0]
          # console.log(_x)
        if regy.test(i)
          _y = i.split('y')[0]
          # console.log(_y);
      Number(_y)/Number(_x)
    case \object
      if Array.isArray(x)
        console.log('array!!!')
    
  diff:(x,t,f)->
    #微分
    #@x => function
    #@t => 導數次數
    #@f => 帶入的值
    #輸出   
    if(t)
      for i from 1 to Number(t)-1 by 1
        _tmp-x = this.diff-algo(x);
      if(f)
        _tmp = _tmp-x.split('+')
        _tmp-multi-final = 0
        for i in _tmp
          if this.x(i)
            if this.o(i)
              _tmp-multi = i.split('x^')
              _tmp-multi-final = _tmp-multi-final + Number(_tmp-multi[0])*Math(f,Number(_tmp-multi[1]))  
            else 
              _tmp-multi-final = _tmp-multi-final + Number(i.split('x')[0])*Number(f)
          else
            _tmp-multi-final = _tmp-multi-final + i
        _tmp-multi-final
      else
        _tmp-x
    
  diff-algo:(x)->
    #積分
    #@x => fucntion
    x = this._x(x)  
    _tmp-diff-var = '';    
    if this.init(x)
      #先判別是否為常數
      _tmp = x.split('+')
      for i in _tmp
        if this.x(i)
          if this.o(i)
            _tmp-diff = i.split('x^')
            _f = String(Number(_tmp-diff[0])*Number(_tmp-diff[1]))
            if _tmp-diff[1]-1 == 1
              if _f == 0
                _tmp-diff-var += _f+'x'
              else 
                _tmp-diff-var += 'x'
            else  
              if _f == 0
                _tmp-diff-var += 'x^'+String(Number(_tmp-diff[1])-1)+'+'               
              else 
                _tmp-diff-var += _f+'x^'+String(Number(_tmp-diff[1])-1)+'+'
          else 
            if(i.split('x')[0]!='')
              _tmp-diff-var += '+'+i.split('x')[0]
            else
              _tmp-diff-var += '+1'
    else
      #如果是常數則0
      x = 0

    _tmp-diff-var
  #微分     
  inte: (x,t,f) ->
  inte-algo: (x) -> 
    x = this._x(x)
    _tmp-inte-var = '';
    #if this.init(x)
    #else
    #  x = c
    #_tmp-inte-var 
  
  maxvalue: (x,min,max) ->
    #@x => function
    #min => 最小的範圍
    #max => 最大的範圍
Kakulus.prototype.main = _main 