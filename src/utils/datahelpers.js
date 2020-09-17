const checkResponse = (response) => {
  if (response.status !== 200) {
    console.log(`Error with the request! ${response.status}`);
    return;
  }
  //console.log(response);
  return response.json();
};

const fetchData = (difficulty, usernames) => {
  let sortedArray = getRandomUsers(difficulty, usernames);
      let promiseArray = sortedArray.map(username => {
        return fetch(`https://api.github.com/users/${username}`)
        .then(checkResponse)
        .catch( err => {
            throw new Error (`fetch user failed ${err}`);     
          })
      })

    return Promise.all(promiseArray);

}

const getRandomUsers = (difficulty, usernames) => {
  let sortedArray = usernames.sort(() => Math.random() - 0.5);
  let randomised = sortedArray.slice(0, difficulty/2)
  let randomisedDouble = randomised.concat(randomised);
  return randomisedDouble.sort(() => Math.random() - 0.5);
}

export default fetchData;