import { useEffect, useState } from "react";

const Usereview = () => {
    const [reviewer, setReviewer] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setReviewer(data))
    }, [])

    return [reviewer, setReviewer]

}

export default Usereview;