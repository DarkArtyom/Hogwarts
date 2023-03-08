import { useEffect, useState } from "react";
import { fetchAllStudents } from "../Services/fetches";
import CircleLoader from "react-spinners/CircleLoader";
import { Container } from "../components/Layout/Layout.styled";

export const AllStudents = () => {
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
        setStudents((prev) => [...prev, ...dataFetch.data]);
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
    <>
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {loading ? (
          <CircleLoader color="#36d7b7" />
        ) : (
          <ul>
            {students.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        )}
      </Container>
    </>
  );
};
