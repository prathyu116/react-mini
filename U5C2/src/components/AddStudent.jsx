import { useState } from "react";

export const AddStudent = () => {
    const [FormData, setFormData] = useState(
        {
            "first_name": "",
            "last_name": "",
            "email": "",
            "gender": "",
            "age": "",
            "tenth_score": "",
            "twelth_score": "",
            "preferred_branch": ""
        }
    );

    const [Text, setText] = useState(null);

    const handleChange = (e) => {
        setText(null);
        setFormData({
            ...FormData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // validations for data entered
        let flag = 1;
        let errorText = "";

        if (FormData.first_name === ""
            || FormData.last_name === ""
            || FormData.email === ""
            || FormData.gender === ""
            || FormData.age === ""
            || FormData.tenth_score === ""
            || FormData.twelth_score === ""
            || FormData.preferred_branch === "") {
            flag = 0;
            errorText += " Please fill all the fields.";
        }

        if (Number(FormData.age) > 50) {
            flag = 0;
            errorText += " Age cannot be greater than 50.";
        }

        if (Number(FormData.tenth_score) > 100 || Number(FormData.twelth_score) > 100) {
            flag = 0;
            errorText += " Percentile cannot be greater than 100.";
        }

        if (!flag) {
            setText(errorText);
            return;
        }



        fetch("http://localhost:8080/students", {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(FormData),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
        setText("Data successfully submitted!");
        setFormData(
            {
                "first_name": "",
                "last_name": "",
                "email": "",
                "gender": "",
                "age": "",
                "tenth_score": "",
                "twelth_score": "",
                "preferred_branch": ""
            }
        )


    }
    return (
        <form className="addstudent" onSubmit={handleSubmit}>
            <div>
                Firstname:{" "}
                <input
                    value={FormData.first_name}
                    onChange={handleChange}
                    type="text"
                    name="first_name"
                    className="first_name"
                    placeholder="enter first name"
                />
            </div>
            <div>
                {" "}
                Last Name:
                <input
                    value={FormData.last_name}
                    onChange={handleChange}
                    type="text"
                    name="last_name"
                    className="last_name"
                    placeholder="enter last name"
                />
            </div>
            <div>
                {" "}
                Email:
                <input
                    value={FormData.email}
                    onChange={handleChange}
                    type="email"
                    name="email"
                    className="email"
                    placeholder="enter email"
                />
            </div>

            <div>
                Gender: {/* NOTE: radio boxes only work when they have same `name`. */}
                <div>
                    Male
                    <input
                        onChange={handleChange}
                        name="gender"
                        className="male"
                        type="radio"
                        value={"male"}
                    />{" "}
                    Female{" "}
                    <input
                        onChange={handleChange}
                        name="gender"
                        className="female"
                        type="radio"
                        value={"female"}
                    />
                </div>
            </div>
            <div>
                Age{" "}
                <input
                    value={FormData.age}
                    onChange={handleChange}
                    type="number"
                    name="age"
                    className="age"
                    placeholder="enter age"
                />
            </div>
            <div>
                Tenth Score:{" "}
                <input
                    value={FormData.tenth_score}
                    onChange={handleChange}
                    type="number"
                    name="tenth_score"
                    className="tenth_score"
                    placeholder="enter 10th score"
                />{" "}
            </div>
            <div>
                Twelth Score:{" "}
                <input
                    value={FormData.twelth_score}
                    onChange={handleChange}
                    type="number"
                    name="twelth_score"
                    className="twelth_score"
                    placeholder="enter 12th score"
                />{" "}
            </div>
            <div>
                <select
                    onChange={handleChange}
                    // value={FormData.preferred_branch} // select dropdown needs both value and onChange attributes
                    name="preferred_branch"
                    className="preferred_branch"
                >
                    <option value="">--</option>
                    <option value="law">law</option>
                    <option value="commerce">commerce</option>
                    <option value="science">science</option>
                    <option value="sports">sports</option>
                    <option value="arts">arts</option>
                    <option value="acting">acting</option>
                </select>
            </div>

            <input className="submit" type="submit" value="Submit" />

            <div
                className="error">
                {Text}
            </div>
            {
                // <div className="error"></div>
                // show this div with proper error before submitting form, if there's anything not provided
                // eg: first name missing, age cannot be greater than 100 etc
            }
        </form>
    );
};