import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
  SizePerPageDropdownStandalone,
} from "react-bootstrap-table2-paginator";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { isUndefined } from "util";

import { request } from "../helper/helper";

const { SearchBar } = Search;

export default class DataGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
    };

    if (this.props.showDeleteButton && !this.existsColumn("Eliminar"))
      this.props.columns.push(this.getDeleteButton());
  }
  componentDidMount() {
    this.getData();
  }
  getData() {
    request
      .get(this.props.url)
      .then((response) => {
        this.setState({ rows: response.data });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  existsColumn(colText) {
    let col = this.props.columns.find((column) => column.text === colText);
    return !isUndefined(col);
  }

  getDeleteButton() {
    return {
      text: "Eliminar",
      formatter: (cell, row) => {
        return (
          <Button
            variant="dark"
            onClick={() => this.props.onClickDeleteButton(row)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </Button>
        );
      },
    };
  }

  render() {
    const options = {
      custom: true,
      totalSize: this.state.rows.length,
    };
    return (
      <ToolkitProvider
        keyField="tp"
        data={this.state.rows}
        columns={this.props.columns}
        search
      >
        {(props) => (
          <div>
            <hr />
            <PaginationProvider pagination={paginationFactory(options)}>
              {({ paginationProps, paginationTableProps }) => (
                <div>
                  <Row>
                    <Col>
                      <SizePerPageDropdownStandalone {...paginationProps} />
                    </Col>
                    <Col>
                      <SearchBar {...props.searchProps} />
                    </Col>
                  </Row>
                  <BootstrapTable
                    keyField="bt"
                    data={this.state.rows}
                    columns={this.props.columns}
                    {...paginationTableProps}
                    {...props.baseProps}
                  />
                  <PaginationListStandalone {...paginationProps} />
                </div>
              )}
            </PaginationProvider>
          </div>
        )}
      </ToolkitProvider>
    );
  }
}
