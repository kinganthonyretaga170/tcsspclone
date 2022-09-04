export default function Seven() {
  const style = `
    @import url(https://fonts.googleapis.com/css2?family=Passions+Conflict&display=swap);

    .ch07 {
      background-color: rgba(206, 194, 174, 0.24);
      padding: 4rem;
      font-size: 16px;
      max-width: 78ch;
      margin: 0 auto;
      font-family: 'Times New Roman', Times, serif;
      border-left: double 5px rgba(0, 0, 0, 0.16);
      min-height: 100vh;
      box-sizing: border-box;
    } 

    img {
      max-width: 100%;
    }

    p {
      line-height: 1.5;
      text-align: justify;
    }

    p:first-of-type::first-letter {
      font-size: 6em;
      float: left;
      line-height: 0.5;
      font-family: 'Passions Conflict', cursive;
    }

    blockquote {
      font-family: 'Passions Conflict', cursive;
      font-size: 2em;
      line-height: 1;
    }

    /* img.compass {
      shape-outside: circle(50%);
      clip-path: circle(50%);
      margin-left: 1rem;
      float: right;
    } */

    img.compass {
      float: right;
      margin-left: 1rem;
      shape-outside: margin-box;
      border-radius: 50%;
    }

    img.dog {
      float: left;
      margin-right: 1em;
      shape-outside: url(./ch07/img/dog.svg);
      shape-margin: 1em;
    }
  `;

  return (
    <div className='ch07'>
      <style>{style}</style>

      <main>
        <h1>Chapter I: Into the Primitive</h1>

        <blockquote>
          “Old longings nomadic leap,
          <br/>Chafing at custom's chain;
          <br/>Again from its brumal sleep
          <br/>Wakens the ferine strain.”
        </blockquote>

        <p>
          Buck did not read the newspapers, or he would have known that trouble was brewing, not alone for himself, but for
          every tide-water dog, strong of muscle and with warm, long hair, from Puget Sound to San Diego. Because men,
          groping in the Arctic darkness, had found a yellow metal, and because steamship and transportation companies were
          booming the find, thousands of men were rushing into the Northland. These men wanted dogs, and the dogs they
          wanted were heavy dogs, with strong muscles by which to toil, and furry coats to protect them from the frost.
        </p>

        <img
          className='compass'
          src='./ch07/img/compass.png'
          width='175'
          alt='a black and gray compass'
        />

        <p>
          Buck lived at a big house in the sun-kissed Santa Clara Valley. Judge Miller's place, it was called. It stood
          back from the road, half hidden among the trees, through which glimpses could be caught of the wide cool veranda
          that ran around its four sides. The house was approached by gravelled driveways which wound about through
          wide-spreading lawns and under the interlacing boughs of tall poplars. At the rear things were on even a more
          spacious scale than at the front. There were great stables, where a dozen grooms and boys held forth, rows of
          vine-clad servants' cottages, an endless and orderly array of outhouses, long grape arbors, green pastures,
          orchards, and berry patches. Then there was the pumping plant for the artesian well, and the big cement tank where
          Judge Miller's boys took their morning plunge and kept cool in the hot afternoon.
        </p>

        <img
          className='dog'
          src='./ch07/img/dog.svg'
          width='126'
          alt='line drawing of a dog'
        />

        <p>
          And over this great demesne Buck ruled. Here he was born, and here he had lived the four years of his life. It
          was true, there were other dogs, There could not but be other dogs on so vast a place, but they did not count.
          They came and went, resided in the populous kennels, or lived obscurely in the recesses of the house after the
          fashion of Toots, the Japanese pug, or Ysabel, the Mexican hairless,—strange creatures that rarely put nose out of
          doors or set foot to ground. On the other hand, there were the fox terriers, a score of them at least, who yelped
          fearful promises at Toots and Ysabel looking out of the windows at them and protected by a legion of housemaids
          armed with brooms and mops.
        </p>

        <cite>
          London, Jack. “The Project Gutenberg EBook of The Call of the Wild, by Jack London.” Project Gutenberg,{' '}
          <a 
            href='https://www.gutenberg.org/files/215/215-h/215-h.htm'
            target='_blank'
            rel='noopener noreferrer'
          >
            https://www.gutenberg.org/files/215/215-h/215-h.htm
          </a>. Accessed 25 3 2021.
        </cite>
      </main>
    </div>
  );
};