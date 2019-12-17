const axios = require('axios');

module.exports = {
    async store(req, res){
        const config = {
            headers: {'X-Parse-Application-Id': 'br.com.metasix.poc'}
        }

        await axios.get('https://poc.metasix.solutions/parse/classes/FAQ', config).then((response) => {
            const results = response.data.results;
            const questions = results.map((item, index) => {
                return {position: index + 1, question: item.question}
            });
            return res.json(questions)
        }).catch((err) => {
            console.log('houve erro ', err);
        });
        
    }
};