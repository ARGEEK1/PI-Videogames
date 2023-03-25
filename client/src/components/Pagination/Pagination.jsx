import React from "react";
import styles from "./Pagination.module.css";

const Pagination = (props) => {

  return (
    <div className={styles.pagination}>
      <button
        className={styles.btn}
        disabled={props.currentPage === 1 || props.maxPages === 0}
        onClick={props.prevPage}
      >
        {'<'}
      </button>
      <span className={styles.text}>
        {props.maxPages === 0 ? '0' : props.currentPage} of {props.maxPages}
      </span>
      <button
        className={styles.btn}
        disabled={props.currentPage === props.maxPages || props.maxPages === 0}
        onClick={props.nextPage}
      >
        {'>'}
      </button>
    </div>
  );
};

export default Pagination;