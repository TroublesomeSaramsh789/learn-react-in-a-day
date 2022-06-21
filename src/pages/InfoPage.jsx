import React from "react";
import InfoComponent from "../component/InfoComponent";
import getUserData from "../api/getuserData";
function InfoPage() {

    const [data, setData] = React.useState("");
    const [error, setError] = React.useState(null);
    const [isLoading, setLoading] = React.useState(true);

    let dataMapping = data ? data.map((item, index) => {
        return <InfoComponent key={index} name={item.name} email={item.email} phoneNumber={item.phone} />
    }) : <h2>error has occured</h2>;
    React.useEffect(() => {
        if (isLoading) {
            getUserData()
                .then(data => {
                    console.log(data);
                    setData(data.data)
                    setLoading(false)
                })
                .catch(error => {
                    setError(false)
                    console.log(error)
                    setLoading(false)
                })
        }
    }, [data, isLoading, error]);
    return (
        <div className="Info">
            {isLoading ? <h2>Wait Data is Loading</h2> : dataMapping }
        </div>
    )
}

export default InfoPage
