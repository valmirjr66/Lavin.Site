//#region imports
import React from 'react';
import { Wrapper } from './index.style';
//#endregion

const Products = ({ content }) => {
    return (
        <Wrapper>{content}</Wrapper>
    );
}

Products.propTypes = {
}

export default Products;
