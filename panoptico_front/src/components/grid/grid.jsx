import { useState, useEffect } from "react";
import { Row, Col, Button, Table, Form, Pagination } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { request } from "../helper/helper";

const PAGE_SIZE_OPTIONS = [5, 10, 25, 50];

export default function DataGrid({ url, columns, showDeleteButton, onClickDeleteButton }) {
  const [rows, setRows] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [sizePerPage, setSizePerPage] = useState(10);

  useEffect(() => {
    request.get(url).then((res) => setRows(res.data)).catch(console.error);
  }, [url]);

  const visibleColumns = columns.filter((c) => !c.hidden);

  const filtered = rows.filter((row) =>
    visibleColumns.some((col) =>
      String(row[col.dataField] ?? "").toLowerCase().includes(search.toLowerCase())
    )
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / sizePerPage));
  const currentPage = Math.min(page, totalPages);
  const paginated = filtered.slice((currentPage - 1) * sizePerPage, currentPage * sizePerPage);

  const handleSearch = (e) => { setSearch(e.target.value); setPage(1); };
  const handleSizeChange = (e) => { setSizePerPage(Number(e.target.value)); setPage(1); };

  return (
    <div>
      <Row className="align-items-center mb-2">
        <Col xs="auto">
          <Form.Select size="sm" value={sizePerPage} onChange={handleSizeChange} style={{ width: "80px" }}>
            {PAGE_SIZE_OPTIONS.map((n) => <option key={n} value={n}>{n}</option>)}
          </Form.Select>
        </Col>
        <Col />
        <Col xs="auto">
          <Form.Control size="sm" placeholder="Buscar..." value={search} onChange={handleSearch} />
        </Col>
      </Row>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            {visibleColumns.map((col) => <th key={col.dataField}>{col.text}</th>)}
            {showDeleteButton && <th>Eliminar</th>}
          </tr>
        </thead>
        <tbody>
          {paginated.length === 0 ? (
            <tr>
              <td colSpan={visibleColumns.length + (showDeleteButton ? 1 : 0)} className="text-center text-muted">
                Sin resultados
              </td>
            </tr>
          ) : (
            paginated.map((row, i) => (
              <tr key={row._id ?? i}>
                {visibleColumns.map((col) => <td key={col.dataField}>{row[col.dataField]}</td>)}
                {showDeleteButton && (
                  <td>
                    <Button variant="dark" size="sm" onClick={() => onClickDeleteButton(row)}>
                      <FontAwesomeIcon icon={faTrash} />
                    </Button>
                  </td>
                )}
              </tr>
            ))
          )}
        </tbody>
      </Table>

      <Row className="align-items-center">
        <Col className="text-muted small">
          Mostrando {paginated.length} de {filtered.length} registros
        </Col>
        <Col xs="auto">
          <Pagination size="sm" className="mb-0">
            <Pagination.First onClick={() => setPage(1)} disabled={currentPage === 1} />
            <Pagination.Prev onClick={() => setPage((p) => p - 1)} disabled={currentPage === 1} />
            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter((p) => p === 1 || p === totalPages || Math.abs(p - currentPage) <= 1)
              .reduce((acc, p, idx, arr) => {
                if (idx > 0 && p - arr[idx - 1] > 1) acc.push("...");
                acc.push(p);
                return acc;
              }, [])
              .map((p, i) =>
                p === "..." ? (
                  <Pagination.Ellipsis key={`e-${i}`} disabled />
                ) : (
                  <Pagination.Item key={p} active={p === currentPage} onClick={() => setPage(p)}>
                    {p}
                  </Pagination.Item>
                )
              )}
            <Pagination.Next onClick={() => setPage((p) => p + 1)} disabled={currentPage === totalPages} />
            <Pagination.Last onClick={() => setPage(totalPages)} disabled={currentPage === totalPages} />
          </Pagination>
        </Col>
      </Row>
    </div>
  );
}
