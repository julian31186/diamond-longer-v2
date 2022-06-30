
import Deso from 'deso-protocol';


const Login = () => {

    const fetchLogin = async () => {
        const deso = new Deso();
        const request = 3;
        const response = await deso.identity.login(request);
        return response;
    }

    return (
        <button onClick={fetchLogin}>Login</button>
    )
}

export default Login