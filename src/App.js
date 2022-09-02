import { useState, useEffect } from 'react';

function One() {
  const style = `
    h2 {
      color: crimson;
    }
  `;

  return (
    <>
      <style>{style}</style>
      <h2>Chapter 1</h2>
    </>
  );
}

function Two() {
  const style = `
    h2 {
      color: cadetblue;
    }
  `;

  return (
    <>
      <style>{style}</style>
      <h2>Chapter 2</h2>
    </>
  );
}

const CHAPTERS = [
  {
    number: 1,
    title: 'Chapter 1',
    Page: One
  },
  {
    number: 2,
    title: 'Chapter 2',
    Page: Two
  }
];

export default function App() {
  const [currentNumber, setCurrentNumber] = useState(1);

  const { title, Page } = CHAPTERS
    .find(({ number }) => number === currentNumber);

  useEffect(
    () => {
      document.title = title;
    },
    [currentNumber]
  );

  return (
    <>
      <nav>
        <ul>
          {CHAPTERS.map(({ number }) => (
            <li key={number}>
              <button onClick={() => setCurrentNumber(number)}>
                Chapter {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <Page/>
    </>
  );
};