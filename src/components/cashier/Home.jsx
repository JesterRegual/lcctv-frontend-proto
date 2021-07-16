import { Wallet2, CardChecklist } from "react-bootstrap-icons";
import Button from "../Button";
import NavbarPortal from "../NavbarPortal";

function Home() {
    return (
        <>
            <NavbarPortal title="CASHIER" name="cashier" user="Cashier123" />
            <div className="container-fluid">
                <div className="row mt-3">
                    <div className="col">
                        <div className="row my-4 pt-4 px-4 justify-content-center">
                            <Button
                                icon={
                                    <Wallet2
                                        color="white"
                                        size="8rem"
                                        className="mb-2"
                                    />
                                }
                                title="ACCOUNT PAYMENT"
                                name="cashier"
                                path="payment"
                            />
                            <Button
                                icon={
                                    <CardChecklist
                                        color="white"
                                        size="8rem"
                                        className="mb-2"
                                    />
                                }
                                title="PAYMENT LIST"
                                name="cashier"
                                path="list"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
