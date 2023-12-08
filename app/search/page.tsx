'use client';
import {useRouter} from 'next/navigation';

export default function SearchPage() {
  const router = useRouter();

  // Здесь можно использовать значение query для получения необходимой информации
  return (
    <div>
      <h1>search page!!</h1>
    </div>
  );
}
