import React, { useEffect, useState } from "react";
import { UseIntersection } from "../../hooks/useIntersection";
import Row from "./Row";

import styles from "./Table.module.scss";
import TableHeader from "./TableHeader";

const Table = ({ data, isCompany }) => {
  const [refTable, entrys] = UseIntersection({
    threshold: 1,
    rootMargin: "0px",
  });
  const [page, setPage] = useState(1);
  useEffect(() => {
    if (
      entrys?.isIntersecting &&
      !(data?.slice(0, page * 10).length === data?.length)
    ) {
      setPage((state) => state + 1);
    }
  }, [entrys?.isIntersecting]);

  return (
    <>
      <table className={styles.table}>
        <TableHeader isCompany={isCompany} />
      </table>
      <div className={styles.table_wrapper}>
        <table className={styles.table}>
          <tbody>
            {data.slice(0, page * 25).map((el, idx) => (
              <Row key={el.id} idx={idx} data={el} />
            ))}
          </tbody>
        </table>
        <div ref={refTable} />
      </div>
    </>
  );
};

export default Table;
