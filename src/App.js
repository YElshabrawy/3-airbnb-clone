// css
import './css/App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Card from './components/Card';
import data from './data/data';

function App() {
    // Card Map
    const cards = data.map((item) => {
        return (
            <Card
                key={item.id}
                img={`assets/${item.coverImg}`}
                rating={item.stats.rating}
                reviews={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
                openSpots={item.openSpots}
            />
        );
    });
    return (
        <div>
            <Navbar />
            <Header />
            <section id="style-1" className="cards-list container">
                {cards}
            </section>
        </div>
    );
}

export default App;
