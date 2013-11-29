Kakulus = ->
  _define = {}    #include kakulus.define
  this._algo = (argu,_this)-> 
    # args = Array.prototype.slice.call(argu).splice(0);
    _fn = argu[0].toString()
    fn = _fn.replace(/\s/g,'').split('function(')[1].split(')')[0].split(',')
    invoke = ->
      obj = {}
      objarr = []
      console.log fn
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

