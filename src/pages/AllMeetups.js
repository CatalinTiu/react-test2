import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is the first meet",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/ef/Pia%C8%9Ba_Victoriei_Timi%C8%99oara.jpg",
    address: "Str. Iliesu12",
    description: "Amaing experience",
  },
  {
    id: "m2",
    title: "This is the second meet",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/ef/Pia%C8%9Ba_Victoriei_Timi%C8%99oara.jpg",
    address: "Str. Iliesu34",
    description: "Bad experience",
  },
];

function AllMeetupsPage() {
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={DUMMY_DATA} />
    </section>
  );
}

export default AllMeetupsPage;
