import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Body from "./Body.jsx";
import components from "./database.js";
function App() {
  return (
    <div className="container">
      <Header />
      <div>
        {components.map((component) => (
          <Body key={component.id} component={component} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
