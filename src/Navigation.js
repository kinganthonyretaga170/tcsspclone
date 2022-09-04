export default function Navigation({ chapters, currentNumber, setCurrentNumber }) {
  const white = '#f2f2f2';
  const black = '#262626';
  const dark = '#1a1a1a';

  const listStyle = {
    backgroundColor: black,
    margin: 0,
    padding: '16px',
    listStyle: 'none',
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap'
  };

  const buttonStyle = {
    padding: '8px 16px',
    border: `1px solid ${dark}`,
    borderRadius: '16px',
    cursor: 'pointer'
  };

  return (
    <nav>
      <ul style={listStyle}>
        {chapters.map(number => {
          const isCurrent = number === currentNumber;

          return (
            <li key={number}>
              <button 
                onClick={() => setCurrentNumber(number)}
                style={{
                  ...buttonStyle,
                  backgroundColor: isCurrent ? dark : white,
                  color: isCurrent ? white : dark
                }}
              >
                Chapter {number}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
} 