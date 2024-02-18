function EventHome(props){
    return(
        <>
        <h1> {props.title} </h1>
        <nav>
            <a href="/events">Events</a>
            <a href="/about-us">About</a>
            <a href="/">Home</a>
        </nav>
        {props.data.map((EV)=>
        <div>
          {/* <h2>{EV.title}</h2> */}
          <a key={EV.id} href={`/events/${EV.id}`}><h2>{EV.title}</h2>
          <img alt={EV.title} src={EV.image}/>
          </a>
          <p>{EV.description}</p>
        </div>
      )
      }
        </>
    )
}

export default EventHome;

export async function getServerSideProps(){
  const data = await import('../../data/data.json');
  console.log(data["events_categories"]);
  return{
      props:{
        title : "Events Page",
        // data : JSON.parse(JSON.stringify(event_categories))
        data : data["events_categories"]
      }
  }
}