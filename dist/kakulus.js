ka = 
  init:(x)->
    x.toLowerCase()
  #檢查是否為常數 dsadad
  x:(x)->
    _x = /x/g 
    _x.test(x)  
  #檢查是否有指數  
  o:(x)->
    _o = /\^/g
    _o.test(x)
  #微分
  diff:(x,t,f)->
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
  #積分  
  diff-algo:(x)->
    #@x => fucntion
    x = this.init(x)
    _tmp-diff-var = '';    
    if this.x(x) 
      #先判別是否為常數
      _tmp = x.split('+')
      for i in _tmp
        if this.x(i)
          if this.o(i)
            _tmp-diff = i.split('x^')
            _f = String(Number(_tmp-diff[0])*Number(_tmp-diff[1]))
            if _tmp-diff[1]-1 == 1
              if _f == 0
                _tmp-diff-var += _f+'x+'
              else 
                _tmp-diff-var += 'x+'
            else  
              if _f == 0
                _tmp-diff-var += 'x^'+String(Number(_tmp-diff[1])-1)+'+'               
              else 
                _tmp-diff-var += _f+'x^'+String(Number(_tmp-diff[1])-1)+'+'
          else 
            if(i.split('x')[0]!='')
              _tmp-diff-var += i.split('x')[0]+''
            else
              _tmp-diff-var += '1'
    else
      #如果是常數則0
      x = 0
    _tmp-diff-var
  #微分     
  inte: (x,t,f) ->

  zigma: (n,k,f) ->
    #@n => 趨近
    #@k => 起始值
    #@f => function 
  maxvalue: (x,min,max) ->
    #@x => function
    #min => 最小的範圍
    #max => 最大的範圍


#微分(一次導數)
console.log(ka.diff-algo('2x^6+x^2+3x+7'))
#微分求值
console.log(ka.diff('2x^6+x^2+3x+7',))
