import { useSelector } from 'react-redux';

import { useEffect } from 'react';
import { getMe } from '../features/slice/AuthSlice';
import { useDispatch } from 'react-redux';
import Layout from '../layouts/Layout';
import { AppDispatch, RootState } from '../features/store';

const Dashboard = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  // if (isLoading) return <p>Loading...</p>;
  // if (isError) return <p>{message}</p>;

  return (
    <Layout>
      <div>{user ? `Welcome ${user.email}` : 'No user data'}</div>
    </Layout>
  );
};

export default Dashboard;
