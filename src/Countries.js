import React from "react";

export default class Countries extends React.Component {

    render() {
        const countries = ["Fran22ce", "Engl222and", "USA", "Is22rael", "Belgium"]
        return (
            <ul>
                {
                    countries.map((country) => <li>{country}</li>
                    )
                }
            </ul>
        )
    }
}