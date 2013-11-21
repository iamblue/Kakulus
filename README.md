Kakulus 
============
Code math for javascript lover


feature 
========

- __Humanity operation__:
 
  As like as you write a math function in a common
- __Denpendency injector__: 

  Like angularJS way to build your math fomula  


Formula List
========


- __Array__
- __Limit__
- __Zigma__
- __determine__
- __analysis__





Usage
========

1. Simply use the fomula:

```javascript
  kakulus.main.slope(['123', '456']);
```

2. If you want to build a Math algo lib:

```javascript
  kakulus.define('main', []).algo(function($main){
    $main.slope(['123', '456']);
    //anythin for your math algo
  }).factory(function(){
    return console.log('factory');
  });

```


