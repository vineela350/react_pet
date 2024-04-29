// src/hooks/useFetchImage.ts
import { useState, useEffect } from 'react';

interface Pet {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  creationDate: string;
}

const useFetchImages = () => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/pets.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setPets(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { pets, loading, error };
};

export default useFetchImages;
