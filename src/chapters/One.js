export default function One() {
  const style = `
    .ch01 {
      padding: 1rem;
    }

    /* Namespace */
    @namespace svg 'http://www.w3.org/2000/svg/';

    /* Type selector */
    h1, h2, h3, h4, h5, h6 {
      color: crimson;
    }

    /* Class selector */
    .small-heading {
      text-transform: uppercase;
    }

    /* ID selector */
    #quote-by-author {
      background: lightgrey;
      padding: 10px;
      line-height: 1.75;
    }

    /* Descendant combinator */
    article p {
      line-height: 2;
    }

    /* Child combinator */
    .list > li {
      color: crimson;
    }

    /* Adjacent sibling combinator */
    header + p {
      font-size: 1.25rem;
      font-weight: bold;
    }

    /* General sibling combinator */
    header ~ img {
      border: 4px solid crimson;
    }

    /* Pseudo classes */
    a:link {
      color: #1d70b8;
    }

    a:visited {
      color: #4c2c92;
    }

    a:hover {
      color: #003078;
    }

    a:focus {
      outline: solid 1px crimson;
    }

    /* Pseudo elements */
    header + p::first-letter {
      color: crimson;
      font-style: italic;
    }

    /* Attribute selector + pseudo element */
    [lang='it']::before {
      content: '🇮🇹';
    }

    /* Universal selector */
    * {
      font-family: sans-serif;
    }

    /* Universal selector and namespace */
    svg|* {
      fill: #ededed;
    }
  `;

  return (
    <div className='ch01'>
      <style>{style}</style>

      <article>
        <img
          src='./ch01/sample-image.svg'
          width='100'
          alt=''
        />

        <header>
          <h1>{'Title of our article (heading 1)'}</h1>
          <p>
            Posted on{' '}
            <time dateTime='2015-05-16 19:00'>
              May 16
            </time>{' '}
            by Lisa.
          </p>
        </header>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt dapibus eleifend. Nam eu urna
          ipsum. Etiam consequat ac dolor et dapibus. Duis eros arcu, interdum eu volutpat ac, lacinia a tortor. Vivamus
          justo tortor, porttitor in
          arcu nec, pretium viverra ipsum. Nam sit amet nibh magna. Sed ut imperdiet orci, id finibus justo. Maecenas magna
          mauris, tempor nec tempor id, aliquam et nibh. Nunc elementum ut purus id eleifend. Phasellus pulvinar dui orci,
          sed eleifend magna
          ullamcorper sit amet. Proin iaculis lacus congue aliquam sodales.
        </p>

        <ol className='ordered-list'>
          <li>List item 1</li>
          <ul>
            <li>Nested item 1</li>
            <li>Nested item 2</li>
          </ul>
          <li>List item 2</li>
          <li>List item 3</li>
          <li>List item 4</li>
        </ol>

        <img
          src='./ch01/sample-image.svg'
          width='200'
          alt=''
        />

        <p>
          Curabitur id augue nulla. Aliquam purus urna, aliquam eu ornare id, maximus et tellus. Aliquam eleifend sem vitae
          urna blandit, non bibendum tellus dignissim. Aliquam imperdiet imperdiet sapien sit amet consectetur. Nam
          convallis turpis felis,
          sedvulputate lacus eleifend a. Mauris pharetra imperdiet lacinia. Sed sit amet feugiat lectus, in consectetur
          magna. Vestibulum accumsan porta enim at ultricies. Vestibulum vitae massa quis massa dignissim imperdiet.
        </p>

        <blockquote id='quote-by-author'>
          Nunc eleifend nulla lobortis porta rhoncus. Vivamus feugiat, sem vitae feugiat
          aliquam, orci nulla venenatis libero, vitae rhoncus nibh neque ac velit.
        </blockquote>

        <p>
          Etiam tempor vulputate varius. Duis at metus ut eros ultrices facilisis. Donec ut est finibus, egestas nisl eu,
          placerat neque. Pellentesque cursus, turpis nec sollicitudin sodales, nisi tellus ultrices lectus, nec facilisis
          purus neque vitae
          diam. Nunc eleifend nulla lobortis porta rhoncus. Vivamus feugiat, sem vitae feugiat aliquam, orci nulla venenatis
          libero, vitae rhoncus nibh neque ac velit. Donec non fringilla magna. Vivamus eleifend ligula libero, fermentum
          imperdiet arcu viverra
          in. Vivamus pellentesque odio interdum mauris aliquam scelerisque.
        </p>

        <h2>Heading 2</h2>
        <p>
          In ac euismod tortor. Vivamus vitae velit efficitur, mattis turpis quis, tincidunt elit.{' '}
          <a target='_blank' href='#'>In eleifend in dolor id aliquet</a>.{' '}
          Vivamus pellentesque erat a magna ultricies
          rhoncus. Vestibulum at mattis purus, non lobortis risus. Mauris porta ullamcorper mollis. Sed et placerat nisi,
          quis porttitor lacus.
          Curabitur sagittis nisl egestas ipsum tristique, eu semper erat gravida. Vestibulum sagittis quam sit amet
          tristique ultricies.
        </p>
        <p>
          In id lobortis leo. Nullam commodo tortor eu neque tempus accumsan. Vivamus molestie, felis consequat consequat
          iaculis, justo massa porttitor tellus, ac suscipit urna erat eu erat. Nunc malesuada eleifend erat nec pharetra.
          Sed eu magna iaculis,
          elementum dui ac, sagittis augue. Nam sit amet risus dapibus massa rutrum faucibus. Sed rhoncus finibus magna, vel
          tristique sem bibendum nec.
        </p>

        <img
          src='./ch01/sample-image.svg'
          width='200'
          alt=''
        />

        <h3>Heading 3</h3>
        <p>
          Mauris sit amet tempor ex. Morbi eu semper velit. Nullam hendrerit urna pellentesque, interdum lectus volutpat,
          gravida odio.{' '}
          <a href='#'>Sed vulputate eget ante vel vehicula</a>.
          Curabitur ac velit sed magna malesuada hendrerit. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut volutpat nisi purus. Morbi
          venenatis fermentum commodo.
          Nam accumsan mollis neque non interdum. Aenean cursus metus ac est gravida, placerat interdum justo pellentesque.
          Duis nec scelerisque lacus, elementum tincidunt est. Maecenas et leo justo. Nam porta risus porttitor vulputate
          laoreet. Nulla sodales
          sagittis nulla, non viverra erat consectetur et.
        </p>
        <p>
          Quisque vel erat et leo efficitur sollicitudin. Donec id ipsum eget lacus pellentesque consequat. Praesent id
          justo tellus. Maecenas convallis magna ut diam euismod, et porta lacus lacinia. Sed a placerat justo. Quisque
          dictum augue quis dapibus
          posuere. Sed rutrum sed leo eget pretium. Donec fermentum varius vestibulum. Nam ultrices ornare risus, vel
          malesuada sapien volutpat ac. Duis sit amet leo ut metus dignissim sollicitudin nec eget diam. Nullam tortor erat,
          tincidunt ut venenatis at,
          lacinia in libero. Mauris feugiat commodo lectus eget hendrerit. Curabitur pharetra cursus eleifend.
        </p>

        <h4 className='small-heading'>Heading 4</h4>
        <p>
          Aliquam porttitor, ex sed suscipit scelerisque, arcu urna rhoncus lacus, eget aliquam enim quam ut lacus.{' '}
          <a href='#'>Cras sed finibus libero</a>.{' '}
          Duis lobortis, ipsum ut consectetur eleifend, libero magna ullamcorper
          ex, eget eleifend mi risus in erat. Ut consequat nunc diam, et convallis orci efficitur id. Etiam finibus metus a
          bibendum lobortis. Sed
          est turpis, maximus id magna vitae, lobortis faucibus turpis. Maecenas in ipsum ut nibh dignissim venenatis.
          Aenean laoreet, arcu a ornare feugiat, augue enim bibendum leo, in dapibus tortor ipsum nec massa. Pellentesque
          mollis massa magna, imperdiet
          elementum justo sodales vitae.
        </p>

        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        
        <svg xmlns='http://www.w3.org/2000/svg/'>
          <circle cx='70' cy='70' r='50' />
          <rect x='200' y='80' width='50' height='50' />
        </svg>

        <h4>Heading 4</h4>
        <h5 className='small-heading'>Heading 5</h5>
        <p>
          In finibus ultrices nulla ut rhoncus. Suspendisse potenti. Phasellus id tortor nec elit aliquet ullamcorper ut ut
          tortor. Morbi vehicula massa sit amet luctus posuere. Nullam eu lacinia tortor. Aenean eget pulvinar nulla, sit
          amet accumsan tortor.
          Praesent augue nunc, luctus ornare consequat id, ultricies vel tellus. Nullam gravida tellus a nisi elementum
          interdum. In scelerisque turpis vitae sem convallis venenatis. Donec aliquam, nibh sit amet placerat posuere,
          neque metus ultricies risus,
          at luctus leo arcu a augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Sed congue lectus quis velit fringilla, a ultricies dui vestibulum. Vestibulum ornare leo augue, vel
          pretium ipsum vehicula et.
          Nulla vel efficitur risus. Proin malesuada lobortis orci sit amet scelerisque. Sed tincidunt felis vel aliquet
          tristique.
        </p>

        <h6 className='small-heading'>Heading 6</h6>
        <p lang='it'>Questo paragrafo è definito in italiano.</p>

        <ul className='list'>
          <li>List item 1</li>
          <ul>
            <li>Nested item 1</li>
            <li>Nested item 2</li>
          </ul>
          <li>List item 2</li>
          <li>List item 3</li>
          <li>List item 4</li>
        </ul>

        <footer>
          <p>Footer text</p>
        </footer>
      </article>

      <p>
      Nam rutrum nunc at lectus egestas porta. Ut molestie posuere faucibus. Pellentesque habitant morbi tristique
      senectus et netus et malesuada fames ac turpis egestas. Phasellus fermentum auctor arcu ultricies tincidunt.
      Quisque urna magna, congue et
      condimentum ut, varius sed arcu. Morbi hendrerit justo eget porta venenatis. Donec id ligula accumsan, congue
      mauris at, ornare sem. Aenean lobortis est ac nisl consequat venenatis.
      </p>
    </div>
  );
}