_analysis = 
  #數值分析 
  _init : ->

  _lsm-init: (arr,number) -> 
    zigmax = 0;
    zigmax2 = 0;
    zigmay = 0;
    zigmay2 = 0;

    for i in arr
      zigmax += i.x

  lsm : (arr)->
    #least sequare method
    #最小平方法
    n = arr.length
    m = n-2
    _map = []
    _map.push(n)
    _map2 = []

    o = {}
    for i from 0 to m-1 by 1
      o.[i] = []
      for _i from 0 to m-1 by 1
        o.[i].push _i+i
    console.log o
    x = 0
    x2 = 0
    y = 0
    xy = 0
    for i in arr
      x += i.x
      x2 += i.x*i.x
      y += i.y
      xy += i.x*i.y
    console.log x
    console.log x2
    console.log y
    console.log xy
    _map.push x
    _map.push x2
    _map2.push y
    _map2.push xy
    console.log _map
    console.log _map2
    _map.push y
    _map.push xy


Kakulus.prototype.analysis = _analysis 