const target = {
         property1: 'value1',
         property2: 'value2'
       };
       
       const handler = {
         get: function(target, property, receiver) {
           console.log(`Getting ${property}`);
           return target[property];
         },
         set: function(target, property, value, receiver) {
           console.log(`Setting ${property} to ${value}`);
           target[property] = value;
           return true; // Indicates success
         }
       };
       
       const proxy = new Proxy(target, handler);
       
       console.log(proxy.property1); // Getting property1, Output: value1
       proxy.property2 = 'new value';// Setting property2 to new value
       proxy.property3 = 'value 3';// Setting
       console.log(proxy.property3);
       