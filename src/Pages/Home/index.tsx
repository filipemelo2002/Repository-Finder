import React, { useState, useCallback, FormEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import Logo from '../../assets/logo-github.svg';
import api from '../../services/api';

import { Container, Title, Form, Repositories } from './styles';

import { ApplicationStore } from '../../store';
import { add_repository } from '../../store/repositories/actions';

interface Repository {
  id: number;
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}

const Home: React.FC = () => {
  const [ newRepo, setNewRepo ] = useState('');
  const repositories = useSelector( (store: ApplicationStore) => store.repositories );

  const dispatch = useDispatch();

  const handleAddRepository = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    // Add novos repositorios
    
    try {
        e.preventDefault();

      const response = await api.get<Repository>(`repos/${newRepo}`);
      const repository = response.data;

      dispatch( add_repository(repository) );

      setNewRepo('');

      toast.success('Adicionado!');
    } catch (err) {
      toast.error('Oops, algo deu errado')
    }
  }, [ newRepo, dispatch ]);

  return (
    <Container>
      <img src={ Logo } alt="Logo Github"/>
      <Title>Encontre Repositórios no GitHub</Title>

      <Form
        onSubmit={handleAddRepository}
      >
        <input 
          type="text"
          placeholder="Digite o nome do repositório"
          onChange={e => setNewRepo(e.target.value)}
          value={ newRepo }
        />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        {repositories.map((repo, index) => (
          <Link to={`/repository/${index}`} key={index} >
            <img src={ repo.owner.avatar_url } alt={ repo.owner.login }/>
            <div>
              <strong> { repo.full_name } </strong>
              <p>{ repo.description }</p>
            </div>

            <FiChevronRight size={ 40 } />
          </Link>
        ))}
      </Repositories>
    </Container>
  );
}

export default Home;