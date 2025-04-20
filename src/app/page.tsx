import AddShow from "../components/AddShow";
import ShowList from "../components/ShowList";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">My Concert Tracker</h1>
      <AddShow />
      <ShowList />
    </div>
  );
}
