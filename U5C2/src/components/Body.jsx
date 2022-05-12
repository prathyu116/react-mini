const Body = (props) => {
    // console.log(props);

    return (
        <tr className="row">
            <td className="first_name">{props.data.first_name}</td>
            <td className="last_name">{props.data.last_name}</td>
            <td className="email">{props.data.email}</td>
            <td className="gender">{props.data.gender}</td>
            <td className="age">{props.data.age}</td>
            <td className="tenth_score">{props.data.tenth_score}</td>
            <td className="twelth_score">{props.data.twelth_score}</td>
            <td className="preferred_branch">{props.data.preferred_branch}</td>
        </tr>
    )
}

export { Body }