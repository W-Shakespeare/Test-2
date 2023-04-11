import { useState, useEffect } from "react";
import { Search } from "../../components/Search/Search";
import { ICustomer } from "../../models/ICustomers";
import { useGetCustomerListQuery } from "../../services/Customers";
import "./Customers.scss";
import { Pagination } from "../../components/Pagination/Pagination";
import { Status } from "../../components/Status/Status";

const thead = [
  "Customer Name",
  "Company",
  "Phone Number",
  "Email",
  "Country",
  "Status",
];

const Customers = () => {
  const { data: customers = [], isLoading } = useGetCustomerListQuery("");
  const [searchValue, setSearchValue] = useState("");
  const itemsPerPage = 8;

  const filteredBySearchValueFunc = (customer: ICustomer) =>
    Object.entries(customer).some(([key, value]) => {
      if (key === "status") return;
      return value.includes(searchValue);
    });

  const filteredCustomers = customers?.filter(filteredBySearchValueFunc);

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filteredCustomers?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredCustomers?.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset =
      (event.selected * itemsPerPage) % filteredCustomers?.length;
    setItemOffset(newOffset);
  };

  return (
    <section className="page customers">
      <div className="greeting">Hello Evano 👋🏼,</div>

      <div className="customers-content">
        <div className="row">
          <div>
            <div className="content-title">All Customers</div>
            <div className="content-subtitle">Active Members</div>
          </div>

          <div className="wrapper-search">
            <Search onChange={(val) => setSearchValue(val)} />
          </div>
        </div>

        <table className="customers-table">
          <thead>
            <tr>
              {thead.map((text) => (
                <th key={text}>{text}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {isLoading && "...Loading"}
            {currentItems?.map((customer) => {
              return (
                <tr key={customer.id}>
                  <td>{customer.name}</td>
                  <td>{customer.company}</td>
                  <td>{customer.phoneNumber}</td>
                  <td>{customer.email}</td>
                  <td>{customer.country}</td>
                  <td>
                    <Status active={customer.status} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="customers-content-footer">
          <div className="customers-content-footer-text">
            Showing data 1 to 8 of 256K entries
          </div>
          <div className="wrapper-pagination">
            <Pagination
              handlePageClick={handlePageClick}
              pageCount={pageCount}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
