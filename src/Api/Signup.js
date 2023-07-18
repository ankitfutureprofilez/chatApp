import Api from "./Api";
import { Component } from 'react'

class Singup extends Component {
    async Regshow(key) {
        return Api.post('/signup', key)
    }

    async Loginshow(key) {
        return Api.post('/login', key)
    }
    async List() {
        return Api.get('/chats')
    }
}



export default Singup;