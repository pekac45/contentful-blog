/* eslint-disable no-restricted-globals */
import React from 'react';
import Helmet from 'react-helmet';
import Template from '../components/layout';

const PageNotFound = () => {
  const siteTitle = '404 | Henrik Salomon';

  return (
    <div>
      <Template>
        <Helmet title={siteTitle} />
        <div className="row">
          <div
            className="col-lg-12
            col-md-12
            widget
            text-center
            u-mar-top-medium
            u-mar-bot-medium"
          >
            <h2>404</h2>
            <h4>There is nothing here! Nothing!</h4>
          </div>
        </div>
      </Template>
    </div>
  );
};

export default PageNotFound;
