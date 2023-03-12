import { useEffect, useState } from 'react';
import { fetchSlytherin } from '../../Services/fetches';
import { AllPersons } from '../../components/AllPersons/AllPersons';

export const SlytherinPage = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    (async function () {
      try {
        const dataFetch = await fetchSlytherin(signal);
        if (!dataFetch) {
          return;
        }
        setStudents(prev => [...prev, ...dataFetch.data]);
      } catch (error) {
        throw new Error(error);
      }
    })();

    return () => {
      controller.abort();
    };
  }, []);

  useEffect(() => {
    if (students.length > 0) {
      setLoading(false);
    }
  }, [students]);

  return (
    <main>
      <AllPersons isLoading={loading} students={students} />
    </main>
  );
};
