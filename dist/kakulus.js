Kakulus = ->
  _define = {}    #include kakulus.define
  this._algo = (argu,_this)-> 
    # args = Array.prototype.slice.call(argu).splice(0);
    _fn = argu[0].toString()
    fn = _fn.replace(/\s/g,'').split('function(')[1].split(')')[0].split(',')
    invoke = ->
      obj = {}
      objarr = []
      #console.log fn
      for i in fn 
        obj[i] = kakulus.[i.replace('$','')]
        objarr.push(kakulus.[i.replace('$','')])
      argu[0].apply(argu[0],objarr)
    invoke.apply(argu[0] ,fn) 
    new _this.Define(argu,_this)
  this._factory = (argu,_this)-> 
    new _this.Define(argu,_this)
  this.Define  = (argu,_this)->
    this.algo = ->  
      argu = arguments
      new _this._algo(argu,_this)
    this.factory = ->
      new _this._factory(argu,_this)
    this.Define
  this.define = -> 
    argu =  arguments   #argu[0]-> module define name, argu[1]-> modules name
    _define.[argu[0]] = ->
      argu[0]()
    new this.Define(argu,this)
    
  if !(this instanceof Kakulus) 
     throw new SyntaxError('ka constructor must be called with the new operator');
  
kakulus = new Kakulus()


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
_det = 
  #行列式
  #用來解線性
  _init : (x)->


  algo: (x)->
    this._init(x)
Kakulus.prototype.det = _det 
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

_Limit = 
  algo: ->


Kakulus.prototype.Limit = _Limit
_Zigma = 
  algo: (n,k,f) ->
    #@n => 趨近
    #@k => 起始值
    #@f => function

Kakulus.prototype.Zigma = _Zigma 
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
_validator = 
  #驗證錯誤訊息
  types : ->{}
  msg : -> []
  check : (data)->
    this.error()
  error : ->
    !@msg.length

Kakulus.prototype.validator = _validator 

#=============================================
#Demo
#==============================================


# _Arr._multiplied([2,3,4,5,6,6],2,3);
_Arr.multiplied([2,3,4,5,6,6],'3x2',[2,3,4,5,6,6],'2x3')
# _Arr.array-simplified([2,3,4,5,6,6],'2x3')

# _tmparr = [{x:-1.3,y:0.103},{x:-0.1,y:1.099},{x:0.2,y:0.808},{x:1.3,y:1.897}]
# _analysis.lsm(_tmparr)
# 


# kakulus.define('main', []).algo(
#   ($main,$generator,$arr)->
#     arr_tmp =[5,0,0,0,3,1]
#     console.log $generator.func(arr_tmp)
#     console.log \123
# ).factory(
#   ->
#     console.log \hifactory
# );
# kakulus.define('main2', []).algo(
#   ($main)->
#     $main.slope(['123','456'])
# ).factory(
#   ->
#     console.log \hifactory
# );

# arr_tmp =[5,0,0,0,3,1]
# kakulus.generator.func(arr_tmp)
# console.log kakulus.define('sdffsd333', ['sdffsd'])

# kakulus.define('sdffsd', ['sdffsd']).algo(-> console.log(123))

# 為何kakulus.main.slope(['123','456'])不能執行？
# 因為要先new過才能直接抓prototype的東西



# arr_tmp =[5,0,0,0,3,1]
# console.log(generator.func(arr_tmp))

# io = [{x:-1.3,y:0.103},{x:-0.1,y:1.099},{x:0.2,y:0.808},{x:1.3,y:1.897}]

# console.log(ka.diff-algo(generator.func([100,0,3,4,2,0,4])))

#計算Demo 
# Arr2 = {
#   a1: [
#     '1'
#     '2'
#     '3'
#   ] 
#   a2: [
#     '2'
#     '3'
#     '4'
#   ]
#   a3: [
#     '5'
#     '6'
#     '7'
#   ]
# }
# Arr3 = {
#   a1: [
#     '0'
#     '0'
#     '0'
#   ] 
#   a2: [
#     '1'
#     '1'
#     '1'
#   ]
#   a3: [
#     '1'
#     '1'
#     '1'
#   ]
# }
# console.log(Arr.add(Arr2,Arr3))

# kk =  ->
#   if (typeof kk.kerker == 'object')
#     kk.kerker
#   this.hihi = '123'
#   this.yoyo = (a,b) ->
#     this.hihi = a+b
#     a+b
#   kk.kerker = this 
#   this
 
# ttt = new kk()
# kk.prototype.kkk ='123'
# yyy = new kk()
# console.log(generator.arr('4x^8+4x^7+7x^4+3x^2+1'));
#微分(一次導數)
# console.log(ka.diff-algo('2x^6+x^2+3x+7'))
#微分求值
#console.log(ka.diff('2x^6+x^2+3x+7',))