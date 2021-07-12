import React from 'react';
import { useRouter } from 'next/router';
import { LayoutAdmin } from '../../../src/components/LayoutAdmin';
import { PageHeader } from '../../../src/components/PageHeader';
import { Color, PrimaryButton, Size } from '../../../src/components/PrimaryButton';
import { ProjectsTable } from '../../../src/components/ProjectsTable';

const ProjectsPage = () => {
  const router = useRouter();

  return (
    <LayoutAdmin>
      <>
        <PageHeader header="Projects" />
        <PrimaryButton
          size={Size.large}
          fillColor={Color.blue}
          onClick={() => router.push('projects/create')}>
          Create new project
        </PrimaryButton>

        <ProjectsTable />
      </>
    </LayoutAdmin>
  );
};

export default ProjectsPage;
