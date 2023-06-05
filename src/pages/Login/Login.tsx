import { useForm } from 'react-hook-form';
import './Login.scss';
import logoSvg from '../../assets/logo.svg';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { User } from '../../models/user';
import { useNavigate } from "react-router-dom";
import LoginFormValues from './models/userForm.model';
import { retrieveMockUser } from './mock.login';
import { useSignIn } from 'react-auth-kit';
import * as jose from 'jose';


  const validationSchema = Yup.object().shape({
    username:  Yup.string().required('Username is required'),
    password:  Yup.string().required('Password is required'),
  })


  const  fakeLogin = async (user: User) => {
    const secret = new TextEncoder().encode(
      'cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2',
    );
    const alg = 'HS256';
    const jwt = new jose.SignJWT({ firstName: user.firstName, lastName: user.lastName, type: user.type })
              .setProtectedHeader({ alg })
              .sign(secret);
    return await jwt;
  }


const Login = () => {
    const navigate = useNavigate();
    const signIn = useSignIn();
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>({
                                                                resolver: yupResolver(validationSchema)});

    // const {login} = useAuth();
    const onSubmit = (data: LoginFormValues) => {
        const userMocked = retrieveMockUser(data);
        if (!userMocked) {
            // TODO invalid password
        }
        // login(userMocked!);
        fakeLogin(userMocked!).then((t) => {
          signIn({
            token: t,
            expiresIn: 3600,
            tokenType: 'Bearer',
            authState: { ...userMocked}
          })
          navigate("/", { replace: true });
        })
    };

    return (
        <div className='login-container'>
                <img className='login-container__img' src={logoSvg}></img>
                <form onSubmit={handleSubmit(onSubmit)} className='login-container__form'>
                    <div>
                        <input {...register("username")} placeholder="admin or user" 
                         className={`${errors.username ? 'login-container__form--is-invalid' : ''}`}/>
                        <div className='login-container__error'>{errors.username?.message}</div>
                    </div>
                    <div>
                        <input {...register("password")} placeholder="pasword is 123456 for all" 
                         className={`${errors.password ? 'login-container__form--is-invalid' : ''}`} />
                        <div className='login-container__error'>{errors.password?.message}</div>
                    </div>

                    <button type='submit'>Login</button>
                </form>
        </div>
        
    )
  }
  
  export default Login