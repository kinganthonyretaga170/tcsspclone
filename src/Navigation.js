export default function Navigation({ chapters, currentNumber, setCurrentNumber }) {
  
  const listStyle = {
    backgroundColor: 'darkgrey',
    margin: 0,
    padding: '16px',
    listStyle: 'none',
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap'
  };

  const buttonStyle = {
    padding: '8px 16px',
    border: '1px solid black',
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
                  backgroundColor: isCurrent ? 'black' : 'white',
                  color: isCurrent ? 'white' : 'black'
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