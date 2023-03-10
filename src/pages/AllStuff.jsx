import { useEffect, useState } from 'react';
import { fetchAllStudents } from '../Services/fetches';
// import CircleLoader from 'react-spinners/CircleLoader';
// import { Container } from '../components/Layout/Layout.styled';
import { AllPersons } from '../components/AllPersons/AllPersons';

export const AllStaff = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    (async function () {
      try {
        const dataFetch = await fetchAllStudents(signal);
        if (!dataFetch) {
          return;
        }
        setStudents(prev => [...prev, ...dataFetch.data]);
        console.log(dataFetch.data);
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
