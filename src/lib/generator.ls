_generator = 
  #產出
  msg: -> 
  detect: (x)->
    #偵測是array還是function
    _reg = /x/
    _reg.test(x)
    _output = '' 
    if _reg.test(x)
      _output = this.arr(x)
    else        
      _output = this.func(x)
    _output
  _xfunc: (x)->
    #列出x的array
    _tmparr = []
    for i from x.length-1 to 0 by -1
      if i == 0
        _tmparr.push('')
      else 
        if i == 1 
          _tmparr.push('x')
        else
          _tmparr.push('x^'+i)
    _tmparr
  func: (x)->
    #把array 產生出 fucntion 
    _x = this._xfunc(x)
    _output = ''
    for i from 0 to x.length-1 by 1
      if(x[i] !=0)
        if(i == x.length-1)
          _output += x[i]+_x[i]
        else          
          if x[i] != 1
            _output += x[i]+_x[i]+'+'
          else
            _output += _x[i]+'+'
    _output
  arr: (x)->
    #把function 轉成 array
    _tmp-x = x.split('+')
    _maxtime = 0
    _tmpmaxtime = 0
    _output = []
    for i in _tmp-x 
      _arr = i.split('^')
      if(!_arr[1])
        _arr[1] = 0
      if _tmpmaxtime < _arr[1]
        _tmpmaxtime = _arr[1]
    for i from 0 to _tmpmaxtime by 1
      _output.push('0') 
    for i from 0 to _tmp-x.length-1 by 1
      item = _tmp-x[i].split('^')
      if !item[1]
        item[1] = 0
      if item[1] == 0 && item[0] != 0 
        _output[(Number(_tmpmaxtime))] = item[0] 
      if Number(item[1]) != 0
        _output[ (Number(_tmpmaxtime) - Number(item[1]))] = item[0].replace('x','')  
    _output 

Kakulus.prototype.generator = _generator 
