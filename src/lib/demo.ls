
#=============================================
#Demo
#==============================================
# 
kakulus.define('main', []).algo(
  ($main,$generator,$arr)->
    arr_tmp =[5,0,0,0,3,1]
    console.log $generator.func(arr_tmp)
    console.log \123
).factory(
  ->
    console.log \hifactory
);
kakulus.define('main2', []).algo(
  ($main)->
    $main.slope(['123','456'])
).factory(
  ->
    console.log \hifactory
);

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