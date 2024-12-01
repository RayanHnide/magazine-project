"use client"
import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { cities } from '../../data';
import SectionsHeader from '@/components/Sections Header';

export default function BasicBars() {
  const [isClient, setIsClient] = React.useState(false);
  const votes = React.useMemo(() => cities.map(() => Math.floor(Math.random() * 10000)), []);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Loading...</div>
  }

  return (
    <>
      <SectionsHeader title='لوحة نتائج التصويت للمدن' />
      <div className='container mx-auto flex items-center justify-center min-h-screen'>
        <BarChart
          colors={['#003366']}
          xAxis={[{ scaleType: 'band', data: cities }]}
          series={[{ data: votes }]}
          width={1500}
          height={500}
        />
      </div>
    </>
  );
}