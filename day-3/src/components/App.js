import './App.scss';
import Header from '../components/Header/Header';
import mainPageCoverImage from '../images/main-page-cover.svg';

function App() {
  return (
    <section>
      <Header></Header>
      <div className="app-content">
        <div className="content">
          <h1>Frienzify</h1>
          <p>Click and watch how rises your friend count!</p>
        </div>
        <div className="image">
          <img src={mainPageCoverImage} alt="" />
        </div>
      </div>
    </section>
  );
}

export default App;
