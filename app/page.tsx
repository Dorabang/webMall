'use client';
import Link from 'next/link';
import SearchForm from './components/SearchForm';

export default function Home() {
  return (
    <div className='container mx-auto'>
      <SearchForm />
      <ul>
        <li>
          <Link href='/products/1'>첫 번째 상품</Link>
        </li>
        <li>
          <Link href='/products/2'>두 번째 상품</Link>
        </li>
        <li>
          <Link href='/products/3'>세 번째 상품</Link>
        </li>
      </ul>
    </div>
  );
}
