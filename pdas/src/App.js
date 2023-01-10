import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard'
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'

function App() {
  return (
    <div>
      <section className='hero is-primary'>
        <div className='hero-body'>
          <p className='title'>
            Personal Digital Assistents
          </p>
          <p className='subtitle'>
            What's your favorite PDA?
          </p>
        </div>
      </section>

      <div className='container'>
        <section className='section'>
          <div className='columns'>
            <div className='column is-3'>
              <ProfileCard title="Alexa" handle="@alexa99" imagePath={AlexaImage} description="Alexa was created by Amazon." />
            </div>
            <div className='column is-3'>
              <ProfileCard title="Cortana" handle="@cortana01" imagePath={CortanaImage} description="Cortana was created by Microsoft." />
            </div>
            <div className='column is-3'>
              <ProfileCard title="Siri" handle="@siri10" imagePath={SiriImage} description="Siri was created by Apple." />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
