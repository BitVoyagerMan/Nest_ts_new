import axios from 'axios';
import Link from 'next/link';
import * as React from 'react';

export default function SideBar() {
  const [tableItems, setTableItems] = React.useState([]);

  const fetchData = async () => {
    const data: any = await axios.get('http://localhost:3000/api/hello');
    console.log(data.data.name);
    setTableItems(data.data.name);
  };
  React.useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className='flex h-screen w-60 flex-col bg-white p-3 shadow'>
      <div className='space-y-3'>
        <div className='flex items-center'>
          <h2 className='text-xl font-bold'>Table categories</h2>
        </div>
        <div className='flex-1'>
          <ul className='space-y-1 pt-2 pb-4 text-sm'>
            {tableItems.map((tableItem: string) => (
              <li className='rounded-sm' key={tableItem}>
                <Link
                  href={'/tables/' + tableItem}
                  className='flex items-center space-x-3 rounded-md p-2'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4'
                    />
                  </svg>
                  <span>{tableItem}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
