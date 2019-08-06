import axios from 'axios'

const http = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
})

export default http