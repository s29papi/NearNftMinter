import 'bootstrap/dist/css/bootstrap.min.css';
import {login } from "../../utility/utils";
import { Alert,  Button } from "react-bootstrap";

function LoginPage () {
        return (
                <main className="container-xxl bg-dark" style={{display: "grid", height: "100vh", overflow: "hidden"}}>
            
                    <Alert className='w-75 mx-auto  p-5 mt-5 h-25' variant="secondary">
                        <Alert.Heading className="p-3">Welcome, Click to Sign In to the Near Blockchain &nbsp;
                        <Button className="w-25" variant="success" onClick={login}>Sign in</Button>
                        </Alert.Heading>
                    </Alert>
                
                </main>
        )
    }




export default LoginPage;


 

 