import { Pencil, Trash } from "react-bootstrap-icons";

function EmployeeTable({ currentEmployees, cols }) {
    return (
        <table className="table table-borderless table-striped shadow fs-5">
            <thead className="text-light bg-navy border-admin">
                <tr>
                    {cols.map((col, index) => {
                        return (
                            <th
                                key={index}
                                className={`${
                                    index === cols.length - 1 ? "w-15" : ""
                                }`}
                            >
                                {col}
                            </th>
                        );
                    })}
                </tr>
            </thead>
            <tbody>
                {currentEmployees.map(
                    ({
                        prefix,
                        emp_ctr,
                        personnelName: { firstName, middleName, lastName },
                        contactNumber,
                        dateEmployed,
                        roleID: { description },
                        _id,
                    }) => {
                        const suffix = emp_ctr.toString().padStart(3, "0");
                        const empNumber = `${prefix}${suffix}`;
                        const name = `${firstName} ${middleName[0]}. ${lastName}`;
                        const localDate = new Date(dateEmployed);
                        const localDateString = localDate
                            .toLocaleDateString(undefined, {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })
                            .toUpperCase();

                        return (
                            <tr key={_id}>
                                <td className="align-middle">{empNumber}</td>
                                <td className="align-middle">{name}</td>
                                <td className="align-middle">{description}</td>
                                <td className="align-middle">
                                    {contactNumber}
                                </td>
                                <td className="align-middle">
                                    {localDateString}
                                </td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-navy me-2"
                                    >
                                        <Pencil className="me-2" /> EDIT
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-danger btn-delete"
                                    >
                                        <Trash className="me-2" /> DELETE
                                    </button>
                                </td>
                            </tr>
                        );
                    }
                )}
            </tbody>
        </table>
    );
}

export default EmployeeTable;
