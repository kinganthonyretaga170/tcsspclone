// import { useRef, useEffect } from 'react';

export default function Four() {
  // const img = useRef();

  // useEffect(
  //   () => {

  //   },
  //   []
  // );

  const style = `
    @import url(https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&family=PT+Serif&display=swap);

    html {
      background-color: #f9f7f1;
    }

    .ch04 {
      font-family: 'PT Serif', serif;
      color: #404040;
      padding: 0 24px;
      max-width: 1200px;
      margin: 0 auto;
    }

    h1 {
      font: 700 4rem/1 Oswald, sans-serif;
      text-transform: uppercase;
      text-align: center;
    }

    h2 {
      font: 3rem/0.95 Oswald, sans-serif;
      text-transform: uppercase;
      margin-bottom: 16px;
    }

    h3 {
      font: 2rem/0.95 Oswald, sans-serif;
      text-transform: uppercase;
      margin-bottom: 12px;
    }

    time {
      font: 700 1.5rem Oswald, sans-serif;
      text-align: center;
      text-transform: uppercase;
      border-top: 3px solid #333333;
      border-bottom: 3px solid #333333;
      padding: 12px 0;
      display: block;
    }

    time sup {
      font-size: 0.875rem;
      font-weight: normal;
    }

    blockquote {
      font: 1.8rem/1.25 Oswald, sans-serif;
      margin: 1.5rem 2rem;
    }

    blockquote::before {
      content: open-quote;
    }

    blockquote::after {
      content: close-quote;
    }

    @counter-style emoji {
      symbols: \\2615;
      system: cyclic;
      suffix: ' ';
    }

    article ul {
      list-style: emoji;
    }

    img {
      filter: grayscale(100%);
    }

    figure {
      margin: 0 0 12px 0;
      text-align: center;
    }

    figcaption {
      font-family: Oswald, sans-serif;
    }

    @media(min-width: 955px) {
      article {
        column-count: 3;
        column-rule: 2px solid #333333;
        column-gap: 42px;
        margin-top: 36px;
      }

      blockquote {
        column-span: all;
      }

      figure {
        break-inside: avoid;
      }

      p {
        text-align: justify;
        hyphens: auto;
      }

      figure {
        float: left;
        margin-right: 24px;
      }
    }
  `;

  return (
    <div className='ch04'>
      <style>{style}</style>
      <h1>Newspaper Title</h1>
      <div className='time'>
        <time dateTime='2021-09-07'>
          Tuesday, 7<sup>th</sup> September 2021
        </time>
      </div>
      <article>
        <h2>Article heading</h2>
        <div className='author'>John Doe</div>
        <p>
          Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed posuere consectetur est at
          lobortis. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Curabitur blandit tempus porttitor.
        </p>
        <p>
          Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum. Cum
          sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sagittis lacus vel
          augue laoreet rutrum faucibus
          dolor auctor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
        </p>
        <blockquote>
          Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet
          risus.
        </blockquote>
        <p>
          Aenean lacinia bibendum nulla sed consectetur. Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
          eget lacinia odio sem nec elit. Donec id elit non mi porta gravida at eget metus. Cras justo odio, dapibus ac
          facilisis in, egestas eget
          quam. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
        <h3>Subheading</h3>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ul>
        <p>
          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis
          dis parturient montes,
          nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur.
        </p>
        <p>
          Donec ullamcorper nulla non metus auctor fringilla. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
          venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur. Aenean lacinia bibendum nulla sed
          consectetur.
        </p>

        <h3>Subheading</h3>
        <figure>
          <img 
            src='./ch04/image.jpg'
            alt=''
            onError={evt => {
              evt.target.style.display = 'none';
            }}
          />
          <figcaption>Golden Gate Bridge</figcaption>
        </figure>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem
          lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum
          nulla sed consectetur. Integer
          posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean eu leo quam. Pellentesque ornare sem lacinia
          quam venenatis vestibulum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
        </p>
        <p>
          Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Curabitur blandit tempus porttitor. Morbi leo
          risus, porta ac consectetur ac, vestibulum at eros. Duis mollis, est non commodo luctus, nisi erat porttitor
          ligula, eget lacinia odio sem
          nec elit.
        </p>
      </article>
    </div>
  );
}