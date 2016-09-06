var names = ['Deep', 'Tom', 'Jack'];

names.forEach(function (x) {
  console.log('foreach', x)
});

var hello ={
  name:'Alpha',
  greet: function(){
    names.forEach((names) => {
      console.log(this.name +' Says Hi '+ names)
    });
  }
}

console.log(hello.name);
hello.greet();


var sum = (a, b) => console.log(a+b);
sum(1,2);
