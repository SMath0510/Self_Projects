function HomePage (props){
  // let data = props[data];
  return(
    <>
    <h1> {props.title} </h1>
    <nav>
        <a href="/events">Events</a>
        <a href="/about-us">About</a>
        <a href="/">Home</a>
    </nav>
    <main>
      {props.data.map((EV)=>
        <div>
          {/* <h2>{EV.title}</h2> */}
          <a key={EV.id} href={`/events/${EV.id}`}><h2>{EV.title}</h2> 
          <img alt={EV.title} src={EV.image}/>
          </a>
          {/* <p>{EV.description}</p> */}
        </div>
      )
      }
      <p>{typeof(data)}</p>
    </main>
    </>
  )
}

export default HomePage;

export async function getServerSideProps(){
  // information here remains with us and isn't passed on to the client
  // the client gets the info that is sent through the props
  const data = await import('../data/data.json');
  console.log(data["events_categories"]);
  return{
      props:{
        title : "Home Page",
        // data : JSON.parse(JSON.stringify(event_categories))
        data : data["events_categories"]
      }
  }
}