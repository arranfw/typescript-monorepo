import { useEffect, useState } from 'react';
import { Button } from 'ui';
import { AppSpecificComponent } from '~/components/AppSpecificComponent';

const useFetchHello = () => {
  const [hello, setHello] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:4000`);
      const data = await response.json();
      setHello(data.hello);
    };

    fetchData();
  }, []);

  return { hello };
};

export default function Web() {
  const { hello } = useFetchHello();

  return (
    <div>
      <h1>Web</h1>
      <p>{hello}</p>
      <Button />
      <AppSpecificComponent>Hello!</AppSpecificComponent>
    </div>
  );
}
