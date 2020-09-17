const checkResponse = (response) => {
  if (response.status !== 200) {
    console.log(`Error with the request! ${response.status}`);
    return;
  }
  //console.log(response);
  return response.json();
};

const fetchData = (difficulty, usernames) => {
  console.log("fetchData called");
  let sortedArray = getCorrectData(difficulty, usernames);
      let promiseArray = sortedArray.map(username => {
        return fetch(`https://api.github.com/users/${username}`)
        .then(checkResponse)
        .catch( err => {
            throw new Error (`fetch user failed ${err}`);     
          })
      })

    return Promise.all(promiseArray);

}

const getCorrectData = (difficulty, usernames) => {
  let sortedArray = usernames.sort(() => Math.random() - 0.5);
  return sortedArray.slice(0, difficulty)
}

export default fetchData;