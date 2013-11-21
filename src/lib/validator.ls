_validator = 
  #驗證錯誤訊息
  types : ->{}
  msg : -> []
  check : (data)->
    this.error()
  error : ->
    !@msg.length

Kakulus.prototype.validator = _validator 