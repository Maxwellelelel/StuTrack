import axios from 'axios';

let formData = new FormData()

formData.append('username', 'Jonas')
formData.append('password', '1234')
export function AxiosPost() {
    axios.post('user/login', { data: formData }
    )
        .then((res) => {
            console.log(res)
        }, (err) => {
            console.log(err)
        })
}