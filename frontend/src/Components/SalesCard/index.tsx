import "./styles.css";
import NotificationButton from "../NotificatioButton";

function SalesCard() {

    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div>
                <div className="dsmeta-form-control-container">
                    <input
                        className="dsmeta-form-control"
                        type="text"
                        placeholder="01/02/2022"
                    />
                </div>
                <div className="dsmeta-form-control-container">
                    <input
                        className="dsmeta-form-control"
                        type="text"
                        placeholder="30/04/2022"
                    />
                </div>
            </div>
            <div>
                <table className="dsmeta-sales-table">
                    <thead>
                        <tr>
                            <th className="show992">Id</th>
                            <th className="show576">Data</th>
                            <th>Vendendor</th>
                            <th className="show992">Visitas</th>
                            <th className="show992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="show992">123</td>
                            <td className="show576">20/08/2022</td>
                            <td>Anakin</td>
                            <td className="show992">15</td>
                            <td className="show992">25</td>
                            <td>R$55300.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">456</td>
                            <td className="show576">07/09/2021</td>
                            <td>Luke</td>
                            <td className="show992">45</td>
                            <td className="show992">55</td>
                            <td>R$100000.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">789</td>
                            <td className="show576">23/12/2020</td>
                            <td>Leia</td>
                            <td className="show992">75</td>
                            <td className="show992">85</td>
                            <td>R$200000.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default SalesCard; 