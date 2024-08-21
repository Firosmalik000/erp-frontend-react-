import { useEffect, useState } from 'react';
import CustomInput from '../components/CustomInput';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { loginUser, reset } from '../features/slice/AuthSlice';
import { AppDispatch, RootState } from '../features/store';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isError, isSuccess, isLoading, message } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (user || isSuccess) {
      navigate('/');
      console.log({ user });
      console.log({ isSuccess });
    }
    dispatch(reset());
  }, [user, isSuccess, navigate, dispatch]);

  const handleAuth = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  return (
    <div className="min-h-screen w-full bg-blue-800 flex justify-center items-center">
      <div className="w-[400px] bg-white rounded-3xl shadow-xl p-6">
        <div className="text-center text-3xl text-blue-800 font-semibold mb-8">LOGIN</div>
        <form onSubmit={handleAuth}>
          <CustomInput className="mb-4" title="Email" type="email" value={email} placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
          <CustomInput className="mb-4" title="Password" type="password" value={password} placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
          <button className="w-full bg-blue-800 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300" type="submit" disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Login'}
          </button>
          {isError && <p className="text-red-500 mt-4">{message}</p>}
          {isSuccess && <p className="text-green-500 mt-4">Login successful!</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
