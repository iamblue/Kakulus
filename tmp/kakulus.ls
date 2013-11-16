validator = 
  #驗證錯誤訊息
  types : ->{}
  msg : -> []
  check : (data)->
    this.error()
  error : ->
    this.msg.length !== 0

generator = 
  #產出
  msg: ->
  output: -> 


ka =
  #主程式 
  _x : (x)->
    x.toLowerCase()

  init:(x)->
    this.x(x) 

  _funtion : ->
    #把array轉乘functon
    _length = arguments.length 
    _output = ''
    for i in arguments
      if i != 0 && (_length-1) > 1
        if i != 1
          _output += i+'x^'+(_length-1)+'+'
        else
          _output += 'x^'+(_length-1)+'+'
      else
        if (_length-1) == 1
          if i != 1
            if (i != 0)
              _output += i+'x'+'+'
          else 
            _output += 'x'+'+'
        else if (_length-1 == 0)
          _output += i
      _length = _length-1 
    _output

  x:(x)->
    #檢查是否為常數
    _x = /x/g 
    _x.test(x)  
 
  o:(x)->
    #檢查是否有指數  
    _o = /\^/g
    _o.test(x)

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
  #積分  
  diff-algo:(x)->
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


Zigma = 
  algo: (n,k,f) ->
    #@n => 趨近
    #@k => 起始值
    #@f => function

Limit = 
  algo: ->



Arr = 
  _array: (x)->
    #把m x m矩陣變成1 x 2m
    _tmp-a = []
    for i in Object.keys(x)
      for _i in x[i]
        _tmp-a.push _i
    _tmp-a
  _init: (x)->
    Object.keys(x).length
  _equal: (x,y)->
    JSON.stringify(x) == JSON.stringify(y)
  _add: (x,y)->
    #x,y 都必須是相加矩陣
    # this._init(Arr2[Object.keys(x)])
    _x = new this._array(x)
    _y = new this._array(y) 
    console.log _x
    console.log _y
    if(this._init(x) == this._init(y))
       console.log('=======')
      





console.log(ka._funtion(4,0,3,4,2,0,4))

#計算Demo 
Arr2 = {
  a1: [
    '1'
    '2'
    '3'
  ] 
  a2: [
    '2'
    '3'
    '4'
  ]
  a3: [
    '5'
    '6'
    '7'
  ]
}
Arr3 = {
  a1: [
    '0'
    '0'
    '0'
  ] 
  a2: [
    '1'
    '1'
    '1'
  ]
  a3: [
    '1'
    '1'
    '1'
  ]
}
Arr._add(Arr2,Arr3)

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


#微分(一次導數)
console.log(ka.diff-algo('2x^6+x^2+3x+7'))
#微分求值
#console.log(ka.diff('2x^6+x^2+3x+7',))


