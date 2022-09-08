const arr = [
    {
      price: 150000,
      model: 'alto',
      color: 'blue',
      carRegistration: '2014',
      company: 'suzuki',
    },
    {
      price: 250000,
      model: 'civic',
      color: 'yellow',
      carRegistration: '2012',
      company: 'honda',
    },
    {
      price: 550000,
      model: 'corolla',
      color: 'gray',
      carRegistration: '2017',
      company: 'toyota',
    },
    {
      price: 850000,
      model: 'safari',
      color: 'black',
      carRegistration: '2018',
      company: 'nissan',
    },
  ]
  const newArr = arr.map(function (arr) {
    document.getElementById(
      'carCompany',
    ).innerHTML += `<option>${arr.company}</option>`
    console.log(arr.company);
  })
  
  
   cars();
  
  function cars() {
    let carName = document.getElementById('carCompany').value
    document.getElementById('carModel').innerHTML = ''
    const newArr1 = arr.filter((user) => user.company == carName)
    const newArr2 = newArr1.map(function (arr) {
      document.getElementById(
        'carModel',
      ).innerHTML += `<option>${arr.model}</option>`
    })
    console.log(carName)
  };
  function carSearch() {
    let carModel = document.getElementById('carModel').value
    const newArr1 = arr.filter((user) => user.carModel == carModel)
    console.log(carModel)
  };  
  