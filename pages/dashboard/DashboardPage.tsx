import { useRouter } from 'next/router';
import React from 'react';
import { LayoutAdmin } from '../../src/components/LayoutAdmin';
import { Color, PrimaryButton, Size } from '../../src/components/PrimaryButton';

const DashboardPage = () => {
  const router = useRouter();
  return (
    <LayoutAdmin>
      <>
        <PrimaryButton
          size={Size.large}
          fillColor={Color.blue}
          onClick={() => router.push('dashboard/projects')}>
          Projects
        </PrimaryButton>
      </>
    </LayoutAdmin>
  );
};

export default DashboardPage;
