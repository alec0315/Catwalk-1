import React, { useState, useEffect } from 'react';
import Questions from './Questions.jsx';
import Search from './Search.jsx';
import Answers from './Answers.jsx';
import CreateQuestion from './CreateQuestion.jsx';
import axios from 'axios';
import { TOKEN } from './config.js';
import featured from '../App.jsx';
import ModalQuestion from './ModalQuestion.jsx';
import ModalAnswer from './ModalQuestion.jsx';
import CreateAnswer from './CreateAnswer.jsx';
import App from '../App.jsx';

const QuestionsAndAnswers = ( {featuredProduct, setFeaturedProduct}) => {


  // const [featuredProduct, setFeaturedProduct] = useState({});
  const [listOfQuestions, setListOfQuestions] = useState([]);
  const [listOfAnswers, setListOfAnswers] = useState([]);

  // console.log('stateListOfAnswers: ', listOfAnswers)
  // GET For currrent product
  const firstCall = (id) => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions',
      {headers: {
        'Authorization': `${TOKEN}`
      },
      params: {
        product_id: id
      }
      })
      .then((res) => {
        // console.log('setListOfQuestions:  ', res.data);
        setListOfQuestions(res.data);
        // postReq();
      })
      .catch((err) => {
        console.log('featuredProduct', featuredProduct)
        console.log(err);
      });
  };

  // const firstCall = () => {
  //   axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/19089/',
  //     {headers: {
  //       'Authorization': `${TOKEN}`
  //     }
  //     })
  //     .then((res) => {
  //       console.log('featuredProduct:  ', res.data);
  //       setFeaturedProduct(res.data);
  //       return res.data;
  //     })
  //     .then((res) => {
  //       axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions',
  //         {headers: {
  //           'Authorization': `${TOKEN}`
  //         },
  //         params: {
  //           product_id: 19090
  //         }
  //         })
  //         .then((res) => {
  //           // console.log('setListOfQuestions:  ', res.data);
  //           setListOfQuestions(res.data);
  //           // postReq();
  //         });
  //     });
  // };

  useEffect(() => {
    firstCall(featuredProduct.id);
  }, [featuredProduct]);

  return (
    <div>
      <h1>Questions & Answers</h1>
      <Search setListOfQuestions={setListOfQuestions} listOfQuestions={listOfQuestions} />
      <Questions setListOfAnswers={setListOfAnswers} listOfQuestions={listOfQuestions} featuredProduct={featuredProduct} listOfAnswers={listOfAnswers}/>
      <CreateQuestion />
      <CreateAnswer />
    </div>
  );
};

export default QuestionsAndAnswers;




// https://stackoverflow.com/questions/43051291/attach-authorization-header-for-all-axios-requests



// POST /qa/questions Adds a question for the given product

// const addQuestion = (body) => {
//   axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/19089/',
//     {headers: {
//       'Authorization': `${TOKEN}`
//     }
//     })
//     .then((res) => {
//       console.log('featuredProduct:  ', res.data);
//       setFeaturedProduct(res.data);
//     });
// };


// GET /qa/questions Retrieves a list of questions for a particular product

// useEffect(() => {
//   axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions',
//     {headers: {
//       'Authorization': `${TOKEN}`
//     },
//     params: {
//       product_id: featuredProduct.id
//     }
//     }
//   )
//     .then((res) => {
//       console.log('setListOfQuestions:  ', res.data);
//       setListOfQuestions(res.data);
//     });
// }, [featuredProduct]);

// GET /qa/questions/:question_id/answers Retrieves a list of ANSWERS for a particular product


