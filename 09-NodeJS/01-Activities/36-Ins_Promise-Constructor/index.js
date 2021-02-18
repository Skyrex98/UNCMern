const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const error = false;
    if (error) {
      reject('THERE WAS AN ERROR. REJECTED');
    }
    resolve('HEY I RESOLVED');
  }, 3000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const error = false;
    if (error) {
      reject('THERE WAS AN ERROR. REJECTED 2');
    }
    resolve('HEY I RESOLVED 2');
  }, 3000);
});

// // callback hell
// promise1
//   .then(value => {
//     console.log(value);
//     promise2
//       .then(value => {
//         console.log('value from promise 2', value);
//       })
//       .catch(err => console.log('err!!!! ', err));
//   })
//   .catch(err => console.log('err!!!! ', err));

const getValue = async () => {
  const theValueFromProm1 = await promise1;
  const theValueFromProm2 = await promise2;
  console.log('theValueFromProm1:', theValueFromProm1);
  console.log('theValueFromProm2:', theValueFromProm2);
};

getValue();
