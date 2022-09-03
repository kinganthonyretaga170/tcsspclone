export default function Six() {
  const style = `
    .ch06 {
      margin: 0;
      padding: 0;
      min-height: 100vh;
    }

    .ch06 {
      --primary: #de3c4b;
      --primary-contrast: white;
      --secondary: #717777;
      --font: Helvetica, Arial, sans-serif;
      --text-color: #2d3142;
      --card-background: white;
      --page-background: linear-gradient(#4f5d75, #2d3142);
      --image-size: 200px;

      background: var(--page-background);
      font-family: var(--font);
      color: var(--text-color);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .card {
      background-color: var(--card-background);
      box-shadow: 0px 0px 55px rgba(38, 40, 45, 0.75);
      width: 75vw;
      max-width: 500px;
      border-radius: 4px;
      text-align: center;
      margin: calc(var(--image-size) / 3 + 24px) 24px;
      background-image: radial-gradient(
        circle at top,
        var(--primary) 50%,
        transparent 50%,
        transparent
      );
      background-repeat: no-repeat;
      background-size: 1500px 500px;
      background-position: center -300px;
      padding: 0 24px 24px;
    }

    img {
      width: var(--image-size);
      height: var(--image-size);
      object-fit: cover;
      border-radius: 50%;
      margin-top: calc(-1 * var(--image-size) / 3);
    }

    h1 {
      font-size: 2rem;
      margin: 36px 0 0;
      color: var(--primary);
    }

    .title {
      font-size: 1.25rem;
      font-weight: bold;
      color: var(--secondary);
    }

    dl {
      display: flex;
      justify-content: space-around;
      gap: 12px;
    }

    dd {
      margin: 0;
      font-size: 1.25rem;
      font-weight: bold;
      color: var(--primary);
    }

    dl > div {
      flex-basis: 33%;
      flex-shrink: 1;
      display: flex;
      flex-direction: column-reverse;
    }

    dt {
      font-size: 0.75rem;
    }

    p.summary {
      margin: 24px 0;
      line-height: 1.5;
    }

    ul.technologies li {
      padding: 12px 24px;
      border-radius: 24px;
      background: #ffdadd;
    }

    ul.technologies {
      list-style: none;
      padding: 0;
      margin: 24px 0;
      display: flex;
      justify-content: space-between;
      gap: 12px;
      flex-wrap: wrap;
    }

    .actions a, .actions button {
      padding: 12px 24px;
      border-radius: 4px;
      text-decoration: none;
      border: solid 1px var(--primary);
      font-size: 1rem;
      cursor: pointer;
    }

    .follow {
      background: var(--primary);
      color: var(--primary-contrast);
    }

    .message {
      background: var(--primary-contrast);
      color: var(--primary);
    }

    *:focus-visible {
      outline: dotted 1px var(--primary);
      outline-offset: 3px;
    }

    .actions {
      display: flex;
      gap: 16px;
      justify-content: center;
      margin-top: 36px;
    }
  `;

  return (
    <div className='ch06'>
      <style>{style}</style>

      <div className='card'>
        <img
          className='portrait'
          src='./ch06/img/portrait.jpg'
          alt=''
        />
        <h1>Annabelle Erickson</h1>
        <div className='title'>Software Developer</div>
        <dl>
          <div>
            <dt>Posts</dt>
            <dd>856</dd>
          </div>
          <div>
            <dt>Likes</dt>
            <dd>1358</dd>
          </div>
          <div>
            <dt>Followers</dt>
            <dd>1257</dd>
          </div>
        </dl>
        <p className='summary'>
          I specialize in UX / UI design and development. 
          I love coffee, chocolate, and my betta fish.
        </p>
        <ul className='technologies'>
          <li>CSS</li>
          <li>HTML</li>
          <li>JavaScript</li>
          <li>Accessibility</li>
        </ul>
        <div className='actions'>
          <button
            type='button'
            className='follow'
          >
            Follow
          </button>
          <a 
            href=''
            className='message'
          >
            Message
          </a>
        </div>
      </div>
    </div>
  );
};