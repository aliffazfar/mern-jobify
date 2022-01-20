import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'

const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt='jobify' className='logo' />
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby hammock pork belly vaporware plaid pop-up seitan. Hella
            williamsburg master cleanse distillery photo booth fam hot chicken
            messenger bag glossier. Pitchfork pug aesthetic retro, snackwave
            food truck fingerstache sriracha actually selvage beard.
          </p>
          <button className='btn btn-hero'>Login/Register</button>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </main>
  )
}

export default Landing
