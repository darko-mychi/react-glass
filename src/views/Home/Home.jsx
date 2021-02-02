import { useGlobal } from "reactn";
import { useTitle } from "../../utils/hooks";

export default function Home() {
  useTitle("Home");

  const [initial, setInitial] = useGlobal('initial');

  setTimeout(() => {
    setInitial("hobies");
  }, 6000);

  return (
    <div className="flex flex:center-all" style={{ height: "100vh" }}>
      <div className="px:_3 py:_5" style={{ width: "50%" }}>
        <h1 className="mb:_2">Welcome to React Glass!</h1>
        <p>
          React Glass is a simple react js boilerplate which focuses on providing a simple and pain-free
          developer experience. React Glass uses items like named routes, simple state management instead of
          overblown libraries like redux and unfriendly interfaces like react-router-dom.
          With React Glass, the simpler, the better.
        </p>
        <p className="mt:_2">
          This will change to hobbies in 5 seconds 👉 {initial}
        </p>
      </div>
    </div>
  );
}
