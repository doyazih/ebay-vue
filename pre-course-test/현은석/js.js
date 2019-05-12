// jsfiddle 에서 실행해보세요.
// 결과값이 console에 표시됩니다.

const makeUserTitle = (data) => {
  return new Promise((resolve, reject) => {
    let titleArray = data.reduce(reducer, {});

    resolve(titleArray);
  });
}

const reducer = (accumulator, value, index, array) => {
  const user = 'user' + value.userId;

  if (accumulator[user]) {
    const titleCount = Object.keys(accumulator[user]).length;
    accumulator[user]['title' + (titleCount + 1).toString()] = value.title;
  } else {
    accumulator[user] = { title1: value.title }
  }
  return accumulator;
}

fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(data => makeUserTitle(data))
  .then(data => console.log(data))