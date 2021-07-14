import BootstrapTable from 'react-bootstrap-table-next';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';


const Table = ({ products }) => {
  const columns = [
    {
      dataField: 'rank',
      text: 'Rank',
    },
    {
      dataField: 'name',
      text: 'Name',
    },
    {
      dataField: 'points',
      text: 'Points',
    },
  ];

  return (
    <BootstrapTable
      bootstrap4={true}
      parentClassName="table table-bordered table-hover"
      headerClasses="thead-dark"
      keyField="id"
      data={products}
      columns={columns}
    />
  );
};

export default Table;
