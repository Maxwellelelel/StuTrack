import axios from 'axios';

let formData = new FormData()

formData.append('userName', 'Jonas')
formData.append('password', '1234')
export function AxiosPost() {
    axios.post('./test.txt', { data: formData }
    )
        .then((res) => {
            console.log(res)
        }, (err) => {
            console.log(err)
        })
}