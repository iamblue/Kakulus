_Arr = 
  _array: (x)->
    #把m x m矩陣變成1 x 2m
    _tmp-a = []
    for i in Object.keys(x)
      for _i in x[i]
        _tmp-a.push _i
    _tmp-a
  _init: (x)->
    Object.keys(x).length
  equal: (x,y)->
    JSON.stringify(x) == JSON.stringify(y)
  ab-algo: (x,y,type)->
    _value = []
    if(this._init(x) == this._init(y))
      _x = new this._array(x)
      _y = new this._array(y) 
      for i from 0 to _x.length-1 by 1
        switch(type)
        case 'add'  then _value.push(Number(_x[i])+Number(_y[i]))
        case 'sub'  then _value.push(Number(_x[i])-Number(_y[i]))
    _value
  add: (x,y)->
    #x,y 都必須是相加矩陣
    this.ab-algo(x,y,'add')  
  subtract: (x,y)->
    #x,y 都必須是相減矩陣
    this.ab-algo(x,y,'sub')
  multiple: (x,time)->
    #矩陣倍數成積
    _x = new this._array(x)
  array2formula : (arr,_n)->
    n = 1
    y = 0
    _obj = {}
    _obj[0] = []
    for i in arr 
      if n <= _n
        n += 1
        _obj[y].push(i)
      else
        n = 1
        y += 1
        _obj[y] = []
        _obj[y].push(i)
    _obj
  array-simplified: (arr,num) ->
    #[2,3,4,5,6,6],2x3
    num = num.split('x');
    _obj = this.array2formula(arr, num[1])
    # console.log _obj[0][0]*
    for i from 0 to _obj[0].length-1 by 1 
      _i = _obj[0][i]*_obj[1][0]
      _obj[0][i] = _i
    for i from 0 to _obj[1].length-1 by 1
      _i = _obj[1][i]*_obj[0][0]
      _obj[1][i] = _i
    console.log _obj[0]
    console.log _obj[1]
    
    # _obj[0]


Kakulus.prototype.Arr = _Arr