//regular function
const InfoComponent = function (props) {
    return (
        <article >
            <h1>Name:{props.name}</h1>
            <h5>Email: {props.email}</h5>
            <h5>Phone: {props.phoneNumber}</h5>

        </article>
    )
}

export default InfoComponent;