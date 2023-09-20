import { useState, useEffect } from "react";
import { Loading } from "./Loading";
import { Tours } from "./Tours";
import "./App.css";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const loadTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      // if (response.status >=200 && response.status <= 299) {
      // }
      const data = await response.json();
      setTours(data);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    loadTours();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <>
        <main>
          <div className="title">
            <h2>No tours Left</h2>
            <button
              type="button"
              style={{ margin: "2rem" }}
              className="btn"
              onClick={() => {
                loadTours();
              }}
            >
              Reload Tours
            </button>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <main>
        <Tours tours={tours} removeTour={removeTour} />
      </main>
    </>
  );
}

export default App;
