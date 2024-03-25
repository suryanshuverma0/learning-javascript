var obj = {
         value: 42,
         getValue: function () {
             console.log(this.value);
         }
     };
     var getValue = obj.getValue.bind(obj);
     getValue();
     