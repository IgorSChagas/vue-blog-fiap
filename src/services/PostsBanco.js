import { http } from './config'

export default{ 

    listar:() => {
        return http.get('posts')
    }
}