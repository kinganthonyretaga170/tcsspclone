export default function Three() {
  const style = `
    body {
      background: #001c2e;
    }

    section {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      max-width: 800px;
      margin: 40px auto;
      font: 300 100% Roboto, sans-serif;
      text-align: center;
      color: #ffffff;
    }

    h1 {
      font-size: 4.5vw;
      margin: 40px 0 12px;
    }

    p {
      font-size: 2.8vw;
      margin-top: 0;
    }

    rect:nth-child(1) {
      fill: #1a9f8c;
      animation-delay: 0ms;
    }

    rect:nth-child(2) {
      fill: #1eab8d;
      animation-delay: 200ms;
    }
    
    rect:nth-child(3) {
      fill: #20b38e;
      animation-delay: 400ms;
    }
    
    rect:nth-child(4) {
      fill: #22b78d;
      animation-delay: 600ms;
    }
    
    rect:nth-child(5) {
      fill: #22b88e;
      animation-delay: 800ms;
    }
    
    rect:nth-child(6) {
      fill: #21b48d;
      animation-delay: 1s;
    }
    
    rect:nth-child(7) {
      fill: #1eaf8e;
      animation-delay: 1.2s;
    }
    
    rect:nth-child(8) {
      fill: #1ca48d;
      animation-delay: 1.4s;
    }
    
    rect:nth-child(9) {
      fill: #17968b;
      animation-delay: 1.6s;
    }
    
    rect:nth-child(10) {
      fill: #128688;
      animation-delay: 1.8s;
    }
    
    rect:nth-child(11) {
      fill: #128688;
      animation-delay: 2s;
    }

    @keyframes scale {
      from {
        transform: scaleY(1);
      }

      50% {
        transform: scaleY(0.2);
      }

      to {
        transform: scaleY(1);
      }
    }

    rect {
      animation: scale 2.2s infinite;
      transform-origin: center;
    }

    progress {
      height: 24px;
      width: 100%;
      accent-color: #0eb98f;
    }
  `;

  return (
    <>
      <style>{style}</style>
      <section>
        <svg width='100%' height='300' viewBox='0 0 710 300'>
          <rect width='60' height='300' x='0' />
          <rect width='60' height='300' x='65' />
          <rect width='60' height='300' x='130' />
          <rect width='60' height='300' x='195' />
          <rect width='60' height='300' x='260' />
          <rect width='60' height='300' x='325' />
          <rect width='60' height='300' x='390' />
          <rect width='60' height='300' x='455' />
          <rect width='60' height='300' x='520' />
          <rect width='60' height='300' x='585' />
          <rect width='60' height='300' x='650' />
        </svg>
        <h1>Scanning channels</h1>
        <p>This may take a few minutes</p>
        <progress value='32' max='100'>32%</progress>
      </section>
    </>
  );
}