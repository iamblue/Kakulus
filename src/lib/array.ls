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
  array2formula : (arr,n,m)->
    l = arr.length
    n = Number(n)
    m = Number(m)
    _obj = {}
    _t = 1
    _n = 0
    _obj[0] = []
    for y from 0 to l-1 by 1
      if (_t<=m)
        if(_t == m)
          _t = 1
          _n = _n+1 
          _obj[_n]= []  
        else
          if(_obj[0].length ==0)
            _t = 1
          else      
            _t = _t+1
        _obj[_n].push(arr[y])
    _obj
  
  array-simplified: (arr,num) ->
    #[2,3,4,5,6,6],2x3
    # num = num.split('x');
    # _obj = this.array2formula(arr, num[1])
    # console.log _obj

  _multiplied: (arr,n,m) ->
    #矩陣相成的另外一邊
    l = arr.length
    n = Number(n)
    m = Number(m)
    _obj = {}
    for y from 0 to m-1 by 1
      _obj[y] = []
      for i from 0 to n-1 by 1
        _obj[y].push(arr[i*m+y])
    _obj


  multiplied : (a1,n,a2,m) ->
    console.log a1
    #a1,a2 are 2 arrays
    n = n.split('x')
    m = m.split('x')
    # console.log m
    _a1 = this.array2formula(a1,n[0],n[1])
    _a2 = this._multiplied(a2,m[0],m[1])

    _n1 = Number(n[0])
    _n2 = Number(n[1])
    _n0 = 0
    _r = []

    # console.log _a1
    # console.log _a2

    # for y from 0 to _n1-1 by 1
    #   console.log 'a:'+_a1[y]
    #   console.log 'b:'+_a2[y]
        



Kakulus.prototype.Arr = _Arr