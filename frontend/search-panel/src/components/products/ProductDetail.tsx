import React, { useEffect, useState } from "react";
//import axios from "axios";
import { RouteComponentProps, withRouter } from "react-router";
//import { useParams } from "react-router-dom";
import { ProductData } from "../../type.d";
import api from "../../api/api";

interface RouteParams {
  id: string;
}

type ProductDetailProps = RouteComponentProps<RouteParams>;

// interface ProductDetailProps {
//   match: {
//     isExact: boolean;
//     params: any;
//     path: string;
//     url: string;
//   };
// }

const ProductDetail: React.FC<ProductDetailProps> = ({ match }) => {
  //const params = useParams<RouteParams>();

  //const [id, setId] = useState("");

  //console.log(id);

  const [result, setResult] = useState<ProductData | null>(null);

  useEffect(() => {
    //console.log(match);

    const id = parseInt(match.params.id, 10);
    //console.log(id);
    // console.log(params);

    // setId(params.id);
    if (id) {
      const getProductInfo = async () => {
        const response = await api.get("export/products", {
          params: {
            id: id,
          },
        });
        const data = response.data[0];
        //console.log(data);

        // Return an array, but only have one element
        setResult(data);
      };
      getProductInfo();
    }
  }, []);

  if (!result)
    return (
      <div className="ui segment">
        <div className="ui active dimmer">
          <div className="ui indeterminate text loader">Preparing Files</div>
        </div>
        <p></p>
      </div>
    );

  return (
    <div>
      <table className="dense-table">
        <thead>
          <tr>
            <th colSpan={2}>
              Detailed Information
              {/* <div className="print-btn-group">
                <div tabIndex={0} className="sy-btn" onClick={handlePrint}>
                  Print
                </div>
              </div> */}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bill Number</td>
            <td>{result.billno}</td>
          </tr>
          <tr>
            <td>4Digit</td>
            <td>{result.number_4digit}</td>
          </tr>
          <tr>
            <td>Date</td>
            <td>{result.date}</td>
          </tr>
          <tr>
            <td>HSCode</td>
            <td>{result.hscode}</td>
          </tr>
          <tr>
            <td>Product</td>
            <td>{result.product}</td>
          </tr>
          <tr>
            <td>Quantity</td>
            <td>{result.quantity}</td>
          </tr>
          <tr>
            <td>Unit</td>
            <td>{result.unit}</td>
          </tr>
          <tr>
            <td>Item_Rate_INV</td>
            <td>{result.item_rate_inv}</td>
          </tr>

          <tr>
            <td>Currency</td>
            <td>{result.currency}</td>
          </tr>

          <tr>
            <td>Total_Amount_INV_FC</td>
            <td>{result.total_amount_inv_fc}</td>
          </tr>

          <tr>
            <td>FOB INR</td>
            <td>{result.fob_inr}</td>
          </tr>

          <tr>
            <td>Foreign Port</td>
            <td>{result.foreignport}</td>
          </tr>

          <tr>
            <td>Foreign Country</td>
            <td>{result.foreigncountry}</td>
          </tr>

          <tr>
            <td>Indian Port</td>
            <td>{result.indianport}</td>
          </tr>

          <tr>
            <td>IEC</td>
            <td>{result.iec}</td>
          </tr>

          <tr>
            <td>Indian Company</td>
            <td>{result.indiancompany}</td>
          </tr>

          <tr>
            <td>Address1</td>
            <td>{result.address1}</td>
          </tr>

          <tr>
            <td>Address2</td>
            <td>{result.address2 ? result.address2 : "No data"}</td>
          </tr>

          <tr>
            <td>City</td>
            <td>{result.city}</td>
          </tr>

          <tr>
            <td>Foreign Company</td>
            <td>{result.foreigncompany}</td>
          </tr>

          <tr>
            <td>Invoice Number</td>
            <td>{result.invoice_no}</td>
          </tr>

          <tr>
            <td>CUSH</td>
            <td>{result.cush}</td>
          </tr>

          <tr>
            <td>IEC_PIN</td>
            <td>{result.iec_pin}</td>
          </tr>

          <tr>
            <td>Item Number</td>
            <td>{result.item_no}</td>
          </tr>

          <tr>
            <td>Item_Rate_INR</td>
            <td>{result.item_rate_inr}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default withRouter(ProductDetail);
