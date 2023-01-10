import ProfileCard from './ProfileCard'

function App() {
  return (
    <div>
      <h1>Header</h1>
      <ProfileCard title="Alexa" handle="@alexa99" />
      <ProfileCard title="Cortana" handle="@cortana" />
      <ProfileCard title="Siri" handle="@siri"/>
    </div>
  );
}

export default App;
