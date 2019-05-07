
//import axios from 'axios'

let _answers = {};

axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(res => {

    _answers = {};

    if (res && res.data && Array.isArray(res.data) && res.data.length > 0) {

      var posts = res.data;

      _answers = posts.reduce((accumulator, value) => {

        var userKey = 'user' + value.userId;  // userKey = 'user1';

        if (accumulator.hasOwnProperty(userKey)) {

          var titleKey = 'title' + (Object.keys(accumulator[userKey]).length + 1);  // titleKey = 'title1';

          accumulator[userKey][titleKey] = value.title;
        }
        else {
          accumulator[userKey] = {
            'title1': value.title
          }
        }

        return accumulator;
      }, {});
    }

    document.getElementById('answer').innerText = JSON.stringify(_answers, undefined, 2);
  });