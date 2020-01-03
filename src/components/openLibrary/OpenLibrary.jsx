import React from "react";
import PropTypes from 'prop-types';


const Header = props => {
  return <th>{props.headings}</th>;
};

export const Headings = props => {
  const headings = props.headings.map((header, idx) => {
    return <Header key={idx} headings={header} />;
  });
  return (
    <thead>
      <tr>{headings}</tr>
    </thead>
  );
};

Headings.propTypes = {
  headings: PropTypes.array.isRequired
}


const Row = props => {
  return (
    <tr>
      <td>{props.data.when}</td>
      <td>{props.data.who}</td>
      <td>{props.data.description}</td>
    </tr>
  );
};


export const Rows = props => {
  const rows = props.data.map((row, idx) => {
    return <Row key={idx} data={row} />;
  });
  return <tbody>{rows}</tbody>;
};

Rows.propTypes = {
  data: PropTypes.array.isRequired
}


export const DataTable = props => {
  return (
    <table>
        {props.children}
    </table>
  )
}

