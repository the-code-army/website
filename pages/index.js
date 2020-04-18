import Head from "next/head";
import StaffMember from "../components/StaffMember";

const Home = () => {
  let staff = [
    // Andrewk
    {
      name: "andrewk",
      id: "502171514456768512",
      title: "Sudoer",
    },
    // Person
    {
      id: "327951227629600768",
      title: "Sudoer",
    },
    // Vintastic
    {
      id: "569880218081427476",
      title: "Sudoer",
    },
    // Citadel
    {
      id: "648758496317276162",
      title: "head mod",
      name: "Citadel",
    },
    // Zamboni
    {
      id: "140697253261213696",
      title: "moderator",
    },
    // Myrtle Beach
    {
      id: "464169397397749761",
      title: "moderator",
    },
    // MrLava
    {
      id: "427621308252160000",
      title: "moderator",
    },
    // Avigte (TheImmortalWarrior)
    {
      id: "535518426194640906",
      title: "moderator",
      name: "avigte",
    },
    // VexGaming
    {
      id: "188880497122738186",
      title: "moderator",
      name: "VexGaming",
    },
    // DonutX3
    {
      id: "197442032455647232",
      title: "moderator",
    },
    // AstroOrbis
    {
      id: "516741924225417217",
      title: "mod in training",
      name: "AstroOrbis",
    },
  ];
  return (
    <div className="container">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Code Army</title>
      </Head>

      <main>
        <section className="hero">
          <h1 className="title">Code Army</h1>
          <h2 className="subtitle">
            A discord server for programming help and advisory
          </h2>

          <div className="button-grid">
            <button className="btn bg-black">
              <a
                className="no-a"
                href="https://discord.gg/SSJkBGy"
                target="_blank"
              >
                Join us
              </a>
            </button>
            <button className="btn bg-white">
              <a className="no-a" href="#staff">
                Learn more
              </a>
            </button>
          </div>
        </section>
        <section>
          <h2 className="section-header" id="staff">
            Staff
          </h2>
          <div className="staff-grid">
            {staff.map(({ id, name, title }, i) => (
              <StaffMember id={id} name={name} title={title} key={i} />
            ))}
          </div>
        </section>
        <section>
          <h2 className="section-header" id="projects">
            Server Projects
          </h2>
          <ul>
            <li>This website (WIP)</li>
          </ul>
        </section>
        <footer className="bg-black">
          <h2 className="section-header">Code Army</h2>
          <h3>Links:</h3>
          <ul>
            <li>
              <a href="https://discord.gg/SSJkBGy">Join the server</a>
            </li>
            <li>
              <a href="mailto://codearmy@protonmail.com">Email us</a>
            </li>
            <li>
              <a href="https://github.com/the-code-army">Our GitHub</a>
            </li>
          </ul>
        </footer>
      </main>

      <style jsx global>{`
        @font-face {
          font-family: "Metropolis";
          font-weight: 900;
          src: url("/fonts/Metropolis-Black.ttf");
          font-style: normal;
          font-display: fallback;
        }

        @font-face {
          font-family: "Metropolis";
          font-weight: 800;
          src: url("/fonts/Metropolis-ExtraBold.ttf");
          font-display: fallback;
          font-style: normal;
        }

        @font-face {
          font-family: "Metropolis";
          font-weight: 700;
          src: url("/fonts/Metropolis-Bold.ttf");
          font-display: fallback;
          font-style: normal;
        }

        @font-face {
          font-family: "Metropolis";
          font-weight: 600;
          src: url("/fonts/Metropolis-SemiBold.ttf");
          font-display: fallback;
          font-style: normal;
        }

        @font-face {
          font-family: "Metropolis";
          font-weight: 500;
          src: url("/fonts/Metropolis-Medium.ttf");
          font-display: fallback;
          font-style: normal;
        }
        @font-face {
          font-family: "Metropolis";
          font-weight: 400;
          src: url("/fonts/Metropolis-Regular.ttf");
          font-display: fallback;
          font-style: normal;
        }
        *,
        *::before,
        *::after {
          box-sizing: border-box;
          font-family: Metropolis, sans-serif;
          margin: 0;
          padding: 0;
        }

        :root {
          --clr-primary: #1187fc;
          --clr-dark: #333;
          --clr-light: #fff;
          --clr-body: #202020;

          --super-dark: #101010;
          --yellow: #eec643;
          --blue: #0d21a1;

          scroll-behavior: smooth;
        }

        body {
          min-height: 100vh;
          font-size: 1.125em;
          line-height: 1.6;
          color: var(--clr-body);
          background: var(--clr-light);
          overflow-x: hidden;
        }
        main {
          width: 100vw;
          height: 100vh;
        }
      `}</style>
      <style jsx>{`
        .title {
          font-size: 3rem;
        }

        .subtitle {
          font-size: 1.5rem;
          opacity: 0.75;
          font-weight: 600;
        }

        .hero {
          background: var(--blue);
          padding: 3rem 1rem;
          color: var(--clr-light);
          display: grid;
          gap: 1rem;
        }

        section,
        footer {
          padding: 2rem 1rem;
        }

        .button-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          width: initial;
          justify-items: start;
          max-width: 300px;
        }

        .btn {
          padding: 0.5rem 1.25rem;
          border: none;
          font-weight: 600;
        }

        .bg-black {
          color: var(--clr-light);
          background: var(--super-dark);
        }

        .bg-white {
          color: var(--clr-body);
          background: var(--clr-light);
        }

        .no-a {
          text-decoration: none;
          color: inherit;
        }

        .section-header {
          font-size: 2rem;
        }
        .staff-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        }

        @media (min-width: 400px) {
          .subtitle {
            font-size: 2rem;
          }
        }

        @media (min-width: 900px) {
          .title {
            font-size: 5rem;
          }

          .subtitle {
            font-size: 3rem;
          }

          .hero {
            padding: 5rem 3rem;
          }

          section,
          footer {
            padding: 3rem;
          }

          .btn {
            font-size: 1.5rem;
            padding: 1rem 2rem;
          }

          .button-grid {
            max-width: 500px;
          }

          .section-header {
            font-size: 3.5rem;
          }
        }

        @media (min-width: 1400px) {
          .hero {
            padding: 5rem 10rem;
          }

          section,
          footer {
            padding: 3rem 10rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
