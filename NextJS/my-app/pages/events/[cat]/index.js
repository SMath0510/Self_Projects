function City(props){
    let data = props.data;
    return(
        <>
        <h1> {props.city} </h1>
        <nav>
            <a href="/events">Events</a>
            <a href="/about-us">About</a>
            <a href="/">Home</a>
        </nav>
        {data.map(EV =>
        <div>
            <h2>{EV.title}</h2>
            <a key={EV.id} href={`/events/${EV.id}`}>{EV.title}
            <img alt={EV.title} src={EV.image}/>
            </a>
            <p>{EV.description}</p>
        </div>
        )
        }
        </>
    )
}

export default City;

export async function getServerSideProps(context){
    const city = context["query"].cat;
    const data = await import('../../../data/data.json');
    // console.log(data["events_categories"]);
    const event_city = data["allEvents"].filter(EV =>
        EV.city == city
    )
    console.log(event_city);
    return{
        props:{
            // data : JSON.parse(JSON.stringify(event_categories))
            data : event_city,
            city : city
        }
    }
}