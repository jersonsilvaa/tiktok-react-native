import { ENV } from '../utils/import'

export class Auth {
    async register(data){
        const url = `${ENV.BASE_API}/${ENV.API_ROUTES.REGISTER}/`
        const params = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        const res = await fetch(url, params)
        const result = await res.json()

        if(res.status !== 201) throw result

        return result
    }
}