const url = 'http://localhost:5500/api'
/* 

GET: axios.get(url)
POST: axios.post(url/:id, novoDado)
PUT: axios.put(url/:id, dadoASerAtualizado)
DELETE: axios.delete(url/:id)

criar funções com events para cada funcionalidade, onde, a priori, os dados serão repassados através do prompt.

*/

const addUser = () => {
    let userName = document.getElementById('username')
    let city = document.getElementById('city')
    let avatar = document.getElementById('avatar')
    const user = {
        name: userName.value,
        avatar: avatar.value || 'https://picsum.photos/200/300',
        city: city.value
    }
    axios
        .post(`${url}`, user)
        .then(response => alert(response.data))
        .catch(error => console.log(error))

    userName.value = ''
    city.value = ''
    avatar.value = ''
}

var btn = document.querySelector('.addUserBtn')
btn.addEventListener('click', addUser, false)
