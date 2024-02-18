const Page = (props) =>{
    return(
        <>
        <h1> {props.title} </h1>
        <nav>
            <a href="/events">Events</a>
            <a href="/about-us">About</a>
            <a href="/">Home</a>
        </nav>
        </>
    )
}

export default Page;

export function getServerSideProps(){
    return{
        props:{
            title: 'About Us'
        }
    }
}

