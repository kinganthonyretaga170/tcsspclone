export default function Two() {
  const style = `
    body {
      background: #fff9e8;
      min-height: 100vh;
      font-family: sans-serif;
      color: #151412;
    }

    main {
      margin: 24px;
    }

    img {
      float: left;
      margin: 12px 12px 12px 0;
    }

    /* main > * {
      border: solid 1px #bfbfbf;
      padding: 12px;
    } */

    main > *, section {
      display: flow-root;
    }

    p, ul {
      line-height: 1.5;
    }

    article p span {
      display: block;
    }

    article p span:last-of-type,
    article p span:nth-last-child(2) {
      text-indent: 16px;
    }

    .plays ul {
      margin-left: 162px;
    }

    /* Creating the grid */
    main {
      display: grid;
      grid-template-columns: repeat(2, minmax(auto, 2fr)) 250px;
      grid-template-areas:
        'header   header    header'
        'content  content   author'
        'content  content   aside'
        'plays    .         aside'
        'footer   footer    footer';
      gap: 20px;
    }

    header {
      grid-area: header;
    }

    article {
      grid-area: content;
    }

    aside {
      grid-area: aside;
    }

    .author-details {
      grid-area: author;
    }

    .plays {
      grid-area: plays;
    }

    footer {
      grid-area: footer;
    }

    @media(min-width: 955px) {
      main {
        grid-template-columns: repeat(3, 1fr);
        grid-template-areas:
          'header   header  header'
          'content  author  aside'
          'content  plays   aside'
          'footer   footer  footer';
      }
    }
  `;

  return (
    <>
      <style>{style}</style>
      <main>
        <header>
          <img src='./ch02/img/logo.jpg' alt='' />
          <h1>Sonnets by William Shakespeare</h1>
        </header>

        <article>
          <h2>
            Sonnet 1
            <br/><small>by William Shakespeare</small>
          </h2>
          <p>
            <span>From fairest creatures we desire increase,</span>
            <span>That thereby beauty's rose might never die,</span>
            <span>But as the riper should by time decease,</span>
            <span>His tender heir might bear his memory:</span>
            <span>But thou contracted to thine own bright eyes,</span>
            <span>Feed'st thy light's flame with self-substantial fuel,</span>
            <span>Making a famine where abundance lies,</span>
            <span>Thy self thy foe, to thy sweet self too cruel:</span>
            <span>Thou that art now the world's fresh ornament,</span>
            <span>And only herald to the gaudy spring,</span>
            <span>Within thine own bud buriest thy content,</span>
            <span>And, tender churl, mak'st waste in niggarding:</span>
            <span>Pity the world, or else this glutton be,</span>
          </p>
        </article>

        <aside>
          <section aria-label='sonnet 2'>
            <img src='./ch02/img/image-1.jpg' alt='' />
            <h3>Sonnet 2</h3>
            <p>
              When forty winters shall besiege thy brow,
              <br/>And dig deep trenches in thy beauty's field, ...
            </p>
            <a href=''>Read more of Sonnet 2</a>
          </section>
          <section>
            <img src='./ch02/img/image-2.jpg' alt='' />
            <h3>Sonnet 3</h3>
            <p>
              Look in thy glass and tell the face thou viewest,
              <br/>Now is the time that face should form another, ...
            </p>
            <a href=''>Read more of Sonnet 3</a>
          </section>
        </aside>

        <section className='author-details'>
          <h3>
            <small>About the author</small>
            <br/>William Shakespeare
          </h3>
          <p>
            English playwright, poet, and actor who lived from 1564 to 1616. He is credited for having authored Romeo and
            Juliette.
          </p>
        </section>

        <section className='plays'>
          <img src='./ch02/img/play.jpg' alt='' />
          <h3>Checkout his plays:</h3>
          <ul>
            <li><a href=''>All's Well That Ends Well</a></li>
            <li><a href=''>As You Like It</a></li>
            <li><a href=''>Cymberline</a></li>
          </ul>
        </section>

        <footer>
          <p>
            Want to read more of Shakespeare's works, check out his complete works on the{' '}
            <a href='https://www.gutenberg.org/ebooks/100'>Project Gutenberg</a>.
          </p>
        </footer>
      </main>
    </>
  );
}
