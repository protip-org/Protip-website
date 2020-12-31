import React from 'react';
import { ErrorDivContainer, ErrorDivContentContainer, ErrorDivH1, ErrorDivP, ErrorImg } from "./style";

const NotFound = ({ location }) => (
    <ErrorDivContainer className="error-4O4">
    <ErrorDivContentContainer className="error-content">
      <ErrorDivH1 className="error-text">Error 404</ErrorDivH1>
      <ErrorDivP>
        No match found for <strong>{location.pathname}</strong>
      </ErrorDivP>
    </ErrorDivContentContainer>
    <ErrorImg className="error-image" />
  </ErrorDivContainer>
);

export default NotFound;