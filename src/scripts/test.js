 /**
     * https://stackoverflow.com/questions/63182107/how-can-i-get-a-value-from-a-react-bootstrap-form-on-submit
     * @param {*} e 
     */
  const onFormSubmit = e => {
    e.preventDefault()
    const formData = new FormData(e.target),
    formDataObj = Object.fromEntries(formData.entries())
    console.log(formDataObj)

    const axios = require("axios");

    const options = {
        method: 'GET',
        url: 'https://edamam-recipe-search.p.rapidapi.com/search',
        params: {q: 'chicken tomato'},
        headers: {
            'X-RapidAPI-Key': '1c01bfdfbcmsh477ce97a09c9667p14eef1jsne64d4135f9a5',
            'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        var ingredients = response.data.hits[1].recipe.ingredients;
        for (let i = 0; i < ingredients.length; i++) {
            console.log(ingredients[i]);
        }
    }).catch(function (error) {
        console.error(error);
    });
}