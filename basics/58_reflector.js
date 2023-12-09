const target = {
         property1: 'value1',
         property2: 'value2'
       };
       
       const proxy = new Proxy(target, {
         get: function(target, property, receiver) {
           console.log(`Getting ${property}`);
           return Reflect.get(target, property, receiver);
         },
         set: function(target, property, value, receiver) {
           console.log(`Setting ${property} to ${value}`);
           return Reflect.set(target, property, value, receiver);
         }
       });
       
       console.log(proxy.property1); // Getting property1, Output: value1
       proxy.property2 = 'new value'; // Setting property2 to new value
       