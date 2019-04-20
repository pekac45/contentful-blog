/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import Template from '../components/layout';

export class PageNotFound extends Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');

    return (
      <div>
        <Template>
          <Helmet title={siteTitle} />
          <h2>404</h2>
        </Template>
      </div>
    );
  }
}

export default PageNotFound;
