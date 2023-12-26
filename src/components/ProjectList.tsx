import { styled } from 'styled-components';

import { Project } from '../types';

import ListItem from './ListItem';

const ProjectListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top: solid var(--border-color);
`;

const ProjectList = ({ projects }: { projects: Project[] }) => {
  return (
    <ProjectListWrapper>
      {projects.map((project: Project) => {
        return <ListItem item={project} />;
      })}
    </ProjectListWrapper>
  );
};

export default ProjectList;
