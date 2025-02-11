import { useState } from "react";
import technician from "../../assets/Images/worker.svg";

function Technical() {
    const [subscriberName, setSubscriberName] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [email, setEmail] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [plan, setPlan] = useState("");
    const [concern, setConcern] = useState("");
    const [addInfo, setAddInfo] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        console.log({
            subscriberName,
            accountNumber,
            email,
            contactNumber,
            plan,
            concern,
            addInfo,
        });
    }

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-6">
                    <div className="card border-0 shadow">
                        <div className="card-header py-3 border-gold-7 bg-navy text-light">
                            <span className="h3 fw-bolder">
                                Having Trouble?
                            </span>
                        </div>
                        <div className="card-body">
                            <div className="mb-3 pb-3 border-bottom">
                                <p>
                                    For all your technical concerns, please
                                    fill-out the fields below so we can fix
                                    whatever is keeping you from enjoying your
                                    premium fiber experience.
                                </p>
                                <small>
                                    Kindly avoid multiple submissions for the
                                    same issue to facilitate faster resolution.
                                </small>
                            </div>
                            <form>
                                <div className="row mt-3">
                                    <div className="col-xxl-6 mt-3">
                                        <label
                                            htmlFor="subscriber_name"
                                            className="form-label"
                                        >
                                            Subscriber Name:
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="subscriber_name"
                                            value={subscriberName}
                                            onChange={(e) => {
                                                setSubscriberName(
                                                    e.target.value
                                                );
                                            }}
                                        />
                                    </div>
                                    <div className="col-xxl-6 mt-3">
                                        <label
                                            htmlFor="account_number"
                                            className="form-label"
                                        >
                                            Account Number:
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="account_number"
                                            value={accountNumber}
                                            onChange={(e) => {
                                                setAccountNumber(
                                                    e.target.value
                                                );
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="row mt-3">
                                    <div className="col">
                                        <label
                                            htmlFor="email_address"
                                            className="form-label"
                                        >
                                            Email Address:
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email_address"
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <label
                                            htmlFor="contact_number"
                                            className="form-label"
                                        >
                                            Contact Number:
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="contact_number"
                                            value={contactNumber}
                                            onChange={(e) => {
                                                setContactNumber(
                                                    e.target.value
                                                );
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <label
                                            htmlFor="subscription_plan"
                                            className="form-label"
                                        >
                                            Subscription Plan:
                                        </label>

                                        <select
                                            className="form-select"
                                            value={plan}
                                            onChange={(e) => {
                                                setPlan(e.target.value);
                                            }}
                                        >
                                            <option defaultValue hidden>
                                                SELECT SUBSCRIPTION PLAN
                                            </option>
                                            <option value="b640">
                                                BASIC 640 (59 SD PLUS 23 HD
                                                Channels)
                                            </option>
                                            <option value="p790">
                                                PREMIUM 790 (91 SD PLUS 35 HD
                                                Channels)
                                            </option>
                                            <option value="i1099">
                                                INTERNATIONAL 1099 (118 SD PLUS
                                                54 HD Channel)
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <label
                                            htmlFor="concern_type"
                                            className="form-label"
                                        >
                                            Concern Type:
                                        </label>
                                        <select
                                            className="form-select"
                                            value={concern}
                                            onChange={(e) => {
                                                setConcern(e.target.value);
                                            }}
                                        >
                                            <option defaultValue hidden>
                                                SELECT CONCERN TYPE
                                            </option>
                                            <option>DAMAGED REMOTE</option>
                                            <option>DAMAGED DIGITAL BOX</option>
                                            <option>
                                                DAMAGED DIGITAL CARD
                                            </option>
                                            <option>EXTENSION</option>
                                            <option>
                                                OTHERS (PLEASE SPECIFY BELOW)
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <label htmlFor="add-info">
                                            How can we help?
                                        </label>
                                        <textarea
                                            className="form-control"
                                            id="add-info"
                                            rows="5"
                                            value={addInfo}
                                            onChange={(e) => {
                                                setAddInfo(e.target.value);
                                            }}
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <button
                                            type="button"
                                            className="btn btn-warning fw-bolder btn-lg float-end btn-gold"
                                            onClick={handleSubmit}
                                        >
                                            SUBMIT
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-6 d-none d-lg-block py-5">
                    <img
                        className="d-block mx-auto"
                        width="400px"
                        src={technician}
                        alt="Technician"
                    />
                </div>
            </div>
        </div>
    );
}

export default Technical;
