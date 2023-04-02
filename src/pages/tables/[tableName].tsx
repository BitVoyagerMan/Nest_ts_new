import { useRouter } from 'next/router';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import UnderlineLink from '@/components/links/UnderlineLink';
import SideBar from '@/components/sideBar';
import MyTable from '@/components/table';
/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  const router = useRouter();
  console.log(typeof router.query['tableName']);
  let tableName;
  if (typeof router.query['tableName'] === 'string') {
    tableName = router.query['tableName'];
  }
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      {/* <Seo /> */}

      <main>
        <section className='bg-blue-300'>
          <div className=' relative flex  justify-start text-center'>
            <SideBar />
            <MyTable tableName={tableName} />
            <footer className='absolute bottom-2 text-gray-700'>
              © {new Date().getFullYear()} By{' '}
              <UnderlineLink href='#'>Minato-Legend</UnderlineLink>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}
