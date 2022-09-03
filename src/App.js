import { useState, useEffect, useMemo } from 'react';
import CHAPTERS from './chapters';
import Navigation from './Navigation';

export default function App() {
  const [currentNumber, setCurrentNumber] = useState(1);

  const { title, Page } = CHAPTERS.find(
    ({ number }) => number === currentNumber
  );

  const chapters = useMemo(
    () => CHAPTERS.map(({ number }) => number),
    []
  );

  useEffect(
    () => {
      document.title = title;
    },
    [currentNumber]
  );

  return (
    <>
      <style>{'body { margin: 0; padding: 0; }'}</style>
      <Navigation
        chapters={chapters}
        currentNumber={currentNumber}
        setCurrentNumber={setCurrentNumber}
      />
      <Page/>
    </>
  );
};