const record = [{
     name: "Ajay",
     age: "34",
     address:
     {
         houseno: "8A",
         state: "Delhi",
         city: "New Delhi"
     }
  },
  {
     name: "Deepak",
     age: "32",
     address:
     {
         houseno: "8A",
         state: "Delhi",
         city: "New Delhi"
     }
  }
  ];
record.map(rec=>
  {
    console.log(rec.name);
    console.log(rec.address.houseno)
  })
  record.map(rec=>
    {
 const {name, age, address} = rec;
 console.log(name, age, address);
    });

  