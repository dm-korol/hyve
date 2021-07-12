export interface ProjectsTableItem {
  pid: string;
  owner?: string;
  project_name: string;
  end_date?: string;
  price?: string;
  status: string;
}

export const MOCK_DATA = [
  {
    pid: 'GH-',
    owner: '0x05fF2B0...',
    project_name: 'Basic Project',
    end_date: '21/06/2021',
    price: '1,000,000',
    status: 'Active',
  },
  {
    pid: 'GH-',
    owner: '',
    project_name: 'Basic Project',
    end_date: '',
    price: '',
    status: 'Active',
  },
  {
    pid: 'GH-',
    owner: '0x05fF2B0...',
    project_name: 'Basic Project',
    end_date: '21/06/2021',
    price: '1,000,000',
    status: 'New',
  },
  {
    pid: 'GH-',
    owner: '',
    project_name: 'Basic Project',
    end_date: '',
    price: '1,000,000',
    status: 'New',
  },
  {
    pid: 'GH-',
    owner: '',
    project_name: 'Basic Project',
    end_date: '',
    price: '',
    status: 'Funded',
  },
  {
    pid: 'GH-',
    owner: '0x05fF2B0...',
    project_name: 'Basic Project',
    end_date: '21/06/2021',
    price: '1,000,000',
    status: 'Active',
  },
  {
    pid: 'GH-',
    owner: '0x05fF2B0...',
    project_name: 'Basic Project',
    end_date: '21/06/2021',
    price: '1,000,000',
    status: 'Canceled',
  },
];
