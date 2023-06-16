import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';

interface DataType {
  key: React.Key;
  name: string;
  manufacturer: string;
  expiration_date : string;
  price: string
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'Avizor Comfort',
        value: 'Avizor Comfort',
      },
      {
        text: 'Avizor Moisturizing',
        value: 'Avizor Moisturizing',
      },
      {
        text: 'Aknamino MR',
        value: 'Aknamino MR',
      },
      {
        text: 'Ardial ',
        value: 'Ardial ',
      },
      {
        text: 'Arpeflu',
        value: 'Arpeflu',
      },
      {
        text: 'Artrexicam',
        value: 'Artrexicam',
      },
      {
        text: 'Biotic',
        value: 'Biotic',
      },
      {
        text: 'Valmaton',
        value: 'Valmaton',
      },
      {
        text: 'Galozilok Nasal Spray ',
        value: 'Galozilok Nasal',
      },
      {
        text: 'Hepacomb Detox',
        value: 'Hepacomb Detox',
      },
      {
        text: 'Hypomed',
        value: 'Hypomed',
      },
      {
        text: 'Glucose',
        value: 'Glucose',
      },
      {
        text: 'Depakin Chrono',
        value: 'Depakin Chrono',
      },
      {
        text: 'Imbinorm',
        value: 'Imbinorm',
      },
      {
        text: 'Cavinton',
        value: 'Cavinton',
      },
      {
        text: 'Quamatel',
        value: 'Quamatel',
      },
      {
        text: 'Kidz Multicomplex',
        value: 'Kidz Multicomplex',
      },
      {
        text: 'Clobetasol',
        value: 'Clobetasol',
      },
      {
        text: 'Clopidogrel Active',
        value: 'Clopidogrel Active',
      },
      {
        text: 'Co-trimoxazole ',
        value: 'Co-trimoxazole ',
      },
      {
        text: 'Submenu',
        value: 'Submenu',
        children: [
          {
            text: 'Eye Drops',
            value: 'Eye Drops',
          },
          {
            text: 'Capsules',
            value: 'Capsules',
          },
          {
            text: 'Tablets',
            value: 'Tablets',
          },
          {
            text: 'Cream',
            value: 'Cream',
          },
          {
            text: 'Spray',
            value: 'Spray',
          },
          {
            text: 'Pack',
            value: 'Pack',
          },
          {
            text: 'Tablets',
            value: 'Tablets',
          },
          {
            text: 'Ampoules',
            value: 'Ampoules',
          },
          {
            text: 'Stick',
            value: 'Stick',
          },
        ],
      },
    ],
    onFilter: (value: string, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  },
  {
    title: 'manufacturer',
    dataIndex: 'manufacturer',
    filters: [
      {
        text: 'Avizor S.A.',
        value: 'Avizor S.A.',
      },
      {
        text: 'Dexel',
        value: 'Dexel',
      },
      {
        text: 'Naturofarm',
        value: 'Naturofarm',
      },
      {
        text: 'Lekfarm',
        value: 'Lekfarm',
      },
      {
        text: 'Nizhpharm',
        value: 'Nizhpharm',
      },
      {
        text: 'Ambrosia SupGerb',
        value: 'Ambrosia SupGerb',
      },
      {
        text: 'Amvilab',
        value: 'Amvilab',
      },
      {
        text: 'Arsanit',
        value: 'Arsanit',
      },
      {
        text: 'Farmakor Production',
        value: 'Farmakor Production',
      },
      {
        text: 'Liquor',
        value: 'Liquor',
      },
      {
        text: 'Sanofi-Aventis',
        value: 'Sanofi-Aventis',
      },
      {
        text: 'Bon Farm',
        value: 'Bon Farm',
      },
      {
        text: 'Gedeon Richter',
        value: 'Gedeon Richter',
      },
      {
        text: 'WTF LLC',
        value: 'WTF LLC',
      },
      {
        text: 'Replek Farm',
        value: 'Replek Farm',
      },
    ],
    onFilter: (value: string, record) => record.manufacturer.indexOf(value) === 0,
  },
  {
    title: 'expiration_date',
    dataIndex: 'expiration_date',
    filters: [
      {
        text: '07/25',
        value: '07/25.',
      },
      {
        text: '07/24',
        value: '07/24',
      },
      {
        text: '08/24',
        value: '08/24',
      },
      {
        text: '01/24',
        value: '01/24',
      },
      {
        text: '10/24',
        value: '10/24',
      },
      {
        text: '03/24',
        value: '03/24',
      },
      {
        text: '12/25',
        value: '12/25',
      },
      {
        text: '04/25',
        value: '04/25',
      },
      {
        text: '10/25',
        value: '10/25',
      },
      {
        text: '05/25',
        value: '05/25',
      },
      {
        text: '01/26',
        value: '01/26',
      },
      {
        text: '09/24',
        value: '09/24',
      },
      {
        text: '07/24',
        value: '07/24',
      },
      {
        text: '01/24',
        value: '01/24',
      },
      {
        text: '11/25',
        value: '11/25',
      },
      {
        text: '02/25',
        value: '02/25',
      },
      {
        text: '07/27',
        value: '07/27',
      },
    ],
    onFilter: (value: string, record) => record.address.indexOf(value) === 0,
  },
  {
    title: 'Price',
    dataIndex: 'price',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.price - b.price,
  },
];

