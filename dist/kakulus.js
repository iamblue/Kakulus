check = 
  init:(x)->
    x.toLowerCase()
  #檢查是否為常數
  x:(x)->
    _x = /x/g
    _x.test(x)  
  #檢查是否有指數  
  o:(x)->
    _o = /\^/g
    _o.test(x)

  diff:(x,t,f)->
    x = this.init(x)
    if this.x(x) 
      #2x^2+4x+3
      _tmp = x.split('+')
      for i in _tmp
        if this.x(i)
          if this.o(i)
            _tmp-diff = i.split('x^')
            _f = String(Number(_tmp-diff[0])*Number(_tmp-diff[1]))
            if _tmp-diff[1]-1 == 1
              if _f == 0
                _tmp-diff-var = _f+'x'
              else 
                _tmp-diff-var = 'x'
            else  
              if _f == 0
                _tmp-diff-var = 'x^'+String(Number(_tmp-diff[1])-1)               
              else 
                _tmp-diff-var = _f+'x^'+String(Number(_tmp-diff[1])-1)
          else 
            _tmp-diff-var = i.split('x')[0]
    else
      x = 0 
    
  inte:(x,t,f)->

check.diff('2x^3+x^2+x+7')

init = {
  arrayformat:{
  }
}