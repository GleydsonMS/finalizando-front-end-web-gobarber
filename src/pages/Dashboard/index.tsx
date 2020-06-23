import React from 'react';

import { FiPower } from 'react-icons/fi';
import { Container, Header, HeaderContent, Profile } from './styles';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { singOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img
              src="https://avatars1.githubusercontent.com/u/8749369?s=460&u=0afa4150ab4e64a0626ac15c6acd596748e93cf0&v=4"
              alt="Gleydson Miranda {/* user.name */}"
            />
            <div>
              <span>Bem-vindo,</span>
              <strong>Gleydson Miranda {/* user.name */}</strong>
            </div>
          </Profile>

          <button type="button" onClick={singOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
    </Container>
  );
};

export default Dashboard;
