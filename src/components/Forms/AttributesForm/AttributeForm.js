import React, { Component } from 'react'
import { Form } from 'formik';

import { AttributeFormField } from '../../Formik/Fields'

import './styles.scss';

const renderAttributeFormField = (item, name, type, idx) => (
  <AttributeFormField key={idx} item={item} type={type} name={name} />
);

class AttributeForm extends Component {
  componentDidUpdate(prevProps) {
    if(prevProps.values !== this.props.values) {
      this.handleValuesUpdate();
    }
  }
  handleValuesUpdate() {
    document.getElementById('attribute-form-submit').click()
  }
  render() {
    return (
      <Form className="product-attributes-container" autoComplete="off">
        {this.props.initialValues.map((attributeGroup) => 
          <div className='product-attribute'>
            <span className='product-attribute-heading'>{attributeGroup.name}:</span>
            <div className='product-attribute-container'>
              {attributeGroup.items.map((item) => renderAttributeFormField(item, attributeGroup.name.toLowerCase(), attributeGroup.type))}
            </div>
          </div>
        )}
        <button id="attribute-form-submit" type="submit" className='attribute-form-btn'>
          Add to cart
        </button>
      </Form>
    )
  }
}

export default AttributeForm