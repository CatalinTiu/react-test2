const DUMMY_DATA = [
{id: "m1", title:"This is the first meet", image:'https://ro.wikipedia.org/wiki/Fi%C8%99ier:Pia%C8%9Ba_Victoriei_Timi%C8%99oara.jpg', address:"Str. Iliesu12", description:"Amaing experience"},
{id: "m2", title:"This is the second meet", image:'https://ro.wikipedia.org/wiki/Fi%C8%99ier:Pia%C8%9Ba_Victoriei_Timi%C8%99oara.jpg', address:"Str. Iliesu34", description:"Bad experience"}
];

function AllMeetupsPage() {
  return <section>
    <h1>All Meetups</h1>
    {DUMMY_DATA.map((meetup) => {
      return <li key={meetup.id}>{meetup.title}</li>;
    })}
  </section>;
}

export default AllMeetupsPage;
