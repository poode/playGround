  /**
   * Mock Objct
   */
  const Data = { 
    coustomer: {
      id: 1, 
      name: 'Mosh Hamedani', 
      isGold: true, 
      email: 'email' 
    },
    movies: ['movie1', 'movie2'],
  }; 


  
  /* jshint ignore:start */
  async function getData() { 
      try {
          const customer = await getCustomer(1); 
          console.log('Customer', customer);
          if (customer.isGold) {
            const movies = await getTopMovies(); 
            console.log('Movies', movies);
            const emailStatus = await sendEmail(); 
            console.log(emailStatus);
          }
      } catch (err) {
          console.log(err.message);
      }
  }
  /* jshint ignore:end */

  function getCustomer(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Data.coustomer);
          }, 4000);
    });  
  }
  
  function getTopMovies() {
    return new Promise ((resolve, reject)=>{
        setTimeout(() => {
            resolve(Data.movies);
          }, 4000);
    });
  }
  
  function sendEmail(email, movies) {
   return new Promise ((resolve, reject)=>{
    setTimeout(() => {
        resolve('Email sent...');
      }, 4000);
   });
  }

  getData();