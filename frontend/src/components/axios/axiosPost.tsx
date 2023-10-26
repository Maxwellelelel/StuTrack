import axios from 'axios';

let formData = new FormData()

formData.append('userName', 'Jonas')
formData.append('password', '1234')
export function AxiosPost() {
    axios.post('http://127.0.0.1:8000', { data: formData }
    )
        .then((res) => {
            console.log(res)
        }, (err) => {
            console.log(err)
        })
}