const data = [
  {
    key: '1',
    name: 'Avizor Comfort Eye Drops - 15ml',
    manufacturer: 'Avizor S.A.',
    expiration_date: '07/25',
    price: 1730,
  },
  {
    key: '2',
    name: 'Avizor Moisturizing Eye Drops - 15ml',
    manufacturer: 'Avizor S.A.',
    expiration_date: '07/25',
    price: 2740,
  },
  {
    key: '3',
    name: 'Aknamino MR Capsules 100mg x 56',
    manufacturer: 'Dexel',
    expiration_date: '07/24',
    price: 22586,
  },
  {
    key: '4',
    name: 'Ardial Capsules 0.35g x 30',
    manufacturer: 'Naturofarm',
    expiration_date: '08/24',
    price: 3850,
  },
  {
    key: '5',
    name: 'Arpeflu Tablets 100mg x 30',
    manufacturer: 'Lekfarm',
    expiration_date: '01/24',
    price: 5040,
  },
  {
    key: '6',
    name: 'Artrexicam Cream 30g',
    manufacturer: 'Nizhpharm',
    expiration_date: '10/24',
    price: 3484,
  },
  {
    key: '7',
    name: 'Biotic Capsules 500mg x 20',
    manufacturer: 'Ambrosia SupGerb',
    expiration_date: '03/24',
    price: 6420,
  },
  {
    key: '8',
    name: 'Valmaton Capsules x 60',
    manufacturer: 'Amvilab',
    expiration_date: '12/25',
    price: 6320,
  },
  {
    key: '9',
    name: 'Galozilok Nasal Spray 0.05% - 10ml',
    manufacturer: 'Arsanit',
    expiration_date: '04/25',
    price: 622,
  },
  {
    key: '10',
    name: 'Hepacomb Detox Pack 6g x 10',
    manufacturer: 'Farmakor Production',
    expiration_date: '04/25',
    price: 6095,
  },
  {
    key: '11',
    name: 'Hypomed Tablets 5mg/10mg x 40',
    manufacturer: 'Arpimed',
    expiration_date: '10/25',
    price: 2781,
  },
  {
    key: '12',
    name: 'Glucose 5% - 500ml',
    manufacturer: 'Liquor',
    expiration_date: '05/25',
    price: 346,
  },
  {
    key: '13',
    name: 'Depakin Chrono Tablets 500mg x 30',
    manufacturer: 'Sanofi-Aventis',
    expiration_date: '01/26',
    price: 2692,
  },
  {
    key: '14',
    name: 'Imbinorm Capsules 370mg x 30',
    manufacturer: 'Bon Farm',
    expiration_date: '09/24',
    price: 3993,
  },
  {
    key: '15',
    name: 'Cavinton IV 10mg - 2ml x 10',
    manufacturer: 'Gedeon Richter',
    expiration_date: '07/24',
    price: 2187,
  },
  {
    key: '16',
    name: 'Quamatel Ampoules 20mg x 5',
    manufacturer: 'Gedeon Richter',
    expiration_date: '01/24',
    price: 5550,
  },
  {
    key: '17',
    name: 'Kidz Multicomplex Stick 19.5g x 14',
    manufacturer: 'WTF LLC',
    expiration_date: '03/24',
    price: 6000,
  }, {
    key: '18',
    name: 'Clobetasol Cream 0.05% - 15g',
    manufacturer: 'Arpimed',
    expiration_date: '11/25',
    price: 1016,
  }, {
    key: '19',
    name: 'Clopidogrel Active Tablets 75mg x 30',
    manufacturer: 'Replek Farm',
    expiration_date: '02/25',
    price: 4200,
  }, {
    key: '20',
    name: 'Co-trimoxazole Tablets 400/80mg x 20',
    manufacturer: 'Arpimed',
    expiration_date: '07/27',
    price: 306,
  },
];

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const Wholesale_Price: React.FC = () => (
    <div style={{ height: '600px', overflowY: 'scroll' }}>
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );

export default Wholesale_Price;
