import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { ApplicationStore } from '../../store';

import Logo from '../../assets/logo-github.svg'

import { Container, Content, Description, Title } from './styles';

const RepositoryComponent: React.FC = () => {
  const { id: repositoryId } = useParams<{ id: string }>();
  const repository = useSelector((store: ApplicationStore) => store.repositories[Number(repositoryId)]);

  return (
    <Container>
      <Link to="/"><img src={ Logo } alt=""/></Link>
      <Content>
        <img src={ repository.owner.avatar_url } alt={ repository.owner.login }/>

        <div>
          <Title> { repository.full_name } </Title>
          <Description> { repository.description } </Description>
        </div>
      </Content>
    </Container>
  );
}

export default RepositoryComponent;