import Header from 'next/head'
const Home = () => {
  return (
    <div className='container'>
      <Header>
        <title>Clean NextJS Boilerplate</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
      </Header>

      <div className='hero'>
        <h1 className='title'>This site is a clean NextJs boilerplate.</h1>
        <img src="https://www.moonstats.com/news/wp-content/uploads/2021/10/Metaverse-gaming.jpeg"></img>
        <div className='details'>
          <h2>GitHub Respository:</h2>
          <a href="https://github.com/marcinhojazz/website10min-netlify">
            https://github.com/marcinhojazz/website10min-netlify
          </a>
          <h3>URL Site:</h3>
          <a href="https://website10min.netlify.app/">
            https://website10min.netlify.app/
          </a>
          <div>
            <p>
              My Site:
            </p>
            <a src="https://marciomachado.vercel.app/">
              https://marciomachado.vercel.app/
            </a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home