import "./App.css";
import Tweet from "./components/Tweet";


const tweetsArray = [
  {
    user: {
      name: "Thoughts of Cat®",
      image: "https://media.istockphoto.com/id/1322123064/photo/portrait-of-an-adorable-white-cat-in-sunglasses-and-an-shirt-lies-on-a-fabric-hammock.jpg?s=612x612&w=0&k=20&c=-G6l2c4jNI0y4cenh-t3qxvIQzVCOqOYZNvrRA7ZU5o=",
      handle: "cat_feelings",
    },
    timestamp: "1h ago",
    message:
      "Relaxing now so I can run around for no reason at 3 A.M.",
  },
  {
    user: {
      name: "Thoughts of Cat®",
      image: "https://media.istockphoto.com/id/1322123064/photo/portrait-of-an-adorable-white-cat-in-sunglasses-and-an-shirt-lies-on-a-fabric-hammock.jpg?s=612x612&w=0&k=20&c=-G6l2c4jNI0y4cenh-t3qxvIQzVCOqOYZNvrRA7ZU5o=",
      handle: "cat_feelings",
    },
    timestamp: "2h ago",
    message:
      "Meowed until the human woke up. I didn't need anything, I was just bored",
  },
  {
    user: {
      name: "Thoughts of Cat®",
      image: "https://media.istockphoto.com/id/1322123064/photo/portrait-of-an-adorable-white-cat-in-sunglasses-and-an-shirt-lies-on-a-fabric-hammock.jpg?s=612x612&w=0&k=20&c=-G6l2c4jNI0y4cenh-t3qxvIQzVCOqOYZNvrRA7ZU5o=",
      handle: "cat_feelings",
    },
    timestamp: "3h ago",
    message:
      "here is what. i plan to accomplish today: \n\n1. sleep \n2. cough up a hairball \n2b. stare at human until they clean up the hairball\n3. eat too fast \n4. puke on the carpet after eating\n5. cat nap",
  },
];


function App() {
  return (
    <div className="App">
     <Tweet tweet={tweetsArray[0]} />
     <Tweet tweet={tweetsArray[1]} />
     <Tweet tweet={tweetsArray[2]} />
    </div>
    );
  };
    

export default App;
