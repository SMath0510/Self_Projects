function ID({element}){
    return(
        <>
        <h1> {element.title} </h1>
        <nav>
            <a href="/events">Events</a>
            <a href="/about-us">About</a>
            <a href="/">Home</a>
        </nav>
        <div>
        <img src = {element.image} alt = {element.title}/>
        <p>{element.description}</p>
        {/* <p>Contacts :</p>
        {
            element.emails_registered.forEach(
                ele => <p>{ele}</p>
            )
        } */}
        </div>
        </>
    )
}

export default ID;

export async function getServerSideProps(context){
    const id = (context.params.id)
    const data = await import('../../../data/data.json')
    const element = data["allEvents"].filter(ele =>
        ele.id == id
    )
    console.log(element)
    return{
        props:{
            element : element[0],
        }
    }
}